async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabaseClient
    .from("usuarios")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  const mensaje = document.getElementById("mensaje");
  if (error || !data) {
    mensaje.textContent = "❌ Usuario o contraseña incorrectos";
  } else {
    mensaje.textContent = "✅ Bienvenido " + data.email;
    // Ejemplo: redirigir a otra página
    // window.location.href = "dashboard.html";
  }
}
