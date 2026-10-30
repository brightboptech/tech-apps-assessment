// TIA Performance Standard card for the TIA Growth Report (fix #22): a 0–100 bar with the statewide
// standards marked and the class's "% of students meeting expected growth" plotted on it.
import { TIA_STANDARDS } from './growthTargets';

export default function TiaStandardBar({ pctMet, tier }) {
  const marks = [...TIA_STANDARDS].sort((a, b) => a.min - b.min);           // 55, 60, 70
  const reached = TIA_STANDARDS.find(s => s.label === tier);
  const pos = Math.max(0, Math.min(100, pctMet));
  return (
    <div style={{ background: '#E5F4F5', border: '1px solid #A8D8DB', borderRadius: '9px', padding: '14px 18px' }}>
      <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>TIA Performance Standard</div>
      <div style={{ fontSize: '15px', fontWeight: 800, color: '#1e293b', marginBottom: '14px' }}>
        {reached ? `Meets the ${reached.label} standard (≥ ${reached.min}%)` : `Below the Recognized standard (${marks[0].min}%)`}
      </div>
      <div style={{ position: 'relative', height: '10px', borderRadius: '5px', background: 'linear-gradient(90deg, #e2e8f0 0%, #e2e8f0 55%, #cdeee0 55%, #a7e0c6 60%, #5cb085 70%, #3d8a64 100%)' }}>
        {marks.map(m => (
          <div key={m.label} style={{ position: 'absolute', left: `${m.min}%`, top: '-4px', bottom: '-4px', width: '2px', background: '#1e293b', opacity: 0.55 }} />
        ))}
        <div title={`${pctMet.toFixed(1)}%`} style={{ position: 'absolute', left: `${pos}%`, top: '50%', width: '16px', height: '16px', borderRadius: '50%',
          transform: 'translate(-50%, -50%)', background: '#2E7F84', border: '3px solid white', boxShadow: '0 1px 3px rgba(0,0,0,0.3)' }} />
      </div>
      {/* numbers at the ticks (55 and 60 are too close for names), names in the legend below */}
      <div style={{ position: 'relative', height: '14px', fontSize: '10px', color: '#475569', marginTop: '6px' }}>
        {marks.map(m => (
          <span key={m.label} style={{ position: 'absolute', left: `${m.min}%`, transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>{m.min}%</span>
        ))}
      </div>
      <div style={{ fontSize: '11px', color: '#475569', marginTop: '6px' }}>
        {marks.map(m => `${m.label} ${m.min}%`).join(' · ')} of students meeting expected growth · this class: <strong>{pctMet.toFixed(1)}%</strong>
      </div>
    </div>
  );
}
