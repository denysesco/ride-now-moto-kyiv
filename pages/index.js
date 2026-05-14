import Head from 'next/head'
import Hero from '../components/Hero'
import Catalog from '../components/Catalog'
import Services from '../components/Services'
import Contact from '../components/Contact'
import BookingForm from '../components/BookingForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ride NOW Moto — Прокат мотоциклів та сервіс у Києві</title>
        <meta name="description" content="Преміальні мотоцикли в оренду в Києві. Без застави, з доставкою та страхуванням. Повний спектр мотосервісу." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <Catalog />
        <Services />
        <BookingForm />
        <Contact />
      </main>
    </>
  )
}
