import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Admin() {
  const [bookings, setBookings] = useState([])
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const ADMIN_PASS = 'ride-admin-2024'

  const fetchBookings = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/bookings?admin=${ADMIN_PASS}`)
      if (res.ok) {
        const data = await res.json()
        setBookings(data)
      }
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (loggedIn) fetchBookings()
  }, [loggedIn])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASS) {
      setLoggedIn(true)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Видалити бронювання?')) return
    try {
      const res = await fetch(`/api/bookings?id=${id}&admin=${ADMIN_PASS}`, { method: 'DELETE' })
      if (res.ok) {
        setBookings(bookings.filter((b) => b.id !== id))
      }
    } catch (e) {
      console.error(e)
    }
  }

  const statusColors = {
    new: 'bg-blue-500/20 text-blue-400',
    confirmed: 'bg-green-500/20 text-green-400',
    cancelled: 'bg-red-500/20 text-red-400',
    completed: 'bg-gray-500/20 text-gray-400',
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="max-w-sm w-full">
          <h1 className="text-3xl font-black text-white mb-2">Ride NOW Admin</h1>
          <p className="text-ride-gray mb-6">Введіть пароль для доступу</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
            className="bg-ride-dark border border-white/10 rounded-lg px-5 py-3 text-white w-full mb-4 focus:border-ride-red focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-ride-red hover:bg-ride-red-hover text-white font-semibold px-8 py-3 rounded transition-colors uppercase"
          >
            Увійти
          </button>
        </form>
      </div>
    )
  }

  const newBookings = bookings.filter((b) => b.status === 'new')
  const allBookings = bookings

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Ride NOW Admin</title>
      </Head>

      <header className="bg-ride-dark border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-white">Ride NOW Admin</h1>
            <p className="text-ride-gray text-sm">Панель керування бронюваннями</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-ride-gray">Нові: </span>
              <span className="text-ride-red font-bold">{newBookings.length}</span>
            </div>
            <button
              onClick={fetchBookings}
              className="bg-ride-red hover:bg-ride-red-hover text-white text-sm px-4 py-2 rounded transition-colors"
            >
              Оновити
            </button>
            <a
              href="/"
              className="text-ride-gray hover:text-white text-sm transition-colors"
              target="_blank"
            >
              Сайт ↗
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center text-ride-gray py-20">Завантаження...</div>
        ) : allBookings.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold mb-2">Бронювань поки немає</h2>
            <p className="text-ride-gray">Коли клієнти забронюють байки, вони з'являться тут</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-ride-gray text-sm uppercase tracking-wider">
                  <th className="pb-3 pr-4">Статус</th>
                  <th className="pb-3 pr-4">Ім'я</th>
                  <th className="pb-3 pr-4">Телефон</th>
                  <th className="pb-3 pr-4">Байк</th>
                  <th className="pb-3 pr-4">Дата</th>
                  <th className="pb-3 pr-4">Коментар</th>
                  <th className="pb-3">Дії</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((b) => (
                  <tr key={b.id} className="border-b border-white/5 hover:bg-ride-dark/50 transition-colors">
                    <td className="py-4 pr-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[b.status] || statusColors.new}`}>
                        {b.status === 'new' ? 'Нове' : b.status === 'confirmed' ? 'Підтверджено' : b.status === 'cancelled' ? 'Скасовано' : b.status}
                      </span>
                    </td>
                    <td className="py-4 pr-4 font-medium">{b.name}</td>
                    <td className="py-4 pr-4">
                      <a href={`tel:${b.phone}`} className="text-ride-red hover:underline">
                        {b.phone}
                      </a>
                    </td>
                    <td className="py-4 pr-4">{b.bike}</td>
                    <td className="py-4 pr-4 text-sm text-ride-gray">
                      {new Date(b.dateFrom).toLocaleDateString('uk-UA')} — {new Date(b.dateTo).toLocaleDateString('uk-UA')}
                    </td>
                    <td className="py-4 pr-4 text-sm text-ride-gray max-w-[150px] truncate">{b.comment || '—'}</td>
                    <td className="py-4">
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="text-red-500 hover:text-red-400 text-sm transition-colors"
                      >
                        Видалити
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
