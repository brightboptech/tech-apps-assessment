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

  const cleanName     = String(name).trim();
  const cleanEmail    = String(email).trim().toLowerCase();
  const cleanSchool   = String(school).trim();
  const cleanDistrict = String(district || '').trim();
  const cleanComments = String(comments || '').trim();

  const results = { supabase: false, email: false };

  // ── Save to Supabase ─────────────────────────────────────────────────────
  try {
    const { createClient } = require('@supabase/supabase-js');
    const sbUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
    const sbKey = process.env.SUPABASE_SERVICE_KEY || process.env.REACT_APP_SUPABASE_ANON_KEY;

    if (sbUrl && sbKey) {
      const supabase = createClient(sbUrl, sbKey);
      const { error: dbErr } = await supabase.from('beta_signups').insert([{
        name: cleanName, email: cleanEmail, school: cleanSchool,
        district: cleanDistrict, comments: cleanComments,
      }]);
      if (dbErr) {
        console.error('[beta-signup] Supabase error:', dbErr.message);
        if (dbErr.code === '42P01') {
          console.info('[beta-signup] Create table with:\n' +
            'CREATE TABLE beta_signups (\n' +
            '  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n' +
            '  name TEXT NOT NULL,\n' +
            '  email TEXT NOT NULL,\n' +
            '  school TEXT NOT NULL,\n' +
            '  district TEXT,\n' +
            '  comments TEXT,\n' +
            '  created_at TIMESTAMPTZ DEFAULT NOW()\n);\n' +
            'ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;\n' +
            'CREATE POLICY "Anyone can insert" ON beta_signups FOR INSERT WITH CHECK (true);'
          );
        }
      } else {
        results.supabase = true;
      }
    }
  } catch (e) {
    console.error('[beta-signup] Supabase exception:', e.message);
  }

  // ── Send email notification via Resend ───────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'TechGrowth Check <onboarding@resend.dev>',
          to: ['brightboptech@gmail.com'],
          subject: `New Beta Signup: ${cleanName}`,
          html: `
            <h2 style="color:#3D6B8A">New Beta Signup — TechGrowth Check</h2>
            <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
              <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600">Name</td><td>${cleanName}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600">Email</td><td><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600">School</td><td>${cleanSchool}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600">District</td><td>${cleanDistrict || '—'}</td></tr>
              <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Comments</td><td>${cleanComments || '—'}</td></tr>
            </table>
          `,
        }),
      });
      if (emailRes.ok) {
        results.email = true;
      } else {
        const body = await emailRes.text();
        console.error('[beta-signup] Resend error:', body);
      }
    } catch (e) {
      console.error('[beta-signup] Resend exception:', e.message);
    }
  } else {
    console.warn('[beta-signup] RESEND_API_KEY not set — skipping email notification');
  }

  // Email is optional — success depends only on the Supabase insert
  if (!results.supabase) {
    return res.status(500).json({ error: 'Could not save signup — check server logs.' });
  }

  res.json({ ok: true, ...results });
};
