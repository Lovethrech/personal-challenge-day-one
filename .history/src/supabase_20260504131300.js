import {createClient} from '@supabase/supabase-js';

const supabaseUrl='YOUR_SUPABASE_URL';
const supabaseAnonKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mYm5yaG1ydXN2c3lseGF6ZXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4OTU0OTgsImV4cCI6MjA5MzQ3MTQ5OH0.JOxSqxBr38O62cqD9uheJLWEbki4OcIgz-cRh0AYw1c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);