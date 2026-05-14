import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Catalog from '../components/Catalog';
import Service from '../components/Service';
import BookingForm from '../components/BookingForm';
import Contacts from '../components/Contacts';

export default function Home() {
  const [selectedBike, setSelectedBike] = useState(null);

  const handleBook = (bike) => {
    setSelectedBike(bike);
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Small delay to let the booking form mount with pre-selected bike
      setTimeout(() => {
        const event = new CustomEvent('selectBike', { detail: bike });
        window.dispatchEvent(event);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Catalog onBook={handleBook} />
      <Service />
      <BookingForm preselectedBike={selectedBike} />
      <Contacts />

      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ride NOW Moto. Всі права захищені.
          </p>
        </div>
      </footer>
    </div>
  );
}
