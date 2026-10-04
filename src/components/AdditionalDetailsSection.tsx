import React, { useState } from 'react';
import { CreditCard, QrCode, Copy, Check, Gift, Info, ShieldCheck, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const AdditionalDetailsSection: React.FC = () => {
  const [copiedBankIndex, setCopiedBankIndex] = useState<number | null>(null);
  const [copiedDuitNow, setCopiedDuitNow] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleCopyAccount = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedBankIndex(index);
    setTimeout(() => setCopiedBankIndex(null), 2500);
  };

  const handleCopyDuitNow = () => {
    navigator.clipboard.writeText(WEDDING_DATA.salamKaut.duitNowId);
    setCopiedDuitNow(true);
    setTimeout(() => setCopiedDuitNow(false), 2500);
  };

  return (
    <section id="salam-kaut" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto space-y-12">
      
      {/* Salam Kaut & Hadiah Digital Card */}
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F3EF] dark:bg-stone-800 text-[#8D735C] mb-3">
            <Gift className="w-5 h-5" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Tanda Ingatan Kasih
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {WEDDING_DATA.salamKaut.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans-clean max-w-lg mx-auto leading-relaxed">
            {WEDDING_DATA.salamKaut.description}
          </p>
        </div>

        {/* Bank Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {WEDDING_DATA.salamKaut.banks.map((bank, index) => (
            <div
              key={bank.accountNumber}
              className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif-luxury text-lg font-semibold text-stone-800 dark:text-stone-200">
                    {bank.bankName}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean bg-white dark:bg-stone-800 px-2 py-0.5 rounded-full border border-stone-200 dark:border-stone-700">
                    {bank.type}
                  </span>
                </div>

                <div className="mb-2">
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                    Nombor Akaun
                  </p>
                  <p className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-stone-900 dark:text-stone-100 mt-0.5">
                    {bank.accountNumber}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-sans-clean">
                    Nama Pemegang Akaun
                  </p>
                  <p className="text-xs font-sans-clean font-medium text-stone-700 dark:text-stone-300 mt-0.5">
                    {bank.accountHolder}
                  </p>
                </div>
              </div>

              {/* Copy Account Button */}
              <button
                onClick={() => handleCopyAccount(bank.accountNumber, index)}
                type="button"
                className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 text-xs font-sans-clean font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                {copiedBankIndex === index ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400">Nombor Akaun Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>Salin Nombor Akaun</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* DuitNow QR Container Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-[#F5F1EA] dark:from-stone-800/40 dark:to-stone-800/20 border border-stone-200/80 dark:border-stone-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 shadow-sm border border-stone-200 dark:border-stone-700 flex items-center justify-center text-[#ED1C24] shrink-0">
              <QrCode className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-serif-luxury text-base font-semibold text-stone-900 dark:text-stone-100">
                  DuitNow QR Kod
                </span>
                <span className="text-[9px] uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-full font-bold">
                  Imbas & Bayar
                </span>
              </div>
              <p className="text-xs font-sans-clean text-stone-500 dark:text-stone-400 mt-1">
                ID DuitNow: <strong className="font-mono text-stone-800 dark:text-stone-200">{WEDDING_DATA.salamKaut.duitNowId}</strong> ({WEDDING_DATA.salamKaut.duitNowName})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleCopyDuitNow}
              type="button"
              className="flex-1 sm:flex-none py-2 px-3 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-50 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 text-xs font-sans-clean font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedDuitNow ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ID Disalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Salin ID</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowQrModal(true)}
              type="button"
              className="flex-1 sm:flex-none py-2 px-4 rounded-xl bg-[#2C2B2A] hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 text-xs font-sans-clean font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Papar Kod QR</span>
            </button>
          </div>
        </div>

      </div>

      {/* Important Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WEDDING_DATA.importantNotes.map((note, idx) => (
          <div
            key={note.title}
            className="p-5 rounded-2xl bg-white dark:bg-stone-850 border border-stone-200/70 dark:border-stone-800 shadow-xs"
          >
            <div className="flex items-center gap-2 mb-2 font-medium text-stone-900 dark:text-stone-100 text-sm font-serif-luxury">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8D735C]" />
              <span>{note.title}</span>
            </div>
            <p className="text-xs font-sans-clean text-stone-500 dark:text-stone-400 leading-relaxed">
              {note.desc}
            </p>
          </div>
        ))}
      </div>

      {/* DuitNow QR Modal */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-white dark:bg-stone-850 max-w-sm w-full rounded-3xl p-6 sm:p-8 text-center shadow-2xl border border-stone-200 dark:border-stone-800 relative">
            <h3 id="qr-modal-title" className="font-serif-luxury text-2xl text-stone-900 dark:text-stone-100 mb-1">
              Imbas DuitNow QR
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 font-sans-clean mb-6">
              Boleh diimbas menggunakan mana-mana aplikasi perbankan atau e-dompet di Malaysia.
            </p>

            {/* Pristine SVG QR Code for Daniel & Iman */}
            <div className="p-4 bg-white rounded-2xl border-2 border-stone-200 max-w-[240px] mx-auto shadow-inner mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-auto text-stone-900">
                {/* QR Corner Markers */}
                <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
                <rect x="11" y="11" width="13" height="13" fill="currentColor" rx="1" />

                <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
                <rect x="76" y="11" width="13" height="13" fill="currentColor" rx="1" />

                <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
                <rect x="11" y="76" width="13" height="13" fill="currentColor" rx="1" />

                {/* Simulated QR matrix pattern */}
                <rect x="36" y="8" width="6" height="6" fill="currentColor" />
                <rect x="46" y="8" width="6" height="6" fill="currentColor" />
                <rect x="56" y="14" width="6" height="6" fill="currentColor" />
                <rect x="38" y="24" width="6" height="6" fill="currentColor" />
                <rect x="52" y="24" width="6" height="6" fill="currentColor" />
                <rect x="8" y="38" width="6" height="6" fill="currentColor" />
                <rect x="20" y="38" width="6" height="6" fill="currentColor" />
                <rect x="8" y="52" width="6" height="6" fill="currentColor" />
                
                {/* Center Monogram Heart */}
                <circle cx="50" cy="50" r="14" fill="#8D735C" />
                <text x="50" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                  D&I
                </text>

                <rect x="72" y="38" width="6" height="6" fill="currentColor" />
                <rect x="84" y="44" width="6" height="6" fill="currentColor" />
                <rect x="70" y="54" width="6" height="6" fill="currentColor" />
                <rect x="38" y="70" width="6" height="6" fill="currentColor" />
                <rect x="50" y="74" width="6" height="6" fill="currentColor" />
                <rect x="62" y="70" width="6" height="6" fill="currentColor" />
                <rect x="40" y="84" width="6" height="6" fill="currentColor" />
                <rect x="54" y="84" width="6" height="6" fill="currentColor" />
                <rect x="76" y="76" width="6" height="6" fill="currentColor" />
                <rect x="86" y="86" width="6" height="6" fill="currentColor" />
              </svg>
            </div>

            <p className="text-xs font-mono font-semibold text-stone-800 dark:text-stone-200">
              {WEDDING_DATA.salamKaut.duitNowName}
            </p>
            <p className="text-[11px] font-mono text-stone-400 mt-0.5 mb-6">
              {WEDDING_DATA.salamKaut.duitNowId}
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              type="button"
              className="w-full py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-750 text-stone-800 dark:text-stone-200 font-sans-clean text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              Tutup Paparan
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
