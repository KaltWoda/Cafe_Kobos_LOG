document.addEventListener("DOMContentLoaded", () => {
  // Datos de ejemplo
  const ventasHoy = 25;
  const productosStock = 120;
  const gananciasMes = 2500;

  document.getElementById("ventasHoy").textContent = ventasHoy;
  document.getElementById("productosStock").textContent = productosStock;
  document.getElementById("gananciasMes").textContent = `$${gananciasMes}`;
});
