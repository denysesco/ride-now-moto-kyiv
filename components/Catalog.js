import { useState } from 'react';
import Image from 'next/image';

const bikes = [
  {
    id: 1,
    name: 'BMW S1000RR',
    category: 'Спортбайк',
    specs: '1000 см³ • 205 к.с.',
    price: 'від 3500 грн/добу',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
    color: 'bg-blue-600/20',
  },
  {
    id: 2,
    name: 'Harley-Davidson Street Glide',
    category: 'Круїзер',
    specs: '1868 см³ • 85 к.с.',
    price: 'від 4000 грн/добу',
    image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=600&q=80',
    color: 'bg-red-600/20',
  },
  {
    id: 3,
    name: 'Yamaha MT-09 SP',
    category: 'Нейкед',
    specs: '890 см³ • 119 к.с.',
    price: 'від 2800 грн/добу',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80',
    color: 'bg-cyan-600/20',
  },
  {
    id: 4,
    name: 'Ducati Panigale V4',
    category: 'Спортбайк',
    specs: '1103 см³ • 214 к.с.',
    price: 'від 5000 грн/добу',
    image: 'https://images.unsplash.com/photo-1558980664-769f595b2b1d?w=600&q=80',
    color: 'bg-red-600/20',
  },
];

export default function Catalog({ onBook }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="catalog" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">НАШ ПАРК</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Обери свій<br />
            <span className="text-gradient">байк</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Тільки перевірена техніка. Кожен байк проходить повне ТО перед видачею.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredId(bike.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredId === bike.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                <span className={`absolute top-3 left-3 ${bike.color} backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full`}>
                  {bike.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{bike.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{bike.specs}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold">{bike.price}</span>
                  <button
                    onClick={() => onBook(bike)}
                    className="text-sm text-white bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0"
                  >
                    Обрати
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#booking" className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all">
            Забронювати консультацію
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
