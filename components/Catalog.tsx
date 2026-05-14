'use client';

import { motion } from 'framer-motion';

const bikes = [
  {
    id: 1,
    name: 'Yamaha R1',
    category: 'Спортбайк',
    engine: '998 cc',
    power: '200 к.с.',
    price: '3500',
    image: '🏍️',
    available: true,
  },
  {
    id: 2,
    name: 'Kawasaki Z900',
    category: 'Нейкед',
    engine: '948 cc',
    power: '125 к.с.',
    price: '2800',
    image: '🏍️',
    available: true,
  },
  {
    id: 3,
    name: 'Harley-Davidson Sportster',
    category: 'Круїзер',
    engine: '1200 cc',
    power: '68 к.с.',
    price: '3200',
    image: '🏍️',
    available: true,
  },
  {
    id: 4,
    name: 'BMW S1000RR',
    category: 'Спортбайк',
    engine: '999 cc',
    power: '207 к.с.',
    price: '4000',
    image: '🏍️',
    available: false,
  },
  {
    id: 5,
    name: 'Ducati Monster',
    category: 'Нейкед',
    engine: '937 cc',
    power: '111 к.с.',
    price: '3000',
    image: '🏍️',
    available: true,
  },
  {
    id: 6,
    name: 'Honda CBR650R',
    category: 'Спортбайк',
    engine: '649 cc',
    power: '95 к.с.',
    price: '2500',
    image: '🏍️',
    available: true,
  },
];

export function Catalog() {
  return (
    <section id="catalog" className="py-20 sm:py-32 bg-moto-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-moto-accent font-medium"
          >
            Каталог
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-title mt-4"
          >
            Обери свій{' '}
            <span className="text-gradient">байк</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike, i) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-dark p-6 group"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-moto-black rounded-none mb-6 flex items-center justify-center text-6xl border border-moto-gray/20 group-hover:border-moto-accent/30 transition-colors">
                {bike.image}
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-wider text-moto-accent bg-moto-accent/10 px-3 py-1">
                  {bike.category}
                </span>
                {!bike.available && (
                  <span className="text-xs uppercase tracking-wider text-moto-muted bg-moto-gray/20 px-3 py-1">
                    Зайнято
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-moto-accent transition-colors">
                {bike.name}
              </h3>

              {/* Specs */}
              <div className="flex gap-4 text-sm text-moto-muted mb-4">
                <span>{bike.engine}</span>
                <span className="text-moto-gray/30">|</span>
                <span>{bike.power}</span>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-moto-gray/10">
                <div>
                  <span className="text-xl font-black text-moto-gold">
                    {bike.price} ₴
                  </span>
                  <span className="text-xs text-moto-muted"> /доба</span>
                </div>
                <button
                  disabled={!bike.available}
                  className={`text-xs uppercase tracking-wider font-bold px-4 py-2 border transition-all ${
                    bike.available
                      ? 'border-moto-accent text-moto-accent hover:bg-moto-accent hover:text-white cursor-pointer'
                      : 'border-moto-gray/20 text-moto-muted cursor-not-allowed'
                  }`}
                >
                  {bike.available ? 'Бронь' : 'Немає'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
