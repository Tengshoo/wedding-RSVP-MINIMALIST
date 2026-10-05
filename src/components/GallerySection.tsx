import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles, MapPin, Calendar, ZoomIn } from 'lucide-react';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  location: string;
  date: string;
  caption: string;
  palette: {
    bgFrom: string;
    bgTo: string;
    accent: string;
  };
  svgContent: React.ReactNode;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Janji Ikatan Hati',
    category: 'Sesi Pra-Perkahwinan',
    aspect: 'portrait', // 3:4
    location: 'Taman Botani Perdana, Kuala Lumpur',
    date: 'Ogos 2026',
    caption: 'Momen manis bertukar senyuman di bawah rimbunan pepohon hijau, detik mula merangka impian bersama.',
    palette: {
      bgFrom: '#EFECE6',
      bgTo: '#DFD8CE',
      accent: '#8D735C',
    },
    svgContent: (
      <svg viewBox="0 0 300 400" className="w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="grad-p1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#DFD8CE" />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad-p1)" />
        {/* Arch Frame */}
        <path d="M 30 380 V 140 A 120 120 0 0 1 270 140 V 380" stroke="#8D735C" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        {/* Sun & Botanical Foliage */}
        <circle cx="150" cy="110" r="45" fill="#E7DEC8" opacity="0.7" />
        <path d="M 40 380 Q 80 240 130 290 Q 180 340 220 270 Q 250 320 270 380 Z" fill="#C5B5A3" opacity="0.3" />
        {/* Couple Silhouette */}
        <circle cx="130" cy="180" r="18" fill="#5A3825" opacity="0.85" />
        <circle cx="170" cy="186" r="15" fill="#8D735C" opacity="0.85" />
        <path d="M 105 320 C 105 230 120 205 130 205 C 140 205 155 230 155 320 Z" fill="#5A3825" opacity="0.85" />
        <path d="M 148 320 C 148 235 160 212 170 212 C 180 212 192 235 192 320 Z" fill="#8D735C" opacity="0.8" />
        {/* Veil */}
        <path d="M 160 178 C 175 190 200 240 195 300 C 180 295 170 270 165 240 Z" fill="#FFFFFF" opacity="0.6" />
        {/* Ring & Bloom */}
        <circle cx="150" cy="245" r="5" fill="#C5B5A3" />
      </svg>
    ),
  },
  {
    id: 'photo-2',
    title: 'Sentuhan Songket Tenun Warisan',
    category: 'Busana Tradisi',
    aspect: 'square', // 1:1
    location: 'Seputeh Atelier, Kuala Lumpur',
    date: 'September 2026',
    caption: 'Keanggunan seni tenunan songket Melayu berwarna mocha lembut yang melambangkan kehalusan adat budaya.',
    palette: {
      bgFrom: '#F4EFEB',
      bgTo: '#E5DBD0',
      accent: '#5A3825',
    },
    svgContent: (
      <svg viewBox="0 0 300 300" className="w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="grad-p2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F9F6F0" />
            <stop offset="100%" stopColor="#E2D7CC" />
          </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#grad-p2)" />
        {/* Geometric Songket Motifs (Pucuk Rebung / Bunga Bintang) */}
        <g stroke="#8D735C" strokeWidth="1.2" opacity="0.65">
          <path d="M 150 40 L 175 80 L 150 120 L 125 80 Z" fill="#C5B5A3" fillOpacity="0.3" />
          <path d="M 70 110 L 95 150 L 70 190 L 45 150 Z" fill="#C5B5A3" fillOpacity="0.3" />
          <path d="M 230 110 L 255 150 L 230 190 L 205 150 Z" fill="#C5B5A3" fillOpacity="0.3" />
          <path d="M 150 180 L 175 220 L 150 260 L 125 220 Z" fill="#C5B5A3" fillOpacity="0.3" />
        </g>
        {/* Kerongsang & Butang Baju Melayu details */}
        <circle cx="150" cy="150" r="28" stroke="#5A3825" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="18" fill="#8D735C" opacity="0.85" />
        <circle cx="150" cy="150" r="7" fill="#E7DEC8" />
        <circle cx="150" cy="115" r="4" fill="#8D735C" />
        <circle cx="150" cy="185" r="4" fill="#8D735C" />
      </svg>
    ),
  },
  {
    id: 'photo-3',
    title: 'Kilauan Cincin Mahligai Kasih',
    category: 'Cincin & Hantaran',
    aspect: 'landscape', // 4:3
    location: 'The Glasshouse Suite',
    date: 'Oktober 2026',
    caption: 'Kilauan permata abadi tersemat kemas di atas dulang tembaga berlapik kain sutera dan bunga mawar pastel.',
    palette: {
      bgFrom: '#F7F3EE',
      bgTo: '#E8E0D5',
      accent: '#8D735C',
    },
    svgContent: (
      <svg viewBox="0 0 400 300" className="w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="grad-p3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCFAF7" />
            <stop offset="100%" stopColor="#E9E2D8" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#grad-p3)" />
        {/* Soft Oval Tray */}
        <ellipse cx="200" cy="160" rx="140" ry="70" fill="#E7DEC8" opacity="0.6" stroke="#8D735C" strokeWidth="1.5" />
        <ellipse cx="200" cy="155" rx="120" ry="55" fill="#FAF8F5" stroke="#C5B5A3" strokeWidth="1" strokeDasharray="4 4" />
        {/* Two Intertwined Wedding Bands */}
        <ellipse cx="185" cy="150" rx="28" ry="18" stroke="#8D735C" strokeWidth="4.5" fill="none" />
        <ellipse cx="215" cy="150" rx="28" ry="18" stroke="#5A3825" strokeWidth="4" fill="none" />
        {/* Sparkle Glint */}
        <circle cx="192" cy="136" r="4" fill="#FAF8F5" />
        <path d="M 192 126 L 192 146 M 182 136 L 202 136" stroke="#8D735C" strokeWidth="1.5" strokeLinecap="round" />
        {/* Floral Sprigs */}
        <path d="M 100 170 Q 130 150 145 165" stroke="#8D735C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="145" cy="165" r="4" fill="#C5B5A3" />
        <path d="M 300 170 Q 270 150 255 165" stroke="#8D735C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="255" cy="165" r="4" fill="#C5B5A3" />
      </svg>
    ),
  },
  {
    id: 'photo-4',
    title: 'Alunan Senja di Tepian Tasik',
    category: 'Sesi Senja (Golden Hour)',
    aspect: 'portrait', // 3:4
    location: 'Tasik Titiwangsa, Kuala Lumpur',
    date: 'Ogos 2026',
    caption: 'Cahaya keemasan mentari melabuhkan tirai menyinari pandangan berbalas rasa penuh keikhlasan.',
    palette: {
      bgFrom: '#EFEAE1',
      bgTo: '#DDD1C1',
      accent: '#5A3825',
    },
    svgContent: (
      <svg viewBox="0 0 300 400" className="w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="grad-p4" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F9F5EC" />
            <stop offset="60%" stopColor="#EADDCB" />
            <stop offset="100%" stopColor="#C9B8A2" />
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#grad-p4)" />
        {/* Golden Sun */}
        <circle cx="150" cy="160" r="55" fill="#E7DEC8" opacity="0.8" />
        <circle cx="150" cy="160" r="35" fill="#FFFFFF" opacity="0.6" />
        {/* Lake Horizon & Ripples */}
        <line x1="0" y1="260" x2="300" y2="260" stroke="#8D735C" strokeWidth="1" opacity="0.5" />
        <line x1="40" y1="275" x2="260" y2="275" stroke="#8D735C" strokeWidth="1" strokeDasharray="8 6" opacity="0.4" />
        <line x1="80" y1="290" x2="220" y2="290" stroke="#8D735C" strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
        {/* Couple Standing Together */}
        <g transform="translate(100, 150)">
          <circle cx="35" cy="20" r="14" fill="#5A3825" />
          <circle cx="65" cy="24" r="12" fill="#8D735C" />
          <path d="M 15 110 C 15 45 28 35 35 35 C 42 35 55 45 55 110 Z" fill="#5A3825" />
          <path d="M 50 110 C 50 50 58 40 65 40 C 72 40 82 50 82 110 Z" fill="#8D735C" />
          {/* Linked Hands */}
          <circle cx="52" cy="70" r="5" fill="#E7DEC8" />
        </g>
      </svg>
    ),
  },
  {
    id: 'photo-5',
    title: 'Tawa Riang & Momen Spontan',
    category: 'Candid & Gelak Tawa',
    aspect: 'square', // 1:1
    location: 'Rumah Warisan KL',
    date: 'September 2026',
    caption: 'Detik spontan yang tidak dirancang sentiasa menjadi kenangan paling jujur terpahat di sanubari.',
    palette: {
      bgFrom: '#F7F3EE',
      bgTo: '#E7DED2',
      accent: '#8D735C',
    },
    svgContent: (
      <svg viewBox="0 0 300 300" className="w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="grad-p5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCFAF7" />
            <stop offset="100%" stopColor="#E5DACB" />
          </linearGradient>
        </defs>
        <rect width="300" height="300" fill="url(#grad-p5)" />
        {/* Wooden Window Lattice Pattern */}
        <rect x="35" y="35" width="230" height="230" rx="8" stroke="#8D735C" strokeWidth="1.5" opacity="0.6" />
        <line x1="150" y1="35" x2="150" y2="265" stroke="#8D735C" strokeWidth="1.2" opacity="0.5" />
        <line x1="35" y1="150" x2="265" y2="150" stroke="#8D735C" strokeWidth="1.2" opacity="0.5" />
        {/* Heart Burst & Joy Silhouette */}
        <circle cx="150" cy="150" r="45" fill="#FAF8F5" stroke="#C5B5A3" strokeWidth="1.5" />
        <path d="M 150 135 C 145 125 132 125 128 135 C 122 148 150 168 150 168 C 150 168 178 148 172 135 C 168 125 155 125 150 135 Z" fill="#8D735C" />
        <circle cx="120" cy="120" r="3" fill="#C5B5A3" />
        <circle cx="180" cy="120" r="3" fill="#C5B5A3" />
        <circle cx="150" cy="95" r="4" fill="#E7DEC8" />
      </svg>
    ),
  },
  {
    id: 'photo-6',
    title: 'Mahligai Kaca di Bawah Bintang',
    category: 'Lokasi & Senibina',
    aspect: 'landscape', // 4:3
    location: 'The Glasshouse at Seputeh',
    date: 'Oktober 2026',
    caption: 'Pemandangan malam dewan kaca berkilauan lampu lilin dan fairy lights menanti kehadiran para tetamu.',
    palette: {
      bgFrom: '#EAE5DC',
      bgTo: '#D4C9BA',
      accent: '#5A3825',
    },
    svgContent: (
      <svg viewBox="0 0 400 300" className="w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="grad-p6" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5F0E8" />
            <stop offset="100%" stopColor="#CFC2B0" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#grad-p6)" />
        {/* Fairy lights strings */}
        <path d="M 20 60 Q 110 90 200 65 Q 290 90 380 60" stroke="#8D735C" strokeWidth="1.2" strokeDasharray="2 4" />
        <path d="M 20 100 Q 110 130 200 105 Q 290 130 380 100" stroke="#8D735C" strokeWidth="1.2" strokeDasharray="2 4" />
        {/* Warm light bulbs */}
        <circle cx="65" cy="74" r="5" fill="#E7DEC8" />
        <circle cx="140" cy="80" r="5" fill="#E7DEC8" />
        <circle cx="200" cy="65" r="5" fill="#E7DEC8" />
        <circle cx="260" cy="80" r="5" fill="#E7DEC8" />
        <circle cx="335" cy="74" r="5" fill="#E7DEC8" />
        {/* Conservatory Gable Roof */}
        <path d="M 70 260 L 70 160 L 200 90 L 330 160 L 330 260 Z" stroke="#5A3825" strokeWidth="2" fill="#FAF8F5" fillOpacity="0.4" />
        <line x1="200" y1="90" x2="200" y2="260" stroke="#8D735C" strokeWidth="1.5" />
        <circle cx="200" cy="180" r="14" fill="#C5B5A3" opacity="0.6" />
      </svg>
    ),
  },
];

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showPrevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  }, [selectedPhotoIndex]);

  const showNextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
    );
  }, [selectedPhotoIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevPhoto();
      } else if (e.key === 'ArrowRight') {
        showNextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, showPrevPhoto, showNextPhoto]);

  // Prevent background body scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhotoIndex]);

  const activePhoto = selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section id="galeri" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-left mb-12 sm:mb-16">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          07 / Koleksi Memori
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          The Memories
        </h2>
        <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed max-w-xl pt-3">
          Bingkisan potret manis sepanjang fasa perkenalan, pertunangan, dan persiapan menjelang hari bahagia Atif & Isma.
        </p>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Responsive Masonry / Column Grid (2 cols on mobile/tablet, 3 cols on desktop) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_PHOTOS.map((photo, index) => {
            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer border border-stone-200/80 dark:border-stone-750 bg-[#FAF8F5] dark:bg-stone-800 shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Photo Aspect Ratio Wrapper */}
                <div
                  className={`w-full overflow-hidden relative ${
                    photo.aspect === 'portrait'
                      ? 'aspect-[3/4]'
                      : photo.aspect === 'square'
                      ? 'aspect-square'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    {photo.svgContent}
                  </div>

                  {/* Gradient Scrim on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#E7DEC8] font-sans font-medium mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{photo.category}</span>
                    </div>
                    <p className="font-serif-luxury text-lg font-medium leading-tight">
                      {photo.title}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-stone-300 mt-1">
                      <MapPin className="w-3 h-3 text-[#C5B5A3]" />
                      <span className="truncate">{photo.location}</span>
                    </div>
                  </div>

                  {/* Top-Right Quick Expand Affordance Button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-xs flex items-center justify-center text-stone-700 dark:text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtitle Card Footer (always visible for elegance) */}
                <div className="p-3 bg-white dark:bg-stone-850 flex items-center justify-between border-t border-stone-100 dark:border-stone-800">
                  <div className="truncate pr-2">
                    <p className="font-serif-luxury text-sm font-medium text-stone-800 dark:text-stone-200 truncate">
                      {photo.title}
                    </p>
                    <p className="text-[10px] text-stone-400 dark:text-stone-500 font-sans truncate">
                      {photo.category} · {photo.date}
                    </p>
                  </div>
                  <Camera className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper */}
        <div className="mt-8 pt-6 border-t border-[#DED6C9]/60 dark:border-[#2A2722]/60 text-center">
          <p className="text-xs text-[#716C64] dark:text-[#B7A58A] font-sans-clean">
            Sentuh atau klik mana-mana foto untuk paparan skrin penuh dan kisah di sebaliknya.
          </p>
        </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-700/40 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#DED6C9] dark:border-[#2F2C27] bg-[#F7F3EB] dark:bg-[#1E1C18] shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-[#716C64] dark:text-[#B7A58A]">
                  {selectedPhotoIndex + 1} / {GALLERY_PHOTOS.length}
                </span>
                <span className="text-[#DED6C9] dark:text-[#332F28]">·</span>
                <span className="text-xs uppercase tracking-wider text-[#B7A58A] font-sans-clean font-semibold">
                  {activePhoto.category}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                type="button"
                className="p-1.5 rounded-full text-[#716C64] hover:text-[#25231F] dark:hover:text-[#F7F3EB] transition-colors cursor-pointer"
                title="Tutup Paparan (Esc)"
                aria-label="Tutup Paparan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Display Area */}
            <div className="relative flex-1 bg-[#171613] flex items-center justify-center overflow-hidden min-h-[320px] max-h-[58vh]">
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                <div className="max-w-md w-full aspect-auto max-h-[54vh] rounded-xl overflow-hidden shadow-2xl">
                  {activePhoto.svgContent}
                </div>
              </div>

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevPhoto();
                }}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                title="Foto Sebelumnya (Panah Kiri)"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNextPhoto();
                }}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                title="Foto Seterusnya (Panah Kanan)"
                aria-label="Foto Seterusnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Story Details */}
            <div className="p-5 sm:p-6 bg-[#F7F3EB] dark:bg-[#1E1C18] space-y-2 shrink-0 border-t border-[#DED6C9] dark:border-[#2F2C27]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 id="lightbox-title" className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#25231F] dark:text-[#F7F3EB]">
                  {activePhoto.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#716C64] dark:text-[#B7A58A] font-sans-clean">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B7A58A]" />
                    <span>{activePhoto.location}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B7A58A]" />
                    <span>{activePhoto.date}</span>
                  </span>
                </div>
              </div>

              <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed pt-1">
                {activePhoto.caption}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
