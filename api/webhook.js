const { createClient } = require('@supabase/supabase-js');

// Vercel-specific: disable automatic body parsing so we get the exact raw
// bytes Stripe signed. Getting this wrong is the single most common Stripe
// webhook bug — constructEvent fails signature verification on every request
// if the body has been JSON-parsed/re-serialized first.
module.exports.config = {
  api: { bodyParser: false },
};

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
  if (!stripeKey || !webhookSecret || !supabaseUrl || !supabaseServiceKey) {
    console.error('[webhook] Missing required env vars (STRIPE_SECRET_KEY / STRIPE_WEBHOOK_SECRET / SUPABASE_URL / SUPABASE_SERVICE_KEY)');
    return res.status(500).json({ error: 'Webhook not configured on the server.' });
  }
  const stripe = require('stripe')(stripeKey);

  let event;
  try {
    const rawBody = await buffer(req);
    const sig = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('[webhook] Signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` });
  }

  // Stripe expects a 2xx for any event type we receive, even ones we ignore —
  // otherwise it retries needlessly.
  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true, ignored: event.type });
  }

  const session = event.data.object;

  try {
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const { data, error } = await supabaseAdmin.rpc('fulfill_pending_order', {
      p_stripe_session_id: session.id,
      p_amount_total: session.amount_total,
    });

    if (error) {
      console.error('[webhook] fulfill_pending_order failed for session', session.id, ':', error.message);
      return res.status(500).json({ error: error.message });
    }

    const result = Array.isArray(data) ? data[0] : data;
    console.log('[webhook] session', session.id, result?.already_fulfilled ? 'already fulfilled (no-op)' : `fulfilled, ${result?.num_tokens} tokens created`);
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[webhook] Unexpected error for session', session.id, ':', err.message);
    return res.status(500).json({ error: err.message });
  }
};
