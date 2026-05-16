import React from 'react';

// ── SVG icon components (viewBox 0 0 100 100) ──────────────────────────────

const icons = {

  // ── Steps / Sequences ──────────────────────────────────────────────────────

  'steps-one': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="76" height="76" rx="10" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="4"/>
      <text x="50" y="70" textAnchor="middle" fontSize="46" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">1</text>
    </svg>
  ),

  'steps-few': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="38" width="24" height="24" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="16" y="54" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">1</text>
      <path d="M29 50 L35 50" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M34 47 L38 50 L34 53" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="39" y="38" width="24" height="24" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="51" y="54" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">2</text>
      <path d="M64 50 L70 50" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M69 47 L73 50 L69 53" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="74" y="38" width="24" height="24" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="86" y="54" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">3</text>
      <text x="50" y="82" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Arial, sans-serif">many steps</text>
    </svg>
  ),

  'steps-none': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="18" width="70" height="56" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="3"/>
      <line x1="29" y1="31" x2="71" y2="69" stroke="#ef4444" strokeWidth="5.5" strokeLinecap="round"/>
      <line x1="71" y1="31" x2="29" y2="69" stroke="#ef4444" strokeWidth="5.5" strokeLinecap="round"/>
    </svg>
  ),

  'steps-ordered': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="34" width="20" height="20" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="16" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">1</text>
      <path d="M27 44 L33 44" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 41 L36 44 L32 47" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="37" y="34" width="20" height="20" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="47" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">2</text>
      <path d="M58 44 L64 44" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M63 41 L67 44 L63 47" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="68" y="34" width="20" height="20" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="78" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">3</text>
      <text x="50" y="75" textAnchor="middle" fontSize="9.5" fill="#64748b" fontFamily="Arial, sans-serif">in order</text>
      <rect x="4" y="80" width="28" height="14" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="1.5"/>
      <text x="18" y="91" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">FIRST</text>
      <rect x="36" y="80" width="28" height="14" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="1.5"/>
      <text x="50" y="91" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">NEXT</text>
      <rect x="68" y="80" width="28" height="14" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="1.5"/>
      <text x="82" y="91" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">LAST</text>
    </svg>
  ),

  // ── Patterns ────────────────────────────────────────────────────────────────

  'pattern-ab': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="48" r="11" fill="#E53935"/>
      <circle cx="35" cy="48" r="11" fill="#1976D2"/>
      <circle cx="57" cy="48" r="11" fill="#E53935"/>
      <circle cx="79" cy="48" r="11" fill="#1976D2"/>
      <text x="97" y="53" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#64748b" fontFamily="Arial, sans-serif">…</text>
    </svg>
  ),

  'shape-circle': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="38" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="5"/>
    </svg>
  ),

  'shape-square': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="72" height="72" rx="6" fill="#E8F5E9" stroke="#388E3C" strokeWidth="5"/>
    </svg>
  ),

  'shape-triangle': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8 L90 88 L10 88 Z" fill="#FFF8E1" stroke="#F57F17" strokeWidth="5"/>
    </svg>
  ),

  // ── Numbers ─────────────────────────────────────────────────────────────────

  'num-2': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">2</text>
    </svg>
  ),

  'num-3': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">3</text>
    </svg>
  ),

  'num-4': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">4</text>
    </svg>
  ),

  // ── Concepts ────────────────────────────────────────────────────────────────

  'checkmark': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#E8F5E9"/>
      <path d="M22 52 L40 72 L78 28" stroke="#2E7D32" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  'x-wrong': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#FFEBEE"/>
      <line x1="27" y1="27" x2="73" y2="73" stroke="#C62828" strokeWidth="7.5" strokeLinecap="round"/>
      <line x1="73" y1="27" x2="27" y2="73" stroke="#C62828" strokeWidth="7.5" strokeLinecap="round"/>
    </svg>
  ),

  'question': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#FFF8E1" stroke="#F57F17" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="54" fontWeight="bold" fill="#F57F17" fontFamily="Arial, sans-serif">?</text>
    </svg>
  ),

  'lightbulb': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 12 C30 12 18 26 18 40 C18 54 28 64 34 72 L66 72 C72 64 82 54 82 40 C82 26 70 12 50 12 Z"
        fill="#FFF8E1" stroke="#F57F17" strokeWidth="3.5"/>
      <rect x="37" y="72" width="26" height="7" rx="2" fill="#F57F17"/>
      <rect x="40" y="81" width="20" height="7" rx="2" fill="#F57F17"/>
      <line x1="42" y1="40" x2="50" y2="55" stroke="#F57F17" strokeWidth="3" strokeLinecap="round"/>
      <line x1="58" y1="40" x2="50" y2="55" stroke="#F57F17" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="25" x2="50" y2="30" stroke="#F57F17" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),

  'save-icon': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="76" height="76" rx="8" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="24" y="12" width="34" height="26" rx="3" fill="#3D6B8A" opacity="0.55"/>
      <rect x="36" y="58" width="28" height="26" rx="3" fill="#3D6B8A" opacity="0.45"/>
    </svg>
  ),

  // ── Technology ──────────────────────────────────────────────────────────────

  'device-computer': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="84" height="58" rx="5" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="15" y="17" width="70" height="44" rx="3" fill="white" stroke="#3D6B8A" strokeWidth="1.5"/>
      <rect x="43" y="68" width="14" height="10" fill="#3D6B8A"/>
      <rect x="28" y="78" width="44" height="7" rx="3" fill="#3D6B8A"/>
    </svg>
  ),

  'device-tablet': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="6" width="56" height="88" rx="8" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="29" y="14" width="42" height="64" rx="3" fill="white" stroke="#3D6B8A" strokeWidth="1.5"/>
      <circle cx="50" cy="87" r="4" fill="#3D6B8A"/>
    </svg>
  ),

  'device-keyboard': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="24" width="90" height="52" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="12" y="32" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="25" y="32" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="38" y="32" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="51" y="32" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="64" y="32" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="77" y="32" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="12" y="43" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="25" y="43" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="38" y="43" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="51" y="43" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="64" y="43" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="77" y="43" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
      <rect x="28" y="55" width="44" height="9" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1"/>
    </svg>
  ),

  'device-mouse': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 12 C30 12 20 28 20 48 C20 68 32 88 50 88 C68 88 80 68 80 48 C80 28 70 12 50 12 Z"
        fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <line x1="50" y1="12" x2="50" y2="52" stroke="#3D6B8A" strokeWidth="2.5"/>
      <rect x="42" y="25" width="16" height="22" rx="8" fill="#3D6B8A" opacity="0.5"/>
    </svg>
  ),

  'device-printer': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="60" width="40" height="30" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="2"/>
      <rect x="8" y="34" width="84" height="38" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="28" y="12" width="44" height="26" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="2"/>
      <circle cx="76" cy="53" r="6" fill="#3D6B8A"/>
    </svg>
  ),

  // ── People ───────────────────────────────────────────────────────────────────

  'person-hand-up': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="13" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <path d="M50 31 L50 66" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 44 L74 24" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="74" cy="22" r="5" fill="#3D6B8A"/>
      <path d="M50 46 L30 60" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 66 L36 88" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 66 L64 88" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  'person-share': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="18" r="10" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <path d="M26 28 L26 58" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M26 42 L42 48" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M26 58 L16 78" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M26 58 L36 78" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="74" cy="18" r="10" fill="#EAF6F4" stroke="#2E7F84" strokeWidth="2.5"/>
      <path d="M74 28 L74 58" stroke="#2E7F84" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M74 42 L58 48" stroke="#2E7F84" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M74 58 L64 78" stroke="#2E7F84" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M74 58 L84 78" stroke="#2E7F84" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M44 46 L56 46" stroke="#F57C00" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M54 43 L57 46 L54 49" fill="none" stroke="#F57C00" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  'person-teacher': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="55" width="60" height="38" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <line x1="8" y1="68" x2="68" y2="68" stroke="#3D6B8A" strokeWidth="1.5"/>
      <line x1="16" y1="76" x2="50" y2="76" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="83" x2="42" y2="83" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="82" cy="16" r="11" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <path d="M82 27 L82 56" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M82 40 L70 50" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M82 40 L94 48" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M82 56 L74 78" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M82 56 L90 78" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  ),

  // ── Safety ──────────────────────────────────────────────────────────────────

  'lock': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34 44 L34 30 C34 17 66 17 66 30 L66 44"
        stroke="#3D6B8A" strokeWidth="6.5" strokeLinecap="round" fill="none"/>
      <rect x="18" y="44" width="64" height="44" rx="9" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <circle cx="50" cy="62" r="8" fill="#3D6B8A"/>
      <rect x="46" y="64" width="8" height="13" rx="2.5" fill="#3D6B8A"/>
    </svg>
  ),

  'shield': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 6 L84 20 L84 50 C84 70 66 84 50 92 C34 84 16 70 16 50 L16 20 Z"
        fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <path d="M32 52 L44 64 L70 38" stroke="#2E7D32" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  'stop': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 6 L64 6 L94 36 L94 64 L64 94 L36 94 L6 64 L6 36 Z"
        fill="#FFEBEE" stroke="#C62828" strokeWidth="4"/>
      <text x="50" y="56" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#C62828" fontFamily="Arial, sans-serif">STOP</text>
    </svg>
  ),

  'warning': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8 L92 88 L8 88 Z" fill="#FFF8E1" stroke="#F57F17" strokeWidth="4"/>
      <line x1="50" y1="36" x2="50" y2="65" stroke="#F57F17" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="50" cy="76" r="4" fill="#F57F17"/>
    </svg>
  ),

  // ── Faces ────────────────────────────────────────────────────────────────────

  'face-happy': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#FFF8E1" stroke="#F57F17" strokeWidth="3.5"/>
      <circle cx="36" cy="40" r="4.5" fill="#37474F"/>
      <circle cx="64" cy="40" r="4.5" fill="#37474F"/>
      <path d="M30 58 Q50 78 70 58" stroke="#37474F" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'face-sad': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="3.5"/>
      <circle cx="36" cy="40" r="4.5" fill="#37474F"/>
      <circle cx="64" cy="40" r="4.5" fill="#37474F"/>
      <path d="M30 70 Q50 52 70 70" stroke="#37474F" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'face-confused': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#E8EAF6" stroke="#3949AB" strokeWidth="3.5"/>
      <circle cx="36" cy="40" r="4.5" fill="#37474F"/>
      <circle cx="64" cy="40" r="4.5" fill="#37474F"/>
      <path d="M32 65 L40 60 L50 65 L60 60 L68 65" stroke="#37474F" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <text x="50" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3949AB" fontFamily="Arial, sans-serif">?</text>
    </svg>
  ),

  // ── Data ─────────────────────────────────────────────────────────────────────

  'chart-bar': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="82" x2="92" y2="82" stroke="#64748b" strokeWidth="2.5"/>
      <line x1="14" y1="14" x2="14" y2="82" stroke="#64748b" strokeWidth="2.5"/>
      <rect x="22" y="50" width="16" height="32" rx="2" fill="#5B8DB8"/>
      <rect x="44" y="28" width="16" height="54" rx="2" fill="#3D6B8A"/>
      <rect x="66" y="38" width="16" height="44" rx="2" fill="#5B8DB8"/>
    </svg>
  ),

  'chart-tally': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="22" x2="14" y2="68" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="26" y1="22" x2="26" y2="68" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="38" y1="22" x2="38" y2="68" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="50" y1="22" x2="50" y2="68" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="8"  y1="54" x2="58" y2="36" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="68" y1="26" x2="68" y2="68" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="82" y1="26" x2="82" y2="68" stroke="#3D6B8A" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  ),

  'list-organized': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="8" width="64" height="84" rx="6" fill="white" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="32" y="4" width="36" height="14" rx="4" fill="#3D6B8A"/>
      <line x1="28" y1="32" x2="72" y2="32" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="28" y1="46" x2="72" y2="46" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="28" y1="60" x2="72" y2="60" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="28" y1="74" x2="60" y2="74" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="22" cy="32" r="3" fill="#3D6B8A"/>
      <circle cx="22" cy="46" r="3" fill="#3D6B8A"/>
      <circle cx="22" cy="60" r="3" fill="#3D6B8A"/>
      <circle cx="22" cy="74" r="3" fill="#3D6B8A"/>
    </svg>
  ),

  // ── Letter fallbacks (colored circles with bold letter) ───────────────────

  'letter-A': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#EAF1F8" stroke="#5B8DB8" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">A</text>
    </svg>
  ),

  'letter-B': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#D4EEE3" stroke="#3D7A5E" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#2E7F84" fontFamily="Arial, sans-serif">B</text>
    </svg>
  ),

  'letter-C': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#FFF8E1" stroke="#F57C00" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#F57C00" fontFamily="Arial, sans-serif">C</text>
    </svg>
  ),

  'letter-D': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#7B1FA2" fontFamily="Arial, sans-serif">D</text>
    </svg>
  ),

  // ── Additional Numbers ──────────────────────────────────────────────────────

  'num-0': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">0</text>
    </svg>
  ),

  'num-1': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">1</text>
    </svg>
  ),

  'num-5': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">5</text>
    </svg>
  ),

  'num-8': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">8</text>
    </svg>
  ),

  'num-9': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="52" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">9</text>
    </svg>
  ),

  'num-10': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="44" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">10</text>
    </svg>
  ),

  'num-18': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="44" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">18</text>
    </svg>
  ),

  'num-24': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="44" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">24</text>
    </svg>
  ),

  'num-32': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="50" y="68" textAnchor="middle" fontSize="44" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">32</text>
    </svg>
  ),

  // ── Colors ──────────────────────────────────────────────────────────────────

  'color-red': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#EF5350" stroke="#B71C1C" strokeWidth="4"/>
      <text x="50" y="68" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">RED</text>
    </svg>
  ),

  'color-blue': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#1E88E5" stroke="#0D47A1" strokeWidth="4"/>
      <text x="50" y="68" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">BLUE</text>
    </svg>
  ),

  'color-green': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#43A047" stroke="#1B5E20" strokeWidth="4"/>
      <text x="50" y="68" textAnchor="middle" fontSize="17" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">GREEN</text>
    </svg>
  ),

  'color-yellow': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" fill="#FDD835" stroke="#F57F17" strokeWidth="4"/>
      <text x="50" y="70" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#5D4037" fontFamily="Arial, sans-serif">YELLOW</text>
    </svg>
  ),

  // ── Weather ─────────────────────────────────────────────────────────────────

  'weather-sun': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="22" fill="#FDD835" stroke="#F57F17" strokeWidth="3.5"/>
      <line x1="50" y1="6" x2="50" y2="18" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="50" y1="82" x2="50" y2="94" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="6" y1="50" x2="18" y2="50" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="82" y1="50" x2="94" y2="50" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="19" y1="19" x2="27" y2="27" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="73" y1="73" x2="81" y2="81" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="81" y1="19" x2="73" y2="27" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="27" y1="73" x2="19" y2="81" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  'weather-moon': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62 18 C36 22 20 40 24 62 C28 84 52 94 70 86 C50 86 34 72 34 52 C34 32 46 20 62 18 Z" fill="#FDD835" stroke="#F57F17" strokeWidth="3.5"/>
      <circle cx="72" cy="22" r="4" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <circle cx="82" cy="36" r="3" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <circle cx="78" cy="14" r="2.5" fill="#FDD835" stroke="#F57F17" strokeWidth="1.5"/>
    </svg>
  ),

  'weather-cloud': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="58" rx="36" ry="20" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="3.5"/>
      <circle cx="34" cy="52" r="16" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="3.5"/>
      <circle cx="58" cy="46" r="20" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="3.5"/>
    </svg>
  ),

  'weather-rain': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="38" rx="30" ry="18" fill="#90CAF9" stroke="#1565C0" strokeWidth="3"/>
      <circle cx="34" cy="32" r="13" fill="#90CAF9" stroke="#1565C0" strokeWidth="3"/>
      <circle cx="56" cy="28" r="16" fill="#90CAF9" stroke="#1565C0" strokeWidth="3"/>
      <line x1="30" y1="64" x2="24" y2="80" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="50" y1="64" x2="44" y2="80" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="70" y1="64" x2="64" y2="80" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  ),

  'weather-dark': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="84" height="84" rx="10" fill="#37474F" stroke="#263238" strokeWidth="3"/>
      <text x="50" y="56" textAnchor="middle" fontSize="38" fill="#546E7A" fontFamily="Arial, sans-serif">🌑</text>
      <text x="50" y="80" textAnchor="middle" fontSize="12" fill="#78909C" fontFamily="Arial, sans-serif">dark</text>
    </svg>
  ),

  // ── Food and Drink ───────────────────────────────────────────────────────────

  'food-snack': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="46" r="28" fill="#FFF3E0" stroke="#E65100" strokeWidth="3.5"/>
      <path d="M36 40 Q50 28 64 40 Q50 52 36 40 Z" fill="#EF6C00"/>
      <path d="M50 28 Q52 20 56 22" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <rect x="22" y="72" width="56" height="14" rx="4" fill="#FFF3E0" stroke="#E65100" strokeWidth="2.5"/>
      <text x="50" y="83" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E65100" fontFamily="Arial, sans-serif">SNACK</text>
    </svg>
  ),

  'food-sandwich': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="24" width="76" height="14" rx="7" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <rect x="16" y="38" width="68" height="10" rx="2" fill="#A5D6A7" stroke="#388E3C" strokeWidth="2"/>
      <rect x="16" y="48" width="68" height="10" rx="2" fill="#EF9A9A" stroke="#C62828" strokeWidth="2"/>
      <rect x="12" y="58" width="76" height="14" rx="7" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
    </svg>
  ),

  'food-pizza': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 12 L88 80 L12 80 Z" fill="#FFF9C4" stroke="#F57F17" strokeWidth="3.5"/>
      <path d="M50 12 L88 80 L12 80 Z" fill="#FFCC02" opacity="0.4"/>
      <circle cx="50" cy="55" r="7" fill="#EF5350"/>
      <circle cx="34" cy="68" r="5" fill="#EF5350"/>
      <circle cx="66" cy="68" r="5" fill="#EF5350"/>
      <path d="M50 12 L88 80 L12 80 Z" fill="none" stroke="#F57F17" strokeWidth="3.5"/>
    </svg>
  ),

  'food-taco': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 72 Q50 10 90 72 Z" fill="#FFCC80" stroke="#E65100" strokeWidth="3.5"/>
      <ellipse cx="50" cy="68" rx="30" ry="8" fill="#A5D6A7"/>
      <ellipse cx="50" cy="64" rx="22" ry="6" fill="#EF9A9A"/>
      <ellipse cx="50" cy="60" rx="16" ry="5" fill="#FFF9C4"/>
    </svg>
  ),

  'food-fruit': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="60" r="20" fill="#EF5350" stroke="#B71C1C" strokeWidth="3"/>
      <path d="M32 40 Q34 30 40 32" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="68" cy="60" r="18" fill="#FDD835" stroke="#F57F17" strokeWidth="3"/>
      <path d="M68 42 Q70 32 76 34" stroke="#43A047" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'cup-drink': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 24 L34 82 L66 82 L72 24 Z" fill="#E3F2FD" stroke="#1565C0" strokeWidth="3.5"/>
      <line x1="30" y1="44" x2="70" y2="44" stroke="#90CAF9" strokeWidth="2.5"/>
      <path d="M42 12 Q50 6 58 12" stroke="#1565C0" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  // ── Animals ─────────────────────────────────────────────────────────────────

  'animal-fish': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="46" cy="50" rx="28" ry="18" fill="#81D4FA" stroke="#0277BD" strokeWidth="3.5"/>
      <path d="M74 50 L90 34 L90 66 Z" fill="#81D4FA" stroke="#0277BD" strokeWidth="3.5"/>
      <circle cx="30" cy="46" r="5" fill="white" stroke="#0277BD" strokeWidth="2"/>
      <circle cx="30" cy="46" r="2.5" fill="#0277BD"/>
      <path d="M42 44 Q50 40 58 44" stroke="#0277BD" strokeWidth="2" fill="none"/>
    </svg>
  ),

  'animal-dog': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="58" rx="28" ry="22" fill="#FFCC80" stroke="#E65100" strokeWidth="3.5"/>
      <circle cx="50" cy="36" r="20" fill="#FFCC80" stroke="#E65100" strokeWidth="3.5"/>
      <ellipse cx="34" cy="26" rx="8" ry="12" fill="#FFA726" stroke="#E65100" strokeWidth="3"/>
      <ellipse cx="66" cy="26" rx="8" ry="12" fill="#FFA726" stroke="#E65100" strokeWidth="3"/>
      <circle cx="44" cy="34" r="4" fill="#37474F"/>
      <circle cx="56" cy="34" r="4" fill="#37474F"/>
      <ellipse cx="50" cy="44" rx="8" ry="6" fill="#EF9A9A" stroke="#E65100" strokeWidth="2"/>
    </svg>
  ),

  'animal-cat': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="58" rx="26" ry="22" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="3.5"/>
      <circle cx="50" cy="36" r="20" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="3.5"/>
      <path d="M32 22 L28 8 L40 18 Z" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="3"/>
      <path d="M68 22 L72 8 L60 18 Z" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="3"/>
      <circle cx="44" cy="34" r="4" fill="#37474F"/>
      <circle cx="56" cy="34" r="4" fill="#37474F"/>
      <path d="M38 44 L50 48 L62 44" stroke="#7B1FA2" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  'animal-bear': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="60" rx="26" ry="24" fill="#90CAF9" stroke="#1565C0" strokeWidth="3.5"/>
      <circle cx="50" cy="36" r="22" fill="#90CAF9" stroke="#1565C0" strokeWidth="3.5"/>
      <circle cx="32" cy="20" r="12" fill="#90CAF9" stroke="#1565C0" strokeWidth="3.5"/>
      <circle cx="68" cy="20" r="12" fill="#90CAF9" stroke="#1565C0" strokeWidth="3.5"/>
      <circle cx="44" cy="34" r="4.5" fill="#1A237E"/>
      <circle cx="56" cy="34" r="4.5" fill="#1A237E"/>
      <ellipse cx="50" cy="46" rx="10" ry="7" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
    </svg>
  ),

  'animal-generic': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="52" cy="56" rx="28" ry="20" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3.5"/>
      <circle cx="28" cy="46" r="16" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3.5"/>
      <ellipse cx="22" cy="34" rx="6" ry="10" fill="#81C784" stroke="#2E7D32" strokeWidth="3"/>
      <ellipse cx="34" cy="34" rx="6" ry="10" fill="#81C784" stroke="#2E7D32" strokeWidth="3"/>
      <circle cx="24" cy="44" r="3.5" fill="#1B5E20"/>
      <circle cx="32" cy="44" r="3.5" fill="#1B5E20"/>
      <line x1="52" y1="76" x2="44" y2="92" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="62" y1="76" x2="60" y2="92" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="72" y1="72" x2="74" y2="88" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="82" y1="66" x2="88" y2="80" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  ),

  // ── Places ──────────────────────────────────────────────────────────────────

  'playground': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="76" width="88" height="8" rx="3" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2"/>
      <rect x="12" y="34" width="8" height="44" rx="3" fill="#EF9A9A" stroke="#C62828" strokeWidth="2.5"/>
      <rect x="46" y="34" width="8" height="44" rx="3" fill="#EF9A9A" stroke="#C62828" strokeWidth="2.5"/>
      <path d="M12 34 L50 34" stroke="#EF9A9A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 50 L46 62" stroke="#FDD835" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="20" cy="52" r="5" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <rect x="62" y="26" width="8" height="52" rx="3" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <rect x="82" y="26" width="8" height="52" rx="3" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <rect x="62" y="36" width="28" height="6" rx="2" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
      <rect x="62" y="52" width="28" height="6" rx="2" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
    </svg>
  ),

  'home-house': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,8 92,42 82,42 82,88 18,88 18,42 8,42" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="40" y="62" width="20" height="26" rx="3" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <rect x="22" y="50" width="18" height="16" rx="2" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <rect x="60" y="50" width="18" height="16" rx="2" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <line x1="31" y1="50" x2="31" y2="66" stroke="#1565C0" strokeWidth="1.5"/>
      <line x1="22" y1="58" x2="40" y2="58" stroke="#1565C0" strokeWidth="1.5"/>
    </svg>
  ),

  'swimming': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="50" width="88" height="38" rx="6" fill="#E3F2FD" stroke="#1565C0" strokeWidth="3.5"/>
      <path d="M12 62 Q30 52 48 62 Q66 72 84 62" stroke="#1565C0" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="72" cy="34" r="10" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <path d="M72 44 L40 56" stroke="#EF9A9A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M60 48 L68 64" stroke="#FFCC80" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  // ── Actions / Routines ───────────────────────────────────────────────────────

  'handwash': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 38 L30 68 L70 68 L64 38" fill="#E3F2FD" stroke="#1565C0" strokeWidth="3"/>
      <path d="M40 38 L40 28 Q40 20 48 20 L52 20 Q60 20 60 28 L60 38" fill="none" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="28" cy="50" r="6" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <circle cx="72" cy="44" r="5" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <circle cx="38" cy="28" r="4" fill="#90CAF9" stroke="#1565C0" strokeWidth="2"/>
      <rect x="28" y="68" width="44" height="18" rx="5" fill="#BBDEFB" stroke="#1565C0" strokeWidth="3"/>
      <text x="50" y="81" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1565C0" fontFamily="Arial, sans-serif">WASH</text>
    </svg>
  ),

  'art-drawing': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="10" width="62" height="72" rx="4" fill="white" stroke="#3D6B8A" strokeWidth="3.5"/>
      <circle cx="36" cy="34" r="10" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <path d="M22 60 L38 44 L54 58 L66 46 L76 54" stroke="#EF5350" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <line x1="22" y1="74" x2="58" y2="74" stroke="#90CAF9" strokeWidth="3" strokeLinecap="round"/>
      <path d="M72 4 L90 22 L42 70 L24 70 L24 52 Z" fill="#FFA726" stroke="#E65100" strokeWidth="2.5"/>
    </svg>
  ),

  'art-supplies': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="42" width="50" height="40" rx="4" fill="white" stroke="#3D6B8A" strokeWidth="3"/>
      <line x1="14" y1="56" x2="52" y2="56" stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="14" y1="66" x2="44" y2="66" stroke="#EF9A9A" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="56" y="16" width="12" height="62" rx="6" fill="#EF5350" stroke="#B71C1C" strokeWidth="2.5"/>
      <path d="M56 78 L62 92 L68 78 Z" fill="#FFCC80"/>
      <rect x="72" y="20" width="10" height="58" rx="5" fill="#43A047" stroke="#1B5E20" strokeWidth="2.5"/>
      <path d="M72 78 L77 92 L82 78 Z" fill="#FFCC80"/>
      <rect x="84" y="24" width="10" height="54" rx="5" fill="#1E88E5" stroke="#0D47A1" strokeWidth="2.5"/>
      <path d="M84 78 L89 92 L94 78 Z" fill="#FFCC80"/>
    </svg>
  ),

  'plant-seed': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="68" width="52" height="20" rx="5" fill="#8D6E63" stroke="#5D4037" strokeWidth="3"/>
      <ellipse cx="50" cy="68" rx="26" ry="10" fill="#A1887F" stroke="#5D4037" strokeWidth="2"/>
      <line x1="50" y1="20" x2="50" y2="68" stroke="#43A047" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 36 Q30 30 26 16 Q42 14 50 36 Z" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2.5"/>
      <path d="M50 52 Q70 46 74 32 Q58 30 50 52 Z" fill="#81C784" stroke="#2E7D32" strokeWidth="2.5"/>
    </svg>
  ),

  'greeting-card': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="22" width="80" height="60" rx="5" fill="white" stroke="#E91E63" strokeWidth="3.5"/>
      <line x1="50" y1="22" x2="50" y2="82" stroke="#E91E63" strokeWidth="2.5" strokeDasharray="4 2"/>
      <path d="M30 42 C30 35 40 35 40 42 C40 35 50 35 50 42 C50 50 40 58 40 58 C40 58 30 50 30 42 Z" fill="#EF5350"/>
      <line x1="58" y1="46" x2="82" y2="46" stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="58" y1="55" x2="78" y2="55" stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'storyboard': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="38" height="30" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="25" y="31" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">1</text>
      <rect x="56" y="12" width="38" height="30" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="75" y="31" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">2</text>
      <rect x="6" y="56" width="38" height="30" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="25" y="75" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">3</text>
      <rect x="56" y="56" width="38" height="30" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <text x="75" y="75" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">4</text>
      <path d="M44 27 L56 27" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M54 24 L57 27 L54 30" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 71 L56 71" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M54 68 L57 71 L54 74" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M25 42 L25 56" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M22 54 L25 57 L28 54" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M75 42 L75 56" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M72 54 L75 57 L78 54" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // ── School Items ─────────────────────────────────────────────────────────────

  'school-pencil': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="38" y="10" width="24" height="72" rx="4" fill="#FDD835" stroke="#F57F17" strokeWidth="3"/>
      <path d="M38 82 L50 96 L62 82 Z" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <rect x="38" y="10" width="24" height="12" rx="4" fill="#EF9A9A" stroke="#C62828" strokeWidth="2.5"/>
      <line x1="50" y1="22" x2="50" y2="82" stroke="#F57F17" strokeWidth="1.5" strokeDasharray="4 4"/>
    </svg>
  ),

  'school-book': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="40" height="76" rx="4" fill="#EF9A9A" stroke="#C62828" strokeWidth="3"/>
      <rect x="50" y="12" width="40" height="76" rx="4" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <line x1="50" y1="12" x2="50" y2="88" stroke="#5D4037" strokeWidth="3"/>
      <line x1="18" y1="30" x2="42" y2="30" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="40" x2="42" y2="40" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="50" x2="38" y2="50" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="58" y1="30" x2="82" y2="30" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="58" y1="40" x2="82" y2="40" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="58" y1="50" x2="76" y2="50" stroke="#E65100" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'school-library': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="44" width="84" height="48" rx="4" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <polygon points="50,8 92,44 8,44" fill="#3D6B8A"/>
      <rect x="38" y="64" width="24" height="28" rx="3" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <rect x="16" y="54" width="18" height="22" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="2"/>
      <rect x="66" y="54" width="18" height="22" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="2"/>
      <text x="50" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">LIB</text>
    </svg>
  ),

  'school-backpack': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="28" width="64" height="62" rx="10" fill="#90CAF9" stroke="#1565C0" strokeWidth="3.5"/>
      <path d="M40 28 Q40 14 50 14 Q60 14 60 28" fill="none" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="30" y="50" width="40" height="28" rx="5" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2.5"/>
      <rect x="44" y="10" width="12" height="18" rx="6" fill="#1E88E5" stroke="#0D47A1" strokeWidth="2.5"/>
      <line x1="50" y1="50" x2="50" y2="78" stroke="#1565C0" strokeWidth="2.5"/>
    </svg>
  ),

  'school-homework': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="8" width="62" height="80" rx="4" fill="white" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="28" y="4" width="34" height="14" rx="4" fill="#3D6B8A"/>
      <line x1="24" y1="34" x2="66" y2="34" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="46" x2="66" y2="46" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="58" x2="66" y2="58" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="70" x2="54" y2="70" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'school-fish-tank': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="80" height="62" rx="5" fill="#E3F2FD" stroke="#1565C0" strokeWidth="3.5"/>
      <rect x="10" y="72" width="80" height="10" rx="3" fill="#A1887F" stroke="#5D4037" strokeWidth="2"/>
      <path d="M10 55 Q30 48 50 55 Q70 62 90 55" stroke="#90CAF9" strokeWidth="2.5" fill="none"/>
      <ellipse cx="38" cy="46" rx="12" ry="8" fill="#81D4FA" stroke="#0277BD" strokeWidth="2.5"/>
      <path d="M50 46 L58 40 L58 52 Z" fill="#81D4FA" stroke="#0277BD" strokeWidth="2"/>
      <circle cx="33" cy="43" r="3" fill="white" stroke="#0277BD" strokeWidth="1.5"/>
      <circle cx="33" cy="43" r="1.5" fill="#0277BD"/>
      <ellipse cx="68" cy="52" rx="9" ry="6" fill="#FFB74D" stroke="#E65100" strokeWidth="2"/>
      <path d="M77 52 L83 47 L83 57 Z" fill="#FFB74D" stroke="#E65100" strokeWidth="2"/>
    </svg>
  ),

  // ── More Devices ─────────────────────────────────────────────────────────────

  'device-speaker': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="14" width="36" height="72" rx="8" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <circle cx="40" cy="48" r="16" fill="white" stroke="#3D6B8A" strokeWidth="2.5"/>
      <circle cx="40" cy="48" r="8" fill="#3D6B8A"/>
      <circle cx="40" cy="24" r="5" fill="white" stroke="#3D6B8A" strokeWidth="2"/>
      <path d="M66 38 Q76 48 66 58" stroke="#3D6B8A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M72 30 Q86 48 72 66" stroke="#3D6B8A" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  'device-microphone': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="34" y="8" width="32" height="50" rx="16" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <path d="M22 52 Q22 76 50 76 Q78 76 78 52" stroke="#3D6B8A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="76" x2="50" y2="88" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="36" y1="88" x2="64" y2="88" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="42" y1="26" x2="58" y2="26" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="42" y1="36" x2="58" y2="36" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'device-monitor': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="88" height="60" rx="6" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="13" y="17" width="74" height="46" rx="3" fill="white" stroke="#3D6B8A" strokeWidth="1.5"/>
      <line x1="24" y1="30" x2="76" y2="30" stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="40" x2="60" y2="40" stroke="#90CAF9" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="40" y="70" width="20" height="12" fill="#3D6B8A"/>
      <rect x="28" y="82" width="44" height="8" rx="3" fill="#3D6B8A"/>
    </svg>
  ),

  'device-headphones': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 50 Q18 18 50 18 Q82 18 82 50" stroke="#3D6B8A" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <rect x="8" y="48" width="20" height="30" rx="8" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="72" y="48" width="20" height="30" rx="8" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
    </svg>
  ),

  // ── Tech Actions ──────────────────────────────────────────────────────────────

  'search-icon': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="28" width="88" height="26" rx="13" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="36" y="47" textAnchor="middle" fontSize="16" fill="#3D6B8A" fontFamily="Arial, sans-serif">search</text>
      <circle cx="66" cy="62" r="16" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <line x1="77" y1="73" x2="88" y2="84" stroke="#3D6B8A" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  ),

  'log-off-icon': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="16" width="50" height="68" rx="6" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <line x1="62" y1="50" x2="90" y2="50" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M78 38 L92 50 L78 62" fill="none" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="24" y1="38" x2="50" y2="38" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="50" x2="50" y2="50" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="24" y1="62" x2="44" y2="62" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'power-button-icon': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="52" r="34" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <path d="M34 30 Q20 40 20 52 Q20 76 50 76 Q80 76 80 52 Q80 40 66 30" stroke="#3D6B8A" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="20" x2="50" y2="52" stroke="#3D6B8A" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  ),

  'app-tap': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="56" height="70" rx="8" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="20" y="22" width="18" height="18" rx="4" fill="#EF5350"/>
      <rect x="42" y="22" width="18" height="18" rx="4" fill="#FDD835"/>
      <rect x="20" y="44" width="18" height="18" rx="4" fill="#43A047"/>
      <rect x="42" y="44" width="18" height="18" rx="4" fill="#1E88E5"/>
      <path d="M72 62 L72 82 L80 76 L86 88 L90 86 L84 74 L92 74 Z" fill="#3D6B8A"/>
    </svg>
  ),

  // ── Coding ───────────────────────────────────────────────────────────────────

  'robot-forward': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="34" width="40" height="36" rx="6" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="30" y="16" width="28" height="22" rx="5" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <line x1="44" y1="16" x2="44" y2="10" stroke="#3D6B8A" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="44" cy="8" r="3.5" fill="#3D6B8A"/>
      <circle cx="37" cy="26" r="4" fill="#1E88E5"/>
      <circle cx="51" cy="26" r="4" fill="#1E88E5"/>
      <rect x="18" y="48" width="8" height="18" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <rect x="62" y="48" width="8" height="18" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <line x1="74" y1="52" x2="90" y2="52" stroke="#43A047" strokeWidth="4" strokeLinecap="round"/>
      <path d="M84 44 L92 52 L84 60" fill="none" stroke="#43A047" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  'robot-wrong': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="34" width="40" height="36" rx="6" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="30" y="16" width="28" height="22" rx="5" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <line x1="44" y1="16" x2="44" y2="10" stroke="#3D6B8A" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="44" cy="8" r="3.5" fill="#3D6B8A"/>
      <circle cx="37" cy="26" r="4" fill="#1E88E5"/>
      <circle cx="51" cy="26" r="4" fill="#1E88E5"/>
      <rect x="18" y="48" width="8" height="18" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <rect x="62" y="48" width="8" height="18" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <line x1="74" y1="44" x2="88" y2="58" stroke="#EF5350" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="88" y1="44" x2="74" y2="58" stroke="#EF5350" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  ),

  'code-blocks': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="36" height="22" rx="5" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <text x="26" y="29" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">say</text>
      <path d="M44 25 L56 25" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M54 22 L57 25 L54 28" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <rect x="56" y="14" width="36" height="22" rx="5" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="3"/>
      <text x="74" y="29" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32" fontFamily="Arial, sans-serif">move</text>
      <rect x="8" y="46" width="36" height="22" rx="5" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <text x="26" y="61" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E65100" fontFamily="Arial, sans-serif">turn</text>
      <path d="M44 57 L56 57" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M54 54 L57 57 L54 60" fill="none" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <rect x="56" y="46" width="36" height="22" rx="5" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="3"/>
      <text x="74" y="61" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7B1FA2" fontFamily="Arial, sans-serif">jump</text>
      <text x="50" y="92" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="Arial, sans-serif">code blocks</text>
    </svg>
  ),

  'loop-arrows': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 50 Q18 20 50 20 Q82 20 82 50 Q82 80 50 80 Q28 80 18 64" stroke="#1E88E5" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M18 72 L14 62 L24 64" fill="none" stroke="#1E88E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="34" y="38" width="32" height="24" rx="4" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="2.5"/>
      <text x="50" y="54" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1E88E5" fontFamily="Arial, sans-serif">repeat</text>
    </svg>
  ),

  'conditional-if': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 82,40 50,70 18,40" fill="#FFF9C4" stroke="#F57F17" strokeWidth="3.5"/>
      <text x="50" y="44" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#E65100" fontFamily="Arial, sans-serif">IF?</text>
      <line x1="50" y1="70" x2="28" y2="88" stroke="#43A047" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="70" x2="72" y2="88" stroke="#EF5350" strokeWidth="3" strokeLinecap="round"/>
      <text x="22" y="98" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#43A047" fontFamily="Arial, sans-serif">YES</text>
      <text x="78" y="98" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EF5350" fontFamily="Arial, sans-serif">NO</text>
    </svg>
  ),

  'variable-box': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="28" width="80" height="48" rx="6" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="3.5"/>
      <rect x="10" y="28" width="80" height="18" rx="6" fill="#7B1FA2"/>
      <text x="50" y="41" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">score = 10</text>
      <text x="50" y="65" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#7B1FA2" fontFamily="Arial, sans-serif">10</text>
    </svg>
  ),

  // ── Digital Citizenship ───────────────────────────────────────────────────────

  'cyberbully-msg': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="70" height="44" rx="8" fill="#FFEBEE" stroke="#C62828" strokeWidth="3.5"/>
      <path d="M30 64 L16 78 L8 64" fill="#FFEBEE" stroke="#C62828" strokeWidth="3"/>
      <text x="43" y="46" textAnchor="middle" fontSize="28" fontFamily="Arial, sans-serif">😡</text>
      <circle cx="80" cy="76" r="16" fill="#FFEBEE" stroke="#C62828" strokeWidth="3"/>
      <line x1="70" y1="66" x2="90" y2="86" stroke="#C62828" strokeWidth="4" strokeLinecap="round"/>
      <line x1="90" y1="66" x2="70" y2="86" stroke="#C62828" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  'kind-message': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="70" height="44" rx="8" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3.5"/>
      <path d="M30 64 L16 78 L8 64" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3"/>
      <path d="M28 38 C28 32 36 32 36 38 C36 32 44 32 44 38 C44 44 36 50 36 50 C36 50 28 44 28 38 Z" fill="#EF5350"/>
      <line x1="52" y1="38" x2="70" y2="38" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
      <line x1="52" y1="50" x2="66" y2="50" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="80" cy="76" r="16" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3"/>
      <path d="M72 76 L78 82 L90 68" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  'password-strong': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 6 L84 20 L84 50 C84 70 66 84 50 92 C34 84 16 70 16 50 L16 20 Z" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3.5"/>
      <text x="50" y="46" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1B5E20" fontFamily="Arial, sans-serif">mR.b3aR</text>
      <text x="50" y="62" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1B5E20" fontFamily="Arial, sans-serif">$9!</text>
      <path d="M34 72 L44 82 L68 60" stroke="#2E7D32" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  'report-adult': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="34" cy="22" r="14" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <path d="M14 62 Q14 44 34 44 Q54 44 54 62" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <path d="M54 38 L66 38 L66 52 L72 46 L78 46 L78 62 L54 62 Z" fill="#FFF8E1" stroke="#F57F17" strokeWidth="2.5"/>
      <text x="66" y="56" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#F57F17" fontFamily="Arial, sans-serif">!</text>
      <circle cx="78" cy="30" r="12" fill="#FFF8E1" stroke="#F57F17" strokeWidth="2.5"/>
      <text x="78" y="34" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#F57F17" fontFamily="Arial, sans-serif">!</text>
    </svg>
  ),

  // ── Concepts ─────────────────────────────────────────────────────────────────

  'brainstorm-group': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="28" r="12" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <circle cx="50" cy="18" r="12" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <circle cx="78" cy="28" r="12" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="2.5"/>
      <rect x="6" y="38" width="28" height="18" rx="5" fill="#FFF9C4" stroke="#F57F17" strokeWidth="2"/>
      <text x="20" y="50" textAnchor="middle" fontSize="11" fill="#E65100" fontFamily="Arial, sans-serif">idea!</text>
      <rect x="36" y="28" width="28" height="18" rx="5" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="2"/>
      <text x="50" y="40" textAnchor="middle" fontSize="11" fill="#2E7D32" fontFamily="Arial, sans-serif">idea!</text>
      <rect x="66" y="38" width="28" height="18" rx="5" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="2"/>
      <text x="80" y="50" textAnchor="middle" fontSize="11" fill="#7B1FA2" fontFamily="Arial, sans-serif">idea!</text>
      <path d="M22 40 L14 56" stroke="#F57F17" strokeWidth="2"/>
      <path d="M50 30 L50 46" stroke="#2E7D32" strokeWidth="2"/>
      <path d="M78 40 L86 56" stroke="#7B1FA2" strokeWidth="2"/>
      <text x="50" y="84" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">brainstorm!</text>
    </svg>
  ),

  'teamwork': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="24" r="12" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <circle cx="70" cy="24" r="12" fill="#90CAF9" stroke="#1565C0" strokeWidth="3"/>
      <path d="M10 64 Q10 46 30 46 Q50 46 50 64" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <path d="M50 64 Q50 46 70 46 Q90 46 90 64" fill="#90CAF9" stroke="#1565C0" strokeWidth="3"/>
      <path d="M38 58 C38 50 46 50 46 58 C46 50 54 50 54 58 C54 66 46 72 46 72 C46 72 38 66 38 58 Z" fill="#EF5350"/>
    </svg>
  ),

  'design-improve': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="22" width="32" height="30" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="3"/>
      <text x="24" y="41" textAnchor="middle" fontSize="18" fontFamily="Arial, sans-serif">🔬</text>
      <path d="M40 38 L52 38" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M50 35 L53 38 L50 41" fill="none" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="52" y="22" width="32" height="30" rx="4" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3"/>
      <path d="M60 38 L70 48 L84 30" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">test → improve</text>
    </svg>
  ),

  'community-tech': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="28" fill="none" stroke="#90CAF9" strokeWidth="3"/>
      <ellipse cx="50" cy="50" rx="14" ry="28" fill="none" stroke="#90CAF9" strokeWidth="2"/>
      <line x1="22" y1="50" x2="78" y2="50" stroke="#90CAF9" strokeWidth="2"/>
      <line x1="28" y1="30" x2="72" y2="30" stroke="#90CAF9" strokeWidth="2"/>
      <line x1="28" y1="70" x2="72" y2="70" stroke="#90CAF9" strokeWidth="2"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#1565C0" strokeWidth="3.5"/>
      <circle cx="20" cy="50" r="8" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <circle cx="80" cy="50" r="8" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2.5"/>
      <circle cx="50" cy="20" r="8" fill="#EDE7F6" stroke="#7B1FA2" strokeWidth="2.5"/>
      <path d="M28 50 L42 50" stroke="#F57F17" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M58 50 L72 50" stroke="#43A047" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M50 28 L50 42" stroke="#7B1FA2" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'email-fast': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="28" width="64" height="46" rx="5" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <path d="M8 34 L40 58 L72 34" stroke="#3D6B8A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <line x1="76" y1="38" x2="92" y2="38" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="78" y1="50" x2="96" y2="50" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
      <line x1="80" y1="62" x2="94" y2="62" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),

  // ── Keyboard Keys ─────────────────────────────────────────────────────────────

  'key-spacebar': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="32" width="88" height="36" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="14" y="42" width="72" height="16" rx="4" fill="white" stroke="#3D6B8A" strokeWidth="2"/>
      <text x="50" y="54" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">SPACE BAR</text>
    </svg>
  ),

  'key-backspace': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="26" width="88" height="48" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <path d="M36 40 L18 50 L36 60 L36 40 Z" fill="#EF5350" stroke="#C62828" strokeWidth="2"/>
      <line x1="50" y1="42" x2="80" y2="58" stroke="#C62828" strokeWidth="4" strokeLinecap="round"/>
      <line x1="80" y1="42" x2="50" y2="58" stroke="#C62828" strokeWidth="4" strokeLinecap="round"/>
      <text x="62" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">backspace</text>
    </svg>
  ),

  'key-enter': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="26" width="88" height="48" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <path d="M74 38 L74 52 L30 52" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M34 45 L28 52 L34 59" fill="none" stroke="#3D6B8A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">ENTER</text>
    </svg>
  ),

  'key-shift': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="26" width="88" height="48" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <polygon points="50,30 70,50 60,50 60,62 40,62 40,50 30,50" fill="#3D6B8A" opacity="0.7"/>
      <text x="50" y="82" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">SHIFT ⇧</text>
    </svg>
  ),

  'key-numbers-row': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="14" width="92" height="26" rx="5" fill="#FDD835" stroke="#F57F17" strokeWidth="3"/>
      <rect x="4" y="42" width="92" height="52" rx="5" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <text x="50" y="32" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#E65100" fontFamily="Arial, sans-serif">1 2 3 4 5 6</text>
      <text x="50" y="65" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="Arial, sans-serif">Q W E R T Y</text>
      <text x="50" y="82" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="Arial, sans-serif">A S D F G H</text>
    </svg>
  ),

  // ── Ergonomics ────────────────────────────────────────────────────────────────

  'sit-straight': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="11" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <rect x="42" y="29" width="16" height="30" rx="4" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <rect x="16" y="56" width="68" height="8" rx="3" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2.5"/>
      <line x1="50" y1="59" x2="50" y2="80" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="30" y1="38" x2="44" y2="44" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="70" y1="38" x2="56" y2="44" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="40" y1="80" x2="40" y2="90" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="60" y1="80" x2="60" y2="90" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M30 90 L40 90 M60 90 L70 90" stroke="#1565C0" strokeWidth="3" strokeLinecap="round"/>
      <path d="M46 10 L54 10 M54 10 L56 6" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'slouching': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="38" cy="22" r="11" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <path d="M38 33 Q50 44 54 58" stroke="#EF9A9A" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <rect x="16" y="56" width="68" height="8" rx="3" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2.5"/>
      <line x1="54" y1="60" x2="58" y2="80" stroke="#EF9A9A" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="20" y1="36" x2="36" y2="40" stroke="#EF9A9A" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M62 22 L66 16 L72 22 L66 28 Z" fill="#EF5350" stroke="#C62828" strokeWidth="2"/>
    </svg>
  ),

  'feet-flat': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="11" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <rect x="40" y="29" width="20" height="32" rx="4" fill="#90CAF9" stroke="#1565C0" strokeWidth="2.5"/>
      <rect x="10" y="54" width="80" height="8" rx="3" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2.5"/>
      <line x1="38" y1="61" x2="38" y2="80" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="62" y1="61" x2="62" y2="80" stroke="#1565C0" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="24" y="80" width="28" height="10" rx="4" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <rect x="48" y="80" width="28" height="10" rx="4" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <path d="M36 80 L36 80" stroke="#2E7D32" strokeWidth="2"/>
      <path d="M46 10 L54 10" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),

  'hands-homerow': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="28" width="90" height="50" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <rect x="12" y="36" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1.5"/>
      <rect x="25" y="36" width="10" height="8" rx="2" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <rect x="38" y="36" width="10" height="8" rx="2" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <rect x="51" y="36" width="10" height="8" rx="2" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <rect x="64" y="36" width="10" height="8" rx="2" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <rect x="77" y="36" width="10" height="8" rx="2" fill="white" stroke="#3D6B8A" strokeWidth="1.5"/>
      <text x="50" y="62" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E65100" fontFamily="Arial, sans-serif">A S D F J K</text>
      <text x="50" y="72" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Arial, sans-serif">home row</text>
    </svg>
  ),

  'hands-stretch': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="22" r="11" fill="#FFCC80" stroke="#E65100" strokeWidth="3"/>
      <path d="M50 33 L50 60" stroke="#90CAF9" strokeWidth="4" strokeLinecap="round"/>
      <path d="M20 40 L50 52 L80 40" stroke="#90CAF9" strokeWidth="4" strokeLinecap="round"/>
      <path d="M20 40 L10 28" stroke="#FFCC80" strokeWidth="4" strokeLinecap="round"/>
      <path d="M80 40 L90 28" stroke="#FFCC80" strokeWidth="4" strokeLinecap="round"/>
      <path d="M16 26 L6 20" stroke="#FFCC80" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M84 26 L94 20" stroke="#FFCC80" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M50 60 L40 78" stroke="#90CAF9" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M50 60 L60 78" stroke="#90CAF9" strokeWidth="3.5" strokeLinecap="round"/>
      <text x="50" y="95" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1565C0" fontFamily="Arial, sans-serif">take a break!</text>
    </svg>
  ),

  // ── More Concepts ─────────────────────────────────────────────────────────────

  'wrong-items': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 30 Q20 14 28 14 Q32 14 34 18 L34 30" fill="none" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="14" y="30" width="22" height="44" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <path d="M64 18 L78 40 L64 40 L64 18 Z" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <rect x="60" y="40" width="22" height="36" rx="3" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <line x1="8" y1="8" x2="92" y2="92" stroke="#EF5350" strokeWidth="6" strokeLinecap="round"/>
      <line x1="92" y1="8" x2="8" y2="92" stroke="#EF5350" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  ),

  'data-collect': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="12" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <path d="M14 56 Q14 42 28 42 Q42 42 42 56" fill="#FFCC80" stroke="#E65100" strokeWidth="2.5"/>
      <path d="M44 38 L52 38" stroke="#3D6B8A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 35 L53 38 L50 41" fill="none" stroke="#3D6B8A" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="52" y="26" width="40" height="56" rx="5" fill="white" stroke="#3D6B8A" strokeWidth="3"/>
      <line x1="60" y1="40" x2="84" y2="40" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60" y1="50" x2="84" y2="50" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60" y1="60" x2="78" y2="60" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60" y1="70" x2="80" y2="70" stroke="#3D6B8A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  'keywords-search': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="18" width="88" height="28" rx="7" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3.5"/>
      <text x="46" y="36" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3D6B8A" fontFamily="Arial, sans-serif">butterfly</text>
      <circle cx="80" cy="32" r="9" fill="#EAF1F8" stroke="#3D6B8A" strokeWidth="3"/>
      <line x1="87" y1="39" x2="94" y2="46" stroke="#3D6B8A" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="14" y="56" width="32" height="14" rx="4" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
      <text x="30" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#E65100" fontFamily="Arial, sans-serif">keyword</text>
      <rect x="52" y="56" width="32" height="14" rx="4" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2"/>
      <text x="68" y="66" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2E7D32" fontFamily="Arial, sans-serif">keyword</text>
      <text x="50" y="86" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="Arial, sans-serif">search words</text>
    </svg>
  ),

  'pictograph': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="82" x2="92" y2="82" stroke="#64748b" strokeWidth="2.5"/>
      <line x1="14" y1="14" x2="14" y2="82" stroke="#64748b" strokeWidth="2.5"/>
      <text x="26" y="52" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍎</text>
      <text x="26" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍎</text>
      <text x="50" y="34" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍌</text>
      <text x="50" y="52" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍌</text>
      <text x="50" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍌</text>
      <text x="74" y="52" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍇</text>
      <text x="74" y="70" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">🍇</text>
      <text x="26" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Arial, sans-serif">apple</text>
      <text x="50" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Arial, sans-serif">banana</text>
      <text x="74" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Arial, sans-serif">grape</text>
    </svg>
  ),

  'chart-labels': () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="88" height="12" rx="3" fill="#3D6B8A"/>
      <text x="50" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">FAVORITE PETS</text>
      <line x1="14" y1="78" x2="92" y2="78" stroke="#64748b" strokeWidth="2.5"/>
      <line x1="14" y1="22" x2="14" y2="78" stroke="#64748b" strokeWidth="2.5"/>
      <rect x="22" y="50" width="14" height="28" rx="2" fill="#5B8DB8"/>
      <text x="29" y="90" textAnchor="middle" fontSize="7" fill="#64748b" fontFamily="Arial, sans-serif">dog</text>
      <rect x="44" y="30" width="14" height="48" rx="2" fill="#3D6B8A"/>
      <text x="51" y="90" textAnchor="middle" fontSize="7" fill="#64748b" fontFamily="Arial, sans-serif">cat</text>
      <rect x="66" y="42" width="14" height="36" rx="2" fill="#5B8DB8"/>
      <text x="73" y="90" textAnchor="middle" fontSize="7" fill="#64748b" fontFamily="Arial, sans-serif">fish</text>
    </svg>
  ),
};

// ── Text → icon matching ────────────────────────────────────────────────────

export function getVisualForOption(text, letter) {
  const t = (text || '').toLowerCase().trim();
  const l = (letter || 'A').toUpperCase();

  // Steps / sequences
  if (/\bone big step\b|^one step$/.test(t)) return 'steps-one';
  if (/many small step|multiple step|smaller step|several step|4 step|four step/.test(t)) return 'steps-few';
  if (/^no steps?$|without step|zero step|no step/.test(t)) return 'steps-none';
  if (/in order|step.by.step|1.*2.*3|first.*next.*last|first.*second.*third/.test(t)) return 'steps-ordered';
  if (/^forward \d|^turn (right|left)|^go (right|left)|code sequence/.test(t)) return 'steps-ordered';

  // Numbers (standalone)
  if (/^2$/.test(t)) return 'num-2';
  if (/^3$/.test(t)) return 'num-3';
  if (/^4$/.test(t)) return 'num-4';

  // Patterns / shapes
  if (/^circle$/.test(t)) return 'shape-circle';
  if (/^square$/.test(t)) return 'shape-square';
  if (/^triangle$/.test(t)) return 'shape-triangle';
  if (/red.*blue|blue.*red|circle.*square|square.*circle/.test(t)) return 'pattern-ab';

  // Technology devices
  if (/\btablet\b|\bipad\b/.test(t)) return 'device-tablet';
  if (/\bcomputer\b|\bdesktop\b|\bmonitor\b|\blaptop\b/.test(t)) return 'device-computer';
  if (/\bkeyboard\b/.test(t)) return 'device-keyboard';
  if (/\bmouse\b/.test(t) && !/house|mouse.*animal/.test(t)) return 'device-mouse';
  if (/\bprint(er)?\b/.test(t)) return 'device-printer';

  // Safety / privacy
  if (/\bpassword\b|\bpersonal info|\bprivate info/.test(t)) return 'lock';
  if (/\bshield\b|\bstay safe|\bprotect\b/.test(t)) return 'shield';
  if (/\bstop\b.*shar|never share|don't share/.test(t)) return 'stop';
  if (/\bdanger\b|\bcareful\b|\bwarn/.test(t)) return 'warning';

  // Correct / wrong answers
  if (/^(yes|correct|true)$|^right$/.test(t)) return 'checkmark';
  if (/^(no|wrong|incorrect|false)$/.test(t)) return 'x-wrong';
  if (/follow the steps|right way|do it correctly|the correct/.test(t)) return 'checkmark';

  // People
  if (/raise.*(hand|your hand)|hand.*up/.test(t)) return 'person-hand-up';
  if (/sharing|share.*with|work together|take turns|help each other/.test(t)) return 'person-share';
  if (/tell.*teacher|ask.*teacher|trusted adult|ask.*adult/.test(t)) return 'person-teacher';

  // Ideas / saving
  if (/\bbrainstorm|\bthink of.*idea|\bideas?\b/.test(t)) return 'lightbulb';
  if (/save.*work|save.*file|save.*first/.test(t)) return 'save-icon';

  // Faces / emotions
  if (/\bhappy\b|\bexcited\b|\bgreat\b.*feel|\bsmile/.test(t)) return 'face-happy';
  if (/\bsad\b|\bupset\b|\bbad\b.*feel|\bunhappy/.test(t)) return 'face-sad';
  if (/confus|not sure|unsure/.test(t)) return 'face-confused';

  // Data / charts
  if (/\bchart\b|\bbar graph|\bgraph\b/.test(t)) return 'chart-bar';
  if (/\btally\b|\bcount.*mark/.test(t)) return 'chart-tally';
  if (/\blist\b|\borganiz|\bclipboard/.test(t)) return 'list-organized';

  // Word markers
  if (/^first$/.test(t)) return 'steps-one';
  if (/^last$|^finally$/.test(t)) return 'checkmark';

  // Fallback: letter badge
  if (l === 'B') return 'letter-B';
  if (l === 'C') return 'letter-C';
  if (l === 'D') return 'letter-D';
  return 'letter-A';
}

// ── VisualIcon component ────────────────────────────────────────────────────

export function VisualIcon({ iconKey, size = 80 }) {
  const Comp = icons[iconKey] || icons['letter-A'];
  return (
    <div style={{ width: size, height: size, flexShrink: 0 }}>
      <Comp />
    </div>
  );
}
