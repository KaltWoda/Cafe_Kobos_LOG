import pkg from "@supabase/supabase-js";
const { createClient } = pkg;

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { username, contraseña } = req.body;

  if (!username || !contraseña) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  // Consulta directa sin validación extra de email
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("username", username)
    .eq("contraseña", contraseña)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  if (!data) return res.status(401).json({ error: "Usuario o contraseña incorrectos" });

  res.status(200).json({ message: "Login exitoso", user: data });
}
