const { escapeHtml } = require('./_escapeHtml');
const { createClient } = require('@supabase/supabase-js');

// Triggered by an external cron (cron-job.org), not a browser — no CORS,
// guarded by a shared-secret header instead (see webhook.js for the
// Stripe-signature equivalent of this pattern).
module.exports = async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers['authorization'];
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!supabaseUrl || !supabaseServiceKey || !resendKey) {
    console.error('[send-beta-reminders] Missing required env vars');
    return res.status(500).json({ error: 'Not configured on the server.' });
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // Recurring weekly reminders until the code is redeemed: send if never
  // reminded and the code itself is 7+ days old, or if the last reminder
  // was sent 7+ days ago.
  const { data: codes, error: fetchErr } = await supabaseAdmin
    .from('beta_codes')
    .select('id, code, recipient_name, recipient_email')
    .eq('used_students', 0)
    .not('recipient_email', 'is', null)
    .or(`and(last_reminder_sent_at.is.null,created_at.lte.${sevenDaysAgo}),last_reminder_sent_at.lte.${sevenDaysAgo}`);

  if (fetchErr) {
    console.error('[send-beta-reminders] Fetch failed:', fetchErr.message);
    return res.status(500).json({ error: fetchErr.message });
  }

  const results = { sent: 0, failed: 0, skipped: 0 };

  for (const row of codes || []) {
    const safeName = escapeHtml(row.recipient_name || 'there');
    const safeCode = escapeHtml(row.code);

    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'TechGrowth Check <info@techgrowthcheck.com>',
          to: [row.recipient_email],
          reply_to: 'brightboptech@gmail.com',
          subject: 'Your TechGrowth Check beta access is ready when you are',
          html: `
            <p>Hi ${safeName},</p>
            <p>Just a friendly note — your TechGrowth Check beta access is set up and ready to go, but it looks like you haven't started yet.</p>
            <p>As a reminder, here's your access code: <strong>${safeCode}</strong></p>
            <p>Getting started takes just a few minutes:</p>
            <ol>
              <li>Head to techgrowthcheck.com</li>
              <li>Enter your code</li>
              <li>Set up your first class</li>
            </ol>
            <p>If you're running into any snags getting started, or have questions about how the assessments work, just reply to this email — I'm happy to help.</p>
            <p>Thanks again for being part of the beta!</p>
            <p>Rach<br>BrightBop Tech LLC</p>
          `,
        }),
      });

      if (!emailRes.ok) {
        const body = await emailRes.text();
        console.error(`[send-beta-reminders] Resend error for ${row.code}:`, body);
        results.failed++;
        continue;
      }

      const { error: updateErr } = await supabaseAdmin
        .from('beta_codes')
        .update({ last_reminder_sent_at: new Date().toISOString() })
        .eq('id', row.id);

      if (updateErr) {
        console.error(`[send-beta-reminders] Failed to mark ${row.code} as sent:`, updateErr.message);
        results.failed++;
      } else {
        results.sent++;
      }
    } catch (e) {
      console.error(`[send-beta-reminders] Exception for ${row.code}:`, e.message);
      results.failed++;
    }
  }

  return res.json({ ok: true, ...results });
};
