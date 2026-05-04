module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, school, district, comments } = req.body || {};
  if (!name || !email || !school) {
    return res.status(400).json({ error: 'Missing required fields: name, email, school' });
  }

  try {
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(
      process.env.REACT_APP_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY
    );

    const { error } = await supabase.from('beta_signups').insert([{
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      school: String(school).trim(),
      district: String(district || '').trim(),
      comments: String(comments || '').trim(),
    }]);

    if (error) {
      console.error('[beta-signup] Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error('[beta-signup] Error:', err);
    res.status(500).json({ error: err.message });
  }
};
