import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Download, Check, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const DateAndCountdownSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Countdown timer calculation
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(WEDDING_DATA.event.targetDateIso).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Walimatulurus ${WEDDING_DATA.couple.shortNames}`);
    // 2026-12-12 10:00 to 16:30 GMT+8 -> UTC: 20261212T020000Z to 20261212T083000Z
    const dates = "20261212T020000Z/20261212T083000Z";
    const details = encodeURIComponent(
      `Walimatulurus ${WEDDING_DATA.couple.groomFullName} & ${WEDDING_DATA.couple.brideFullName}.\n\nLokasi: ${WEDDING_DATA.venue.name}\nAlamat: ${WEDDING_DATA.venue.address}\n\nKehadiran anda melengkapkan hari bahagia kami.`
    );
    const location = encodeURIComponent(`${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Walimatulurus Atif Isma//Wedding Event//MS",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:walimatulurus-atif-isma-20261212@wedding.my",
      "DTSTAMP:20261004T090000Z",
      "DTSTART:20261212T020000Z",
      "DTEND:20261212T083000Z",
      `SUMMARY:Walimatulurus ${WEDDING_DATA.couple.shortNames}`,
      `DESCRIPTION:Walimatulurus ${WEDDING_DATA.couple.groomFullName} & ${WEDDING_DATA.couple.brideFullName}`,
      `LOCATION:${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.address}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Walimatulurus_${WEDDING_DATA.couple.shortNames.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section id="tarikh" className="py-20 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto border-b border-[#DED6C9]/60 dark:border-[#2A2722]/60">
      
      {/* 1. Architectural Date Display */}
      <div className="text-center mb-20 sm:mb-28">
        <p className="text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-8">
          03 / Tarikh & Waktu
        </p>

        {/* Oversized Architectural Typography Block */}
        <div className="space-y-1 sm:space-y-2 select-none">
          <p className="font-sans-clean text-xs sm:text-sm uppercase tracking-[0.45em] text-[#716C64] dark:text-[#B7A58A]">
            {WEDDING_DATA.event.dayName}
          </p>

          <h2 className="font-serif-luxury text-8xl sm:text-9xl lg:text-[13rem] font-light text-[#25231F] dark:text-[#F7F3EB] leading-none tracking-tighter tabular-nums py-2">
            {WEDDING_DATA.event.dayNum}
          </h2>

          <div className="flex items-center justify-center gap-6 pt-2">
            <span className="font-serif-luxury text-2xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB] tracking-wide">
              {WEDDING_DATA.event.monthName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7A58A]" />
            <span className="font-serif-luxury text-2xl sm:text-4xl text-[#B7A58A] tracking-wider">
              {WEDDING_DATA.event.yearNum}
            </span>
          </div>
        </div>

        {/* Program Timings Split Bar */}
        <div className="mt-12 pt-8 border-t border-[#DED6C9]/70 dark:border-[#2F2C26] max-w-md mx-auto grid grid-cols-2 gap-6 text-center font-sans-clean">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-[#716C64] dark:text-[#B7A58A]">
              Akad Nikah
            </p>
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#25231F] dark:text-[#F7F3EB]">
              {WEDDING_DATA.event.akadTime}
            </p>
          </div>

          <div className="space-y-1 border-l border-[#DED6C9]/70 dark:border-[#2F2C26]">
            <p className="text-[10px] uppercase tracking-widest text-[#716C64] dark:text-[#B7A58A]">
              Majlis Kesyukuran
            </p>
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#25231F] dark:text-[#F7F3EB]">
              {WEDDING_DATA.event.receptionTime}
            </p>
          </div>
        </div>

        {/* Add to Calendar Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={createGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full border border-[#DED6C9] dark:border-[#38332B] hover:border-[#B7A58A] bg-white/40 dark:bg-stone-900/40 text-[#25231F] dark:text-[#F7F3EB] text-xs font-sans-clean tracking-wider uppercase transition-all flex items-center gap-2 hover:scale-102"
          >
            <CalendarIcon className="w-3.5 h-3.5 text-[#B7A58A]" />
            <span>Google Calendar</span>
            <ExternalLink className="w-3 h-3 text-[#716C64]" />
          </a>

          <button
            onClick={downloadIcsFile}
            type="button"
            className="py-3 px-6 rounded-full bg-[#25231F] hover:bg-[#38342E] dark:bg-[#F7F3EB] dark:hover:bg-white text-[#F7F3EB] dark:text-[#25231F] text-xs font-sans-clean font-medium tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-700" />
                <span>Kalendar Disimpan!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Simpan ke Kalendar (.ICS)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Editorial Clock Countdown */}
      <div className="pt-12 border-t border-[#DED6C9]/60 dark:border-[#2A2722]/60 text-center">
        <p className="text-[10px] sm:text-[11px] font-sans-clean uppercase tracking-[0.35em] text-[#716C64] dark:text-[#B7A58A] mb-8">
          The Countdown
        </p>

        {timeLeft.isPast ? (
          <p className="font-serif-luxury text-3xl sm:text-4xl text-[#25231F] dark:text-[#F7F3EB]">
            THE DAY HAS ARRIVED.
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-4 sm:gap-8 max-w-xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <span className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#25231F] dark:text-[#F7F3EB] tabular-nums block">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans-clean uppercase tracking-[0.25em] text-[#716C64] dark:text-[#B7A58A] mt-2 block">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </section>
  );
};
