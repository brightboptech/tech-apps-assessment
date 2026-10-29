const { escapeHtml } = require('./_escapeHtml');

// Shown as the date the admin picked (stored as midnight UTC), e.g. "June 1, 2027".
function formatExpiry(expiresAt) {
  return new Date(expiresAt).toLocaleDateString('en-US', {
    timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric',
  });
}

// Welcome email sent when a beta code is created (admin page → api/send-beta-welcome.js).
function buildBetaWelcomeEmail({ code, expiresAt }) {
  const subject = 'Your TechGrowth Check beta access';
  const expiry = expiresAt ? `Your code is good through ${formatExpiry(expiresAt)}. ` : '';
  const passes = 'Passes stay valid for a full year, so your spring post-test is covered.';

  const text =
`Hi there,

Thanks for signing up for TechGrowth Check! Your beta access code is: ${code}

To get started:
1. Log in at techgrowthcheck.com with the account you created.
2. Click + New Class & Assessment and enter your code when asked. Beta access covers your students' pre- and post-tests.
3. Print the pre-test passes (each has a QR code) and have students take the pre-test.

${expiry}${passes}

One quick question: what grade levels will you be using it with? If you have K–2 students, I want to make sure the read-aloud feature is ready for your class.

If anything is confusing or doesn't work, just reply to this email. Your feedback during the beta shapes what gets built next.

Thank you!
TechGrowth Check`;

  const html = `
<p>Hi there,</p>
<p>Thanks for signing up for TechGrowth Check! Your beta access code is: <strong>${escapeHtml(code)}</strong></p>
<p>To get started:</p>
<ol>
  <li>Log in at techgrowthcheck.com with the account you created.</li>
  <li>Click + New Class &amp; Assessment and enter your code when asked. Beta access covers your students' pre- and post-tests.</li>
  <li>Print the pre-test passes (each has a QR code) and have students take the pre-test.</li>
</ol>
<p>${escapeHtml(expiry)}${passes}</p>
<p>One quick question: what grade levels will you be using it with? If you have K–2 students, I want to make sure the read-aloud feature is ready for your class.</p>
<p>If anything is confusing or doesn't work, just reply to this email. Your feedback during the beta shapes what gets built next.</p>
<p>Thank you!<br>TechGrowth Check</p>`;

  return { subject, text, html };
}

module.exports = { buildBetaWelcomeEmail };
