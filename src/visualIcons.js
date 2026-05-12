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
