import { motion } from 'framer-motion'

export default function BikeCard({ bike, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-ride-dark border border-white/5 rounded-xl overflow-hidden group hover:border-ride-red/50 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-ride-red text-white text-xs font-semibold px-3 py-1 rounded">
          {bike.type}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
        <div className="text-ride-gray text-sm space-y-1 mb-4">
          <p>{bike.engine} • {bike.power}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-ride-red">
            від {bike.price} грн
          </span>
          <span className="text-ride-gray text-sm">/добу</span>
        </div>
      </div>
    </motion.div>
  )
}
