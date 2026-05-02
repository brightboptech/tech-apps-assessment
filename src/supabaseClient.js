import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtlbaerripmkaicsgfxh.supabase.co'
const supabaseKey = 'sb_publishable_x_X499kGXqMxygg6dCx59A_X0JSpdjO'

export const supabase = createClient(supabaseUrl, supabaseKey)
