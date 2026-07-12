const { applyCors } = require('./_cors');

module.exports = async (req, res) => {
  applyCors(req, res, 'GET, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { session_id } = req.query;
  if (!session_id) return res.status(400).json({ error: 'Missing session_id' });

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      console.error('[verify-checkout-session] STRIPE_SECRET_KEY env var is not set');
      return res.status(500).json({ error: 'Stripe is not configured on the server.' });
    }

    const stripe = require('stripe')(key);
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== 'paid') {
      return res.status(400).json({ error: 'Payment not completed' });
    }

    res.json({ paid: true, amountTotal: session.amount_total, metadata: session.metadata });
  } catch (err) {
    console.error('[verify-checkout-session] Error:', err);
    res.status(500).json({ error: err.message });
  }
};
