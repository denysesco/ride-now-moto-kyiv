import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ride-black via-ride-black/95 to-ride-black/90 z-10" />

      {/* Background image placeholder — replace with actual photo */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2100')] bg-cover bg-center brightness-50" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ride-red font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Київ • Прокат та сервіс
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
            Відчуй
            <br />
            <span className="text-ride-red">Свободу</span>
            <br />
            на двох колесах
          </h1>
          <p className="text-ride-gray-light text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Преміальні мотоцикли в оренду в Києві. Без застави, з доставкою, 
            з повним страхуванням. Обирай — і в путь.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#bikes" className="btn-primary text-base !py-4 !px-10">
              Обрати байк
            </a>
            <a href="#services" className="btn-outline text-base !py-4 !px-10">
              Сервіс
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-lg mt-16 border-t border-ride-white/10 pt-8"
        >
          {[
            { value: '50+', label: 'Байків' },
            { value: '100%', label: 'Страховка' },
            { value: '24/7', label: 'Підтримка' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-black text-ride-red">{stat.value}</p>
              <p className="text-ride-gray text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
