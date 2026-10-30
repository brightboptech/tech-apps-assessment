// A class's expected-growth state (fix #22): its assessment setup, rule, lock time, per-student targets
// and change history. Shared by the class page's Expected Growth page and the TIA Growth Report.
import { supabase } from './supabaseClient';
import { describeRule } from './growthTargets';

export async function loadClassGrowth(teacherId, className) {
  // The class's pre passes -> their linked assessment setup (same lookup as AccessWindowsPage).
  const { data: pres } = await supabase.from('tokens').select('token, student_number')
    .eq('teacher_id', teacherId).eq('class_name', className).eq('test_type', 'pre');
  if (!pres?.length) return { configId: null, pres: [], rule: null, lockedAt: null, overrides: {}, log: [], lateUsed: false };
  const { data: tc } = await supabase.from('token_configs').select('assessment_config_id').eq('token', pres[0].token).maybeSingle();
  const configId = tc?.assessment_config_id ?? null;
  if (!configId) return { configId: null, pres, rule: null, lockedAt: null, overrides: {}, log: [], lateUsed: false };
  const [{ data: cfg }, { data: lock }, { data: ov }, { data: lg }] = await Promise.all([
    supabase.from('assessment_configs').select('growth_rule').eq('id', configId).single(),
    supabase.rpc('growth_rule_locked_at', { p_config: configId }),
    supabase.from('growth_target_overrides').select('student_number, target_pct').eq('assessment_config_id', configId),
    supabase.from('growth_rule_log').select('changed_at, action, student_number, old_value, new_value, after_post_tests')
      .eq('assessment_config_id', configId).order('changed_at', { ascending: true }),
  ]);
  const log = lg ?? [];
  return {
    configId, pres,
    rule: cfg?.growth_rule ?? null,
    lockedAt: lock ?? null,
    overrides: Object.fromEntries((ov ?? []).map(o => [o.student_number, Number(o.target_pct)])),
    log,
    lateUsed: log.some(l => l.after_post_tests),
  };
}

const pct = v => (v == null ? '—' : `${Number(v).toFixed(1)}%`);

// One history line, e.g. "Student 2: target 70.0% (was 64.3%)."
export function logLine(l) {
  if (l.action === 'set_rule') return `Rule set: ${describeRule(l.new_value)}${l.after_post_tests ? ' (set after post-tests began)' : ''}`;
  if (l.action === 'clear_rule') return 'Rule removed.';
  if (l.action === 'set_override') return `Student ${l.student_number}: target ${pct(l.new_value)}${l.old_value != null ? ` (was ${pct(l.old_value)})` : ''}.`;
  return `Student ${l.student_number}: target removed (was ${pct(l.old_value)}).`;
}
