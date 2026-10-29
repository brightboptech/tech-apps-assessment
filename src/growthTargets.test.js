import {
  DEFAULT_RULES, ruleTarget, targetFor, metTarget, tierFor, summarizeTargets, describeRule, examplePreview, validateRule,
} from './growthTargets';

const gap = DEFAULT_RULES.gap;                       // k 0.5, mastery 90
const fixed = { type: 'fixed', points: 20, mastery: null };
const bands = DEFAULT_RULES.bands;                   // 0/40/70/90 -> +25/+20/+10/+0, mastery 90

describe('ruleTarget', () => {
  test('close the gap', () => {
    expect(ruleTarget(40, gap)).toBe(70);
    expect(ruleTarget(46, gap)).toBe(73);
    expect(ruleTarget(100, gap)).toBe(100);
  });
  test('fixed gain, capped at 100', () => {
    expect(ruleTarget(50, fixed)).toBe(70);
    expect(ruleTarget(90, fixed)).toBe(100);
  });
  test('bands, including the edges', () => {
    expect(ruleTarget(0, bands)).toBe(25);
    expect(ruleTarget(39.9, bands)).toBe(64.9);
    expect(ruleTarget(40, bands)).toBe(60);
    expect(ruleTarget(89.9, bands)).toBe(99.9);
    expect(ruleTarget(90, bands)).toBe(90);
  });
  test('no rule or unknown rule', () => {
    expect(ruleTarget(40, null)).toBeNull();
    expect(ruleTarget(40, { type: 'magic' })).toBeNull();
  });
});

describe('targetFor', () => {
  test('override replaces the rule', () => {
    expect(targetFor(40, gap, 55)).toEqual({ target: 55, source: 'override' });
  });
  test('an override of 0 is honoured', () => {
    expect(targetFor(40, gap, 0)).toEqual({ target: 0, source: 'override' });
  });
  test('rule target when no override', () => {
    expect(targetFor(40, gap, undefined)).toEqual({ target: 70, source: 'rule' });
  });
  test('no rule and no override', () => {
    expect(targetFor(40, null, undefined)).toBeNull();
  });
});

describe('metTarget', () => {
  test('post at or above target', () => {
    expect(metTarget(70, 70, gap)).toBe(true);
    expect(metTarget(69.9, 70, gap)).toBe(false);
  });
  test('mastery cap', () => {
    expect(metTarget(90, 95, gap)).toBe(true);
    expect(metTarget(90, 95, fixed)).toBe(false);
  });
  test('no target', () => {
    expect(metTarget(90, null, gap)).toBeNull();
  });
});

describe('tierFor (exact edges)', () => {
  test.each([
    [54.9, null], [55, 'Recognized'], [59.9, 'Recognized'], [60, 'Exemplary'],
    [69.9, 'Exemplary'], [70, 'Master'], [100, 'Master'],
  ])('%p%% -> %p', (pct, tier) => {
    expect(tierFor(pct)).toBe(tier);
  });
});

describe('summarizeTargets', () => {
  test('counts students who met their target', () => {
    const rows = [
      { studentNumber: 1, preScore: 40, postScore: 75 },   // target 70 -> met
      { studentNumber: 2, preScore: 60, postScore: 70 },   // target 80 -> not met
      { studentNumber: 3, preScore: 50, postScore: 76 },   // target 75 -> met
      { studentNumber: 4, preScore: 80, postScore: 90 },   // target 90 -> met
    ];
    const s = summarizeTargets(rows, gap, { 2: 70 });      // override makes student 2 met
    expect(s.n).toBe(4);
    expect(s.metCount).toBe(4);
    expect(s.pctMet).toBe(100);
    expect(s.rows[1]).toMatchObject({ target: 70, targetSource: 'override', met: true });
    const s2 = summarizeTargets(rows, gap);
    expect(s2.metCount).toBe(3);
    expect(s2.pctMet).toBe(75);
    expect(s2.tier).toBe('Master');
  });
  test('no rule -> no targets', () => {
    const s = summarizeTargets([{ studentNumber: 1, preScore: 40, postScore: 75 }], null);
    expect(s.pctMet).toBeNull();
    expect(s.tier).toBeNull();
    expect(s.rows[0].met).toBeNull();
  });
});

describe('wording', () => {
  test('describeRule', () => {
    expect(describeRule(gap)).toBe('Close half the gap to 100%; a post-test of 90% or higher always meets the target.');
    expect(describeRule({ type: 'gap', k: 0.3, mastery: null })).toBe('Close 30% of the gap to 100%.');
    expect(describeRule(fixed)).toBe('Gain 20 points (up to 100%).');
    expect(describeRule(bands)).toBe('Gain by pre-test score: below 40% +25 · 40–70% +20 · 70–90% +10 · 90% and up +0; a post-test of 90% or higher always meets the target.');
    expect(describeRule(null)).toBe('No expected-growth rule set.');
  });
  test('examplePreview', () => {
    expect(examplePreview(gap)).toBe('A student who scores 40% on the pre-test needs 70% on the post-test.');
    expect(examplePreview(null)).toBe('');
  });
});

describe('validateRule (mirrors the database checks)', () => {
  test('valid rules', () => {
    expect(validateRule(null)).toBe('');
    expect(validateRule(DEFAULT_RULES.gap)).toBe('');
    expect(validateRule(DEFAULT_RULES.fixed)).toBe('');
    expect(validateRule(DEFAULT_RULES.bands)).toBe('');
  });
  test.each([
    ['gap 0', { type: 'gap', k: 0, mastery: null }],
    ['gap 1.5', { type: 'gap', k: 1.5, mastery: null }],
    ['gap blank', { type: 'gap', k: '', mastery: null }],
    ['fixed 0', { type: 'fixed', points: 0, mastery: null }],
    ['fixed 101', { type: 'fixed', points: 101, mastery: null }],
    ['bands empty', { type: 'bands', bands: [], mastery: null }],
    ['bands not from 0', { type: 'bands', bands: [{ from: 10, gain: 5 }], mastery: null }],
    ['bands not ascending', { type: 'bands', bands: [{ from: 0, gain: 5 }, { from: 50, gain: 5 }, { from: 40, gain: 5 }], mastery: null }],
    ['bands > 10', { type: 'bands', bands: Array.from({ length: 11 }, (_, i) => ({ from: i * 5, gain: 5 })), mastery: null }],
    ['band gain 120', { type: 'bands', bands: [{ from: 0, gain: 120 }], mastery: null }],
    ['mastery 0', { type: 'gap', k: 0.5, mastery: 0 }],
    ['mastery 101', { type: 'gap', k: 0.5, mastery: 101 }],
    ['unknown type', { type: 'magic' }],
  ])('invalid: %s', (_label, rule) => {
    expect(validateRule(rule)).not.toBe('');
  });
});
