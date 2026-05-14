import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-ride-black/90 backdrop-blur-md border-b border-ride-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter">RIDE</span>
              <span className="text-2xl font-black text-ride-red">NOW</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#bikes" className="text-ride-gray-light hover:text-ride-white transition-colors text-sm uppercase tracking-wider">Байки</a>
              <a href="#services" className="text-ride-gray-light hover:text-ride-white transition-colors text-sm uppercase tracking-wider">Сервіс</a>
              <a href="#contacts" className="text-ride-gray-light hover:text-ride-white transition-colors text-sm uppercase tracking-wider">Контакти</a>
              <a href="#bikes" className="btn-primary text-xs !py-2 !px-6">Обрати байк</a>
            </div>
            <button className="md:hidden text-ride-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="bg-ride-dark border-t border-ride-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl font-black tracking-tighter">RIDE</span>
            <span className="text-xl font-black text-ride-red">NOW</span>
          </div>
          <p className="text-ride-gray text-sm">Київ, вул. Вадима Гетьмана, 6</p>
          <p className="text-ride-gray text-sm mt-1">© 2026 Ride NOW Moto Kyiv. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  )
}
