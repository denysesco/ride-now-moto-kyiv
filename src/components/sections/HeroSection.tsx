import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/60 via-brand-darker/40 to-brand-darker z-10" />

      {/* Video Placeholder / Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-dark to-black" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <p className="text-brand-orange font-display uppercase tracking-[0.3em] text-sm md:text-base mb-4">
          Прокат мотоциклів у Києві
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-none mb-6">
          RIDE{" "}
          <span className="text-gradient">NOW</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-sans font-light tracking-wider text-brand-muted">
            Мотоцикли твоєї мрії
          </span>
        </h1>
        <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Yamaha, Honda, BMW — щодня нові відчуття. Бери байк на день, вихідні
          або тиждень. З нами на колесах!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#catalog" className="btn-primary text-lg px-8 py-4">
            Обрати байк
          </Link>
          <Link href="#services" className="btn-outline text-lg px-8 py-4">
            Наші послуги
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-muted rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-brand-orange rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
