'use client';

import { motion } from 'framer-motion';

export function Contacts() {
  return (
    <section id="contacts" className="py-20 sm:py-32 bg-moto-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-moto-accent font-medium">
              Контакти
            </span>
            <h2 className="section-title mt-4 mb-6">
              На <span className="text-gradient">зв&#39;язку</span> 24/7
            </h2>
            <p className="text-moto-muted mb-8 max-w-md">
              Київ, вул. Мотозаводська, 15. Працюємо щодня з 9:00 до 21:00.
              Бронюй байк зараз.
            </p>

            {/* Contact items */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '📞', label: 'Телефон', value: '+380 (99) 123-45-67' },
                { icon: '✉️', label: 'Пошта', value: 'ride.now.kyiv@gmail.com' },
                { icon: '📍', label: 'Адреса', value: 'Київ, вул. Мотозаводська, 15' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{c.icon}</span>
                  <div>
                    <div className="text-xs text-moto-muted uppercase tracking-wider mb-1">
                      {c.label}
                    </div>
                    <div className="text-sm sm:text-base font-medium">
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@ride.now.kyiv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-moto-gray/30 flex items-center justify-center hover:border-moto-accent hover:bg-moto-accent/10 transition-all"
                aria-label="TikTok"
              >
                <span className="text-lg">🎵</span>
              </a>
              <a
                href="https://www.instagram.com/ride.now.kyiv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-moto-gray/30 flex items-center justify-center hover:border-moto-accent hover:bg-moto-accent/10 transition-all"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="https://t.me/ridenowkyiv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-moto-gray/30 flex items-center justify-center hover:border-moto-accent hover:bg-moto-accent/10 transition-all"
                aria-label="Telegram"
              >
                <span className="text-lg">✈️</span>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-dark p-8"
          >
            <h3 className="text-xl font-bold uppercase tracking-tight mb-6">
              Забронювати байк
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-moto-muted mb-2">
                  Ім&#39;я
                </label>
                <input
                  type="text"
                  placeholder="Ваше ім&#39;я"
                  className="w-full bg-moto-black border border-moto-gray/30 px-4 py-3 text-sm focus:border-moto-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-moto-muted mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+380"
                  className="w-full bg-moto-black border border-moto-gray/30 px-4 py-3 text-sm focus:border-moto-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-moto-muted mb-2">
                  Мотоцикл
                </label>
                <select className="w-full bg-moto-black border border-moto-gray/30 px-4 py-3 text-sm focus:border-moto-accent outline-none transition-colors text-moto-white">
                  <option value="">Оберіть мотоцикл</option>
                  <option>Yamaha R1</option>
                  <option>Kawasaki Z900</option>
                  <option>Harley-Davidson Sportster</option>
                  <option>BMW S1000RR</option>
                  <option>Ducati Monster</option>
                  <option>Honda CBR650R</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Відправити заявку
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 aspect-[21/9] bg-moto-dark border border-moto-gray/20 flex items-center justify-center"
        >
          <div className="text-center">
            <span className="text-4xl block mb-2">📍</span>
            <span className="text-sm text-moto-muted uppercase tracking-wider">
              Google Maps — Київ, Мотозаводська 15
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
