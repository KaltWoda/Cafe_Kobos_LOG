// Conexión a Supabase
const SUPABASE_URL = "//woobnujpscooracucphj.supabase.co"; // Cambia por tu URL de Supabase
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvb2JudWpwc2Nvb3JhY3VjcGhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDc1MDk1OSwiZXhwIjoyMDcwMzI2OTU5fQ.B89Tt0isTnqAs55_3yppBbCNyb7lHnwH89GsAz-S6Jo"; // Cambia por tu anon key

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
