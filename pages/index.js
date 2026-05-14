import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import MotoGallery from '@/components/MotoGallery'
import Services from '@/components/Services'
import ContactsMap from '@/components/ContactsMap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ride NOW Moto — Прокат мотоциклів та сервіс у Києві</title>
        <meta name="description" content="Преміальні мотоцикли в оренду в Києві. Без застави, з доставкою та страхуванням. Повний спектр мотосервісу." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="Ride NOW Moto — Прокат мотоциклів та сервіс у Києві" />
        <meta property="og:description" content="Преміальні мотоцикли в оренду. Без застави, з доставкою та повним страхуванням." />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <Hero />
        <MotoGallery />
        <Services />
        <ContactsMap />
      </Layout>
    </>
  )
}
