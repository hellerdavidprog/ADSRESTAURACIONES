'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeItem?: string;
}

export function Navbar({ activeItem = 'inicio' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
    { id: 'programa', label: 'Programa restauro', href: '#programa restauro' },
   
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] sm:w-[95%] max-w-[900px]">
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-full px-2 sm:px-3 md:px-6 py-2 sm:py-2.5 justify-between items-center shadow-lg shadow-black/5">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <NextImage 
            src="/logos/ads-logo-gold.png"
            alt="ADS Restauraciones"
            width={36}
            height={36}
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full"
          />
          <span className="font-bold text-[9px] sm:text-[11px] tracking-wide text-gray-800 hidden md:block">
            ADS RESTAURACIONES
          </span>
        </div>

        {/* Desktop Menu - Text */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-[#D4AF37]' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className="sm:hidden fixed top-2 right-4 p-2 text-gray-600 z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 w-full">
          <ul className="space-y-1 sm:space-y-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <li 
                  key={item.id}
                  className={`px-3 py-2 rounded-lg transition ${
                    isActive 
                      ? 'bg-[#D4AF37] text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Link href={item.href} className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
