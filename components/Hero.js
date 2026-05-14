export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black z-10" />
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://cdn.pixabay.com/vimeo/635319136/motorcycle-83528.mp4?width=1280" type="video/mp4" />
      </video>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-widest">Київ • Прокат та сервіс</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Відчуй<br />
            <span className="text-gradient">Свободу</span><br />
            на двох колесах
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
            Преміальні мотоцикли в оренду в Києві. Без застави, з доставкою, з повним страхуванням. Обирай — і в путь.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#catalog" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all">
              Обрати байк
            </a>
            <a href="#service" className="border border-white/20 text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-white/5 transition-all">
              Сервіс
            </a>
          </div>
          <div className="flex items-center gap-8 mt-12">
            <div>
              <span className="text-2xl font-bold text-white">50+</span>
              <p className="text-gray-500 text-sm">Байків</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <span className="text-2xl font-bold text-white">100%</span>
              <p className="text-gray-500 text-sm">Страховка</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <span className="text-2xl font-bold text-white">24/7</span>
              <p className="text-gray-500 text-sm">Підтримка</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
    </section>
  );
}
