const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { numStudents, pricePerStudent, className, gradeLevel, teacherId } = req.body;

  const unitAmountCents = Math.round(Math.max(parseFloat(pricePerStudent) || 2, 2) * 100);

  try {
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
      success_url: `${req.headers.origin}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/?payment=cancelled`,
      metadata: {
        teacher_id: teacherId,
        class_name: className,
        grade_level: String(gradeLevel),
        num_students: String(numStudents),
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
