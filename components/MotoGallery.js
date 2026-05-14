import { motion } from 'framer-motion'

const bikes = [
  {
    name: 'BMW S1000RR',
    type: 'Спортбайк',
    price: 'від 3500 грн/добу',
    engine: '1000 см³ • 205 к.с.',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070',
  },
  {
    name: 'Harley-Davidson Street Glide',
    type: 'Круїзер',
    price: 'від 4000 грн/добу',
    engine: '1868 см³ • 85 к.с.',
    img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=2100',
  },
  {
    name: 'Yamaha MT-09 SP',
    type: 'Нейкед',
    price: 'від 2800 грн/добу',
    engine: '890 см³ • 119 к.с.',
    img: 'https://images.unsplash.com/photo-1631631480669-535cc43f2327?q=80&w=1887',
  },
  {
    name: 'Ducati Panigale V4',
    type: 'Спортбайк',
    price: 'від 5000 грн/добу',
    engine: '1103 см³ • 214 к.с.',
    img: 'https://images.unsplash.com/photo-1609630875174-1321f142ad01?q=80&w=1974',
  },
]

export default function MotoGallery() {
  return (
    <section id="bikes" className="py-20 md:py-32 bg-ride-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-ride-red font-bold uppercase tracking-[0.3em] text-sm mb-2">НАШ ПАРК</p>
          <h2 className="section-title">Обери свій <span className="text-ride-red">байк</span></h2>
          <p className="section-subtitle mt-4">
            Тільки перевірена техніка. Кожен байк проходить повне ТО перед видачею.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-ride-dark"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={bike.img}
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ride-black via-ride-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-ride-gray text-xs uppercase tracking-wider mb-1">{bike.type}</p>
                <h3 className="text-white font-bold text-lg md:text-xl">{bike.name}</h3>
                <p className="text-ride-gray text-sm mt-1">{bike.engine}</p>
                <p className="text-ride-red font-bold text-sm mt-2">{bike.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contacts" className="btn-primary">
            Забронювати консультацію
          </a>
        </motion.div>
      </div>
    </section>
  )
}
