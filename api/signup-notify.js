const { applyCors } = require('./_cors');
const { checkRateLimit, getClientKey } = require('./_rateLimit');
const { escapeHtml, safeMailto } = require('./_escapeHtml');

module.exports = async (req, res) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const allowed = await checkRateLimit('signup-notify', getClientKey(req), 5, 3600);
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { email, signed_up_at } = req.body || {};

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('[signup-notify] Notification email NOT sent — RESEND_API_KEY is not set');
    return res.json({ ok: true, email: false });
  }

  const displayTime = signed_up_at
    ? new Date(signed_up_at).toLocaleString('en-US', { timeZone: 'America/Chicago', dateStyle: 'full', timeStyle: 'short' }) + ' CT'
    : '—';

  const mailtoHref = safeMailto(email);
  const safeEmailText = escapeHtml(email);
  // Reply goes straight to the new teacher — only if safeMailto accepts the address and
  // escaping didn't change it (no characters Resend would reject in a header).
  const cleanEmail = String(email ?? '').trim();
  const replyTo = mailtoHref && mailtoHref === cleanEmail ? cleanEmail : undefined;

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TechGrowth Check <info@techgrowthcheck.com>',
        to: ['brightboptech@gmail.com'],
        reply_to: replyTo,
        subject: 'New TechGrowth Check signup!',
        html: `
          <h2 style="color:#3D6B8A;font-family:sans-serif">New Teacher Signup — TechGrowth Check</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600">Email</td><td>${mailtoHref ? `<a href="mailto:${mailtoHref}">${safeEmailText || '—'}</a>` : (safeEmailText || '—')}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600">Signed up</td><td>${displayTime}</td></tr>
          </table>
        `,
      }),
    });

    if (emailRes.ok) {
      const { id } = await emailRes.json().catch(() => ({}));
      console.log('[signup-notify] Notification email sent, Resend id:', id);
      return res.json({ ok: true, email: true });
    } else {
      const body = await emailRes.text();
      console.error(`[signup-notify] Notification email NOT sent — Resend HTTP ${emailRes.status}:`, body);
      return res.json({ ok: true, email: false });
    }
  } catch (e) {
    console.error('[signup-notify] Notification email NOT sent — exception:', e.message);
    return res.json({ ok: true, email: false });
  }
};
