import { motion } from 'framer-motion'

export default function ContactsMap() {
  return (
    <section id="contacts" className="py-20 md:py-32 bg-ride-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-ride-red font-bold uppercase tracking-[0.3em] text-sm mb-2">КОНТАКТИ</p>
          <h2 className="section-title">Де ми <span className="text-ride-red">знаходимось</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[400px] bg-ride-dark"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0!2d30.45!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjAiTiAzMMKwMjcnMDAuMCJF!5e0!3m2!1suk!2sua!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ride NOW на карті"
            />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <div>
              <p className="text-ride-gray text-xs uppercase tracking-wider mb-1">Адреса</p>
              <p className="text-xl font-bold">Київ, вул. Вадима Гетьмана, 6</p>
            </div>
            <div>
              <p className="text-ride-gray text-xs uppercase tracking-wider mb-1">Телефон</p>
              <a href="tel:+380501234567" className="text-xl font-bold text-ride-red hover:underline">+38 (050) 123 45 67</a>
            </div>
            <div>
              <p className="text-ride-gray text-xs uppercase tracking-wider mb-1">Години роботи</p>
              <p className="text-xl font-bold">Пн–Нд: 10:00 – 21:00</p>
            </div>
            <div>
              <p className="text-ride-gray text-xs uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:info@ridenow.kiev.ua" className="text-xl font-bold text-ride-red hover:underline">info@ridenow.kiev.ua</a>
            </div>
            <div className="mt-4">
              <a href="tel:+380501234567" className="btn-primary text-base !py-4 !px-10">
                Подзвонити зараз
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
