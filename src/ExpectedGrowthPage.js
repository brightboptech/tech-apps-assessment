// Class page → "Expected Growth" (fix #22): the class's growth rule, per-student targets, and the
// change history. All saves go through set_growth_rule / set_growth_override, which refuse changes
// once the class has a post-test result (db/migrations/2026-10-29-growth-targets.sql).
import { useState, useEffect, useCallback } from 'react';
import { supabase } from './supabaseClient';
import GrowthRuleEditor from './GrowthRuleEditor';
import { describeRule, validateRule, ruleTarget } from './growthTargets';

const card = { background: 'white', borderRadius: '12px', padding: '22px 24px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: '1px solid #eef2f7', marginBottom: '20px' };
const h3 = { margin: '0 0 6px', fontSize: '16px', fontWeight: 800, color: '#1e293b' };
const note = { margin: '0 0 14px', fontSize: '13px', color: '#64748b', lineHeight: 1.5 };
const th = { textAlign: 'left', padding: '8px 10px', fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', borderBottom: '1px solid #e2e8f0' };
const td = { padding: '8px 10px', fontSize: '14px', color: '#1e293b', borderBottom: '1px solid #f1f5f9' };
const btn = on => ({ padding: '8px 16px', fontSize: '13px', fontWeight: 700, border: 'none', borderRadius: '7px', color: 'white', background: on ? '#3D6B8A' : '#94a3b8', cursor: on ? 'pointer' : 'default' });
const link = { background: 'none', border: 'none', padding: 0, fontSize: '13px', fontWeight: 600, color: '#3D6B8A', cursor: 'pointer' };
const fmtDate = ts => new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const fmtDateTime = ts => new Date(ts).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
const pct = v => (v == null ? '—' : `${Number(v).toFixed(1)}%`);

function logLine(l) {
  if (l.action === 'set_rule') return `Rule set: ${describeRule(l.new_value)}${l.after_post_tests ? ' (set after post-tests began)' : ''}`;
  if (l.action === 'clear_rule') return 'Rule removed.';
  if (l.action === 'set_override') return `Student ${l.student_number}: target ${pct(l.new_value)}${l.old_value != null ? ` (was ${pct(l.old_value)})` : ''}.`;
  return `Student ${l.student_number}: target removed (was ${pct(l.old_value)}).`;
}

export default function ExpectedGrowthPage({ profile, classData, onBack }) {
  const [loading, setLoading]     = useState(true);
  const [configId, setConfigId]   = useState(null);
  const [savedRule, setSavedRule] = useState(null);
  const [draft, setDraft]         = useState(null);
  const [lockedAt, setLockedAt]   = useState(null);
  const [lateUsed, setLateUsed]   = useState(false);   // Option A's one-time set already used
  const [students, setStudents]   = useState([]);      // [{ n, pre }]
  const [overrides, setOverrides] = useState({});      // { n: target }
  const [edits, setEdits]         = useState({});      // { n: text being typed }
  const [log, setLog]             = useState([]);
  const [msg, setMsg]             = useState({ text: '', error: false });
  const [busy, setBusy]           = useState(false);

  const load = useCallback(async () => {
    // Same lookup as AccessWindowsPage: the class's pre passes -> their linked assessment setup.
    const { data: pres } = await supabase.from('tokens').select('token, student_number')
      .eq('teacher_id', profile.id).eq('class_name', classData.class_name).eq('test_type', 'pre');
    if (!pres?.length) { setLoading(false); return; }
    const { data: tc } = await supabase.from('token_configs').select('assessment_config_id').eq('token', pres[0].token).maybeSingle();
    const id = tc?.assessment_config_id ?? null;
    setConfigId(id);
    if (!id) { setLoading(false); return; }
    const [{ data: cfg }, { data: lock }, { data: ov }, { data: lg }, { data: resp }] = await Promise.all([
      supabase.from('assessment_configs').select('growth_rule').eq('id', id).single(),
      supabase.rpc('growth_rule_locked_at', { p_config: id }),
      supabase.from('growth_target_overrides').select('student_number, target_pct').eq('assessment_config_id', id),
      supabase.from('growth_rule_log').select('changed_at, action, student_number, old_value, new_value, after_post_tests')
        .eq('assessment_config_id', id).order('changed_at', { ascending: true }),
      supabase.from('assessment_responses').select('student_token, percentage, created_at').in('student_token', pres.map(p => p.token)),
    ]);
    const latest = {};
    (resp ?? []).forEach(r => { if (!latest[r.student_token] || r.created_at > latest[r.student_token].created_at) latest[r.student_token] = r; });
    setSavedRule(cfg?.growth_rule ?? null); setDraft(cfg?.growth_rule ?? null);
    setLockedAt(lock ?? null);
    setLateUsed((lg ?? []).some(l => l.after_post_tests));
    setOverrides(Object.fromEntries((ov ?? []).map(o => [o.student_number, Number(o.target_pct)])));
    setEdits({});
    setLog(lg ?? []);
    setStudents(pres.filter(p => p.student_number != null).sort((a, b) => a.student_number - b.student_number)
      .map(p => ({ n: p.student_number, pre: latest[p.token]?.percentage ?? null })));
    setLoading(false);
  }, [profile.id, classData.class_name]);
  useEffect(() => { load(); }, [load]);

  const oneTime = !!lockedAt && !savedRule && !lateUsed;   // Option A
  const ruleLocked = !!lockedAt && !oneTime;
  const dirty = JSON.stringify(draft) !== JSON.stringify(savedRule);
  const ruleErr = validateRule(draft);

  const run = async (fn, ok) => {
    setBusy(true); setMsg({ text: '', error: false });
    const { error } = await fn();
    setBusy(false);
    if (error) { setMsg({ text: error.message, error: true }); return false; }
    if (ok) setMsg({ text: ok, error: false });
    await load();
    return true;
  };
  const saveRule = async () => {
    const saved = draft;
    const ok = await run(() => supabase.rpc('set_growth_rule', { p_config: configId, p_rule: saved }), saved ? 'Expected-growth rule saved.' : 'Rule removed.');
    if (ok && saved) { try { localStorage.setItem(`tgcGrowthRule:${profile.id}`, JSON.stringify(saved)); } catch {} }
  };
  const saveOverride = (n, value) => run(() => supabase.rpc('set_growth_override', { p_config: configId, p_student_number: n, p_target: value }));

  return (
    <div style={{ maxWidth: '960px', margin: '36px auto', padding: '0 24px' }}>
      <button onClick={onBack} style={{ ...link, color: '#5B8DB8', fontSize: '14px', marginBottom: '20px' }}>← Back to Class</button>
      <h2 style={{ margin: '0 0 4px', color: '#1e293b', fontSize: '24px', fontWeight: 800 }}>Expected Growth</h2>
      <p style={{ margin: '0 0 24px', color: '#64748b', fontSize: '14px' }}>{classData.class_name}</p>

      {loading ? <p style={note}>Loading…</p> : !configId ? (
        <div style={card}><p style={{ ...note, margin: 0 }}>This class has no passes yet. Generate passes first, then set its expected growth here.</p></div>
      ) : (
        <>
          {/* status */}
          <div style={{ ...card, padding: '14px 18px', background: ruleLocked ? '#f8fafc' : oneTime ? '#FFFBEB' : '#EAF1F8',
                        border: `1px solid ${ruleLocked ? '#e2e8f0' : oneTime ? '#FCD34D' : '#C5D9EC'}` }}>
            <p style={{ margin: 0, fontSize: '13px', color: '#1e293b', lineHeight: 1.5 }}>
              {ruleLocked && <>&#128274; <strong>Locked since {fmtDate(lockedAt)}</strong>: post-test results exist for this class. The rule and student targets can't be changed.</>}
              {oneTime && <><strong>Post-tests began on {fmtDate(lockedAt)}</strong>, before an expected-growth rule was set. You can set a rule <strong>once</strong>; the TIA report will note that it was set after post-tests began. Student targets can no longer be changed.</>}
              {!lockedAt && <>You can change the rule and student targets until the first post-test is submitted. Every change is recorded in the history below.</>}
            </p>
          </div>

          {/* rule */}
          <div style={card}>
            <h3 style={h3}>Growth rule</h3>
            <p style={note}>Sets each student's expected post-test score from their pre-test score.</p>
            <GrowthRuleEditor value={draft} onChange={setDraft} lockedAt={ruleLocked ? lockedAt : null} />
            {!ruleLocked && (
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', marginTop: '14px' }}>
                <button onClick={saveRule} disabled={!dirty || !!ruleErr || busy} style={btn(dirty && !ruleErr && !busy)}>
                  {oneTime ? 'Save rule (one time only)' : 'Save rule'}
                </button>
                {dirty && <button onClick={() => setDraft(savedRule)} style={link}>Undo changes</button>}
              </div>
            )}
            {msg.text && <p style={{ margin: '10px 0 0', fontSize: '13px', fontWeight: 600, color: msg.error ? '#dc2626' : '#15803d' }}>{msg.text}</p>}
          </div>

          {/* per-student targets */}
          <div style={card}>
            <h3 style={h3}>Student targets <span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '13px' }}>(optional)</span></h3>
            <p style={note}>A target here replaces the rule's target for that student only, for example an IEP goal. Leave it blank to use the rule. Students are listed by number; no names are stored.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={th}>Student</th><th style={th}>Pre-test</th><th style={th}>Rule target</th><th style={th}>Student target</th><th style={th}></th></tr></thead>
              <tbody>
                {students.map(({ n, pre }) => {
                  const typed = edits[n]; const current = overrides[n];
                  const val = typed ?? (current != null ? String(current) : '');
                  const num = val === '' ? null : Number(val);
                  const valid = num == null || (Number.isFinite(num) && num >= 0 && num <= 100);
                  const changed = typed != null && (num ?? null) !== (current ?? null);
                  return (
                    <tr key={n}>
                      <td style={td}>Student {n}</td>
                      <td style={td}>{pct(pre)}</td>
                      <td style={{ ...td, color: '#64748b' }}>{savedRule && pre != null ? pct(ruleTarget(pre, savedRule)) : '—'}</td>
                      <td style={td}>
                        {lockedAt ? pct(current) : (
                          <input type="number" min="0" max="100" step="0.1" value={val} aria-label={`Student ${n} target`}
                            onChange={e => setEdits(p => ({ ...p, [n]: e.target.value }))}
                            style={{ width: '80px', padding: '5px 8px', fontSize: '13px', border: `1.5px solid ${valid ? '#e2e8f0' : '#dc2626'}`, borderRadius: '6px', textAlign: 'right' }} />
                        )}
                      </td>
                      <td style={{ ...td, whiteSpace: 'nowrap' }}>
                        {!lockedAt && changed && valid && <button onClick={() => saveOverride(n, num)} disabled={busy} style={link}>Save</button>}
                        {!lockedAt && !changed && current != null && <button onClick={() => saveOverride(n, null)} disabled={busy} style={{ ...link, color: '#94a3b8' }}>Clear</button>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* history */}
          <div style={card}>
            <h3 style={h3}>Change history</h3>
            {log.length === 0 && !lockedAt ? <p style={{ ...note, margin: 0 }}>No changes yet.</p> : (
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                {log.map((l, i) => <li key={i}><span style={{ color: '#94a3b8' }}>{fmtDateTime(l.changed_at)}</span> · {logLine(l)}</li>)}
                {lockedAt && <li><span style={{ color: '#94a3b8' }}>{fmtDateTime(lockedAt)}</span> · First post-test submitted; changes locked.</li>}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}
