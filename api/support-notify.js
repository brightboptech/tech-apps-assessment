module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, school, grade_levels, issue_type, description, screenshot_url } = req.body || {};

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn('[support-notify] RESEND_API_KEY not set — skipping email notification');
    return res.json({ ok: true, email: false });
  }

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'TechGrowth Check Support <onboarding@resend.dev>',
        to: ['brightboptech@gmail.com'],
        subject: `New Support Ticket: ${issue_type || 'Unknown'} from ${name || 'Unknown'}`,
        html: `
          <h2 style="color:#3D6B8A;font-family:sans-serif">New Support Ticket — TechGrowth Check</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Name</td><td>${name || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Email</td><td><a href="mailto:${email}">${email || '—'}</a></td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">School</td><td>${school || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Grade Levels</td><td>${grade_levels || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Issue Type</td><td>${issue_type || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Description</td><td style="white-space:pre-wrap;max-width:480px">${description || '—'}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#64748b;font-weight:600;vertical-align:top">Screenshot URL</td><td>${screenshot_url ? `<a href="${screenshot_url}">${screenshot_url}</a>` : '—'}</td></tr>
          </table>
        `,
      }),
    });

    if (emailRes.ok) {
      return res.json({ ok: true, email: true });
    } else {
      const body = await emailRes.text();
      console.error('[support-notify] Resend error:', body);
      return res.json({ ok: true, email: false });
    }
  } catch (e) {
    console.error('[support-notify] Resend exception:', e.message);
    return res.json({ ok: true, email: false });
  }
};
