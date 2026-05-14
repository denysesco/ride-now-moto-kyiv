import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ride-black via-ride-dark to-ride-black" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ride-red text-sm tracking-[0.3em] uppercase mb-4 block">
            Київ • Прокат та сервіс
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
            Відчуй<br />
            <span className="text-ride-red">Свободу</span><br />
            на двох колесах
          </h1>
          <p className="text-ride-gray-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Преміальні мотоцикли в оренду в Києві. Без застави, з доставкою, з повним страхуванням. Обирай — і в путь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#catalog"
              className="bg-ride-red hover:bg-ride-red-hover text-white font-semibold px-10 py-4 rounded text-lg transition-colors uppercase tracking-wide"
            >
              Обрати байк
            </a>
            <a
              href="#booking"
              className="border border-white/20 hover:border-ride-red text-white font-semibold px-10 py-4 rounded text-lg transition-colors uppercase tracking-wide"
            >
              Забронювати
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto"
        >
          {[
            { value: '50+', label: 'Байків' },
            { value: '100%', label: 'Страховка' },
            { value: '24/7', label: 'Підтримка' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-ride-red">{stat.value}</div>
              <div className="text-ride-gray text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
