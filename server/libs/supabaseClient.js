import { createClient } from '@supabase/supabase-js';
const runtimeConfig = useRuntimeConfig();
const supabase = createClient(runtimeConfig.SUPABASE_URL, runtimeConfig.SUPABASE_KEY)
export { supabase };




