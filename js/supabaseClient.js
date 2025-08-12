// Conexión a Supabase
const SUPABASE_URL = "https://woobnujpscooracucphj.supabase.co"; // Cambia por tu URL de Supabase
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvb2JudWpwc2Nvb3JhY3VjcGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NTA5NTksImV4cCI6MjA3MDMyNjk1OX0.SJkoYl3AHRX1FQnhQopJ0npMonjlaxA07d2sAYKGT2g"; // Cambia por tu anon key

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
