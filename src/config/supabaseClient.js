import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
console.log(supabaseUrl);


const supabase = createClient(supabaseUrl, supabaseAnonKey)
console.log(supabase);


export default supabase