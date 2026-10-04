import React from 'react';
import { Calendar, MapPin, Sparkles, Music2, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { romanticAudio } from '../utils/romanticAudio';

interface HeroSectionProps {
  onToggleMusic: () => void;
  isPlayingMusic: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onToggleMusic,
  isPlayingMusic,
}) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 text-center overflow-hidden">
      {/* Curved Arced Text Badge */}
      <div className="relative inline-flex items-center justify-center mb-4">
        <div className="text-[11px] sm:text-xs font-sans-clean uppercase tracking-[0.3em] text-[#8D735C] dark:text-[#C5B5A3] font-medium py-1 px-4 border border-[#8D735C]/30 dark:border-[#C5B5A3]/30 rounded-full bg-white/50 dark:bg-stone-900/50 backdrop-blur-xs">
          The Wedding Celebration · Walimatulurus
        </div>
      </div>

      {/* Date Header */}
      <div className="text-xs sm:text-sm font-sans-clean tracking-widest uppercase text-stone-500 dark:text-stone-400 mb-6">
        <span>{WEDDING_DATA.event.dateFormatted}</span>
        <span className="mx-2 text-stone-300 dark:text-stone-700">|</span>
        <span>{WEDDING_DATA.event.hijriDate}</span>
      </div>

      {/* Editorial Couple Portrait Frame with Arch Architecture */}
      <div className="relative max-w-xs sm:max-w-sm mx-auto mb-8">
        <div className="relative w-full aspect-[3/4] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white dark:border-stone-800 bg-[#EFEAE3] dark:bg-[#282521] flex flex-col items-center justify-center p-6 transition-all duration-300">
          
          {/* Subtle archival watermark or botanical line illustration inside */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE9]/40 via-transparent to-[#2C2B2A]/40 dark:from-[#201E1B]/30 dark:to-black/60 pointer-events-none" />

          {/* Artistic Editorial Silhouette & Botanical Floral Arch Vector */}
          <svg
            className="w-full h-full text-stone-400/40 dark:text-stone-600/30 object-contain"
            viewBox="0 0 300 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Architectural Arch border */}
            <path
              d="M30 380 V 150 A 120 120 0 0 1 270 150 V 380"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            {/* Delicate Botanical Leaves */}
            <path
              d="M150 40 C 130 70, 100 80, 80 110 M150 40 C 170 70, 200 80, 220 110"
              stroke="#8D735C"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="150" cy="38" r="4" fill="#8D735C" />
            <circle cx="80" cy="110" r="3" fill="#C5B5A3" />
            <circle cx="220" cy="110" r="3" fill="#C5B5A3" />

            {/* Couple Silhouette Fine Art */}
            <g transform="translate(60, 130)">
              {/* Groom Silhouette */}
              <circle cx="65" cy="55" r="22" fill="#5A3825" opacity="0.85" />
              <path
                d="M35 180 C 35 110, 50 85, 65 85 C 80 85, 95 110, 95 180 Z"
                fill="#5A3825"
                opacity="0.85"
              />
              <path
                d="M58 85 L 65 105 L 72 85 Z"
                fill="#C5B5A3"
                opacity="0.9"
              />
              {/* Bride Silhouette with flowing veil */}
              <circle cx="115" cy="62" r="19" fill="#8D735C" opacity="0.85" />
              <path
                d="M85 180 C 85 115, 100 95, 115 95 C 130 95, 145 115, 145 180 Z"
                fill="#8D735C"
                opacity="0.8"
              />
              {/* Flowing Veil */}
              <path
                d="M105 52 C 95 65, 80 120, 75 190 C 120 185, 155 170, 160 110 C 150 70, 130 52, 105 52 Z"
                fill="#F8F6F0"
                opacity="0.5"
              />
              {/* Small bouquet */}
              <circle cx="95" cy="130" r="8" fill="#E7DEC8" />
              <circle cx="102" cy="126" r="6" fill="#C5B5A3" />
              <circle cx="90" cy="127" r="5" fill="#8D735C" />
            </g>
          </svg>

          {/* Bottom badge on the portrait */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md rounded-xl p-3 shadow-md border border-stone-200/60 dark:border-stone-800">
            <p className="text-[10px] tracking-widest uppercase font-sans-clean text-stone-500 dark:text-stone-400">
              Mahligai Kasih
            </p>
            <p className="font-serif-luxury text-sm font-medium text-stone-800 dark:text-stone-200">
              The Glasshouse at Seputeh · Kuala Lumpur
            </p>
          </div>
        </div>

        {/* Ambient Ring Accent */}
        <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-[#E7DEC8]/40 dark:bg-[#5A3825]/30 -z-10 blur-xl" />
        <div className="absolute -top-3 -left-3 w-20 h-20 rounded-full bg-[#8D735C]/20 dark:bg-[#8D735C]/20 -z-10 blur-xl" />
      </div>

      {/* Main Couple Names in Calligraphy & Editorial Typography */}
      <div className="space-y-2 max-w-xl mx-auto mb-6">
        <h1 className="font-script-calligraphy text-5xl sm:text-6xl md:text-7xl text-[#2C2B2A] dark:text-[#F5F3EF] leading-tight font-normal">
          {WEDDING_DATA.couple.groom}
        </h1>
        <div className="flex items-center justify-center gap-4 my-1">
          <div className="w-12 h-[1px] bg-stone-300 dark:bg-stone-700" />
          <span className="font-serif-luxury text-2xl italic text-[#8D735C] dark:text-[#C5B5A3]">&</span>
          <div className="w-12 h-[1px] bg-stone-300 dark:bg-stone-700" />
        </div>
        <h1 className="font-script-calligraphy text-5xl sm:text-6xl md:text-7xl text-[#2C2B2A] dark:text-[#F5F3EF] leading-tight font-normal">
          {WEDDING_DATA.couple.bride}
        </h1>
      </div>

      {/* Subtitle / Venue & Time */}
      <p className="text-xs sm:text-sm font-sans-clean text-stone-600 dark:text-stone-300 tracking-wide max-w-md mx-auto mb-8 leading-relaxed">
        {WEDDING_DATA.venue.name} · {WEDDING_DATA.event.timeSpan}
      </p>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-md mx-auto">
        <a
          href="#rsvp"
          className="px-6 py-3 rounded-full bg-[#2C2B2A] hover:bg-[#1A1918] dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-sans-clean text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all"
        >
          Sahkan Kehadiran (RSVP)
        </a>

        <a
          href="#lokasi"
          className="px-5 py-3 rounded-full bg-white dark:bg-stone-850 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-sans-clean text-xs font-medium tracking-wider uppercase transition-all shadow-xs flex items-center gap-1.5"
        >
          <MapPin className="w-3.5 h-3.5 text-[#8D735C]" />
          <span>Lihat Lokasi</span>
        </a>

        <button
          onClick={onToggleMusic}
          type="button"
          className="px-4 py-3 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-300 font-sans-clean text-xs font-medium tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <Music2 className={`w-3.5 h-3.5 ${isPlayingMusic ? 'text-[#8D735C] animate-spin-slow' : 'text-stone-400'}`} />
          <span>{isPlayingMusic ? 'Jeda Muzik' : 'Pasang Muzik'}</span>
        </button>
      </div>
    </section>
  );
};
