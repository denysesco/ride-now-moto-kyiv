// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ride NOW Moto Kyiv',
  description: 'Аренда мотоциклов и сервис в Киеве',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  );
}