document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Por favor ingresa usuario y contraseña");
    return;
  }

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Bienvenido " + result.user.username);
      window.location.href = "/Public/dashboard.html";
    } else {
      alert("❌ " + result.error);
    }
  } catch (error) {
    alert("❌ Error de conexión");
    console.error(error);
  }
});
