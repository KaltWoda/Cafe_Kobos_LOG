document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("https://woobnujpscooracucphj.supabase.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  console.log(data);

  if (data.token) {
    alert("Login exitoso");
  } else {
    alert(data.error || "Error al iniciar sesión");
  }
});
