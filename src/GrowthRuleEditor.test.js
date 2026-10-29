import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GrowthRuleEditor from './GrowthRuleEditor';

// Controlled wrapper so the editor behaves as it will on a real screen; records every onChange.
function Harness({ initial = null, lockedAt = null, log }) {
  const [rule, setRule] = useState(initial);
  return <GrowthRuleEditor value={rule} lockedAt={lockedAt} onChange={r => { log.push(r); setRule(r); }} />;
}

test('choosing "Close the gap" sends the default rule and shows the preview', () => {
  const log = [];
  render(<Harness log={log} />);
  fireEvent.click(screen.getByLabelText(/Close the gap/));
  expect(log.at(-1)).toEqual({ type: 'gap', k: 0.5, mastery: 90 });
  expect(screen.getByText(/needs 70% on the post-test/)).toBeInTheDocument();
});

test('an out-of-range value shows the error instead of the preview', () => {
  const log = [];
  render(<Harness log={log} initial={{ type: 'gap', k: 0.5, mastery: 90 }} />);
  fireEvent.change(screen.getByLabelText('Share of the gap'), { target: { value: '150' } });
  expect(log.at(-1).k).toBe(1.5);
  expect(screen.getByText('Enter a share of the gap between 1% and 100%.')).toBeInTheDocument();
});

test('unticking the mastery cap sets mastery to null', () => {
  const log = [];
  render(<Harness log={log} initial={{ type: 'fixed', points: 20, mastery: 90 }} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(log.at(-1).mastery).toBeNull();
});

test('bands: add and remove a band', () => {
  const log = [];
  render(<Harness log={log} initial={{ type: 'bands', mastery: null, bands: [{ from: 0, gain: 25 }, { from: 40, gain: 20 }] }} />);
  fireEvent.click(screen.getByText('+ Add band'));
  expect(log.at(-1).bands).toEqual([{ from: 0, gain: 25 }, { from: 40, gain: 20 }, { from: 50, gain: 0 }]);
  fireEvent.click(screen.getAllByText('Remove')[0]);
  expect(log.at(-1).bands).toEqual([{ from: 0, gain: 25 }, { from: 50, gain: 0 }]);
  expect(screen.getByLabelText('Band 1 from')).toBeDisabled();
});

test('"No rule" sends null', () => {
  const log = [];
  render(<Harness log={log} initial={{ type: 'fixed', points: 20, mastery: null }} />);
  fireEvent.click(screen.getByLabelText(/No rule/));
  expect(log.at(-1)).toBeNull();
});

test('locked: no inputs, shows the lock line and the rule', () => {
  render(<Harness log={[]} initial={{ type: 'gap', k: 0.5, mastery: 90 }} lockedAt="2026-10-20T15:00:00Z" />);
  expect(screen.queryAllByRole('radio')).toHaveLength(0);
  expect(screen.queryAllByRole('spinbutton')).toHaveLength(0);
  expect(screen.getByText(/Locked since Oct 20, 2026/)).toBeInTheDocument();
  expect(screen.getByText(/Close half the gap to 100%/)).toBeInTheDocument();
});
