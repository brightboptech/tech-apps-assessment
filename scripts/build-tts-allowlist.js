// Builds api/_ttsAllowlist.json: hashes of every string the student screen can send
// to /api/tts — each question's text and each answer choice as "<letter>. <text>"
// (see the speak() calls in src/App.js). Runs before every `npm run build` (prebuild).
// On Vercel (VERCEL=1) it only checks: a stale committed file fails the build, so a
// deploy can never serve an allowlist that doesn't match the question bank.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const SRC = path.join(__dirname, '..', 'src');
const OUT = path.join(__dirname, '..', 'api', '_ttsAllowlist.json');

const hashText = text => crypto.createHash('sha256').update(text, 'utf8').digest('hex').slice(0, 32);

function loadQuestionFile(file) {
  const code = fs.readFileSync(path.join(SRC, file), 'utf8');
  const exportsObj = {};
  // Each file is a single `export const gradeXQuestions = [...]` with no imports.
  vm.runInNewContext(code.replace(/^export const (\w+) =/m, 'exports.$1 ='), { exports: exportsObj });
  const arrays = Object.values(exportsObj);
  if (arrays.length !== 1 || !Array.isArray(arrays[0])) throw new Error(`${file}: expected exactly one exported question array`);
  return arrays[0];
}

const files = fs.readdirSync(SRC).filter(f => /^grade(K|\d)Questions\.js$/.test(f)).sort();
if (files.length !== 9) throw new Error(`expected 9 question files (K–8), found ${files.length}`);

const texts = new Set();
for (const file of files) {
  for (const q of loadQuestionFile(file)) {
    texts.add(q.text);                                               // speak(currentQ.text)
    for (const o of q.options) texts.add(`${o.letter}. ${o.text}`);   // speak(`${option.letter}. ${option.text}`)
  }
}
const json = JSON.stringify({ count: texts.size, hashes: [...texts].map(hashText).sort() }) + '\n';

if (process.env.VERCEL === '1') {
  const committed = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  if (committed !== json) {
    console.error('api/_ttsAllowlist.json is out of date with src/grade*Questions.js — run `npm run build` locally and commit it.');
    process.exit(1);
  }
  console.log(`TTS allowlist up to date (${texts.size} strings).`);
} else {
  fs.writeFileSync(OUT, json);
  console.log(`TTS allowlist written: ${texts.size} strings → api/_ttsAllowlist.json`);
}
