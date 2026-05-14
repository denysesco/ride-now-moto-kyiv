import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { label: 'Байки', href: '#catalog' },
    { label: 'Сервіс', href: '#service' },
    { label: 'Контакти', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              RN
            </div>
            <span className="text-white font-bold text-lg">Ride<span className="text-orange-500">NOW</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-400 hover:text-white transition text-sm font-medium">
                {item.label}
              </a>
            ))}
            <a href="#booking" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all">
              Забронювати
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-400 hover:text-white transition text-sm">
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMenuOpen(false)}
              className="block mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold text-center">
              Забронювати
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
