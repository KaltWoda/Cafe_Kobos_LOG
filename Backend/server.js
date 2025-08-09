import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from "@supabase/supabase-js";

const { createClient } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // ⚠️ clave privada
);

// Ruta de login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ user: data.user, token: data.session.access_token });
});

app.get("/", (req, res) => {
  res.send("API de Cafe Kobos funcionando 🚀");
});

app.listen(3000, () => console.log("Backend en puerto 3000"));
