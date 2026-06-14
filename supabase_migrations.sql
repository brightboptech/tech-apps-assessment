-- ── TechGrowth Check — Beta Feedback System ─────────────────────────────────
-- Run these statements in your Supabase SQL editor (Dashboard → SQL editor).

-- 1. Feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id  UUID        REFERENCES teachers(id) ON DELETE SET NULL,
  page_context TEXT,
  tag         TEXT,
  message     TEXT        NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "feedback_insert_own" ON feedback
  FOR INSERT WITH CHECK (auth.uid() = teacher_id);

CREATE POLICY "feedback_select_admin" ON feedback
  FOR SELECT USING (auth.jwt() ->> 'email' = 'brightboptech@gmail.com');


-- 2. Survey responses table
CREATE TABLE IF NOT EXISTS survey_responses (
  id                   UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id           UUID        REFERENCES teachers(id) ON DELETE SET NULL,
  setup_ease           INT,
  setup_confusing      TEXT,
  questions_appropriate TEXT,
  questions_feedback   TEXT,
  student_response     TEXT,
  completion_time      TEXT,
  tia_helpful          TEXT,
  tia_improvement      TEXT,
  recommend_likelihood INT,
  anything_else        TEXT,
  created_at           TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "survey_insert_own" ON survey_responses
  FOR INSERT WITH CHECK (auth.uid() = teacher_id);

CREATE POLICY "survey_select_own" ON survey_responses
  FOR SELECT USING (auth.uid() = teacher_id);

CREATE POLICY "survey_select_admin" ON survey_responses
  FOR SELECT USING (auth.jwt() ->> 'email' = 'brightboptech@gmail.com');


-- 3. Allow admin to read all teachers (run only if this policy doesn't exist)
CREATE POLICY "teachers_select_admin" ON teachers
  FOR SELECT USING (auth.uid() = id OR auth.jwt() ->> 'email' = 'brightboptech@gmail.com');


-- 4. Allow admin to read all tokens (for class counts)
--    Only run if a conflicting policy doesn't already exist.
CREATE POLICY "tokens_select_admin" ON tokens
  FOR SELECT USING (teacher_id = auth.uid() OR auth.jwt() ->> 'email' = 'brightboptech@gmail.com');


-- 5. Access windows (scheduled time restrictions per assessment)
--    This table is referenced by GeneratePasses, AccessWindowsPage, NewClassWizard,
--    and the student assessment flow. Create it if it doesn't exist.
CREATE TABLE IF NOT EXISTS access_windows (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id     UUID        REFERENCES teachers(id) ON DELETE CASCADE,
  assessment_id  UUID        REFERENCES assessment_configs(id) ON DELETE CASCADE,
  days_of_week   INTEGER[]   NOT NULL,
  start_time     TIME        NOT NULL,
  end_time       TIME        NOT NULL,
  repeat_until   DATE        NOT NULL,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE access_windows ENABLE ROW LEVEL SECURITY;

-- Teachers can manage their own windows
CREATE POLICY "access_windows_all_teacher" ON access_windows
  FOR ALL USING (teacher_id = auth.uid());

-- Students (anon/authenticated) can read windows to enforce scheduling
CREATE POLICY "access_windows_select_public" ON access_windows
  FOR SELECT USING (true);

-- Admin can read all
CREATE POLICY "access_windows_select_admin" ON access_windows
  FOR SELECT USING (auth.jwt() ->> 'email' = 'brightboptech@gmail.com');
