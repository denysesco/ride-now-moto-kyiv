import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { status: filterStatus } = req.query
    let query = supabase.from('bookings').select('*, bikes(name)').order('created_at', { ascending: false })
    if (filterStatus) query = query.eq('status', filterStatus)
    const { data, error } = await query
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const { bike_id, client_name, client_phone, start_date, end_date, comment } = req.body
    if (!bike_id || !client_name || !client_phone || !start_date || !end_date) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ bike_id, client_name, client_phone, start_date, end_date, comment, status: 'нова' }])
      .select()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(201).json(data[0])
  }

  if (req.method === 'PATCH') {
    const { id, status } = req.body
    if (!id || !status) return res.status(400).json({ error: 'Missing id or status' })
    const { data, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)
      .select()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data[0])
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
