import React from 'react';
import { MapPin, ArrowDown, Music2, Calendar } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface HeroSectionProps {
  onToggleMusic: () => void;
  isPlayingMusic: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onToggleMusic,
  isPlayingMusic,
}) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-12 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* 1. Top Metadata Kicker (Asymmetric Left / Right Alignment) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs tracking-[0.3em] uppercase text-[#716C64] dark:text-[#B7A58A] font-sans-clean pt-2">
        <div>
          <span>WALIMATULURUS</span>
          <span className="mx-2 text-[#B7A58A] dark:text-[#716C64]">/</span>
          <span>KUALA LUMPUR</span>
        </div>
        <div className="text-[11px] sm:text-xs tracking-[0.25em] text-[#716C64]/80 dark:text-[#B7A58A]/80">
          {WEDDING_DATA.event.hijriDate}
        </div>
      </div>

      {/* 2. Main Hero Composition (Asymmetric Editorial Layout) */}
      <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Typographic Powerhouse (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <p className="text-xs sm:text-sm font-sans-clean uppercase tracking-[0.4em] text-[#716C64] dark:text-[#B7A58A] font-medium">
            The Wedding of
          </p>

          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#25231F] dark:text-[#F7F3EB] font-normal leading-[0.95]">
              {WEDDING_DATA.couple.groom}
            </h1>
            <div className="flex items-center gap-4 py-1">
              <span className="font-serif-luxury text-3xl sm:text-4xl italic text-[#B7A58A]">
                &
              </span>
              <div className="h-[1px] w-24 bg-[#DED6C9] dark:bg-[#332F28]" />
            </div>
            <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#25231F] dark:text-[#F7F3EB] font-normal leading-[0.95]">
              {WEDDING_DATA.couple.bride}
            </h1>
          </div>

          <p className="font-serif-luxury text-lg sm:text-xl text-[#716C64] dark:text-[#B7A58A] pt-2">
            {WEDDING_DATA.event.dateFormatted} · {WEDDING_DATA.venue.name}
          </p>

          {/* Quick CTA Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href="#rsvp"
              className="py-3 px-7 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-semibold tracking-[0.2em] uppercase transition-all shadow-md hover:scale-102"
            >
              Sahkan Kehadiran
            </a>

            <a
              href="#lokasi"
              className="py-3 px-5 rounded-full border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] text-[#25231F] dark:text-[#F7F3EB] text-xs font-sans-clean tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B7A58A]" />
              <span>Lokasi</span>
            </a>

            <button
              onClick={onToggleMusic}
              type="button"
              className="py-3 px-4 rounded-full border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] text-[#716C64] dark:text-[#B7A58A] text-xs font-sans-clean tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <Music2 className={`w-3.5 h-3.5 ${isPlayingMusic ? 'text-[#B7A58A] animate-spin-slow' : ''}`} />
              <span className="hidden sm:inline">{isPlayingMusic ? 'Jeda Muzik' : 'Muzik'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Framed Editorial Artwork (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-t-[140px] rounded-b-2xl overflow-hidden border border-[#DED6C9] dark:border-[#332F28] shadow-2xl bg-[#EFECE4] dark:bg-[#201E1A] p-6 flex flex-col justify-between group">
            
            {/* Soft Ambient Background Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#25231F]/30 via-transparent to-transparent pointer-events-none" />

            {/* Architectural Arch SVG Vector Silhouette & Botanical Harmony */}
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 300 400" fill="none" className="w-full h-full">
                {/* Arch outline */}
                <path
                  d="M 30 380 V 140 A 120 120 0 0 1 270 140 V 380"
                  stroke="#B7A58A"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
                {/* Minimalist Couple Silhouette */}
                <g transform="translate(65, 120)">
                  {/* Groom */}
                  <circle cx="65" cy="55" r="22" fill="#25231F" opacity="0.9" />
                  <path d="M 35 180 C 35 110, 50 85, 65 85 C 80 85, 95 110, 95 180 Z" fill="#25231F" opacity="0.9" />
                  <path d="M 58 85 L 65 105 L 72 85 Z" fill="#B7A58A" />
                  
                  {/* Bride */}
                  <circle cx="115" cy="62" r="19" fill="#716C64" opacity="0.9" />
                  <path d="M 85 180 C 85 115, 100 95, 115 95 C 130 95, 145 115, 145 180 Z" fill="#716C64" opacity="0.85" />
                  {/* Veil */}
                  <path d="M 105 52 C 95 65, 80 120, 75 190 C 120 185, 155 170, 160 110 C 150 70, 130 52, 105 52 Z" fill="#F7F3EB" opacity="0.55" />
                  {/* Floral Sprig */}
                  <circle cx="95" cy="130" r="7" fill="#B7A58A" />
                  <circle cx="102" cy="126" r="5" fill="#DED6C9" />
                </g>
              </svg>
            </div>

            {/* Bottom Caption Pill */}
            <div className="relative z-10 bg-[#F7F3EB]/90 dark:bg-[#1A1815]/90 backdrop-blur-md rounded-xl p-3 border border-[#DED6C9]/80 dark:border-[#38332B] flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                  Mahligai Perkahwinan
                </p>
                <p className="font-serif-luxury text-xs sm:text-sm font-medium text-[#25231F] dark:text-[#F7F3EB]">
                  {WEDDING_DATA.couple.shortNames}
                </p>
              </div>
              <span className="font-mono text-xs text-[#716C64]">12.12.26</span>
            </div>

          </div>
        </div>

      </div>

      {/* 3. Subtle Scroll Indicator */}
      <div className="flex items-center justify-between pt-4 border-t border-[#DED6C9]/40 dark:border-[#2A2722]/40 text-xs text-[#716C64] dark:text-[#B7A58A] font-sans-clean">
        <span className="tracking-[0.2em] uppercase text-[10px]">
          Sila Skrol Untuk Meneroka
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase">Perjalanan Cinta</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#B7A58A] animate-bounce" />
        </div>
      </div>

    </section>
  );
};
