// Configura con tus credenciales de Supabase
const SUPABASE_URL = "https://woobnujpscooracucphj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvb2JudWpwc2Nvb3JhY3VjcGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NTA5NTksImV4cCI6MjA3MDMyNjk1OX0.SJkoYl3AHRX1FQnhQopJ0npMonjlaxA07d2sAYKGT2g";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        message.textContent = "❌ Error: " + error.message;
        message.style.color = "red";
    } else {
        message.textContent = "✅ Login exitoso. Bienvenido!";
        message.style.color = "green";
        console.log(data);
        // Redirigir a dashboard.html si el login es correcto
        // window.location.href = "dashboard.html";
    }
});
