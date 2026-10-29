const { applyCors } = require('./_cors');
const { checkRateLimit, getClientKey } = require('./_rateLimit');
const crypto = require('crypto');
// Generated from src/grade*Questions.js by scripts/build-tts-allowlist.js (prebuild).
const ALLOWED_HASHES = new Set(require('./_ttsAllowlist.json').hashes);
const hashText = text => crypto.createHash('sha256').update(text, 'utf8').digest('hex').slice(0, 32);

const MAX_TEXT_LENGTH = 1000;
// The question bank is fixed, so identical text always yields identical audio.
// GET responses carry s-maxage so Vercel's CDN serves repeats without invoking
// this function — a class on one school IP only spends rate limit on cache misses.
// POST stays (uncached) for students still on a page loaded from an older build.
const RATE_LIMIT_PER_HOUR = 120;

module.exports = async (req, res) => {
  applyCors(req, res, 'GET, POST, OPTIONS');
  res.setHeader('Cache-Control', 'no-store'); // replaced on a successful GET below

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET' && req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const text = req.method === 'GET' ? req.query.text : (req.body || {}).text;
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Missing or invalid text.' });
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return res.status(400).json({ error: `Text too long (max ${MAX_TEXT_LENGTH} characters).` });
  }
  // Only question-bank text can reach ElevenLabs (caps credit spend; exact match, no normalising).
  if (!ALLOWED_HASHES.has(hashText(text))) {
    return res.status(400).json({ error: 'Text is not in the question bank.' });
  }

  const allowed = await checkRateLimit('tts', getClientKey(req), RATE_LIMIT_PER_HOUR, 3600);
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;
  if (!apiKey || !voiceId) {
    console.error('[tts] ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID env var is not set');
    return res.status(500).json({ error: 'Text-to-speech is not configured on the server.' });
  }

  try {
    const elevenRes = await fetch(
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

    if (!elevenRes.ok) {
      const errBody = await elevenRes.text();
      console.error('[tts] ElevenLabs error:', elevenRes.status, errBody);
      return res.status(502).json({ error: 'Text-to-speech provider error.' });
    }

    const arrayBuffer = await elevenRes.arrayBuffer();
    res.setHeader('Content-Type', elevenRes.headers.get('content-type') || 'audio/mpeg');
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=31536000, immutable');
    }
    res.status(200).send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('[tts] Unexpected error:', err.message);
    res.status(500).json({ error: 'Text-to-speech request failed.' });
  }
};
