import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vtoioyhwtkbwxyzuvrca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0b2lveWh3dGtid3h5enV2cmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3Mzk3OTksImV4cCI6MjAyMDMxNTc5OX0.1Ilm8XRIKfizE-YYCeUTU-mINAQCMZj7ra4E6n_o24A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
