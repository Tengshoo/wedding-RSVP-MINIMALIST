import React, { useState } from 'react';
import { Palette, Check, Sparkles, Shirt, Sparkle } from 'lucide-react';
import { WEDDING_DATA, SwatchColor } from '../data/weddingData';

export const DressCodeSection: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<SwatchColor>(WEDDING_DATA.dressCode.swatches[1]);

  return (
    <section id="kod-pakaian" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Panduan Busana & Gaya
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            Kod Pakaian (Dress Code)
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans-clean max-w-lg mx-auto">
            {WEDDING_DATA.dressCode.note}
          </p>
        </div>

        {/* Theme Highlight Banner */}
        <div className="bg-[#F8F6F0] dark:bg-stone-800/60 p-5 rounded-2xl border border-stone-200/80 dark:border-stone-700/80 text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tema Rasmi Busana</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-stone-800 dark:text-stone-100 font-normal">
            {WEDDING_DATA.dressCode.theme}
          </h3>
        </div>

        {/* Color Palette Swatches */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 font-sans-clean">
              Cadangan Tona Warna Pilihan
            </span>
            <span className="text-xs text-[#8D735C] font-sans-clean">
              Sentuh mana-mana tona untuk butiran
            </span>
          </div>

          {/* Swatch row */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4">
            {WEDDING_DATA.dressCode.swatches.map((swatch) => {
              const isSelected = selectedSwatch.hex === swatch.hex;
              return (
                <button
                  key={swatch.hex}
                  onClick={() => setSelectedSwatch(swatch)}
                  type="button"
                  className={`group relative flex flex-col items-center p-2 sm:p-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-stone-100 dark:bg-stone-800 ring-2 ring-[#8D735C] shadow-sm'
                      : 'hover:bg-stone-50 dark:hover:bg-stone-800/40'
                  }`}
                >
                  {/* Color Circle Swatch */}
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-inner border border-black/10 dark:border-white/10 relative flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-white/90 dark:bg-stone-900/90 flex items-center justify-center shadow-xs">
                        <Check className="w-3 h-3 text-stone-900 dark:text-white" />
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] sm:text-xs font-sans-clean font-medium text-stone-800 dark:text-stone-200 mt-2 text-center leading-tight">
                    {swatch.name}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase mt-0.5">
                    {swatch.hex}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Swatch Description Box */}
          <div className="mt-4 p-4 rounded-xl bg-[#FAF8F5] dark:bg-stone-800/40 border border-stone-200/60 dark:border-stone-800 flex items-center justify-between text-xs font-sans-clean">
            <div className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full shrink-0 border border-stone-300"
                style={{ backgroundColor: selectedSwatch.hex }}
              />
              <div>
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  {selectedSwatch.name} ({selectedSwatch.tone}):
                </span>{' '}
                <span className="text-stone-600 dark:text-stone-400">
                  {selectedSwatch.description}
                </span>
              </div>
            </div>
            <span className="font-mono text-stone-400 hidden sm:inline">{selectedSwatch.hex}</span>
          </div>
        </div>

        {/* Guidance for Men & Women Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Men's Guide */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E7DEC8] dark:bg-stone-700 flex items-center justify-center text-[#5A3825] dark:text-[#E7DEC8]">
                <Shirt className="w-4 h-4" />
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-stone-900 dark:text-stone-100">
                {WEDDING_DATA.dressCode.guidance.men.title}
              </h3>
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {WEDDING_DATA.dressCode.guidance.men.description}
            </p>

            <div className="pt-2 border-t border-stone-200/60 dark:border-stone-700/60">
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean mb-2 font-semibold">
                Pilihan Cadangan:
              </p>
              <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                {WEDDING_DATA.dressCode.guidance.men.recommendations.map((rec) => (
                  <li key={rec} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8D735C]" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Women's Guide */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-800 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E7DEC8] dark:bg-stone-700 flex items-center justify-center text-[#5A3825] dark:text-[#E7DEC8]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif-luxury text-xl font-medium text-stone-900 dark:text-stone-100">
                {WEDDING_DATA.dressCode.guidance.women.title}
              </h3>
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {WEDDING_DATA.dressCode.guidance.women.description}
            </p>

            <div className="pt-2 border-t border-stone-200/60 dark:border-stone-700/60">
              <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean mb-2 font-semibold">
                Pilihan Cadangan:
              </p>
              <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                {WEDDING_DATA.dressCode.guidance.women.recommendations.map((rec) => (
                  <li key={rec} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8D735C]" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
