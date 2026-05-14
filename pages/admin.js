import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'admin123'; // TODO: move to env

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [stats, setStats] = useState({ total: 0, new: 0, confirmed: 0, cancelled: 0 });

  const login = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Невірний пароль');
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
        setStats({
          total: data.length,
          new: data.filter(b => b.status === 'нова').length,
          confirmed: data.filter(b => b.status === 'підтверджена').length,
          cancelled: data.filter(b => b.status === 'скасована').length,
        });
      }
    } catch (err) {
      console.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) fetchBookings();
  }, [authenticated]);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch('/api/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        fetchBookings();
      }
    } catch (err) {
      console.error('Failed to update status');
    }
  };

  const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <form onSubmit={login} className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              RN
            </div>
            <h1 className="text-2xl font-bold text-white">Адмін-панель</h1>
            <p className="text-gray-500 text-sm mt-1">Ride NOW Moto Kyiv</p>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition mb-4"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition">
              Увійти
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Адмін-панель</h1>
            <p className="text-gray-500 text-sm">Ride NOW Moto Kyiv — бронювання</p>
          </div>
          <button onClick={() => setAuthenticated(false)}
            className="text-gray-500 hover:text-white text-sm transition">
            Вийти
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#111] border border-white/5 rounded-xl p-4">
            <p className="text-2xl font-bold text-white">{stats.total}</p>
            <p className="text-gray-500 text-sm">Всього</p>
          </div>
          <div className="bg-[#111] border border-yellow-500/20 rounded-xl p-4">
            <p className="text-2xl font-bold text-yellow-400">{stats.new}</p>
            <p className="text-gray-500 text-sm">Нові</p>
          </div>
          <div className="bg-[#111] border border-green-500/20 rounded-xl p-4">
            <p className="text-2xl font-bold text-green-400">{stats.confirmed}</p>
            <p className="text-gray-500 text-sm">Підтверджені</p>
          </div>
          <div className="bg-[#111] border border-red-500/20 rounded-xl p-4">
            <p className="text-2xl font-bold text-red-400">{stats.cancelled}</p>
            <p className="text-gray-500 text-sm">Скасовані</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['all', 'нова', 'підтверджена', 'скасована'].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                filter === f
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  : 'bg-[#111] text-gray-400 border border-white/5 hover:border-white/20'
              }`}>
              {f === 'all' ? 'Всі' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
          <button onClick={fetchBookings}
            className="px-4 py-2 rounded-full text-sm bg-[#111] text-gray-400 border border-white/5 hover:border-white/20 transition ml-auto">
            Оновити
          </button>
        </div>

        {/* Bookings table */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 mt-4">Завантаження...</p>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="bg-[#111] rounded-2xl p-12 text-center border border-white/5">
            <p className="text-gray-500">Поки що немає бронювань</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left border-b border-white/5">
                  <th className="pb-3 pr-4">ID</th>
                  <th className="pb-3 pr-4">Клієнт</th>
                  <th className="pb-3 pr-4">Телефон</th>
                  <th className="pb-3 pr-4">Байк</th>
                  <th className="pb-3 pr-4">Дата</th>
                  <th className="pb-3 pr-4">Сума</th>
                  <th className="pb-3 pr-4">Статус</th>
                  <th className="pb-3">Дії</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((b) => (
                  <tr key={b.id} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="py-3 pr-4 text-white font-mono">#{b.id}</td>
                    <td className="py-3 pr-4">
                      <p className="text-white">{b.client_name}</p>
                      {b.client_email && <p className="text-gray-500 text-xs">{b.client_email}</p>}
                    </td>
                    <td className="py-3 pr-4 text-gray-300">{b.client_phone}</td>
                    <td className="py-3 pr-4 text-white">{b.bike_name}</td>
                    <td className="py-3 pr-4">
                      <p className="text-gray-300">{b.start_date}</p>
                      {b.end_date && <p className="text-gray-500 text-xs">→ {b.end_date} ({b.days} д.)</p>}
                    </td>
                    <td className="py-3 pr-4 text-white font-semibold">
                      {b.total_price?.toLocaleString()} грн
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        b.status === 'нова' ? 'bg-yellow-500/20 text-yellow-400' :
                        b.status === 'підтверджена' ? 'bg-green-500/20 text-green-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-1">
                        {b.status !== 'підтверджена' && (
                          <button onClick={() => updateStatus(b.id, 'підтверджена')}
                            className="px-2.5 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-xs hover:bg-green-500/20 transition">
                            ✅
                          </button>
                        )}
                        {b.status !== 'скасована' && (
                          <button onClick={() => updateStatus(b.id, 'скасована')}
                            className="px-2.5 py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs hover:bg-red-500/20 transition">
                            ❌
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-gray-500 text-xs">Ride NOW Moto Admin Panel v1.0</p>
        </div>
      </div>
    </div>
  );
}
