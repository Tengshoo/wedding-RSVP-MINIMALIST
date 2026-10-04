import React, { useState } from 'react';
import { Mail, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { romanticAudio } from '../utils/romanticAudio';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
  guestName?: string;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  isOpen,
  onOpenInvitation,
  guestName = "Tetamu Kehormat Sekeluarga",
}) => {
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpenClick = () => {
    setIsOpening(true);
    // Start ambient romantic music on first user intent
    romanticAudio.play();
    setTimeout(() => {
      onOpenInvitation();
      setIsOpening(false);
    }, 850);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="envelope-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-md transition-opacity duration-500"
    >
      <div
        className={`relative w-full max-w-md bg-[#FAF8F5] dark:bg-[#201E1B] rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200/80 dark:border-stone-800 text-center transition-all duration-700 transform ${
          isOpening ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Subtle decorative corners */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-stone-300 dark:border-stone-700 pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-stone-300 dark:border-stone-700 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-stone-300 dark:border-stone-700 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-stone-300 dark:border-stone-700 pointer-events-none" />

        {/* Envelope Top Header */}
        <div className="space-y-2 mb-6">
          <p className="text-[11px] tracking-[0.25em] uppercase font-sans-clean text-stone-500 dark:text-stone-400">
            Jemputan Rasmi Walimatulurus
          </p>
          <h2 id="envelope-title" className="font-serif-luxury text-3xl sm:text-4xl text-stone-800 dark:text-stone-100 font-normal">
            {WEDDING_DATA.couple.shortNames}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
            <span>{WEDDING_DATA.event.dateFormatted}</span>
            <span>·</span>
            <span>Kuala Lumpur</span>
          </div>
        </div>

        {/* Wax Seal & Envelope graphic representation */}
        <div className="my-8 relative flex flex-col items-center justify-center">
          <div className="w-56 h-36 bg-[#F3EFEA] dark:bg-[#2A2723] rounded-2xl border border-stone-300/80 dark:border-stone-700 relative shadow-inner flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Triangular envelope fold outline */}
            <div className="absolute top-0 left-0 right-0 h-16 border-b border-stone-300/60 dark:border-stone-700/60 transform origin-top" />
            
            {/* Dedicated recipient badge */}
            <div className="z-10 bg-white/90 dark:bg-stone-900/90 px-3.5 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 shadow-sm mt-4 max-w-[90%]">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-sans">Khas Buat</p>
              <p className="text-xs font-serif-luxury font-medium text-stone-800 dark:text-stone-200 truncate">
                {guestName}
              </p>
            </div>
          </div>

          {/* Golden Wax Seal with Monogram */}
          <button
            onClick={handleOpenClick}
            type="button"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#8D735C] via-[#6F5744] to-[#503E30] text-[#F9F7F3] shadow-xl border-2 border-[#C5B5A3]/60 flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer group"
            title="Tekan untuk buka jemputan"
          >
            <span className="font-serif-luxury font-bold text-sm tracking-widest text-[#F9F7F3] group-hover:tracking-wider transition-all">
              {WEDDING_DATA.couple.initials}
            </span>
            <div className="w-6 h-[1px] bg-[#E7DEC8]/40 my-0.5" />
            <span className="text-[8px] uppercase tracking-wider text-[#E7DEC8]/80">Buka</span>
          </button>
        </div>

        {/* Action description & Open CTA */}
        <div className="space-y-4 mt-6">
          <p className="text-xs text-stone-500 dark:text-stone-400 font-sans-clean leading-relaxed px-4">
            Dengan penuh rasa kesyukuran, kami menjemput anda meraikan ikatan suci perkahwinan kami.
          </p>

          <button
            onClick={handleOpenClick}
            type="button"
            className="w-full py-3.5 px-6 rounded-2xl bg-[#2C2B2A] hover:bg-[#1A1918] dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-sans-clean text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Buka Undangan</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 dark:text-stone-500">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Muzik alunan romantis akan dimainkan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
