document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
    console.log("Submit capturado");


  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  alert(`Bienvenido ${data.user.nombre}`);
  window.location.href = "/dashboard.html";
});
