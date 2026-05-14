'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-moto-black via-moto-black/95 to-moto-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.15)_0%,_transparent_70%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-moto-accent/30 bg-moto-accent/5 mb-8"
          >
            <span className="w-2 h-2 bg-moto-accent rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-moto-accent font-medium">
              Київ • Прокат мотоциклів
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            <span className="block">Відчуй</span>
            <span className="block text-gradient">швидкість</span>
            <span className="block">Києва</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-moto-muted max-w-xl mb-10 leading-relaxed">
            Оренда спортбайків, нейкедів та круїзерів у Києві. Вибери свій
            мотоцикл — і вулиці твої.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#catalog" className="btn-primary">
              Обрати байк
            </a>
            <a href="#contacts" className="btn-outline">
              Зв&#39;язатися
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-moto-gray/20">
            {[
              { num: '15+', label: 'Байків' },
              { num: '5', label: 'Років досвіду' },
              { num: '24/7', label: 'Підтримка' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              >
                <div className="text-2xl sm:text-3xl font-black text-moto-accent">
                  {s.num}
                </div>
                <div className="text-xs sm:text-sm text-moto-muted uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-moto-muted/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-moto-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
