import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Kisah", href: "#kisah" },
    { label: "Tarikh", href: "#tarikh" },
    { label: "Atur Cara", href: "#atur-cara" },
    { label: "Lokasi", href: "#lokasi" },
    { label: "Galeri", href: "#galeri" },
    { label: "Kod Pakaian", href: "#kod-pakaian" },
    { label: "Hadiah", href: "#salam-kaut" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-30 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#F7F3EB]/90 dark:bg-[#171613]/90 backdrop-blur-md border-b border-[#DED6C9]/80 dark:border-[#2F2C27]/80 py-3 shadow-xs'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark (ATIF × ISMA) */}
          <a
            href="#"
            className="font-serif-luxury text-xl sm:text-2xl tracking-wide text-[#25231F] dark:text-[#F7F3EB] hover:text-[#B7A58A] transition-colors select-none"
          >
            {WEDDING_DATA.couple.shortNames}
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-sans-clean font-medium tracking-[0.25em] uppercase text-[#716C64] dark:text-[#B7A58A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#25231F] dark:hover:text-[#F7F3EB] transition-colors relative group py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B7A58A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions: Dark mode + RSVP CTA + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              type="button"
              className="p-2 rounded-full text-[#716C64] dark:text-[#B7A58A] hover:text-[#25231F] dark:hover:text-[#F7F3EB] transition-colors cursor-pointer"
              title={darkMode ? "Mod Siang" : "Mod Malam"}
              aria-label="Togol Mod Gelap"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#rsvp"
              className="hidden sm:inline-flex py-2 px-5 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-[0.2em] uppercase transition-all shadow-xs"
            >
              RSVP
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="lg:hidden p-2 text-[#25231F] dark:text-[#F7F3EB] hover:text-[#B7A58A] cursor-pointer"
              aria-label="Buka Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Elegant Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#F7F3EB] dark:bg-[#171613] p-8 flex flex-col justify-between animate-fade-in"
        >
          {/* Mobile Menu Top */}
          <div className="flex items-center justify-between">
            <span className="font-serif-luxury text-2xl text-[#25231F] dark:text-[#F7F3EB]">
              {WEDDING_DATA.couple.shortNames}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              className="p-2 rounded-full text-[#716C64] hover:text-[#25231F] dark:hover:text-[#F7F3EB] cursor-pointer"
              aria-label="Tutup Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links List */}
          <div className="space-y-6 my-auto text-center">
            {navLinks.map((link, idx) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-luxury text-3xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB] hover:text-[#B7A58A] transition-colors block py-1"
                >
                  {link.label}
                </a>
              </div>
            ))}

            <div className="pt-6">
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block py-3 px-8 rounded-full bg-[#25231F] dark:bg-[#F7F3EB] text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-semibold tracking-[0.25em] uppercase shadow-md"
              >
                Sahkan Kehadiran (RSVP)
              </a>
            </div>
          </div>

          {/* Mobile Menu Bottom */}
          <div className="flex items-center justify-between pt-6 border-t border-[#DED6C9] dark:border-[#2F2C27] text-xs text-[#716C64]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnvelope();
              }}
              type="button"
              className="flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-[#B7A58A]" />
              <span>Buka Semula Sampul</span>
            </button>

            <span>{WEDDING_DATA.event.dateFormatted}</span>
          </div>
        </div>
      )}
    </>
  );
};
