'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Сервіс', href: '#services' },
  { label: 'Motul', href: '#motul' },
  { label: 'Контакти', href: '#contacts' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-moto-black/90 backdrop-blur-md border-b border-moto-gray/20">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black uppercase tracking-tighter">
            <span className="text-moto-accent">Ride</span>{' '}
            <span className="text-moto-white">NOW</span>
          </span>
          <span className="hidden sm:inline text-xs text-moto-muted uppercase tracking-widest">
            Moto Kyiv
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-wider text-moto-muted hover:text-moto-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacts" className="btn-primary text-xs px-4 py-2">
              Забронювати
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-moto-white block"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-moto-white block"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-moto-white block"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-moto-dark border-t border-moto-gray/20 overflow-hidden"
          >
            <ul className="flex flex-col py-4 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-sm uppercase tracking-wider text-moto-muted hover:text-moto-accent hover:bg-moto-gray/20 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
