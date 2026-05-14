import { useState } from 'react'
import { motion } from 'framer-motion'

const bikes = ['BMW S1000RR', 'Harley-Davidson Street Glide', 'Yamaha MT-09 SP', 'Ducati Panigale V4']

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    bike: '',
    dateFrom: '',
    dateTo: '',
    comment: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Помилка бронювання')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', bike: '', dateFrom: '', dateTo: '', comment: '' })
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="booking" className="py-24 px-4 bg-ride-dark">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-black uppercase mb-4">Заявка прийнята!</h2>
          <p className="text-ride-gray mb-8">Ми зв'яжемося з вами протягом 30 хвилин для підтвердження бронювання.</p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-ride-red hover:bg-ride-red-hover text-white font-semibold px-8 py-3 rounded transition-colors uppercase"
          >
            Забронювати ще
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 px-4 bg-ride-dark">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-ride-red text-sm tracking-[0.3em] uppercase">БРОНЮВАННЯ</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6">
            Забронювати <span className="text-ride-red">байк</span>
          </h2>
          <p className="text-ride-gray max-w-lg mx-auto">
            Заповніть форму і ми підберемо для вас ідеальний мотоцикл
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я *"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white placeholder-ride-gray focus:border-ride-red focus:outline-none transition-colors w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="+38 (0__) ___ __ __ *"
              required
              value={form.phone}
              onChange={handleChange}
              className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white placeholder-ride-gray focus:border-ride-red focus:outline-none transition-colors w-full"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white placeholder-ride-gray focus:border-ride-red focus:outline-none transition-colors w-full"
          />
          <select
            name="bike"
            required
            value={form.bike}
            onChange={handleChange}
            className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white placeholder-ride-gray focus:border-ride-red focus:outline-none transition-colors w-full"
          >
            <option value="">Оберіть байк *</option>
            {bikes.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-ride-gray text-sm mb-1 block">З</label>
              <input
                type="date"
                name="dateFrom"
                required
                value={form.dateFrom}
                onChange={handleChange}
                className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white focus:border-ride-red focus:outline-none transition-colors w-full"
              />
            </div>
            <div>
              <label className="text-ride-gray text-sm mb-1 block">По</label>
              <input
                type="date"
                name="dateTo"
                required
                value={form.dateTo}
                onChange={handleChange}
                className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white focus:border-ride-red focus:outline-none transition-colors w-full"
              />
            </div>
          </div>
          <textarea
            name="comment"
            placeholder="Коментар (побажання, досвід водіння тощо)"
            rows={3}
            value={form.comment}
            onChange={handleChange}
            className="bg-ride-black border border-white/10 rounded-lg px-5 py-3 text-white placeholder-ride-gray focus:border-ride-red focus:outline-none transition-colors w-full resize-none"
          />
          {error && (
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg px-5 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-ride-red hover:bg-ride-red-hover disabled:opacity-50 text-white font-semibold px-8 py-4 rounded-lg transition-colors uppercase tracking-wide text-lg"
          >
            {status === 'loading' ? 'Відправляємо...' : 'Забронювати'}
          </button>
        </form>
      </div>
    </section>
  )
}
