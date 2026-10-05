import React, { useState } from 'react';
import { Copy, Check, QrCode } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const DigitalGiftSection: React.FC = () => {
  const [copiedBankIdx, setCopiedBankIdx] = useState<number | null>(null);
  const [copiedDuitNow, setCopiedDuitNow] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleCopyAccount = (accountNo: string, index: number) => {
    navigator.clipboard.writeText(accountNo);
    setCopiedBankIdx(index);
    setTimeout(() => setCopiedBankIdx(null), 2500);
  };

  const handleCopyDuitNow = () => {
    navigator.clipboard.writeText(WEDDING_DATA.salamKaut.duitNowId);
    setCopiedDuitNow(true);
    setTimeout(() => setCopiedDuitNow(false), 2500);
  };

  return (
    <section id="salam-kaut" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* Section Kicker */}
      <div className="text-center mb-12 sm:mb-16 max-w-lg mx-auto">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-3">
          10 / Tanda Ingatan
        </p>
        <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#25231F] dark:text-[#F7F3EB] font-normal tracking-tight">
          With Love
        </h2>
        <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed pt-3">
          Kehadiran dan doa restu anda sudah cukup menyempurnakan hari bahagia kami. Bagi yang berhajat untuk menitipkan hadiah kasih atau salam kaut digital:
        </p>
        <div className="h-[1px] w-14 bg-[#B7A58A] mx-auto mt-6" />
      </div>

      {/* Subtle Minimalist Bank Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {WEDDING_DATA.salamKaut.banks.map((bank, index) => (
          <div
            key={bank.accountNumber}
            className="p-6 sm:p-7 rounded-2xl bg-[#EFECE4] dark:bg-[#1E1C18] border border-[#DED6C9] dark:border-[#2F2C27] flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] mb-2">
                <span className="font-semibold uppercase tracking-wider">{bank.bankName}</span>
                <span className="text-[10px]">{bank.type}</span>
              </div>
              <p className="font-mono text-xl sm:text-2xl font-medium tracking-wider text-[#25231F] dark:text-[#F7F3EB]">
                {bank.accountNumber}
              </p>
              <p className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] mt-1">
                {bank.accountHolder}
              </p>
            </div>

            <button
              onClick={() => handleCopyAccount(bank.accountNumber, index)}
              type="button"
              className="py-2.5 px-4 rounded-xl border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] bg-white/50 dark:bg-stone-900/50 text-xs font-sans-clean text-[#25231F] dark:text-[#F7F3EB] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copiedBankIdx === index ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Nombor Akaun Disalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B7A58A]" />
                  <span>Salin Nombor Akaun</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* DuitNow Action Strip */}
      <div className="p-6 rounded-2xl border border-[#DED6C9] dark:border-[#2F2C27] bg-[#EFECE4] dark:bg-[#1E1C18] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-serif-luxury text-lg text-[#25231F] dark:text-[#F7F3EB]">
            DuitNow QR
          </p>
          <p className="text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
            ID: <strong className="font-mono text-[#25231F] dark:text-[#F7F3EB]">{WEDDING_DATA.salamKaut.duitNowId}</strong> ({WEDDING_DATA.salamKaut.duitNowName})
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleCopyDuitNow}
            type="button"
            className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl border border-[#DED6C9] dark:border-[#38332B] text-xs font-sans-clean text-[#25231F] dark:text-[#F7F3EB] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {copiedDuitNow ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#B7A58A]" />}
            <span>{copiedDuitNow ? 'ID Disalin' : 'Salin ID'}</span>
          </button>

          <button
            onClick={() => setShowQrModal(true)}
            type="button"
            className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-[#25231F] dark:bg-[#F7F3EB] text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Papar QR</span>
          </button>
        </div>
      </div>

      {/* QR Modal */}
      {showQrModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-[#F7F3EB] dark:bg-[#1E1C18] max-w-sm w-full rounded-3xl p-6 sm:p-8 text-center shadow-2xl border border-[#DED6C9] dark:border-[#2F2C27] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif-luxury text-2xl text-[#25231F] dark:text-[#F7F3EB] mb-1">
              DuitNow QR
            </h3>
            <p className="text-xs text-[#716C64] dark:text-[#B7A58A] font-sans-clean mb-6">
              Imbas melalui aplikasi perbankan atau e-dompet anda
            </p>

            {/* Pristine SVG QR Representation for Atif & Isma */}
            <div className="p-4 bg-white rounded-2xl border border-[#DED6C9] max-w-[220px] mx-auto shadow-inner mb-6">
              <svg viewBox="0 0 100 100" className="w-full h-auto text-stone-900">
                <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
                <rect x="11" y="11" width="13" height="13" fill="currentColor" rx="1" />
                <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
                <rect x="76" y="11" width="13" height="13" fill="currentColor" rx="1" />
                <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
                <rect x="11" y="76" width="13" height="13" fill="currentColor" rx="1" />
                {/* Simulated Matrix */}
                <rect x="36" y="8" width="6" height="6" fill="currentColor" />
                <rect x="46" y="8" width="6" height="6" fill="currentColor" />
                <rect x="56" y="14" width="6" height="6" fill="currentColor" />
                <rect x="38" y="24" width="6" height="6" fill="currentColor" />
                <rect x="52" y="24" width="6" height="6" fill="currentColor" />
                <rect x="8" y="38" width="6" height="6" fill="currentColor" />
                <rect x="20" y="38" width="6" height="6" fill="currentColor" />
                <rect x="72" y="38" width="6" height="6" fill="currentColor" />
                {/* Center Monogram */}
                <circle cx="50" cy="50" r="14" fill="#B7A58A" />
                <text x="50" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                  A&I
                </text>
                <rect x="38" y="70" width="6" height="6" fill="currentColor" />
                <rect x="50" y="74" width="6" height="6" fill="currentColor" />
                <rect x="76" y="76" width="6" height="6" fill="currentColor" />
              </svg>
            </div>

            <p className="text-xs font-mono font-medium text-[#25231F] dark:text-[#F7F3EB]">
              {WEDDING_DATA.salamKaut.duitNowName}
            </p>
            <p className="text-[11px] font-mono text-[#716C64] mt-0.5 mb-6">
              {WEDDING_DATA.salamKaut.duitNowId}
            </p>

            <button
              onClick={() => setShowQrModal(false)}
              type="button"
              className="w-full py-3 rounded-2xl bg-[#EFECE4] dark:bg-[#25231F] text-[#25231F] dark:text-[#F7F3EB] text-xs font-sans-clean tracking-wider uppercase transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
