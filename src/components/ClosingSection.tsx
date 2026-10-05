import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Phone } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface ClosingSectionProps {
  onReopenEnvelope: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  onReopenEnvelope,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleShareWhatsApp = () => {
    const text = `*Walimatulurus ${WEDDING_DATA.couple.shortNames}*\n\nDengan penuh rasa kesyukuran, kami menjemput anda ke majlis perkahwinan kami pada ${WEDDING_DATA.event.dateFormatted} di ${WEDDING_DATA.venue.name}.\n\nLayari jemputan digital & RSVP:\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto text-center space-y-10">
      
      {/* Monogram Seal */}
      <div className="w-16 h-16 rounded-full border border-[#DED6C9] dark:border-[#2F2C27] bg-[#EFECE4] dark:bg-[#1E1C18] mx-auto flex items-center justify-center text-[#B7A58A] shadow-xs">
        <span className="font-serif-luxury text-xl tracking-wider font-semibold">
          {WEDDING_DATA.couple.initials}
        </span>
      </div>

      {/* Heartfelt Closing Statement */}
      <div className="space-y-4 max-w-lg mx-auto">
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#25231F] dark:text-[#F7F3EB] font-normal leading-tight">
          "Kehadiran dan doa restu anda melengkapkan hari bahagia kami."
        </h2>
        <p className="font-sans-clean text-xs sm:text-sm text-[#716C64] dark:text-[#B7A58A] leading-relaxed">
          Tulus ikhlas daripada Muhammad Atif & Ismasari berserta seluruh ahli keluarga.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
        <button
          onClick={handleShareWhatsApp}
          type="button"
          className="py-3 px-6 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase flex items-center gap-2 shadow-xs cursor-pointer hover:scale-102 transition-all"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Kongsi ke WhatsApp</span>
        </button>

        <button
          onClick={handleCopyLink}
          type="button"
          className="py-3 px-5 rounded-full border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] text-xs font-sans-clean text-[#25231F] dark:text-[#F7F3EB] tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pautan Disalin!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#B7A58A]" />
              <span>Salin Pautan</span>
            </>
          )}
        </button>

        <button
          onClick={() => setShowContactModal(true)}
          type="button"
          className="py-3 px-5 rounded-full border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] tracking-wider uppercase transition-all cursor-pointer"
        >
          Hubungi Penyelaras
        </button>

        <button
          onClick={onReopenEnvelope}
          type="button"
          className="py-3 px-5 rounded-full text-xs font-sans-clean text-[#716C64] dark:text-[#B7A58A] hover:text-[#25231F] dark:hover:text-[#F7F3EB] transition-colors cursor-pointer"
        >
          Buka Semula Sampul
        </button>
      </div>

      {/* Official Hashtag */}
      <div className="pt-8">
        <p className="font-mono text-xs text-[#B7A58A] uppercase tracking-[0.25em]">
          #AtifIsma2026 · 12.12.2026
        </p>
      </div>

      {/* Contact Coordinator Modal */}
      {showContactModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-[#F7F3EB] dark:bg-[#1E1C18] max-w-md w-full rounded-3xl p-6 sm:p-8 text-left shadow-2xl border border-[#DED6C9] dark:border-[#2F2C27] space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-[10px] font-sans-clean uppercase tracking-[0.3em] text-[#716C64] dark:text-[#B7A58A] mb-1">
                Bantuan & Pertanyaan
              </p>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#25231F] dark:text-[#F7F3EB]">
                Penyelaras Majlis
              </h3>
            </div>

            <div className="space-y-4">
              {WEDDING_DATA.contacts.map((c) => (
                <div
                  key={c.name}
                  className="p-4 rounded-xl bg-[#EFECE4] dark:bg-[#171613] border border-[#DED6C9] dark:border-[#2F2C27] flex items-center justify-between"
                >
                  <div>
                    <p className="font-serif-luxury text-lg text-[#25231F] dark:text-[#F7F3EB] font-medium leading-tight">
                      {c.name}
                    </p>
                    <p className="text-[11px] font-sans-clean text-[#716C64] dark:text-[#B7A58A]">
                      {c.role} · <span className="font-mono">{c.phone}</span>
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(c.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowContactModal(false)}
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
