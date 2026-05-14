import './globals.css';

export const metadata = {
  title: 'Ride NOW Moto Kyiv',
  description: 'Аренда мотоциклов в Киеве',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}