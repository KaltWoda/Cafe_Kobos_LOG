export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  console.log("Request body:", req.body);

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  if (error) {
    console.error("Error en supabase:", error);
    return res.status(400).json({ error: error.message });
  }

  if (!data) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }

  res.status(200).json({ message: "Login exitoso", user: data });
}
