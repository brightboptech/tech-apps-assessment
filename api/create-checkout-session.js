const { applyCors } = require('./_cors');
const { checkRateLimit, getClientKey } = require('./_rateLimit');

module.exports = async (req, res) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const allowed = await checkRateLimit('create-checkout-session', getClientKey(req), 20, 3600);
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      console.error('[create-checkout-session] STRIPE_SECRET_KEY env var is not set');
      return res.status(500).json({ error: 'Checkout is temporarily unavailable.' });
    }

    const stripe = require('stripe')(key);
    const { classes, pricePerStudent, teacherId, numStudents, className, gradeLevel } = req.body;

    // Support both new multi-class format ({ classes: [...], pricePerStudent }) and
    // old single-class format ({ numStudents, pricePerStudent, className, gradeLevel })
    let lineItemClasses;
    if (classes && Array.isArray(classes) && classes.length > 0) {
      lineItemClasses = classes;
    } else if (numStudents && className && gradeLevel) {
      lineItemClasses = [{ className, grade: gradeLevel, studentCount: numStudents }];
    } else {
      return res.status(400).json({ error: 'Missing required fields: provide either classes array or numStudents/className/gradeLevel' });
    }

    // Validate before calling Stripe so bad input is a 400, not a Stripe error.
    // 1–200 per class matches NewClassWizard and redeem_beta_code.
    const studentCounts = lineItemClasses.map(cls => Number(cls.studentCount || cls.numStudents));
    if (studentCounts.some(n => !Number.isInteger(n) || n < 1 || n > 200)) {
      return res.status(400).json({ error: 'Invalid student count.' });
    }

    const unitAmountCents = Math.round(Math.max(parseFloat(pricePerStudent) || 2, 2) * 100);
    const origin = req.headers.origin || 'https://techgrowthcheck.vercel.app';

    const lineItems = lineItemClasses.map((cls, i) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `Student Passes — ${cls.className} (Grade ${cls.grade || cls.gradeLevel})`,
          description: `${cls.studentCount || cls.numStudents} student passes (pre-test + post-test access)`,
        },
        unit_amount: unitAmountCents,
      },
      quantity: studentCounts[i],
    }));

    const totalStudents = lineItems.reduce((sum, li) => sum + li.quantity, 0);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?payment=cancelled`,
      metadata: {
        teacher_id: String(teacherId || ''),
        class_names: lineItemClasses.map(c => c.className).join(', '),
        num_classes: String(lineItemClasses.length),
        num_students: String(totalStudents),
      },
    });

    const { createClient } = require('@supabase/supabase-js');
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('[create-checkout-session] SUPABASE_URL or SUPABASE_SERVICE_KEY env var is not set');
      return res.status(500).json({ error: 'Checkout is temporarily unavailable.' });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const { error: orderErr } = await supabaseAdmin.from('pending_orders').insert({
      stripe_session_id: session.id,
      teacher_id: teacherId,
      classes: lineItemClasses,
    });
    if (orderErr) {
      console.error('[create-checkout-session] Failed to record pending_orders:', orderErr.message);
      return res.status(500).json({ error: 'Please try again in a moment.' });
    }

    res.json({ url: session.url });
  } catch (err) {
    // Full error (Stripe/library detail) goes to the server log only.
    console.error('[create-checkout-session] Error:', err);
    res.status(500).json({ error: 'Please try again in a moment.' });
  }
};
