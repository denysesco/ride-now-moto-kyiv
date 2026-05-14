import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'bookings.json')

function readBookings() {
  try {
    if (!fs.existsSync(DATA_FILE)) return []
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function writeBookings(bookings) {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2))
}

export default function handler(req, res) {
  const { method } = req

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (method === 'OPTIONS') return res.status(200).end()

  if (method === 'POST') {
    const { name, phone, email, bike, dateFrom, dateTo, comment } = req.body

    if (!name || !phone || !bike || !dateFrom || !dateTo) {
      return res.status(400).json({ error: 'Заповніть обов\'язкові поля' })
    }

    const bookings = readBookings()
    const newBooking = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name,
      phone,
      email: email || '',
      bike,
      dateFrom,
      dateTo,
      comment: comment || '',
      status: 'new',
      createdAt: new Date().toISOString(),
    }
    bookings.push(newBooking)
    writeBookings(bookings)

    return res.status(201).json({ success: true, booking: newBooking })
  }

  if (method === 'GET') {
    const { admin } = req.query
    if (admin === process.env.ADMIN_KEY || admin === 'ride-admin-2024') {
      const bookings = readBookings()
      return res.status(200).json(bookings)
    }
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (method === 'DELETE') {
    const { id, admin } = req.query
    if (admin !== (process.env.ADMIN_KEY || 'ride-admin-2024')) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    if (!id) return res.status(400).json({ error: 'ID обов\'язковий' })

    let bookings = readBookings()
    bookings = bookings.filter((b) => b.id !== id)
    writeBookings(bookings)
    return res.status(200).json({ success: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
