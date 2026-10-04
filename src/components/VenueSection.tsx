import React, { useState } from 'react';
import { MapPin, Navigation, Car, Copy, Check, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Lokasi & Dewan Majlis
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {WEDDING_DATA.venue.name}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans-clean">
            {WEDDING_DATA.venue.hall}
          </p>
        </div>

        {/* Venue Scenic Architectural Illustration Card */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8 border border-stone-200 dark:border-stone-800 bg-[#EFECE6] dark:bg-[#201D1A]">
          {/* Architectural Drawing of Glasshouse conservatory with glass skylight and curated courtyard foliage */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <svg
              className="w-full h-full text-stone-500/50 dark:text-stone-400/30 object-contain"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glasshouse Structure */}
              <path
                d="M100 360 L100 180 L400 60 L700 180 L700 360 Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              {/* Glass roof trusses */}
              <line x1="400" y1="60" x2="400" y2="360" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="250" y1="120" x2="250" y2="360" stroke="currentColor" strokeWidth="1.5" />
              <line x1="550" y1="120" x2="550" y2="360" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Horizontal glass girders */}
              <line x1="100" y1="180" x2="700" y2="180" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="260" x2="700" y2="260" stroke="currentColor" strokeWidth="1.5" />
              
              {/* Glass roof diagonals */}
              <line x1="100" y1="180" x2="250" y2="120" stroke="currentColor" strokeWidth="1" />
              <line x1="250" y1="120" x2="400" y2="180" stroke="currentColor" strokeWidth="1" />
              <line x1="400" y1="180" x2="550" y2="120" stroke="currentColor" strokeWidth="1" />
              <line x1="550" y1="120" x2="700" y2="180" stroke="currentColor" strokeWidth="1" />

              {/* Decorative Chandeliers / Fairy Lights */}
              <circle cx="400" cy="190" r="14" fill="#E7DEC8" opacity="0.8" />
              <circle cx="250" cy="210" r="10" fill="#E7DEC8" opacity="0.6" />
              <circle cx="550" cy="210" r="10" fill="#E7DEC8" opacity="0.6" />

              {/* Surrounding Botanical Courtyard Trees */}
              <path
                d="M50 360 C50 300, 30 250, 70 200 C110 250, 90 320, 90 360"
                fill="#8D735C"
                opacity="0.3"
              />
              <path
                d="M710 360 C710 290, 740 240, 760 200 C780 250, 750 320, 750 360"
                fill="#8D735C"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Overlay Tag */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 text-[11px] font-sans-clean font-medium text-stone-700 dark:text-stone-300 flex items-center gap-1.5 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#8D735C]" />
            <span>Dewan Kaca Eksklusif Seputeh</span>
          </div>

          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] tracking-wider uppercase font-sans">
            Dewan Berhawa Dingin & Taman Terbuka
          </div>
        </div>

        {/* Address & Copy Action */}
        <div className="bg-[#FAF8F5] dark:bg-stone-800/50 p-5 rounded-2xl border border-stone-200/70 dark:border-stone-800 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8D735C] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 font-sans-clean">
                  Alamat Penuh
                </p>
                <p className="text-sm font-sans-clean text-stone-800 dark:text-stone-200 font-medium leading-relaxed mt-0.5">
                  {WEDDING_DATA.venue.address}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              type="button"
              className="px-4 py-2 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-200 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-sans-clean font-medium flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Alamat Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Salin Alamat</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Navigation CTAs (Google Maps & Waze) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-2xl bg-[#2C2B2A] hover:bg-[#1A1918] dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-sans-clean text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Navigation className="w-4 h-4" />
            <span>Buka Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href={WEDDING_DATA.venue.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-2xl bg-[#8D735C] hover:bg-[#785E47] text-white font-sans-clean text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Car className="w-4 h-4" />
            <span>Navigasi Waze</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Transportation & Parking Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-clean text-stone-600 dark:text-stone-300">
          <div className="p-4 bg-stone-50 dark:bg-stone-800/30 rounded-2xl border border-stone-200/50 dark:border-stone-800">
            <div className="flex items-center gap-2 mb-1.5 font-medium text-stone-800 dark:text-stone-200">
              <Car className="w-4 h-4 text-[#8D735C]" />
              <span>Tempat Letak Kereta & Valet</span>
            </div>
            <p className="leading-relaxed text-stone-500 dark:text-stone-400">
              {WEDDING_DATA.venue.parkingNote}
            </p>
          </div>

          <div className="p-4 bg-stone-50 dark:bg-stone-800/30 rounded-2xl border border-stone-200/50 dark:border-stone-800">
            <div className="flex items-center gap-2 mb-1.5 font-medium text-stone-800 dark:text-stone-200">
              <Navigation className="w-4 h-4 text-[#8D735C]" />
              <span>Pengangkutan Awam & E-Hailing</span>
            </div>
            <p className="leading-relaxed text-stone-500 dark:text-stone-400">
              {WEDDING_DATA.venue.transitNote}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
