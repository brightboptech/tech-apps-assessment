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

    const unitAmountCents = Math.round(Math.max(parseFloat(pricePerStudent) || 2, 2) * 100);
    const origin = req.headers.origin || 'https://techgrowthcheck.vercel.app';

    const lineItems = lineItemClasses.map(cls => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `Student Passes — ${cls.className} (Grade ${cls.grade || cls.gradeLevel})`,
          description: `${cls.studentCount || cls.numStudents} student passes (pre-test + post-test access)`,
        },
        unit_amount: unitAmountCents,
      },
      quantity: parseInt(cls.studentCount || cls.numStudents, 10),
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
      return res.status(500).json({ error: 'Server is not fully configured. Add SUPABASE_URL / SUPABASE_SERVICE_KEY to Vercel environment variables.' });
    }
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const { error: orderErr } = await supabaseAdmin.from('pending_orders').insert({
      stripe_session_id: session.id,
      teacher_id: teacherId,
      classes: lineItemClasses,
    });
    if (orderErr) {
      console.error('[create-checkout-session] Failed to record pending_orders:', orderErr.message);
      return res.status(500).json({ error: 'Could not start checkout — please try again.' });
    }

    res.json({ url: session.url });
  } catch (err) {
    console.error('[create-checkout-session] Error:', err);
    res.status(500).json({ error: err.message });
  }
};
