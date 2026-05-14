import { useState } from 'react';

const bikes = [
  { id: 1, name: 'BMW S1000RR', price: 3500 },
  { id: 2, name: 'Harley-Davidson Street Glide', price: 4000 },
  { id: 3, name: 'Yamaha MT-09 SP', price: 2800 },
  { id: 4, name: 'Ducati Panigale V4', price: 5000 },
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    bikeId: '',
    startDate: '',
    endDate: '',
    name: '',
    phone: '',
    email: '',
    comment: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const selectedBike = bikes.find(b => b.id === Number(form.bikeId));

  const calcDays = () => {
    if (!form.startDate || !form.endDate) return 0;
    const start = new Date(form.startDate);
    const end = new Date(form.endDate);
    return Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
  };

  const totalPrice = selectedBike ? selectedBike.price * calcDays() : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          bikeName: selectedBike?.name,
          totalPrice,
          days: calcDays(),
        }),
      });

      if (!res.ok) throw new Error('Помилка при створенні бронювання');

      setDone(true);
    } catch (err) {
      setError('Сталася помилка. Спробуйте ще раз або зателефонуйте нам.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <section id="booking" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Заявка прийнята! 🎉</h2>
          <p className="text-gray-400 mb-6">Ми зв&apos;яжемося з вами протягом 15 хвилин для підтвердження бронювання.</p>
          <button onClick={() => { setDone(false); setStep(1); setForm({ bikeId: '', startDate: '', endDate: '', name: '', phone: '', email: '', comment: '' }); }}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold">
            Забронювати ще
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">БРОНЮВАННЯ</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Забронювати<br />
            <span className="text-gradient">байк</span>
          </h2>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= s ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-[#222] text-gray-500'
              }`}>
                {s}
              </div>
              <span className={`text-sm hidden sm:block ${step >= s ? 'text-white' : 'text-gray-500'}`}>
                {s === 1 ? 'Байк' : s === 2 ? 'Дата' : 'Контакти'}
              </span>
              {s < 3 && <div className={`w-8 h-0.5 ${step > s ? 'bg-orange-500' : 'bg-[#222]'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Step 1: Bike selection */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Оберіть байк</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bikes.map((bike) => (
                  <button
                    key={bike.id}
                    type="button"
                    onClick={() => { update('bikeId', bike.id); setStep(2); }}
                    className={`text-left p-5 rounded-xl border transition-all ${
                      Number(form.bikeId) === bike.id
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-white/10 bg-[#0a0a0a] hover:border-orange-500/30'
                    }`}
                  >
                    <p className="text-white font-bold">{bike.name}</p>
                    <p className="text-orange-400 text-sm mt-1">від {bike.price} грн/добу</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Dates */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Виберіть дати</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Дата початку</label>
                  <input
                    type="date"
                    value={form.startDate}
                    onChange={(e) => update('startDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Дата завершення</label>
                  <input
                    type="date"
                    value={form.endDate}
                    onChange={(e) => update('endDate', e.target.value)}
                    min={form.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
                    required
                  />
                </div>
              </div>
              {selectedBike && calcDays() > 0 && (
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-white/5">
                  <p className="text-gray-400 text-sm">
                    {selectedBike.name} &middot; {calcDays()} {calcDays() === 1 ? 'день' : calcDays() < 5 ? 'дні' : 'днів'}
                  </p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {totalPrice.toLocaleString()} грн
                  </p>
                </div>
              )}
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition">
                  Назад
                </button>
                <button type="button" onClick={() => form.startDate && form.endDate && setStep(3)}
                  className={`px-6 py-3 rounded-full font-semibold transition ${
                    form.startDate && form.endDate
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-[#222] text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!form.startDate || !form.endDate}
                >
                  Далі
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact info */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Ваші контакти</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Ім&apos;я</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
                    placeholder="Ваше ім'я"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
                    placeholder="+38 (0XX) XXX XX XX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Коментар</label>
                  <textarea
                    value={form.comment}
                    onChange={(e) => update('comment', e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition resize-none h-24"
                    placeholder="Побажання, додаткові вимоги..."
                  />
                </div>
              </div>

              {selectedBike && calcDays() > 0 && (
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-white/5 mt-6">
                  <p className="text-gray-400 text-sm">{selectedBike.name}</p>
                  <p className="text-gray-400 text-sm">{calcDays()} днів</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {totalPrice.toLocaleString()} грн
                  </p>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition">
                  Назад
                </button>
                <button
                  type="submit"
                  disabled={submitting || !form.name || !form.phone}
                  className={`px-8 py-3 rounded-full font-semibold transition ${
                    submitting || !form.name || !form.phone
                      ? 'bg-[#222] text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:shadow-orange-500/25'
                  }`}
                >
                  {submitting ? 'Надсилання...' : `Забронювати • ${totalPrice.toLocaleString()} грн`}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
