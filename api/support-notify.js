const { applyCors } = require('./_cors');
const { checkRateLimit, getClientKey } = require('./_rateLimit');
const { escapeHtml, safeMailto, safeHttpsUrl, safeSubjectPart } = require('./_escapeHtml');

module.exports = async (req, res) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const allowed = await checkRateLimit('support-notify', getClientKey(req), 5, 3600);
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { name, email, school, grade_levels, issue_type, description, screenshot_url } = req.body || {};

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.error('[support-notify] Notification email NOT sent — RESEND_API_KEY is not set');
    return res.json({ ok: true, email: false });
  }

  const safeName = escapeHtml(name);
  const safeSchool = escapeHtml(school);
  const safeGradeLevels = escapeHtml(grade_levels);
  const safeIssueType = escapeHtml(issue_type);
  const safeDescription = escapeHtml(description);
  const mailtoHref = safeMailto(email);
  const safeEmailText = escapeHtml(email);
  // Reply goes straight to the teacher who filed the ticket — only if safeMailto accepts
  // the address and escaping didn't change it (no characters Resend would reject in a header).
  const cleanEmail = String(email ?? '').trim();
  const replyTo = mailtoHref && mailtoHref === cleanEmail ? cleanEmail : undefined;
  const screenshotHref = safeHttpsUrl(screenshot_url);
  const safeScreenshotText = escapeHtml(screenshot_url);

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TechGrowth Check Support <info@techgrowthcheck.com>',
        to: ['brightboptech@gmail.com'],
        reply_to: replyTo,
        subject: `New Support Ticket: ${safeSubjectPart(issue_type || 'Unknown')} from ${safeSubjectPart(name || 'Unknown')}`,
        html: `
          <h2 style="color:#3D6B8A;font-family:sans-serif">New Support Ticket — TechGrowth Check</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Name</td><td>${safeName || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Email</td><td>${mailtoHref ? `<a href="mailto:${mailtoHref}">${safeEmailText || '—'}</a>` : (safeEmailText || '—')}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">School</td><td>${safeSchool || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Grade Levels</td><td>${safeGradeLevels || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Issue Type</td><td>${safeIssueType || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Description</td><td style="white-space:pre-wrap;max-width:480px">${safeDescription || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Screenshot URL</td><td>${screenshotHref ? `<a href="${screenshotHref}">${safeScreenshotText}</a>` : (safeScreenshotText || '—')}</td></tr>
          </table>
        `,
      }),
    });

    if (emailRes.ok) {
      const { id } = await emailRes.json().catch(() => ({}));
      console.log('[support-notify] Notification email sent, Resend id:', id);
      return res.json({ ok: true, email: true });
    } else {
      const body = await emailRes.text();
      console.error(`[support-notify] Notification email NOT sent — Resend HTTP ${emailRes.status}:`, body);
      return res.json({ ok: true, email: false });
    }
  } catch (e) {
    console.error('[support-notify] Notification email NOT sent — exception:', e.message);
    return res.json({ ok: true, email: false });
  }
};
