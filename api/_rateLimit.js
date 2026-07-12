const { createClient } = require('@supabase/supabase-js');

async function checkRateLimit(endpoint, clientKey, maxHits, windowSeconds) {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error(`[rate-limit] Supabase not configured — failing open for ${endpoint}`);
    return true;
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  const { data, error } = await supabaseAdmin.rpc('check_rate_limit', {
    p_endpoint: endpoint,
    p_client_key: clientKey,
    p_max_hits: maxHits,
    p_window_seconds: windowSeconds,
  });

  if (error) {
    console.error(`[rate-limit] check_rate_limit RPC failed for ${endpoint}:`, error.message);
    return true;
  }
  return data === true;
}

function getClientKey(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return fwd.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

module.exports = { checkRateLimit, getClientKey };
