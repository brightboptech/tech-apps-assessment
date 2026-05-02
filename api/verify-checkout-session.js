const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { session_id } = req.query;
  if (!session_id) return res.status(400).json({ error: 'Missing session_id' });

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== 'paid') {
      return res.status(400).json({ error: 'Payment not completed' });
    }

    res.json({ paid: true, amountTotal: session.amount_total, metadata: session.metadata });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
