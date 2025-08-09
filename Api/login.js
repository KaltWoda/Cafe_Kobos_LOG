import pkg from "@supabase/supabase-js";
const { createClient } = pkg;

// Si existen variables de entorno, las usa. Si no, usa las locales (desarrollo)
const SUPABASE_URL = process.env.SUPABASE_URL || "https://woobnujpscooracucphj.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOi...";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { username, contraseña } = req.body;

  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("username", username)
    .eq("contraseña", contraseña) // ⚠ no recomendado en producción
    .single();

  if (error) return res.status(400).json({ error: error.message });
  if (!data) return res.status(401).json({ error: "Usuario o contraseña incorrectos" });

  res.status(200).json({ message: "Login exitoso", user: data });
}
