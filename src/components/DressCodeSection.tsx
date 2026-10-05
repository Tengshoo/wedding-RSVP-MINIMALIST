import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { WEDDING_DATA, SwatchColor } from '../data/weddingData';

export const DressCodeSection: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<SwatchColor>(WEDDING_DATA.dressCode.swatches[2]);

  return (
    <section id="kod-pakaian" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-left mb-12 sm:mb-16">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          06 / Etika Pakaian
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          Dress Code
        </h2>
        <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed max-w-xl pt-3">
          {WEDDING_DATA.dressCode.note}
        </p>
        <div className="h-[1px] w-20 bg-[#B7A58A] mt-6" />
      </div>

      {/* Elegant Color Swatches Selection */}
      <div className="mb-14">
        <div className="flex items-center justify-between text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] uppercase tracking-wider mb-6">
          <span>Palet Tona Pilihan</span>
          <span className="text-[11px] text-[#B7A58A]">Sentuh untuk butiran</span>
        </div>

        {/* 5 Minimalist Swatches */}
        <div className="grid grid-cols-5 gap-3 sm:gap-6">
          {WEDDING_DATA.dressCode.swatches.map((swatch) => {
            const isSelected = selectedSwatch.hex === swatch.hex;

            return (
              <button
                key={swatch.hex}
                onClick={() => setSelectedSwatch(swatch)}
                type="button"
                className="group flex flex-col items-center gap-2 cursor-pointer transition-transform"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-black/10 dark:border-white/10 relative flex items-center justify-center transition-all duration-300 shadow-sm ${
                    isSelected
                      ? 'scale-110 ring-2 ring-[#B7A58A] ring-offset-4 ring-offset-[#F7F3EB] dark:ring-offset-[#171613]'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                >
                  {isSelected && (
                    <Check className="w-4 h-4 text-white drop-shadow-xs" />
                  )}
                </div>

                <span className="text-[10px] sm:text-xs font-sans-clean text-[#25231F] dark:text-[#F7F3EB] tracking-wide text-center truncate w-full">
                  {swatch.name}
                </span>
                <span className="text-[9px] font-mono text-[#716C64] uppercase hidden sm:block">
                  {swatch.hex}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Swatch Description Note */}
        <div className="mt-8 p-4 rounded-2xl bg-[#EFECE4] dark:bg-[#1E1C18] border border-[#DED6C9] dark:border-[#2F2C27] text-xs font-sans-clean text-[#25231F] dark:text-[#F7F3EB] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="w-3.5 h-3.5 rounded-full shrink-0 border border-stone-300"
              style={{ backgroundColor: selectedSwatch.hex }}
            />
            <span>
              <strong>{selectedSwatch.name} ({selectedSwatch.tone}):</strong> {selectedSwatch.description}
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#716C64] hidden sm:block">
            {selectedSwatch.hex}
          </span>
        </div>
      </div>

      {/* Minimalist Guidelines for Men & Women */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Men's Guide */}
        <div className="space-y-3 p-6 rounded-2xl border border-[#DED6C9]/80 dark:border-[#2F2C27] bg-[#F7F3EB]/60 dark:bg-[#1A1815]/60">
          <h3 className="font-serif-luxury text-2xl text-[#25231F] dark:text-[#F7F3EB]">
            {WEDDING_DATA.dressCode.guidance.men.title}
          </h3>
          <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed">
            {WEDDING_DATA.dressCode.guidance.men.description}
          </p>
          <ul className="pt-2 space-y-1.5 text-xs text-[#25231F] dark:text-[#F7F3EB] font-sans-clean">
            {WEDDING_DATA.dressCode.guidance.men.recommendations.map((rec) => (
              <li key={rec} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#B7A58A]" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Women's Guide */}
        <div className="space-y-3 p-6 rounded-2xl border border-[#DED6C9]/80 dark:border-[#2F2C27] bg-[#F7F3EB]/60 dark:bg-[#1A1815]/60">
          <h3 className="font-serif-luxury text-2xl text-[#25231F] dark:text-[#F7F3EB]">
            {WEDDING_DATA.dressCode.guidance.women.title}
          </h3>
          <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed">
            {WEDDING_DATA.dressCode.guidance.women.description}
          </p>
          <ul className="pt-2 space-y-1.5 text-xs text-[#25231F] dark:text-[#F7F3EB] font-sans-clean">
            {WEDDING_DATA.dressCode.guidance.women.recommendations.map((rec) => (
              <li key={rec} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#B7A58A]" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
};
