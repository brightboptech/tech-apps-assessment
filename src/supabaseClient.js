import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtlbaerripmkaicsgfxh.supabase.co'

// NOTE: This key uses the newer sb_publishable_ format instead of the old eyJ... JWT anon key.
// The SDK sends this as "Authorization: Bearer <key>" on unauthenticated requests (signup, etc.).
// If signup fails with "Failed to fetch", verify this is the correct "anon / public" key from
// Supabase dashboard → Settings → API. The token endpoint (login) only checks the apikey header
// so login can succeed even with an incorrect Bearer value, while signup validates it strictly.
const supabaseKey = 'sb_publishable_x_X499kGXqMxygg6dCx59A_X0JSpdjO'

console.log('[Supabase] URL:', supabaseUrl)
console.log('[Supabase] Key prefix:', supabaseKey.slice(0, 20) + '...')

export const supabase = createClient(supabaseUrl, supabaseKey)
