import { motion } from 'framer-motion'

const services = [
  {
    title: 'Оренда байків',
    desc: 'Погодинна, добова, тижнева оренда. Без застави для перевірених райдерів. Доставка по Києву.',
    icon: '🏍️',
  },
  {
    title: 'Технічне обслуговування',
    desc: 'Повний спектр ТО: заміна масла, ланцюга, гальм, діагностика двигуна та електроніки.',
    icon: '🔧',
  },
  {
    title: 'Шиномонтаж',
    desc: 'Заміна гуми, балансування, ремонт проколів. Працюємо з будь-якими типами покришок.',
    icon: '🛞',
  },
  {
    title: 'Аксесуари та екіп',
    desc: 'Шоломи, рукавички, дощові комплекти, чохли. Все для комфортної поїздки.',
    icon: '🪖',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-ride-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ride-red text-sm tracking-[0.3em] uppercase">СЕРВІС</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6">
            Все для<br /><span className="text-ride-red">мото</span>
          </h2>
          <p className="text-ride-gray max-w-xl mx-auto">
            Оренда, ремонт, обслуговування — усе в одному місці. Працюємо 7 днів на тиждень.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-ride-black border border-white/5 rounded-xl p-6 hover:border-ride-red/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-ride-gray text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
