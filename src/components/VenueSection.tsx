import React, { useState } from 'react';
import { Navigation, Car, Copy, Check, ExternalLink, MapPin } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(WEDDING_DATA.venue.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-left mb-12 sm:mb-16">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          05 / Lokasi & Dewan
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          The Place
        </h2>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Immersive Architectural Venue Illustration Frame */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#EFECE4] dark:bg-[#1E1C18] border border-[#DED6C9] dark:border-[#2F2C27] shadow-lg mb-10 flex items-center justify-center p-6 group">
        
        {/* Subtle Ambient Night/Day Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#25231F]/40 via-transparent to-transparent pointer-events-none" />

        {/* Conservatory & Courtyard SVG Architecture */}
        <svg viewBox="0 0 800 350" fill="none" className="w-full h-full text-[#B7A58A]/45 dark:text-[#B7A58A]/35">
          {/* Glasshouse Structure */}
          <path d="M 120 320 L 120 160 L 400 50 L 680 160 L 680 320 Z" stroke="currentColor" strokeWidth="2" />
          <line x1="400" y1="50" x2="400" y2="320" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="260" y1="105" x2="260" y2="320" stroke="currentColor" strokeWidth="1.2" />
          <line x1="540" y1="105" x2="540" y2="320" stroke="currentColor" strokeWidth="1.2" />
          {/* Horizontal Glasslines */}
          <line x1="120" y1="160" x2="680" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="120" y1="240" x2="680" y2="240" stroke="currentColor" strokeWidth="1.2" />
          {/* Chandeliers & Ambient Glows */}
          <circle cx="400" cy="180" r="16" fill="#B7A58A" opacity="0.6" />
          <circle cx="260" cy="190" r="12" fill="#B7A58A" opacity="0.5" />
          <circle cx="540" cy="190" r="12" fill="#B7A58A" opacity="0.5" />
        </svg>

        {/* Badge in Bottom Corner */}
        <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#F7F3EB]/90 dark:bg-[#171613]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#DED6C9] dark:border-[#2F2C27] flex items-center gap-2 text-xs">
          <MapPin className="w-3.5 h-3.5 text-[#B7A58A]" />
          <span className="font-serif-luxury text-sm text-[#25231F] dark:text-[#F7F3EB] font-medium">
            {WEDDING_DATA.venue.hall}
          </span>
        </div>
      </div>

      {/* Venue Name & Full Address */}
      <div className="space-y-3 mb-8">
        <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#25231F] dark:text-[#F7F3EB] font-normal">
          {WEDDING_DATA.venue.name}
        </h3>
        <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed max-w-2xl">
          {WEDDING_DATA.venue.address}
        </p>
        <p className="font-sans-clean text-xs text-[#716C64]/80 dark:text-[#B7A58A]/80 pt-1">
          {WEDDING_DATA.venue.parkingNote} · {WEDDING_DATA.venue.transitNote}
        </p>
      </div>

      {/* Thumb-friendly CTA Buttons (Google Maps, Waze, Copy Address) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
        <a
          href={WEDDING_DATA.venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[50px] py-3.5 px-5 rounded-2xl bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <Navigation className="w-4 h-4" />
          <span>Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
        </a>

        <a
          href={WEDDING_DATA.venue.wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[50px] py-3.5 px-5 rounded-2xl border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] bg-white/40 dark:bg-stone-900/40 text-[#25231F] dark:text-[#F7F3EB] text-xs font-sans-clean font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
        >
          <Car className="w-4 h-4 text-[#B7A58A]" />
          <span>Waze Navigation</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
        </a>

        <button
          onClick={handleCopyAddress}
          type="button"
          className="min-h-[50px] py-3.5 px-5 rounded-2xl border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] bg-white/40 dark:bg-stone-900/40 text-[#25231F] dark:text-[#F7F3EB] text-xs font-sans-clean font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Alamat Disalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#B7A58A]" />
              <span>Salin Alamat</span>
            </>
          )}
        </button>
      </div>

    </section>
  );
};
