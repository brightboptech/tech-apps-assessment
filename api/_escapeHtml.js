function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function safeMailto(email) {
  const clean = String(email ?? '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) return null;
  return escapeHtml(clean);
}

function safeHttpsUrl(url) {
  const clean = String(url ?? '').trim();
  if (!/^https:\/\//i.test(clean)) return null;
  return escapeHtml(clean);
}

// Subject lines are plain text, not HTML — clients don't render entities there.
// Only strip CR/LF to prevent header injection; don't HTML-escape.
function safeSubjectPart(value) {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim();
}

module.exports = { escapeHtml, safeMailto, safeHttpsUrl, safeSubjectPart };
