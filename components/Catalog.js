import { motion } from 'framer-motion'
import BikeCard from './BikeCard'

const bikes = [
  {
    name: 'BMW S1000RR',
    type: 'Спортбайк',
    engine: '1000 см³',
    power: '205 к.с.',
    price: '3500',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600',
  },
  {
    name: 'Harley-Davidson Street Glide',
    type: 'Круїзер',
    engine: '1868 см³',
    power: '85 к.с.',
    price: '4000',
    image: 'https://images.unsplash.com/photo-1558981285-501cd9af9426?w=600',
  },
  {
    name: 'Yamaha MT-09 SP',
    type: 'Нейкед',
    engine: '890 см³',
    power: '119 к.с.',
    price: '2800',
    image: 'https://images.unsplash.com/photo-1635767750802-4a8a08b9580a?w=600',
  },
  {
    name: 'Ducati Panigale V4',
    type: 'Спортбайк',
    engine: '1103 см³',
    power: '214 к.с.',
    price: '5000',
    image: 'https://images.unsplash.com/photo-1566891430237-e5ad0e63e3a9?w=600',
  },
]

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-ride-red text-sm tracking-[0.3em] uppercase">НАШ ПАРК</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6">
            Обери свій<br /><span className="text-ride-red">байк</span>
          </h2>
          <p className="text-ride-gray max-w-xl mx-auto">
            Тільки перевірена техніка. Кожен байк проходить повне ТО перед видачею.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike, i) => (
            <BikeCard key={bike.name} bike={bike} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-ride-red hover:bg-ride-red-hover text-white font-semibold px-8 py-3 rounded transition-colors uppercase tracking-wide"
          >
            Забронювати консультацію
          </a>
        </div>
      </div>
    </section>
  )
}
