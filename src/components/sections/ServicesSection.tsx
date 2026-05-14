import { Wrench, Bike, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Bike,
    title: "Прокат мотоциклів",
    desc: "Yamaha MT-07, Honda CB650R, BMW S1000RR та інші. Добова оренда з повним страхуванням.",
  },
  {
    icon: Wrench,
    title: "Сервіс та ремонт",
    desc: "ТО, діагностика, ремонт двигуна, ходової. Працюємо з японськими та європейськими брендами.",
  },
  {
    icon: Shield,
    title: "Екіпірування",
    desc: "Шоломи, куртки, рукавиці, штани — повний комплект захисту для безпечної їзди.",
  },
  {
    icon: Headphones,
    title: "Мотодім",
    desc: "Комфортний відпочинок для мандрівників. Парковка для байка, душ, Wi-Fi, кава.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-orange uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Що ми пропонуємо
          </p>
          <h2 className="section-title mb-4 text-white">Наші послуги</h2>
          <p className="section-subtitle mx-auto">
            Все для комфортного та безпечного райдингу в Києві
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card-dark group">
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
