"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Головна", href: "#hero" },
  { label: "Послуги", href: "#services" },
  { label: "Байки", href: "#catalog" },
  { label: "Локація", href: "#location" },
  { label: "Контакти", href: "#contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/90 backdrop-blur-md border-b border-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold tracking-wider">
              RIDE <span className="text-brand-orange">NOW</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-orange transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contacts" className="hidden md:inline-flex btn-primary text-sm">
            Забронювати
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-light">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-brand-muted hover:text-brand-orange transition-colors uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contacts"
              className="block btn-primary text-sm text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Забронювати
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
