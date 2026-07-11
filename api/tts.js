const ALLOWED_ORIGINS = [
  'https://www.techgrowthcheck.com',
  'https://techgrowthcheck.com',
  'http://localhost:3000',
];

const MAX_TEXT_LENGTH = 1000;

module.exports = async (req, res) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text } = req.body || {};
  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Missing or invalid text.' });
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return res.status(400).json({ error: `Text too long (max ${MAX_TEXT_LENGTH} characters).` });
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
    res.status(200).send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('[tts] Unexpected error:', err.message);
    res.status(500).json({ error: 'Text-to-speech request failed.' });
  }
};
