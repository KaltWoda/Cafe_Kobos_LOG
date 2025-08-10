import { supabase } from '../../lib/supabaseClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { username, password } = req.body

  const { data, error } = await supabase
    .from('usuario')
    .select('*')
    .eq('username', username)
    .eq('password', password) // Ojo: para demo, no usar texto plano en producción
    .single()

  if (error || !data) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' })
  }

  return res.status(200).json({ user: { id: data.id, username: data.username } })
}
