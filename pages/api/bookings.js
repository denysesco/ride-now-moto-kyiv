import { saveBooking, getBookings, updateBookingStatus } from '../../lib/supabase';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // POST — create new booking
    if (req.method === 'POST') {
      const { bikeId, bikeName, startDate, endDate, days, totalPrice, name, phone, email, comment, status } = req.body;

      if (!bikeId || !name || !phone || !startDate || !endDate) {
        return res.status(400).json({ error: 'Заповніть обов\'язкові поля: байк, ім\'я, телефон, дати' });
      }

      const booking = await saveBooking({
        bike_id: bikeId,
        bike_name: bikeName,
        start_date: startDate,
        end_date: endDate,
        days,
        total_price: totalPrice,
        client_name: name,
        client_phone: phone,
        client_email: email || '',
        comment: comment || '',
        status: status || 'нова',
      });

      return res.status(201).json(booking);
    }

    // GET — list all bookings
    if (req.method === 'GET') {
      const bookings = await getBookings();
      return res.status(200).json(bookings);
    }

    // PATCH — update booking status
    if (req.method === 'PATCH') {
      const { id, status } = req.body;
      if (!id || !status) {
        return res.status(400).json({ error: 'Потрібні id та status' });
      }

      const updated = await updateBookingStatus(id, status);
      if (!updated) {
        return res.status(404).json({ error: 'Бронювання не знайдено' });
      }

      return res.status(200).json(updated);
    }

    return res.status(405).json({ error: 'Метод не підтримується' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Внутрішня помилка сервера' });
  }
}
