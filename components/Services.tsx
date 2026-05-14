'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🔧',
    title: 'Діагностика',
    desc: 'Повна комп&#39;ютерна діагностика всіх систем мотоцикла. Виявимо проблему до того, як вона стане критичною.',
    price: 'від 500 ₴',
  },
  {
    icon: '🛢️',
    title: 'Заміна масла',
    desc: 'Заміна масла та фільтрів з використанням продукції Motul. Тільки оригінальні розхідники.',
    price: 'від 800 ₴',
  },
  {
    icon: '⚙️',
    title: 'Ходова частина',
    desc: 'Регулювання підвіски, заміна ланцюга, зірочок, колодок. Ваш байк буде на ходу.',
    price: 'від 1200 ₴',
  },
  {
    icon: '🏍️',
    title: 'Шиномонтаж',
    desc: 'Заміна та балансування шин для будь-яких типів мотоциклів. Професійне обладнання.',
    price: 'від 600 ₴',
  },
  {
    icon: '💨',
    title: 'Вихлопна система',
    desc: 'Встановлення, ремонт, налаштування вихлопних систем. Прямотоки, сліпони, повні системи.',
    price: 'від 1500 ₴',
  },
  {
    icon: '🔌',
    title: 'Електрика',
    desc: 'Діагностика та ремонт електросистем. Проводка, генератори, стартери, освітлення.',
    price: 'від 700 ₴',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-moto-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] text-moto-accent font-medium"
          >
            Сервіс
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-title mt-4"
          >
            Твій байк у{' '}
            <span className="text-gradient">надійних руках</span>
          </motion.h2>
          <p className="text-moto-muted mt-4 max-w-xl mx-auto">
            Повний спектр послуг з ремонту та обслуговування мотоциклів.
            Працюємо з усіма марками.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card-dark p-6 group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-moto-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-moto-muted leading-relaxed mb-4">
                {s.desc}
              </p>
              <span className="text-moto-gold font-bold text-sm">
                {s.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
