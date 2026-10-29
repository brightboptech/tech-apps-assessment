const { applyCors } = require('./_cors');
const { createClient } = require('@supabase/supabase-js');
const { safeMailto } = require('./_escapeHtml');
const { buildBetaWelcomeEmail } = require('./_betaWelcomeEmail');

// Must match ADMIN_EMAIL in src/App.js and the owner RLS policies.
const ADMIN_EMAIL = 'brightboptech@gmail.com';

// Called by the admin page right after it creates a beta code. Owner-only: the
// caller's Supabase session must belong to ADMIN_EMAIL. Reads the code and
// recipient from the database itself, so the browser only sends the row id.
module.exports = async (req, res) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!supabaseUrl || !supabaseServiceKey || !resendKey) {
    console.error('[send-beta-welcome] Missing required env vars');
    return res.status(500).json({ error: 'Not configured on the server.' });
  }
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

  // 401 = no valid session at all; 403 = a real logged-in user who isn't the owner.
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  const { data: userData, error: authErr } = await supabaseAdmin.auth.getUser(token);
  if (authErr || !userData?.user) return res.status(401).json({ error: 'Unauthorized' });
  if ((userData.user.email || '').toLowerCase() !== ADMIN_EMAIL) {
    console.error('[send-beta-welcome] Forbidden: caller is not the owner account');
    return res.status(403).json({ error: 'Forbidden' });
  }

  const { codeId } = req.body || {};
  if (!codeId) return res.status(400).json({ error: 'Missing codeId.' });

  const { data: row, error: rowErr } = await supabaseAdmin
    .from('beta_codes')
    .select('id, code, recipient_email, expires_at')
    .eq('id', codeId)
    .maybeSingle();
  if (rowErr) {
    console.error('[send-beta-welcome] Could not load beta code:', rowErr.message);
    return res.status(500).json({ error: 'Could not load beta code.' });
  }
  if (!row) return res.status(404).json({ error: 'Beta code not found.' });

  const to = String(row.recipient_email || '').trim();
  if (!safeMailto(to)) return res.status(400).json({ error: 'This code has no valid recipient email.' });

  const msg = buildBetaWelcomeEmail({ code: row.code, expiresAt: row.expires_at });

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'TechGrowth Check <info@techgrowthcheck.com>',
        to: [to],
        reply_to: 'info@techgrowthcheck.com',
        subject: msg.subject,
        text: msg.text,
        html: msg.html,
      }),
    });

    if (!emailRes.ok) {
      const body = await emailRes.text();
      console.error(`[send-beta-welcome] Welcome email NOT sent for ${row.code} — Resend HTTP ${emailRes.status}:`, body);
      return res.status(502).json({ error: 'The welcome email could not be sent.' });
    }
    const { id } = await emailRes.json().catch(() => ({}));
    console.log(`[send-beta-welcome] Welcome email sent for ${row.code}, Resend id:`, id);

    // The welcome is the first contact, so the weekly reminder waits 7 days from now.
    const { error: updErr } = await supabaseAdmin
      .from('beta_codes')
      .update({ last_reminder_sent_at: new Date().toISOString() })
      .eq('id', row.id);
    if (updErr) console.error(`[send-beta-welcome] Sent, but could not set last_reminder_sent_at for ${row.code}:`, updErr.message);

    return res.json({ ok: true, id });
  } catch (e) {
    console.error(`[send-beta-welcome] Welcome email NOT sent for ${row.code} — exception:`, e.message);
    return res.status(502).json({ error: 'The welcome email could not be sent.' });
  }
};
