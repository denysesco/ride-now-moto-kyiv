'use client';

import { motion } from 'framer-motion';

export function Motul() {
  return (
    <section id="motul" className="py-20 sm:py-32 bg-moto-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-moto-accent/5 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-moto-gold font-medium">
              Офіційний партнер
            </span>
            <h2 className="section-title mt-4 mb-6">
              <span className="text-gradient">Motul</span> — якість без
              компромісів
            </h2>
            <p className="text-moto-muted leading-relaxed mb-8 max-w-lg">
              Ми використовуємо виключно продукцію Motul — світового лідера
              серед моторних мастил для мототехніки. Ваш двигун працює на
              максимумі.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '300V', label: 'Гоночна лінійка' },
                { value: '7100', label: 'Синтетика' },
                { value: '5100', label: 'Напівсинтетика' },
                { value: 'C5', label: 'Ланцюговий спрей' },
              ].map((f) => (
                <div
                  key={f.value}
                  className="border border-moto-gray/20 p-4 hover:border-moto-gold/30 transition-colors"
                >
                  <div className="text-xl font-black text-moto-gold">
                    {f.value}
                  </div>
                  <div className="text-xs text-moto-muted mt-1">{f.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-moto-black border border-moto-gray/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl sm:text-9xl font-black text-moto-accent/20 select-none">
                  MOTUL
                </div>
                <div className="text-sm text-moto-muted uppercase tracking-[0.3em] mt-2">
                  Since 1853
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
