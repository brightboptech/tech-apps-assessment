// Expected-growth targets for the TIA report (fix #22). Pure functions; rule shapes match
// set_growth_rule in db/migrations/2026-10-29-growth-targets.sql.

export const DEFAULT_RULES = {
  gap:   { type: 'gap', k: 0.5, mastery: 90 },
  fixed: { type: 'fixed', points: 20, mastery: 90 },
  bands: { type: 'bands', mastery: 90, bands: [{ from: 0, gain: 25 }, { from: 40, gain: 20 }, { from: 70, gain: 10 }, { from: 90, gain: 0 }] },
};

// Statewide TIA performance standards: % of students meeting expected growth.
export const TIA_STANDARDS = [
  { min: 70, label: 'Master' },
  { min: 60, label: 'Exemplary' },
  { min: 55, label: 'Recognized' },
];

const EPS = 1e-9;
const round1 = n => Math.round((n + EPS) * 10) / 10;
const fmt = n => (Number.isInteger(n) ? String(n) : n.toFixed(1));

// Target (%) from the rule alone, rounded to 0.1 and capped at 100. null = no rule.
export function ruleTarget(pre, rule) {
  if (!rule) return null;
  let t;
  if (rule.type === 'gap') t = pre + rule.k * (100 - pre);
  else if (rule.type === 'fixed') t = pre + rule.points;
  else if (rule.type === 'bands') {
    const band = [...rule.bands].reverse().find(b => pre >= b.from - EPS) ?? rule.bands[0];
    t = pre + band.gain;
  } else return null;
  return round1(Math.min(100, t));
}

// A per-student override replaces the rule's target.
export function targetFor(pre, rule, override) {
  if (override != null) return { target: round1(Number(override)), source: 'override' };
  const t = ruleTarget(pre, rule);
  return t == null ? null : { target: t, source: 'rule' };
}

// Met = post >= target, or post >= the mastery cap when the rule has one. null = no target.
export function metTarget(post, target, rule) {
  if (target == null) return null;
  if (post >= target - EPS) return true;
  return rule?.mastery != null && post >= rule.mastery - EPS;
}

// Highest TIA standard the class reaches, or null below Recognized.
export function tierFor(pctMet) {
  const s = TIA_STANDARDS.find(x => pctMet >= x.min - EPS);
  return s ? s.label : null;
}

// rows: [{ studentNumber, preScore, postScore }]; overrides: { [studentNumber]: target }
export function summarizeTargets(rows, rule, overrides = {}) {
  const out = rows.map(r => {
    const t = targetFor(r.preScore, rule, overrides[r.studentNumber]);
    return { ...r, target: t?.target ?? null, targetSource: t?.source ?? null, met: t ? metTarget(r.postScore, t.target, rule) : null };
  });
  const withTarget = out.filter(r => r.target != null);
  const metCount = withTarget.filter(r => r.met).length;
  const pctMet = withTarget.length ? (metCount / withTarget.length) * 100 : null;
  return { rows: out, metCount, n: withTarget.length, pctMet, tier: pctMet == null ? null : tierFor(pctMet) };
}

// One plain-English line for the report header and the editor.
export function describeRule(rule) {
  if (!rule) return 'No expected-growth rule set.';
  let s;
  if (rule.type === 'gap') s = rule.k === 0.5 ? 'Close half the gap to 100%' : `Close ${fmt(rule.k * 100)}% of the gap to 100%`;
  else if (rule.type === 'fixed') s = `Gain ${fmt(rule.points)} points (up to 100%)`;
  else if (rule.type === 'bands') {
    s = 'Gain by pre-test score: ' + rule.bands.map((b, i) => {
      const next = rule.bands[i + 1];
      const range = next ? (b.from === 0 ? `below ${fmt(next.from)}%` : `${fmt(b.from)}–${fmt(next.from)}%`) : `${fmt(b.from)}% and up`;
      return `${range} +${fmt(b.gain)}`;
    }).join(' · ');
  } else return 'Unknown rule.';
  return rule.mastery != null ? `${s}; a post-test of ${fmt(rule.mastery)}% or higher always meets the target.` : `${s}.`;
}

// "A student who scores 40% on the pre-test needs 70% on the post-test."
export function examplePreview(rule, pre = 40) {
  const t = ruleTarget(pre, rule);
  return t == null ? '' : `A student who scores ${fmt(pre)}% on the pre-test needs ${fmt(t)}% on the post-test.`;
}

// Same checks as set_growth_rule in the database; '' = valid, otherwise a message to show.
export function validateRule(rule) {
  if (!rule) return '';
  const num = v => typeof v === 'number' && Number.isFinite(v);
  if (rule.mastery != null && (!num(rule.mastery) || rule.mastery <= 0 || rule.mastery > 100)) return 'Mastery must be between 1 and 100.';
  if (rule.type === 'gap') return num(rule.k) && rule.k >= 0.01 && rule.k <= 1 ? '' : 'Enter a share of the gap between 1% and 100%.';
  if (rule.type === 'fixed') return num(rule.points) && rule.points >= 0.1 && rule.points <= 100 ? '' : 'Enter a gain between 0.1 and 100 points.';
  if (rule.type === 'bands') {
    const b = rule.bands || [];
    if (b.length < 1 || b.length > 10) return 'Use 1 to 10 bands.';
    if (b[0].from !== 0) return 'The first band must start at 0%.';
    for (let i = 0; i < b.length; i++) {
      if (!num(b[i].from) || !num(b[i].gain) || b[i].from < 0 || b[i].from > 100 || b[i].gain < 0 || b[i].gain > 100) return 'Band values must be between 0 and 100.';
      if (i > 0 && b[i].from <= b[i - 1].from) return 'Each band must start higher than the one before it.';
    }
    return '';
  }
  return 'Choose a rule type.';
}
