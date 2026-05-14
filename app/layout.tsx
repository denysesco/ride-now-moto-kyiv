import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ride NOW Moto Kyiv — Прокат мотоциклів у Києві',
  description:
    'Оренда мотоциклів у Києві. Спортбайки, нейкеди, круїзери. Прокат, сервіс, Motul.',
  keywords: 'прокат мотоциклів Київ, оренда мото, Ride NOW, мотосервіс Київ',
  openGraph: {
    title: 'Ride NOW Moto Kyiv',
    description: 'Прокат мотоциклів у Києві. Спортбайки, нейкеди, круїзери.',
    type: 'website',
    locale: 'uk_UA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="dark">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
