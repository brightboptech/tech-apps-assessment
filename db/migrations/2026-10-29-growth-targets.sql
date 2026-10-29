-- Fix #22 step 1 (2026-10-29): expected-growth rules, per-student overrides, change log, and the lock.
-- A class's rule and overrides lock once any post-test result exists for it (enforced here, not just
-- in the UI). Option A: a class that never had a rule may get one once after post-tests began; that
-- change is logged with after_post_tests = true and shown on the report. Overrides never change after
-- the lock. Rollback is at the bottom of this file.

begin;

-- 1. Growth rule on the class's assessment setup
alter table public.assessment_configs
  add column growth_rule        jsonb,
  add column growth_rule_set_at timestamptz;
-- Accepted shapes (enforced by set_growth_rule):
--   {"type":"gap",   "k":0.5,     "mastery":90}      target = pre + k*(100-pre)
--   {"type":"fixed", "points":20, "mastery":null}    target = min(100, pre + points)
--   {"type":"bands", "bands":[{"from":0,"gain":25},{"from":40,"gain":20},{"from":70,"gain":10},{"from":90,"gain":0}], "mastery":90}
--      a pre-score uses the last band whose "from" <= pre; first band must start at 0
-- "mastery": optional; a post-score >= mastery always meets the target.

-- 2. Browser roles can no longer write assessment_configs directly (the app never does; the
--    wizard writes through attach_assessment_config, which runs as the table owner). This stops
--    anyone editing growth_rule around the lock.
revoke insert, update, delete, truncate, trigger, references on public.assessment_configs from anon, authenticated;

-- 3. Per-student overrides (by student number; no names, no pass codes)
create table public.growth_target_overrides (
  assessment_config_id uuid         not null references public.assessment_configs(id) on delete cascade,
  student_number       int          not null check (student_number > 0),
  target_pct           numeric(5,1) not null check (target_pct between 0 and 100),
  teacher_id           uuid         not null references public.teachers(id),
  updated_at           timestamptz  not null default now(),
  primary key (assessment_config_id, student_number)
);

-- 4. Change log
create table public.growth_rule_log (
  id                   bigint generated always as identity primary key,
  assessment_config_id uuid        not null references public.assessment_configs(id) on delete cascade,
  teacher_id           uuid        not null,
  changed_at           timestamptz not null default now(),
  action               text        not null check (action in ('set_rule','clear_rule','set_override','clear_override')),
  student_number       int,
  old_value            jsonb,
  new_value            jsonb,
  after_post_tests     boolean     not null default false
);
create index on public.growth_rule_log (assessment_config_id, changed_at);

-- 5. Read access only; all writes go through the functions below
alter table public.growth_target_overrides enable row level security;
alter table public.growth_rule_log         enable row level security;
create policy "Teachers read own overrides" on public.growth_target_overrides for select
  using (teacher_id = auth.uid() or (auth.jwt() ->> 'email') = 'brightboptech@gmail.com');
create policy "Teachers read own growth log" on public.growth_rule_log for select
  using (teacher_id = auth.uid() or (auth.jwt() ->> 'email') = 'brightboptech@gmail.com');
revoke all on public.growth_target_overrides, public.growth_rule_log from anon, authenticated;
grant select on public.growth_target_overrides, public.growth_rule_log to authenticated;

-- 6. Lock time = earliest post-test submission among the passes linked to this setup (null = unlocked)
create function public.growth_rule_locked_at(p_config uuid)
returns timestamptz language plpgsql stable security definer set search_path = public as $$
declare v_owner uuid;
begin
  select teacher_id into v_owner from assessment_configs where id = p_config;
  if v_owner is null then raise exception 'Class setup not found.'; end if;
  if v_owner <> auth.uid() and coalesce(auth.jwt() ->> 'email', '') <> 'brightboptech@gmail.com' then
    raise exception 'Not your class.';
  end if;
  return (select min(ar.created_at)
            from assessment_responses ar
            join tokens t        on t.token = ar.student_token and t.test_type = 'post'
            join token_configs tc on tc.token = t.token and tc.assessment_config_id = p_config);
end $$;

-- 7. Set or clear (p_rule null) the rule. Locked once a post-test exists, except Option A:
--    a class that never had a rule may get one once after post-tests began (logged + flagged).
create function public.set_growth_rule(p_config uuid, p_rule jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_cfg assessment_configs%rowtype; v_locked timestamptz; v_late boolean := false;
  v_type text; v_mastery numeric; v_clean jsonb; v_prev numeric := -1; b jsonb;
begin
  select * into v_cfg from assessment_configs where id = p_config for update;
  if not found then raise exception 'Class setup not found.'; end if;
  if v_cfg.teacher_id <> auth.uid() then raise exception 'Not your class.'; end if;

  v_locked := growth_rule_locked_at(p_config);
  if v_locked is not null then
    if v_cfg.growth_rule is null and p_rule is not null
       and not exists (select 1 from growth_rule_log where assessment_config_id = p_config and after_post_tests) then
      v_late := true;                                   -- Option A: one first-time set
    else
      raise exception 'Locked since %: post-test results exist for this class.', to_char(v_locked, 'Mon DD, YYYY');
    end if;
  end if;

  if p_rule is not null then                           -- validate + keep only known keys
    v_type := p_rule ->> 'type';
    v_mastery := nullif(p_rule ->> 'mastery', '')::numeric;
    if v_mastery is not null and (v_mastery <= 0 or v_mastery > 100) then raise exception 'Mastery must be 1–100.'; end if;
    if v_type = 'gap' then
      if (p_rule ->> 'k')::numeric not between 0.01 and 1 then raise exception 'Gap fraction must be 0.01–1.'; end if;
      v_clean := jsonb_build_object('type', 'gap', 'k', (p_rule ->> 'k')::numeric, 'mastery', v_mastery);
    elsif v_type = 'fixed' then
      if (p_rule ->> 'points')::numeric not between 0.1 and 100 then raise exception 'Points must be 0.1–100.'; end if;
      v_clean := jsonb_build_object('type', 'fixed', 'points', (p_rule ->> 'points')::numeric, 'mastery', v_mastery);
    elsif v_type = 'bands' then
      if jsonb_typeof(p_rule -> 'bands') <> 'array' or jsonb_array_length(p_rule -> 'bands') not between 1 and 10 then
        raise exception 'Bands: 1–10 required.'; end if;
      for b in select * from jsonb_array_elements(p_rule -> 'bands') loop
        if (b ->> 'from')::numeric <= v_prev or (b ->> 'from')::numeric not between 0 and 100
           or (b ->> 'gain')::numeric not between 0 and 100 then raise exception 'Bands must ascend from 0, gains 0–100.'; end if;
        v_prev := (b ->> 'from')::numeric;
      end loop;
      if ((p_rule -> 'bands' -> 0) ->> 'from')::numeric <> 0 then raise exception 'First band must start at 0.'; end if;
      v_clean := jsonb_build_object('type', 'bands', 'mastery', v_mastery, 'bands',
        (select jsonb_agg(jsonb_build_object('from', (x ->> 'from')::numeric, 'gain', (x ->> 'gain')::numeric)) from jsonb_array_elements(p_rule -> 'bands') x));
    else
      raise exception 'Unknown rule type.';
    end if;
  end if;

  update assessment_configs set growth_rule = v_clean, growth_rule_set_at = now() where id = p_config;
  insert into growth_rule_log (assessment_config_id, teacher_id, action, old_value, new_value, after_post_tests)
  values (p_config, auth.uid(), case when v_clean is null then 'clear_rule' else 'set_rule' end, v_cfg.growth_rule, v_clean, v_late);
end $$;

-- 8. Set or clear (p_target null) one student's override. Locked once a post-test exists.
create function public.set_growth_override(p_config uuid, p_student_number int, p_target numeric)
returns void language plpgsql security definer set search_path = public as $$
declare v_owner uuid; v_locked timestamptz; v_old numeric;
begin
  select teacher_id into v_owner from assessment_configs where id = p_config for update;
  if v_owner is null then raise exception 'Class setup not found.'; end if;
  if v_owner <> auth.uid() then raise exception 'Not your class.'; end if;
  if p_student_number is null or p_student_number < 1 then raise exception 'Invalid student number.'; end if;
  if p_target is not null and p_target not between 0 and 100 then raise exception 'Target must be 0–100.'; end if;
  v_locked := growth_rule_locked_at(p_config);
  if v_locked is not null then
    raise exception 'Locked since %: post-test results exist for this class.', to_char(v_locked, 'Mon DD, YYYY');
  end if;
  select target_pct into v_old from growth_target_overrides where assessment_config_id = p_config and student_number = p_student_number;
  if p_target is null then
    delete from growth_target_overrides where assessment_config_id = p_config and student_number = p_student_number;
  else
    insert into growth_target_overrides (assessment_config_id, student_number, target_pct, teacher_id)
    values (p_config, p_student_number, round(p_target, 1), auth.uid())
    on conflict (assessment_config_id, student_number) do update set target_pct = excluded.target_pct, updated_at = now();
  end if;
  insert into growth_rule_log (assessment_config_id, teacher_id, action, student_number, old_value, new_value)
  values (p_config, auth.uid(), case when p_target is null then 'clear_override' else 'set_override' end,
          p_student_number, to_jsonb(v_old), to_jsonb(round(p_target, 1)));
end $$;

revoke all on function public.growth_rule_locked_at(uuid), public.set_growth_rule(uuid, jsonb),
                       public.set_growth_override(uuid, int, numeric) from public, anon;
grant execute on function public.growth_rule_locked_at(uuid), public.set_growth_rule(uuid, jsonb),
                          public.set_growth_override(uuid, int, numeric) to authenticated;
commit;

-- ── ROLLBACK (only if this migration must be undone) ────────────────────────
-- begin;
-- drop function if exists public.set_growth_override(uuid, int, numeric), public.set_growth_rule(uuid, jsonb), public.growth_rule_locked_at(uuid);
-- drop table if exists public.growth_rule_log, public.growth_target_overrides;
-- alter table public.assessment_configs drop column if exists growth_rule_set_at, drop column if exists growth_rule;
-- grant insert, update, delete, truncate, trigger, references on public.assessment_configs to anon, authenticated;
-- commit;
