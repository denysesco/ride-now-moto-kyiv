'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Catalog } from '@/components/Catalog';
import { Services } from '@/components/Services';
import { Motul } from '@/components/Motul';
import { Contacts } from '@/components/Contacts';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Services />
        <Motul />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
