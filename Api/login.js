import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Faltan username o password' });
  }

  // Buscar usuario en la tabla
  const { data: user, error } = await supabase
    .from('usuarios')
    .select('id, nombre, username, password')
    .eq('username', username)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: 'Usuario no encontrado' });
  }

  // Compara contraseña (texto plano)
  if (user.password !== password) {
    return res.status(401).json({ error: 'Contraseña incorrecta' });
  }

  // Login correcto, devuelve usuario sin password
  const { password: _, ...userData } = user;

  res.status(200).json({ user: userData });
}
