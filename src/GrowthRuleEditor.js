// Expected-growth rule editor (fix #22). Controlled: `value` is a rule object or null (no rule).
// Shown in the new-class wizard (optional), the class page, and the TIA report setup.
import { DEFAULT_RULES, describeRule, examplePreview, validateRule } from './growthTargets';

const TYPES = [
  { id: null,    label: 'No rule',       hint: 'The report shows growth only.' },
  { id: 'gap',   label: 'Close the gap', hint: 'Students close part of the distance between their pre-test score and 100%.' },
  { id: 'fixed', label: 'Fixed gain',    hint: 'Every student is expected to gain the same number of points.' },
  { id: 'bands', label: 'Score bands',   hint: 'The expected gain depends on the pre-test score.' },
];
const box   = { border: '1.5px solid #e2e8f0', borderRadius: '8px', padding: '14px 16px', background: 'white' };
const input = { width: '72px', padding: '6px 8px', fontSize: '14px', border: '1.5px solid #e2e8f0', borderRadius: '6px', textAlign: 'right' };
const small = { fontSize: '12px', color: '#64748b', margin: '4px 0 0' };
const num   = e => (e.target.value === '' ? '' : Number(e.target.value));
const fmtDate = ts => new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function GrowthRuleEditor({ value, onChange, lockedAt = null }) {
  const type = value?.type ?? null;
  const error = validateRule(value);

  if (lockedAt) {
    return (
      <div style={{ ...box, background: '#f8fafc' }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>
          &#128274; Locked since {fmtDate(lockedAt)}: post-test results exist for this class.
        </p>
        <p style={small}>{describeRule(value)}</p>
      </div>
    );
  }

  const pick = id => onChange(id ? JSON.parse(JSON.stringify(DEFAULT_RULES[id])) : null);
  const set = patch => onChange({ ...value, ...patch });
  const setBand = (i, patch) => set({ bands: value.bands.map((b, j) => (j === i ? { ...b, ...patch } : b)) });

  return (
    <div style={box}>
      <div style={{ display: 'grid', gap: '8px' }}>
        {TYPES.map(t => (
          <label key={t.label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
            <input type="radio" name="growth-rule-type" checked={type === t.id} onChange={() => pick(t.id)} style={{ marginTop: '3px' }} />
            <span><span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{t.label}</span>
              <span style={{ display: 'block', fontSize: '12px', color: '#64748b' }}>{t.hint}</span></span>
          </label>
        ))}
      </div>

      {type === 'gap' && (
        <p style={{ margin: '14px 0 0', fontSize: '14px', color: '#1e293b' }}>
          Close <input type="number" min="1" max="100" step="1" style={input} aria-label="Share of the gap"
            value={value.k === '' ? '' : Math.round(value.k * 100)} onChange={e => set({ k: e.target.value === '' ? '' : Number(e.target.value) / 100 })} />% of the gap to 100%
        </p>
      )}
      {type === 'fixed' && (
        <p style={{ margin: '14px 0 0', fontSize: '14px', color: '#1e293b' }}>
          Gain <input type="number" min="0.1" max="100" step="1" style={input} aria-label="Points" value={value.points} onChange={e => set({ points: num(e) })} /> points (up to 100%)
        </p>
      )}
      {type === 'bands' && (
        <div style={{ marginTop: '14px', display: 'grid', gap: '6px' }}>
          {value.bands.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', color: '#1e293b' }}>
              Pre-test from <input type="number" min="0" max="100" style={input} aria-label={`Band ${i + 1} from`} value={b.from} disabled={i === 0} onChange={e => setBand(i, { from: num(e) })} />%
              &nbsp;→ gain <input type="number" min="0" max="100" style={input} aria-label={`Band ${i + 1} gain`} value={b.gain} onChange={e => setBand(i, { gain: num(e) })} /> points
              {value.bands.length > 1 && i > 0 && (
                <button type="button" onClick={() => set({ bands: value.bands.filter((_, j) => j !== i) })}
                  style={{ border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '13px' }}>Remove</button>
              )}
            </div>
          ))}
          {value.bands.length < 10 && (
            <button type="button" onClick={() => set({ bands: [...value.bands, { from: Math.min(100, (value.bands[value.bands.length - 1].from || 0) + 10), gain: 0 }] })}
              style={{ justifySelf: 'start', border: 'none', background: 'none', color: '#3D6B8A', fontWeight: 600, cursor: 'pointer', fontSize: '13px', padding: 0 }}>+ Add band</button>
          )}
        </div>
      )}
      {type && (
        <label style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '14px', fontSize: '14px', color: '#1e293b' }}>
          <input type="checkbox" checked={value.mastery != null} onChange={e => set({ mastery: e.target.checked ? 90 : null })} />
          Count any post-test of
          <input type="number" min="1" max="100" style={input} aria-label="Mastery" value={value.mastery ?? ''} disabled={value.mastery == null} onChange={e => set({ mastery: num(e) })} />
          % or higher as meeting the target
        </label>
      )}
      {type && (error
        ? <p style={{ ...small, color: '#dc2626', fontWeight: 600 }}>{error}</p>
        : <p style={{ ...small, color: '#3D6B8A' }}>{examplePreview(value)} {describeRule(value)}</p>)}
    </div>
  );
}
