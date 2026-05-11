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
  KeyRound, TrendingUp, ClipboardList, Sparkles, Calendar, Volume2, FileText,
  BarChart2, Printer, Clock, Lock, CheckCircle, Layers, X,
} from 'lucide-react';


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
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-bottom:2rem}
.step{background:#fff;border-radius:12px;padding:2rem 1.5rem;border:1px solid rgba(0,0,0,0.06);transition:transform 0.2s}
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
    <a href="#report">Sample report</a>
    <a href="#pricing">Pricing</a>
    <a href="#" class="btn btn-green" data-cta="1">Log in</a>
  </div>
</nav>

<section class="hero" id="top">
  <div class="hero-badge">Rewarding educator excellence in Texas</div>
  <h1>Helping educators get <em>rewarded for excellence</em> in Texas</h1>
  <p>Pre/post assessments aligned to the Technology Applications TEKS that make it easy to demonstrate student growth for the Teacher Incentive Allotment (TIA). Grades K&ndash;8. Set up in minutes.</p>
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
      TIA growth reports included
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
        <h3>Build your assessment</h3>
        <p>Choose your grade level and select which Technology Applications TEKS standards to assess. Customize the number of questions to fit your instructional time and schedule.</p>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <h3>Generate student passes</h3>
        <p>Purchase passes for your students. Each student receives a unique pre-test and post-test passcode with a printable QR code &mdash; ready to hand out.</p>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <h3>Students take assessments</h3>
        <p>Students scan their QR code or type their passcode. The pre-test happens before instruction, the post-test after. No student accounts needed.</p>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <h3>View your growth report</h3>
        <p>See every student&apos;s pre- and post-test scores side by side. Measure growth and download a report in CSV or PDF format for TIA.</p>
      </div>
    </div>
    <div class="flex-cards">
      <div class="flex-card">
        <h3>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          Multi-grade flexibility
        </h3>
        <p>Teach multiple grade levels? Mix and match grades in a single class. Build assessments that reflect the students you actually have &mdash; not just one grade band.</p>
      </div>
      <div class="flex-card">
        <h3>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          Fits your schedule
        </h3>
        <p>Choose which standards to include and how many questions per standard. Build a 15-minute check-in or a full-period assessment &mdash; whatever fits your instructional time.</p>
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
      <h3>TEKS-aligned question bank</h3>
      <p>Every question maps directly to a specific Technology Applications TEKS standard. No guessing about alignment.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--lavender-light);color:var(--lavender)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
      </div>
      <h3>Student growth measurement</h3>
      <p>Pre-test and post-test scores are compared automatically &mdash; measuring growth at the individual student level, exactly how TIA requires.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--gold-light);color:var(--gold)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      </div>
      <h3>TIA-ready growth reports</h3>
      <p>Download a growth report with student-level data in CSV or PDF format, ready for your district&apos;s TIA submission. No extra data wrangling.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--green-light);color:var(--green-dark)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      </div>
      <h3>Secure and anonymous</h3>
      <p>Students use anonymous passcodes &mdash; no accounts, no personal data collected. Assessment integrity stays protected.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--lavender-light);color:var(--lavender)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      </div>
      <h3>Grades K&ndash;8 coverage</h3>
      <p>Full question sets across every grade band. Elementary and middle school Technology Applications TEKS &mdash; all covered.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:var(--gold-light);color:var(--gold)">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
      </div>
      <h3>Custom class management</h3>
      <p>Create classes, add students anytime, and manage multiple periods &mdash; all from your teacher dashboard.</p>
    </div>
  </div>
</section>

<section class="sample-report" id="report">
  <div class="report-inner">
    <div class="section-label" style="text-align:center">Sample report</div>
    <h2 class="section-title" style="text-align:center">See what your growth data looks like</h2>
    <p class="report-subtitle">Here&apos;s a preview of the TIA Growth Report you&apos;ll be able to generate and download.</p>
    <div class="report-preview">
      <div class="report-header">
        <h4>TIA Growth Report &mdash; Technology Applications</h4>
        <span class="badge">Sample</span>
      </div>
      <div class="class-summary">
        <h5>Class Summary</h5>
        <div class="summary-grid">
          <div class="summary-box">
            <div class="box-label">Students (Both)</div>
            <div class="box-value">24</div>
          </div>
          <div class="summary-box">
            <div class="box-label">Avg Pre-Score</div>
            <div class="box-value">42.3%</div>
          </div>
          <div class="summary-box">
            <div class="box-label">Avg Post-Score</div>
            <div class="box-value">76.8%</div>
          </div>
          <div class="summary-box highlight-box">
            <div class="box-label">Avg Growth</div>
            <div class="box-value" style="color:var(--green-dark)">+34.5%</div>
          </div>
          <div class="summary-box">
            <div class="box-label">Students Grew</div>
            <div class="box-value">23 / 24</div>
            <div class="box-sub">95.8%</div>
          </div>
        </div>
      </div>
      <div class="student-data">
        <h5>Student-Level Data</h5><span class="sort-note">Sorted by Growth</span>
        <div class="privacy-note">
          <strong>i</strong>&ensp;Student names are optional and for print purposes only. No student names are saved or retained by TechGrowth Check.
        </div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Pre-Score</th>
              <th>Post-Score</th>
              <th>Points of Growth</th>
              <th>Met Growth Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="student-label">Student 1</td><td>38.0%</td><td>82.0%</td><td class="growth-pos">+44.0%</td><td><span class="met-yes">Yes</span></td></tr>
            <tr><td class="student-label">Student 2</td><td>41.0%</td><td>83.0%</td><td class="growth-pos">+42.0%</td><td><span class="met-yes">Yes</span></td></tr>
            <tr><td class="student-label">Student 3</td><td>35.0%</td><td>74.0%</td><td class="growth-pos">+39.0%</td><td><span class="met-yes">Yes</span></td></tr>
            <tr><td class="student-label">Student 4</td><td>44.0%</td><td>79.0%</td><td class="growth-pos">+35.0%</td><td><span class="met-yes">Yes</span></td></tr>
            <tr><td class="student-label">Student 5</td><td>52.0%</td><td>78.0%</td><td class="growth-pos">+26.0%</td><td><span class="met-yes">Yes</span></td></tr>
            <tr><td style="color:var(--text-muted);font-style:italic" colspan="5">&hellip; 19 more students</td></tr>
          </tbody>
        </table>
      </div>
      <div class="report-footer">
        <span>Generated by TechGrowth Check</span>
        <span class="btn btn-green" style="pointer-events:none;opacity:0.7">Download CSV / PDF</span>
      </div>
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
      <p class="price-desc">One-time purchase per student. Includes both pre-test and post-test.</p>
      <ul class="price-features">
        <li><span class="check">&#10003;</span> Pre-test and post-test passes included</li>
        <li><span class="check">&#10003;</span> Printable QR codes for each student</li>
        <li><span class="check">&#10003;</span> TIA-ready growth report with CSV and PDF download</li>
        <li><span class="check">&#10003;</span> Custom assessment builder &mdash; choose your standards</li>
        <li><span class="check">&#10003;</span> Read-aloud support for younger students</li>
        <li><span class="check">&#10003;</span> Add more students to any class anytime</li>
        <li><span class="check">&#10003;</span> Mix and match grades for multi-grade classes</li>
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
  <p>&copy; 2025 BrightBop Tech. All rights reserved. <a href="mailto:brightboptech@gmail.com">Contact us</a></p>
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

function GeneratePasses({ profile, onBack, paymentSessionId, initialClass = null }) {
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

  // Multi-class additional rows
  const [additionalClasses, setAdditionalClasses] = useState([]);
  // Multi-class results after payment
  const [multiClassResults, setMultiClassResults] = useState([]);
  const [activeResultClass, setActiveResultClass] = useState(0);

  // Beta code
  const [showBetaCode, setShowBetaCode] = useState(false);
  const [betaCode, setBetaCode] = useState('');
  const [betaCodeError, setBetaCodeError] = useState('');

  const addAnotherClass = () =>
    setAdditionalClasses(prev => [...prev, { id: String(Date.now()), className: '', grade: '', studentCount: '' }]);
  const removeAdditionalClass = (id) =>
    setAdditionalClasses(prev => prev.filter(c => c.id !== id));
  const updateAdditionalClass = (id, field, value) =>
    setAdditionalClasses(prev => prev.map(c => c.id === id ? { ...c, [field]: value } : c));

  const appUrl = `${window.location.origin}/student`;
  const count = parseInt(studentCount, 10) || 0;
  const price = Math.max(parseFloat(pricePerStudent) || 2, 2);
  const additionalStudentCount = additionalClasses.reduce((sum, c) => sum + (parseInt(c.studentCount) || 0), 0);
  const totalStudents = count + additionalStudentCount;
  const totalCost = (price * totalStudents).toFixed(2);

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
      loadClassPasses(initialClass.class_name);
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
            { token: pre,  grade_level: Number(cls.grade), test_type: 'pre',  teacher_id: profile.id, class_name: cls.className, student_number: studentNum },
            { token: post, grade_level: Number(cls.grade), test_type: 'post', teacher_id: profile.id, class_name: cls.className, student_number: studentNum },
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
    if (!betaCode.trim()) { setBetaCodeError('Enter your beta code.'); return; }
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
        setBetaCodeError('Invalid beta code.');
        setGenerating(false);
        return;
      }
      if (codeData.expires_at && new Date(codeData.expires_at) < new Date()) {
        setBetaCodeError('This beta code has expired.');
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
      for (let i = 0; i < count; i++) {
        const studentNum = startingStudentNumber + i;
        const pre  = makeToken();
        const post = makeToken();
        rows.push(
          { token: pre,  grade_level: Number(grade), test_type: 'pre',  teacher_id: profile.id, class_name: className.trim(), student_number: studentNum },
          { token: post, grade_level: Number(grade), test_type: 'post', teacher_id: profile.id, class_name: className.trim(), student_number: studentNum },
        );
        passData.push({ studentNum, pre, post });
      }

      const { error: insertError } = await supabase.from('tokens').insert(rows);
      if (insertError) { setBetaCodeError('Could not save passes: ' + insertError.message); setGenerating(false); return; }

      await supabase.from('beta_codes').update({ used_students: (codeData.used_students || 0) + count }).eq('code', codeData.code);
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

  const handlePrintPre    = () => printDoc(buildPassPrintHTML(passes, 'pre',  className, '', getQrURLs(), studentNames));
  const handlePrintPost   = () => printDoc(buildPassPrintHTML(passes, 'post', className, '', getQrURLs(), studentNames));
  const handlePrintMaster = () => printDoc(buildMasterSheetHTML(passes, className, gradeDisplay(grade), studentNames));

  const loadClassPasses = async (cls) => {
    setGenerating(true);
    setError('');
    const { data, error: dbError } = await supabase
      .from('tokens')
      .select('token, test_type, student_number, grade_level')
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
    setIsViewingExisting(true);
    setGenerating(false);
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
      <button
        onClick={onBack}
        style={{
          background: 'none', border: 'none', color: '#5B8DB8',
          fontSize: '14px', cursor: 'pointer', padding: '0',
          marginBottom: '20px',
        }}
      >
        ← Back to Dashboard
      </button>

      <h2 style={{ margin: '0 0 24px', color: '#3D6B8A', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <KeyRound size={22} color="#3D6B8A" strokeWidth={1.75} />
        Generate Student Passes
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

        {/* Additional class rows */}
        {additionalClasses.map((ac, acIdx) => (
          <div key={ac.id} style={{ background: '#F4F7FA', borderRadius: '8px', padding: '16px', marginBottom: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#3D4B5C' }}>Class {acIdx + 2}</span>
              <button
                onClick={() => removeAdditionalClass(ac.id)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: '0 4px', display: 'flex', alignItems: 'center' }}
                aria-label="Remove class"
              ><X size={16} /></button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>Class Name</label>
                <input type="text" list="class-name-suggestions" placeholder="e.g. Period 4" value={ac.className} onChange={e => updateAdditionalClass(ac.id, 'className', e.target.value)} style={fieldStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>Grade Level</label>
                <select value={ac.grade} onChange={e => updateAdditionalClass(ac.id, 'grade', e.target.value)} style={fieldStyle}>
                  <option value="">Select grade…</option>
                  {PASS_GRADES.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', color: '#3D4B5C', marginBottom: '6px' }}>Number of Students</label>
                <input type="number" min="1" placeholder="e.g. 25" value={ac.studentCount} onChange={e => updateAdditionalClass(ac.id, 'studentCount', e.target.value)} style={fieldStyle} />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addAnotherClass}
          style={{
            padding: '8px 16px', fontSize: '13px', fontWeight: 600,
            border: '1.5px dashed #5B8DB8', borderRadius: '6px',
            backgroundColor: 'transparent', color: '#5B8DB8',
            cursor: 'pointer', marginBottom: '20px', display: 'block',
          }}
        >
          + Add Another Class
        </button>

        {totalStudents > 0 && (
          <div style={{
            background: '#F0F7FF', border: '1px solid #C5D9EC', borderRadius: '8px',
            padding: '12px 16px', marginBottom: '20px',
            fontSize: '15px', color: '#3D6B8A', fontWeight: 600,
          }}>
            {totalStudents} student{totalStudents !== 1 ? 's' : ''}
            {additionalClasses.length > 0 ? ` across ${1 + additionalClasses.length} classes` : ''}
            {' '}× ${price.toFixed(2)} = <strong>${totalCost}</strong>
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
            {showBetaCode ? 'Hide beta code ↑' : 'Have a beta code? →'}
          </button>
          {showBetaCode && (
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Beta code"
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
  const [activeTab, setActiveTab] = useState('pre');
  const canvasRefs = useRef({});

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
    const rows = [];
    const configRows = [];
    const passData = [];
    for (let i = 1; i <= count; i++) {
      const pre  = makeToken();
      const post = makeToken();
      rows.push(
        { token: pre,  grade_level: primaryGrade, test_type: 'pre',  teacher_id: profile.id, class_name: className.trim(), student_number: i },
        { token: post, grade_level: primaryGrade, test_type: 'post', teacher_id: profile.id, class_name: className.trim(), student_number: i },
      );
      configRows.push(
        { token: pre,  question_ids: selectedIds, assessment_config_id: assessmentConfigId },
        { token: post, question_ids: selectedIds, assessment_config_id: assessmentConfigId },
      );
      passData.push({ studentNum: i, pre, post });
    }

    const { error: tokensErr } = await supabase.from('tokens').insert(rows);
    if (tokensErr) { setError('Could not save passes: ' + tokensErr.message); setGenerating(false); return; }

    const { error: cfgErr } = await supabase.from('token_configs').insert(configRows);
    if (cfgErr) { setError('Could not save question config: ' + cfgErr.message); setGenerating(false); return; }

    setPasses(passData);
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
  { quote: "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.", author: "Alvin Toffler" },
  { quote: "A computer is the most remarkable tool that we've ever come up with — it's the equivalent of a bicycle for our minds.", author: "Steve Jobs" },
  { quote: "Technology will never replace great teachers, but technology in the hands of great teachers can be transformational.", author: "George Couros" },
  { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { quote: "One child, one teacher, one book, one pen can change the world.", author: "Malala Yousafzai" },
  { quote: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
  { quote: "Leadership and learning are indispensable to each other.", author: "John F. Kennedy" },
  { quote: "Education is the great equalizer of the conditions of men.", author: "Horace Mann" },
  { quote: "A teacher affects eternity; he can never tell where his influence stops.", author: "Henry Adams" },
  { quote: "I touch the future. I teach.", author: "Christa McAuliffe" },
  { quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education.", author: "Martin Luther King Jr." },
  { quote: "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'", author: "Maria Montessori" },
  { quote: "Children must be taught how to think, not what to think.", author: "Margaret Mead" },
  { quote: "Do the best you can until you know better. Then when you know better, do better.", author: "Maya Angelou" },
  { quote: "Becoming is better than being.", author: "Carol Dweck" },
  { quote: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { quote: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
  { quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", author: "Albert Einstein" },
  { quote: "The principal goal of education is to create men and women who are capable of doing new things, not simply repeating what other generations have done.", author: "Jean Piaget" },
  { quote: "We need technology in every classroom and in every student and teacher's hand, because it is the pen and paper of our time, and it is the lens through which we experience much of our world.", author: "David Warlick" },
  { quote: "Teachers need to integrate technology seamlessly into the curriculum instead of viewing it as an add-on, an afterthought, or an event.", author: "Heidi Hayes Jacobs" },
  { quote: "Education is what survives when what has been learned has been forgotten.", author: "B.F. Skinner" },
];

function Dashboard({ profile, onLogout }) {
  const VALID_SECTIONS = ['generate-passes', 'my-classes', 'results', 'schedule', 'create-assessment', 'tia-report'];

  const [section, setSection] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') return 'generate-passes';
    const path = window.location.pathname.replace(/^\//, '');
    if (VALID_SECTIONS.includes(path)) return path;
    return 'overview';
  });
  const [paymentSessionId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('payment') === 'success' ? params.get('session_id') : null;
  });
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [quoteIdx] = useState(() => Math.floor(Math.random() * DASHBOARD_QUOTES.length));
  const [dashClasses, setDashClasses] = useState([]);
  const [initialClass, setInitialClass] = useState(null);

  useEffect(() => {
    const loadDashClasses = async () => {
      const { data } = await supabase
        .from('tokens')
        .select('class_name, grade_level')
        .eq('teacher_id', profile.id)
        .eq('test_type', 'pre');
      if (!data) return;
      const map = {};
      data.forEach(({ class_name, grade_level }) => {
        if (!map[class_name]) map[class_name] = { class_name, grade_level, count: 0 };
        map[class_name].count++;
      });
      setDashClasses(Object.values(map).sort((a, b) => a.class_name.localeCompare(b.class_name)));
    };
    loadDashClasses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync section to URL path for back-button support
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') return; // payment flow manages its own URL
    const path = section === 'overview' ? '/' : '/' + section;
    if (window.location.pathname !== path) {
      window.history.pushState({ section }, '', path);
    }
  }, [section]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handlePop = (e) => {
      const s = e.state?.section;
      if (s) { setSection(s); return; }
      const path = window.location.pathname.replace(/^\//, '');
      setSection(VALID_SECTIONS.includes(path) ? path : 'overview');
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

  const firstName = (profile.full_name || 'Teacher').split(' ')[0];
  const schoolLine = profile.school ? ` · ${profile.school}` : profile.district ? ` · ${profile.district}` : '';

  const steps = [
    {
      num: 1, Icon: ClipboardList,
      title: 'Create Custom Assessment',
      desc: 'Build a targeted assessment from specific standards and question counts. See estimated completion time.',
      body: 'Choose your grade level, pick which standards to include, and set 1–3 questions per standard. Preview the full question set and see estimated completion time before you generate passes.',
      onClick: () => setSection('create-assessment'), color: '#5B8DB8', bg: '#EAF1F8',
    },
    {
      num: 2, Icon: KeyRound,
      title: 'Create Classes & Generate Student Passes',
      desc: 'Purchase student passes, generate QR codes, and manage your classes.',
      body: 'Generate one pre-test pass and one post-test pass per student. Print them as a sheet or display QR codes — students can begin by scanning or typing their 8-character code.',
      onClick: () => { setInitialClass(null); setSection('generate-passes'); }, color: '#3D7A5E', bg: '#D4EEE3',
    },
    {
      num: 3, Icon: TrendingUp,
      title: 'My Results',
      desc: 'View pre- and post-test scores for your classes and track student growth.',
      body: 'See every student\'s pre- and post-test scores side by side. Measure growth in percentage points and download a CSV report formatted for TIA reporting.',
      onClick: () => setSection('results'), color: '#6B5F9B', bg: '#EDEAF6',
    },
    {
      num: 4, Icon: Calendar,
      title: 'Schedule',
      desc: 'Set time windows when students are allowed to start assessments.',
      body: 'Add recurring access windows by day of week and time. Outside these windows students see a message that the assessment is unavailable. If no windows are set, assessments are open at all times.',
      onClick: () => setSection('schedule'), color: '#B87B3D', bg: '#FEF3E2',
    },
    {
      num: 5, Icon: FileText,
      title: 'TIA Growth Report',
      desc: 'Generate a printable pre-to-post growth report for TIA designation evidence.',
      body: 'Select a pre-assessment and post-assessment, fill in your report header, and generate a detailed growth report. Includes class summary, student-level data, and standards breakdown — ready to print or export as PDF.',
      onClick: () => setSection('tia-report'), color: '#2E7F84', bg: '#E5F4F5',
    },
    {
      num: 6, Icon: Layers, showInTour: false,
      title: 'My Classes',
      desc: 'View passes, reprint QR codes, and manage your existing classes.',
      body: '',
      onClick: () => setSection('my-classes'), color: '#3D5A6E', bg: '#E8EDF2',
    },
  ];

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

      {/* Overview */}
      {section === 'overview' && (
        <div style={{ maxWidth: '960px', margin: '36px auto', padding: '0 24px' }}>

          {/* Welcome + banner row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
            <h2 style={{ margin: 0, color: '#3D6B8A', fontSize: '22px' }}>
              Welcome back, {firstName}!
            </h2>

            {!bannerDismissed && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: '#EAF1F8', border: '1px solid #C5D9EC',
                borderRadius: '8px', padding: '9px 14px',
              }}>
                <Sparkles size={15} color='#5B8DB8' strokeWidth={2} />
                <button
                  onClick={() => setTourOpen(true)}
                  style={{ background: 'none', border: 'none', padding: 0, fontSize: '13px', fontWeight: 600, color: '#3D6B8A', cursor: 'pointer' }}
                >
                  New to TechGrowth Check? Click here for a quick walkthrough
                </button>
                <button
                  onClick={() => setBannerDismissed(true)}
                  style={{ background: 'none', border: 'none', padding: 0, fontSize: '16px', lineHeight: 1, color: '#94a3b8', cursor: 'pointer', marginLeft: '4px' }}
                  aria-label="Dismiss"
                >×</button>
              </div>
            )}
          </div>

          {/* My Classes — quick access to existing class passes */}
          {/* Navigation cards — always visible */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {steps.map(step => (
              <div
                key={step.num}
                onClick={step.onClick}
                style={{
                  background: 'white', borderRadius: '12px',
                  padding: '28px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  display: 'flex', flexDirection: 'column',
                  border: '1px solid #eef2f7',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.15s, transform 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.13)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon badge */}
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: step.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '16px',
                }}>
                  <step.Icon size={22} color={step.color} strokeWidth={1.75} />
                </div>

                <h3 style={{ margin: '0 0 8px', fontSize: '16px', fontWeight: 700, color: '#1e293b' }}>
                  {step.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Rotating inspirational quote */}
          <div style={{ marginTop: '48px', paddingBottom: '16px', textAlign: 'center' }}>
            <p style={{
              fontStyle: 'italic', color: '#94a3b8', fontSize: '14px',
              lineHeight: 1.75, margin: '0 auto 6px', maxWidth: '620px',
            }}>
              &ldquo;{DASHBOARD_QUOTES[quoteIdx].quote}&rdquo;
            </p>
            <p style={{ color: '#b0bec8', fontSize: '12px', margin: 0, letterSpacing: '0.02em' }}>
              — {DASHBOARD_QUOTES[quoteIdx].author}
            </p>
          </div>
        </div>
      )}

      {/* Tour panel */}
      {tourOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setTourOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.4)' }}
          />
          {/* Slide-in panel */}
          <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0,
            width: '100%', maxWidth: '520px',
            zIndex: 1001,
            display: 'flex', flexDirection: 'column',
            background: 'white',
            boxShadow: '-8px 0 40px rgba(0,0,0,0.2)',
          }}>
            {/* Header — always visible */}
            <div style={{
              flexShrink: 0,
              background: 'linear-gradient(135deg, #3D6B8A 0%, #5B8DB8 100%)',
              padding: '20px 24px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={18} color='white' strokeWidth={2} />
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'white' }}>Getting Started with TechGrowth Check</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.72)', marginTop: '2px' }}>Your first TIA-ready assessment ready in a few steps.</div>
                </div>
              </div>
              <button
                onClick={() => setTourOpen(false)}
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)', color: 'white', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', fontWeight: 600, flexShrink: 0 }}
              >✕ Close</button>
            </div>

            {/* Scrollable steps */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {steps.filter(s => s.showInTour !== false).map((step, i, arr) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex', gap: '20px', padding: '24px',
                    borderBottom: i < arr.length - 1 ? '1px solid #f0f0f0' : 'none',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, color: step.color }}>
                      {step.num}
                    </div>
                    <step.Icon size={20} color={step.color} strokeWidth={1.75} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>{step.title}</div>
                    <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{step.body}</p>
                    <button
                      onClick={() => { setTourOpen(false); step.onClick(); }}
                      style={{ background: 'none', border: 'none', padding: 0, fontSize: '13px', fontWeight: 700, color: step.color, cursor: 'pointer' }}
                    >Go to {step.title} →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {section === 'generate-passes'  && <GeneratePasses    profile={profile} onBack={() => setSection('overview')} paymentSessionId={paymentSessionId} initialClass={initialClass} />}
      {section === 'create-assessment' && <CreateAssessment  profile={profile} onBack={() => setSection('overview')} />}
      {section === 'results'           && <ResultsDashboard  profile={profile} onBack={() => setSection('overview')} />}
      {section === 'schedule'          && <ScheduleManager   profile={profile} onBack={() => setSection('overview')} />}
      {section === 'tia-report'        && <TIAGrowthReport   profile={profile} onBack={() => setSection('overview')} />}

      {section === 'my-classes' && (
        <div style={{ maxWidth: '960px', margin: '36px auto', padding: '0 24px' }}>
          <button
            onClick={() => setSection('overview')}
            style={{ background: 'none', border: 'none', color: '#5B8DB8', fontSize: '14px', cursor: 'pointer', padding: 0, marginBottom: '24px' }}
          >← Back to Dashboard</button>

          <h2 style={{ margin: '0 0 6px', color: '#3D6B8A', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={22} color="#3D6B8A" strokeWidth={1.75} />
            My Classes
          </h2>
          <p style={{ margin: '0 0 24px', color: '#64748b', fontSize: '14px' }}>
            Click "View Passes" to see and reprint QR codes for any class.
          </p>

          {dashClasses.length === 0 ? (
            <div style={{ background: 'white', borderRadius: '10px', padding: '40px 28px', textAlign: 'center', color: '#94a3b8', border: '1px solid #eef2f7' }}>
              <Layers size={32} color="#cbd5e1" strokeWidth={1.5} style={{ marginBottom: '12px' }} />
              <p style={{ margin: '0 0 8px', fontSize: '15px', fontWeight: 600, color: '#64748b' }}>No classes yet</p>
              <p style={{ margin: 0, fontSize: '13px' }}>Generate student passes to create your first class.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '14px' }}>
              {dashClasses.map(c => (
                <div key={c.class_name} style={{ background: 'white', borderRadius: '12px', padding: '20px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', border: '1px solid #eef2f7', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: '#1e293b', marginBottom: '3px' }}>{c.class_name}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
                    {gradeDisplay(c.grade_level)} &nbsp;·&nbsp; {c.count} student{c.count !== 1 ? 's' : ''}
                  </div>
                  <button
                    onClick={() => { setInitialClass(c); setSection('generate-passes'); }}
                    style={{ marginTop: 'auto', padding: '8px 16px', fontSize: '13px', fontWeight: 700, background: '#D4EEE3', color: '#3D7A5E', border: 'none', borderRadius: '6px', cursor: 'pointer', alignSelf: 'flex-start' }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                  >View Passes →</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
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

function ScheduleManager({ profile, onBack }) {
  const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [assessments, setAssessments] = useState([]);
  const [windows, setWindows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [formAssessmentId, setFormAssessmentId] = useState('');
  const [formDays, setFormDays] = useState(new Set());
  const [formStart, setFormStart] = useState('08:00');
  const [formEnd, setFormEnd] = useState('08:50');
  const [formUntil, setFormUntil] = useState('');
  const [selectedTz, setSelectedTz] = useState(
    () => localStorage.getItem('scheduleTimezone') || Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [showTzPicker, setShowTzPicker] = useState(false);

  useEffect(() => {
    Promise.all([loadAssessments(), loadWindows()]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadAssessments = async () => {
    const { data } = await supabase
      .from('assessment_configs')
      .select('id, name, grade_levels')
      .eq('teacher_id', profile.id)
      .order('created_at', { ascending: false });
    setAssessments(data ?? []);
  };

  const loadWindows = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('access_windows')
      .select('*')
      .eq('teacher_id', profile.id)
      .order('assessment_id, start_time');
    setWindows(data ?? []);
    setLoading(false);
  };

  const toggleDay = (i) => {
    setFormDays(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleAdd = async () => {
    if (!formAssessmentId) { setError('Select an assessment.'); return; }
    if (formDays.size === 0) { setError('Select at least one day.'); return; }
    if (!formStart || !formEnd) { setError('Set a start and end time.'); return; }
    if (formEnd <= formStart) { setError('End time must be after start time.'); return; }
    if (!formUntil) { setError('Set a repeat-until date.'); return; }
    setError('');
    setSaving(true);
    const { error: insertErr } = await supabase.from('access_windows').insert({
      teacher_id: profile.id,
      assessment_id: formAssessmentId,
      days_of_week: [...formDays].sort((a, b) => a - b),
      start_time: formStart,
      end_time: formEnd,
      repeat_until: formUntil,
    });
    setSaving(false);
    if (insertErr) { setError(insertErr.message); return; }
    setFormAssessmentId('');
    setFormDays(new Set());
    setFormStart('08:00');
    setFormEnd('08:50');
    setFormUntil('');
    loadWindows();
  };

  const handleDelete = async (id) => {
    await supabase.from('access_windows').delete().eq('id', id);
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const fmtTime = (t) => {
    const [h, m] = t.split(':');
    const hour = parseInt(h, 10);
    return `${hour % 12 || 12}:${m} ${hour >= 12 ? 'PM' : 'AM'}`;
  };
  const fmtDays = (days) => days.map(d => DAY_LABELS[d]).join(', ');
  const fmtDate = (d) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const [y, mo, day] = d.split('-');
    return `${months[parseInt(mo, 10) - 1]} ${parseInt(day, 10)}, ${y}`;
  };

  const getTzAbbr = (tz) => {
    try {
      return new Intl.DateTimeFormat('en-US', { timeZoneName: 'short', timeZone: tz })
        .formatToParts(new Date()).find(p => p.type === 'timeZoneName')?.value ?? '';
    } catch { return ''; }
  };
  const getTzLongName = (tz) => {
    try {
      return new Intl.DateTimeFormat('en-US', { timeZoneName: 'long', timeZone: tz })
        .formatToParts(new Date()).find(p => p.type === 'timeZoneName')?.value ?? tz;
    } catch { return tz; }
  };
  const handleTzChange = (tz) => {
    setSelectedTz(tz);
    setShowTzPicker(false);
    localStorage.setItem('scheduleTimezone', tz);
  };

  const inputStyle = {
    width: '100%', padding: '9px 10px',
    border: '1px solid #e2e8f0', borderRadius: '6px',
    fontSize: '14px', boxSizing: 'border-box',
  };
  const labelStyle = {
    display: 'block', fontSize: '13px',
    fontWeight: 600, color: '#475569', marginBottom: '6px',
  };

  // Group windows by assessment
  const windowGroups = assessments
    .map(a => ({ assessment: a, rows: windows.filter(w => w.assessment_id === a.id) }))
    .filter(g => g.rows.length > 0);

  return (
    <div style={{ maxWidth: '700px', margin: '36px auto', padding: '0 24px' }}>
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: '#5B8DB8', cursor: 'pointer', fontSize: '14px', fontWeight: 600, padding: '0 0 20px', display: 'block' }}
      >← Back to Dashboard</button>

      <h2 style={{ margin: '0 0 6px', color: '#2D3D4A', fontSize: '22px' }}>Assessment Schedule</h2>
      <p style={{ margin: '0 0 28px', color: '#64748b', fontSize: '14px', lineHeight: 1.6 }}>
        Set time windows when students are allowed to start each assessment. Outside these windows students will see a message that the assessment is not currently available.{' '}
        <strong>Assessments with no windows remain open at all times.</strong>
      </p>

      {/* Add form */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '28px', marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', border: '1px solid #eef2f7' }}>
        <h3 style={{ margin: '0 0 20px', fontSize: '16px', color: '#1e293b' }}>Add Access Window</h3>

        {/* Assessment picker */}
        <div style={{ marginBottom: '18px' }}>
          <label style={labelStyle}>Assessment</label>
          <select
            value={formAssessmentId}
            onChange={e => setFormAssessmentId(e.target.value)}
            style={{ ...inputStyle, color: formAssessmentId ? '#1e293b' : '#94a3b8' }}
          >
            <option value="">Select Assessment…</option>
            {assessments.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
          {assessments.length === 0 && (
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '6px 0 0' }}>
              No assessments found. Create a Custom Assessment first.
            </p>
          )}
        </div>

        {/* Days of week */}
        <div style={{ marginBottom: '18px' }}>
          <div style={labelStyle}>Days of Week</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {DAY_LABELS.map((day, i) => {
              const on = formDays.has(i);
              return (
                <button
                  key={i}
                  onClick={() => toggleDay(i)}
                  style={{
                    padding: '7px 12px', borderRadius: '6px', cursor: 'pointer',
                    fontSize: '13px', fontWeight: 600, transition: 'all 0.15s',
                    border: on ? '2px solid #5B8DB8' : '2px solid #e2e8f0',
                    background: on ? '#EAF1F8' : 'white',
                    color: on ? '#3D6B8A' : '#64748b',
                  }}
                >{day}</button>
              );
            })}
          </div>
        </div>

        {/* Timezone indicator */}
        <div style={{ marginBottom: '10px' }}>
          {showTzPicker ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', color: '#64748b', whiteSpace: 'nowrap' }}>Times are in:</span>
              <select
                value={selectedTz}
                autoFocus
                onChange={e => handleTzChange(e.target.value)}
                onBlur={() => setShowTzPicker(false)}
                style={{
                  fontSize: '13px', padding: '4px 8px',
                  border: '1px solid #5B8DB8', borderRadius: '5px',
                  color: '#1e293b', cursor: 'pointer',
                }}
              >
                {TIMEZONES.map(tz => (
                  <option key={tz} value={tz}>{getTzLongName(tz)} — {tz}</option>
                ))}
                {!TIMEZONES.includes(selectedTz) && (
                  <option value={selectedTz}>{getTzLongName(selectedTz)} — {selectedTz}</option>
                )}
              </select>
            </div>
          ) : (
            <button
              onClick={() => setShowTzPicker(true)}
              title="Click to change timezone"
              style={{
                background: 'none', border: 'none', padding: 0,
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px',
              }}
            >
              <span style={{ fontSize: '13px' }}>🌐</span>
              <span style={{ fontSize: '12px', color: '#64748b' }}>
                Times are in:{' '}
                <strong style={{ color: '#3D6B8A' }}>{getTzLongName(selectedTz)}</strong>
                {' '}<span style={{ color: '#94a3b8' }}>({selectedTz})</span>
              </span>
              <span style={{ fontSize: '10px', color: '#5B8DB8' }}>▾</span>
            </button>
          )}
        </div>

        {/* Time + date row */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '18px' }}>
          <div style={{ flex: 1, minWidth: '130px' }}>
            <label style={labelStyle}>Start Time</label>
            <input type="time" value={formStart} onChange={e => setFormStart(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ flex: 1, minWidth: '130px' }}>
            <label style={labelStyle}>End Time</label>
            <input type="time" value={formEnd} onChange={e => setFormEnd(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ flex: '1 1 160px', minWidth: '160px' }}>
            <label style={labelStyle}>Repeat Until</label>
            <input type="date" value={formUntil} onChange={e => setFormUntil(e.target.value)} style={inputStyle} />
          </div>
        </div>

        {error && <p style={{ color: '#ef4444', fontSize: '13px', margin: '0 0 14px' }}>{error}</p>}

        <button
          onClick={handleAdd}
          disabled={saving}
          style={{
            padding: '10px 24px', fontSize: '14px', fontWeight: 700,
            cursor: saving ? 'not-allowed' : 'pointer',
            border: 'none', borderRadius: '7px',
            background: '#5B8DB8', color: 'white',
            opacity: saving ? 0.7 : 1,
          }}
        >{saving ? 'Adding…' : '+ Add Window'}</button>
      </div>

      {/* Window list grouped by assessment */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', border: '1px solid #eef2f7' }}>
        <h3 style={{ margin: '0 0 16px', fontSize: '16px', color: '#1e293b' }}>Active Windows</h3>
        {loading ? (
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Loading…</p>
        ) : windowGroups.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '28px 0', color: '#94a3b8' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <Clock size={36} color="#cbd5e1" strokeWidth={1.5} />
            </div>
            <p style={{ margin: 0, fontSize: '14px' }}>No windows set — all assessments are open at all times.</p>
          </div>
        ) : (
          windowGroups.map(({ assessment, rows }) => (
            <div key={assessment.id} style={{ marginBottom: '24px' }}>
              <div style={{
                fontSize: '12px', fontWeight: 700, color: '#3D6B8A',
                textTransform: 'uppercase', letterSpacing: '0.6px',
                paddingBottom: '8px', borderBottom: '2px solid #EAF1F8',
                marginBottom: '4px',
              }}>
                {assessment.name}
              </div>
              {rows.map((w, i) => (
                <div
                  key={w.id}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: i < rows.length - 1 ? '1px solid #f1f5f9' : 'none',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: '#1e293b', fontSize: '14px', marginBottom: '2px' }}>
                      {fmtDays(w.days_of_week)} &nbsp;·&nbsp; {fmtTime(w.start_time)} – {fmtTime(w.end_time)}
                      {' '}<span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '12px' }}>{getTzAbbr(selectedTz)}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                      Repeats until {fmtDate(w.repeat_until)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(w.id)}
                    style={{
                      background: '#fef2f2', border: '1px solid #fecaca',
                      color: '#ef4444', borderRadius: '6px',
                      padding: '6px 14px', cursor: 'pointer',
                      fontSize: '13px', fontWeight: 600, flexShrink: 0, marginLeft: '16px',
                    }}
                  >Delete</button>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
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
    ? allGradeQuestions.filter(q => customQuestionIds.includes(q.id))
    : allGradeQuestions;
  const hasQuestions = questions.length > 0;
  const currentQ = hasQuestions ? questions[currentQuestion] : null;
  const selectedAnswer = answers[currentQuestion];
  const isElementary = selectedGrade !== null && selectedGrade >= 3 && selectedGrade <= 5;

  const handleLogin = async (codeOverride = null) => {
    const code = (codeOverride ?? tokenInput).toUpperCase().trim();
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
        .select('grade_level')
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
              onClick={handleLogin}
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
    <div className="App">
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
              <h2>Question {currentQuestion + 1}:</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, flex: 1 }}>
                  {currentQ.text}
                </p>
                <button
                  onClick={() => speak(currentQ.text, 'question')}
                  disabled={loadingId === 'question'}
                  title={speakingId === 'question' ? 'Stop reading' : 'Read question aloud'}
                  style={{
                    flexShrink: 0,
                    width: '44px', height: '44px', padding: 0, borderRadius: '8px',
                    cursor: loadingId === 'question' ? 'wait' : 'pointer',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    border: speakingId === 'question' ? '1.5px solid #5B8DB8'
                          : loadingId === 'question' ? '1.5px solid #c7d8ec'
                          : '1.5px solid #e2e8f0',
                    background: speakingId === 'question' ? '#EAF1F8'
                              : loadingId === 'question' ? '#f0f6fc'
                              : 'white',
                    transition: 'all 0.15s',
                  }}
                >
                  {loadingId === 'question'
                    ? <span style={{ width: 17, height: 17, border: '2px solid #c7d8ec', borderTopColor: '#5B8DB8', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                    : <Volume2 size={17} color={speakingId === 'question' ? '#5B8DB8' : '#94a3b8'} strokeWidth={2} />
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
