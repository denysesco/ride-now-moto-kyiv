import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ride NOW Moto Kyiv | Прокат мотоциклів та сервіс у Києві",
  description:
    "Прокат мотоциклів у Києві. Yamaha, Honda, BMW. Мотодім, сервісний центр, екіпірування. З нами на колесах!",
  keywords: [
    "прокат мотоциклів Київ",
    "оренда мотоцикла",
    "мотодім",
    "сервіс мотоциклів",
    "Ride NOW",
    "Moto Kyiv",
  ],
  openGraph: {
    title: "Ride NOW Moto Kyiv",
    description: "Прокат мотоциклів та сервіс у Києві",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="antialiased">{children}</body>
    </html>
  );
}
