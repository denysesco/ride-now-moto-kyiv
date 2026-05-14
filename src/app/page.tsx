import Header from "@/components/ui/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CatalogSection from "@/components/sections/CatalogSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CatalogSection />
      <LocationSection />
      <ContactsSection />
      <Footer />
    </main>
  );
}
