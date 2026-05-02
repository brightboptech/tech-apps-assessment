module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      console.error('[create-checkout-session] STRIPE_SECRET_KEY env var is not set');
      return res.status(500).json({ error: 'Stripe is not configured on the server. Add STRIPE_SECRET_KEY to Vercel environment variables.' });
    }

    const stripe = require('stripe')(key);

    const { numStudents, pricePerStudent, className, gradeLevel, teacherId } = req.body;

    if (!numStudents || !pricePerStudent || !className || !gradeLevel) {
      return res.status(400).json({ error: 'Missing required fields: numStudents, pricePerStudent, className, gradeLevel' });
    }

    const unitAmountCents = Math.round(Math.max(parseFloat(pricePerStudent) || 2, 2) * 100);
    const origin = req.headers.origin || 'https://techgrowthcheck.vercel.app';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Student Passes — ${className} (Grade ${gradeLevel})`,
            description: `${numStudents} student passes (pre-test + post-test access)`,
          },
          unit_amount: unitAmountCents,
        },
        quantity: numStudents,
      }],
      mode: 'payment',
      success_url: `${origin}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?payment=cancelled`,
      metadata: {
        teacher_id: String(teacherId || ''),
        class_name: className,
        grade_level: String(gradeLevel),
        num_students: String(numStudents),
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] Error:', err);
    res.status(500).json({ error: err.message });
  }
};
