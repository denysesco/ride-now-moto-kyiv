import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ride-red text-sm tracking-[0.3em] uppercase">КОНТАКТИ</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6">
            Де ми<br /><span className="text-ride-red">знаходимось</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-ride-red text-sm tracking-wider uppercase mb-2">Адреса</h4>
              <p className="text-xl font-semibold">Київ, вул. Вадима Гетьмана, 6</p>
            </div>
            <div>
              <h4 className="text-ride-red text-sm tracking-wider uppercase mb-2">Телефон</h4>
              <a href="tel:+380501234567" className="text-xl font-semibold hover:text-ride-red transition-colors">
                +38 (050) 123 45 67
              </a>
            </div>
            <div>
              <h4 className="text-ride-red text-sm tracking-wider uppercase mb-2">Години роботи</h4>
              <p className="text-xl font-semibold">Пн–Нд: 10:00 – 21:00</p>
            </div>
            <div>
              <h4 className="text-ride-red text-sm tracking-wider uppercase mb-2">Email</h4>
              <a href="mailto:info@ridenow.kiev.ua" className="text-xl font-semibold hover:text-ride-red transition-colors">
                info@ridenow.kiev.ua
              </a>
            </div>
            <a
              href="tel:+380501234567"
              className="inline-block bg-ride-red hover:bg-ride-red-hover text-white font-semibold px-8 py-3 rounded transition-colors uppercase tracking-wide mt-4"
            >
              Подзвонити зараз
            </a>
          </div>

          {/* Map */}
          <div className="bg-ride-dark border border-white/5 rounded-xl overflow-hidden h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5123456789!2d30.456789!3d50.431759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI1JzU0LjMiTiAzMMKwMjcnMjQuNCJF!5e0!3m2!1suk!2sua!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ride NOW Moto Kyiv location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
