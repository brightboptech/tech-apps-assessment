const ALLOWED_ORIGINS = [
  'https://www.techgrowthcheck.com',
  'https://techgrowthcheck.com',
  'http://localhost:3000',
];

function applyCors(req, res, methods = 'POST, OPTIONS') {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', methods);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

module.exports = { ALLOWED_ORIGINS, applyCors };
