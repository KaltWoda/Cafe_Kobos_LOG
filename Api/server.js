import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from "@supabase/supabase-js";

const { createClient } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const supabase = createClient(
  process.env.SUPABASE_URL || "https://https://woobnujpscooracucphj.supabase.co",
  process.env.supabaseKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indvb2JudWpwc2Nvb3JhY3VjcGhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDc1MDk1OSwiZXhwIjoyMDcwMzI2OTU5fQ.B89Tt0isTnqAs55_3yppBbCNyb7lHnwH89GsAz-S6Jo"
);""

// Ruta de login con username y contraseña
app.post("/login", async (req, res) => {
  const { username, contraseña } = req.body;

  // Consultar en tu tabla "usuarios"
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("username", username)
    .eq("contraseña", contraseña) // ⚠️ Esto supone que guardas contraseñas en texto plano (no recomendado)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  if (!data) return res.status(401).json({ error: "Usuario o contraseña incorrectos" });

  res.json({ message: "Login exitoso", user: data });
});

app.get("/", (req, res) => {
  res.send("API de Cafe Kobos funcionando 🚀");
});

app.listen(3000, () => console.log("Backend en puerto 3000"));
