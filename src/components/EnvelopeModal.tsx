import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
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
  const [step, setStep] = useState<'initial' | 'opening' | 'revealed'>('initial');

  if (!isOpen) return null;

  const handleOpen = () => {
    if (step !== 'initial') return;
    setStep('opening');
    
    // Optional gentle music trigger
    try {
      romanticAudio.play();
    } catch {
      // Audio autoplay policy handled
    }

    setTimeout(() => {
      setStep('revealed');
      setTimeout(() => {
        onOpenInvitation();
      }, 700);
    }, 900);
  };

  const handleSkip = () => {
    onOpenInvitation();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="invitation-opening-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#F7F3EB]/98 dark:bg-[#171613]/98 backdrop-blur-xl transition-all duration-700 overflow-hidden select-none"
    >
      {/* Top Bar with SKIP Button */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
        <button
          onClick={handleSkip}
          type="button"
          className="text-[11px] font-sans-clean tracking-[0.25em] uppercase text-[#716C64] dark:text-[#B7A58A] hover:text-[#25231F] dark:hover:text-[#F7F3EB] py-2 px-4 rounded-full border border-[#DED6C9] dark:border-[#2F2C27] hover:border-[#B7A58A] transition-all cursor-pointer"
        >
          Langkau / Skip
        </button>
      </div>

      {/* Centerpiece Experience */}
      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center text-center px-4">
        
        {/* Monogram Seal & Header */}
        <div
          className={`transition-all duration-700 ${
            step === 'revealed' ? 'opacity-0 -translate-y-6 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          <p className="text-[10px] sm:text-xs font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
            Walimatulurus
          </p>
          <h1
            id="invitation-opening-title"
            className="font-serif-luxury text-3xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB] tracking-wide font-normal mb-2"
          >
            {WEDDING_DATA.couple.groom} & {WEDDING_DATA.couple.bride}
          </h1>
          <p className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] tracking-wider mb-8">
            {WEDDING_DATA.event.dateFormatted}
          </p>
        </div>

        {/* Bespoke Tactile Envelope */}
        <div
          className={`relative w-72 sm:w-88 h-48 sm:h-56 my-2 perspective-[1000px] transition-all duration-700 ${
            step === 'revealed' ? 'scale-110 opacity-0 -translate-y-12' : 'scale-100 opacity-100'
          }`}
        >
          {/* Main Envelope Body */}
          <div className="absolute inset-0 bg-[#EFECE4] dark:bg-[#201E1A] rounded-2xl border border-[#DED6C9] dark:border-[#2F2C27] shadow-2xl overflow-hidden flex flex-col justify-end p-5">
            {/* Triangular Flap Lines */}
            <div
              className={`absolute top-0 left-0 right-0 h-28 bg-[#E7DEC8] dark:bg-[#292621] border-b border-[#DED6C9] dark:border-[#38332B] origin-top transition-transform duration-700 shadow-sm ${
                step !== 'initial' ? '[transform:rotateX(180deg)] opacity-20' : '[transform:rotateX(0deg)]'
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            />

            {/* Inset Letter Card (sliding up on open) */}
            <div
              className={`absolute left-4 right-4 bg-[#F7F3EB] dark:bg-[#1A1815] rounded-xl p-4 border border-[#DED6C9]/80 dark:border-[#332F28] shadow-md transition-all duration-700 ${
                step !== 'initial'
                  ? '-translate-y-24 shadow-2xl scale-102 opacity-100'
                  : 'translate-y-4 opacity-80'
              }`}
            >
              <p className="text-[9px] font-sans-clean uppercase tracking-[0.25em] text-[#716C64] dark:text-[#B7A58A] text-center mb-1">
                Khas Buat
              </p>
              <p className="font-serif-luxury text-sm font-medium text-[#25231F] dark:text-[#F7F3EB] text-center truncate">
                {guestName}
              </p>
            </div>
          </div>

          {/* Golden Wax Seal Button */}
          <button
            onClick={handleOpen}
            disabled={step !== 'initial'}
            type="button"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#B7A58A] via-[#8D735C] to-[#5A3825] text-[#F7F3EB] shadow-2xl border-2 border-[#E7DEC8]/80 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 group z-20 ${
              step !== 'initial' ? 'scale-125 opacity-0 rotate-12' : 'hover:scale-108 active:scale-95'
            }`}
            title="Sentuh untuk buka jemputan"
          >
            <span className="font-serif-luxury font-bold text-xs sm:text-sm tracking-widest text-[#F7F3EB] group-hover:tracking-wider transition-all">
              {WEDDING_DATA.couple.initials}
            </span>
            <span className="text-[7px] tracking-widest uppercase text-[#E7DEC8] mt-0.5">
              BUKA
            </span>
          </button>
        </div>

        {/* Tap Action Helper */}
        <div
          className={`mt-8 space-y-3 transition-all duration-500 ${
            step === 'revealed' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] tracking-wide">
            Sentuh mohor lakri emas untuk membuka undangan
          </p>

          <button
            onClick={handleOpen}
            type="button"
            className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-[#25231F] dark:bg-[#F7F3EB] text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-102 transition-all cursor-pointer"
          >
            <span>Buka Undangan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
