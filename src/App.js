import './App.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import jsQR from 'jsqr';
import { gradeKQuestions } from './gradeKQuestions';
import { grade1Questions } from './grade1Questions';
import { grade2Questions } from './grade2Questions';
import { grade3Questions } from './grade3Questions';
import { grade4Questions } from './grade4Questions';
import { grade5Questions } from './grade5Questions';
import { grade6Questions } from './grade6Questions';
import { grade7Questions } from './grade7Questions';
import { grade8Questions } from './grade8Questions';
import { supabase } from './supabaseClient';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { buildStandards, STANDARD_LABELS } from './assessmentStandards';
import {
  KeyRound, ClipboardList, Volume2, FileText,
  BarChart2, Printer, Clock, Lock, CheckCircle, Layers, Archive, RotateCcw, ChevronDown, ChevronRight,
  BookOpen, HelpCircle, MessageCircle,
} from 'lucide-react';


// ── Copy-protection helpers (applied to all question/answer content) ──────────
const noSelect = {
  userSelect: 'none', WebkitUserSelect: 'none',
  MozUserSelect: 'none', msUserSelect: 'none',
};
const noCopy = e => e.preventDefault();

// Blocks Ctrl/Cmd+C, Ctrl/Cmd+A, Ctrl/Cmd+P via capture-phase keydown listener.
// Returns the removeEventListener cleanup function.
function addCopyKeyBlock() {
  const handler = (e) => {
    if ((e.ctrlKey || e.metaKey) && ['c', 'a', 'p'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  window.addEventListener('keydown', handler, true);
  return () => window.removeEventListener('keydown', handler, true);
}

// ── Teacher Script Mode ────────────────────────────────────────────────────────
function TeacherScriptMode({ questions, onClose }) {
  const [slide, setSlide] = useState(0);
  const q = questions[slide];

  useEffect(() => {
    const cleanup = addCopyKeyBlock();
    const noprint = document.createElement('style');
    noprint.id = 'ts-no-print';
    noprint.textContent = '@media print { body * { visibility: hidden !important; } }';
    document.head.appendChild(noprint);
    return () => { cleanup(); document.getElementById('ts-no-print')?.remove(); };
  }, []);

  if (!q) return null;

  const total = questions.length;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: '#1a2535',
        zIndex: 9999, display: 'flex', flexDirection: 'column',
        ...noSelect,
      }}
      onCopy={noCopy}
      onContextMenu={noCopy}
      onDragStart={noCopy}
    >
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 28px', background: '#111c2a',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: 600 }}>
          Teacher Script Mode
        </span>
        <button
          onClick={onClose}
          style={{
            padding: '8px 16px', fontSize: '13px', fontWeight: 600,
            border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: '6px',
            background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)',
            cursor: 'pointer',
          }}
        >&#x2715; Exit</button>
      </div>

      {/* Main content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '40px 48px', overflowY: 'auto',
      }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          <div style={{
            fontSize: '34px', fontWeight: 700, color: 'white',
            lineHeight: 1.3, marginBottom: '48px', textAlign: 'center',
          }}>
            {q.text}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {q.options.map(opt => (
              <div
                key={opt.letter}
                style={{
                  display: 'flex', alignItems: 'center', gap: '22px',
                  padding: '18px 28px',
                  border: '2px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  fontSize: '22px', fontWeight: 800, color: 'white',
                }}>
                  {opt.letter}
                </div>
                <span style={{ fontSize: '26px', fontWeight: 600, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>
                  {opt.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 40px', background: '#111c2a',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <button
          onClick={() => setSlide(s => Math.max(0, s - 1))}
          disabled={slide === 0}
          style={{
            padding: '18px 48px', fontSize: '20px', fontWeight: 700,
            border: '2px solid rgba(255,255,255,0.2)', borderRadius: '12px',
            background: slide === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.1)',
            color: slide === 0 ? 'rgba(255,255,255,0.2)' : 'white',
            cursor: slide === 0 ? 'not-allowed' : 'pointer',
            minWidth: '180px',
          }}
        >&#8592; Previous</button>

        <span style={{ fontSize: '22px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
          Question {slide + 1} of {total}
        </span>

        {slide < total - 1 ? (
          <button
            onClick={() => setSlide(s => s + 1)}
            style={{
              padding: '18px 48px', fontSize: '20px', fontWeight: 700,
              border: 'none', borderRadius: '12px', minWidth: '180px',
              background: '#5B8DB8', color: 'white', cursor: 'pointer',
            }}
          >Next &#8594;</button>
        ) : (
          <button
            onClick={onClose}
            style={{
              padding: '18px 48px', fontSize: '20px', fontWeight: 700,
              border: 'none', borderRadius: '12px', minWidth: '180px',
              background: '#3D7A5E', color: 'white', cursor: 'pointer',
            }}
          >Done &#10003;</button>
        )}
      </div>
    </div>
  );
}


function AnswerKeyOverlay({ questions, title, subtitle, onClose, email }) {
  useEffect(() => {
    const cleanup = addCopyKeyBlock();
    const style = document.createElement('style');
    style.id = 'ak-no-print';
    style.textContent = '@media print { body * { visibility: hidden !important; } }';
    document.head.appendChild(style);
    return () => { cleanup(); document.getElementById('ak-no-print')?.remove(); };
  }, []);

  const wmText = 'BrightBop Tech © 2026';
  const wmTiles = [];
  for (let r = 0; r <= 3; r++) {
    for (let c = 0; c <= 2; c++) {
      wmTiles.push(
        <div key={`${r}-${c}`} style={{
          position: 'absolute',
          left: `${(c / 2) * 100}%`,
          top: `${(r / 3) * 100}%`,
          transform: 'translate(-50%, -50%) rotate(-30deg)',
          fontSize: '18px', fontWeight: 700,
          color: 'rgba(0,0,0,0.06)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          ...noSelect,
          letterSpacing: '0.5px',
        }}>{wmText}</div>
      );
    }
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'white', display: 'flex', flexDirection: 'column',
        overflow: 'hidden', ...noSelect,
      }}
      onCopy={noCopy}
      onContextMenu={noCopy}
      onDragStart={noCopy}
    >
      {/* Watermark — absolute over entire overlay, above content (z 2), below header (z 10) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        pointerEvents: 'none', overflow: 'hidden',
        ...noSelect,
      }}>
        {wmTiles}
      </div>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 28px', background: '#2D3D4A',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        flexShrink: 0, flexWrap: 'wrap', gap: '10px',
        position: 'relative', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <span style={{ color: 'white', fontSize: '15px', fontWeight: 700 }}>
            TechGrowth Check — Answer Key
          </span>
          <span style={{
            background: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px',
            padding: '3px 10px', fontSize: '11px', color: '#7a5f00', fontWeight: 800,
          }}>
            ⚠ TEACHER COPY — DO NOT DISTRIBUTE
          </span>
        </div>
        <button
          onClick={onClose}
          style={{
            padding: '8px 16px', fontSize: '13px', fontWeight: 600,
            border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: '6px',
            background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)',
            cursor: 'pointer',
          }}
        >✕ Close</button>
      </div>

      {/* Subtitle row */}
      <div style={{
        padding: '9px 28px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0',
        fontSize: '13px', color: '#64748b', flexShrink: 0,
        position: 'relative', zIndex: 10,
      }}>
        {title}{subtitle ? ` · ${subtitle}` : ''} · {questions.length} question{questions.length !== 1 ? 's' : ''}
      </div>

      {/* Scrollable question list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px', position: 'relative', zIndex: 1 }}>
        <div style={{ columns: 2, columnGap: '18px', maxWidth: '1200px', margin: '0 auto' }}>
          {questions.map((q, idx) => (
            <div key={q.id} style={{
              border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px 16px',
              marginBottom: '14px', breakInside: 'avoid',
              background: 'white',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
                <span style={{
                  background: '#EAF1F8', color: '#3D6B8A', fontWeight: 800, fontSize: '12px',
                  padding: '2px 8px', borderRadius: '4px', flexShrink: 0,
                }}>Q{idx + 1}</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                  {q.strand || ''}{q.strand && q.id ? ' · ' : ''}
                  {q.id && <span style={{ fontFamily: 'monospace', fontSize: '11px', background: '#f1f5f9', padding: '1px 4px', borderRadius: '3px' }}>{q.id}</span>}
                </span>
              </div>
              <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '10px', lineHeight: 1.45, color: '#1e293b' }}>
                {q.text}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {q.options.map(opt => {
                  const correct = opt.letter === q.correctAnswer;
                  return (
                    <div key={opt.letter} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '6px 10px', borderRadius: '6px',
                      border: correct ? '1px solid #4ade80' : '1px solid #e2e8f0',
                      background: correct ? '#f0fdf4' : '#fafafa',
                    }}>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: correct ? '#4ade80' : '#e2e8f0',
                        fontWeight: 800, fontSize: '12px',
                        color: correct ? '#14532d' : '#475569',
                      }}>{opt.letter}</div>
                      <span style={{ flex: 1, fontSize: '13px', color: '#1e293b' }}>{opt.text}</span>
                      {correct && (
                        <span style={{
                          fontSize: '11px', fontWeight: 800, color: '#16a34a',
                          background: '#dcfce7', padding: '2px 8px', borderRadius: '3px', flexShrink: 0,
                        }}>✓ Correct</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getQuestionsForGrade(grade) {
  if (grade === 0 || grade === 'K') return gradeKQuestions;
  if (grade === 1) return grade1Questions;
  if (grade === 2) return grade2Questions;
  if (grade === 3) return grade3Questions;
  if (grade === 4) return grade4Questions;
  if (grade === 5) return grade5Questions;
  if (grade === 6) return grade6Questions;
  if (grade === 7) return grade7Questions;
  if (grade === 8) return grade8Questions;
  return [];
}

// ── Teacher / Admin UI ────────────────────────────────────────────────────────


// ── Generate Student Passes ───────────────────────────────────────────────────

const PASS_GRADES = [
  { label: 'Kindergarten', value: 0 },
  { label: 'Grade 1', value: 1 },
  { label: 'Grade 2', value: 2 },
  { label: 'Grade 3', value: 3 },
  { label: 'Grade 4', value: 4 },
  { label: 'Grade 5', value: 5 },
  { label: 'Grade 6', value: 6 },
  { label: 'Grade 7', value: 7 },
  { label: 'Grade 8', value: 8 },
];

function gradeDisplay(level) {
  if (Number(level) === 0 || level === 'K') return 'Kindergarten';
  return `Grade ${Number(level)}`;
}

function makeToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 8 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

const PASS_PRINT_STYLES = `
  body  { font-family: Arial, sans-serif; margin: 20px; color: #000; font-size: 12px; }
  h1    { font-size: 15px; margin: 0 0 2px; }
  .meta { color: #555; margin-bottom: 16px; font-size: 12px; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .pass { border: 1.5px dashed #bbb; border-radius: 6px; padding: 12px 14px;
          break-inside: avoid; page-break-inside: avoid; }
  .pass-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
  .student  { font-weight: bold; font-size: 12px; }
  .badge    { font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;
              padding: 3px 8px; border-radius: 3px; font-weight: bold; }
  .pre-badge  { background: #EAF1F8; color: #5B8DB8; }
  .post-badge { background: #D4EEE3; color: #3D7A5E; }
  .pass-body { display: flex; align-items: center; gap: 12px; }
  .qr-img   { width: 80px; height: 80px; flex-shrink: 0; }
  .pass-details { flex: 1; }
  .token { font-family: 'Courier New', monospace; font-size: 19px; font-weight: bold;
           letter-spacing: 3px; margin: 0 0 4px; }
  .info  { font-size: 10px; color: #888; }
  .cut   { font-size: 9px; color: #ccc; text-align: right; margin-top: 8px; letter-spacing: 1px; }
`;

function buildPassPrintHTML(passes, type, className, assessmentName, qrDataURLs, studentNames = {}) {
  const date = new Date().toLocaleDateString();
  const isPost = type === 'post';
  const accentColor = isPost ? '#3D7A5E' : '#5B8DB8';
  const label = isPost ? 'Post-Test' : 'Pre-Test';
  const badgeClass = isPost ? 'post-badge' : 'pre-badge';
  const metaAssessment = assessmentName ? ` &nbsp;·&nbsp; ${assessmentName}` : '';
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<title>${label} Passes – ${className}</title>
<style>${PASS_PRINT_STYLES}
  h1 { color: ${accentColor}; }
  .student-name { font-size: 11px; color: #333; margin-bottom: 2px; font-weight: 600; }
</style></head>
<body>
<h1>TechGrowth Check — ${label} Passes</h1>
<p class="meta">Class: <strong>${className}</strong>${metaAssessment} &nbsp;·&nbsp; ${date}</p>
<div class="grid">
${passes.map(({ studentNum, pre, post }, idx) => {
  const displayNum = (studentNum != null && studentNum > 0) ? studentNum : (idx + 1);
  const token = isPost ? post : pre;
  const qrSrc = qrDataURLs[token] ?? '';
  const cardAssessment = assessmentName ? `<div class="info">${assessmentName}</div>` : '';
  const name = studentNames[displayNum];
  const nameHtml = name ? `<div class="student-name">${name}</div>` : '';
  return `<div class="pass">
  <div class="pass-top">
    <span class="student">Student ${displayNum}</span>
    <span class="badge ${badgeClass}">${label}</span>
  </div>
  <div class="pass-body">
    ${qrSrc ? `<img class="qr-img" src="${qrSrc}" alt="QR"/>` : ''}
    <div class="pass-details">
      ${nameHtml}
      <div class="token">${token}</div>
      ${cardAssessment}
      <div class="info">${className} &nbsp;·&nbsp; TechGrowth Check</div>
    </div>
  </div>
  <div class="cut">✂ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─</div>
</div>`;
}).join('\n')}
</div>
</body></html>`;
}

function buildMasterSheetHTML(passes, className, grade, studentNames = {}) {
  const date = new Date().toLocaleDateString();
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<title>Master Sheet – ${className}</title>
<style>
  body { font-family: Arial, sans-serif; margin: 24px; color: #000; font-size: 12px; }
  h1   { font-size: 15px; margin: 0 0 2px; color: #3D4B5C; }
  .meta { color: #555; margin-bottom: 6px; }
  .warning { background: #fff8e1; border: 1px solid #ffe082; border-radius: 4px;
             padding: 6px 12px; font-size: 11px; color: #7a5f00; margin-bottom: 16px;
             display: inline-block; font-weight: bold; }
  table { width: 100%; border-collapse: collapse; }
  th { background: #F4F7FA; padding: 8px 12px; font-size: 11px; text-align: left;
       border-bottom: 2px solid #ddd; text-transform: uppercase; letter-spacing: 0.4px; }
  td { padding: 9px 12px; border-bottom: 1px solid #f0f0f0; font-size: 12px; }
  .pre  { font-family: 'Courier New', monospace; color: #5B8DB8; font-weight: bold; letter-spacing: 2px; }
  .post { font-family: 'Courier New', monospace; color: #3D7A5E; font-weight: bold; letter-spacing: 2px; }
  tr:nth-child(even) td { background: #FAFBFC; }
</style></head>
<body>
<h1>TechGrowth Check — Master Reference Sheet</h1>
<p class="meta">Class: <strong>${className}</strong> &nbsp;·&nbsp; ${grade} &nbsp;·&nbsp; ${date}</p>
<p class="warning">⚠ TEACHER COPY — DO NOT DISTRIBUTE TO STUDENTS</p>
<table>
  <thead>
    <tr>
      <th>Student #</th>
      <th>Pre-Test Pass Code</th>
      <th>Post-Test Pass Code</th>
      <th>Student Name</th>
    </tr>
  </thead>
  <tbody>
    ${passes.map(({ studentNum, pre, post }, idx) => {
      const displayNum = (studentNum != null && studentNum > 0) ? studentNum : (idx + 1);
      const name = studentNames[displayNum];
      const nameCell = name ? name : '<span style="color:#ccc;">_________________________</span>';
      return `
    <tr>
      <td>Student ${displayNum}</td>
      <td class="pre">${pre}</td>
      <td class="post">${post}</td>
      <td>${nameCell}</td>
    </tr>`;
    }).join('')}
  </tbody>
</table>
</body></html>`;
}


// ── Beta Signup Page ─────────────────────────────────────────────────────────

function BetaSignupPage({ onBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [district, setDistrict] = useState('');
  const [comments, setComments] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !school.trim()) {
      setError('Please fill in Name, Email, and School.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          school: school.trim(),
          district: district.trim(),
          comments: comments.trim(),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed');
      setSubmitted(true);
    } catch (err) {
      setError('Could not submit: ' + err.message);
    }
    setSubmitting(false);
  };

  const wrapStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #2D3D4A 0%, #3D6B8A 50%, #5B8DB8 100%)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', padding: '24px',
  };

  const inp = {
    width: '100%', padding: '11px 14px', fontSize: '15px',
    border: '1.5px solid #e2e8f0', borderRadius: '7px',
    marginBottom: '14px', boxSizing: 'border-box', outline: 'none',
  };

  if (submitted) {
    return (
      <div style={wrapStyle}>
        <div className="tc-beta-card" style={{ background: 'white', borderRadius: '16px', padding: '40px 36px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.28)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#D4EEE3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <CheckCircle size={32} color="#3D7A5E" strokeWidth={2} />
          </div>
          <h1 style={{ color: '#1E3A4A', margin: '0 0 12px', fontSize: '22px', fontWeight: 800 }}>Thanks for your interest!</h1>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6, margin: '0 0 28px' }}>
            We've received your request for beta access to TechGrowth Check. We'll review your submission and reach out if you're selected for the program.
          </p>
          <button onClick={onBack} style={{ width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700, border: 'none', borderRadius: '8px', backgroundColor: '#5B8DB8', color: 'white', cursor: 'pointer' }}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={wrapStyle}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: 'white', lineHeight: 1, marginBottom: '8px' }}>
          TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', margin: 0 }}>Beta Access</p>
      </div>
      <div className="tc-beta-card" style={{ background: 'white', borderRadius: '16px', padding: '36px 32px', maxWidth: '480px', width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,0.28)' }}>
        <h2 style={{ color: '#2D3D4A', margin: '0 0 6px', fontSize: '20px', fontWeight: 700 }}>Join the Beta</h2>
        <p style={{ color: '#64748b', margin: '0 0 24px', fontSize: '14px', lineHeight: 1.5 }}>
          Try TechGrowth Check free and share your feedback. Beta testers get full access — no payment required.
        </p>

        <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '5px' }}>Name <span style={{ color: '#ef4444' }}>*</span></label>
        <input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} style={inp} />

        <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '5px' }}>Email <span style={{ color: '#ef4444' }}>*</span></label>
        <input type="email" placeholder="you@school.edu" value={email} onChange={e => setEmail(e.target.value)} style={inp} />

        <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '5px' }}>School <span style={{ color: '#ef4444' }}>*</span></label>
        <input type="text" placeholder="School name" value={school} onChange={e => setSchool(e.target.value)} style={inp} />

        <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '5px' }}>District <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span></label>
        <input type="text" placeholder="School district" value={district} onChange={e => setDistrict(e.target.value)} style={inp} />

        <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '5px' }}>Comments <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span></label>
        <textarea
          placeholder="What subjects or grade levels do you teach? Any questions?"
          value={comments}
          onChange={e => setComments(e.target.value)}
          rows={3}
          style={{ ...inp, resize: 'vertical', fontFamily: 'inherit' }}
        />

        {error && <p style={{ color: '#ef4444', fontSize: '13px', margin: '-8px 0 12px' }}>{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
            border: 'none', borderRadius: '8px',
            backgroundColor: submitting ? '#e2e8f0' : '#5B8DB8',
            color: submitting ? '#94a3b8' : 'white',
            cursor: submitting ? 'not-allowed' : 'pointer', marginBottom: '12px',
          }}
        >
          {submitting ? 'Submitting…' : 'Request Beta Access →'}
        </button>
        <button onClick={onBack} style={{ width: '100%', padding: '11px', fontSize: '14px', border: '1.5px solid #e2e8f0', borderRadius: '8px', background: 'white', color: '#64748b', cursor: 'pointer' }}>
          ← Back
        </button>
      </div>
    </div>
  );
}

// ── Landing Page ──────────────────────────────────────────────────────────────

const LANDING_CSS = `
*{margin:0;padding:0;box-sizing:border-box}
:root{
--slate:#3d5a6e;
--slate-dark:#2c3e50;
--slate-light:#4a6b7a;
--green:#5cb085;
--green-light:#e6f4ed;
--green-dark:#3d8a64;
--bg:#e8eef2;
--bg-card:#edf2f6;
--bg-white:#f7f9fb;
--text:#2c3e50;
--text-muted:#5f7a8a;
--lavender:#8b7ec8;
--lavender-light:#f0edf8;
--gold:#d4a029;
--gold-light:#fef8e8;
}
html{scroll-behavior:smooth}
body{font-family:'Source Sans 3',sans-serif;color:var(--text);background:var(--bg-white);line-height:1.7;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4,h5,h6,.nav-logo{font-family:'Inter',sans-serif}
.beta-top-bar{position:fixed;top:0;left:0;right:0;z-index:101;background:#D97706;color:#fff;text-align:center;padding:0.75rem 1.5rem;font-size:0.95rem;font-family:'Inter',sans-serif;font-weight:600;display:flex;align-items:center;justify-content:center;gap:0.85rem;line-height:1.4;letter-spacing:0.01em;box-shadow:0 2px 8px rgba(0,0,0,0.18)}
.beta-top-bar a{color:#fff;font-weight:800;text-decoration:none;white-space:nowrap;background:rgba(0,0,0,0.18);padding:0.25rem 0.9rem;border-radius:4px;border:1.5px solid rgba(255,255,255,0.45);font-size:0.9rem}
.beta-top-bar a:hover{background:rgba(0,0,0,0.3)}
nav{position:fixed;top:50px;left:0;right:0;z-index:100;padding:0.85rem 2rem;display:flex;align-items:center;justify-content:space-between;background:var(--slate);border-bottom:1px solid rgba(0,0,0,0.1)}
.nav-logo{font-size:1.3rem;font-weight:700;color:#fff;text-decoration:none;cursor:pointer;background:none;border:none}
.nav-logo span{color:var(--green)}
.nav-links{display:flex;gap:2rem;align-items:center}
.nav-links a{text-decoration:none;color:rgba(255,255,255,0.75);font-size:0.9rem;font-weight:500;transition:color 0.2s}
.nav-links a:hover{color:#fff}
.btn{display:inline-flex;align-items:center;gap:0.5rem;padding:0.6rem 1.4rem;border-radius:6px;font-weight:600;font-size:0.9rem;text-decoration:none;transition:all 0.25s;cursor:pointer;border:none;font-family:'Inter',sans-serif}
.btn-green{background:var(--green);color:#fff}
.btn-green:hover{background:var(--green-dark);transform:translateY(-1px)}
.btn-outline-white{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.4)}
.btn-outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.1)}
.hero{padding:10.5rem 2rem 4.5rem;background:linear-gradient(135deg,#3d5a6e 0%,#4a6b7a 40%,#5a7d8e 100%);text-align:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 30% 20%,rgba(92,176,133,0.12) 0%,transparent 60%);pointer-events:none}
.hero-badge{display:inline-block;background:rgba(92,176,133,0.2);color:#fef8e8;font-size:0.8rem;font-weight:600;padding:0.4rem 1rem;border-radius:20px;margin-bottom:1.5rem;letter-spacing:0.03em;text-transform:uppercase;border:1px solid rgba(92,176,133,0.3);font-family:'Inter',sans-serif}
.hero h1{font-size:clamp(2.2rem,5vw,3.4rem);font-weight:700;color:#fff;line-height:1.15;margin-bottom:1.25rem;max-width:850px;margin-left:auto;margin-right:auto;position:relative}
.hero h1 em{font-style:italic;color:var(--green);font-family:'Source Sans 3',sans-serif}
.hero p{font-size:1.1rem;color:rgba(255,255,255,0.8);max-width:640px;margin:0 auto 2.5rem;line-height:1.8;position:relative}
.hero-cta{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;position:relative}
.mission{padding:2.75rem 2rem;text-align:center;background:var(--bg);border-bottom:1px solid rgba(0,0,0,0.06)}
.mission p{font-size:1.1rem;color:var(--slate-dark);max-width:720px;margin:0 auto;line-height:1.8}
.mission p em{font-style:italic;color:var(--green);font-weight:600}
.trust-bar{padding:1.75rem 2rem;text-align:center;background:var(--bg-white);border-bottom:1px solid rgba(0,0,0,0.05)}
.trust-items{display:flex;justify-content:center;gap:2.5rem;flex-wrap:wrap}
.trust-item{font-size:0.85rem;color:var(--text);font-weight:500;display:flex;align-items:center;gap:0.4rem}
.trust-item svg{width:18px;height:18px;color:var(--green)}
.section-label{font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:var(--green);margin-bottom:0.75rem;font-family:'Inter',sans-serif}
h2.section-title{font-size:clamp(1.8rem,3.5vw,2.3rem);font-weight:700;color:var(--slate-dark);margin-bottom:0.75rem;line-height:1.25}
.problem{padding:4.5rem 2rem;max-width:900px;margin:0 auto;text-align:center}
.problem p{font-size:1.05rem;color:var(--text-muted);max-width:680px;margin:0 auto;line-height:1.8}
.highlight{background:var(--green-light);padding:1.5rem 2rem;border-radius:10px;margin-top:2rem;font-size:0.95rem;color:var(--slate-dark);line-height:1.7;border-left:4px solid var(--green);text-align:left}
.how-it-works{padding:4.5rem 2rem;background:var(--bg)}
.how-inner{max-width:1000px;margin:0 auto}
.how-subtitle{text-align:center;color:var(--text-muted);margin-bottom:3rem;font-size:1.05rem}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-bottom:2rem;align-items:stretch}
.step{background:#fff;border-radius:12px;padding:2rem 1.5rem;border:1px solid rgba(0,0,0,0.06);transition:transform 0.2s;display:flex;flex-direction:column;justify-content:flex-start}
.step:hover{transform:translateY(-3px)}
.step-num{width:36px;height:36px;border-radius:50%;background:var(--green-light);color:var(--green-dark);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.9rem;margin-bottom:1rem;font-family:'Inter',sans-serif}
.step h3{font-size:1.05rem;font-weight:600;margin-bottom:0.5rem;color:var(--slate-dark)}
.step p{font-size:0.9rem;color:var(--text-muted);line-height:1.6}
.flex-cards{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}
.flex-card{background:#fff;border-radius:12px;padding:2rem;border:1px solid rgba(0,0,0,0.06)}
.flex-card h3{font-size:1.05rem;font-weight:600;color:var(--slate-dark);margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem}
.flex-card h3 svg{width:22px;height:22px;color:var(--green)}
.flex-card p{font-size:0.9rem;color:var(--text-muted);line-height:1.6}
.features{padding:4.5rem 2rem;max-width:1000px;margin:0 auto}
.features-subtitle{text-align:center;color:var(--text-muted);margin-bottom:3rem;font-size:1.05rem}
.feature-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
.feature-card{padding:1.75rem;border-radius:12px;border:1px solid rgba(0,0,0,0.06);background:var(--bg-card)}
.feature-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem}
.feature-card h3{font-size:1rem;font-weight:600;margin-bottom:0.4rem;color:var(--slate-dark)}
.feature-card p{font-size:0.88rem;color:var(--text-muted);line-height:1.6}
.sample-report{padding:4.5rem 2rem;background:var(--bg)}
.report-inner{max-width:950px;margin:0 auto}
.report-subtitle{text-align:center;color:var(--text-muted);margin-bottom:2.5rem;font-size:1.05rem}
.report-preview{background:#fff;border-radius:16px;border:1px solid rgba(0,0,0,0.08);overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)}
.report-header{background:var(--slate);padding:1.25rem 2rem;display:flex;align-items:center;justify-content:space-between}
.report-header h4{color:#fff;font-size:0.95rem;font-weight:600}
.report-header .badge{background:var(--green);color:#fff;font-size:0.7rem;padding:0.25rem 0.7rem;border-radius:12px;font-weight:600}
.class-summary{padding:1.5rem 2rem;border-bottom:1px solid rgba(0,0,0,0.06)}
.class-summary h5{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--green-dark);font-weight:700;margin-bottom:1rem}
.summary-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0.75rem}
.summary-box{background:var(--bg-card);border-radius:8px;padding:1rem;text-align:center;border:1px solid rgba(0,0,0,0.04)}
.summary-box.highlight-box{background:var(--green-light);border-color:rgba(92,176,133,0.2)}
.summary-box .box-label{font-size:0.65rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);font-weight:600;margin-bottom:0.3rem}
.summary-box .box-value{font-size:1.5rem;font-weight:700;color:var(--slate-dark);font-family:'Inter',sans-serif}
.summary-box .box-sub{font-size:0.7rem;color:var(--text-muted)}
.student-data{padding:1.5rem 2rem}
.student-data h5{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--slate-dark);font-weight:700;margin-bottom:0.25rem;display:inline}
.sort-note{font-size:0.7rem;color:var(--text-muted);margin-left:0.5rem;text-transform:uppercase;letter-spacing:0.05em}
.privacy-note{font-size:0.78rem;color:var(--text-muted);margin:0.75rem 0 1rem;padding:0.6rem 0.8rem;background:var(--bg-card);border-radius:6px;line-height:1.5}
.report-table{width:100%;border-collapse:collapse;font-size:0.85rem}
.report-table th{text-align:left;padding:0.65rem 0.75rem;background:var(--bg);color:var(--text-muted);font-weight:700;font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid rgba(0,0,0,0.08)}
.report-table td{padding:0.65rem 0.75rem;border-bottom:1px solid rgba(0,0,0,0.04);color:var(--text)}
.report-table tr:last-child td{border-bottom:none}
.student-label{font-weight:500;color:var(--slate-dark)}
.growth-pos{color:var(--green-dark);font-weight:700}
.met-yes{display:inline-block;background:var(--green-light);color:var(--green-dark);font-size:0.75rem;font-weight:600;padding:0.2rem 0.6rem;border-radius:4px}
.report-footer{padding:1rem 2rem;background:var(--bg);display:flex;align-items:center;justify-content:space-between;font-size:0.8rem;color:var(--text-muted)}
.report-footer .btn{font-size:0.8rem;padding:0.4rem 1rem}
.pricing{padding:4.5rem 2rem;background:var(--bg-white)}
.pricing-inner{max-width:600px;margin:0 auto;text-align:center}
.pricing-subtitle{color:var(--text-muted);margin-bottom:2.5rem;font-size:1.05rem}
.price-card{background:#fff;border-radius:16px;padding:3rem 2.5rem;border:2px solid var(--green);text-align:center}
.price-amount{font-size:3.5rem;font-weight:700;color:var(--slate-dark);font-family:'Inter',sans-serif}
.price-amount span{font-size:1rem;font-weight:400;color:var(--text-muted)}
.price-desc{color:var(--text-muted);margin:0.5rem 0 1.5rem;font-size:0.95rem}
.price-features{list-style:none;text-align:left;margin-bottom:2rem}
.price-features li{padding:0.5rem 0;font-size:0.92rem;color:var(--text);display:flex;align-items:flex-start;gap:0.6rem;border-bottom:1px solid rgba(0,0,0,0.04)}
.price-features li:last-child{border-bottom:none}
.check{color:var(--green);font-weight:700;flex-shrink:0;margin-top:2px}
.tia{padding:4.5rem 2rem;max-width:900px;margin:0 auto}
.tia-subtitle{text-align:center;color:var(--text-muted);margin-bottom:2.5rem;font-size:1.05rem;max-width:700px;margin-left:auto;margin-right:auto}
.tia-content{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.tia-level{text-align:center;padding:2rem 1.5rem;border-radius:12px;border:1px solid rgba(0,0,0,0.06);background:var(--bg-card)}
.tia-level h3{font-size:1rem;font-weight:600;margin-bottom:0.4rem;color:var(--slate-dark)}
.tia-level p{font-size:0.85rem;color:var(--text-muted);line-height:1.6}
.level-badge{display:inline-block;padding:0.3rem 0.8rem;border-radius:20px;font-size:0.75rem;font-weight:600;margin-bottom:0.75rem;font-family:'Inter',sans-serif}
.level-1 .level-badge{background:var(--green-light);color:var(--green-dark)}
.level-2 .level-badge{background:var(--lavender-light);color:var(--lavender)}
.level-3 .level-badge{background:var(--gold-light);color:#8a6b1a}
.tia-note{text-align:center;margin-top:2rem;font-size:0.9rem;color:var(--text-muted);line-height:1.7;max-width:600px;margin-left:auto;margin-right:auto}
.tia-note a{color:var(--green);text-decoration:none;font-weight:500}
.tia-note a:hover{text-decoration:underline}
.cta-section{padding:5rem 2rem;background:var(--slate);text-align:center;position:relative;overflow:hidden}
.cta-section::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 70% 80%,rgba(92,176,133,0.1) 0%,transparent 60%);pointer-events:none}
.cta-section h2{font-size:clamp(1.8rem,3.5vw,2.5rem);font-weight:700;color:#fff;margin-bottom:1rem;position:relative}
.cta-section p{color:rgba(255,255,255,0.7);font-size:1.05rem;max-width:580px;margin:0 auto 2rem;line-height:1.7;position:relative}
.cta-section .btn-green{font-size:1rem;padding:0.85rem 2.5rem;position:relative}
footer{padding:2.5rem 2rem;text-align:center;border-top:1px solid rgba(0,0,0,0.06);background:var(--bg-white)}
footer p{font-size:0.82rem;color:var(--text-muted)}
footer a{color:var(--green);text-decoration:none}
.hamburger{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:40px;height:40px;padding:8px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:6px;cursor:pointer}
.hamburger span{display:block;width:20px;height:2px;background:#fff;border-radius:2px}
.beta-top-bar .short-text{display:none}
@media(max-width:768px){
  .hamburger{display:flex}
  .nav-links{display:none;flex-direction:column;width:100%;padding:0.75rem 0 0.5rem;border-top:1px solid rgba(255,255,255,0.12);margin-top:0.6rem}
  .nav-links.nav-open{display:flex}
  .nav-links a:not(.btn){display:block!important;padding:0.55rem 0;border-bottom:1px solid rgba(255,255,255,0.06)}
  .nav-links .btn{margin-top:0.5rem;align-self:flex-start}
  nav{padding:0.75rem 1rem;flex-wrap:wrap;align-items:center}
  .hero{padding:10rem 1.25rem 3.5rem}
  .hero-cta{flex-direction:column;align-items:center}
  .hero-cta .btn{min-width:200px;justify-content:center}
  .tia-content{grid-template-columns:1fr}
  .flex-cards{grid-template-columns:1fr}
  .summary-grid{grid-template-columns:repeat(2,1fr)}
  .summary-grid .summary-box:last-child{grid-column:span 2}
  .student-data{overflow-x:auto;-webkit-overflow-scrolling:touch}
  .report-table{font-size:0.75rem;min-width:480px}
  .report-header{flex-direction:column;align-items:flex-start;gap:0.5rem}
  .price-card{padding:2rem 1.5rem}
}
@media(max-width:600px){
  .beta-top-bar .full-text{display:none}
  .beta-top-bar .short-text{display:inline}
  .beta-top-bar{font-size:0.88rem;padding:0.6rem 1rem;gap:0.6rem}
  .beta-top-bar a{font-size:0.82rem;padding:0.2rem 0.7rem}
  nav{top:46px}
  .hero{padding:9.5rem 1rem 3rem}
}
@media(max-width:400px){
  .hero h1{font-size:clamp(1.75rem,7vw,2.2rem)}
  .price-card{padding:1.75rem 1.25rem}
}
`;

const LANDING_HTML = `
<div class="beta-top-bar">
  <span class="full-text">Now accepting beta testers — try TechGrowth Check free and share your feedback.</span>
  <span class="short-text">Now in beta — try it free!</span>
  <a href="#" data-beta="1">Join Beta →</a>
</div>
<nav>
  <a href="#top" class="nav-logo">TechGrowth <span>Check</span></a>
  <button class="hamburger" data-hamburger="1" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-links">
    <a href="#how">How it works</a>
    <a href="#pricing">Pricing</a>
    <a href="#" class="btn btn-green" data-cta="1">Log in</a>
  </div>
</nav>

<section class="hero" id="top">
  <div class="hero-badge">Rewarding educator excellence in Texas</div>
  <h1>Helping educators get <em>rewarded for excellence</em> in Texas</h1>
  <p>Assessments aligned to the Technology Applications TEKS that make it easy to demonstrate student growth for the Teacher Incentive Allotment (TIA). Grades K&ndash;8. Set up in minutes.</p>
  <div class="hero-cta">
    <a href="#" class="btn btn-green" data-cta="1">Get started &#8594;</a>
    <a href="#how" class="btn btn-outline-white">See how it works</a>
  </div>
</section>

<div class="mission">
  <p>Our mission is simple: help educators who teach the Technology Applications TEKS demonstrate <em>student growth</em> &mdash; easily and on their own terms &mdash; so they can earn the recognition and higher pay they deserve through the Teacher Incentive Allotment.</p>
</div>

<div class="trust-bar">
  <div class="trust-items">
    <div class="trust-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      Aligned to Technology Applications TEKS
    </div>
    <div class="trust-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      Grades K&ndash;8
    </div>
    <div class="trust-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      TIA growth data included
    </div>
    <div class="trust-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      No subscriptions
    </div>
  </div>
</div>

<section class="problem">
  <div class="section-label">The challenge</div>
  <h2 class="section-title">Technology Applications educators deserve a path to higher pay, too.</h2>
  <p>The Teacher Incentive Allotment (TIA) elevates the education profession by rewarding educators who demonstrate student growth. But unlike STAAR-tested subjects, educators who teach the Technology Applications TEKS don&apos;t have a standardized way to measure that growth &mdash; making it harder to earn a designation and the higher pay that comes with it.</p>
  <div class="highlight">
    <strong>Technology Applications TEKS are not assessed through STAAR.</strong> That means educators need a third-party assessment to demonstrate student growth for TIA. TechGrowth Check was built specifically for this &mdash; giving you the reliable, TEKS-aligned growth data your district needs.
  </div>
</section>

<section class="how-it-works" id="how">
  <div class="how-inner">
    <div class="section-label" style="text-align:center">How it works</div>
    <h2 class="section-title" style="text-align:center">Simple setup. Powerful growth data.</h2>
    <p class="how-subtitle">Everything you need to demonstrate student growth &mdash; nothing you don&apos;t.</p>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <h3>Know where they start</h3>
        <p>Set up your assessment in minutes, not hours. Get a clear picture of where your students are in Technology Applications before instruction begins.</p>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <h3>Teach with confidence</h3>
        <p>Focus on what you do best. Your baseline is set and ready to measure against.</p>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <h3>See the impact</h3>
        <p>Your teaching made a difference &mdash; now there&apos;s data to prove it.</p>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <h3>Earn your recognition</h3>
        <p>Growth evidence ready for TIA. Because your impact deserves to be rewarded.</p>
      </div>
    </div>
  </div>
</section>

<section class="features">
  <div class="section-label" style="text-align:center">Why TechGrowth Check</div>
  <h2 class="section-title" style="text-align:center">Built by educators, for educators</h2>
  <p class="features-subtitle">Every feature is designed to make demonstrating student growth easier.</p>
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--green-light);color:var(--green-dark)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      </div>
      <h3>TEKS-aligned assessments</h3>
      <p>Fully aligned to the Technology Applications TEKS. No guessing about alignment.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--lavender-light);color:var(--lavender)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
      </div>
      <h3>Student growth measurement</h3>
      <p>Measure growth at the individual student level, aligned with TIA requirements.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--gold-light);color:var(--gold)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      </div>
      <h3>Growth data designed for TIA</h3>
      <p>Student growth data ready for your district&apos;s TIA process.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--green-light);color:var(--green-dark)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      </div>
      <h3>Secure assessment delivery</h3>
      <p>Built with assessment security and data privacy in mind.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--lavender-light);color:var(--lavender)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      </div>
      <h3>Grades K&ndash;8 coverage</h3>
      <p>Comprehensive coverage across elementary and middle school Technology Applications TEKS.</p>
    </div>
  </div>
</section>


<section class="pricing" id="pricing">
  <div class="pricing-inner">
    <div class="section-label">Pricing</div>
    <h2 class="section-title">Simple, transparent pricing</h2>
    <p class="pricing-subtitle">No subscriptions. No contracts. Pay only for what you need.</p>
    <div class="price-card">
      <div class="price-amount">$2 <span>/ student</span></div>
      <p class="price-desc">One-time purchase per student.</p>
      <ul class="price-features">
        <li><span class="check">&#10003;</span> Complete assessment access per student</li>
        <li><span class="check">&#10003;</span> Growth data designed for TIA</li>
        <li><span class="check">&#10003;</span> Grades K&ndash;8 Technology Applications TEKS</li>
        <li><span class="check">&#10003;</span> Built for all learners, K&ndash;8</li>
        <li><span class="check">&#10003;</span> Set up in minutes</li>
      </ul>
      <a href="#" class="btn btn-green" style="width:100%;justify-content:center;font-size:1rem;padding:0.85rem" data-cta="1">Get started &#8594;</a>
    </div>
  </div>
</section>

<section class="tia" id="tia">
  <div class="section-label" style="text-align:center">Built for the Teacher Incentive Allotment</div>
  <h2 class="section-title" style="text-align:center">Designed around how TIA actually works</h2>
  <p class="tia-subtitle">The Teacher Incentive Allotment rewards educators who demonstrate student growth. Through approved local designation systems, districts identify their most effective educators at three levels.</p>
  <div class="tia-content">
    <div class="tia-level level-1">
      <div class="level-badge">Recognized</div>
      <h3>Demonstrate consistent growth</h3>
      <p>Show that your students are growing in their understanding of Technology Applications standards throughout the year.</p>
    </div>
    <div class="tia-level level-2">
      <div class="level-badge">Exemplary</div>
      <h3>Exceed growth expectations</h3>
      <p>Provide student growth data that shows above-average impact across your classes and standards.</p>
    </div>
    <div class="tia-level level-3">
      <div class="level-badge">Master</div>
      <h3>Lead in student outcomes</h3>
      <p>Present comprehensive growth data that demonstrates exceptional impact on student learning.</p>
    </div>
  </div>
  <p class="tia-note">TechGrowth Check helps you collect the student growth data your district needs for TIA designation decisions. Learn more about TIA at <a href="https://tiatexas.org" target="_blank" rel="noopener">tiatexas.org</a>.</p>
</section>

<section class="cta-section">
  <h2>Your students are already growing. Now you can prove it.</h2>
  <p>Set up your first assessment in minutes. Demonstrate the student growth that earns you the recognition &mdash; and higher pay &mdash; you deserve.</p>
  <a href="#" class="btn btn-green" data-cta="1">Get started &#8594;</a>
</section>

<footer>
  <p>&copy; 2026 BrightBop Tech. All rights reserved. <a href="mailto:brightboptech@gmail.com">Contact us</a></p>
</footer>
`;

function LoginSelectorScreen({ onStudent, onTeacher }) {
  const cardBase = {
    width: '100%', minHeight: '88px', background: 'white', border: 'none',
    borderRadius: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center',
    gap: '20px', padding: '20px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
    textAlign: 'left', transition: 'transform 0.15s, box-shadow 0.15s',
  };
  const hover = e => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.26)';
  };
  const unhover = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)';
  };
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #2D3D4A 0%, #3D6B8A 50%, #5B8DB8 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: 'white', lineHeight: 1, marginBottom: '10px' }}>
          TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', margin: 0 }}>
          Welcome! Select your role.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: '420px' }}>
        <button style={cardBase} onClick={onStudent} onMouseEnter={hover} onMouseLeave={unhover}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EAF1F8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <KeyRound size={22} color="#3D6B8A" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#1e293b', marginBottom: '3px' }}>I'm a Student</div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>Enter your student pass to begin</div>
          </div>
        </button>

        <button style={cardBase} onClick={onTeacher} onMouseEnter={hover} onMouseLeave={unhover}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#D4EEE3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ClipboardList size={22} color="#3D7A5E" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#1e293b', marginBottom: '3px' }}>I'm a Teacher</div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>Log in to your dashboard</div>
          </div>
        </button>
      </div>
    </div>
  );
}

function LandingPage({ onGetStarted, onJoinBeta }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'lp-css';
    style.textContent = LANDING_CSS;
    document.head.appendChild(style);

    const link = document.createElement('link');
    link.id = 'lp-fonts';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap';
    document.head.appendChild(link);

    return () => {
      document.getElementById('lp-css')?.remove();
      document.getElementById('lp-fonts')?.remove();
    };
  }, []);

  const handleClick = (e) => {
    if (e.target.closest('[data-cta]')) { e.preventDefault(); onGetStarted(); }
    if (e.target.closest('[data-beta]')) { e.preventDefault(); onJoinBeta(); }
    if (e.target.closest('[data-hamburger]')) {
      e.preventDefault();
      document.querySelector('.nav-links')?.classList.toggle('nav-open');
    }
    if (e.target.closest('.nav-links a')) {
      document.querySelector('.nav-links')?.classList.remove('nav-open');
    }
  };

  return (
    <div onClick={handleClick} dangerouslySetInnerHTML={{ __html: LANDING_HTML }} />
  );
}

const TIMEZONES = [
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'Pacific/Honolulu',
];

const SCHED_DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Shared scheduling helpers (used by GeneratePasses, AccessWindowsPage, NewClassWizard)
const fmtSchedTime = t => { const [h, m] = t.split(':'); const hr = parseInt(h, 10); return `${hr % 12 || 12}:${m} ${hr >= 12 ? 'PM' : 'AM'}`; };
const fmtSchedDays = days => days.map(d => SCHED_DAY_LABELS[d]).join(', ');
const fmtSchedDate = d => { const mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; const [y, m, day] = d.split('-'); return `${mo[parseInt(m,10)-1]} ${parseInt(day,10)}, ${y}`; };
const getSchedTzAbbr = tz => { try { return new Intl.DateTimeFormat('en-US', { timeZoneName: 'short', timeZone: tz }).formatToParts(new Date()).find(p => p.type === 'timeZoneName')?.value ?? ''; } catch { return ''; } };
const getSchedTzLongName = tz => { try { return new Intl.DateTimeFormat('en-US', { timeZoneName: 'long', timeZone: tz }).formatToParts(new Date()).find(p => p.type === 'timeZoneName')?.value ?? tz; } catch { return tz; } };

function GeneratePasses({ profile, onBack, paymentSessionId, initialClass = null, startInAddMode = false }) {
  const [className, setClassName] = useState('');
  const [grade, setGrade] = useState('');
  const [studentCount, setStudentCount] = useState('');
  const [pricePerStudent, setPricePerStudent] = useState('2.00');
  const [generating, setGenerating] = useState(false);
  const [passes, setPasses] = useState([]);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('pre');
  const [existingClasses, setExistingClasses] = useState([]);
  const [studentNames, setStudentNames] = useState({});
  const [isViewingExisting, setIsViewingExisting] = useState(false);
  const canvasRefs = useRef({});
  const [showTeacherScript, setShowTeacherScript] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [answerKeyData, setAnswerKeyData] = useState({ questions: [], title: '', subtitle: '' });
  const [expiresAt, setExpiresAt] = useState(initialClass?.expires_at ?? null);

  // Multi-class additional rows
  const [additionalClasses, setAdditionalClasses] = useState([]);
  // Multi-class results after payment
  const [multiClassResults, setMultiClassResults] = useState([]);
  const [activeResultClass, setActiveResultClass] = useState(0);

  // Beta code
  const [showBetaCode, setShowBetaCode] = useState(false);
  const [betaCode, setBetaCode] = useState('');
  const [betaCodeError, setBetaCodeError] = useState('');

  // Access Windows (scheduling for custom assessments)
  const [assessmentConfigId, setAssessmentConfigId] = useState(null);
  const [schedWindows, setSchedWindows] = useState([]);
  const [schedLoading, setSchedLoading] = useState(false);
  const [schedOpen, setSchedOpen] = useState(false);
  const [schedFormDays, setSchedFormDays] = useState(new Set());
  const [schedFormStart, setSchedFormStart] = useState('08:00');
  const [schedFormEnd, setSchedFormEnd] = useState('08:50');
  const [schedFormUntil, setSchedFormUntil] = useState('');
  const [schedTz, setSchedTz] = useState(() => localStorage.getItem('scheduleTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [schedShowTzPicker, setSchedShowTzPicker] = useState(false);
  const [schedError, setSchedError] = useState('');
  const [schedSaving, setSchedSaving] = useState(false);

  const appUrl = `${window.location.origin}/student`;
  const count = parseInt(studentCount, 10) || 0;
  const price = Math.max(parseFloat(pricePerStudent) || 2, 2);

  const existingClass = existingClasses.find(c => c.class_name === className.trim());
  const isAddMode = Boolean(existingClass);
  const startingStudentNumber = existingClass ? existingClass.maxStudentNumber + 1 : 1;

  // Button is only disabled for truly empty required fields — everything else shows a message
  const canProceed = className.trim().length > 0 && count >= 1 && !generating;

  const validationHint = (() => {
    if (!className.trim() || count < 1) return null;
    if (!isAddMode && !grade) return 'Select a grade level to continue.';
    return null;
  })();

  const handleSchedTzChange = (tz) => { setSchedTz(tz); setSchedShowTzPicker(false); localStorage.setItem('scheduleTimezone', tz); };
  const toggleSchedDay = (i) => { setSchedFormDays(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; }); };

  const loadSchedWindows = async (configId) => {
    setSchedLoading(true);
    const { data } = await supabase.from('access_windows').select('*').eq('teacher_id', profile.id).eq('assessment_id', configId).order('start_time');
    setSchedWindows(data ?? []);
    setSchedLoading(false);
  };

  const handleSchedAdd = async () => {
    if (schedFormDays.size === 0) { setSchedError('Select at least one day.'); return; }
    if (!schedFormStart || !schedFormEnd) { setSchedError('Set a start and end time.'); return; }
    if (schedFormEnd <= schedFormStart) { setSchedError('End time must be after start time.'); return; }
    if (!schedFormUntil) { setSchedError('Set a repeat-until date.'); return; }
    setSchedError('');
    setSchedSaving(true);
    const { error: insertErr } = await supabase.from('access_windows').insert({
      teacher_id: profile.id,
      assessment_id: assessmentConfigId,
      days_of_week: [...schedFormDays].sort((a, b) => a - b),
      start_time: schedFormStart,
      end_time: schedFormEnd,
      repeat_until: schedFormUntil,
    });
    setSchedSaving(false);
    if (insertErr) { setSchedError(insertErr.message); return; }
    setSchedFormDays(new Set());
    setSchedFormStart('08:00');
    setSchedFormEnd('08:50');
    setSchedFormUntil('');
    loadSchedWindows(assessmentConfigId);
  };

  const handleSchedDelete = async (id) => {
    await supabase.from('access_windows').delete().eq('id', id);
    setSchedWindows(prev => prev.filter(w => w.id !== id));
  };

  const loadExistingClasses = async () => {
    const { data } = await supabase
      .from('tokens')
      .select('class_name, grade_level, student_number')
      .eq('teacher_id', profile.id)
      .eq('test_type', 'pre');
    if (!data) return;
    const map = {};
    data.forEach(({ class_name, grade_level, student_number }) => {
      if (!map[class_name]) map[class_name] = { class_name, grade_level, maxStudentNumber: 0 };
      if (student_number > map[class_name].maxStudentNumber) map[class_name].maxStudentNumber = student_number;
    });
    setExistingClasses(Object.values(map));
  };

  useEffect(() => { loadExistingClasses(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const matchedClassName = existingClass?.class_name ?? null;
  useEffect(() => {
    if (existingClass) setGrade(String(existingClass.grade_level));
  }, [matchedClassName]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!paymentSessionId) return;
    const stored = localStorage.getItem('pendingPassOrder');
    if (!stored) return;
    const order = JSON.parse(stored);
    if (order.classes && order.classes.length > 0) {
      const first = order.classes[0];
      setClassName(first.className);
      setGrade(first.grade);
      setStudentCount(first.studentCount);
    } else {
      setClassName(order.className);
      setGrade(order.grade);
      setStudentCount(order.studentCount);
    }
    setPricePerStudent(order.pricePerStudent);
    verifyAndGenerate(paymentSessionId, order);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (initialClass && !paymentSessionId) {
      setClassName(initialClass.class_name);
      setGrade(String(initialClass.grade_level));
      if (startInAddMode) {
        // Skip pass view — go straight to creation form pre-filled for adding students
        loadExistingClasses();
      } else {
        loadClassPasses(initialClass.class_name);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const verifyAndGenerate = async (sessionId, order) => {
    setGenerating(true);
    setError('');
    try {
      const res = await fetch(`/api/verify-checkout-session?session_id=${sessionId}`);
      const data = await res.json();
      if (!res.ok || !data.paid) {
        setError('Payment verification failed. Please try again or contact support.');
        setGenerating(false);
        return;
      }

      // Support both old single-class and new multi-class localStorage format
      const classes = order.classes || [{
        className: order.className,
        grade: order.grade,
        studentCount: order.studentCount,
        startingStudentNumber: order.startingStudentNumber || '1',
      }];

      const allRows = [];
      const byClass = {};
      const newExpiresAt = (() => { const d = new Date(); d.setMonth(d.getMonth() + 13); return d.toISOString(); })();

      for (const cls of classes) {
        const n = parseInt(cls.studentCount, 10);
        const startAt = parseInt(cls.startingStudentNumber, 10) || 1;
        const classKey = cls.className;
        if (!byClass[classKey]) byClass[classKey] = { className: cls.className, grade: cls.grade, passes: [] };
        for (let i = 0; i < n; i++) {
          const studentNum = startAt + i;
          const pre  = makeToken();
          const post = makeToken();
          allRows.push(
            { token: pre,  grade_level: Number(cls.grade), test_type: 'pre',  teacher_id: profile.id, class_name: cls.className, student_number: studentNum, expires_at: newExpiresAt },
            { token: post, grade_level: Number(cls.grade), test_type: 'post', teacher_id: profile.id, class_name: cls.className, student_number: studentNum, expires_at: newExpiresAt },
          );
          byClass[classKey].passes.push({ studentNum, pre, post });
        }
      }

      const { error: insertError } = await supabase.from('tokens').insert(allRows);
      if (insertError) {
        setError('Could not save passes: ' + insertError.message);
        setGenerating(false);
        return;
      }

      const totalN = allRows.length / 2;
      await supabase.from('payments').insert([{
        teacher_id: profile.id,
        stripe_session_id: sessionId,
        amount_paid: data.amountTotal,
        num_students: totalN,
        class_name: classes.map(c => c.className).join(', '),
        grade_level: Number(classes[0].grade),
      }]);

      localStorage.removeItem('pendingPassOrder');
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('payment');
      cleanUrl.searchParams.delete('session_id');
      window.history.replaceState({}, '', cleanUrl.toString());

      const classList = Object.values(byClass);
      setExpiresAt(newExpiresAt);
      if (classList.length === 1) {
        setClassName(classList[0].className);
        setGrade(classList[0].grade);
        setPasses(classList[0].passes);
      } else {
        setMultiClassResults(classList);
        setActiveResultClass(0);
        setClassName(classList[0].className);
        setGrade(classList[0].grade);
        setPasses(classList[0].passes);
      }
    } catch (err) {
      setError('Something went wrong: ' + err.message);
    }
    setGenerating(false);
  };

  const handleProceedToPayment = async () => {
    if (!isAddMode && !grade) {
      setError('Please select a grade level before proceeding.');
      return;
    }
    setGenerating(true);
    setError('');

    // Build the primary class entry
    const primaryClass = {
      className: className.trim(),
      grade: grade || String(existingClass?.grade_level || ''),
      studentCount: String(count),
      startingStudentNumber: String(startingStudentNumber),
    };

    // Merge with additional classes
    const allClasses = [primaryClass, ...additionalClasses.map(ac => {
      const ex = existingClasses.find(c => c.class_name === ac.className.trim());
      return {
        className: ac.className.trim(),
        grade: ac.grade,
        studentCount: ac.studentCount,
        startingStudentNumber: String(ex ? ex.maxStudentNumber + 1 : 1),
      };
    })].filter(c => c.className && c.grade && parseInt(c.studentCount) > 0);

    localStorage.setItem('pendingPassOrder', JSON.stringify({
      classes: allClasses,
      pricePerStudent: String(price),
    }));

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classes: allClasses,
          pricePerStudent: price,
          teacherId: profile.id,
        }),
      });
      if (!res.ok) {
        let msg = `Server error (${res.status})`;
        try { const d = await res.json(); msg = d.error || msg; } catch { /* non-JSON body */ }
        throw new Error(msg);
      }
      const { url, error: apiError } = await res.json();
      if (apiError) throw new Error(apiError);
      window.location.href = url;
    } catch (err) {
      setError('Could not start checkout: ' + err.message);
      localStorage.removeItem('pendingPassOrder');
      setGenerating(false);
    }
  };

  const handleBetaGenerate = async () => {
    if (!betaCode.trim()) { setBetaCodeError('Enter your code.'); return; }
    if (!isAddMode && !grade) { setBetaCodeError('Please select a grade level.'); return; }
    setGenerating(true);
    setBetaCodeError('');
    try {
      const { data: codeData, error: codeErr } = await supabase
        .from('beta_codes')
        .select('*')
        .eq('code', betaCode.trim().toUpperCase())
        .maybeSingle();

      if (codeErr || !codeData) {
        setBetaCodeError('Invalid code.');
        setGenerating(false);
        return;
      }
      if (codeData.expires_at && new Date(codeData.expires_at) < new Date()) {
        setBetaCodeError('This code has expired.');
        setGenerating(false);
        return;
      }
      if ((codeData.used_students || 0) + count > (codeData.max_students || 0)) {
        setBetaCodeError(`This code only has ${(codeData.max_students || 0) - (codeData.used_students || 0)} student passes remaining.`);
        setGenerating(false);
        return;
      }

      const rows = [];
      const passData = [];
      const betaExpiresAt = (() => { const d = new Date(); d.setMonth(d.getMonth() + 13); return d.toISOString(); })();
      for (let i = 0; i < count; i++) {
        const studentNum = startingStudentNumber + i;
        const pre  = makeToken();
        const post = makeToken();
        rows.push(
          { token: pre,  grade_level: Number(grade), test_type: 'pre',  teacher_id: profile.id, class_name: className.trim(), student_number: studentNum, expires_at: betaExpiresAt },
          { token: post, grade_level: Number(grade), test_type: 'post', teacher_id: profile.id, class_name: className.trim(), student_number: studentNum, expires_at: betaExpiresAt },
        );
        passData.push({ studentNum, pre, post });
      }

      const { error: insertError } = await supabase.from('tokens').insert(rows);
      if (insertError) { setBetaCodeError('Could not save passes: ' + insertError.message); setGenerating(false); return; }

      await supabase.from('beta_codes').update({ used_students: (codeData.used_students || 0) + count }).eq('code', codeData.code);
      setExpiresAt(betaExpiresAt);
      setPasses(passData);
    } catch (err) {
      setBetaCodeError('Something went wrong: ' + err.message);
    }
    setGenerating(false);
  };

  const printDoc = (html) => {
    const win = window.open('', '_blank', 'width=900,height=700');
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); win.close(); }, 300);
  };

  const getQrURLs = () => {
    const urls = {};
    passes.forEach(({ pre, post }) => {
      if (canvasRefs.current[pre])  urls[pre]  = canvasRefs.current[pre].toDataURL('image/png');
      if (canvasRefs.current[post]) urls[post] = canvasRefs.current[post].toDataURL('image/png');
    });
    return urls;
  };

  const passesExpired = !!(expiresAt && new Date(expiresAt) < new Date());

  const handlePrintPre    = () => printDoc(buildPassPrintHTML(passes, 'pre',  className, '', getQrURLs(), studentNames));
  const handlePrintPost   = () => printDoc(buildPassPrintHTML(passes, 'post', className, '', getQrURLs(), studentNames));
  const handlePrintMaster = () => printDoc(buildMasterSheetHTML(passes, className, gradeDisplay(grade), studentNames));
  const handleAnswerKey = () => {
    if (passesExpired) return;
    const qs = getQuestionsForGrade(Number(grade));
    setAnswerKeyData({ questions: qs, title: gradeDisplay(grade), subtitle: className });
    setShowAnswerKey(true);
  };

  const loadClassPasses = async (cls) => {
    setGenerating(true);
    setError('');
    const { data, error: dbError } = await supabase
      .from('tokens')
      .select('token, test_type, student_number, grade_level, expires_at')
      .eq('teacher_id', profile.id)
      .eq('class_name', cls)
      .order('student_number');
    if (dbError) {
      setError('Could not load passes: ' + dbError.message);
      setGenerating(false);
      return;
    }
    // Split by test type so we can assign sequential fallback numbers for old
    // records that have null student_number.
    const preRows  = data.filter(r => r.test_type === 'pre');
    const postRows = data.filter(r => r.test_type === 'post');
    const map = {};
    preRows.forEach(({ token, student_number }, idx) => {
      const num = (student_number != null && student_number > 0) ? student_number : (idx + 1);
      if (!map[num]) map[num] = { studentNum: num, pre: null, post: null };
      map[num].pre = token;
    });
    postRows.forEach(({ token, student_number }, idx) => {
      const num = (student_number != null && student_number > 0) ? student_number : (idx + 1);
      if (!map[num]) map[num] = { studentNum: num, pre: null, post: null };
      map[num].post = token;
    });
    setPasses(Object.values(map).sort((a, b) => a.studentNum - b.studentNum));
    setExpiresAt(data[0]?.expires_at ?? null);
    setIsViewingExisting(true);
    setGenerating(false);

    // Look up assessment_config_id for access windows scheduling
    const preToken = data.find(r => r.test_type === 'pre')?.token;
    if (preToken) {
      const { data: cfgData } = await supabase.from('token_configs').select('assessment_config_id').eq('token', preToken).maybeSingle();
      const configId = cfgData?.assessment_config_id ?? null;
      setAssessmentConfigId(configId);
      if (configId) loadSchedWindows(configId);
    } else {
      setAssessmentConfigId(null);
    }
  };

  const handleExportCSV = () => {
    const rows = [
      ['Student Name', 'Student #', 'Pre-Test Pass Code', 'Post-Test Pass Code', 'Class', 'Grade'],
      ...passes.map((p, idx) => {
        const dn = (p.studentNum != null && p.studentNum > 0) ? p.studentNum : (idx + 1);
        return [studentNames[dn] || '', `Student ${dn}`, p.pre || '', p.post || '', className, grade];
      }),
    ];
    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${className.replace(/\s+/g, '-')}-passes.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleAddMore = () => {
    setPasses([]);
    setStudentCount('');
    setError('');
    setStudentNames({});
    setIsViewingExisting(false);
    setMultiClassResults([]);
    setActiveResultClass(0);
    setAdditionalClasses([]);
    loadExistingClasses();
  };

  const fieldStyle = {
    width: '100%', padding: '10px 12px', fontSize: '15px',
    border: '1.5px solid #ddd', borderRadius: '6px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px' }}>
      {showTeacherScript && (
        <TeacherScriptMode
          questions={getQuestionsForGrade(Number(grade))}
          onClose={() => setShowTeacherScript(false)}
        />
      )}
      {showAnswerKey && (
        <AnswerKeyOverlay
          questions={answerKeyData.questions}
          title={answerKeyData.title}
          subtitle={answerKeyData.subtitle}
          onClose={() => setShowAnswerKey(false)}
          email={profile.email}
        />
      )}
      <button
        onClick={onBack}
        style={{
          background: 'none', border: 'none', color: '#5B8DB8',
          fontSize: '14px', cursor: 'pointer', padding: '0',
          marginBottom: '20px', fontWeight: 600,
        }}
      >
        {initialClass ? `← ${startInAddMode ? 'Cancel' : 'Back to Class'}` : '← Back to My Classes'}
      </button>

      <h2 style={{ margin: '0 0 24px', color: '#3D6B8A', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <KeyRound size={22} color="#3D6B8A" strokeWidth={1.75} />
        {startInAddMode ? `Add Students — ${initialClass?.class_name ?? ''}` : 'Student Passes'}
      </h2>

      {/* Form */}
      <div style={{
        background: 'white', borderRadius: '10px', padding: '28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '28px',
      }}>

        {/* Add-mode banner */}
        {isAddMode && (
          <div style={{
            background: '#D4EEE3', border: '1px solid #3D7A5E', borderRadius: '8px',
            padding: '11px 16px', marginBottom: '20px',
            fontSize: '13px', color: '#2A5C44',
            display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap',
          }}>
            <CheckCircle size={15} color="#3D7A5E" strokeWidth={2} style={{ flexShrink: 0 }} />
            <span style={{ flex: 1 }}>
              <strong>Adding to existing class:</strong> {existingClass.class_name} · {gradeDisplay(existingClass.grade_level)} · {existingClass.maxStudentNumber} student{existingClass.maxStudentNumber !== 1 ? 's' : ''} already generated · New passes start at Student {startingStudentNumber}
            </span>
            {passes.length === 0 && (
              <button
                onClick={() => loadClassPasses(className.trim())}
                disabled={generating}
                style={{
                  background: 'white', border: '1.5px solid #3D7A5E', borderRadius: '5px',
                  color: '#3D7A5E', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                  padding: '5px 12px', flexShrink: 0,
                }}
              >
                {generating ? 'Loading…' : `View existing passes →`}
              </button>
            )}
          </div>
        )}

        <datalist id="class-name-suggestions">
          {existingClasses.map(c => <option key={c.class_name} value={c.class_name} />)}
        </datalist>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px', marginBottom: '24px',
        }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>
              Class Name
            </label>
            <input
              type="text"
              list="class-name-suggestions"
              placeholder="e.g. Period 3"
              value={className}
              onChange={e => setClassName(e.target.value)}
              style={fieldStyle}
            />
            <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#888' }}>Select an existing class from the dropdown to add more students, or type a new class name to create one.</p>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>
              Grade Level
            </label>
            {isAddMode ? (
              <div style={{ ...fieldStyle, background: '#F4F7FA', color: '#555', display: 'flex', alignItems: 'center' }}>
                {gradeDisplay(existingClass.grade_level)}
              </div>
            ) : (
              <select value={grade} onChange={e => setGrade(e.target.value)} style={fieldStyle}>
                <option value="">Select grade…</option>
                {PASS_GRADES.map(g => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>
              {isAddMode ? 'Additional Students' : 'Number of Students'}
            </label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 25"
              value={studentCount}
              onChange={e => setStudentCount(e.target.value)}
              style={fieldStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>
              Price per Student
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#555', fontSize: '15px', pointerEvents: 'none' }}>$</span>
              <input
                type="number"
                min="2"
                step="0.50"
                value={pricePerStudent}
                onChange={e => setPricePerStudent(e.target.value)}
                onBlur={() => setPricePerStudent(price.toFixed(2))}
                style={{ ...fieldStyle, paddingLeft: '24px' }}
              />
            </div>
            <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#888' }}>Minimum $2.00 per student</p>
          </div>
        </div>

        {grade !== '' && Number(grade) <= 2 && (
          <div style={{
            background: '#F0F7FF', border: '1px solid #C5D9EC', borderRadius: '8px',
            padding: '12px 16px', marginBottom: '16px',
            fontSize: '13px', color: '#3D6B8A',
            display: 'flex', gap: '8px', alignItems: 'flex-start',
          }}>
            <span style={{ flexShrink: 0, fontSize: '16px' }}>&#128203;</span>
            <span>
              <strong>K&#8211;2 Tip:</strong> These assessments are designed to be read aloud by the teacher.
              We recommend projecting on a smartboard and reading each question and answer choice to the class as a group.
              Use the <strong>Teacher Script</strong> button after generating passes to launch a full-screen smartboard view.
            </span>
          </div>
        )}
        {count > 0 && (
          <div style={{
            background: '#F0F7FF', border: '1px solid #C5D9EC', borderRadius: '8px',
            padding: '12px 16px', marginBottom: '20px',
            fontSize: '15px', color: '#3D6B8A', fontWeight: 600,
          }}>
            {count} student{count !== 1 ? 's' : ''} × ${price.toFixed(2)} = <strong>${(price * count).toFixed(2)}</strong>
          </div>
        )}

        {validationHint && (
          <div style={{
            background: '#FFF8E1', border: '1px solid #FFE082', borderRadius: '6px',
            padding: '10px 14px', marginBottom: '16px',
            fontSize: '13px', color: '#7A5F00',
          }}>
            {validationHint}
          </div>
        )}

        <button
          onClick={handleProceedToPayment}
          disabled={!canProceed || Boolean(validationHint)}
          style={{
            padding: '12px 32px', fontSize: '15px', fontWeight: 'bold',
            border: 'none', borderRadius: '6px',
            backgroundColor: (canProceed && !validationHint) ? '#5B8DB8' : '#ccc',
            color: 'white', cursor: (canProceed && !validationHint) ? 'pointer' : 'not-allowed',
          }}
        >
          {generating ? 'Processing…' : 'Proceed to Payment →'}
        </button>

        {/* Beta code section */}
        <div style={{ marginTop: '14px' }}>
          <button
            onClick={() => { setShowBetaCode(v => !v); setBetaCodeError(''); }}
            style={{ background: 'none', border: 'none', color: '#64748b', fontSize: '12px', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
          >
            {showBetaCode ? 'Hide code ↑' : 'Have a code? →'}
          </button>
          {showBetaCode && (
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Code"
                value={betaCode}
                onChange={e => { setBetaCode(e.target.value.toUpperCase()); setBetaCodeError(''); }}
                style={{ padding: '10px 12px', fontSize: '15px', border: '1.5px solid #ddd', borderRadius: '6px', fontFamily: 'monospace', letterSpacing: '2px', width: '180px', boxSizing: 'border-box' }}
              />
              <button
                onClick={handleBetaGenerate}
                disabled={!canProceed || Boolean(validationHint) || generating}
                style={{
                  padding: '10px 22px', fontSize: '14px', fontWeight: 700,
                  border: 'none', borderRadius: '6px',
                  backgroundColor: (canProceed && !validationHint) ? '#2E7F84' : '#ccc',
                  color: 'white', cursor: (canProceed && !validationHint) ? 'pointer' : 'not-allowed',
                }}
              >
                {generating ? 'Processing…' : 'Use Code'}
              </button>
              {betaCodeError && <p style={{ color: '#f44336', margin: 0, fontSize: '13px', width: '100%', marginTop: '-4px' }}>{betaCodeError}</p>}
            </div>
          )}
        </div>

        {error && (
          <p style={{ color: '#f44336', marginTop: '12px', fontSize: '14px' }}>{error}</p>
        )}
      </div>

      {/* Multi-class result tabs */}
      {multiClassResults.length > 1 && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {multiClassResults.map((mc, idx) => (
            <button
              key={mc.className}
              onClick={() => {
                setActiveResultClass(idx);
                setClassName(mc.className);
                setGrade(mc.grade);
                setPasses(mc.passes);
                setStudentNames({});
                setActiveTab('pre');
              }}
              style={{
                padding: '8px 18px', fontSize: '13px', fontWeight: 700,
                border: '2px solid ' + (idx === activeResultClass ? '#5B8DB8' : '#E2E8F0'),
                borderRadius: '6px',
                background: idx === activeResultClass ? '#EAF1F8' : 'white',
                color: idx === activeResultClass ? '#3D6B8A' : '#64748b',
                cursor: 'pointer',
              }}
            >
              {mc.className}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {passes.length > 0 && (
        <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>

          {/* Expiry banner */}
          {expiresAt && (() => {
            const exp = new Date(expiresAt);
            const now = new Date();
            const expired = exp < now;
            const daysLeft = Math.ceil((exp - now) / 86400000);
            const expLabel = exp.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            if (expired) return (
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#475569', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0 }}>ℹ️</span>
                <div>
                  <div>These passes expired on <strong>{expLabel}</strong>. Students can no longer take assessments. Pass codes, results, reports, and CSV exports remain accessible.</div>
                  <div style={{ marginTop: '6px', color: '#64748b' }}>
                    <strong>Assessment content (answer key, teacher script) is no longer available.</strong> Purchase new passes to restore access.
                  </div>
                </div>
              </div>
            );
            if (daysLeft <= 30) return (
              <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#92400e', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0 }}>⚠️</span>
                <span>These passes expire on <strong>{expLabel}</strong>. Students will not be able to take assessments after this date. Results, reports, and assessment content remain accessible until then.</span>
              </div>
            );
            return null;
          })()}

          {/* Instruction note */}
          {!isViewingExisting && (
            <div style={{
              background: '#FFF8E1', border: '1px solid #FFE082', borderRadius: '8px',
              padding: '11px 16px', marginBottom: '24px',
              fontSize: '13px', color: '#7A5F00',
              display: 'flex', gap: '8px', alignItems: 'flex-start',
            }}>
              <span style={{ flexShrink: 0, fontWeight: 800 }}>ℹ</span>
              <span>Hand out <strong>pre-test passes</strong> first. Save <strong>post-test passes</strong> for after instruction.</span>
            </div>
          )}

          {/* Header + print/export buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', color: '#3D6B8A' }}>
                {className} — Grade {grade}
                {isViewingExisting && <span style={{ marginLeft: '10px', fontSize: '13px', fontWeight: 400, color: '#888' }}>(existing passes)</span>}
              </h3>
              <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>
                {passes.length} student{passes.length !== 1 ? 's' : ''} &nbsp;·&nbsp; {passes.length * 2} passes ({passes.length} pre-test + {passes.length} post-test)
                {passes[0]?.studentNum > 1 && <span> &nbsp;·&nbsp; Students {passes[0].studentNum}–{passes[passes.length - 1].studentNum}</span>}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={handlePrintPre}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '6px', backgroundColor: '#5B8DB8', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><Printer size={14} strokeWidth={2} />Print Pre-Test Passes</button>
              <button
                onClick={handlePrintPost}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '6px', backgroundColor: '#3D7A5E', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><Printer size={14} strokeWidth={2} />Print Post-Test Passes</button>
              <button
                onClick={handlePrintMaster}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #ddd', borderRadius: '6px', backgroundColor: 'white', color: '#555', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><Printer size={14} strokeWidth={2} color="#555" />Print Master Sheet</button>
              <button
                onClick={handleExportCSV}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #ddd', borderRadius: '6px', backgroundColor: 'white', color: '#555', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><FileText size={14} strokeWidth={2} color="#555" />Export CSV</button>
              {grade !== '' && !passesExpired && (
                <button
                  onClick={handleAnswerKey}
                  style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #6B5F9B', borderRadius: '6px', backgroundColor: '#EDEAF6', color: '#4B3F82', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                ><BookOpen size={14} strokeWidth={2} color="#4B3F82" />Answer Key</button>
              )}
              {grade !== '' && Number(grade) <= 2 && !passesExpired && (
                <button
                  onClick={() => setShowTeacherScript(true)}
                  style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #5B8DB8', borderRadius: '6px', backgroundColor: '#EAF1F8', color: '#3D6B8A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                ><ClipboardList size={14} strokeWidth={2} color="#3D6B8A" />Teacher Script</button>
              )}
            </div>
          </div>

          {/* Privacy note */}
          <div style={{
            background: '#F4F7FA', border: '1px solid #E2E8F0', borderRadius: '6px',
            padding: '9px 14px', marginBottom: '16px',
            fontSize: '12px', color: '#5f7a8a',
          }}>
            <strong>Student names are optional and for print purposes only.</strong> No student names are saved or retained by TechGrowth Check.
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '2px solid #E8EDF2', marginBottom: '16px' }}>
            {[
              { id: 'pre',  label: 'Pre-Test Passes',  color: '#5B8DB8' },
              { id: 'post', label: 'Post-Test Passes', color: '#3D7A5E' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 20px', fontSize: '14px',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  background: 'none', border: 'none',
                  borderBottom: activeTab === tab.id ? `2.5px solid ${tab.color}` : '2.5px solid transparent',
                  color: activeTab === tab.id ? tab.color : '#888',
                  cursor: 'pointer', marginBottom: '-2px',
                }}
              >{tab.label}</button>
            ))}
          </div>

          {/* Pass list for active tab */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F4F7FA', textAlign: 'left' }}>
                  <th style={{ padding: '10px 16px', fontWeight: 600, fontSize: '13px', color: activeTab === 'pre' ? '#5B8DB8' : '#3D7A5E' }}>
                    {activeTab === 'pre' ? 'Pre-Test' : 'Post-Test'} Pass Code
                  </th>
                  <th style={{ padding: '10px 16px', fontWeight: 600, fontSize: '13px', color: '#3D4B5C' }}>QR Code</th>
                  <th style={{ padding: '10px 16px', fontWeight: 600, fontSize: '13px', color: '#3D4B5C' }}>Student Name <span style={{ fontWeight: 400, color: '#aaa' }}>(optional)</span></th>
                </tr>
              </thead>
              <tbody>
                {passes.map(({ studentNum, pre, post }, idx) => {
                  const displayNum = (studentNum != null && studentNum > 0) ? studentNum : (idx + 1);
                  const token = activeTab === 'pre' ? pre : post;
                  const color = activeTab === 'pre' ? '#5B8DB8' : '#3D7A5E';
                  return (
                    <tr key={displayNum} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ fontFamily: 'monospace', fontSize: '18px', fontWeight: 700, color, letterSpacing: '2px' }}>{token}</div>
                        <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>Student {displayNum}</div>
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <QRCodeSVG value={`${appUrl}?code=${token}`} size={56} />
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <input
                          type="text"
                          placeholder="Type name…"
                          value={studentNames[displayNum] || ''}
                          onChange={e => setStudentNames(prev => ({ ...prev, [displayNum]: e.target.value }))}
                          style={{
                            width: '100%', maxWidth: '220px', padding: '7px 10px',
                            fontSize: '13px', border: '1.5px solid #e2e8f0',
                            borderRadius: '5px', outline: 'none', boxSizing: 'border-box',
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Hidden canvases for QR data URLs */}
          <div style={{ position: 'fixed', left: '-9999px', top: '-9999px', pointerEvents: 'none' }}>
            {passes.flatMap(({ pre, post }) => [
              <QRCodeCanvas key={`c-pre-${pre}`}  ref={el => { if (el) canvasRefs.current[pre]  = el; }} value={`${appUrl}?code=${pre}`}  size={80} />,
              <QRCodeCanvas key={`c-post-${post}`} ref={el => { if (el) canvasRefs.current[post] = el; }} value={`${appUrl}?code=${post}`} size={80} />,
            ])}
          </div>

          {/* Access Windows */}
          {isViewingExisting && (
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
              <button
                onClick={() => setSchedOpen(o => !o)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: 0, fontSize: '14px', fontWeight: 700, color: '#3D6B8A' }}
              >
                <Clock size={16} strokeWidth={2} color="#3D6B8A" />
                Access Windows
                {schedOpen ? <ChevronDown size={16} color="#3D6B8A" /> : <ChevronRight size={16} color="#3D6B8A" />}
                {schedWindows.length > 0 && (
                  <span style={{ background: '#EAF1F8', color: '#3D6B8A', fontSize: '11px', fontWeight: 700, padding: '2px 7px', borderRadius: '10px' }}>
                    {schedWindows.length}
                  </span>
                )}
              </button>

              {schedOpen && (
                <div style={{ marginTop: '16px' }}>
                  {!assessmentConfigId ? (
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px 16px', fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                      <strong>Access windows apply only to custom assessments</strong> created via Create Custom Assessment. Standard grade-level passes are always open.
                    </div>
                  ) : (
                    <>
                      <p style={{ margin: '0 0 16px', fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                        Set time windows when students are allowed to start this assessment. Outside these windows students see a message that it is unavailable.{' '}
                        <strong>No windows = always open.</strong>
                      </p>

                      {/* Add form */}
                      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Add Window</div>

                        <div style={{ marginBottom: '12px' }}>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '5px' }}>Days of Week</div>
                          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                            {SCHED_DAY_LABELS.map((day, i) => {
                              const on = schedFormDays.has(i);
                              return (
                                <button key={i} onClick={() => toggleSchedDay(i)} style={{ padding: '5px 9px', borderRadius: '5px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, border: on ? '2px solid #5B8DB8' : '2px solid #e2e8f0', background: on ? '#EAF1F8' : 'white', color: on ? '#3D6B8A' : '#64748b' }}>{day}</button>
                              );
                            })}
                          </div>
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                          {schedShowTzPicker ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                              <span style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap' }}>Times are in:</span>
                              <select value={schedTz} autoFocus onChange={e => handleSchedTzChange(e.target.value)} onBlur={() => setSchedShowTzPicker(false)}
                                style={{ fontSize: '13px', padding: '4px 8px', border: '1px solid #5B8DB8', borderRadius: '5px', color: '#1e293b', cursor: 'pointer' }}>
                                {TIMEZONES.map(tz => <option key={tz} value={tz}>{getSchedTzLongName(tz)} — {tz}</option>)}
                                {!TIMEZONES.includes(schedTz) && <option value={schedTz}>{getSchedTzLongName(schedTz)} — {schedTz}</option>}
                              </select>
                            </div>
                          ) : (
                            <button onClick={() => setSchedShowTzPicker(true)} title="Click to change timezone" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                              <span style={{ fontSize: '12px' }}>🌐</span>
                              <span style={{ fontSize: '12px', color: '#64748b' }}>Times in: <strong style={{ color: '#3D6B8A' }}>{getSchedTzLongName(schedTz)}</strong>{' '}<span style={{ color: '#94a3b8' }}>({schedTz})</span></span>
                              <span style={{ fontSize: '10px', color: '#5B8DB8' }}>▾</span>
                            </button>
                          )}
                        </div>

                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                          <div style={{ flex: 1, minWidth: '120px' }}>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>Start Time</label>
                            <input type="time" value={schedFormStart} onChange={e => setSchedFormStart(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
                          </div>
                          <div style={{ flex: 1, minWidth: '120px' }}>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>End Time</label>
                            <input type="time" value={schedFormEnd} onChange={e => setSchedFormEnd(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
                          </div>
                          <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>Repeat Until</label>
                            <input type="date" value={schedFormUntil} onChange={e => setSchedFormUntil(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
                          </div>
                        </div>

                        {schedError && <p style={{ color: '#ef4444', fontSize: '13px', margin: '0 0 12px' }}>{schedError}</p>}

                        <button onClick={handleSchedAdd} disabled={schedSaving} style={{ padding: '8px 20px', fontSize: '13px', fontWeight: 700, border: 'none', borderRadius: '6px', background: '#5B8DB8', color: 'white', cursor: schedSaving ? 'not-allowed' : 'pointer', opacity: schedSaving ? 0.7 : 1 }}>
                          {schedSaving ? 'Adding…' : '+ Add Window'}
                        </button>
                      </div>

                      {schedLoading ? (
                        <p style={{ fontSize: '13px', color: '#94a3b8' }}>Loading…</p>
                      ) : schedWindows.length === 0 ? (
                        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>No windows set — this assessment is open at all times.</p>
                      ) : (
                        <div>
                          {schedWindows.map((w, i) => (
                            <div key={w.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < schedWindows.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e293b', marginBottom: '2px' }}>
                                  {fmtSchedDays(w.days_of_week)} · {fmtSchedTime(w.start_time)} – {fmtSchedTime(w.end_time)}{' '}
                                  <span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '12px' }}>{getSchedTzAbbr(schedTz)}</span>
                                </div>
                                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Repeats until {fmtSchedDate(w.repeat_until)}</div>
                              </div>
                              <button onClick={() => handleSchedDelete(w.id)} style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', borderRadius: '5px', padding: '5px 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, marginLeft: '12px', flexShrink: 0 }}>Delete</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Add more students */}
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleAddMore}
              style={{
                padding: '10px 24px', fontSize: '14px', fontWeight: 600,
                border: '1.5px solid #5B8DB8', borderRadius: '6px',
                backgroundColor: 'white', color: '#5B8DB8', cursor: 'pointer',
              }}
            >
              {isViewingExisting ? '← Back to form' : `+ Add More Students to ${className}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Create Assessment ─────────────────────────────────────────────────────────

function CreateAssessment({ profile, onBack }) {
  const [grades, setGrades] = useState(new Set());
  const [assessmentName, setAssessmentName] = useState('');
  const [className, setClassName] = useState('');
  const [studentCount, setStudentCount] = useState('');
  const [config, setConfig] = useState({});
  const [generating, setGenerating] = useState(false);
  const [passes, setPasses] = useState([]);
  const [error, setError] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [randomizeQuestions, setRandomizeQuestions] = useState(true);
  const [activeTab, setActiveTab] = useState('pre');
  const canvasRefs = useRef({});
  const [showTeacherScriptCA, setShowTeacherScriptCA] = useState(false);
  const [showAnswerKeyCA, setShowAnswerKeyCA] = useState(false);
  const [answerKeyDataCA, setAnswerKeyDataCA] = useState({ questions: [], title: '', subtitle: '' });
  const [caPassExpiresAt, setCaPassExpiresAt] = useState(null);
  const passesExpiredCA = !!(caPassExpiresAt && new Date(caPassExpiresAt) < new Date());

  const sortedGrades = [...grades].sort((a, b) => Number(a) - Number(b));
  const gradeStrandGroups = sortedGrades.map(g => ({
    grade: g,
    strandGroups: buildStandards(getQuestionsForGrade(Number(g))),
  }));
  const strandGroups = gradeStrandGroups.flatMap(({ strandGroups: sg }) => sg);
  const fullQuestionCount = sortedGrades.reduce((n, g) => n + getQuestionsForGrade(Number(g)).length, 0);
  const gradeLabel = sortedGrades.length === 0 ? '' :
    sortedGrades.length === 1 ? gradeDisplay(sortedGrades[0]) :
    `Grades ${sortedGrades.map(g => Number(g) === 0 ? 'K' : g).join(', ')}`;

  useEffect(() => {
    if (grades.size === 0) return;
    setConfig(prev => {
      const newConfig = {};
      sortedGrades.forEach(g => {
        buildStandards(getQuestionsForGrade(Number(g))).forEach(({ standards }) => {
          standards.forEach(std => {
            newConfig[std.id] = prev[std.id] ?? { checked: true, count: 3 };
          });
        });
      });
      return newConfig;
    });
    setPasses([]);
    setError('');
  }, [grades]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectedIds = strandGroups.flatMap(({ standards }) =>
    standards.flatMap(std =>
      config[std.id]?.checked
        ? std.questions.slice(0, config[std.id]?.count ?? 3).map(q => q.id)
        : []
    )
  );

  const totalQ = selectedIds.length;
  const selectedStdCount = strandGroups.reduce(
    (n, { standards }) => n + standards.filter(std => config[std.id]?.checked).length, 0
  );
  const previewGroups = gradeStrandGroups.map(({ grade: g, strandGroups: sg }) => ({
    grade: g,
    strandGroups: sg
      .map(({ strand, standards }) => ({
        strand,
        standards: standards
          .filter(std => config[std.id]?.checked)
          .map(std => ({ ...std, questions: std.questions.slice(0, config[std.id]?.count ?? 3) })),
      }))
      .filter(({ standards }) => standards.length > 0),
  })).filter(({ strandGroups: sg }) => sg.length > 0);

  const estimatedTime = (() => {
    const mins = Math.round(totalQ * 45 / 60);
    if (mins === 0) return null;
    if (mins < 60) return `${mins} minute${mins === 1 ? '' : 's'}`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const hStr = `${h} hour${h === 1 ? '' : 's'}`;
    return m === 0 ? hStr : `${hStr} ${m} minute${m === 1 ? '' : 's'}`;
  })();
  const count = parseInt(studentCount) || 0;
  const canGenerate =
    className.trim().length > 0 && assessmentName.trim().length > 0 &&
    grades.size > 0 && count >= 1 && count <= 200 &&
    totalQ > 0 && !generating;

  const appUrl = `${window.location.origin}/student`;

  const toggleGrade = (g) => setGrades(prev => {
    const next = new Set(prev);
    if (next.has(String(g))) next.delete(String(g)); else next.add(String(g));
    return next;
  });

  const toggleStd = (stdId) =>
    setConfig(prev => ({ ...prev, [stdId]: { ...prev[stdId], checked: !prev[stdId]?.checked } }));

  const setQCount = (stdId, n) =>
    setConfig(prev => ({ ...prev, [stdId]: { ...prev[stdId], count: n } }));

  const setStrandAll = (standards, checked) =>
    setConfig(prev => {
      const next = { ...prev };
      standards.forEach(std => { next[std.id] = { ...next[std.id], checked }; });
      return next;
    });

  const setAllCounts = (n) =>
    setConfig(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(id => { next[id] = { ...next[id], count: n }; });
      return next;
    });

  const handleGenerate = async () => {
    setGenerating(true);
    setError('');
    setPasses([]);

    // Build a clean standards_config from only the currently active standards
    const standardsConfig = {};
    strandGroups.forEach(({ standards }) => {
      standards.forEach(std => {
        if (config[std.id]) standardsConfig[std.id] = config[std.id];
      });
    });

    // Save the named assessment configuration — shared by pre and post
    const { data: acData, error: acErr } = await supabase.from('assessment_configs').insert({
      teacher_id: profile.id,
      name: assessmentName.trim(),
      grade_levels: sortedGrades.map(Number),
      standards_config: standardsConfig,
      total_questions: totalQ,
    }).select('id').single();
    if (acErr) { setError('Could not save assessment config: ' + acErr.message); setGenerating(false); return; }

    const assessmentConfigId = acData.id;
    const primaryGrade = sortedGrades.length > 0 ? Number(sortedGrades[0]) : null;
    const caExpiresAt = (() => { const d = new Date(); d.setMonth(d.getMonth() + 13); return d.toISOString(); })();
    const rows = [];
    const configRows = [];
    const passData = [];
    const earlyGradeIds = new Set(
      sortedGrades.filter(g => Number(g) <= 2).flatMap(g => getQuestionsForGrade(Number(g)).map(q => q.id))
    );
    const shouldRandomize = randomizeQuestions && sortedGrades.some(g => Number(g) >= 3);
    for (let i = 1; i <= count; i++) {
      const pre  = makeToken();
      const post = makeToken();
      const orderedIds = shouldRandomize
        ? [
            ...selectedIds.filter(id => earlyGradeIds.has(id)),
            ...[...selectedIds.filter(id => !earlyGradeIds.has(id))].sort(() => Math.random() - 0.5),
          ]
        : selectedIds;
      rows.push(
        { token: pre,  grade_level: primaryGrade, test_type: 'pre',  teacher_id: profile.id, class_name: className.trim(), student_number: i, expires_at: caExpiresAt },
        { token: post, grade_level: primaryGrade, test_type: 'post', teacher_id: profile.id, class_name: className.trim(), student_number: i, expires_at: caExpiresAt },
      );
      configRows.push(
        { token: pre,  question_ids: orderedIds, assessment_config_id: assessmentConfigId },
        { token: post, question_ids: orderedIds, assessment_config_id: assessmentConfigId },
      );
      passData.push({ studentNum: i, pre, post });
    }

    const { error: tokensErr } = await supabase.from('tokens').insert(rows);
    if (tokensErr) { setError('Could not save passes: ' + tokensErr.message); setGenerating(false); return; }

    const { error: cfgErr } = await supabase.from('token_configs').insert(configRows);
    if (cfgErr) { setError('Could not save question config: ' + cfgErr.message); setGenerating(false); return; }

    setPasses(passData);
    setCaPassExpiresAt(caExpiresAt);
    setGenerating(false);
  };

  const printDoc = (html) => {
    const win = window.open('', '_blank', 'width=900,height=700');
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); win.close(); }, 300);
  };

  const getQrURLs = () => {
    const urls = {};
    passes.forEach(({ pre, post }) => {
      if (canvasRefs.current[pre])  urls[pre]  = canvasRefs.current[pre].toDataURL('image/png');
      if (canvasRefs.current[post]) urls[post] = canvasRefs.current[post].toDataURL('image/png');
    });
    return urls;
  };

  const handlePrintPre    = () => printDoc(buildPassPrintHTML(passes, 'pre',  className, assessmentName, getQrURLs()));
  const handlePrintPost   = () => printDoc(buildPassPrintHTML(passes, 'post', className, assessmentName, getQrURLs()));
  const handlePrintMaster = () => printDoc(buildMasterSheetHTML(passes, className, gradeLabel));
  const handleAnswerKeyCA = () => {
    const allQs = sortedGrades.flatMap(g => getQuestionsForGrade(Number(g)));
    const qs = selectedIds.map(id => allQs.find(q => q.id === id)).filter(Boolean);
    setAnswerKeyDataCA({ questions: qs, title: assessmentName || gradeLabel, subtitle: className });
    setShowAnswerKeyCA(true);
  };

  const fieldStyle = {
    width: '100%', padding: '10px 12px', fontSize: '15px',
    border: '1.5px solid #ddd', borderRadius: '6px', boxSizing: 'border-box',
  };

  const sectionBox = {
    background: 'white', borderRadius: '10px', padding: '24px 28px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '16px',
  };

  return (
    <div style={{ maxWidth: '1020px', margin: '0 auto', padding: '32px 24px' }}>
      {showTeacherScriptCA && (
        <TeacherScriptMode
          questions={selectedIds.map(id => sortedGrades.flatMap(g => getQuestionsForGrade(Number(g))).find(q => q.id === id)).filter(Boolean)}
          onClose={() => setShowTeacherScriptCA(false)}
        />
      )}
      {showAnswerKeyCA && (
        <AnswerKeyOverlay
          questions={answerKeyDataCA.questions}
          title={answerKeyDataCA.title}
          subtitle={answerKeyDataCA.subtitle}
          onClose={() => setShowAnswerKeyCA(false)}
          email={profile.email}
        />
      )}
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '14px', cursor: 'pointer', padding: 0, marginBottom: '20px' }}
      >
        ← Back to Dashboard
      </button>

      <h2 style={{ margin: '0 0 6px', color: '#3D6B8A', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ClipboardList size={22} color="#3D6B8A" strokeWidth={1.75} />
        Create Custom Assessment
      </h2>
      <p style={{ margin: '0 0 28px', color: '#888', fontSize: '14px' }}>
        Choose standards and question counts to build a targeted assessment. Use <strong>Generate Student Passes</strong> for the full 87-question assessment.
      </p>

      {/* Step 1 – Grade */}
      <div style={sectionBox}>
        <h3 style={{ margin: '0 0 14px', fontSize: '13px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Step 1 · Select Grade Level(s)
        </h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {PASS_GRADES.map(g => {
            const selected = grades.has(String(g.value));
            return (
              <label
                key={g.value}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '11px 20px', fontSize: '15px', fontWeight: 600, borderRadius: '8px', cursor: 'pointer',
                  border: selected ? '2px solid #5B8DB8' : '2px solid #e0e0e0',
                  background: selected ? '#EAF1F8' : 'white',
                  color: selected ? '#3D6B8A' : '#555',
                  userSelect: 'none',
                }}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleGrade(g.value)}
                  style={{ width: '16px', height: '16px', accentColor: '#5B8DB8', cursor: 'pointer' }}
                />
                {g.label}
              </label>
            );
          })}
        </div>

        {grades.size > 0 && sortedGrades.every(g => Number(g) <= 2) && (
          <div style={{
            background: '#F0F7FF', border: '1px solid #C5D9EC', borderRadius: '8px',
            padding: '12px 16px', marginTop: '16px',
            fontSize: '13px', color: '#3D6B8A',
            display: 'flex', gap: '8px', alignItems: 'flex-start',
          }}>
            <span style={{ flexShrink: 0, fontSize: '16px' }}>&#128203;</span>
            <span>
              <strong>K&#8211;2 Tip:</strong> These assessments are designed to be read aloud by the teacher.
              We recommend projecting on a smartboard and reading each question and answer choice to the class as a group.
              A <strong>Teacher Script</strong> button will appear after generating passes.
            </span>
          </div>
        )}

        {grades.size > 0 && sortedGrades.some(g => Number(g) >= 3) && (
          <label style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px',
            fontSize: '14px', fontWeight: 600, color: '#3D4B5C', cursor: 'pointer',
          }}>
            <input
              type="checkbox"
              checked={randomizeQuestions}
              onChange={e => setRandomizeQuestions(e.target.checked)}
              style={{ width: '17px', height: '17px', accentColor: '#5B8DB8', cursor: 'pointer' }}
            />
            Randomize question order per student
            <span style={{ fontSize: '12px', fontWeight: 400, color: '#888' }}>
              (students sitting next to each other see questions in a different order)
            </span>
          </label>
        )}
      </div>

      {/* Step 2 – Standards */}
      {grades.size > 0 && strandGroups.length > 0 && (
        <>
          <div style={{
            background: '#EAF1F8', borderRadius: '8px', padding: '11px 20px',
            marginBottom: '14px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '14px', color: '#3D6B8A', fontWeight: 700 }}>
              {selectedStdCount} of {strandGroups.reduce((n, g) => n + g.standards.length, 0)} standards selected
              &nbsp;·&nbsp; {totalQ} total questions
            </span>
            {estimatedTime && (
              <span style={{ fontSize: '13px', color: '#3D6B8A', fontWeight: 600 }}>
                ⏱ Estimated time: {estimatedTime}
              </span>
            )}
            <span style={{ fontSize: '12px', color: '#888' }}>(full assessment = {fullQuestionCount} questions)</span>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)',
            borderRadius: '10px', padding: '18px 24px', marginBottom: '14px',
            display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap',
            boxShadow: '0 2px 10px rgba(61,107,138,0.25)',
          }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '3px' }}>
                Quick Set
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>
                Set all standards to:
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  onClick={() => setAllCounts(n)}
                  style={{
                    width: '52px', height: '44px', fontSize: '18px', fontWeight: 800,
                    border: '2px solid rgba(255,255,255,0.5)', borderRadius: '8px',
                    cursor: 'pointer', background: 'rgba(255,255,255,0.15)',
                    color: 'white', transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)'; e.currentTarget.style.borderColor = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                >{n}</button>
              ))}
            </div>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
              question per standard — adjust individually below
            </span>
          </div>

          <div style={{ ...sectionBox, padding: '0' }}>
            <div style={{ padding: '16px 24px', borderBottom: '2px solid #f0f0f0' }}>
              <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Step 2 · Configure Standards
              </h3>
            </div>

            {gradeStrandGroups.map(({ grade: g, strandGroups: sg }, gi) => (
              <div key={g}>
                {grades.size > 1 && (
                  <div style={{
                    padding: '10px 24px',
                    background: 'linear-gradient(135deg, #2D5573 0%, #3D6B8A 100%)',
                    borderTop: gi > 0 ? '2px solid #2A4D68' : 'none',
                  }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: '14px', letterSpacing: '0.3px' }}>
                      Grade {g}
                    </span>
                  </div>
                )}
                {sg.map(({ strand, standards }, si) => {
                  const isLastStrand = si === sg.length - 1;
                  const isLastGrade = gi === gradeStrandGroups.length - 1;
                  const allChecked  = standards.every(std =>  config[std.id]?.checked);
                  const noneChecked = standards.every(std => !config[std.id]?.checked);
                  return (
                    <div key={`${g}-${strand}`} style={{ borderBottom: (!isLastStrand || !isLastGrade) ? '1px solid #f0f0f0' : 'none' }}>
                      {/* Strand header */}
                      <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 24px', background: '#FAFBFC',
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#5B8DB8', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                          {strand}
                        </span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            onClick={() => setStrandAll(standards, true)}
                            style={{
                              fontSize: '11px', padding: '3px 10px', border: '1px solid #5B8DB8',
                              borderRadius: '4px', cursor: 'pointer',
                              background: allChecked ? '#5B8DB8' : 'white',
                              color: allChecked ? 'white' : '#5B8DB8',
                            }}
                          >All</button>
                          <button
                            onClick={() => setStrandAll(standards, false)}
                            style={{
                              fontSize: '11px', padding: '3px 10px', border: '1px solid #bbb',
                              borderRadius: '4px', cursor: 'pointer',
                              background: noneChecked ? '#888' : 'white',
                              color: noneChecked ? 'white' : '#888',
                            }}
                          >None</button>
                        </div>
                      </div>

                      {/* Standard rows */}
                      {standards.map(std => {
                        const cfg = config[std.id] ?? { checked: true, count: 3 };
                        return (
                          <div
                            key={std.id}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '12px',
                              padding: '9px 24px', borderTop: '1px solid #f8f8f8',
                              background: cfg.checked ? 'white' : '#FAFBFC',
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={!!cfg.checked}
                              onChange={() => toggleStd(std.id)}
                              style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#5B8DB8', flexShrink: 0 }}
                            />
                            <span style={{ flex: 1, fontSize: '14px', color: cfg.checked ? '#3D4B5C' : '#bbb' }}>
                              {std.label}
                            </span>
                            {cfg.checked ? (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                                <span style={{ fontSize: '11px', color: '#aaa', marginRight: '4px' }}>questions:</span>
                                {[1, 2, 3].map(n => (
                                  <button
                                    key={n}
                                    onClick={() => setQCount(std.id, n)}
                                    style={{
                                      width: '30px', height: '28px', fontSize: '13px',
                                      fontWeight: cfg.count === n ? 700 : 400,
                                      border: cfg.count === n ? '2px solid #5B8DB8' : '1px solid #ddd',
                                      borderRadius: '4px', cursor: 'pointer',
                                      background: cfg.count === n ? '#EAF1F8' : 'white',
                                      color: cfg.count === n ? '#3D6B8A' : '#888',
                                    }}
                                  >{n}</button>
                                ))}
                              </div>
                            ) : (
                              <span style={{ fontSize: '12px', color: '#ccc', width: '110px', textAlign: 'right' }}>skipped</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Step 3 – Class setup + Generate */}
          <div style={sectionBox}>
            <h3 style={{ margin: '0 0 14px', fontSize: '13px', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Step 3 · Class Setup
            </h3>

            {/* Locked-config note */}
            <div style={{
              display: 'flex', gap: '10px', alignItems: 'flex-start',
              background: '#EDF7F1', border: '1.5px solid #7BC4A0', borderRadius: '8px',
              padding: '12px 16px', marginBottom: '20px',
            }}>
              <span style={{ fontSize: '16px', flexShrink: 0 }}>🔒</span>
              <p style={{ margin: 0, fontSize: '13px', color: '#2A5A43', lineHeight: 1.55 }}>
                <strong>This configuration will be used for both the pre-test and post-test</strong> to ensure accurate growth measurement.
                The same standards and question counts are locked in for both assessments.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>Assessment Name</label>
                <input type="text" placeholder="e.g. Unit 2 – Algorithms" value={assessmentName} onChange={e => setAssessmentName(e.target.value)} style={fieldStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>Class Name</label>
                <input type="text" placeholder="e.g. Period 3" value={className} onChange={e => setClassName(e.target.value)} style={fieldStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>Number of Students</label>
                <input type="number" min="1" max="200" placeholder="e.g. 25" value={studentCount} onChange={e => setStudentCount(e.target.value)} style={fieldStyle} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {totalQ > 0 && (
                <button
                  onClick={() => setShowPreview(true)}
                  style={{
                    padding: '12px 24px', fontSize: '15px', fontWeight: 600,
                    border: '2px solid #5B8DB8', borderRadius: '6px',
                    background: 'white', color: '#3D6B8A', cursor: 'pointer',
                  }}
                >
                  👁 Preview Assessment ({totalQ} questions)
                </button>
              )}
              <button
                onClick={handleGenerate}
                disabled={!canGenerate}
                style={{
                  padding: '12px 32px', fontSize: '15px', fontWeight: 'bold',
                  border: 'none', borderRadius: '6px',
                  backgroundColor: canGenerate ? '#5B8DB8' : '#ccc',
                  color: 'white', cursor: canGenerate ? 'pointer' : 'not-allowed',
                }}
              >
                {generating ? 'Generating…' : `Generate ${count > 0 ? count + ' ' : ''}Custom Passes`}
              </button>
            </div>

            {error && <p style={{ color: '#f44336', marginTop: '12px', fontSize: '14px' }}>{error}</p>}
          </div>
        </>
      )}

      {/* Generated passes */}
      {passes.length > 0 && (
        <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>

          {/* Instruction note */}
          <div style={{
            background: '#FFF8E1', border: '1px solid #FFE082', borderRadius: '8px',
            padding: '11px 16px', marginBottom: '24px',
            fontSize: '13px', color: '#7A5F00',
            display: 'flex', gap: '8px', alignItems: 'flex-start',
          }}>
            <span style={{ flexShrink: 0, fontWeight: 800 }}>ℹ</span>
            <span>Hand out <strong>pre-test passes</strong> first. Save <strong>post-test passes</strong> for after instruction.</span>
          </div>

          {/* Header + print buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h3 style={{ margin: '0 0 4px', color: '#3D6B8A' }}>{className} — {gradeLabel}</h3>
              <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>
                {passes.length} students &nbsp;·&nbsp; {passes.length * 2} passes &nbsp;·&nbsp; {totalQ}-question custom assessment
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={handlePrintPre}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '6px', backgroundColor: '#5B8DB8', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><Printer size={14} strokeWidth={2} />Print Pre-Test Passes</button>
              <button
                onClick={handlePrintPost}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: 'none', borderRadius: '6px', backgroundColor: '#3D7A5E', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><Printer size={14} strokeWidth={2} />Print Post-Test Passes</button>
              <button
                onClick={handlePrintMaster}
                style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #ddd', borderRadius: '6px', backgroundColor: 'white', color: '#555', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              ><Printer size={14} strokeWidth={2} color="#555" />Print Master Sheet</button>
              {!passesExpiredCA && (
                <button
                  onClick={handleAnswerKeyCA}
                  style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #6B5F9B', borderRadius: '6px', backgroundColor: '#EDEAF6', color: '#4B3F82', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                ><BookOpen size={14} strokeWidth={2} color="#4B3F82" />Answer Key</button>
              )}
              {sortedGrades.every(g => Number(g) <= 2) && !passesExpiredCA && (
                <button
                  onClick={() => setShowTeacherScriptCA(true)}
                  style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #5B8DB8', borderRadius: '6px', backgroundColor: '#EAF1F8', color: '#3D6B8A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                ><ClipboardList size={14} strokeWidth={2} color="#3D6B8A" />Teacher Script</button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '2px solid #E8EDF2', marginBottom: '16px' }}>
            {[
              { id: 'pre',  label: 'Pre-Test Passes',  color: '#5B8DB8' },
              { id: 'post', label: 'Post-Test Passes', color: '#3D7A5E' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 20px', fontSize: '14px',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  background: 'none', border: 'none',
                  borderBottom: activeTab === tab.id ? `2.5px solid ${tab.color}` : '2.5px solid transparent',
                  color: activeTab === tab.id ? tab.color : '#888',
                  cursor: 'pointer', marginBottom: '-2px',
                }}
              >{tab.label}</button>
            ))}
          </div>

          {/* Pass list for active tab */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#F4F7FA', textAlign: 'left' }}>
                  <th style={{ padding: '10px 16px', fontWeight: 600, fontSize: '13px', color: '#3D4B5C' }}>Student #</th>
                  <th style={{ padding: '10px 16px', fontWeight: 600, fontSize: '13px', color: activeTab === 'pre' ? '#5B8DB8' : '#3D7A5E' }}>
                    {activeTab === 'pre' ? 'Pre-Test' : 'Post-Test'} Pass
                  </th>
                </tr>
              </thead>
              <tbody>
                {passes.map(({ studentNum, pre, post }) => {
                  const token = activeTab === 'pre' ? pre : post;
                  const color = activeTab === 'pre' ? '#5B8DB8' : '#3D7A5E';
                  return (
                    <tr key={studentNum} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '12px 16px', color: '#555' }}>Student {studentNum}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                          <QRCodeSVG value={`${appUrl}?code=${token}`} size={64} />
                          <span style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold', color, letterSpacing: '2px' }}>{token}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Hidden canvases for QR data URLs */}
          <div style={{ position: 'fixed', left: '-9999px', top: '-9999px', pointerEvents: 'none' }}>
            {passes.flatMap(({ pre, post }) => [
              <QRCodeCanvas key={`c-pre-${pre}`}  ref={el => { if (el) canvasRefs.current[pre]  = el; }} value={`${appUrl}?code=${pre}`}  size={80} />,
              <QRCodeCanvas key={`c-post-${post}`} ref={el => { if (el) canvasRefs.current[post] = el; }} value={`${appUrl}?code=${post}`} size={80} />,
            ])}
          </div>
        </div>
      )}

      {/* ── Assessment Preview Modal ──────────────────────────────────────── */}
      {showPreview && (
        <div
          onClick={() => setShowPreview(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.55)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: '32px 16px', overflowY: 'auto',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#F4F7FA', borderRadius: '14px',
              width: '100%', maxWidth: '760px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
              marginBottom: '32px',
            }}
          >
            {/* Modal header */}
            <div style={{
              background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)',
              borderRadius: '14px 14px 0 0', padding: '20px 28px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'white', marginBottom: '3px' }}>
                  Assessment Preview
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                  {gradeLabel} &nbsp;·&nbsp; {totalQ} questions &nbsp;·&nbsp; {selectedStdCount} standards
                </div>
              </div>
              <button
                onClick={() => setShowPreview(false)}
                style={{
                  background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)',
                  color: 'white', borderRadius: '6px', padding: '6px 14px',
                  fontSize: '14px', cursor: 'pointer', fontWeight: 600,
                }}
              >✕ Close</button>
            </div>

            {/* Modal body */}
            <div style={{ padding: '24px 28px' }}>
              {previewGroups.map(({ grade: g, strandGroups: sg }, gi) => (
                <div key={g} style={{ marginBottom: gi < previewGroups.length - 1 ? '40px' : 0 }}>
                  {grades.size > 1 && (
                    <div style={{
                      fontSize: '13px', fontWeight: 800, color: 'white',
                      background: 'linear-gradient(135deg, #2D5573 0%, #3D6B8A 100%)',
                      padding: '8px 14px', borderRadius: '6px', marginBottom: '16px',
                      display: 'inline-block',
                    }}>
                      Grade {g}
                    </div>
                  )}
                  {sg.map(({ strand, standards: stds }, si) => (
                    <div key={`${g}-${strand}`} style={{ marginBottom: si < sg.length - 1 ? '28px' : 0 }}>
                      {/* Strand header */}
                      <div style={{
                        fontSize: '11px', fontWeight: 700, color: '#5B8DB8',
                        textTransform: 'uppercase', letterSpacing: '1px',
                        paddingBottom: '8px', marginBottom: '12px',
                        borderBottom: '2px solid #5B8DB8',
                      }}>
                        {strand}
                      </div>

                      {stds.map(std => (
                        <div key={std.id} style={{ marginBottom: '20px' }}>
                          {/* Standard label */}
                          <div style={{
                            display: 'inline-block', fontSize: '11px', fontWeight: 700,
                            color: '#3D6B8A', background: '#EAF1F8',
                            padding: '3px 10px', borderRadius: '4px', marginBottom: '10px',
                          }}>
                            {std.label}
                          </div>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                            {std.questions.map((q, qi) => (
                              <span key={q.id} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '5px',
                                background: 'white', border: '1px solid #E2E8F0',
                                borderRadius: '4px', padding: '4px 10px',
                                fontSize: '11px', color: '#64748b',
                              }}>
                                <span style={{ fontWeight: 600, color: '#94a3b8' }}>Q{qi + 1}</span>
                                <span style={{ fontFamily: 'monospace', color: '#94a3b8' }}>·</span>
                                <span style={{ fontFamily: 'monospace' }}>{q.id}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Modal footer */}
            <div style={{
              borderTop: '1px solid #e8edf2', padding: '16px 28px',
              display: 'flex', justifyContent: 'flex-end',
            }}>
              <button
                onClick={() => setShowPreview(false)}
                style={{
                  padding: '10px 28px', fontSize: '14px', fontWeight: 700,
                  border: 'none', borderRadius: '6px',
                  background: '#5B8DB8', color: 'white', cursor: 'pointer',
                }}
              >Done — Back to Setup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── New Class Wizard ──────────────────────────────────────────────────────────

function NewClassWizard({ profile, paymentSessionId, onDone }) {
  const [step, setStep]               = useState(1);
  const [className, setClassName]     = useState('');
  const [grade, setGrade]             = useState('');
  const [studentCount, setStudentCount] = useState('');
  const [step1Error, setStep1Error]   = useState('');
  const [step2Error, setStep2Error]   = useState('');

  // Beta code
  const [showBetaInput, setShowBetaInput]   = useState(false);
  const [betaCode, setBetaCode]             = useState('');
  const [betaCodeError, setBetaCodeError]   = useState('');
  const [validatedBeta, setValidatedBeta]   = useState(null);
  const [betaValidating, setBetaValidating] = useState(false);

  // Stripe
  const [redirecting, setRedirecting]     = useState(false);
  const [verifiedSession, setVerifiedSession] = useState(null); // { sessionId, amountTotal }
  const [paymentError, setPaymentError]   = useState('');

  // Assessment config (step 3)
  const [config, setConfig]           = useState({});
  const [globalCount, setGlobalCount] = useState(3);
  const [randomize, setRandomize]     = useState(true);

  // Generation
  const [generating, setGenerating]         = useState(false);
  const [genError, setGenError]             = useState('');
  const [done, setDone]                     = useState(false);
  const [generatedExpiresAt, setGeneratedExpiresAt] = useState(null);
  const [guideOpen, setGuideOpen]           = useState(false);

  // Access windows (Step 3)
  const [schedMode, setSchedMode]             = useState('always'); // 'always' | 'schedule'
  const [pendingWindows, setPendingWindows]   = useState([]);
  const [wizSchedFormDays, setWizSchedFormDays]   = useState(new Set());
  const [wizSchedFormStart, setWizSchedFormStart] = useState('08:00');
  const [wizSchedFormEnd, setWizSchedFormEnd]     = useState('08:50');
  const [wizSchedFormUntil, setWizSchedFormUntil] = useState('');
  const [wizSchedTz, setWizSchedTz]               = useState(() => localStorage.getItem('scheduleTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [wizSchedShowTzPicker, setWizSchedShowTzPicker] = useState(false);
  const [wizSchedError, setWizSchedError]         = useState('');

  // ── Stripe payment return: restore state then verify ──────────────────────
  useEffect(() => {
    if (!paymentSessionId) return;
    const stored = localStorage.getItem('pendingPassOrder');
    if (!stored) { setPaymentError('Your session expired. Please start over.'); return; }
    const order = JSON.parse(stored);
    const cn = order.className || order.classes?.[0]?.className || '';
    const g  = order.grade     || order.classes?.[0]?.grade     || '';
    const sc = order.studentCount || order.classes?.[0]?.studentCount || '';
    setClassName(cn);
    setGrade(g);
    setStudentCount(sc);
    (async () => {
      try {
        const res  = await fetch(`/api/verify-checkout-session?session_id=${paymentSessionId}`);
        const data = await res.json();
        if (!res.ok || !data.paid) {
          setPaymentError('Payment verification failed. Please contact support@brightboptech.com.');
          return;
        }
        setVerifiedSession({ sessionId: paymentSessionId, amountTotal: data.amountTotal });
        setStep(3);
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete('payment');
        cleanUrl.searchParams.delete('session_id');
        window.history.replaceState({}, '', cleanUrl.toString());
      } catch (err) {
        setPaymentError('Payment verification error: ' + err.message);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Init assessment config when grade is selected ─────────────────────────
  useEffect(() => {
    if (!grade) return;
    const sg = buildStandards(getQuestionsForGrade(Number(grade)));
    const initial = {};
    sg.forEach(({ standards }) =>
      standards.forEach(std => { initial[std.id] = { checked: true, count: globalCount }; })
    );
    setConfig(initial);
    setRandomize(Number(grade) >= 3);
  }, [grade]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Derived ───────────────────────────────────────────────────────────────
  const strandGroups = grade ? buildStandards(getQuestionsForGrade(Number(grade))) : [];

  const selectedIds = strandGroups.flatMap(({ standards }) =>
    standards.flatMap(std =>
      config[std.id]?.checked
        ? std.questions.slice(0, globalCount).map(q => q.id)
        : []
    )
  );
  const totalQ = selectedIds.length;

  const STRAND_SHORT = {
    'Computational Thinking':    'CT',
    'Creativity and Innovation': 'CI',
    'Data Literacy':             'DL',
    'Digital Citizenship':       'DC',
    'Practical Technology':      'PT',
  };

  const isStrandSelected = (strandName) => {
    const ids = strandGroups.find(sg => sg.strand === strandName)?.standards.map(s => s.id) ?? [];
    return ids.length > 0 && ids.every(id => config[id]?.checked);
  };

  const toggleStrand = (strandName) => {
    const ids = strandGroups.find(sg => sg.strand === strandName)?.standards.map(s => s.id) ?? [];
    const allOn = ids.every(id => config[id]?.checked);
    setConfig(prev => {
      const next = { ...prev };
      ids.forEach(id => { next[id] = { ...next[id], checked: !allOn }; });
      return next;
    });
  };

  const handleGlobalCount = (n) => {
    setGlobalCount(n);
    setConfig(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(id => { next[id] = { ...next[id], count: n }; });
      return next;
    });
  };

  // ── Step handlers ─────────────────────────────────────────────────────────
  const handleStep1Next = () => {
    if (!className.trim()) { setStep1Error('Class name is required.'); return; }
    if (!grade) { setStep1Error('Please select a grade level.'); return; }
    setStep1Error('');
    setStep(2);
  };

  const handleBetaValidate = async () => {
    if (!betaCode.trim()) { setBetaCodeError('Enter a code.'); return; }
    const count = parseInt(studentCount, 10) || 0;
    if (count < 1) { setBetaCodeError('Enter the number of students first.'); return; }
    setBetaValidating(true);
    setBetaCodeError('');
    try {
      const { data, error: dbErr } = await supabase
        .from('beta_codes').select('*')
        .eq('code', betaCode.trim().toUpperCase()).maybeSingle();
      if (dbErr || !data) { setBetaCodeError('Invalid code.'); return; }
      if (data.expires_at && new Date(data.expires_at) < new Date()) { setBetaCodeError('This code has expired.'); return; }
      const remaining = (data.max_students || 0) - (data.used_students || 0);
      if (count > remaining) { setBetaCodeError(`Only ${remaining} student pass${remaining !== 1 ? 'es' : ''} remaining on this code.`); return; }
      setValidatedBeta(data);
    } catch (err) {
      setBetaCodeError('Could not validate: ' + err.message);
    } finally {
      setBetaValidating(false);
    }
  };

  const handleStep2Next = () => {
    const count = parseInt(studentCount, 10);
    if (!count || count < 1) { setStep2Error('Enter at least 1 student.'); return; }
    if (count > 200) { setStep2Error('Maximum 200 students per class.'); return; }
    if (!validatedBeta) { setStep2Error('Validate your code, or use Pay with Card to continue.'); return; }
    setStep2Error('');
    setStep(3);
  };

  const handleStripeCheckout = async () => {
    const count = parseInt(studentCount, 10);
    if (!count || count < 1) { setStep2Error('Enter at least 1 student.'); return; }
    if (count > 200) { setStep2Error('Maximum 200 students per class.'); return; }
    setStep2Error('');
    setRedirecting(true);
    localStorage.setItem('pendingPassOrder', JSON.stringify({
      className: className.trim(), grade, studentCount: String(count), pricePerStudent: '2.00',
    }));
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          classes: [{ className: className.trim(), grade, studentCount: String(count), startingStudentNumber: '1' }],
          pricePerStudent: 2,
          teacherId: profile.id,
        }),
      });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || `Server error (${res.status})`); }
      const { url, error: apiErr } = await res.json();
      if (apiErr) throw new Error(apiErr);
      window.location.href = url;
    } catch (err) {
      setStep2Error('Could not start checkout: ' + err.message);
      localStorage.removeItem('pendingPassOrder');
      setRedirecting(false);
    }
  };

  const handleGenerate = async () => {
    if (totalQ === 0) { setGenError('Select at least one strand.'); return; }
    setGenerating(true);
    setGenError('');

    const count    = parseInt(studentCount, 10);
    const gradeNum = Number(grade);
    const expiresAt = (() => { const d = new Date(); d.setMonth(d.getMonth() + 13); return d.toISOString(); })();

    // Build standards_config for assessment record
    const standardsConfig = {};
    strandGroups.forEach(({ standards }) =>
      standards.forEach(std => {
        if (config[std.id]) standardsConfig[std.id] = { checked: !!config[std.id].checked, count: globalCount };
      })
    );

    const { data: acData, error: acErr } = await supabase
      .from('assessment_configs').insert({
        teacher_id:       profile.id,
        name:             className.trim(),
        grade_levels:     [gradeNum],
        standards_config: standardsConfig,
        total_questions:  totalQ,
      }).select('id').single();
    if (acErr) { setGenError('Could not save assessment config: ' + acErr.message); setGenerating(false); return; }

    const earlyGradeQIds = gradeNum <= 2
      ? new Set(getQuestionsForGrade(gradeNum).map(q => q.id))
      : new Set();
    const shouldRandomize = randomize && gradeNum >= 3;

    const tokenRows  = [];
    const configRows = [];

    for (let i = 1; i <= count; i++) {
      const pre  = makeToken();
      const post = makeToken();
      const ordered = shouldRandomize
        ? [
            ...selectedIds.filter(id =>  earlyGradeQIds.has(id)),
            ...[...selectedIds.filter(id => !earlyGradeQIds.has(id))].sort(() => Math.random() - 0.5),
          ]
        : selectedIds;
      tokenRows.push(
        { token: pre,  grade_level: gradeNum, test_type: 'pre',  teacher_id: profile.id, class_name: className.trim(), student_number: i, expires_at: expiresAt },
        { token: post, grade_level: gradeNum, test_type: 'post', teacher_id: profile.id, class_name: className.trim(), student_number: i, expires_at: expiresAt },
      );
      configRows.push(
        { token: pre,  question_ids: ordered, assessment_config_id: acData.id },
        { token: post, question_ids: ordered, assessment_config_id: acData.id },
      );
    }

    const { error: tokErr } = await supabase.from('tokens').insert(tokenRows);
    if (tokErr) { setGenError('Could not save passes: ' + tokErr.message); setGenerating(false); return; }

    const { error: cfgErr } = await supabase.from('token_configs').insert(configRows);
    if (cfgErr) { setGenError('Could not link questions to passes: ' + cfgErr.message); setGenerating(false); return; }

    // Insert any scheduled access windows buffered in Step 3
    if (schedMode === 'schedule' && pendingWindows.length > 0) {
      await supabase.from('access_windows').insert(
        pendingWindows.map(w => ({ ...w, teacher_id: profile.id, assessment_id: acData.id }))
      );
    }

    if (verifiedSession) {
      await supabase.from('payments').insert([{
        teacher_id:        profile.id,
        stripe_session_id: verifiedSession.sessionId,
        amount_paid:       verifiedSession.amountTotal,
        num_students:      count,
        class_name:        className.trim(),
        grade_level:       gradeNum,
      }]);
      localStorage.removeItem('pendingPassOrder');
    }

    if (validatedBeta) {
      await supabase.from('beta_codes').update({
        used_students: (validatedBeta.used_students || 0) + count,
      }).eq('code', validatedBeta.code);
    }

    setGeneratedExpiresAt(expiresAt);
    setGenerating(false);
    setDone(true);
  };

  const handleWizAddWindow = () => {
    if (wizSchedFormDays.size === 0) { setWizSchedError('Select at least one day.'); return; }
    if (!wizSchedFormStart || !wizSchedFormEnd) { setWizSchedError('Set a start and end time.'); return; }
    if (wizSchedFormEnd <= wizSchedFormStart)   { setWizSchedError('End time must be after start time.'); return; }
    if (!wizSchedFormUntil)                     { setWizSchedError('Set a repeat-until date.'); return; }
    setWizSchedError('');
    setPendingWindows(prev => [...prev, { days_of_week: [...wizSchedFormDays].sort((a, b) => a - b), start_time: wizSchedFormStart, end_time: wizSchedFormEnd, repeat_until: wizSchedFormUntil }]);
    setWizSchedFormDays(new Set()); setWizSchedFormStart('08:00'); setWizSchedFormEnd('08:50'); setWizSchedFormUntil('');
  };

  // ── Shared styles ─────────────────────────────────────────────────────────
  const fieldStyle = {
    width: '100%', padding: '10px 12px', fontSize: '15px',
    border: '1.5px solid #ddd', borderRadius: '8px',
    boxSizing: 'border-box', outline: 'none', fontFamily: 'inherit',
  };
  const labelStyle = { display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' };
  const btnPrimary = {
    padding: '11px 28px', fontSize: '15px', fontWeight: 700,
    background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)',
    color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer',
  };
  const btnBack = { background: 'none', border: 'none', color: '#5B8DB8', fontSize: '14px', cursor: 'pointer', padding: 0, fontWeight: 600 };

  const count = parseInt(studentCount, 10) || 0;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: '580px', margin: '40px auto', padding: '0 24px 60px' }}>

      {/* Step indicator */}
      {!done && (
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '32px' }}>
          {['Create a Class', 'Add Students', 'Set Up Assessment'].map((label, i) => {
            const n = i + 1;
            const active  = step === n;
            const passed  = step > n;
            return [
              <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 1 }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', fontSize: '14px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: passed ? '#3D7A5E' : active ? '#3D6B8A' : '#e2e8f0',
                  color: passed || active ? 'white' : '#94a3b8',
                }}>
                  {passed ? '✓' : n}
                </div>
                <span style={{
                  fontSize: '11px', fontWeight: active || passed ? 700 : 400, textAlign: 'center', lineHeight: 1.3, whiteSpace: 'nowrap',
                  color: active ? '#3D6B8A' : passed ? '#3D7A5E' : '#94a3b8',
                }}>{label}</span>
              </div>,
              i < 2 ? (
                <div key={`l${n}`} style={{ flex: 1, height: '2px', marginTop: '15px', background: step > n ? '#3D7A5E' : '#e2e8f0' }} />
              ) : null,
            ];
          }).flat()}
        </div>
      )}

      {/* Payment error */}
      {paymentError && (
        <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', color: '#DC2626', fontSize: '14px' }}>
          {paymentError}
        </div>
      )}

      {/* Card */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '36px 40px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '1px solid #eef2f7' }}>

        {/* ── STEP 1: Create a Class ─────────────────────────────────────── */}
        {step === 1 && (
          <>
            <h2 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 800, color: '#1e293b' }}>Create a Class</h2>
            <p style={{ margin: '0 0 28px', color: '#64748b', fontSize: '14px' }}>Step 1 of 3</p>

            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Class name</label>
              <input
                type="text" value={className}
                onChange={e => { setClassName(e.target.value); setStep1Error(''); }}
                placeholder="e.g. Period 1, Mrs. Smith's Class"
                style={fieldStyle}
                onFocus={e => { e.target.style.borderColor = '#3D6B8A'; }}
                onBlur={e => { e.target.style.borderColor = '#ddd'; }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={labelStyle}>Grade level</label>
              <select
                value={grade}
                onChange={e => { setGrade(e.target.value); setStep1Error(''); }}
                style={{ ...fieldStyle, color: grade ? '#1e293b' : '#94a3b8', cursor: 'pointer' }}
              >
                <option value="">Select a grade…</option>
                {PASS_GRADES.map(g => (
                  <option key={g.value} value={String(g.value)}>{g.label}</option>
                ))}
              </select>
            </div>

            {step1Error && <p style={{ color: '#ef4444', fontSize: '13px', margin: '-12px 0 16px' }}>{step1Error}</p>}

            <button onClick={handleStep1Next} style={{ ...btnPrimary, width: '100%' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >Next →</button>
          </>
        )}

        {/* ── STEP 2: Add Students ───────────────────────────────────────── */}
        {step === 2 && (
          <>
            <h2 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 800, color: '#1e293b' }}>Add Students</h2>
            <p style={{ margin: '0 0 28px', color: '#64748b', fontSize: '14px' }}>
              Step 2 of 3 &nbsp;·&nbsp; {className} &nbsp;·&nbsp; {gradeDisplay(grade)}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Number of students</label>
              <input
                type="number" min={1} max={200}
                value={studentCount}
                onChange={e => { setStudentCount(e.target.value); setStep2Error(''); setValidatedBeta(null); }}
                placeholder="e.g. 25"
                style={{ ...fieldStyle, width: '140px' }}
                onFocus={e => { e.target.style.borderColor = '#3D6B8A'; }}
                onBlur={e => { e.target.style.borderColor = '#ddd'; }}
              />
            </div>

            {/* Beta code */}
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px', marginBottom: '24px' }}>
              <button
                onClick={() => { setShowBetaInput(v => !v); setBetaCode(''); setBetaCodeError(''); setValidatedBeta(null); }}
                style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '13px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
              >{showBetaInput ? '↑ Hide' : '+ Have a code?'}</button>

              {showBetaInput && (
                <div style={{ marginTop: '12px' }}>
                  {validatedBeta ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#D4EEE3', borderRadius: '8px', padding: '10px 14px' }}>
                      <span style={{ color: '#3D7A5E', fontSize: '18px', lineHeight: 1 }}>✓</span>
                      <span style={{ color: '#3D7A5E', fontSize: '14px', fontWeight: 600 }}>
                        Code accepted — {(validatedBeta.max_students || 0) - (validatedBeta.used_students || 0)} passes available
                      </span>
                      <button onClick={() => { setValidatedBeta(null); setBetaCode(''); }} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#3D7A5E', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}>×</button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="text" value={betaCode}
                        onChange={e => { setBetaCode(e.target.value.toUpperCase()); setBetaCodeError(''); }}
                        onKeyDown={e => { if (e.key === 'Enter') handleBetaValidate(); }}
                        placeholder="Enter code"
                        style={{ ...fieldStyle, flex: 1, fontSize: '14px', letterSpacing: '1px' }}
                        onFocus={e => { e.target.style.borderColor = '#3D6B8A'; }}
                        onBlur={e => { e.target.style.borderColor = '#ddd'; }}
                      />
                      <button
                        onClick={handleBetaValidate} disabled={betaValidating}
                        style={{ padding: '10px 18px', fontSize: '14px', fontWeight: 700, background: '#3D6B8A', color: 'white', border: 'none', borderRadius: '8px', cursor: betaValidating ? 'default' : 'pointer', opacity: betaValidating ? 0.7 : 1 }}
                      >{betaValidating ? '…' : 'Apply'}</button>
                    </div>
                  )}
                  {betaCodeError && <p style={{ color: '#ef4444', fontSize: '13px', margin: '6px 0 0' }}>{betaCodeError}</p>}
                </div>
              )}
            </div>

            {step2Error && <p style={{ color: '#ef4444', fontSize: '13px', margin: '-8px 0 16px' }}>{step2Error}</p>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {validatedBeta ? (
                <button onClick={handleStep2Next} style={{ ...btnPrimary, width: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >Continue →</button>
              ) : (
                <button
                  onClick={handleStripeCheckout} disabled={redirecting}
                  style={{ ...btnPrimary, width: '100%', background: redirecting ? '#94a3b8' : 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)', cursor: redirecting ? 'default' : 'pointer' }}
                  onMouseEnter={e => { if (!redirecting) e.currentTarget.style.opacity = '0.9'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  {redirecting ? 'Redirecting to payment…' : `Pay with Card — $${(count * 2).toFixed(2)} →`}
                </button>
              )}
              <button onClick={() => setStep(1)} style={btnBack}>← Back</button>
            </div>
          </>
        )}

        {/* ── STEP 3: Set Up Assessment ──────────────────────────────────── */}
        {step === 3 && (
          <>
            <h2 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 800, color: '#1e293b' }}>Set Up Assessment</h2>
            <p style={{ margin: '0 0 24px', color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span>Step 3 of 3 &nbsp;·&nbsp; {className} &nbsp;·&nbsp; {gradeDisplay(grade)}</span>
              {verifiedSession && (
                <span style={{ background: '#D4EEE3', color: '#3D7A5E', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 700 }}>Payment confirmed ✓</span>
              )}
            </p>

            {/* Info box */}
            <div style={{ background: '#EAF1F8', border: '1px solid #C5D9EC', borderRadius: '8px', padding: '14px 16px', marginBottom: '28px', fontSize: '13px', color: '#2D4A60', lineHeight: 1.65 }}>
              Each standard is assessed with 3 questions by default — enough to show a meaningful pattern of understanding without making the assessment too long. At 3 questions per standard across all 5 strands, students complete {totalQ} questions total. You can customize this two ways: deselect strands you're not teaching yet, or adjust questions per standard (1–3) for flexibility with time constraints. Whatever you choose locks in for both the pre-test and post-test, so your growth data is always apples-to-apples.
            </div>

            {/* Questions per standard */}
            <div style={{ marginBottom: '28px' }}>
              <label style={labelStyle}>Questions per standard</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {[1, 2, 3].map(n => (
                  <button key={n} onClick={() => handleGlobalCount(n)} style={{
                    padding: '8px 22px', fontSize: '15px', fontWeight: 700, borderRadius: '7px', cursor: 'pointer',
                    background: globalCount === n ? '#3D6B8A' : 'white',
                    color:      globalCount === n ? 'white'   : '#64748b',
                    border:     `2px solid ${globalCount === n ? '#3D6B8A' : '#e2e8f0'}`,
                  }}>{n}</button>
                ))}
                <span style={{ fontSize: '13px', color: '#94a3b8', marginLeft: '4px' }}>
                  = {totalQ} question{totalQ !== 1 ? 's' : ''} total
                </span>
              </div>
            </div>

            {/* Strand checkboxes */}
            <div style={{ marginBottom: Number(grade) >= 3 ? '24px' : '32px' }}>
              <label style={labelStyle}>Strands</label>
              <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#94a3b8', lineHeight: 1.5 }}>
                All 5 strands are selected by default. Deselect any strands you're not currently teaching to shorten the assessment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {strandGroups.map(({ strand }) => {
                  const on    = isStrandSelected(strand);
                  const short = STRAND_SHORT[strand] ?? strand;
                  return (
                    <label key={strand} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', userSelect: 'none' }}>
                      <div
                        onClick={() => toggleStrand(strand)}
                        style={{ width: '20px', height: '20px', borderRadius: '5px', flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${on ? '#3D6B8A' : '#cbd5e1'}`, background: on ? '#3D6B8A' : 'white' }}
                      >
                        {on && <span style={{ color: 'white', fontSize: '12px', fontWeight: 900, lineHeight: 1 }}>✓</span>}
                      </div>
                      <span onClick={() => toggleStrand(strand)} style={{ fontWeight: 700, fontSize: '13px', color: '#94a3b8', minWidth: '24px' }}>{short}</span>
                      <span onClick={() => toggleStrand(strand)} style={{ fontSize: '14px', color: '#374151' }}>{strand}</span>
                    </label>
                  );
                })}
              </div>
              <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#94a3b8', lineHeight: 1.55 }}>
                This assessment configuration is locked in for both the pre-test and post-test. If you want to assess different standards, create a new class and assessment.
              </p>
            </div>

            {/* Randomize (grades 3+) */}
            {Number(grade) >= 3 && (
              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', userSelect: 'none' }} onClick={() => setRandomize(v => !v)}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '5px', flexShrink: 0, marginTop: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${randomize ? '#3D6B8A' : '#cbd5e1'}`, background: randomize ? '#3D6B8A' : 'white' }}>
                    {randomize && <span style={{ color: 'white', fontSize: '12px', fontWeight: 900, lineHeight: 1 }}>✓</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#374151', fontWeight: 600 }}>Randomize question order</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Each student sees a different sequence — prevents copying.</div>
                  </div>
                </label>
              </div>
            )}

            {/* Access windows */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>When can students access this?</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'always',   label: 'Always open',    desc: 'Students can start any time while their pass is active.' },
                  { id: 'schedule', label: 'Set a schedule', desc: 'Restrict access to specific days and times.' },
                ].map(opt => (
                  <div key={opt.id} onClick={() => setSchedMode(opt.id)}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', padding: '10px 14px', borderRadius: '8px', border: `1.5px solid ${schedMode === opt.id ? '#3D6B8A' : '#e2e8f0'}`, background: schedMode === opt.id ? '#EAF1F8' : 'white', userSelect: 'none' }}
                  >
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0, marginTop: '2px', border: `2px solid ${schedMode === opt.id ? '#3D6B8A' : '#cbd5e1'}`, background: schedMode === opt.id ? '#3D6B8A' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {schedMode === opt.id && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{opt.label}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '1px' }}>{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {schedMode === 'schedule' && (
                <div style={{ marginTop: '14px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '5px' }}>Days of week</div>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {SCHED_DAY_LABELS.map((day, i) => { const on = wizSchedFormDays.has(i); return (
                        <button key={i} type="button" onClick={() => setWizSchedFormDays(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; })}
                          style={{ padding: '5px 9px', borderRadius: '5px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, border: on ? '2px solid #5B8DB8' : '2px solid #e2e8f0', background: on ? '#EAF1F8' : 'white', color: on ? '#3D6B8A' : '#64748b' }}>{day}</button>
                      ); })}
                    </div>
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    {wizSchedShowTzPicker ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap' }}>Times are in:</span>
                        <select value={wizSchedTz} autoFocus onChange={e => { setWizSchedTz(e.target.value); setWizSchedShowTzPicker(false); localStorage.setItem('scheduleTimezone', e.target.value); }} onBlur={() => setWizSchedShowTzPicker(false)}
                          style={{ fontSize: '13px', padding: '4px 8px', border: '1px solid #5B8DB8', borderRadius: '5px', color: '#1e293b', cursor: 'pointer' }}>
                          {TIMEZONES.map(t => <option key={t} value={t}>{getSchedTzLongName(t)} — {t}</option>)}
                          {!TIMEZONES.includes(wizSchedTz) && <option value={wizSchedTz}>{getSchedTzLongName(wizSchedTz)} — {wizSchedTz}</option>}
                        </select>
                      </div>
                    ) : (
                      <button type="button" onClick={() => setWizSchedShowTzPicker(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '12px' }}>🌐</span>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>Times in: <strong style={{ color: '#3D6B8A' }}>{getSchedTzLongName(wizSchedTz)}</strong> <span style={{ color: '#94a3b8' }}>({wizSchedTz})</span></span>
                        <span style={{ fontSize: '10px', color: '#5B8DB8' }}>▾</span>
                      </button>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <div style={{ flex: 1, minWidth: '110px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>Start time</label>
                      <input type="time" value={wizSchedFormStart} onChange={e => setWizSchedFormStart(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: '110px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>End time</label>
                      <input type="time" value={wizSchedFormEnd} onChange={e => setWizSchedFormEnd(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ flex: '1 1 140px', minWidth: '140px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>Repeat until</label>
                      <input type="date" value={wizSchedFormUntil} onChange={e => setWizSchedFormUntil(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  {wizSchedError && <p style={{ color: '#ef4444', fontSize: '13px', margin: '0 0 10px' }}>{wizSchedError}</p>}

                  <button type="button" onClick={handleWizAddWindow}
                    style={{ padding: '7px 18px', fontSize: '13px', fontWeight: 700, border: 'none', borderRadius: '6px', background: '#5B8DB8', color: 'white', cursor: 'pointer' }}>
                    + Add Window
                  </button>

                  {pendingWindows.length > 0 && (
                    <div style={{ marginTop: '12px', borderTop: '1px solid #e2e8f0', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {pendingWindows.map((w, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < pendingWindows.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                          <div>
                            <div style={{ fontWeight: 600, fontSize: '12px', color: '#1e293b' }}>{fmtSchedDays(w.days_of_week)} · {fmtSchedTime(w.start_time)} – {fmtSchedTime(w.end_time)}</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Repeats until {fmtSchedDate(w.repeat_until)}</div>
                          </div>
                          <button type="button" onClick={() => setPendingWindows(prev => prev.filter((_, j) => j !== i))}
                            style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', borderRadius: '5px', padding: '4px 10px', cursor: 'pointer', fontSize: '11px', fontWeight: 600, marginLeft: '8px', flexShrink: 0 }}>
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {genError && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '16px' }}>{genError}</p>}

            <button
              onClick={handleGenerate}
              disabled={generating || totalQ === 0}
              style={{ ...btnPrimary, width: '100%', marginBottom: '12px', background: (generating || totalQ === 0) ? '#94a3b8' : 'linear-gradient(135deg, #3D7A5E 0%, #4E9A7A 100%)', cursor: (generating || totalQ === 0) ? 'default' : 'pointer' }}
              onMouseEnter={e => { if (!generating && totalQ > 0) e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              {generating ? 'Generating passes…' : `Generate ${count} × 2 passes →`}
            </button>

            {!verifiedSession && (
              <button onClick={() => setStep(2)} style={btnBack}>← Back</button>
            )}
          </>
        )}

        {/* ── DONE ──────────────────────────────────────────────────────────── */}
        {done && (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
            <h2 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 800, color: '#1e293b' }}>Passes Generated!</h2>
            <p style={{ margin: '0 0 6px', fontSize: '15px', color: '#374151' }}>
              <strong>{className}</strong> &nbsp;·&nbsp; {gradeDisplay(grade)}
            </p>
            <p style={{ margin: '0 0 28px', fontSize: '13px', color: '#94a3b8' }}>
              {count} students &nbsp;·&nbsp; {totalQ} questions &nbsp;·&nbsp; Pre-test + Post-test passes ready
            </p>
            <button
              onClick={() => onDone({ className: className.trim(), grade, count, expiresAt: generatedExpiresAt })}
              style={{ ...btnPrimary, background: 'linear-gradient(135deg, #3D7A5E 0%, #4E9A7A 100%)', padding: '12px 32px' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >Go to My Classes →</button>
          </div>
        )}

      </div>

      {/* Getting started guide — toggle below the card */}
      {!done && (
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <button
            onClick={() => setGuideOpen(v => !v)}
            style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '13px', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#5B8DB8'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; }}
          >
            <span style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1 }}>?</span>
            {guideOpen ? 'Hide guide' : 'Getting started guide'}
          </button>

          {guideOpen && (
            <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px 28px', marginTop: '12px', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <p style={{ margin: '0 0 16px', fontSize: '13px', fontWeight: 700, color: '#3D6B8A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How it works</p>
              {[
                { n: '1', title: 'Create a Class', body: 'Give the class a name and choose the grade level. Each class gets its own set of passes.' },
                { n: '2', title: 'Add Students', body: 'Enter the number of students. Use a code if you have one for free access, or pay $2 per student by card. Each student gets a unique pre-test and post-test pass.' },
                { n: '3', title: 'Set Up Assessment', body: 'Choose which TEKS strands to include and how many questions per standard (1–3, default 3). The same configuration applies to both the pre-test and post-test.' },
                { n: '✓', title: 'After generating', body: 'Go to My Classes → View Passes to print pass sheets or display QR codes. Students visit techgrowthcheck.com and enter their 8-character code. For K–2, use Teacher Script Mode to read questions aloud from the smartboard.' },
              ].map(({ n, title, body }) => (
                <div key={n} style={{ display: 'flex', gap: '14px', marginBottom: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EAF1F8', color: '#3D6B8A', fontSize: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{n}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginBottom: '3px' }}>{title}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.55 }}>{body}</div>
                  </div>
                </div>
              ))}
              <p style={{ margin: '16px 0 0', fontSize: '12px', color: '#94a3b8' }}>
                Questions? Email <a href="mailto:support@brightboptech.com" style={{ color: '#5B8DB8' }}>support@brightboptech.com</a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Feedback Panel ────────────────────────────────────────────────────────────

const ADMIN_EMAIL = 'brightboptech@gmail.com';

function FeedbackPanel({ profile, section, open, onClose }) {
  const [panelView, setPanelView]       = useState('feedback'); // 'feedback' | 'survey'
  const [tag, setTag]                   = useState(null);
  const [message, setMessage]           = useState('');
  const [submitting, setSubmitting]     = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const [submitError, setSubmitError]   = useState('');
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [survey, setSurvey]             = useState({ q1: 0, q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: 0, q10: '' });
  const [surveySubmitting, setSurveySubmitting] = useState(false);
  const [surveyError, setSurveyError]   = useState('');

  useEffect(() => {
    if (!open || !profile?.id) return;
    supabase.from('survey_responses').select('id').eq('teacher_id', profile.id).maybeSingle()
      .then(({ data }) => { if (data) setSurveyCompleted(true); });
  }, [open, profile?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClose = () => {
    onClose();
    setPanelView('feedback');
    setSubmitError('');
    setSurveyError('');
  };

  const handleFeedbackSubmit = async () => {
    if (!message.trim()) return;
    setSubmitting(true);
    setSubmitError('');
    const { error } = await supabase.from('feedback').insert({
      teacher_id: profile.id,
      page_context: section,
      tag: tag || null,
      message: message.trim(),
    });
    setSubmitting(false);
    if (error) { setSubmitError('Could not send — please try again.'); return; }
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setMessage(''); setTag(null); setSubmitted(false);
    }, 2000);
  };

  const setSurveyQ = (key, val) => setSurvey(prev => ({ ...prev, [key]: val }));

  const handleSurveySubmit = async () => {
    if (!survey.q1) { setSurveyError('Please rate how easy setup was (Q1).'); return; }
    if (!survey.q9) { setSurveyError('Please rate your likelihood to recommend (Q9).'); return; }
    setSurveySubmitting(true);
    setSurveyError('');
    const { error } = await supabase.from('survey_responses').insert({
      teacher_id: profile.id,
      setup_ease: survey.q1,
      setup_confusing: survey.q2 || null,
      questions_appropriate: survey.q3 || null,
      questions_feedback: survey.q4 || null,
      student_response: survey.q5 || null,
      completion_time: survey.q6 || null,
      tia_helpful: survey.q7 || null,
      tia_improvement: survey.q8 || null,
      recommend_likelihood: survey.q9,
      anything_else: survey.q10 || null,
    });
    setSurveySubmitting(false);
    if (error) { setSurveyError('Could not submit — please try again.'); return; }
    setSurveyCompleted(true);
    setPanelView('feedback');
  };

  const Stars = ({ value, onChange, label }) => (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>{label}</div>
      <div style={{ display: 'flex', gap: '6px' }}>
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} type="button" onClick={() => onChange(n)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '26px', lineHeight: 1, padding: '2px', color: n <= value ? '#F59E0B' : '#e2e8f0' }}>
            {n <= value ? '★' : '☆'}
          </button>
        ))}
      </div>
    </div>
  );

  const ToggleGroup = ({ value, options, onChange, label }) => (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>{label}</div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {options.map(opt => (
          <button key={opt} type="button" onClick={() => onChange(opt)}
            style={{ padding: '7px 16px', fontSize: '13px', fontWeight: 600, borderRadius: '6px', cursor: 'pointer', border: `1.5px solid ${value === opt ? '#3D6B8A' : '#e2e8f0'}`, background: value === opt ? '#EAF1F8' : 'white', color: value === opt ? '#3D6B8A' : '#64748b' }}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  const OpenText = ({ value, onChange, label, placeholder }) => (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>{label}</div>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder || 'Your answer…'}
        style={{ width: '100%', minHeight: '72px', padding: '8px 10px', fontSize: '13px', border: '1.5px solid #e2e8f0', borderRadius: '7px', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit', outline: 'none', lineHeight: 1.55 }}
        onFocus={e => { e.target.style.borderColor = '#3D6B8A'; }}
        onBlur={e => { e.target.style.borderColor = '#e2e8f0'; }}
      />
    </div>
  );

  const panelW = 380;

  return (
    <>
      {/* Backdrop */}
      {open && <div onClick={handleClose} style={{ position: 'fixed', inset: 0, zIndex: 8400, background: 'rgba(0,0,0,0.18)' }} />}

      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, right: open ? 0 : -panelW - 20,
        width: panelW, height: '100vh', zIndex: 8500,
        background: 'white', boxShadow: '-4px 0 24px rgba(0,0,0,0.16)',
        display: 'flex', flexDirection: 'column',
        transition: 'right 0.25s cubic-bezier(.4,0,.2,1)',
      }}>
        {/* Header */}
        <div style={{ flexShrink: 0, padding: '16px 20px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {panelView === 'survey' ? (
            <button onClick={() => { setPanelView('feedback'); setSurveyError(''); }} style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '13px', fontWeight: 600, cursor: 'pointer', padding: 0 }}>← Back</button>
          ) : (
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '7px' }}>
              💬 <span>Share Feedback</span>
            </div>
          )}
          {panelView === 'survey' && <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b' }}>End-of-Beta Survey</div>}
          <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '20px', cursor: 'pointer', lineHeight: 1, padding: '2px 6px' }}>×</button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>

          {/* ── Feedback view ── */}
          {panelView === 'feedback' && (
            <>
              {/* Welcome message */}
              <p style={{ margin: '0 0 18px', fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>
                We'd love to hear from you! Share your thoughts as you go — every comment helps us build a better product for Texas Technology Applications teachers.
              </p>

              <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#94a3b8' }}>
                Current page: <strong style={{ color: '#64748b' }}>{section}</strong>
              </p>

              {/* Tag row */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Category (optional)</div>
                <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
                  {['Bug', 'Suggestion', 'Question', 'Compliment'].map(t => (
                    <button key={t} type="button" onClick={() => setTag(tag === t ? null : t)}
                      style={{ padding: '6px 13px', fontSize: '13px', fontWeight: 600, borderRadius: '20px', cursor: 'pointer', border: `1.5px solid ${tag === t ? '#3D6B8A' : '#e2e8f0'}`, background: tag === t ? '#EAF1F8' : 'white', color: tag === t ? '#3D6B8A' : '#64748b', transition: 'all 0.12s' }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message field */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>What's on your mind?</label>
                <textarea
                  value={message}
                  onChange={e => { setMessage(e.target.value); setSubmitError(''); }}
                  placeholder="Tell us what you think, what's broken, or what would make this better…"
                  style={{ width: '100%', minHeight: '110px', padding: '10px 12px', fontSize: '14px', border: '1.5px solid #e2e8f0', borderRadius: '8px', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'inherit', outline: 'none', lineHeight: 1.55 }}
                  onFocus={e => { e.target.style.borderColor = '#3D6B8A'; }}
                  onBlur={e => { e.target.style.borderColor = '#e2e8f0'; }}
                />
              </div>

              {submitError && <p style={{ color: '#ef4444', fontSize: '12px', marginBottom: '12px' }}>{submitError}</p>}

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '12px 0', color: '#3D7A5E', fontSize: '15px', fontWeight: 700 }}>✓ Sent! Thanks for the feedback.</div>
              ) : (
                <button onClick={handleFeedbackSubmit} disabled={submitting || !message.trim()}
                  style={{ width: '100%', padding: '11px', fontSize: '14px', fontWeight: 700, border: 'none', borderRadius: '8px', cursor: submitting || !message.trim() ? 'not-allowed' : 'pointer', background: submitting || !message.trim() ? '#94a3b8' : 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)', color: 'white', marginBottom: '16px' }}>
                  {submitting ? 'Sending…' : 'Submit'}
                </button>
              )}

              {/* Survey link */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', textAlign: 'center' }}>
                {surveyCompleted ? (
                  <span style={{ fontSize: '13px', color: '#3D7A5E', fontWeight: 600 }}>✓ Survey completed — thank you!</span>
                ) : (
                  <button onClick={() => setPanelView('survey')} style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '13px', fontWeight: 600, cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>
                    Take the full beta survey →
                  </button>
                )}
              </div>
            </>
          )}

          {/* ── Survey view ── */}
          {panelView === 'survey' && (
            <>
              <p style={{ margin: '0 0 20px', fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                Help us improve TechGrowth Check. This takes about 5 minutes and your input directly shapes what we build next.
              </p>

              <Stars value={survey.q1} onChange={v => setSurveyQ('q1', v)} label="1. How easy was it to set up your first class? *" />
              <OpenText value={survey.q2} onChange={v => setSurveyQ('q2', v)} label="2. Was anything confusing or unclear during setup?" />
              <ToggleGroup value={survey.q3} options={['Yes', 'Some', 'No']} onChange={v => setSurveyQ('q3', v)} label="3. Did the questions feel appropriate for your grade level?" />
              <OpenText value={survey.q4} onChange={v => setSurveyQ('q4', v)} label="4. Were there any questions that seemed too hard, too easy, or off-topic?" />
              <OpenText value={survey.q5} onChange={v => setSurveyQ('q5', v)} label="5. How did your students respond to the assessment?" />
              <OpenText value={survey.q6} onChange={v => setSurveyQ('q6', v)} label="6. Approximately how long did it take students to complete?" placeholder="e.g. 30–40 minutes" />
              <ToggleGroup value={survey.q7} options={['Yes', 'Maybe', 'No']} onChange={v => setSurveyQ('q7', v)} label="7. Do you feel this platform would help you document growth for TIA?" />
              <OpenText value={survey.q8} onChange={v => setSurveyQ('q8', v)} label="8. What would make it more useful for TIA documentation?" />
              <Stars value={survey.q9} onChange={v => setSurveyQ('q9', v)} label="9. How likely are you to recommend TechGrowth Check to another Technology Applications teacher? *" />
              <OpenText value={survey.q10} onChange={v => setSurveyQ('q10', v)} label="10. Anything else you'd like us to know?" />

              {surveyError && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{surveyError}</p>}

              <button onClick={handleSurveySubmit} disabled={surveySubmitting}
                style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: 700, border: 'none', borderRadius: '8px', cursor: surveySubmitting ? 'not-allowed' : 'pointer', background: surveySubmitting ? '#94a3b8' : 'linear-gradient(135deg, #3D7A5E 0%, #4E9A7A 100%)', color: 'white', marginBottom: '12px' }}>
                {surveySubmitting ? 'Submitting…' : 'Submit Survey'}
              </button>
              <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', textAlign: 'center' }}>Questions marked * are required.</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// ── Admin Dashboard ────────────────────────────────────────────────────────────

function AdminDashboard({ profile }) {
  const [adminTab, setAdminTab]           = useState('teachers'); // 'teachers' | 'feedback' | 'surveys'
  const [teachers, setTeachers]           = useState([]);
  const [feedbackRows, setFeedbackRows]   = useState([]);
  const [surveyRows, setSurveyRows]       = useState([]);
  const [loading, setLoading]             = useState(true);

  useEffect(() => {
    const load = async () => {
      const [{ data: tData }, { data: tokData }, { data: fbData }, { data: svData }] = await Promise.all([
        supabase.from('teachers').select('id, email, full_name, created_at').order('created_at', { ascending: false }),
        supabase.from('tokens').select('teacher_id, class_name').eq('test_type', 'pre'),
        supabase.from('feedback').select('id, teacher_id, page_context, tag, message, created_at, teacher:teacher_id(email)').order('created_at', { ascending: false }),
        supabase.from('survey_responses').select('id, teacher_id, setup_ease, questions_appropriate, tia_helpful, recommend_likelihood, created_at, teacher:teacher_id(email)').order('created_at', { ascending: false }),
      ]);

      const classMap = {};
      (tokData || []).forEach(({ teacher_id, class_name }) => {
        if (!classMap[teacher_id]) classMap[teacher_id] = new Set();
        classMap[teacher_id].add(class_name);
      });
      setTeachers((tData || []).map(t => ({ ...t, classCount: classMap[t.id]?.size ?? 0 })));
      setFeedbackRows(fbData || []);
      setSurveyRows(svData || []);
      setLoading(false);
    };
    load();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fmtDate = ts => ts ? new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';

  const downloadCSV = (headers, rows, filename) => {
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  };

  const thStyle = { padding: '10px 14px', fontSize: '12px', fontWeight: 700, color: '#475569', textAlign: 'left', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', whiteSpace: 'nowrap' };
  const tdStyle = { padding: '10px 14px', fontSize: '13px', color: '#374151', borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' };

  return (
    <div style={{ maxWidth: '1060px', margin: '36px auto', padding: '0 24px' }}>
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px', color: '#1e293b', fontSize: '22px', fontWeight: 800 }}>Admin Dashboard</h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Logged in as {profile.email}</p>
        </div>
      </div>

      {/* Admin tabs */}
      <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0', marginBottom: '24px', gap: '0' }}>
        {[
          { id: 'teachers', label: `Teachers (${teachers.length})` },
          { id: 'feedback', label: `Feedback (${feedbackRows.length})` },
          { id: 'surveys',  label: `Surveys (${surveyRows.length})` },
        ].map(({ id, label }) => (
          <button key={id} onClick={() => setAdminTab(id)} style={{ padding: '10px 18px', fontSize: '14px', fontWeight: adminTab === id ? 700 : 500, background: 'none', border: 'none', borderBottom: `2px solid ${adminTab === id ? '#3D6B8A' : 'transparent'}`, color: adminTab === id ? '#3D6B8A' : '#64748b', cursor: 'pointer', marginBottom: '-2px' }}>{label}</button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Loading…</p>
      ) : (
        <>
          {/* Teachers */}
          {adminTab === 'teachers' && (
            <>
              <button onClick={() => downloadCSV(
                ['Name', 'Email', 'Date Joined', 'Classes Created'],
                teachers.map(t => [t.full_name || '', t.email || '', fmtDate(t.created_at), t.classCount])
              , 'teachers.csv')} style={{ marginBottom: '16px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #e2e8f0', borderRadius: '6px', background: 'white', color: '#64748b', cursor: 'pointer' }}>
                Export CSV
              </button>
              <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr>
                    <th style={thStyle}>Name</th><th style={thStyle}>Email</th>
                    <th style={thStyle}>Date Joined</th><th style={thStyle}>Classes</th>
                  </tr></thead>
                  <tbody>
                    {teachers.map(t => (
                      <tr key={t.id}>
                        <td style={tdStyle}>{t.full_name || '—'}</td>
                        <td style={tdStyle}>{t.email || '—'}</td>
                        <td style={tdStyle}>{fmtDate(t.created_at)}</td>
                        <td style={tdStyle}>{t.classCount}</td>
                      </tr>
                    ))}
                    {teachers.length === 0 && <tr><td colSpan={4} style={{ ...tdStyle, color: '#94a3b8', textAlign: 'center', padding: '32px' }}>No teachers yet</td></tr>}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Feedback */}
          {adminTab === 'feedback' && (
            <>
              <button onClick={() => downloadCSV(
                ['Teacher Email', 'Page Context', 'Tag', 'Message', 'Date'],
                feedbackRows.map(f => [f.teacher?.email || f.teacher_id, f.page_context || '', f.tag || '', f.message, fmtDate(f.created_at)])
              , 'feedback.csv')} style={{ marginBottom: '16px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #e2e8f0', borderRadius: '6px', background: 'white', color: '#64748b', cursor: 'pointer' }}>
                Export CSV
              </button>
              <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr>
                    <th style={thStyle}>Date</th><th style={thStyle}>Teacher</th>
                    <th style={thStyle}>Tag</th><th style={thStyle}>Page</th><th style={thStyle}>Message</th>
                  </tr></thead>
                  <tbody>
                    {feedbackRows.map(f => (
                      <tr key={f.id}>
                        <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{fmtDate(f.created_at)}</td>
                        <td style={tdStyle}>{f.teacher?.email || '—'}</td>
                        <td style={tdStyle}>{f.tag ? <span style={{ background: '#EAF1F8', color: '#3D6B8A', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', fontWeight: 600 }}>{f.tag}</span> : '—'}</td>
                        <td style={{ ...tdStyle, fontSize: '12px', color: '#94a3b8' }}>{f.page_context || '—'}</td>
                        <td style={{ ...tdStyle, maxWidth: '360px' }}>{f.message}</td>
                      </tr>
                    ))}
                    {feedbackRows.length === 0 && <tr><td colSpan={5} style={{ ...tdStyle, color: '#94a3b8', textAlign: 'center', padding: '32px' }}>No feedback yet</td></tr>}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Survey responses */}
          {adminTab === 'surveys' && (
            <>
              <button onClick={() => downloadCSV(
                ['Teacher Email', 'Setup Ease', 'Qs Appropriate', 'TIA Helpful', 'Recommend', 'Date'],
                surveyRows.map(s => [s.teacher?.email || s.teacher_id, s.setup_ease || '', s.questions_appropriate || '', s.tia_helpful || '', s.recommend_likelihood || '', fmtDate(s.created_at)])
              , 'survey-responses.csv')} style={{ marginBottom: '16px', padding: '7px 16px', fontSize: '13px', fontWeight: 600, border: '1.5px solid #e2e8f0', borderRadius: '6px', background: 'white', color: '#64748b', cursor: 'pointer' }}>
                Export CSV
              </button>
              <div style={{ overflowX: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: '1px solid #e2e8f0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead><tr>
                    <th style={thStyle}>Date</th><th style={thStyle}>Teacher</th>
                    <th style={thStyle}>Setup (★)</th><th style={thStyle}>Qs OK?</th>
                    <th style={thStyle}>TIA?</th><th style={thStyle}>Recommend (★)</th>
                  </tr></thead>
                  <tbody>
                    {surveyRows.map(s => (
                      <tr key={s.id}>
                        <td style={{ ...tdStyle, whiteSpace: 'nowrap' }}>{fmtDate(s.created_at)}</td>
                        <td style={tdStyle}>{s.teacher?.email || '—'}</td>
                        <td style={tdStyle}>{s.setup_ease ? '★'.repeat(s.setup_ease) : '—'}</td>
                        <td style={tdStyle}>{s.questions_appropriate || '—'}</td>
                        <td style={tdStyle}>{s.tia_helpful || '—'}</td>
                        <td style={tdStyle}>{s.recommend_likelihood ? '★'.repeat(s.recommend_likelihood) : '—'}</td>
                      </tr>
                    ))}
                    {surveyRows.length === 0 && <tr><td colSpan={6} style={{ ...tdStyle, color: '#94a3b8', textAlign: 'center', padding: '32px' }}>No survey responses yet</td></tr>}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

// ── Access Windows Page ───────────────────────────────────────────────────────

function AccessWindowsPage({ profile, classData, onBack }) {
  const [configId, setConfigId]     = useState(null);
  const [loading, setLoading]       = useState(true);
  const [windows, setWindows]       = useState([]);
  const [formDays, setFormDays]     = useState(new Set());
  const [formStart, setFormStart]   = useState('08:00');
  const [formEnd, setFormEnd]       = useState('08:50');
  const [formUntil, setFormUntil]   = useState('');
  const [tz, setTz]                 = useState(() => localStorage.getItem('scheduleTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [showTzPicker, setShowTzPicker] = useState(false);
  const [formError, setFormError]   = useState('');
  const [saving, setSaving]         = useState(false);

  const handleTzChange = tzVal => { setTz(tzVal); setShowTzPicker(false); localStorage.setItem('scheduleTimezone', tzVal); };
  const toggleDay = i => setFormDays(prev => { const next = new Set(prev); next.has(i) ? next.delete(i) : next.add(i); return next; });

  const loadWindows = async id => {
    const { data } = await supabase.from('access_windows').select('*').eq('teacher_id', profile.id).eq('assessment_id', id).order('start_time');
    setWindows(data ?? []);
  };

  useEffect(() => {
    (async () => {
      const { data: tok } = await supabase.from('tokens').select('token').eq('teacher_id', profile.id).eq('class_name', classData.class_name).eq('test_type', 'pre').limit(1).maybeSingle();
      if (!tok) { setLoading(false); return; }
      const { data: cfg } = await supabase.from('token_configs').select('assessment_config_id').eq('token', tok.token).maybeSingle();
      const id = cfg?.assessment_config_id ?? null;
      setConfigId(id);
      if (id) await loadWindows(id);
      setLoading(false);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAdd = async () => {
    if (formDays.size === 0) { setFormError('Select at least one day.'); return; }
    if (!formStart || !formEnd)    { setFormError('Set a start and end time.'); return; }
    if (formEnd <= formStart)      { setFormError('End time must be after start time.'); return; }
    if (!formUntil)                { setFormError('Set a repeat-until date.'); return; }
    setFormError('');
    setSaving(true);
    await supabase.from('access_windows').insert({ teacher_id: profile.id, assessment_id: configId, days_of_week: [...formDays].sort((a, b) => a - b), start_time: formStart, end_time: formEnd, repeat_until: formUntil });
    setSaving(false);
    setFormDays(new Set()); setFormStart('08:00'); setFormEnd('08:50'); setFormUntil('');
    await loadWindows(configId);
  };

  const handleDelete = async id => {
    await supabase.from('access_windows').delete().eq('id', id);
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div style={{ maxWidth: '680px', margin: '36px auto', padding: '0 24px' }}>
      <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '14px', cursor: 'pointer', padding: 0, marginBottom: '20px', fontWeight: 600 }}>← Back to Class</button>

      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: '0 0 4px', color: '#1e293b', fontSize: '22px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Clock size={20} color="#2E7F84" strokeWidth={2} /> Access Windows
        </h2>
        <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{classData.class_name} &nbsp;·&nbsp; {gradeDisplay(classData.grade_level)}</p>
      </div>

      {loading ? (
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Loading…</p>
      ) : !configId ? (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '24px', fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>
          <strong>Access windows are not available for this class.</strong><br />
          Access windows only apply to assessments created through the + New Class & Assessment wizard. This class may have been created with an older flow.
        </div>
      ) : (
        <div style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', border: '1px solid #eef2f7' }}>
          <p style={{ margin: '0 0 20px', fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>
            Set recurring time windows when students are allowed to start this assessment. Outside these windows, students see a message that the assessment is unavailable.{' '}
            <strong>No windows set = always open.</strong>
          </p>

          {/* Add form */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px', marginBottom: '20px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Add Window</div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '5px' }}>Days of week</div>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                {SCHED_DAY_LABELS.map((day, i) => { const on = formDays.has(i); return (
                  <button key={i} onClick={() => toggleDay(i)} style={{ padding: '5px 9px', borderRadius: '5px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, border: on ? '2px solid #5B8DB8' : '2px solid #e2e8f0', background: on ? '#EAF1F8' : 'white', color: on ? '#3D6B8A' : '#64748b' }}>{day}</button>
                ); })}
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              {showTzPicker ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap' }}>Times are in:</span>
                  <select value={tz} autoFocus onChange={e => handleTzChange(e.target.value)} onBlur={() => setShowTzPicker(false)} style={{ fontSize: '13px', padding: '4px 8px', border: '1px solid #5B8DB8', borderRadius: '5px', color: '#1e293b', cursor: 'pointer' }}>
                    {TIMEZONES.map(t => <option key={t} value={t}>{getSchedTzLongName(t)} — {t}</option>)}
                    {!TIMEZONES.includes(tz) && <option value={tz}>{getSchedTzLongName(tz)} — {tz}</option>}
                  </select>
                </div>
              ) : (
                <button onClick={() => setShowTzPicker(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ fontSize: '12px' }}>🌐</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Times in: <strong style={{ color: '#3D6B8A' }}>{getSchedTzLongName(tz)}</strong> <span style={{ color: '#94a3b8' }}>({tz})</span></span>
                  <span style={{ fontSize: '10px', color: '#5B8DB8' }}>▾</span>
                </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <div style={{ flex: 1, minWidth: '120px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>Start time</label>
                <input type="time" value={formStart} onChange={e => setFormStart(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ flex: 1, minWidth: '120px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>End time</label>
                <input type="time" value={formEnd} onChange={e => setFormEnd(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>Repeat until</label>
                <input type="date" value={formUntil} onChange={e => setFormUntil(e.target.value)} style={{ width: '100%', padding: '8px 10px', fontSize: '13px', border: '1px solid #e2e8f0', borderRadius: '5px', boxSizing: 'border-box' }} />
              </div>
            </div>

            {formError && <p style={{ color: '#ef4444', fontSize: '13px', margin: '0 0 12px' }}>{formError}</p>}

            <button onClick={handleAdd} disabled={saving} style={{ padding: '8px 20px', fontSize: '13px', fontWeight: 700, border: 'none', borderRadius: '6px', background: '#5B8DB8', color: 'white', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>
              {saving ? 'Adding…' : '+ Add Window'}
            </button>
          </div>

          {/* Existing windows */}
          {windows.length === 0 ? (
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>No windows set — this assessment is open at all times.</p>
          ) : (
            <div>
              {windows.map((w, i) => (
                <div key={w.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < windows.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e293b', marginBottom: '2px' }}>
                      {fmtSchedDays(w.days_of_week)} · {fmtSchedTime(w.start_time)} – {fmtSchedTime(w.end_time)} <span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '12px' }}>{getSchedTzAbbr(tz)}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>Repeats until {fmtSchedDate(w.repeat_until)}</div>
                  </div>
                  <button onClick={() => handleDelete(w.id)} style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', borderRadius: '5px', padding: '5px 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, marginLeft: '12px', flexShrink: 0 }}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Class Management Page ─────────────────────────────────────────────────────

function ClassManagePage({ profile, classData, onBack, onNavigate }) {
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [answerKeyData, setAnswerKeyData] = useState({ questions: [], title: '', subtitle: '' });

  const isExpired = classData.expires_at && new Date(classData.expires_at) < new Date();
  const expLabel = classData.expires_at
    ? new Date(classData.expires_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null;

  const handleAnswerKey = () => {
    const qs = getQuestionsForGrade(Number(classData.grade_level));
    setAnswerKeyData({ questions: qs, title: gradeDisplay(classData.grade_level), subtitle: classData.class_name });
    setShowAnswerKey(true);
  };

  const tiles = [
    {
      id: 'passes',
      Icon: Printer,
      title: 'Passes & QR Codes',
      desc: 'View, print, and distribute student pass codes and QR codes for both the pre-test and post-test.',
      color: '#3D6B8A', bg: '#EAF1F8',
      onClick: () => onNavigate('passes'),
      disabled: false,
    },
    {
      id: 'answer-key',
      Icon: BookOpen,
      title: 'Answer Key',
      desc: 'View all assessment questions with correct answers highlighted. Only available while passes are active.',
      color: '#4B3F82', bg: '#EDEAF6',
      onClick: handleAnswerKey,
      disabled: isExpired,
    },
    {
      id: 'results',
      Icon: BarChart2,
      title: 'My Results',
      desc: 'View pre- and post-test scores for this class and track student growth over time.',
      color: '#6B5F9B', bg: '#EDEAF6',
      onClick: () => onNavigate('results'),
      disabled: false,
    },
    {
      id: 'add-students',
      Icon: ClipboardList,
      title: 'Add Students',
      desc: 'Generate additional pre-test and post-test passes for new students joining this class.',
      color: '#3D7A5E', bg: '#D4EEE3',
      onClick: () => onNavigate('add-students'),
      disabled: isExpired,
    },
    {
      id: 'access-windows',
      Icon: Clock,
      title: 'Access Windows',
      desc: 'Set the days and times students are allowed to start this assessment.',
      color: '#2E7F84', bg: '#E5F4F5',
      onClick: () => onNavigate('access-windows'),
      disabled: false,
    },
  ];

  return (
    <div style={{ maxWidth: '960px', margin: '36px auto', padding: '0 24px' }}>
      {showAnswerKey && (
        <AnswerKeyOverlay
          questions={answerKeyData.questions}
          title={answerKeyData.title}
          subtitle={answerKeyData.subtitle}
          onClose={() => setShowAnswerKey(false)}
          email={profile.email}
        />
      )}

      {/* Back + header */}
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '14px', cursor: 'pointer', padding: 0, marginBottom: '20px', fontWeight: 600 }}
      >← My Classes</button>

      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ margin: '0 0 4px', color: '#1e293b', fontSize: '24px', fontWeight: 800 }}>
          {classData.class_name}
        </h2>
        <p style={{ margin: 0, color: '#64748b', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span>{gradeDisplay(classData.grade_level)} &nbsp;·&nbsp; {classData.count} student{classData.count !== 1 ? 's' : ''}</span>
          {expLabel && (
            <span style={{ fontSize: '12px', fontWeight: 600, color: isExpired ? '#dc2626' : '#D97706' }}>
              {isExpired ? '⊘ Passes expired' : `Passes expire ${expLabel}`}
            </span>
          )}
        </p>
      </div>

      {/* Action tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {tiles.map(({ id, Icon, title, desc, color, bg, onClick, disabled }) => (
          <div
            key={id}
            onClick={disabled ? undefined : onClick}
            style={{
              background: 'white', borderRadius: '12px', padding: '24px 22px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: '1px solid #eef2f7',
              display: 'flex', flexDirection: 'column', gap: '10px',
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.5 : 1,
              transition: 'box-shadow 0.15s, transform 0.12s',
            }}
            onMouseEnter={e => { if (!disabled) { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.11)'; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={20} color={color} strokeWidth={1.75} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', marginBottom: '5px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.55 }}>{desc}</div>
            </div>
            <div style={{ marginTop: 'auto', fontSize: '13px', fontWeight: 700, color: disabled ? '#94a3b8' : color }}>
              {disabled ? 'Unavailable' : `Open ${title} →`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Results Dashboard ─────────────────────────────────────────────────────────

function ResultsDashboard({ profile, onBack }) {
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState('');
  const [classes, setClasses]   = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let tokenQ = supabase.from('tokens')
          .select('token, grade_level, test_type, class_name, teacher_id, student_number');
        if (profile.role !== 'admin') tokenQ = tokenQ.eq('teacher_id', profile.id);
        const { data: tokens, error: tErr } = await tokenQ;
        if (tErr) throw tErr;

        if (!tokens?.length) {
          if (!cancelled) { setClasses([]); setLoading(false); }
          return;
        }

        const { data: responses, error: rErr } = await supabase
          .from('assessment_responses')
          .select('student_token, percentage, created_at')
          .in('student_token', tokens.map(t => t.token));
        if (rErr) throw rErr;

        const respMap = {};
        for (const r of (responses || [])) respMap[r.student_token] = r;

        const byClass = {};
        for (const t of tokens) {
          const key = `${t.teacher_id}|${t.class_name}|${t.grade_level}`;
          if (!byClass[key]) byClass[key] = {
            key, className: t.class_name,
            grade: t.grade_level, teacherId: t.teacher_id,
            pre: [], post: [],
          };
          byClass[key][t.test_type === 'pre' ? 'pre' : 'post'].push(t);
        }

        const avg = arr => arr.length
          ? Math.round(arr.reduce((s, v) => s + v, 0) / arr.length)
          : null;

        const processed = Object.values(byClass).map(cls => {
          const hasSNum = [...cls.pre, ...cls.post].some(t => t.student_number != null);
          let students;

          if (hasSNum) {
            const nums = [...new Set(
              [...cls.pre, ...cls.post].map(t => t.student_number).filter(n => n != null)
            )].sort((a, b) => a - b);
            const preByN  = Object.fromEntries(cls.pre.map(t  => [t.student_number, t]));
            const postByN = Object.fromEntries(cls.post.map(t => [t.student_number, t]));
            students = nums.map(n => ({
              n,
              preToken:  preByN[n]?.token  ?? null,
              postToken: postByN[n]?.token ?? null,
              pre:  preByN[n]  ? (respMap[preByN[n].token]  ?? null) : null,
              post: postByN[n] ? (respMap[postByN[n].token] ?? null) : null,
            }));
          } else {
            const sp = [...cls.pre].sort((a, b) => a.token < b.token ? -1 : 1);
            const so = [...cls.post].sort((a, b) => a.token < b.token ? -1 : 1);
            students = Array.from({ length: Math.max(sp.length, so.length) }, (_, i) => ({
              n: i + 1,
              preToken:  sp[i]?.token ?? null,
              postToken: so[i]?.token ?? null,
              pre:  sp[i] ? (respMap[sp[i].token]  ?? null) : null,
              post: so[i] ? (respMap[so[i].token]  ?? null) : null,
            }));
          }

          const prePcts  = students.filter(s => s.pre).map(s => s.pre.percentage);
          const postPcts = students.filter(s => s.post).map(s => s.post.percentage);
          const avgPre  = avg(prePcts);
          const avgPost = avg(postPcts);

          return {
            ...cls, students,
            avgPre, avgPost,
            avgGrowth: avgPre != null && avgPost != null ? avgPost - avgPre : null,
            preCount: prePcts.length, postCount: postPcts.length,
          };
        }).sort((a, b) => (a.className ?? '').localeCompare(b.className ?? ''));

        if (!cancelled) { setClasses(processed); setLoading(false); }
      } catch (err) {
        if (!cancelled) { setError(err.message); setLoading(false); }
      }
    })();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fmt        = v => v != null ? `${v}%` : '—';
  const fmtGrowth  = v => v != null ? (v >= 0 ? `+${v}pp` : `${v}pp`) : '—';
  const growthClr  = v => v == null ? '#888' : v > 0 ? '#3D7A5E' : v < 0 ? '#c62828' : '#555';

  const TH = ({ right, center, children }) => (
    <th style={{
      padding: '11px 16px', fontWeight: 600, fontSize: '12px', color: '#5f6368',
      textTransform: 'uppercase', letterSpacing: '0.5px', background: '#F4F7FA',
      borderBottom: '2px solid #e0e0e0', textAlign: right ? 'right' : center ? 'center' : 'left',
    }}>{children}</th>
  );
  const TD = ({ right, center, mono, style: sx, children }) => (
    <td style={{
      padding: '13px 16px', borderBottom: '1px solid #f0f0f0',
      color: '#3D4B5C', textAlign: right ? 'right' : center ? 'center' : 'left',
      fontFamily: mono ? "'Courier New', monospace" : undefined,
      fontSize: mono ? '13px' : '14px',
      letterSpacing: mono ? '1px' : undefined,
      ...sx,
    }}>{children}</td>
  );

  const backBtn = (label, action) => (
    <button onClick={action} style={{
      background: 'none', border: 'none', color: '#5B8DB8',
      cursor: 'pointer', fontSize: '14px', padding: 0, marginBottom: '20px',
    }}>{label}</button>
  );

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '80px', color: '#888', fontSize: '15px' }}>
      Loading results…
    </div>
  );

  if (error) return (
    <div style={{ maxWidth: '960px', margin: '40px auto', padding: '0 24px' }}>
      {backBtn('← Back to Dashboard', onBack)}
      <p style={{ color: '#c62828' }}>Error: {error}</p>
    </div>
  );

  // ── Class Detail view ─────────────────────────────────────────────────────
  if (selected) {
    const cls = selected;
    const StatCard = ({ label, value, color }) => (
      <div style={{
        background: 'white', borderRadius: '10px', padding: '20px 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)', flex: 1, minWidth: '130px',
      }}>
        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#888', fontWeight: 600, marginBottom: '8px' }}>{label}</div>
        <div style={{ fontSize: '28px', fontWeight: 700, color: color || '#3D6B8A' }}>{value}</div>
      </div>
    );

    const downloadCSV = () => {
      const headers = ['Student Pass (Pre-Test Code)', 'Student Name', 'Pre-Test Score (%)', 'Post-Test Score (%)', 'Growth (pp)'];
      const rows = cls.students.map(s => {
        const growth = s.pre && s.post ? s.post.percentage - s.pre.percentage : '';
        return [
          s.preToken ?? '',
          '',
          s.pre  != null ? s.pre.percentage  : '',
          s.post != null ? s.post.percentage : '',
          growth,
        ];
      });
      const escape = v => `"${String(v).replace(/"/g, '""')}"`;
      const csv = [headers, ...rows].map(r => r.map(escape).join(',')).join('\r\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = `${cls.className}_Grade${cls.grade}_TIA_Results.csv`;
      a.click();
      URL.revokeObjectURL(url);
    };

    return (
      <div style={{ maxWidth: '1020px', margin: '0 auto', padding: '32px 24px' }}>
        {backBtn('← All Classes', () => setSelected(null))}
        <h2 style={{ margin: '0 0 4px', color: '#3D6B8A', fontSize: '22px' }}>{cls.className}</h2>
        <p style={{ margin: '0 0 28px', color: '#888', fontSize: '14px' }}>
          Grade {cls.grade} &nbsp;·&nbsp; {cls.students.length} students &nbsp;·&nbsp;
          {cls.preCount} pre-tests taken &nbsp;·&nbsp; {cls.postCount} post-tests taken
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <StatCard label="Avg Pre-Test"  value={fmt(cls.avgPre)}            color="#5B8DB8" />
          <StatCard label="Avg Post-Test" value={fmt(cls.avgPost)}           color="#3D7A5E" />
          <StatCard label="Avg Growth"    value={fmtGrowth(cls.avgGrowth)}   color={growthClr(cls.avgGrowth)} />
          <StatCard label="Students"      value={cls.students.length}        color="#555" />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={downloadCSV}
            style={{
              padding: '12px 24px', fontSize: '15px', fontWeight: 700,
              border: 'none', borderRadius: '7px', cursor: 'pointer',
              backgroundColor: '#5B8DB8', color: 'white',
              boxShadow: '0 2px 6px rgba(91,141,184,0.35)',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}
          >
            ⬇ Download CSV for TIA Reporting
          </button>
        </div>

        <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
          <div style={{ padding: '18px 24px', borderBottom: '1px solid #f0f0f0' }}>
            <h3 style={{ margin: 0, fontSize: '16px', color: '#3D6B8A' }}>Individual Results</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <TH>#</TH>
                  <TH>Pre-Test Pass</TH>
                  <TH right>Pre-Test</TH>
                  <TH>Post-Test Pass</TH>
                  <TH right>Post-Test</TH>
                  <TH right>Growth</TH>
                  <TH center>Status</TH>
                </tr>
              </thead>
              <tbody>
                {cls.students.map(s => {
                  const growth = s.pre && s.post ? s.post.percentage - s.pre.percentage : null;
                  return (
                    <tr
                      key={s.n}
                      style={{ background: 'white' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#F4F7FA'}
                      onMouseLeave={e => e.currentTarget.style.background = 'white'}
                    >
                      <TD style={{ color: '#888', width: '48px' }}>{s.n}</TD>
                      <TD mono style={{ color: '#5B8DB8' }}>{s.preToken ?? '—'}</TD>
                      <TD right style={{ fontWeight: s.pre ? 600 : 400 }}>
                        {s.pre ? `${s.pre.percentage}%` : <span style={{ color: '#ccc' }}>—</span>}
                      </TD>
                      <TD mono style={{ color: '#3D7A5E' }}>{s.postToken ?? '—'}</TD>
                      <TD right style={{ fontWeight: s.post ? 600 : 400 }}>
                        {s.post ? `${s.post.percentage}%` : <span style={{ color: '#ccc' }}>—</span>}
                      </TD>
                      <TD right style={{ fontWeight: 700, color: growthClr(growth) }}>
                        {fmtGrowth(growth)}
                      </TD>
                      <TD center>
                        {growth == null ? (
                          <span style={{ fontSize: '12px', color: '#bbb' }}>Incomplete</span>
                        ) : growth > 0 ? (
                          <span style={{ background: '#D4EEE3', color: '#3D7A5E', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>▲ Growth</span>
                        ) : growth < 0 ? (
                          <span style={{ background: '#ffebee', color: '#c62828', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>▼ Decline</span>
                        ) : (
                          <span style={{ background: '#fff8e1', color: '#f57f17', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>= No Change</span>
                        )}
                      </TD>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // ── Class List view ───────────────────────────────────────────────────────
  return (
    <div style={{ maxWidth: '1020px', margin: '0 auto', padding: '32px 24px' }}>
      {backBtn('← Back to Dashboard', onBack)}
      <h2 style={{ margin: '0 0 6px', color: '#3D6B8A', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <BarChart2 size={22} color="#3D6B8A" strokeWidth={1.75} />
        Assessment Results
      </h2>
      <p style={{ margin: '0 0 28px', color: '#888', fontSize: '14px' }}>
        {profile.role === 'admin' ? 'All classes across the district' : 'Your classes'}
      </p>

      {classes.length === 0 ? (
        <div style={{ background: 'white', borderRadius: '10px', padding: '60px 40px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
          <h3 style={{ color: '#555', margin: '0 0 8px', fontWeight: 600 }}>No results yet</h3>
          <p style={{ color: '#888', margin: 0, fontSize: '14px' }}>Generate student passes and have students complete assessments to see results here.</p>
        </div>
      ) : (
        <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <TH>Class</TH>
                <TH>Grade</TH>
                <TH center>Students</TH>
                <TH center>Pre-Tests Done</TH>
                <TH center>Post-Tests Done</TH>
                <TH right>Avg Pre</TH>
                <TH right>Avg Post</TH>
                <TH right>Growth</TH>
              </tr>
            </thead>
            <tbody>
              {classes.map(cls => (
                <tr
                  key={cls.key}
                  onClick={() => setSelected(cls)}
                  style={{ cursor: 'pointer', background: 'white' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#EBF2F8'}
                  onMouseLeave={e => e.currentTarget.style.background = 'white'}
                >
                  <TD style={{ fontWeight: 600, color: '#5B8DB8' }}>{cls.className}</TD>
                  <TD>Grade {cls.grade}</TD>
                  <TD center>{cls.students.length}</TD>
                  <TD center>
                    <span style={{
                      background: cls.preCount > 0 ? '#EAF1F8' : '#f5f5f5',
                      color: cls.preCount > 0 ? '#5B8DB8' : '#aaa',
                      padding: '2px 10px', borderRadius: '12px', fontSize: '13px', fontWeight: 600,
                    }}>{cls.preCount} / {cls.students.length}</span>
                  </TD>
                  <TD center>
                    <span style={{
                      background: cls.postCount > 0 ? '#D4EEE3' : '#f5f5f5',
                      color: cls.postCount > 0 ? '#3D7A5E' : '#aaa',
                      padding: '2px 10px', borderRadius: '12px', fontSize: '13px', fontWeight: 600,
                    }}>{cls.postCount} / {cls.students.length}</span>
                  </TD>
                  <TD right style={{ fontWeight: 600 }}>{fmt(cls.avgPre)}</TD>
                  <TD right style={{ fontWeight: 600 }}>{fmt(cls.avgPost)}</TD>
                  <TD right style={{ fontWeight: 700, color: growthClr(cls.avgGrowth) }}>
                    {fmtGrowth(cls.avgGrowth)}
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


const DASHBOARD_QUOTES = [
  "Every student who understands how technology works is better prepared for the world ahead. That's your doing.",
  "Technology Applications teachers are building the foundation for every other subject. Thank you for what you do.",
  "TIA exists because your impact is real and measurable. You're earning it.",
  "You're not just teaching tech — you're teaching students how to think, create, and solve problems. That matters.",
  "Small districts. Big impact. The work you're doing in your classroom changes lives.",
  "Behind every student who knows how to navigate the digital world is a teacher who showed them how.",
  "You chose a subject that prepares students for jobs that don't even exist yet. That takes vision.",
  "The best technology teachers don't just teach tools — they teach thinking. You're one of them.",
];

function Dashboard({ profile, onLogout }) {
  const VALID_SECTIONS = ['generate-passes', 'my-classes', 'results', 'create-assessment', 'tia-report', 'new-class-wizard', 'class-manage', 'access-windows-editor', 'admin'];

  const [section, setSection] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') return 'new-class-wizard';
    const path = window.location.pathname.replace(/^\//, '');
    if (VALID_SECTIONS.includes(path)) return path;
    return 'my-classes';
  });
  const [paymentSessionId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('payment') === 'success' ? params.get('session_id') : null;
  });
  const [dashClasses, setDashClasses] = useState([]);
  const [initialClass, setInitialClass] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null); // class-manage section context
  const [startGPInAddMode, setStartGPInAddMode] = useState(false); // add-students flow
  const [backTarget, setBackTarget] = useState('my-classes'); // where back buttons return to
  const [archivedNames, setArchivedNames] = useState(new Set());
  const [showArchived, setShowArchived] = useState(false);
  const [confirmArchive, setConfirmArchive] = useState(null);
  const [dashGuideOpen, setDashGuideOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen]   = useState(false);
  const [quoteIdx]                        = useState(() => Math.floor(Math.random() * DASHBOARD_QUOTES.length));
  const isAdmin = profile.email === ADMIN_EMAIL;

  useEffect(() => {
    const loadDashClasses = async () => {
      const [tokenRes, archiveRes] = await Promise.all([
        supabase.from('tokens').select('class_name, grade_level, expires_at').eq('teacher_id', profile.id).eq('test_type', 'pre'),
        supabase.from('class_archives').select('class_name').eq('teacher_id', profile.id),
      ]);
      if (tokenRes.data) {
        const map = {};
        tokenRes.data.forEach(({ class_name, grade_level, expires_at }) => {
          if (!map[class_name]) map[class_name] = { class_name, grade_level, count: 0, expires_at: expires_at ?? null };
          map[class_name].count++;
        });
        setDashClasses(Object.values(map).sort((a, b) => a.class_name.localeCompare(b.class_name)));
      }
      if (archiveRes.data) {
        setArchivedNames(new Set(archiveRes.data.map(r => r.class_name)));
      }
    };
    loadDashClasses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleArchive = async (className) => {
    const { error } = await supabase.from('class_archives').insert({ teacher_id: profile.id, class_name: className });
    if (!error) setArchivedNames(prev => new Set([...prev, className]));
    setConfirmArchive(null);
  };

  const handleRestore = async (className) => {
    const { error } = await supabase.from('class_archives').delete().eq('teacher_id', profile.id).eq('class_name', className);
    if (!error) setArchivedNames(prev => { const next = new Set(prev); next.delete(className); return next; });
  };

  // Sync section to URL path for back-button support
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') return; // payment flow manages its own URL
    const path = section === 'my-classes' ? '/' : '/' + section;
    if (window.location.pathname !== path) {
      window.history.pushState({ section }, '', path);
    }
  }, [section]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handlePop = (e) => {
      const s = e.state?.section;
      if (s) { setSection(s); return; }
      const path = window.location.pathname.replace(/^\//, '');
      setSection(VALID_SECTIONS.includes(path) ? path : 'my-classes');
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'cancelled') {
      localStorage.removeItem('pendingPassOrder');
      const url = new URL(window.location.href);
      url.searchParams.delete('payment');
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  // Prevent GeneratePasses from acting as a creation entry point —
  // it is only valid when viewing an existing class (initialClass set).
  useEffect(() => {
    if (section === 'generate-passes' && !initialClass) setSection('my-classes');
  }, [section, initialClass]); // eslint-disable-line react-hooks/exhaustive-deps

  // class-manage and access-windows-editor require a selected class.
  useEffect(() => {
    if ((section === 'class-manage' || section === 'access-windows-editor') && !selectedClass) setSection('my-classes');
  }, [section, selectedClass]); // eslint-disable-line react-hooks/exhaustive-deps

  const schoolLine = profile.school ? ` · ${profile.school}` : profile.district ? ` · ${profile.district}` : '';

  // ── FAQ Help Panel ────────────────────────────────────────────────────────
  const FAQ_DATA = [
    {
      category: 'Getting Started',
      items: [
        { q: 'How do I create my first assessment?', a: 'Click + New Class & Assessment in the nav bar. Step 1: enter a class name and grade level. Step 2: enter the number of students (and optionally apply a promo code). Step 3: choose which TEKS strands to include and how many questions per standard (1–3), then click Generate.' },
        { q: 'How do I create a class?', a: 'Click + New Class & Assessment in the nav bar. Work through the 3-step wizard — class name and grade, number of students, then assessment setup. This creates your class with pre-test and post-test passes for each student.' },
        { q: 'How do students log in?', a: 'Students go to techgrowthcheck.com and enter their 8-character pass code, then click Begin Assessment. You can print pass sheets or display QR codes for students to scan.' },
      ],
    },
    {
      category: 'Questions & Answer Keys',
      items: [
        { q: 'How do I see the questions my students will see?', a: 'Go to My Classes, click View Passes on your class, then click the purple Answer Key button. This shows every question with the correct answer highlighted. The answer key is only available after generating passes.' },
        { q: 'How do I get the answer key?', a: 'The Answer Key button appears on your class pass page after passes are generated. Click it to view and print all questions with correct answers marked.' },
        { q: "Why can't I see questions before generating passes?", a: 'Questions are part of the paid assessment and are only accessible after passes are generated.' },
      ],
    },
    {
      category: 'K-2 Assessments',
      items: [
        { q: 'How do I give the test to Kindergarten, 1st, or 2nd graders?', a: 'Use Teacher Script Mode. Go to My Classes, click View Passes on your K-2 class, then click the Teacher Script button. Project it on a smartboard and read each question and answer choice aloud while students follow along as a group.' },
        { q: 'Do K-2 students take the test on their own?', a: 'We recommend whole-group administration for K-2. The teacher reads questions aloud from the smartboard using Teacher Script Mode. Students can also take it individually with audio support, but teacher-led is the recommended approach.' },
      ],
    },
    {
      category: 'Results & Reporting',
      items: [
        { q: "How do I see my students' results?", a: "Go to My Results from the dashboard. Select a class to see each student's pre-test and post-test scores side by side with growth calculated in percentage points." },
        { q: 'How do I download results?', a: 'In My Results, click Export CSV to download a spreadsheet of all scores formatted for TIA reporting.' },
        { q: 'How do I generate a TIA Growth Report?', a: 'Go to TIA Growth Report from the dashboard. Select a pre-assessment and post-assessment, fill in your report header, and click Generate. The report includes class summary, student-level data, and standards breakdown — ready to print or export as PDF.' },
      ],
    },
    {
      category: 'Managing Classes',
      items: [
        { q: 'How do I archive an old class?', a: 'In My Classes, click the small archive icon in the top-right corner of any class card. Confirm by clicking Yes. The class moves to the Archived Classes section at the bottom of the page.' },
        { q: 'How do I restore an archived class?', a: 'Scroll to the bottom of My Classes, click the Archived Classes header to expand it, and click the Restore button on any archived class card.' },
        { q: 'Can I delete a class?', a: 'Classes cannot be deleted, but you can archive them to keep your dashboard clean. Archived classes and their data are always available if you need them later.' },
      ],
    },
    {
      category: 'Assessment Settings',
      items: [
        { q: "What does 'Randomize question order' do?", a: 'When enabled (default for grades 3-8), each student sees questions in a different random order. This prevents students sitting next to each other from having the same sequence. K-2 questions are always in fixed order regardless of this setting.' },
        { q: 'What are Access Windows?', a: 'Access Windows let you restrict when students can start the assessment. Add recurring windows by selecting days of the week, a start time, an end time, and a repeat-until date. Outside these windows, students see a message that the assessment is unavailable. No windows set = always open.' },
        { q: 'How do I set up an access schedule?', a: 'You can set a schedule in two places: (1) In Step 3 of the + New Class & Assessment wizard, choose "Set a schedule" under "When can students access this?" to add windows before generating passes. (2) After a class is created, open the class from My Classes and click the Access Windows tile. Access Windows only apply to assessments created through the wizard — older classes may not support this feature.' },
        { q: 'Can students save and come back later?', a: 'Yes. Students can click Save & Exit during the assessment and return later with the same pass code to resume where they left off. Once submitted, the assessment is complete.' },
      ],
    },
    {
      category: 'Account & Support',
      items: [
        { q: 'How do I contact support?', a: 'Email support@brightboptech.com for any questions not covered here.' },
      ],
    },
  ];

  const [helpOpen, setHelpOpen] = useState(false);
  const [faqSearch, setFaqSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [helpView, setHelpView] = useState('faq'); // 'faq' | 'contact' | 'success'
  const [contactForm, setContactForm] = useState({ name: '', email: '', school: '', gradeLevels: [], issueType: '', description: '', screenshotUrl: '', honeypot: '' });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const contactOpenedAt = useRef(null);
  const [helpPulseDone, setHelpPulseDone] = useState(false);

  const HELP_ISSUE_TYPES = [
    'I need help using the platform',
    'I found a bug or error',
    'Question about billing or passes',
    'Question about TEKS alignment or content',
    'Feature request or suggestion',
    'TIA reporting help',
    'Other',
  ];

  const handleContactSubmit = async () => {
    const stripHtml = s => s.replace(/<[^>]*>/g, '');

    // Bot detection: honeypot filled or form submitted under 3 seconds
    if (contactForm.honeypot.length > 0 || (contactOpenedAt.current && Date.now() - contactOpenedAt.current < 3000)) {
      setHelpView('success');
      return;
    }

    // Rate limit: max 3 submissions per hour tracked in sessionStorage
    const RATE_KEY = 'tgc_support_submissions';
    const now = Date.now();
    const prev = JSON.parse(sessionStorage.getItem(RATE_KEY) || '[]');
    const recent = prev.filter(ts => now - ts < 60 * 60 * 1000);
    if (recent.length >= 3) {
      setContactErrors({ submit: "You've submitted multiple requests recently. Please wait before submitting again." });
      return;
    }

    // Validation
    const errs = {};
    if (!contactForm.name.trim()) errs.name = 'Name is required.';
    if (!contactForm.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) errs.email = 'Enter a valid email address.';
    if (!contactForm.issueType) errs.issueType = 'Please select an issue type.';
    if (!contactForm.description.trim()) errs.description = 'Description is required.';
    else if (contactForm.description.trim().length < 20) errs.description = 'Please provide at least 20 characters.';
    const urlVal = contactForm.screenshotUrl.trim();
    if (urlVal && !urlVal.startsWith('https://')) errs.screenshotUrl = 'URL must start with https://';
    if (Object.keys(errs).length > 0) { setContactErrors(errs); return; }

    setContactSubmitting(true);
    setContactErrors({});

    const { error } = await supabase.from('support_tickets').insert({
      name: stripHtml(contactForm.name.trim()),
      email: contactForm.email.trim(),
      school: contactForm.school.trim() ? stripHtml(contactForm.school.trim()) : null,
      grade_levels: contactForm.gradeLevels.length > 0 ? contactForm.gradeLevels.join(', ') : null,
      issue_type: contactForm.issueType,
      description: stripHtml(contactForm.description.trim()),
      screenshot_url: urlVal || null,
      status: 'new',
    });

    setContactSubmitting(false);
    if (error) {
      setContactErrors({ submit: 'Something went wrong. Please email support@brightboptech.com directly.' });
    } else {
      sessionStorage.setItem(RATE_KEY, JSON.stringify([...recent, now]));
      // Fire-and-forget email notification — ticket is already saved to Supabase
      fetch('/api/support-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: stripHtml(contactForm.name.trim()),
          email: contactForm.email.trim(),
          school: contactForm.school.trim() || null,
          grade_levels: contactForm.gradeLevels.length > 0 ? contactForm.gradeLevels.join(', ') : null,
          issue_type: contactForm.issueType,
          description: stripHtml(contactForm.description.trim()),
          screenshot_url: contactForm.screenshotUrl.trim() || null,
        }),
      }).catch(() => {});
      setHelpView('success');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F4F7FA' }}>

      {/* Header */}
      <div className="tc-dash-header" style={{ background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)', color: 'white', padding: '14px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
        <div className="tc-dash-header-inner" style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ margin: '0 0 2px', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px', lineHeight: 1 }}>
              TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
            </div>
            <p style={{ margin: 0, opacity: 0.7, fontSize: '12px' }}>
              Dashboard &nbsp;·&nbsp; {profile.full_name}{schoolLine}
            </p>
          </div>
          <button
            onClick={onLogout}
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.35)', color: 'white', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
          >Sign Out</button>
        </div>
      </div>

      {/* ── Nav Bar ───────────────────────────────────────────────────────── */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          {[
            { id: 'my-classes', label: 'My Classes' },
            { id: 'results',    label: 'My Results' },
            { id: 'tia-report', label: 'TIA Report' },
            ...(isAdmin ? [{ id: 'admin', label: '⚙ Admin' }] : []),
          ].map(({ id, label }) => {
            const active = section === id || (id === 'my-classes' && (section === 'new-class-wizard' || section === 'class-manage' || section === 'access-windows-editor'));
            return (
              <button
                key={id}
                onClick={() => { setBackTarget('my-classes'); setSection(id); }}
                style={{
                  padding: '14px 16px', fontSize: '14px',
                  fontWeight: active ? 700 : 500,
                  color: active ? (id === 'admin' ? '#6B5F9B' : '#3D6B8A') : '#64748b',
                  background: 'none', border: 'none',
                  borderBottom: `2px solid ${active ? (id === 'admin' ? '#6B5F9B' : '#3D6B8A') : 'transparent'}`,
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  marginBottom: '-1px', transition: 'color 0.15s',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = id === 'admin' ? '#6B5F9B' : '#3D6B8A'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#64748b'; }}
              >{label}</button>
            );
          })}
          <div style={{ flex: 1 }} />
          <button
            onClick={() => setSection('new-class-wizard')}
            style={{
              padding: '7px 18px', fontSize: '14px', fontWeight: 700,
              background: 'linear-gradient(135deg, #3D7A5E 0%, #4E9A7A 100%)',
              color: 'white', border: 'none', borderRadius: '7px',
              cursor: 'pointer', letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
          >+ New Class & Assessment</button>
          <button
            onClick={() => setDashGuideOpen(v => !v)}
            title="Getting started guide"
            style={{
              width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
              background: dashGuideOpen ? '#EAF1F8' : 'transparent',
              border: '1.5px solid #e2e8f0', color: '#64748b', fontSize: '14px',
              fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#EAF1F8'; e.currentTarget.style.color = '#3D6B8A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = dashGuideOpen ? '#EAF1F8' : 'transparent'; e.currentTarget.style.color = '#64748b'; }}
          >?</button>
        </div>
      </div>

      {/* Getting started guide — collapsible under nav bar */}
      {dashGuideOpen && (
        <div style={{ background: '#F8FAFC', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 24px' }}>
            <p style={{ margin: '0 0 16px', fontSize: '12px', fontWeight: 700, color: '#3D6B8A', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Getting started</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[
                { n: '1', title: 'Create a Class', body: 'Click + New Class & Assessment, enter a class name and grade level.' },
                { n: '2', title: 'Add Students', body: 'Enter how many students. Use a code for free access or pay $2 per student by card.' },
                { n: '3', title: 'Set Up Assessment', body: 'Choose which TEKS strands to assess and how many questions per standard (1–3).' },
                { n: '✓', title: 'View & Distribute', body: 'Open My Classes → View Passes to print sheets or show QR codes. Students visit techgrowthcheck.com and enter their 8-character code.' },
              ].map(({ n, title, body }) => (
                <div key={n} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EAF1F8', color: '#3D6B8A', fontSize: '11px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{n}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '2px' }}>{title}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {section === 'generate-passes'  && <GeneratePasses    profile={profile} onBack={() => setSection(backTarget)} paymentSessionId={paymentSessionId} initialClass={initialClass} startInAddMode={startGPInAddMode} />}
      {section === 'create-assessment' && <CreateAssessment  profile={profile} onBack={() => setSection('my-classes')} />}
      {section === 'results'           && <ResultsDashboard  profile={profile} onBack={() => setSection(backTarget)} />}
      {section === 'tia-report'        && <TIAGrowthReport   profile={profile} onBack={() => setSection(backTarget)} />}
      {section === 'new-class-wizard'  && (
        <NewClassWizard
          profile={profile}
          paymentSessionId={paymentSessionId}
          onDone={({ className: cn, grade: g, count: n, expiresAt: exp }) => {
            setDashClasses(prev => {
              const without = prev.filter(c => c.class_name !== cn);
              return [...without, { class_name: cn, grade_level: Number(g), count: n, expires_at: exp }]
                .sort((a, b) => a.class_name.localeCompare(b.class_name));
            });
            setSection('my-classes');
          }}
        />
      )}
      {section === 'class-manage' && selectedClass && (
        <ClassManagePage
          profile={profile}
          classData={selectedClass}
          onBack={() => setSection('my-classes')}
          onNavigate={(action) => {
            setBackTarget('class-manage');
            if (action === 'passes') {
              setInitialClass(selectedClass);
              setStartGPInAddMode(false);
              setSection('generate-passes');
            } else if (action === 'results') {
              setSection('results');
            } else if (action === 'add-students') {
              setInitialClass(selectedClass);
              setStartGPInAddMode(true);
              setSection('generate-passes');
            } else if (action === 'access-windows') {
              setSection('access-windows-editor');
            }
          }}
        />
      )}

      {section === 'admin' && isAdmin && <AdminDashboard profile={profile} />}

      {section === 'access-windows-editor' && selectedClass && (
        <AccessWindowsPage
          profile={profile}
          classData={selectedClass}
          onBack={() => setSection('class-manage')}
        />
      )}

      {section === 'my-classes' && (
        <div style={{ maxWidth: '960px', margin: '36px auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ margin: '0 0 4px', color: '#3D6B8A', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Layers size={22} color="#3D6B8A" strokeWidth={1.75} />
              My Classes
            </h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
              Click any class to view passes, answer keys, results, and more.
            </p>
          </div>

          {/* Rotating quote */}
          <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9', textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '13px', lineHeight: 1.75, margin: '0 auto', maxWidth: '640px' }}>
              &ldquo;{DASHBOARD_QUOTES[quoteIdx]}&rdquo;
            </p>
          </div>

          {dashClasses.length === 0 && archivedNames.size === 0 ? (
            <div style={{ background: 'white', borderRadius: '10px', padding: '48px 28px', textAlign: 'center', color: '#94a3b8', border: '1px solid #eef2f7' }}>
              <Layers size={32} color="#cbd5e1" strokeWidth={1.5} style={{ marginBottom: '12px' }} />
              <p style={{ margin: '0 0 12px', fontSize: '15px', fontWeight: 600, color: '#64748b' }}>No classes yet</p>
              <button
                onClick={() => setSection('new-class-wizard')}
                style={{ padding: '10px 22px', background: 'linear-gradient(135deg, #3D7A5E 0%, #4E9A7A 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}
              >+ New Class & Assessment</button>
            </div>
          ) : (
            <>
              {/* Active classes */}
              {dashClasses.filter(c => !archivedNames.has(c.class_name)).length === 0 ? (
                <div style={{ background: 'white', borderRadius: '10px', padding: '24px', textAlign: 'center', border: '1px solid #eef2f7', marginBottom: '24px' }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8' }}>All classes are archived. Restore one below to make it active.</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '14px', marginBottom: '28px' }}>
                  {dashClasses.filter(c => !archivedNames.has(c.class_name)).map(c => {
                    const isExpired = c.expires_at && new Date(c.expires_at) < new Date();
                    const daysLeft = c.expires_at ? Math.ceil((new Date(c.expires_at) - new Date()) / 86400000) : null;
                    const expLabel = c.expires_at ? new Date(c.expires_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : null;
                    const expiryColor = isExpired ? '#dc2626' : daysLeft !== null && daysLeft <= 30 ? '#D97706' : '#94a3b8';
                    return (
                    <div
                      key={c.class_name}
                      onClick={() => { setSelectedClass(c); setSection('class-manage'); }}
                      style={{ background: 'white', borderRadius: '12px', padding: '20px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: `1px solid ${isExpired ? '#fecaca' : '#eef2f7'}`, display: 'flex', flexDirection: 'column', opacity: isExpired ? 0.72 : 1, cursor: 'pointer', transition: 'box-shadow 0.15s, transform 0.12s' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.11)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3px' }}>
                        <div style={{ fontWeight: 700, fontSize: '15px', color: '#1e293b' }}>{c.class_name}</div>
                        {confirmArchive === c.class_name ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }} onClick={e => e.stopPropagation()}>
                            <span style={{ fontSize: '11px', color: '#64748b' }}>Archive?</span>
                            <button onClick={() => handleArchive(c.class_name)} style={{ padding: '3px 9px', fontSize: '11px', fontWeight: 700, border: 'none', borderRadius: '4px', background: '#f59e0b', color: 'white', cursor: 'pointer' }}>Yes</button>
                            <button onClick={() => setConfirmArchive(null)} style={{ padding: '3px 7px', fontSize: '11px', fontWeight: 600, border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white', color: '#64748b', cursor: 'pointer' }}>No</button>
                          </div>
                        ) : (
                          <button
                            onClick={e => { e.stopPropagation(); setConfirmArchive(c.class_name); }}
                            title="Archive this class"
                            style={{ padding: '4px', background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', borderRadius: '4px', display: 'flex', alignItems: 'center', flexShrink: 0 }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = '#f1f5f9'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.background = 'none'; }}
                          ><Archive size={14} strokeWidth={2} /></button>
                        )}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: expLabel ? '4px' : '0' }}>
                        {gradeDisplay(c.grade_level)} &nbsp;·&nbsp; {c.count} student{c.count !== 1 ? 's' : ''}
                      </div>
                      {expLabel && (
                        <div style={{ marginTop: '6px' }}>
                          <div style={{ fontSize: '11px', color: expiryColor, fontWeight: isExpired || (daysLeft !== null && daysLeft <= 30) ? 700 : 400 }}>
                            {isExpired ? '⊘ Expired' : `Expires ${expLabel}`}
                          </div>
                        </div>
                      )}
                      <div style={{ marginTop: 'auto', paddingTop: '14px', fontSize: '12px', fontWeight: 600, color: '#5B8DB8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Manage Class →
                      </div>
                    </div>
                    );
                  })}
                </div>
              )}

              {/* Archived classes */}
              {dashClasses.filter(c => archivedNames.has(c.class_name)).length > 0 && (
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                  <button
                    onClick={() => setShowArchived(v => !v)}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', marginBottom: showArchived ? '16px' : '0', color: '#64748b' }}
                  >
                    {showArchived
                      ? <ChevronDown size={16} strokeWidth={2.5} color="#64748b" />
                      : <ChevronRight size={16} strokeWidth={2.5} color="#64748b" />}
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>
                      &#128230; Archived Classes ({dashClasses.filter(c => archivedNames.has(c.class_name)).length})
                    </span>
                  </button>

                  {showArchived && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '14px' }}>
                      {dashClasses.filter(c => archivedNames.has(c.class_name)).map(c => (
                        <div key={c.class_name} style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px 18px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', opacity: 0.8 }}>
                          <div style={{ fontWeight: 700, fontSize: '15px', color: '#64748b', marginBottom: '3px' }}>{c.class_name}</div>
                          <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '16px' }}>
                            {gradeDisplay(c.grade_level)} &nbsp;·&nbsp; {c.count} student{c.count !== 1 ? 's' : ''}
                          </div>
                          <button
                            onClick={() => handleRestore(c.class_name)}
                            style={{ marginTop: 'auto', padding: '7px 14px', fontSize: '12px', fontWeight: 700, background: 'white', color: '#5B8DB8', border: '1.5px solid #5B8DB8', borderRadius: '6px', cursor: 'pointer', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '5px' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#EAF1F8'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}
                          ><RotateCcw size={12} strokeWidth={2.5} />Restore</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* ── Feedback Panel ───────────────────────────────────────────────── */}
      <FeedbackPanel profile={profile} section={section} open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />

      {/* ── Floating FAQ Help Panel ───────────────────────────────────────── */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 8000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>

        {helpOpen && (() => {
          const query = helpView === 'faq' ? faqSearch.trim().toLowerCase() : '';
          const filtered = query
            ? FAQ_DATA.flatMap(cat =>
                cat.items
                  .filter(item => item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query))
                  .map(item => ({ ...item, _cat: cat.category }))
              )
            : null;

          const fieldStyle = (field) => ({
            width: '100%', padding: '7px 10px', fontSize: '13px', fontFamily: 'inherit',
            border: `1.5px solid ${contactErrors[field] ? '#fca5a5' : '#e2e8f0'}`,
            borderRadius: '7px', outline: 'none', boxSizing: 'border-box',
            background: contactErrors[field] ? '#fff5f5' : 'white',
          });

          const closePanel = () => {
            setHelpOpen(false); setFaqSearch(''); setExpandedFaq(null);
            setHelpView('faq'); setContactErrors({});
          };

          return (
            <div style={{
              width: '360px', height: helpView === 'faq' ? '520px' : '560px',
              background: 'white', borderRadius: '16px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.18)', border: '1px solid #e2e8f0',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              transition: 'height 0.18s ease',
            }}>

              {/* Header */}
              <div style={{ background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)', padding: '13px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {helpView !== 'faq' && (
                    <button
                      onClick={() => { setHelpView('faq'); setContactErrors({}); }}
                      style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', borderRadius: '6px', padding: '3px 9px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, lineHeight: 1.5 }}
                    >← Back</button>
                  )}
                  <HelpCircle size={16} color="white" strokeWidth={2} />
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>
                    {helpView === 'faq' ? 'TechGrowth Check Help' : helpView === 'contact' ? 'Contact Support' : 'Message Sent'}
                  </span>
                </div>
                <button onClick={closePanel} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', borderRadius: '6px', padding: '3px 8px', cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}>&#x2715;</button>
              </div>

              {/* Search bar (FAQ view only) */}
              {helpView === 'faq' && (
                <div style={{ padding: '12px 14px 8px', flexShrink: 0, borderBottom: '1px solid #f1f5f9' }}>
                  <input
                    value={faqSearch}
                    onChange={e => { setFaqSearch(e.target.value); setExpandedFaq(null); }}
                    placeholder="Search for help..."
                    style={{ width: '100%', padding: '8px 12px', fontSize: '13px', border: '1.5px solid #e2e8f0', borderRadius: '8px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  />
                </div>
              )}

              {/* Scrollable content area */}
              <div style={{ flex: 1, overflowY: 'auto', padding: helpView === 'faq' ? '8px 0' : '14px' }}>

                {/* ── FAQ list ── */}
                {helpView === 'faq' && (
                  <>
                    {filtered !== null ? (
                      filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '13px', marginTop: '40px', lineHeight: 1.7 }}>
                          No results for <strong>"{faqSearch}"</strong><br />
                          <span style={{ fontSize: '12px' }}>Try a different keyword.</span>
                        </div>
                      ) : (
                        <div style={{ padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {filtered.map((item, idx) => {
                            const key = `search-${idx}`;
                            const open = expandedFaq === key;
                            return (
                              <div key={key} style={{ border: '1px solid #e8edf2', borderRadius: '8px', overflow: 'hidden' }}>
                                <button onClick={() => setExpandedFaq(open ? null : key)} style={{ width: '100%', textAlign: 'left', padding: '10px 12px', background: open ? '#EAF1F8' : 'white', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b', lineHeight: 1.4 }}>{item.q}</span>
                                  <span style={{ color: '#5B8DB8', fontSize: '14px', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{open ? '▲' : '▼'}</span>
                                </button>
                                {open && (
                                  <div style={{ padding: '0 12px 12px', fontSize: '13px', color: '#475569', lineHeight: 1.6, background: '#F8FAFC', borderTop: '1px solid #e8edf2' }}>
                                    <div style={{ paddingTop: '10px' }}>{item.a}</div>
                                    <div style={{ marginTop: '6px', fontSize: '11px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item._cat}</div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )
                    ) : (
                      FAQ_DATA.map((cat, ci) => {
                        const catKey = `cat-${ci}`;
                        const catOpen = expandedFaq === catKey || expandedFaq?.startsWith(`${catKey}-`);
                        return (
                          <div key={catKey} style={{ marginBottom: '2px' }}>
                            <button
                              onClick={() => setExpandedFaq(catOpen ? null : catKey)}
                              style={{ width: '100%', textAlign: 'left', padding: '9px 16px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                              onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                            >
                              <span style={{ fontSize: '12px', fontWeight: 700, color: '#3D6B8A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cat.category}</span>
                              <ChevronDown size={14} color="#94a3b8" style={{ transform: catOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                            </button>
                            {catOpen && (
                              <div style={{ padding: '0 10px 6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {cat.items.map((item, ii) => {
                                  const itemKey = `${catKey}-${ii}`;
                                  const open = expandedFaq === itemKey;
                                  return (
                                    <div key={itemKey} style={{ border: '1px solid #e8edf2', borderRadius: '8px', overflow: 'hidden' }}>
                                      <button onClick={() => setExpandedFaq(open ? catKey : itemKey)} style={{ width: '100%', textAlign: 'left', padding: '9px 12px', background: open ? '#EAF1F8' : 'white', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b', lineHeight: 1.4 }}>{item.q}</span>
                                        <span style={{ color: '#5B8DB8', fontSize: '14px', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{open ? '▲' : '▼'}</span>
                                      </button>
                                      {open && (
                                        <div style={{ padding: '10px 12px 12px', fontSize: '13px', color: '#475569', lineHeight: 1.6, background: '#F8FAFC', borderTop: '1px solid #e8edf2' }}>
                                          {item.a}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            <div style={{ height: '1px', background: '#f1f5f9', margin: '0 10px' }} />
                          </div>
                        );
                      })
                    )}

                    {/* Contact Support button */}
                    <div style={{ textAlign: 'center', padding: '16px 16px 12px' }}>
                      <button
                        onClick={() => { setHelpView('contact'); contactOpenedAt.current = Date.now(); }}
                        style={{ padding: '9px 22px', background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                      >Contact Support</button>
                    </div>
                  </>
                )}

                {/* ── Contact form ── */}
                {helpView === 'contact' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>

                    {/* Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input
                        type="text" placeholder="Your name" value={contactForm.name}
                        onChange={e => { setContactForm(f => ({ ...f, name: e.target.value })); setContactErrors(v => ({ ...v, name: undefined })); }}
                        style={fieldStyle('name')}
                      />
                      {contactErrors.name && <div style={{ color: '#ef4444', fontSize: '11px', marginTop: '3px' }}>{contactErrors.name}</div>}
                    </div>

                    {/* Email */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Email <span style={{ color: '#ef4444' }}>*</span></label>
                      <input
                        type="email" placeholder="your@email.com" value={contactForm.email}
                        onChange={e => { setContactForm(f => ({ ...f, email: e.target.value })); setContactErrors(v => ({ ...v, email: undefined })); }}
                        style={fieldStyle('email')}
                      />
                      {contactErrors.email && <div style={{ color: '#ef4444', fontSize: '11px', marginTop: '3px' }}>{contactErrors.email}</div>}
                    </div>

                    {/* School/District */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                        School / District <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optional)</span>
                      </label>
                      <input
                        type="text" placeholder="e.g. Austin ISD" value={contactForm.school}
                        onChange={e => setContactForm(f => ({ ...f, school: e.target.value }))}
                        style={fieldStyle('school')}
                      />
                    </div>

                    {/* Grade Levels */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                        Grade Level(s) <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optional)</span>
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {['K','1','2','3','4','5','6','7','8'].map(g => {
                          const checked = contactForm.gradeLevels.includes(g);
                          return (
                            <label key={g} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '12px', fontWeight: 600, color: checked ? '#3D6B8A' : '#64748b', padding: '3px 10px', border: `1.5px solid ${checked ? '#3D6B8A' : '#e2e8f0'}`, borderRadius: '5px', background: checked ? '#EAF1F8' : 'white', userSelect: 'none', transition: 'all 0.1s' }}>
                              <input
                                type="checkbox" checked={checked}
                                onChange={e => setContactForm(f => ({ ...f, gradeLevels: e.target.checked ? [...f.gradeLevels, g] : f.gradeLevels.filter(gl => gl !== g) }))}
                                style={{ display: 'none' }}
                              />
                              {g}
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Issue Type */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Issue Type <span style={{ color: '#ef4444' }}>*</span></label>
                      <select
                        value={contactForm.issueType}
                        onChange={e => { setContactForm(f => ({ ...f, issueType: e.target.value })); setContactErrors(v => ({ ...v, issueType: undefined })); }}
                        style={{ ...fieldStyle('issueType'), cursor: 'pointer', appearance: 'none' }}
                      >
                        <option value="">Select an issue type...</option>
                        {HELP_ISSUE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {contactErrors.issueType && <div style={{ color: '#ef4444', fontSize: '11px', marginTop: '3px' }}>{contactErrors.issueType}</div>}
                    </div>

                    {/* Description */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Description <span style={{ color: '#ef4444' }}>*</span></label>
                      <textarea
                        value={contactForm.description}
                        onChange={e => { setContactForm(f => ({ ...f, description: e.target.value })); setContactErrors(v => ({ ...v, description: undefined })); }}
                        placeholder="Please describe your question or issue in detail..."
                        rows={4}
                        style={{ ...fieldStyle('description'), resize: 'vertical' }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginTop: '2px' }}>
                        <span style={{ color: '#ef4444' }}>{contactErrors.description || ''}</span>
                        <span style={{ color: contactForm.description.length >= 20 ? '#22c55e' : '#94a3b8' }}>{contactForm.description.length} / 20 min</span>
                      </div>
                    </div>

                    {/* Honeypot — hidden from real users, catches bots */}
                    <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                      <input
                        type="text" tabIndex={-1} autoComplete="off"
                        value={contactForm.honeypot}
                        onChange={e => setContactForm(f => ({ ...f, honeypot: e.target.value }))}
                      />
                    </div>

                    {/* Screenshot URL */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>
                        Screenshot URL <span style={{ fontWeight: 400, color: '#94a3b8' }}>(optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Paste a link to your screenshot (e.g., from Imgur, Google Drive, or Dropbox)"
                        value={contactForm.screenshotUrl}
                        onChange={e => { setContactForm(f => ({ ...f, screenshotUrl: e.target.value })); setContactErrors(v => ({ ...v, screenshotUrl: undefined })); }}
                        style={fieldStyle('screenshotUrl')}
                      />
                      {contactErrors.screenshotUrl && <div style={{ color: '#ef4444', fontSize: '11px', marginTop: '3px' }}>{contactErrors.screenshotUrl}</div>}
                    </div>

                    {/* Submit error */}
                    {contactErrors.submit && (
                      <div style={{ padding: '9px 12px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '7px', fontSize: '12px', color: '#b91c1c', lineHeight: 1.5 }}>
                        {contactErrors.submit}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      onClick={handleContactSubmit}
                      disabled={contactSubmitting}
                      style={{ width: '100%', padding: '10px', background: contactSubmitting ? '#94a3b8' : 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 700, cursor: contactSubmitting ? 'not-allowed' : 'pointer', marginBottom: '4px' }}
                    >
                      {contactSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>
                )}

                {/* ── Success screen ── */}
                {helpView === 'success' && (
                  <div style={{ textAlign: 'center', padding: '36px 20px 24px' }}>
                    <div style={{ width: '52px', height: '52px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '22px', color: '#16a34a' }}>✓</div>
                    <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '15px', marginBottom: '10px' }}>Message Sent!</div>
                    <div style={{ color: '#64748b', fontSize: '13px', lineHeight: 1.7, marginBottom: '24px' }}>
                      Thank you! We've received your message and will respond within 1 business day.
                    </div>
                    <button
                      onClick={() => {
                        setHelpView('faq');
                        setContactForm({ name: '', email: '', school: '', gradeLevels: [], issueType: '', description: '', screenshotUrl: '', honeypot: '' });
                        setContactErrors({});
                      }}
                      style={{ padding: '8px 20px', background: 'white', color: '#3D6B8A', border: '1.5px solid #3D6B8A', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#EAF1F8'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}
                    >← Back to FAQ</button>
                  </div>
                )}

              </div>
            </div>
          );
        })()}

        {/* Floating Feedback button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <button
            onClick={() => setFeedbackOpen(v => !v)}
            title="Share feedback"
            style={{
              width: '58px', height: '58px', borderRadius: '50%',
              background: feedbackOpen ? '#236468' : '#2E7F84',
              border: 'none', cursor: 'pointer',
              boxShadow: feedbackOpen ? '0 2px 10px rgba(0,0,0,0.25)' : '0 4px 18px rgba(46,127,132,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'transform 0.15s, background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <MessageCircle size={26} color="white" strokeWidth={2.5} />
          </button>
          <span style={{
            fontSize: '11px', fontWeight: 700, color: '#0e6469',
            letterSpacing: '0.05em', userSelect: 'none',
            textShadow: '0 1px 2px rgba(255,255,255,0.8)',
          }}>FEEDBACK</span>
        </div>

        {/* Floating Help button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <button
            onClick={() => { setHelpOpen(v => !v); setFaqSearch(''); setExpandedFaq(null); setHelpView('faq'); setContactErrors({}); }}
            title="Help"
            onAnimationEnd={() => setHelpPulseDone(true)}
            style={{
              width: '58px', height: '58px', borderRadius: '50%',
              background: helpOpen ? '#B45E0A' : '#D97706',
              border: 'none', cursor: 'pointer',
              boxShadow: helpOpen
                ? '0 2px 10px rgba(0,0,0,0.25)'
                : '0 4px 22px rgba(217,119,6,0.55)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'transform 0.15s, background 0.2s, box-shadow 0.2s',
              animation: helpPulseDone || helpOpen ? 'none' : 'helpPulse 0.9s ease-out 3',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <HelpCircle size={26} color="white" strokeWidth={2.5} />
          </button>
          <span style={{
            fontSize: '11px', fontWeight: 700, color: '#92400e',
            letterSpacing: '0.05em', userSelect: 'none',
            textShadow: '0 1px 2px rgba(255,255,255,0.8)',
          }}>HELP</span>
        </div>
      </div>

      <style>{`
        @keyframes helpPulse {
          0%   { box-shadow: 0 4px 22px rgba(217,119,6,0.55), 0 0 0 0 rgba(217,119,6,0.65); }
          70%  { box-shadow: 0 4px 22px rgba(217,119,6,0.55), 0 0 0 16px rgba(217,119,6,0); }
          100% { box-shadow: 0 4px 22px rgba(217,119,6,0.55), 0 0 0 0 rgba(217,119,6,0); }
        }
      `}</style>
    </div>
  );
}

function TIAGrowthReport({ profile, onBack }) {
  const [classes, setClasses]             = useState([]);
  const [loadingClasses, setLoadingClasses] = useState(true);
  const [selectedClass, setSelectedClass] = useState('');
  const [teacherName, setTeacherName]     = useState(profile.full_name || '');
  const [campusName, setCampusName]       = useState(profile.school || '');
  const [gradeLevel, setGradeLevel]       = useState('');
  const [schoolYear, setSchoolYear]       = useState(() => {
    const now = new Date();
    const y = now.getFullYear();
    return (now.getMonth() + 1) < 8 ? `${y - 1}-${y}` : `${y}-${y + 1}`;
  });
  const [generating, setGenerating]       = useState(false);
  const [error, setError]                 = useState('');
  const [reportData, setReportData]       = useState(null);
  const [studentNames, setStudentNames]   = useState({});

  useEffect(() => {
    (async () => {
      // Load distinct class names this teacher has generated passes for
      const { data } = await supabase
        .from('tokens')
        .select('class_name')
        .eq('teacher_id', profile.id);
      const unique = [...new Set((data ?? []).map(t => t.class_name).filter(Boolean))].sort();
      setClasses(unique);
      setLoadingClasses(false);
    })();
  }, [profile.id]);

  // Auto-populate grade level when a class is selected
  useEffect(() => {
    if (!selectedClass) { setGradeLevel(''); return; }
    (async () => {
      const { data } = await supabase
        .from('tokens')
        .select('grade_level')
        .eq('teacher_id', profile.id)
        .eq('class_name', selectedClass);
      const levels = [...new Set((data ?? []).map(t => t.grade_level).filter(v => v !== null && v !== undefined))]
        .sort((a, b) => a - b);
      if (!levels.length) { setGradeLevel(''); return; }
      setGradeLevel(levels.length === 1 ? gradeDisplay(levels[0]) : `Grades ${levels.map(l => l === 0 ? 'K' : l).join(', ')}`);
    })();
  }, [selectedClass, profile.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const fmtPct    = n => typeof n === 'number' ? n.toFixed(1) + '%' : '—';
  const signedPct = n => typeof n === 'number' ? (n >= 0 ? '+' : '') + n.toFixed(1) + '%' : '—';
  const fmt1      = n => typeof n === 'number' ? n.toFixed(1) : '—';

  const generateReport = async () => {
    if (!selectedClass) {
      setError('Please select a class.');
      return;
    }
    setGenerating(true);
    setError('');
    try {
      // 1. Fetch pre and post tokens directly from tokens table by teacher + class + test_type
      //    No token_configs lookup needed — works for all pass generation flows
      const [{ data: preTD }, { data: postTD }] = await Promise.all([
        supabase.from('tokens').select('token, class_name, student_number')
          .eq('teacher_id', profile.id)
          .eq('class_name', selectedClass)
          .eq('test_type', 'pre'),
        supabase.from('tokens').select('token, class_name, student_number')
          .eq('teacher_id', profile.id)
          .eq('class_name', selectedClass)
          .eq('test_type', 'post'),
      ]);

      const preTokens  = (preTD  ?? []).map(t => t.token);
      const postTokens = (postTD ?? []).map(t => t.token);

      if (!preTokens.length || !postTokens.length) {
        setError(`No ${!preTokens.length ? 'pre' : 'post'}-assessment passes found for class "${selectedClass}". Make sure passes were generated for this class.`);
        setGenerating(false);
        return;
      }

      // 3. Assessment responses for each side, ordered by submission time
      const [{ data: preAR }, { data: postAR }] = await Promise.all([
        supabase.from('assessment_responses').select('id, student_token, percentage, created_at').in('student_token', preTokens).order('created_at', { ascending: true }),
        supabase.from('assessment_responses').select('id, student_token, percentage, created_at').in('student_token', postTokens).order('created_at', { ascending: true }),
      ]);

      const preARByToken  = {};
      (preAR  ?? []).forEach(r => { preARByToken[r.student_token]  = r; });
      const postARByToken = {};
      (postAR ?? []).forEach(r => { postARByToken[r.student_token] = r; });

      // 4. Group by class_name — only include tokens that have a submitted response
      const preByClass  = {};
      (preTD ?? []).forEach(t => {
        const resp = preARByToken[t.token];
        if (!resp) return;
        const cls = t.class_name ?? '';
        if (!preByClass[cls]) preByClass[cls] = [];
        preByClass[cls].push({ token: t.token, student_number: t.student_number, percentage: resp.percentage, responseId: resp.id, submittedAt: resp.created_at });
      });
      const postByClass = {};
      (postTD ?? []).forEach(t => {
        const resp = postARByToken[t.token];
        if (!resp) return;
        const cls = t.class_name ?? '';
        if (!postByClass[cls]) postByClass[cls] = [];
        postByClass[cls].push({ token: t.token, student_number: t.student_number, percentage: resp.percentage, responseId: resp.id, submittedAt: resp.created_at });
      });

      // 5. Sort each class group: by student_number if available, else by submission time
      const sortGroup = (arr) => {
        const hasNumbers = arr.some(s => s.student_number !== null && s.student_number !== undefined);
        return hasNumbers
          ? [...arr].sort((a, b) => a.student_number - b.student_number)
          : [...arr].sort((a, b) => new Date(a.submittedAt) - new Date(b.submittedAt));
      };

      // 6. Pair students positionally within each class (1st pre ↔ 1st post, etc.)
      const matchedPairs = [];
      const allClasses = new Set([...Object.keys(preByClass), ...Object.keys(postByClass)]);
      allClasses.forEach(cls => {
        const preGroup  = sortGroup(preByClass[cls]  ?? []);
        const postGroup = sortGroup(postByClass[cls] ?? []);
        const pairCount = Math.min(preGroup.length, postGroup.length);
        for (let idx = 0; idx < pairCount; idx++) {
          const pre  = preGroup[idx];
          const post = postGroup[idx];
          matchedPairs.push({
            key:            `${cls}|${idx}`,
            preToken:       pre.token,
            postToken:      post.token,
            preScore:       pre.percentage,
            postScore:      post.percentage,
            growth:         post.percentage - pre.percentage,
            preResponseId:  pre.responseId,
            postResponseId: post.responseId,
          });
        }
      });
      matchedPairs.sort((a, b) => b.growth - a.growth);

      if (!matchedPairs.length) {
        setError('No matched students found. Make sure students have submitted both pre and post assessments and that both configs share the same class name.');
        setGenerating(false);
        return;
      }

      // 6. Class summary stats
      const n        = matchedPairs.length;
      const avgPre   = matchedPairs.reduce((s, r) => s + r.preScore,  0) / n;
      const avgPost  = matchedPairs.reduce((s, r) => s + r.postScore, 0) / n;
      const avgGrowth = avgPost - avgPre;
      const grewCount = matchedPairs.filter(r => r.growth > 0).length;

      // 7. Standards breakdown via question_responses
      const preRespIds  = matchedPairs.map(p => p.preResponseId);
      const postRespIds = matchedPairs.map(p => p.postResponseId);
      const [{ data: preQR }, { data: postQR }] = await Promise.all([
        supabase.from('question_responses').select('assessment_id, question_id, is_correct').in('assessment_id', preRespIds),
        supabase.from('question_responses').select('assessment_id, question_id, is_correct').in('assessment_id', postRespIds),
      ]);

      const stdStats = {};
      (preQR ?? []).forEach(qr => {
        if (!stdStats[qr.question_id]) stdStats[qr.question_id] = { preC: 0, preT: 0, postC: 0, postT: 0 };
        stdStats[qr.question_id].preT++;
        if (qr.is_correct) stdStats[qr.question_id].preC++;
      });
      (postQR ?? []).forEach(qr => {
        if (!stdStats[qr.question_id]) stdStats[qr.question_id] = { preC: 0, preT: 0, postC: 0, postT: 0 };
        stdStats[qr.question_id].postT++;
        if (qr.is_correct) stdStats[qr.question_id].postC++;
      });

      const standardRows = Object.entries(stdStats)
        .map(([qid, s]) => ({
          qid,
          label:   STANDARD_LABELS[qid] ?? qid,
          preAvg:  s.preT  > 0 ? (s.preC  / s.preT)  * 100 : null,
          postAvg: s.postT > 0 ? (s.postC / s.postT) * 100 : null,
          growth:  s.preT > 0 && s.postT > 0 ? ((s.postC / s.postT) - (s.preC / s.preT)) * 100 : null,
        }))
        .sort((a, b) => (b.growth ?? -999) - (a.growth ?? -999));

      setReportData({
        classSummary: { n, avgPre, avgPost, avgGrowth, grewCount, grewPct: (grewCount / n) * 100 },
        studentRows:  matchedPairs,
        standardRows,
        className:          selectedClass,
        preAssessmentName:  `Pre-Assessment — ${selectedClass}`,
        postAssessmentName: `Post-Assessment — ${selectedClass}`,
      });
    } catch (err) {
      setError('Error generating report: ' + err.message);
    } finally {
      setGenerating(false);
    }
  };

  const downloadCSV = () => {
    const header = ['Student Token', 'Student Name', 'Pre-Score (%)', 'Post-Score (%)', 'Points of Growth', 'Met Growth Goal'];
    const rows = reportData.studentRows.map(r => [
      r.preToken,
      `"${(studentNames[r.preToken] || '').replace(/"/g, '""')}"`,
      r.preScore.toFixed(1),
      r.postScore.toFixed(1),
      (r.growth >= 0 ? '+' : '') + r.growth.toFixed(1),
      r.growth > 0 ? 'Yes' : 'No',
    ]);
    const csv = [header, ...rows].map(row => row.join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = `TIA_Growth_Report_${schoolYear.replace(/\//g, '-')}.csv`;
    a.click();
  };

  const inputSt = {
    width: '100%', boxSizing: 'border-box', padding: '9px 12px',
    fontSize: '14px', border: '1px solid #d1d5db', borderRadius: '7px',
    outline: 'none', background: 'white', color: '#1e293b',
  };
  const labelSt = { display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' };
  const cardSt  = { background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', border: '1px solid #eef2f7', marginBottom: '20px' };
  const h3St    = { margin: '0 0 20px', fontSize: '15px', color: '#1e293b', fontWeight: 700 };

  // ── Setup form ──────────────────────────────────────────────────────────────
  if (!reportData) {
    return (
      <div style={{ maxWidth: '700px', margin: '36px auto', padding: '0 24px' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#5B8DB8', cursor: 'pointer', fontWeight: 600, fontSize: '14px', padding: '0 0 20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          ← Back to Dashboard
        </button>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: '0 0 4px', fontSize: '22px', color: '#1e293b', fontWeight: 800 }}>TIA Growth Report</h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
            Generate a printable pre-to-post growth report for Texas Teacher Incentive Allotment designation evidence.
          </p>
        </div>

        {/* Assessment selection */}
        <div style={cardSt}>
          <h3 style={h3St}>1. Select Class</h3>
          <div>
            <label style={labelSt}>Class Name</label>
            {loadingClasses ? <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Loading…</p> : classes.length === 0 ? (
              <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>No classes found. Generate passes for a class first.</p>
            ) : (
              <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)} style={{ ...inputSt, maxWidth: '360px' }}>
                <option value="">Select class…</option>
                {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
              </select>
            )}
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#94a3b8' }}>
              The report will compare all pre-assessment passes vs all post-assessment passes for this class.
            </p>
          </div>
        </div>

        {/* Header info */}
        <div style={cardSt}>
          <h3 style={h3St}>2. Report Header Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelSt}>Teacher Name</label>
              <input type="text" value={teacherName} onChange={e => setTeacherName(e.target.value)} placeholder="Your full name" style={inputSt} />
            </div>
            <div>
              <label style={labelSt}>Campus / School Name</label>
              <input type="text" value={campusName} onChange={e => setCampusName(e.target.value)} placeholder="e.g. Lincoln Elementary" style={inputSt} />
            </div>
            <div>
              <label style={labelSt}>Grade Level <span style={{ fontWeight: 400, color: '#94a3b8' }}>(auto-filled from class)</span></label>
              <div style={{ ...inputSt, background: '#F8FAFC', color: gradeLevel ? '#1e293b' : '#94a3b8', cursor: 'default', userSelect: 'none' }}>
                {gradeLevel || (selectedClass ? 'Loading…' : 'Select a class first')}
              </div>
            </div>
            <div>
              <label style={labelSt}>School Year <span style={{ fontWeight: 400, color: '#94a3b8' }}>(editable)</span></label>
              <input type="text" value={schoolYear} onChange={e => setSchoolYear(e.target.value)} placeholder="e.g. 2025-2026" style={inputSt} />
            </div>
          </div>
          <p style={{ margin: '16px 0 0', fontSize: '12px', color: '#94a3b8' }}>
            Subject: Technology Applications &nbsp;·&nbsp; These fields appear on the printed report header.
          </p>
        </div>

        {error && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', color: '#dc2626', fontSize: '13px' }}>
            {error}
          </div>
        )}

        <button
          onClick={generateReport}
          disabled={generating || !selectedClass}
          style={{
            width: '100%', padding: '13px', fontSize: '15px', fontWeight: 700,
            background: generating || !selectedClass ? '#94a3b8' : '#2E7F84',
            color: 'white', border: 'none', borderRadius: '8px',
            cursor: generating || !selectedClass ? 'not-allowed' : 'pointer',
          }}
        >
          {generating ? 'Generating Report…' : 'Generate Report →'}
        </button>
      </div>
    );
  }

  // ── Report view ─────────────────────────────────────────────────────────────
  const { classSummary, studentRows, standardRows, preAssessmentName, postAssessmentName } = reportData;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px' }}>

      {/* Toolbar — hidden on print */}
      <div className="tia-no-print" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '24px 0 20px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setReportData(null)}
          style={{ background: 'none', border: 'none', color: '#5B8DB8', cursor: 'pointer', fontWeight: 600, fontSize: '14px', padding: 0 }}
        >
          ← Edit Setup
        </button>
        <button
          onClick={onBack}
          style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontWeight: 600, fontSize: '14px', padding: 0 }}
        >
          Dashboard
        </button>
        <div style={{ flex: 1 }} />
        <button
          onClick={downloadCSV}
          style={{ padding: '9px 20px', fontSize: '13px', fontWeight: 700, background: '#f1f5f9', color: '#1e293b', border: '1px solid #e2e8f0', borderRadius: '7px', cursor: 'pointer' }}
        >
          Download CSV
        </button>
        <button
          onClick={() => window.print()}
          style={{ padding: '9px 20px', fontSize: '13px', fontWeight: 700, background: '#2E7F84', color: 'white', border: 'none', borderRadius: '7px', cursor: 'pointer' }}
        >
          Print / Save as PDF
        </button>
      </div>

      {/* ── Printable report region ─────────────────────────────────────── */}
      <div className={`tia-print-region${Object.values(studentNames).some(v => v && v.trim()) ? ' tia-has-names' : ''}`} style={{ background: 'white', borderRadius: '12px', padding: '44px 48px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', border: '1px solid #eef2f7' }}>

        {/* Report header */}
        <div style={{ borderBottom: '3px solid #2E7F84', paddingBottom: '22px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.5px', marginBottom: '4px' }}>
                TIA Student Growth Report
              </div>
              <div style={{ fontSize: '13px', color: '#64748b' }}>
                Technology Applications &nbsp;·&nbsp; Texas Teacher Incentive Allotment
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '13px', color: '#64748b' }}>
              <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '15px' }}>{schoolYear}</div>
              <div>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            {[
              { label: 'Teacher', value: teacherName || '—' },
              { label: 'Campus', value: campusName  || '—' },
              { label: 'Grade',  value: gradeLevel  || '—' },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: '#F4F7FA', borderRadius: '7px', padding: '10px 14px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '3px' }}>{label}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{value}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#64748b' }}>
            Pre-Assessment: <strong style={{ color: '#1e293b' }}>{preAssessmentName}</strong>
            &nbsp;&nbsp;→&nbsp;&nbsp;
            Post-Assessment: <strong style={{ color: '#1e293b' }}>{postAssessmentName}</strong>
          </div>
        </div>

        {/* Class summary */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ margin: '0 0 14px', fontSize: '13px', fontWeight: 700, color: '#2E7F84', textTransform: 'uppercase', letterSpacing: '0.7px' }}>Class Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {[
              { label: 'Students (Both)', value: classSummary.n, hi: false },
              { label: 'Avg Pre-Score',   value: fmtPct(classSummary.avgPre),  hi: false },
              { label: 'Avg Post-Score',  value: fmtPct(classSummary.avgPost), hi: false },
              { label: 'Avg Growth',      value: signedPct(classSummary.avgGrowth), hi: true },
              { label: 'Students Grew',   value: `${classSummary.grewCount} / ${classSummary.n}`, sub: `${fmt1(classSummary.grewPct)}%`, hi: true },
            ].map(({ label, value, sub, hi }) => (
              <div key={label} style={{
                background: hi ? '#E5F4F5' : '#F8FAFC',
                border: `1px solid ${hi ? '#A8D8DB' : '#e2e8f0'}`,
                borderRadius: '9px', padding: '14px 10px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', lineHeight: 1.3 }}>{label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: hi ? '#2E7F84' : '#1e293b', lineHeight: 1 }}>{value}</div>
                {sub && <div style={{ fontSize: '12px', color: '#2E7F84', fontWeight: 600, marginTop: '2px' }}>{sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Student-level data table */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: 700, color: '#2E7F84', textTransform: 'uppercase', letterSpacing: '0.7px' }}>
            Student-Level Data &nbsp;<span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '11px' }}>sorted by growth</span>
          </h2>
          <p className="tia-no-print" style={{
            margin: '0 0 12px',
            fontSize: '11.5px',
            color: '#94a3b8',
            lineHeight: '1.5',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '5px',
          }}>
            <span style={{ fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>ℹ</span>
            Student names are optional and for print purposes only. Only names you type will appear on the printed report — if left blank, the name column will not appear when printed. No student names are saved or retained by TechGrowth Check.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#F4F7FA' }}>
                {['Student Token', 'Student Name', 'Pre-Score', 'Post-Score', 'Points of Growth', 'Met Growth Goal'].map(h => (
                  <th key={h} className={h === 'Student Name' ? 'tia-name-col' : undefined} style={{
                    padding: '10px 14px',
                    textAlign: h === 'Student Token' || h === 'Student Name' ? 'left' : 'center',
                    fontWeight: 700, color: '#374151', fontSize: '11px',
                    textTransform: 'uppercase', letterSpacing: '0.5px',
                    borderBottom: '2px solid #e2e8f0',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentRows.map(r => {
                const grew = r.growth > 0;
                const flat = r.growth === 0;
                const bg   = grew ? '#f0fdf4' : r.growth < 0 ? '#fff7f7' : 'white';
                const bdr  = grew ? '#bbf7d0' : r.growth < 0 ? '#fecaca' : '#f1f5f9';
                return (
                  <tr key={r.preToken} style={{ background: bg, borderBottom: `1px solid ${bdr}` }}>
                    <td style={{ padding: '9px 14px', fontFamily: 'monospace', fontSize: '13px', fontWeight: 600, color: '#374151' }}>{r.preToken}</td>
                    <td className="tia-name-col" style={{ padding: '9px 14px' }}>
                      <input
                        type="text"
                        value={studentNames[r.preToken] || ''}
                        onChange={e => setStudentNames(prev => ({ ...prev, [r.preToken]: e.target.value }))}
                        placeholder="Type name…"
                        style={{
                          width: '100%', boxSizing: 'border-box',
                          border: 'none', borderBottom: '1px solid #e2e8f0',
                          background: 'transparent', fontSize: '13px',
                          color: '#374151', padding: '2px 0', outline: 'none',
                        }}
                      />
                    </td>
                    <td style={{ padding: '9px 14px', textAlign: 'center', color: '#64748b' }}>{fmtPct(r.preScore)}</td>
                    <td style={{ padding: '9px 14px', textAlign: 'center', color: '#64748b' }}>{fmtPct(r.postScore)}</td>
                    <td style={{ padding: '9px 14px', textAlign: 'center', fontWeight: 700, color: grew ? '#15803d' : r.growth < 0 ? '#dc2626' : '#64748b' }}>
                      {signedPct(r.growth)}
                    </td>
                    <td style={{ padding: '9px 14px', textAlign: 'center' }}>
                      <span style={{
                        display: 'inline-block', padding: '3px 10px', borderRadius: '999px',
                        fontSize: '11px', fontWeight: 700,
                        background: grew ? '#dcfce7' : flat ? '#f1f5f9' : '#fee2e2',
                        color:      grew ? '#15803d' : flat ? '#64748b' : '#dc2626',
                      }}>
                        {grew ? 'Yes' : 'No'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Standards breakdown */}
        {standardRows.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 700, color: '#2E7F84', textTransform: 'uppercase', letterSpacing: '0.7px' }}>
              Standards Breakdown &nbsp;<span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '11px' }}>sorted by growth</span>
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#F4F7FA' }}>
                  {['Standard', 'Description', 'Pre Avg', 'Post Avg', 'Growth'].map(h => (
                    <th key={h} style={{
                      padding: '10px 14px', textAlign: h === 'Standard' || h === 'Description' ? 'left' : 'center',
                      fontWeight: 700, color: '#374151', fontSize: '11px',
                      textTransform: 'uppercase', letterSpacing: '0.5px',
                      borderBottom: '2px solid #e2e8f0',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {standardRows.map((s, i) => {
                  const grew = s.growth !== null && s.growth > 0;
                  const declined = s.growth !== null && s.growth < 0;
                  return (
                    <tr key={s.qid} style={{ background: i % 2 === 0 ? 'white' : '#fafbfc', borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '9px 14px', fontFamily: 'monospace', fontSize: '12px', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>{s.qid}</td>
                      <td style={{ padding: '9px 14px', color: '#374151' }}>{s.label}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center', color: '#64748b' }}>{s.preAvg  !== null ? fmtPct(s.preAvg)  : '—'}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center', color: '#64748b' }}>{s.postAvg !== null ? fmtPct(s.postAvg) : '—'}</td>
                      <td style={{ padding: '9px 14px', textAlign: 'center', fontWeight: 700, color: grew ? '#15803d' : declined ? '#dc2626' : '#64748b' }}>
                        {s.growth !== null ? signedPct(s.growth) : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Print footer */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
          <span>TechGrowth Check &nbsp;·&nbsp; Technology Applications TIA Assessment Platform</span>
          <span>Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
}

function ResetPasswordScreen({ onDone }) {
  const [newPassword, setNewPassword]         = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading]                 = useState(false);
  const [error, setError]                     = useState('');
  const [success, setSuccess]                 = useState(false);

  const handleReset = async () => {
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  const cardStyle = {
    background: 'white', borderRadius: '16px', padding: '40px 36px',
    maxWidth: '460px', width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
  };

  const wrapStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(160deg, #2D3D4A 0%, #3D6B8A 50%, #5B8DB8 100%)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', padding: '24px',
  };

  if (success) {
    return (
      <div style={wrapStyle}>
        <div style={{ ...cardStyle, textAlign: 'center' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%', background: '#EAF6F4',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
          }}>
            <CheckCircle size={32} color="#2E7F84" strokeWidth={2} />
          </div>
          <h1 style={{ color: '#1E3A4A', margin: '0 0 12px', fontSize: '22px', fontWeight: 800 }}>
            Password Updated
          </h1>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6, margin: '0 0 28px' }}>
            Your password has been reset successfully. You can now sign in with your new password.
          </p>
          <button
            onClick={onDone}
            style={{
              width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
              border: 'none', borderRadius: '8px', backgroundColor: '#5B8DB8',
              color: 'white', cursor: 'pointer',
            }}
          >
            Go to Teacher Login
          </button>
        </div>
      </div>
    );
  }

  const ready = newPassword.length > 0 && confirmPassword.length > 0 && !loading;

  return (
    <div style={wrapStyle}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: 'white', lineHeight: 1, marginBottom: '10px' }}>
          TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
        </div>
      </div>
      <div style={cardStyle}>
        <h1 style={{ color: '#2D3D4A', margin: '0 0 4px', fontSize: '20px', fontWeight: 700 }}>Reset Password</h1>
        <p style={{ color: '#64748b', margin: '0 0 28px', fontSize: '14px' }}>Enter your new password below.</p>

        <label style={labelStyle}>New Password</label>
        <input
          type="password"
          placeholder="At least 6 characters"
          value={newPassword}
          onChange={(e) => { setNewPassword(e.target.value); setError(''); }}
          disabled={loading}
          style={inputStyle}
        />

        <label style={labelStyle}>Confirm New Password</label>
        <input
          type="password"
          placeholder="Repeat new password"
          value={confirmPassword}
          onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }}
          onKeyDown={(e) => e.key === 'Enter' && ready && handleReset()}
          disabled={loading}
          style={{ ...inputStyle, marginBottom: '10px' }}
        />

        {error && (
          <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '12px' }}>{error}</p>
        )}

        <button
          onClick={handleReset}
          disabled={!ready}
          style={{
            width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
            border: 'none', borderRadius: '8px',
            backgroundColor: ready ? '#5B8DB8' : '#e2e8f0',
            color: ready ? 'white' : '#94a3b8',
            cursor: ready ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.15s',
          }}
        >
          {loading ? 'Saving…' : 'Set New Password'}
        </button>
      </div>
    </div>
  );
}

function TeacherLoginScreen({ onBack, serverError, onClearServerError }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail]               = useState('');
  const [forgotLoading, setForgotLoading]           = useState(false);
  const [forgotSent, setForgotSent]                 = useState(false);
  const [forgotError, setForgotError]               = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError]         = useState('');
  const [signupLoading, setSignupLoading]     = useState(false);
  const [signupDone, setSignupDone]           = useState(false);

  const switchMode = (next) => {
    setMode(next);
    setEmail(''); setPassword(''); setConfirmPassword('');
    setError(''); setSignupError('');
    setShowForgotPassword(false); setForgotSent(false);
    onClearServerError?.();
  };

  const handleForgotPassword = async () => {
    if (!forgotEmail.trim()) { setForgotError('Please enter your email address.'); return; }
    setForgotLoading(true);
    setForgotError('');
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(forgotEmail.trim(), {
      redirectTo: 'https://tech-apps-assessment-zeta.vercel.app',
    });
    if (resetError) {
      setForgotError(resetError.message);
      setForgotLoading(false);
    } else {
      setForgotSent(true);
      setForgotLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    onClearServerError?.();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      setError(authError.message);
      setLoading(false);
    }
    // On success the App-level onAuthStateChange listener takes over
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setSignupError('Passwords do not match.'); return;
    }
    if (password.length < 6) {
      setSignupError('Password must be at least 6 characters.'); return;
    }
    setSignupLoading(true);
    setSignupError('');
    const { data, error: authError } = await supabase.auth.signUp({ email: email.trim(), password });
    if (authError) {
      setSignupError(authError.message);
      setSignupLoading(false);
      return;
    }
    fetch('/api/signup-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), signed_up_at: new Date().toISOString() }),
    }).catch(() => {});
    if (data.session) {
      // Email verification disabled — onAuthStateChange will log them in automatically
    } else {
      setSignupDone(true);
    }
    setSignupLoading(false);
  };

  const ready = email.length > 0 && password.length > 0 && !loading;
  const signupReady = email.length > 0 && password.length > 0 && confirmPassword.length > 0 && !signupLoading;
  const displayError = error || serverError;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #2D3D4A 0%, #3D6B8A 50%, #5B8DB8 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: 'white', lineHeight: 1, marginBottom: '10px' }}>
          TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
        </div>
        <p className="tc-tagline" style={{ maxWidth: '320px', margin: '0 auto' }}>
          The only TIA-ready assessment platform built for Technology Applications TEKS
        </p>
      </div>

      <div className="tc-login-card" style={{
        background: 'white', borderRadius: '16px', padding: '40px 36px',
        maxWidth: '460px', width: '100%',
        boxShadow: '0 24px 64px rgba(0,0,0,0.28)',
      }}>
        {mode === 'login' ? (
          <>
            <h1 style={{ color: '#2D3D4A', margin: '0 0 4px', fontSize: '20px', fontWeight: 700 }}>Teacher Login</h1>
            <p style={{ color: '#64748b', margin: '0 0 28px', fontSize: '14px' }}>
              TechGrowth Check · Educator Portal
            </p>

            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="teacher@district.edu"
              value={email}
              onChange={(e) => { setEmail(e.target.value); onClearServerError?.(); }}
              disabled={loading}
              style={inputStyle}
            />

            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && ready && handleLogin()}
              disabled={loading}
              style={{ ...inputStyle, marginBottom: '10px' }}
            />

            {displayError && (
              <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '12px' }}>{displayError}</p>
            )}

            <button
              onClick={handleLogin}
              disabled={!ready}
              style={{
                width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
                border: 'none', borderRadius: '8px', marginBottom: '10px',
                backgroundColor: ready ? '#5B8DB8' : '#e2e8f0',
                color: ready ? 'white' : '#94a3b8',
                cursor: ready ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.15s',
              }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>

            <button
              onClick={() => switchMode('signup')}
              style={{
                width: '100%', padding: '13px', fontSize: '15px', fontWeight: 600,
                border: '2px solid #5B8DB8', borderRadius: '8px', marginBottom: '14px',
                background: 'white', color: '#5B8DB8', cursor: 'pointer',
                transition: 'background-color 0.15s, color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#EAF1F8'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              Create an Account →
            </button>

            <button
              onClick={() => { setShowForgotPassword(true); setForgotSent(false); setForgotError(''); setForgotEmail(''); }}
              style={{
                background: 'none', border: 'none', padding: '0', marginBottom: '16px',
                color: '#94a3b8', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline',
                display: 'block', width: '100%', textAlign: 'center',
              }}
            >
              Forgot Password?
            </button>

            {showForgotPassword && (
              <div style={{
                borderTop: '1px solid #e2e8f0', paddingTop: '20px', marginBottom: '16px',
              }}>
                {forgotSent ? (
                  <p style={{ color: '#2E7F84', fontSize: '14px', textAlign: 'center', margin: 0 }}>
                    ✓ Check your email for a password reset link.
                  </p>
                ) : (
                  <>
                    <label style={labelStyle}>Your Email Address</label>
                    <input
                      type="email"
                      placeholder="teacher@district.edu"
                      value={forgotEmail}
                      onChange={(e) => { setForgotEmail(e.target.value); setForgotError(''); }}
                      onKeyDown={(e) => e.key === 'Enter' && !forgotLoading && handleForgotPassword()}
                      disabled={forgotLoading}
                      style={{ ...inputStyle, marginBottom: '10px' }}
                    />
                    {forgotError && (
                      <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '10px' }}>{forgotError}</p>
                    )}
                    <button
                      onClick={handleForgotPassword}
                      disabled={forgotLoading}
                      style={{
                        width: '100%', padding: '11px', fontSize: '14px', fontWeight: 600,
                        border: 'none', borderRadius: '8px',
                        backgroundColor: forgotLoading ? '#e2e8f0' : '#2E7F84',
                        color: forgotLoading ? '#94a3b8' : 'white',
                        cursor: forgotLoading ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {forgotLoading ? 'Sending…' : 'Send Reset Email'}
                    </button>
                  </>
                )}
              </div>
            )}

          </>
        ) : (
          <>
            <h1 style={{ color: '#2D3D4A', margin: '0 0 4px', fontSize: '20px', fontWeight: 700 }}>Create Teacher Account</h1>
            <p style={{ color: '#64748b', margin: '0 0 28px', fontSize: '14px' }}>
              TechGrowth Check · Educator Portal
            </p>

            {signupDone ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>✉️</div>
                <h2 style={{ color: '#2D3D4A', fontSize: '18px', fontWeight: 700, margin: '0 0 10px' }}>Check your email</h2>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px' }}>
                  We sent a verification link to <strong>{email}</strong>. Click the link to activate your account, then come back to sign in.
                </p>
                <button
                  onClick={() => switchMode('login')}
                  style={{
                    width: '100%', padding: '13px', fontSize: '15px', fontWeight: 600,
                    border: 'none', borderRadius: '8px',
                    backgroundColor: '#5B8DB8', color: 'white', cursor: 'pointer',
                  }}
                >
                  Go to Login
                </button>
              </div>
            ) : (
              <>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="teacher@district.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={signupLoading}
                  style={inputStyle}
                />

                <label style={labelStyle}>Password</label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={signupLoading}
                  style={inputStyle}
                />

                <label style={labelStyle}>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Repeat password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && signupReady && handleSignup()}
                  disabled={signupLoading}
                  style={{ ...inputStyle, marginBottom: '10px' }}
                />

                {signupError && (
                  <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '12px' }}>{signupError}</p>
                )}

                <button
                  onClick={handleSignup}
                  disabled={!signupReady}
                  style={{
                    width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
                    border: 'none', borderRadius: '8px', marginBottom: '16px',
                    backgroundColor: signupReady ? '#5B8DB8' : '#e2e8f0',
                    color: signupReady ? 'white' : '#94a3b8',
                    cursor: signupReady ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.15s',
                  }}
                >
                  {signupLoading ? 'Creating account…' : 'Create Account'}
                </button>

                <p style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>
                  Already have an account?{' '}
                  <button
                    onClick={() => switchMode('login')}
                    style={{ background: 'none', border: 'none', padding: 0, color: '#5B8DB8', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Log in
                  </button>
                </p>

              </>
            )}
          </>
        )}
      </div>

      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', marginTop: '24px' }}>
        © {new Date().getFullYear()} TechGrowth Check
      </p>
    </div>
  );
}

const labelStyle = {
  display: 'block', textAlign: 'left',
  marginBottom: '6px', fontWeight: 'bold',
  fontSize: '14px', color: '#555',
};

const inputStyle = {
  width: '100%', padding: '12px', fontSize: '16px',
  border: '2px solid #ccc', borderRadius: '5px',
  marginBottom: '16px', boxSizing: 'border-box',
};

// ── Space mission engagement features (grades 3–5 only) ──────────────────────

const _CONFETTI_COLORS = ['#FF3366','#FFD700','#7BC4A0','#5B8DB8','#FF6B35','#E94560','#22d3ee','#a78bfa'];
const _CONFETTI_PIECES = Array.from({ length: 44 }, (_, i) => {
  const h = ((i * 1664525 + 1013904223) >>> 0);
  return {
    left: h % 100, size: 6 + (h % 9), colorIdx: i % 8,
    isRound: (h % 3) !== 0,
    duration: 2 + (h % 3) * 0.8,
    delay: ((h >> 8) % 20) * 0.1,
  };
});

function SpaceMissionBar({ current, total, answered }) {
  const progress   = total > 0 ? Math.min(answered / total, 1) : 0;
  const maxStars   = Math.ceil(total / 10);
  // Stars based on current question position (1-indexed) so they fill
  // visibly as the student moves through the assessment, regardless of
  // whether they've selected an answer yet. All stars fill on the last question.
  const starsEarned = current >= total
    ? maxStars
    : Math.min(Math.floor(current / 10), maxStars);
  const rocketLeft  = 7 + progress * 77; // 7%–84% of bar width

  // Track which star was just earned so we can fire the pop animation
  const prevEarnedRef = useRef(starsEarned);
  const [justEarnedIdx, setJustEarnedIdx] = useState(null);
  useEffect(() => {
    if (starsEarned > prevEarnedRef.current) {
      const idx = starsEarned - 1;
      setJustEarnedIdx(idx);
      const t = setTimeout(() => setJustEarnedIdx(null), 700);
      prevEarnedRef.current = starsEarned;
      return () => clearTimeout(t);
    }
    prevEarnedRef.current = starsEarned;
  }, [starsEarned]);

  return (
    <div style={{ width: '90%', maxWidth: '700px', margin: '0 auto 8px', userSelect: 'none' }}>

      {/* Stars row */}
      {maxStars > 0 && (
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
          {Array.from({ length: maxStars }, (_, i) => {
            const earned = i < starsEarned;
            const popping = i === justEarnedIdx;
            return (
              <div key={i} style={{
                display: 'inline-flex',
                animation: popping ? 'starPop 0.65s ease-out' : 'none',
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" style={{
                  filter: earned
                    ? 'drop-shadow(0 0 6px #FFD700) drop-shadow(0 0 12px rgba(255,180,0,0.6))'
                    : 'none',
                  transition: 'filter 0.35s',
                }}>
                  <polygon
                    points="12,2 15.1,8.3 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 8.9,8.3"
                    fill={earned ? '#FFD700' : 'rgba(255,255,255,0.2)'}
                    stroke={earned ? '#FF9900' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={earned ? '1' : '0.6'}
                  />
                </svg>
              </div>
            );
          })}
        </div>
      )}

      {/* Track bar */}
      <div style={{ position: 'relative', height: '64px' }}>

        {/* Space background */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '14px',
          background: 'linear-gradient(90deg, #080c22 0%, #0d1640 50%, #080c22 100%)',
          border: '1px solid rgba(100,140,255,0.25)',
          boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.55), 0 2px 14px rgba(0,0,0,0.35)',
          overflow: 'hidden',
        }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            {[6,14,22,31,40,50,60,70,79,87,94].map((x, i) => (
              <circle key={i} cx={`${x}%`}
                cy={`${[35,62,20,72,45,18,55,38,68,28,52][i]}%`}
                r={i % 3 === 0 ? '1.5' : '1'} fill="white"
                opacity={0.2 + (i % 3) * 0.12}
              />
            ))}
          </svg>
          {/* Glowing progress line */}
          <div style={{
            position: 'absolute', left: '8%',
            width: `${Math.max(progress * 78, 0)}%`,
            height: '3px', top: '50%', transform: 'translateY(-50%)',
            background: 'linear-gradient(90deg, #4ade80, #22d3ee)',
            borderRadius: '2px',
            boxShadow: '0 0 8px #4ade80, 0 0 18px rgba(74,222,128,0.35)',
            transition: 'width 0.6s ease-out',
          }} />
          {/* Faint track */}
          <div style={{
            position: 'absolute', left: '8%', right: '11%',
            height: '2px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.07)', borderRadius: '1px',
          }} />
        </div>

        {/* Earth / origin (left) */}
        <div style={{ position: 'absolute', left: '2px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, pointerEvents: 'none' }}>
          <svg width="50" height="60" viewBox="0 0 50 60">
            <defs>
              <radialGradient id="earthOcean" cx="38%" cy="32%" r="65%">
                <stop offset="0%"   stopColor="#5BC8FF"/>
                <stop offset="100%" stopColor="#1547A0"/>
              </radialGradient>
              <clipPath id="earthClip">
                <circle cx="25" cy="30" r="20"/>
              </clipPath>
            </defs>
            {/* Ocean */}
            <circle cx="25" cy="30" r="20" fill="url(#earthOcean)"/>
            {/* Continents */}
            <g clipPath="url(#earthClip)" fill="#3EA055" opacity="0.9">
              <path d="M12 18 Q18 12 24 16 Q28 13 31 18 Q27 23 20 22 Q13 24 12 18Z"/>
              <path d="M16 28 Q20 25 22 30 Q20 38 16 40 Q12 38 13 32Z"/>
              <path d="M26 22 Q31 19 35 24 Q36 31 33 36 Q28 37 25 31 Q24 27 26 22Z"/>
              <path d="M32 15 Q36 13 38 17 Q36 21 32 19Z"/>
            </g>
            {/* Atmosphere ring */}
            <circle cx="25" cy="30" r="20" fill="none" stroke="#7BC4F5" strokeWidth="2.5" opacity="0.45"/>
            {/* Specular highlight */}
            <ellipse cx="18" cy="23" rx="5" ry="3.5" fill="white" opacity="0.14"/>
          </svg>
        </div>

        {/* Planet / destination (right) */}
        <div style={{ position: 'absolute', right: '2px', top: '50%', transform: 'translateY(-50%)', zIndex: 2, pointerEvents: 'none' }}>
          <svg width="52" height="60" viewBox="0 0 52 60">
            <defs>
              <radialGradient id="spbPg" cx="35%" cy="30%" r="70%">
                <stop offset="0%"   stopColor="#7BC4F5"/>
                <stop offset="100%" stopColor="#2E5BA8"/>
              </radialGradient>
            </defs>
            <ellipse cx="26" cy="32" rx="25" ry="7"  fill="none" stroke="#C8860A" strokeWidth="5" opacity="0.45"/>
            <circle  cx="26" cy="32" r="19" fill="url(#spbPg)"/>
            <ellipse cx="20" cy="27" rx="7"  ry="4"  fill="#7BC4A0" opacity="0.45"/>
            <ellipse cx="32" cy="37" rx="5"  ry="3"  fill="#7BC4A0" opacity="0.30"/>
            <ellipse cx="26" cy="32" rx="25" ry="7"  fill="none" stroke="#FFD700" strokeWidth="3" opacity="0.55" strokeDasharray="36 12"/>
          </svg>
        </div>

        {/* Moving rocket */}
        <div style={{
          position: 'absolute',
          left: `${rocketLeft}%`,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          transition: 'left 0.65s cubic-bezier(0.34, 1.2, 0.64, 1)',
          pointerEvents: 'none',
        }}>
          <svg width="66" height="40" viewBox="0 0 66 40">
            {/* Flame — animated via .spb-flame CSS class */}
            <g className="spb-flame">
              <path d="M 18,15 C 10,15 4,17 1,20 C 4,23 10,25 18,25 Z" fill="#FF4500"/>
              <path d="M 18,16.5 C 11,16.5 5.5,18 2.5,20 C 5.5,22 11,23.5 18,23.5 Z" fill="#FF8C00"/>
              <path d="M 18,18 C 13,18 8,19 5,20 C 8,21 13,22 18,22 Z" fill="#FFD700"/>
              <ellipse cx="12" cy="20" rx="4" ry="2" fill="white" opacity="0.7"/>
            </g>
            {/* Swept-back fins (drawn before body so edge overlaps cleanly) */}
            <path d="M 38,12 L 22,2  L 24,12 Z" fill="#B80026"/>
            <path d="M 38,28 L 22,38 L 24,28 Z" fill="#B80026"/>
            {/* Engine nozzle */}
            <rect x="17" y="16" width="7" height="8" rx="1.5" fill="#1E1E3A"/>
            {/* Main body */}
            <path d="M 24,12 L 52,12 L 52,28 L 24,28 Z" fill="#FF1E3C"/>
            {/* Top-third highlight stripe */}
            <path d="M 24,12 L 52,12 L 52,16 L 24,16 Z" fill="#FF5577" opacity="0.8"/>
            {/* Lower accent stripe */}
            <rect x="24" y="25" width="28" height="3" fill="#CC0030"/>
            {/* Riveted panel line */}
            <line x1="25" y1="20" x2="51" y2="20" stroke="#AA0020" strokeWidth="1" opacity="0.45"/>
            {/* Pointed nose cone (yellow) */}
            <path d="M 52,12 L 65,20 L 52,28 Z" fill="#FFD700"/>
            {/* Nose sheen */}
            <path d="M 52,12 L 65,20 L 58,15 Z" fill="#FFED50" opacity="0.85"/>
            {/* Porthole window */}
            <circle cx="37" cy="20" r="5"   fill="#7FDBFF" stroke="white" strokeWidth="1.5"/>
            <circle cx="37" cy="20" r="3"   fill="#1BBCD4"/>
            <circle cx="35.2" cy="18.2" r="1.4" fill="white" opacity="0.6"/>
          </svg>
        </div>
      </div>

      {/* Question label */}
      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2px' }}>
        Question {current} of {total}
      </div>
    </div>
  );
}

function SpaceCelebrationScreen({ answeredCount, totalQuestions, elapsedSeconds, onDone }) {
  const timeStr = (() => {
    if (!elapsedSeconds || elapsedSeconds < 1) return null;
    const m = Math.floor(elapsedSeconds / 60);
    const s = elapsedSeconds % 60;
    return m > 0 ? `${m}m ${s}s` : `${elapsedSeconds}s`;
  })();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 30%, #131b5e 0%, #080c22 65%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '32px 24px',
    }}>

      {/* Confetti */}
      {_CONFETTI_PIECES.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${p.left}%`, top: '-12px',
          width: `${p.size}px`, height: `${p.size}px`,
          background: _CONFETTI_COLORS[p.colorIdx],
          borderRadius: p.isRound ? '50%' : '2px',
          opacity: 0,
          animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
          zIndex: 5, pointerEvents: 'none',
        }} />
      ))}

      {/* Background stars */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice">
        {[[30,50],[80,120],[150,30],[220,80],[310,45],[370,130],[50,200],[130,250],
          [200,180],[290,220],[360,170],[90,320],[180,380],[260,310],[340,360],
          [40,440],[160,480],[230,430],[320,490],[70,560],[190,530],[280,580],[380,510]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={i%5===0?2:1.2} fill="white" opacity={0.3+(i%4)*0.1}
            style={{ animation: `starTwinkle ${1.5+i%3}s ${i*0.15}s ease-in-out infinite` }}/>
        ))}
      </svg>

      {/* Rocket launching */}
      <div style={{ position: 'relative', zIndex: 10, marginBottom: '12px',
        animation: 'rocketLaunch 2.8s 0.3s cubic-bezier(0.4, 0, 0.15, 1) forwards' }}>
        {/* Flame (centred below rocket body via flex wrapper) */}
        <div style={{ position: 'absolute', bottom: '-22px', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
          <div style={{ animation: 'flameFlicker 0.12s ease-in-out infinite' }}>
            <svg width="56" height="36" viewBox="0 0 56 36">
              <ellipse cx="28" cy="14" rx="20" ry="14" fill="#FF6B35" opacity="0.95"/>
              <ellipse cx="28" cy="12" rx="13" ry="10" fill="#FFD700" opacity="0.95"/>
              <ellipse cx="28" cy="10" rx="7"  ry="6"  fill="white"   opacity="0.55"/>
            </svg>
          </div>
        </div>
        {/* Rocket body pointing up */}
        <svg width="86" height="126" viewBox="0 0 86 126">
          <path d="M22 95 L4  122 L30 108 Z" fill="#C62A47"/>
          <path d="M64 95 L82 122 L56 108 Z" fill="#C62A47"/>
          <ellipse cx="43" cy="72" rx="21" ry="36" fill="#E94560"/>
          <path d="M43 22 L22 58 L64 58 Z"   fill="#C62A47"/>
          <ellipse cx="43" cy="20" rx="10" ry="12" fill="#FF6B9E"/>
          <circle  cx="43" cy="70" r="13" fill="#7FDBFF" stroke="white" strokeWidth="3"/>
          <circle  cx="43" cy="70" r="9"  fill="#0FA3B1"/>
          <circle  cx="38" cy="65" r="3.5" fill="white" opacity="0.45"/>
        </svg>
      </div>

      {/* Mission Complete */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', animation: 'fadeInUp 0.7s 0.1s ease-out both' }}>
        <div style={{
          fontSize: '40px', fontWeight: 900, color: '#FFD700',
          animation: 'celebrationGlow 2.2s ease-in-out infinite',
          letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: '14px',
        }}>
          Mission Complete! 🚀
        </div>
        <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, maxWidth: '400px', marginBottom: '28px' }}>
          Great work, astronaut!<br/>
          Your answers have been transmitted to mission control.
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position: 'relative', zIndex: 10,
        animation: 'fadeInUp 0.7s 0.25s ease-out both',
        background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)',
        borderRadius: '16px', padding: '20px 28px',
        display: 'flex', gap: '28px', alignItems: 'center',
        marginBottom: '32px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '30px', fontWeight: 800, color: '#7BC4A0' }}>{answeredCount}</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px', lineHeight: 1.3 }}>Questions<br/>Answered</div>
        </div>
        <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '30px', fontWeight: 800, color: '#7BC4A0' }}>{totalQuestions}</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px', lineHeight: 1.3 }}>Total<br/>Questions</div>
        </div>
        {timeStr && <>
          <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.12)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '30px', fontWeight: 800, color: '#7BC4A0' }}>{timeStr}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '2px', lineHeight: 1.3 }}>Time<br/>Taken</div>
          </div>
        </>}
      </div>

      {/* Done button */}
      <div style={{ position: 'relative', zIndex: 10, animation: 'fadeInUp 0.7s 0.4s ease-out both' }}>
        <button onClick={onDone} style={{
          padding: '16px 52px', fontSize: '18px', fontWeight: 800, minHeight: '44px',
          background: 'linear-gradient(135deg, #7BC4A0 0%, #5B8DB8 100%)',
          color: 'white', border: 'none', borderRadius: '12px',
          cursor: 'pointer', letterSpacing: '0.5px',
          boxShadow: '0 4px 24px rgba(91,141,184,0.5)',
        }}>
          Done ✓
        </button>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

const inspirationalQuotes = [
  { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { quote: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Imagination is more important than knowledge.", author: "Albert Einstein" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "Excellence is not a skill, it's an attitude.", author: "Ralph Marston" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Work hard in silence, let success be your noise.", author: "Unknown" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { quote: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Exploration is not a choice, really; it's an imperative.", author: "Buzz Aldrin" },
  { quote: "Reach for the stars.", author: "Sally Ride" },
  { quote: "Never be limited by other people's limited imaginations.", author: "Mae Jemison" },
  { quote: "Decide in your heart what really excites and challenges you and start moving your life in that direction.", author: "Chris Hadfield" },
  { quote: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
  { quote: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin" },
  { quote: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
  { quote: "Diligence is the mother of good luck.", author: "Benjamin Franklin" },
  { quote: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.", author: "Benjamin Franklin" },
];

function QRScannerView({ onDetected, onCancel }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [camError, setCamError] = useState('');
  const streamRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let active = true;

    const stopAll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    };

    const tick = () => {
      if (!active) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (video && canvas && video.readyState >= video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const result = jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' });
        if (result) {
          let passcode = result.data.trim();
          try {
            const url = new URL(result.data);
            passcode = url.searchParams.get('code') || url.searchParams.get('token') || passcode;
          } catch {}
          passcode = passcode.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
          if (passcode.length === 8) {
            active = false;
            stopAll();
            onDetected(passcode);
            return;
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 } },
    }).then(stream => {
      if (!active) { stream.getTracks().forEach(t => t.stop()); return; }
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().then(() => { rafRef.current = requestAnimationFrame(tick); });
      }
    }).catch(() => {
      if (active) setCamError('Camera access denied. Use "Type Passcode" instead.');
    });

    return () => { active = false; stopAll(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cornerStyle = (pos) => ({ position: 'absolute', width: 36, height: 36, ...pos });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '420px' }}>
      {camError ? (
        <div className="tc-login-card" style={{
          background: 'white', borderRadius: '16px', padding: '36px',
          textAlign: 'center', width: '100%', boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          boxSizing: 'border-box',
        }}>
          <div style={{ fontSize: '44px', marginBottom: '16px' }}>📷</div>
          <p style={{ color: '#ef4444', fontSize: '14px', lineHeight: 1.6, margin: '0 0 24px' }}>{camError}</p>
          <button onClick={onCancel} style={{
            width: '100%', padding: '13px', fontSize: '15px', fontWeight: 600,
            border: 'none', borderRadius: '8px', background: '#5B8DB8', color: 'white', cursor: 'pointer',
          }}>
            ← Type Passcode Instead
          </button>
        </div>
      ) : (
        <div style={{
          position: 'relative', width: '100%', borderRadius: '16px',
          overflow: 'hidden', background: '#000', boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        }}>
          <video ref={videoRef} style={{ width: '100%', display: 'block', maxHeight: '360px', objectFit: 'cover' }} playsInline muted />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 200, height: 200 }}>
              <div style={cornerStyle({ top: 0, left: 0, borderTop: '3px solid white', borderLeft: '3px solid white', borderRadius: '6px 0 0 0' })} />
              <div style={cornerStyle({ top: 0, right: 0, borderTop: '3px solid white', borderRight: '3px solid white', borderRadius: '0 6px 0 0' })} />
              <div style={cornerStyle({ bottom: 0, left: 0, borderBottom: '3px solid white', borderLeft: '3px solid white', borderRadius: '0 0 0 6px' })} />
              <div style={cornerStyle({ bottom: 0, right: 0, borderBottom: '3px solid white', borderRight: '3px solid white', borderRadius: '0 0 6px 0' })} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '13px', marginTop: '20px', letterSpacing: '0.02em' }}>
              Point your camera at the QR code
            </p>
          </div>
        </div>
      )}
      <button onClick={onCancel} style={{
        marginTop: '16px', background: 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.35)', color: 'white',
        padding: '10px 28px', borderRadius: '8px', cursor: 'pointer',
        fontSize: '14px', fontWeight: 500,
      }}>
        Cancel
      </button>
    </div>
  );
}

function App() {
  // ── Student state (unchanged) ────────────────────────────────────────────
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [loginMode, setLoginMode] = useState(() => {
    const p = new URLSearchParams(window.location.search);
    return (p.has('code') || p.has('token')) ? 'type' : 'select';
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [customQuestionIds, setCustomQuestionIds] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveExitScreen, setShowSaveExitScreen] = useState(false);
  const [speakingId, setSpeakingId] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const audioRef = useRef(null);
  const audioCacheRef = useRef({});
  const startTimeRef = useRef(null);

  // Pick a fresh quote each time the completion or save-exit screen becomes active
  const sessionQuote = useMemo(
    () => inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isComplete, showSaveExitScreen]
  );

  // ── ElevenLabs env check (remove after confirming) ───────────────────────
  useEffect(() => {
    console.log('[ENV] REACT_APP_ELEVENLABS_API_KEY =', process.env.REACT_APP_ELEVENLABS_API_KEY);
    console.log('[ENV] REACT_APP_ELEVENLABS_VOICE_ID =', process.env.REACT_APP_ELEVENLABS_VOICE_ID);
  }, []);

  // ── Password reset detection ─────────────────────────────────────────────
  const [showPasswordReset, setShowPasswordReset] = useState(() => {
    const hash = window.location.hash;
    return hash.includes('type=recovery');
  });

  // ── Login selector ───────────────────────────────────────────────────────
  const [showLoginSelector, setShowLoginSelector] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);

  // ── Beta signup page ─────────────────────────────────────────────────────
  const [showBetaSignup, setShowBetaSignup] = useState(() => window.location.pathname === '/beta');

  useEffect(() => {
    const handlePop = (e) => {
      setShowBetaSignup(window.location.pathname === '/beta');
      const screen = e.state?.tcScreen;
      if (screen === 'teacher-login') {
        setShowLoginSelector(false);
        setShowStudentLogin(false);
        setShowTeacherLogin(true);
      } else if (screen === 'student-login') {
        setShowTeacherLogin(false);
        setShowLoginSelector(false);
        setShowStudentLogin(true);
      } else if (screen === 'login-selector') {
        setShowTeacherLogin(false);
        setShowStudentLogin(false);
        setShowLoginSelector(true);
      } else {
        setShowTeacherLogin(false);
        setShowStudentLogin(false);
        setShowLoginSelector(false);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Teacher auth state ───────────────────────────────────────────────────
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [teacherLoading, setTeacherLoading] = useState(true);
  const [teacherLoginError, setTeacherLoginError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenParam = params.get('code') || params.get('token');
    if (tokenParam) setTokenInput(tokenParam.toUpperCase().slice(0, 8));
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadTeacherProfile(session.user.id, false);
      } else {
        setTeacherLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        setShowPasswordReset(true);
        return;
      }
      if (session?.user) {
        loadTeacherProfile(session.user.id, event === 'SIGNED_IN');
      } else {
        setTeacherProfile(null);
        setTeacherLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Block copy/select keyboard shortcuts during active student assessment
  useEffect(() => {
    if (!isLoggedIn) return;
    return addCopyKeyBlock();
  }, [isLoggedIn]);

  const loadTeacherProfile = async (userId, isNewLogin) => {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('id', userId)
      .single();

    if (!error) {
      setTeacherProfile(data);
      setTeacherLoading(false);
      return;
    }

    // PGRST116 = no rows returned — first-time user, auto-create an admin record
    if (error.code === 'PGRST116') {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: newProfile, error: insertError } = await supabase
        .from('teachers')
        .insert([{
          id: userId,
          email: user.email,
          full_name: user.user_metadata?.full_name ?? user.email,
          role: 'admin',
        }])
        .select()
        .single();

      if (insertError) {
        console.error('Failed to create teacher profile:', insertError.message);
        await supabase.auth.signOut();
        if (isNewLogin) {
          setTeacherLoginError('Signed in, but could not create your account record. Check that the teachers table exists in Supabase.');
        }
      } else {
        setTeacherProfile(newProfile);
      }
    } else {
      // Any other error (e.g. table missing entirely)
      console.error('Teacher profile lookup failed:', error.message);
      await supabase.auth.signOut();
      if (isNewLogin) {
        setTeacherLoginError('Could not load your account. Check that the teachers table exists in Supabase.');
      }
    }

    setTeacherLoading(false);
  };

  const handleTeacherLogout = () => supabase.auth.signOut();

  // ── Student handlers (unchanged) ─────────────────────────────────────────
  const allGradeQuestions = selectedGrade !== null ? getQuestionsForGrade(selectedGrade) : [];
  const questions = customQuestionIds
    ? customQuestionIds.map(id => allGradeQuestions.find(q => q.id === id)).filter(Boolean)
    : allGradeQuestions;
  const hasQuestions = questions.length > 0;
  const currentQ = hasQuestions ? questions[currentQuestion] : null;
  const selectedAnswer = answers[currentQuestion];
  const isElementary = selectedGrade !== null && selectedGrade >= 3 && selectedGrade <= 5;
  const isEarlyGrade = selectedGrade !== null && selectedGrade <= 2;

  const handleLogin = async (codeOverride = null) => {
    const code = String(codeOverride ?? tokenInput).toUpperCase().trim();
    if (code.length !== 8) {
      setError('Token must be exactly 8 characters');
      return;
    }
    if (codeOverride) { setTokenInput(codeOverride); setLoginMode('type'); }
    setIsLoading(true);
    setError('');
    try {
      const { data, error: dbError } = await supabase
        .from('tokens')
        .select('grade_level, expires_at')
        .eq('token', code)
        .maybeSingle();
      if (dbError) {
        console.error('Token lookup error:', dbError);
        setError('Unable to connect. Please try again.');
        return;
      }
      if (!data) {
        setError('Token not found. Please check your code and try again.');
        return;
      }
      if (data.expires_at && new Date(data.expires_at) < new Date()) {
        setError('This assessment pass has expired. Please ask your teacher for a new pass.');
        return;
      }
      if (data.grade_level === null || data.grade_level === undefined) {
        setError('This pass is missing a grade level. Please ask your teacher for a new pass.');
        return;
      }
      const [cfgResult, progressResult] = await Promise.all([
        supabase.from('token_configs').select('question_ids, assessment_config_id').eq('token', code).maybeSingle(),
        supabase.from('student_progress').select('answers, current_question, submitted').eq('token', code).maybeSingle(),
      ]);

      // ── Access window check ────────────────────────────────────────────────
      const assessmentConfigId = cfgResult.data?.assessment_config_id ?? null;
      if (assessmentConfigId) {
        const { data: windows } = await supabase
          .from('access_windows')
          .select('days_of_week, start_time, end_time, repeat_until')
          .eq('assessment_id', assessmentConfigId);

        if (windows && windows.length > 0) {
          const now = new Date();
          const todayDow  = now.getDay();
          const todayDate = now.toISOString().slice(0, 10);
          const nowTime   = now.toTimeString().slice(0, 5);

          const isOpen = windows.some(w =>
            w.days_of_week.includes(todayDow) &&
            w.repeat_until >= todayDate &&
            nowTime >= w.start_time.slice(0, 5) &&
            nowTime <  w.end_time.slice(0, 5)
          );

          if (!isOpen) {
            setError('This assessment is not currently available. Please check with your teacher for the scheduled time.');
            return;
          }
        }
      }
      // ── End access window check ────────────────────────────────────────────

      setToken(code);
      setSelectedGrade(data.grade_level);
      console.log('[Login] grade_level =', data.grade_level, '| isElementary:', data.grade_level >= 3 && data.grade_level <= 5);
      setCustomQuestionIds(cfgResult.data?.question_ids ?? null);

      if (progressResult.error) {
        console.error('Progress load error:', progressResult.error.message, progressResult.error);
      }

      if (progressResult.data?.submitted) {
        setIsLocked(true);
        setIsLoggedIn(true);
        return;
      }

      if (progressResult.data?.answers) {
        const loadedAnswers = progressResult.data.answers;
        const loadedQuestion = progressResult.data.current_question ?? 0;
        console.log('Restoring progress:', Object.keys(loadedAnswers).length, 'answers, question', loadedQuestion);
        setAnswers(loadedAnswers);
        setCurrentQuestion(loadedQuestion);
      }

      startTimeRef.current = Date.now();
      setIsLoggedIn(true);
    } catch (err) {
      console.error('Login error:', err);
      setError('Unable to connect. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const saveProgress = async (answersToSave, questionIndex) => {
    const { error: saveError } = await supabase
      .from('student_progress')
      .upsert(
        {
          token,
          answers: answersToSave,
          current_question: questionIndex,
          submitted: false,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'token' }
      );
    if (saveError) console.error('Progress save error:', saveError.message, saveError);
    return saveError;
  };

  const handleAnswerClick = async (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);
    setIsSaving(true);
    await saveProgress(newAnswers, currentQuestion);
    setIsSaving(false);
  };

  const handleReturnToLogin = () => {
    stopSpeech();
    setToken('');
    setTokenInput('');
    setIsLoggedIn(false);
    setSelectedGrade(null);
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
    setCustomQuestionIds(null);
    setIsLocked(false);
    setShowSubmitDialog(false);
    setShowSaveExitScreen(false);
    setError('');
  };

  const handleSaveAndExit = async () => {
    setIsSaving(true);
    await saveProgress(answers, currentQuestion);
    setIsSaving(false);
    setShowSaveExitScreen(true);
  };

  const stopSpeech = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setSpeakingId(null);
    setLoadingId(null);
  };

  const speak = async (text, id) => {
    if (speakingId === id || loadingId === id) { stopSpeech(); return; }
    stopSpeech();
    setLoadingId(id);

    try {
      let objectURL = audioCacheRef.current[text];

      if (!objectURL) {
        const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;
        const voiceId = process.env.REACT_APP_ELEVENLABS_VOICE_ID;

        console.log('[TTS] API key value:', apiKey);
        console.log('[TTS] Voice ID value:', voiceId);
        console.log('[TTS] Making API call for text:', text.slice(0, 60));

        const res = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
          {
            method: 'POST',
            headers: {
              'xi-api-key': apiKey,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text,
              model_id: 'eleven_turbo_v2',
              voice_settings: { stability: 0.5, similarity_boost: 0.75 },
            }),
          }
        );

        console.log('[TTS] Response status:', res.status, res.statusText);

        if (!res.ok) {
          const errBody = await res.text();
          console.error('[TTS] API error body:', errBody);
          setLoadingId(null);
          return;
        }

        const blob = await res.blob();
        console.log('[TTS] Blob received — size:', blob.size, 'type:', blob.type);
        objectURL = URL.createObjectURL(blob);
        audioCacheRef.current[text] = objectURL;
        console.log('[TTS] Object URL created:', objectURL);
      } else {
        console.log('[TTS] Using cached audio for:', text.slice(0, 60));
      }

      const audio = new Audio(objectURL);
      audioRef.current = audio;
      audio.onended = () => { audioRef.current = null; setSpeakingId(null); };
      audio.onerror = (e) => {
        console.error('[TTS] Audio playback error:', e);
        audioRef.current = null;
        setSpeakingId(null);
      };
      setLoadingId(null);
      setSpeakingId(id);
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log('[TTS] Playback started successfully'))
          .catch(err => console.error('[TTS] play() rejected:', err));
      }
    } catch (err) {
      console.error('[TTS] Caught error:', err);
      setLoadingId(null);
    }
  };

  const handleNext = () => {
    stopSpeech();
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    stopSpeech();
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) correct++;
    });
    return correct;
  };

  const handleSubmit = async () => {
    stopSpeech();
    setShowSubmitDialog(false);
    setIsComplete(true);
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    try {
      const { data: assessmentData, error: assessmentError } = await supabase
        .from('assessment_responses')
        .insert([{
          student_token: token,
          grade_level: selectedGrade,
          total_questions: questions.length,
          correct_answers: score,
          percentage,
        }])
        .select();
      if (assessmentError) {
        console.error('Error saving assessment:', assessmentError);
        return;
      }
      const assessmentId = assessmentData[0].id;
      const questionData = questions.map((q, index) => ({
        assessment_id: assessmentId,
        question_id: q.id,
        selected_answer: answers[index] || null,
        correct_answer: q.correctAnswer,
        is_correct: answers[index] === q.correctAnswer,
      }));
      const { error: questionsError } = await supabase
        .from('question_responses')
        .insert(questionData);
      if (questionsError) console.error('Error saving questions:', questionsError);

      await supabase
        .from('student_progress')
        .upsert(
          {
            token,
            answers,
            current_question: currentQuestion,
            submitted: true,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'token' }
        );
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = hasQuestions && answeredCount === questions.length;

  const getButtonStyle = (answer) => ({
    display: 'block', margin: '10px 0', padding: '15px 20px', minHeight: '44px',
    width: '100%', fontSize: '16px', cursor: 'pointer',
    border: selectedAnswer === answer ? '2px solid #5B8DB8' : '2px solid #ccc',
    borderRadius: '5px',
    backgroundColor: selectedAnswer === answer ? '#EAF1F8' : 'white',
    transition: 'all 0.3s', textAlign: 'left',
  });

  // ── Routing ──────────────────────────────────────────────────────────────

  if (teacherLoading) {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>Loading…</div>
        </header>
      </div>
    );
  }

  if (showPasswordReset) {
    return (
      <ResetPasswordScreen
        onDone={() => {
          setShowPasswordReset(false);
          window.location.hash = '';
          setShowTeacherLogin(true);
        }}
      />
    );
  }

  if (teacherProfile) {
    return <Dashboard profile={teacherProfile} onLogout={handleTeacherLogout} />;
  }

  if (showTeacherLogin) {
    return (
      <TeacherLoginScreen
        onBack={() => { setShowTeacherLogin(false); setTeacherLoginError(''); setShowLoginSelector(true); }}
        serverError={teacherLoginError}
        onClearServerError={() => setTeacherLoginError('')}
      />
    );
  }

  if (showLoginSelector) {
    return (
      <LoginSelectorScreen
        onStudent={() => { setShowLoginSelector(false); window.history.pushState({ tcScreen: 'student-login' }, '', '/'); setShowStudentLogin(true); }}
        onTeacher={() => { setShowLoginSelector(false); window.history.pushState({ tcScreen: 'teacher-login' }, '', '/'); setShowTeacherLogin(true); }}
      />
    );
  }

  // ── Beta signup page (anyone can access) ────────────────────────────────
  if (showBetaSignup) {
    return (
      <BetaSignupPage
        onBack={() => {
          setShowBetaSignup(false);
          window.history.replaceState({}, '', '/');
        }}
      />
    );
  }

  // ── Landing page for non-student visitors ───────────────────────────────
  if (!isLoggedIn && !showStudentLogin) {
    const p = new URLSearchParams(window.location.search);
    if (!p.has('code') && !p.has('token') && !window.location.pathname.startsWith('/student')) {
      return (
        <LandingPage
          onGetStarted={() => { window.history.pushState({ tcScreen: 'login-selector' }, '', '/'); setShowLoginSelector(true); }}
          onJoinBeta={() => {
            window.history.pushState({}, '', '/beta');
            setShowBetaSignup(true);
          }}
        />
      );
    }
  }

  // ── Student screens ──────────────────────────────────────────────────────

  if (!isLoggedIn) {
    const scanCardBase = {
      flex: 1, padding: '28px 12px 24px', background: 'white', border: 'none',
      borderRadius: '16px', cursor: 'pointer', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
      transition: 'transform 0.15s, box-shadow 0.15s', textAlign: 'center',
    };
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #2D3D4A 0%, #3D6B8A 50%, #5B8DB8 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: loginMode === 'select' ? '44px' : '32px' }}>
          <div style={{ fontSize: '52px', fontWeight: 800, letterSpacing: '-2px', color: 'white', lineHeight: 1, marginBottom: '12px' }}>
            TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
          </div>
          {loginMode === 'select' && (
            <p className="tc-tagline" style={{ maxWidth: '360px', margin: '0 auto' }}>
              How would you like to log in?
            </p>
          )}
        </div>

        {loginMode === 'select' && (
          <div style={{ display: 'flex', gap: '14px', width: '100%', maxWidth: '420px' }}>
            <button
              style={scanCardBase}
              onClick={() => setLoginMode('scan')}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22)'; }}
            >
              <div style={{ width: 72, height: 72, borderRadius: '16px', background: '#EAF1F8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3D6B8A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                  <rect x="7" y="7" width="3" height="3" rx="0.5"/><rect x="14" y="7" width="3" height="3" rx="0.5"/>
                  <rect x="7" y="14" width="3" height="3" rx="0.5"/><rect x="14" y="14" width="3" height="3" rx="0.5"/>
                </svg>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>Scan Badge</div>
              <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>Use your camera to scan your QR code</div>
            </button>

            <button
              style={scanCardBase}
              onClick={() => setLoginMode('type')}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22)'; }}
            >
              <div style={{ width: 72, height: 72, borderRadius: '16px', background: '#D4EEE3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3D7A5E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2"/>
                  <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>
                </svg>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>Type Passcode</div>
              <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>Enter your 8-character student code</div>
            </button>
          </div>
        )}

        {loginMode === 'scan' && (
          <QRScannerView
            onDetected={(code) => handleLogin(code)}
            onCancel={() => setLoginMode('select')}
          />
        )}

        {loginMode === 'type' && (
          <div className="tc-login-card" style={{
            background: 'white', borderRadius: '16px', padding: '40px 36px',
            maxWidth: '420px', width: '100%',
            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}>
            <h2 style={{ color: '#2D3D4A', margin: '0 0 4px', fontSize: '20px', fontWeight: 700 }}>
              Student Login
            </h2>
            <p style={{ margin: '0 0 28px', color: '#64748b', fontSize: '14px' }}>
              Enter your Student Pass
            </p>

            <input
              type="text"
              inputMode="text"
              autoCapitalize="characters"
              autoCorrect="off"
              autoComplete="off"
              spellCheck="false"
              placeholder="Enter Student Pass"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === 'Enter' && tokenInput.length === 8 && !isLoading && handleLogin()}
              maxLength={8}
              disabled={isLoading}
              style={{
                width: '100%', padding: '16px', fontSize: '26px',
                textAlign: 'center',
                border: error ? '2px solid #ef4444' : '2px solid #e2e8f0',
                borderRadius: '10px', marginBottom: '10px',
                letterSpacing: '5px', fontFamily: 'monospace',
                boxSizing: 'border-box', outline: 'none',
              }}
            />
            {error && (
              <p style={{ color: '#ef4444', margin: '0 0 12px', fontSize: '14px' }}>{error}</p>
            )}
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 20px', textAlign: 'center' }}>
              Your teacher will provide your Student Pass
            </p>

            <button
              onClick={() => handleLogin()}
              disabled={tokenInput.length !== 8 || isLoading}
              style={{
                width: '100%', padding: '15px', fontSize: '17px', fontWeight: 700,
                cursor: tokenInput.length === 8 && !isLoading ? 'pointer' : 'not-allowed',
                border: 'none', borderRadius: '10px',
                backgroundColor: tokenInput.length === 8 && !isLoading ? '#5B8DB8' : '#e2e8f0',
                color: tokenInput.length === 8 && !isLoading ? 'white' : '#94a3b8',
                transition: 'background-color 0.15s',
              }}
            >
              {isLoading ? 'Loading…' : 'Begin Assessment →'}
            </button>
          </div>
        )}

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', marginTop: '28px' }}>
          © {new Date().getFullYear()} TechGrowth Check
        </p>
      </div>
    );
  }

  if (showSaveExitScreen) {
    if (isElementary) {
      return (
        <div style={{
          minHeight: '100vh',
          background: 'radial-gradient(ellipse at 50% 30%, #131b5e 0%, #080c22 65%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          padding: '32px 24px',
        }}>
          {/* Background stars */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice">
            {[[40,60],[100,140],[170,35],[240,90],[320,50],[370,150],
              [60,220],[140,270],[210,190],[300,240],[55,360],[190,400],
              [270,330],[350,380],[80,480],[200,500],[310,460],[130,580],[290,560]
            ].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r={i%4===0?2:1.2} fill="white"
                opacity={0.25+(i%4)*0.1}
                style={{ animation: `starTwinkle ${1.8+i%3}s ${i*0.2}s ease-in-out infinite` }}/>
            ))}
          </svg>

          {/* Rocket icon */}
          <div style={{ position: 'relative', zIndex: 10, marginBottom: '24px' }}>
            <svg width="90" height="90" viewBox="0 0 80 90">
              {/* Decorative stars */}
              <text x="2"  y="22" fontSize="13" fill="#FFD700" opacity="0.85">★</text>
              <text x="64" y="18" fontSize="9"  fill="#FFD700" opacity="0.70">★</text>
              <text x="61" y="76" fontSize="11" fill="#FFD700" opacity="0.75">★</text>

              {/* Flame (drawn first — body overlaps the nozzle top) */}
              <ellipse cx="40" cy="76" rx="9"   ry="11"  fill="#FF4500" opacity="0.95"/>
              <ellipse cx="40" cy="74" rx="6"   ry="8"   fill="#FF8C00"/>
              <ellipse cx="40" cy="71" rx="3.5" ry="5"   fill="#FFD700"/>
              <ellipse cx="40" cy="69" rx="2"   ry="3"   fill="white" opacity="0.7"/>

              {/* Fins (drawn before body so body edge sits cleanly on top) */}
              <path d="M 27,50 L 11,74 L 27,62 Z" fill="#B80026"/>
              <path d="M 53,50 L 69,74 L 53,62 Z" fill="#B80026"/>

              {/* Engine nozzle */}
              <rect x="31" y="62" width="18" height="6" rx="2" fill="#1E1E3A"/>

              {/* Body */}
              <rect x="27" y="28" width="26" height="34" fill="#FF1E3C"/>
              {/* Top-third highlight */}
              <rect x="27" y="28" width="26" height="10" fill="#FF5577" opacity="0.8"/>
              {/* Lower accent stripe */}
              <rect x="27" y="54" width="26" height="8"  fill="#CC0030"/>

              {/* Nose cone (yellow, pointed) */}
              <path d="M 40,5 L 27,28 L 53,28 Z" fill="#FFD700"/>
              {/* Nose sheen */}
              <path d="M 40,5 L 27,28 L 33,15 Z" fill="#FFED50" opacity="0.85"/>
            </svg>
          </div>

          {/* Card */}
          <div style={{
            position: 'relative', zIndex: 10,
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '20px', padding: '32px 36px',
            maxWidth: '440px', width: '100%', textAlign: 'center',
          }}>
            <h1 style={{
              color: '#FFD700', margin: '0 0 14px',
              fontSize: '26px', fontWeight: 900, letterSpacing: '-0.3px',
            }}>
              Mission Paused! 🚀
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, margin: '0 0 20px' }}>
              Great job, astronaut! Log back in with your Student Pass{' '}
              <strong style={{ fontFamily: 'monospace', fontSize: '17px', letterSpacing: '2px', color: '#7BC4A0' }}>
                {token}
              </strong>{' '}
              to continue your mission.
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: '0 0 28px' }}>
              {answeredCount} of {questions.length} questions answered
            </p>
            <button
              onClick={handleReturnToLogin}
              style={{
                width: '100%', padding: '14px', fontSize: '16px', fontWeight: 800,
                minHeight: '44px', cursor: 'pointer', border: 'none', borderRadius: '12px',
                background: 'linear-gradient(135deg, #7BC4A0 0%, #5B8DB8 100%)',
                color: 'white', letterSpacing: '0.3px',
                boxShadow: '0 4px 20px rgba(91,141,184,0.45)',
              }}
            >
              Back to Login
            </button>
          </div>
        </div>
      );
    }

    // Grades 6–8: clean minimal card
    return (
      <div className="App">
        <header className="App-header">
          <div style={{
            background: 'white', borderRadius: '16px',
            padding: '40px 36px', maxWidth: '480px', width: '90%', textAlign: 'center',
            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: '#EAF6F4', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 20px',
            }}>
              <CheckCircle size={32} color="#2E7F84" strokeWidth={2} />
            </div>
            <h1 style={{ color: '#1E3A4A', margin: '0 0 12px', fontSize: '24px', fontWeight: 800 }}>
              Progress Saved
            </h1>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.65, margin: '0 0 10px' }}>
              Log back in with Student Pass{' '}
              <strong style={{ fontFamily: 'monospace', fontSize: '16px', letterSpacing: '2px', color: '#2E7F84' }}>
                {token}
              </strong>{' '}
              to continue where you left off.
            </p>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 28px' }}>
              {answeredCount} of {questions.length} questions answered
            </p>
            <button
              onClick={handleReturnToLogin}
              style={{
                width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
                minHeight: '44px', cursor: 'pointer', border: 'none', borderRadius: '10px',
                backgroundColor: '#2E7F84', color: 'white',
              }}
            >
              Back to Login
            </button>
          </div>
          <div style={{ marginTop: '48px', maxWidth: '440px', width: '90%', textAlign: 'center', padding: '0 16px' }}>
            <p style={{ fontStyle: 'italic', color: 'white', fontSize: '18px', lineHeight: 1.65, margin: '0 0 10px' }}>
              &ldquo;{sessionQuote.quote}&rdquo;
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', margin: 0, letterSpacing: '0.3px' }}>
              — {sessionQuote.author}
            </p>
          </div>
        </header>
      </div>
    );
  }

  if (isLocked) {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{
            background: 'white', color: 'black', padding: '40px',
            borderRadius: '10px', maxWidth: '500px', textAlign: 'center',
          }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: '#EAF6F4', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 16px',
            }}>
              <Lock size={32} color="#2E7F84" strokeWidth={2} />
            </div>
            <h1 style={{ color: '#5B8DB8', marginBottom: '10px' }}>Assessment Submitted</h1>
            <p style={{ fontSize: '17px', color: '#666', marginBottom: '12px' }}>
              This Student Pass has already been used to submit an assessment.
            </p>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              Please see your teacher if you have questions.
            </p>
          </div>
        </header>
      </div>
    );
  }

  if (isComplete) {
    if (isElementary) {
      const elapsed = startTimeRef.current ? Math.round((Date.now() - startTimeRef.current) / 1000) : null;
      return (
        <SpaceCelebrationScreen
          answeredCount={answeredCount}
          totalQuestions={questions.length}
          elapsedSeconds={elapsed}
          onDone={handleReturnToLogin}
        />
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <div style={{
            background: 'white', borderRadius: '16px',
            padding: '48px 44px', maxWidth: '480px', width: '90%',
            textAlign: 'center', boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}>
            {/* Checkmark */}
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: '#EAF6F4', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 24px',
            }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M7 19 L14 26 L29 11" stroke="#2E7F84" strokeWidth="3.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 style={{ color: '#1E3A4A', margin: '0 0 12px', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.3px' }}>
              Assessment Submitted
            </h1>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6, margin: '0 0 32px', maxWidth: '340px', marginLeft: 'auto', marginRight: 'auto' }}>
              Your responses have been recorded. Your teacher will share your results.
            </p>
            {/* Stats */}
            <div style={{
              display: 'flex', gap: '0', borderRadius: '10px',
              border: '1px solid #e2e8f0', overflow: 'hidden', marginBottom: '32px',
            }}>
              <div style={{ flex: 1, padding: '16px 12px', background: '#f8fafc' }}>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#2E7F84' }}>{answeredCount}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '3px', fontWeight: 500 }}>ANSWERED</div>
              </div>
              <div style={{ width: '1px', background: '#e2e8f0' }} />
              <div style={{ flex: 1, padding: '16px 12px', background: '#f8fafc' }}>
                <div style={{ fontSize: '26px', fontWeight: 800, color: '#2E7F84' }}>{questions.length}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '3px', fontWeight: 500 }}>TOTAL</div>
              </div>
            </div>
            <button
              onClick={handleReturnToLogin}
              style={{
                width: '100%', padding: '14px', fontSize: '16px', fontWeight: 700,
                minHeight: '44px', cursor: 'pointer', border: 'none',
                borderRadius: '10px', backgroundColor: '#2E7F84', color: 'white',
                letterSpacing: '0.2px',
              }}
            >
              Done
            </button>
          </div>
          <div style={{ marginTop: '48px', maxWidth: '440px', width: '90%', textAlign: 'center', padding: '0 16px' }}>
            <p style={{ fontStyle: 'italic', color: 'white', fontSize: '18px', lineHeight: 1.65, margin: '0 0 10px' }}>
              &ldquo;{sessionQuote.quote}&rdquo;
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', margin: 0, letterSpacing: '0.3px' }}>
              — {sessionQuote.author}
            </p>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div
      className="App"
      style={noSelect}
      onCopy={noCopy}
      onContextMenu={noCopy}
      onDragStart={noCopy}
    >
      <header className="App-header">
        <div className="tc-token-badge" style={{
          position: 'absolute', top: '18px', right: '20px',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.75)', padding: '8px 16px',
          borderRadius: '20px', fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.5px',
        }}>
          {token}
        </div>

        <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '4px' }}>
          TechGrowth<span style={{ color: '#7BC4A0' }}> Check</span>
        </h1>

        {!hasQuestions ? (
          <div style={{
            background: 'white', color: 'black', padding: '40px',
            borderRadius: '10px', marginTop: '20px',
            maxWidth: '700px', width: '90%', textAlign: 'center',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>📚</div>
            <p style={{ fontSize: '18px', color: '#666' }}>
              Questions coming soon.
            </p>
          </div>
        ) : (
          <>
            {isElementary ? (
              <SpaceMissionBar current={currentQuestion + 1} total={questions.length} answered={answeredCount} />
            ) : (
              <div style={{ width: '90%', maxWidth: '700px', margin: '0 auto 14px' }}>
                <div style={{
                  height: '8px', borderRadius: '4px',
                  background: 'rgba(255,255,255,0.12)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0}%`,
                    background: 'linear-gradient(90deg, #5B8DB8, #7BC4A0)',
                    borderRadius: '4px',
                    transition: 'width 0.4s ease-out',
                  }} />
                </div>
                <div style={{
                  textAlign: 'center', marginTop: '7px',
                  fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.2px',
                }}>
                  Question {currentQuestion + 1} of {questions.length}
                </div>
              </div>
            )}

            <div style={{
              background: 'white', color: 'black', padding: '20px',
              borderRadius: '10px', marginTop: '20px',
              maxWidth: '700px', width: '90%',
            }}>
              <h2 style={{ fontSize: isEarlyGrade ? '16px' : undefined }}>Question {currentQuestion + 1}:</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: isEarlyGrade ? '24px' : '20px' }}>
                <p style={{ fontSize: isEarlyGrade ? '22px' : '18px', fontWeight: 'bold', margin: 0, flex: 1, lineHeight: 1.45 }}>
                  {currentQ.text}
                </p>
                <button
                  onClick={() => speak(currentQ.text, 'question')}
                  disabled={loadingId === 'question'}
                  title={speakingId === 'question' ? 'Stop reading' : 'Read question aloud'}
                  style={{
                    flexShrink: 0,
                    width: isEarlyGrade ? '52px' : '44px',
                    height: isEarlyGrade ? '52px' : '44px',
                    padding: 0, borderRadius: '10px',
                    cursor: loadingId === 'question' ? 'wait' : 'pointer',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    border: speakingId === 'question' ? '2px solid #5B8DB8'
                          : loadingId === 'question' ? '2px solid #c7d8ec'
                          : '2px solid #e2e8f0',
                    background: speakingId === 'question' ? '#EAF1F8'
                              : loadingId === 'question' ? '#f0f6fc'
                              : 'white',
                    transition: 'all 0.15s',
                  }}
                >
                  {loadingId === 'question'
                    ? <span style={{ width: 18, height: 18, border: '2px solid #c7d8ec', borderTopColor: '#5B8DB8', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                    : <Volume2 size={isEarlyGrade ? 22 : 17} color={speakingId === 'question' ? '#5B8DB8' : '#94a3b8'} strokeWidth={2} />
                  }
                </button>
              </div>

              {currentQ.options.map((option) => {
                const optId = `option-${option.letter}`;
                return (
                  <div key={option.letter} style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '10px 0' }}>
                    <button
                      onClick={() => handleAnswerClick(option.letter)}
                      style={{ ...getButtonStyle(option.letter), margin: 0, flex: 1 }}
                    >
                      {option.letter}) {option.text}
                    </button>
                    <button
                      onClick={() => speak(`${option.letter}. ${option.text}`, optId)}
                      disabled={loadingId === optId}
                      title={speakingId === optId ? 'Stop reading' : 'Read aloud'}
                      style={{
                        flexShrink: 0,
                        width: '44px', height: '44px', padding: 0, borderRadius: '8px',
                        cursor: loadingId === optId ? 'wait' : 'pointer',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        border: speakingId === optId ? '1.5px solid #5B8DB8'
                              : loadingId === optId ? '1.5px solid #c7d8ec'
                              : '1.5px solid #e2e8f0',
                        background: speakingId === optId ? '#EAF1F8'
                                  : loadingId === optId ? '#f0f6fc'
                                  : 'white',
                        transition: 'all 0.15s',
                      }}
                    >
                      {loadingId === optId
                        ? <span style={{ width: 15, height: 15, border: '2px solid #c7d8ec', borderTopColor: '#5B8DB8', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                        : <Volume2 size={15} color={speakingId === optId ? '#5B8DB8' : '#94a3b8'} strokeWidth={2} />
                      }
                    </button>
                  </div>
                );
              })}

              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '6px',
                marginTop: '24px', justifyContent: 'center',
              }}>
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { stopSpeech(); setCurrentQuestion(index); }}
                    style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      border: index === currentQuestion ? '3px solid #5B8DB8' : '2px solid #ccc',
                      backgroundColor: answers[index] ? '#5B8DB8' : 'white',
                      color: answers[index] ? 'white' : '#999',
                      fontSize: '13px', fontWeight: 'bold',
                      cursor: 'pointer', padding: '0',
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="tc-assess-nav" style={{
                display: 'flex', justifyContent: 'space-between',
                marginTop: '20px', gap: '10px',
              }}>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  style={{
                    padding: '12px 30px', minHeight: '44px', fontSize: '16px', fontWeight: 'bold',
                    cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                    border: '2px solid #5B8DB8', borderRadius: '5px',
                    backgroundColor: 'white', color: '#5B8DB8',
                    opacity: currentQuestion === 0 ? 0.5 : 1,
                  }}
                >
                  ← Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentQuestion === questions.length - 1}
                  style={{
                    padding: '12px 30px', minHeight: '44px', fontSize: '16px', fontWeight: 'bold',
                    cursor: currentQuestion === questions.length - 1 ? 'not-allowed' : 'pointer',
                    border: 'none', borderRadius: '5px',
                    backgroundColor: '#5B8DB8', color: 'white',
                    opacity: currentQuestion === questions.length - 1 ? 0.4 : 1,
                  }}
                >
                  Next →
                </button>
              </div>

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 14px' }}>
                  {answeredCount} of {questions.length} answered
                  {isSaving && <span style={{ marginLeft: '8px', color: '#7BC4A0' }}>· Saving…</span>}
                </p>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {allAnswered ? (
                    <button
                      onClick={() => setShowSubmitDialog(true)}
                      style={{
                        padding: '12px 28px', minHeight: '44px', fontSize: '15px', fontWeight: 700,
                        cursor: 'pointer', border: 'none', borderRadius: '8px',
                        backgroundColor: '#7BC4A0', color: 'white',
                      }}
                    >
                      Submit Assessment ✓
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowSubmitDialog(true)}
                      style={{
                        padding: '12px 20px', minHeight: '44px', fontSize: '14px', fontWeight: 600,
                        cursor: 'pointer', borderRadius: '8px',
                        border: '2px solid #cbd5e1',
                        backgroundColor: 'white', color: '#64748b',
                      }}
                    >
                      Submit Early
                    </button>
                  )}
                  <button
                    onClick={handleSaveAndExit}
                    disabled={isSaving}
                    style={{
                      padding: '12px 20px', minHeight: '44px', fontSize: '14px', fontWeight: 600,
                      cursor: isSaving ? 'not-allowed' : 'pointer', borderRadius: '8px',
                      border: '2px solid #5B8DB8',
                      backgroundColor: 'white', color: '#5B8DB8',
                      opacity: isSaving ? 0.6 : 1,
                    }}
                  >
                    {isSaving ? 'Saving…' : 'Save & Exit'}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {showSubmitDialog && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '24px',
        }}>
          <div style={{
            background: 'white', borderRadius: '16px', padding: '40px 36px',
            maxWidth: '440px', width: '100%', textAlign: 'center',
            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <ClipboardList size={42} color="#3D6B8A" strokeWidth={1.5} />
            </div>
            <h2 style={{ color: '#2D3D4A', margin: '0 0 12px', fontSize: '20px' }}>
              Submit Assessment?
            </h2>
            <p style={{ color: '#64748b', margin: '0 0 12px', fontSize: '15px', lineHeight: 1.5 }}>
              Are you sure you want to submit? <strong>You will not be able to change your answers after submitting.</strong>
            </p>
            {!allAnswered && (
              <p style={{
                color: '#ef4444', fontWeight: 600, fontSize: '14px',
                margin: '0 0 20px',
                background: '#fef2f2', borderRadius: '8px', padding: '10px 14px',
              }}>
                {questions.length - answeredCount} question{questions.length - answeredCount !== 1 ? 's' : ''} left unanswered — they will be marked incorrect.
              </p>
            )}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={() => setShowSubmitDialog(false)}
                style={{
                  flex: 1, padding: '13px', minHeight: '44px', fontSize: '15px', fontWeight: 600,
                  cursor: 'pointer', borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  backgroundColor: 'white', color: '#475569',
                }}
              >
                Go Back
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  flex: 1, padding: '13px', minHeight: '44px', fontSize: '15px', fontWeight: 700,
                  cursor: 'pointer', border: 'none', borderRadius: '8px',
                  backgroundColor: '#7BC4A0', color: 'white',
                }}
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
