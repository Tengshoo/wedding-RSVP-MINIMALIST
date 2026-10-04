import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenEnvelope: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenEnvelope,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Kalendar", href: "#kalendar" },
    { label: "Lokasi", href: "#lokasi" },
    { label: "Atur Cara", href: "#atur-cara" },
    { label: "Kod Pakaian", href: "#kod-pakaian" },
    { label: "Salam Kaut", href: "#salam-kaut" },
    { label: "Ucapan", href: "#ucapan" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#F8F6F0]/90 dark:bg-[#191816]/90 backdrop-blur-md border-b border-stone-200/70 dark:border-stone-800/70 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand wordmark in single text element */}
        <a
          href="#"
          className="font-serif-luxury text-xl sm:text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-100 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
        >
          {WEDDING_DATA.couple.shortNames}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-sans-clean font-medium tracking-wider uppercase text-stone-600 dark:text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-stone-950 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary actions & dark mode toggle */}
        <div className="flex items-center gap-2.5">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            type="button"
            className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors cursor-pointer"
            title={darkMode ? "Tukar ke Mod Siang" : "Tukar ke Mod Gelap"}
            aria-label="Togol Mod Gelap"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary RSVP CTA */}
          <a
            href="#rsvp"
            className="px-4 py-2 text-xs font-sans-clean font-medium tracking-wider uppercase bg-[#2C2B2A] hover:bg-[#1A1918] dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm"
          >
            RSVP Kehadiran
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-[#F8F6F0] dark:bg-[#191816] px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs uppercase tracking-wider font-sans-clean font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnvelope();
              }}
              type="button"
              className="text-xs text-stone-600 dark:text-stone-400 flex items-center gap-1.5 py-1"
            >
              <Heart className="w-3.5 h-3.5 text-[#8D735C]" />
              <span>Buka Semula Sampul</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
