import React from 'react';
import { Phone, MessageCircle, UserCheck } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const ContactSection: React.FC = () => {
  return (
    <section id="hubungi" className="py-12 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-stone-850 rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 dark:border-stone-800">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8D735C] dark:text-[#C5B5A3] font-sans-clean font-medium mb-1">
            Pertanyaan & Bantuan
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            Hubungi Penyelaras Majlis
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-2 font-sans-clean">
            Sila hubungi wakil keluarga atau koordinator majlis sekiranya mempunyai sebarang pertanyaan lanjut.
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WEDDING_DATA.contacts.map((contact) => {
            const cleanPhone = contact.phone.replace(/[^0-9]/g, '');
            const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(contact.whatsappMessage)}`;

            return (
              <div
                key={contact.name}
                className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-[#8D735C] mb-3 shadow-xs border border-stone-200/60 dark:border-stone-700">
                    <UserCheck className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif-luxury text-xl font-medium text-stone-900 dark:text-stone-100">
                    {contact.name}
                  </h3>

                  <p className="text-xs font-sans-clean text-stone-500 dark:text-stone-400 mb-2">
                    {contact.role}
                  </p>

                  <p className="font-mono text-xs font-medium text-stone-700 dark:text-stone-300 mb-6">
                    {contact.phone}
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans-clean font-medium flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
                    className="w-full py-2 px-3 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-750 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 text-xs font-sans-clean font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-stone-400" />
                    <span>Panggilan Telefon</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
