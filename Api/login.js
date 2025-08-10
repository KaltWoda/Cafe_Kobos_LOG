import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  // Buscar usuario por username
  const { data: user, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("username", username)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }

  // Comparar password con hash
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }

  // Excluir password de la respuesta
  const { password: _, ...userData } = user;

  res.status(200).json({ message: "Login exitoso", user: userData });
}
