// In-memory bike store (can be upgraded to Supabase later)
let bikes = [
  { id: 1, name: 'BMW S1000RR', category: 'Спортбайк', specs: '1000 см³ • 205 к.с.', price: 3500, image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80', available: true },
  { id: 2, name: 'Harley-Davidson Street Glide', category: 'Круїзер', specs: '1868 см³ • 85 к.с.', price: 4000, image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600&q=80', available: true },
  { id: 3, name: 'Yamaha MT-09 SP', category: 'Нейкед', specs: '890 см³ • 119 к.с.', price: 2800, image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80', available: true },
  { id: 4, name: 'Ducati Panigale V4', category: 'Спортбайк', specs: '1103 см³ • 214 к.с.', price: 5000, image: 'https://images.unsplash.com/photo-1558980664-769f595b2b1d?w=600&q=80', available: true },
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      return res.status(200).json(bikes);
    }

    if (req.method === 'POST') {
      const { name, category, specs, price, image } = req.body;
      if (!name || !category) {
        return res.status(400).json({ error: 'Назва та категорія обов\'язкові' });
      }
      const newBike = {
        id: bikes.length + 1,
        name,
        category,
        specs: specs || '',
        price: price || 0,
        image: image || '',
        available: true,
      };
      bikes.push(newBike);
      return res.status(201).json(newBike);
    }

    if (req.method === 'PUT') {
      const { id, ...updates } = req.body;
      const idx = bikes.findIndex(b => b.id === id);
      if (idx === -1) return res.status(404).json({ error: 'Байк не знайдено' });
      bikes[idx] = { ...bikes[idx], ...updates };
      return res.status(200).json(bikes[idx]);
    }

    if (req.method === 'DELETE') {
      const { id } = req.body;
      bikes = bikes.filter(b => b.id !== id);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Метод не підтримується' });
  } catch (error) {
    return res.status(500).json({ error: 'Внутрішня помилка сервера' });
  }
}
