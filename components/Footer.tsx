export function Footer() {
  return (
    <footer className="bg-moto-dark border-t border-moto-gray/20 py-10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-black uppercase tracking-tighter">
              <span className="text-moto-accent">Ride</span>{' '}
              <span className="text-moto-white">NOW</span>
            </span>
            <span className="text-xs text-moto-muted uppercase tracking-widest">
              Moto Kyiv
            </span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-moto-muted text-center">
            © {new Date().getFullYear()} Ride NOW Moto Kyiv. Всі права
            захищено.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-xs text-moto-muted">
            <a href="#catalog" className="hover:text-moto-accent transition-colors">
              Каталог
            </a>
            <a href="#services" className="hover:text-moto-accent transition-colors">
              Сервіс
            </a>
            <a href="#contacts" className="hover:text-moto-accent transition-colors">
              Контакти
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
