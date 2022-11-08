import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
    'https://ygshsigagsbysvwyosgc.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlnc2hzaWdhZ3NieXN2d3lvc2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUxMDExMTksImV4cCI6MTk4MDY3NzExOX0.4zCClLuO9ZMlLmxLp8k4s25CqIFYMK6hbAAPQ_Fux00')

export default supabase;

