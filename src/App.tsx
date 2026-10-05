/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BlessingSection } from './components/BlessingSection';
import { StorySection } from './components/StorySection';
import { DateAndCountdownSection } from './components/DateAndCountdownSection';
import { TimelineSection } from './components/TimelineSection';
import { VenueSection } from './components/VenueSection';
import { DressCodeSection } from './components/DressCodeSection';
import { GallerySection } from './components/GallerySection';
import { RsvpSection } from './components/RsvpSection';
import { GuestbookSection } from './components/GuestbookSection';
import { DigitalGiftSection } from './components/DigitalGiftSection';
import { ClosingSection } from './components/ClosingSection';
import { AudioPlayerFloating } from './components/AudioPlayerFloating';
import { EnvelopeModal } from './components/EnvelopeModal';
import { WeddingBackground } from './components/WeddingBackground';
import { romanticAudio } from './utils/romanticAudio';
import { WEDDING_DATA } from './data/weddingData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('wedding_dark_mode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  const [envelopeOpen, setEnvelopeOpen] = useState<boolean>(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('wedding_dark_mode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const handleMusicStatus = (status: boolean) => {
      setIsPlayingMusic(status);
    };
    romanticAudio.addListener(handleMusicStatus);
    return () => {
      romanticAudio.removeListener(handleMusicStatus);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleMusic = () => {
    romanticAudio.toggle();
  };

  const handleOpenInvitation = () => {
    setEnvelopeOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#F7F3EB] dark:bg-[#171613] text-[#25231F] dark:text-[#F7F3EB] paper-pattern transition-colors duration-500 font-sans-clean flex flex-col selection:bg-[#B7A58A]/30 selection:text-[#25231F] dark:selection:text-[#F7F3EB]">
      {/* 00. Rich Ambient Background System */}
      <WeddingBackground />

      {/* 01. OPEN: Interactive Tactile Wax-Sealed Opening Sequence */}
      <EnvelopeModal
        isOpen={envelopeOpen}
        onOpenInvitation={handleOpenInvitation}
        guestName="YBhg. Dato' / Datin / Tuan / Puan Sekeluarga"
      />

      {/* Navigation (Transitions to Frosted Ivory on scroll, Fullscreen Mobile Menu) */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenEnvelope={() => setEnvelopeOpen(true)}
      />

      {/* The Journey Begins */}
      <main className="flex-1 w-full max-w-6xl mx-auto">
        {/* 02. MEET THE COUPLE / HERO */}
        <HeroSection
          onToggleMusic={handleToggleMusic}
          isPlayingMusic={isPlayingMusic}
        />

        {/* 03. BLESSING: Quranic Blessing & Parents Invitation */}
        <BlessingSection />

        {/* 04. STORY: "And then, there was us." */}
        <StorySection />

        {/* 05. THE DATE & THE COUNTDOWN (Architectural 12 & Editorial Clock) */}
        <DateAndCountdownSection />

        {/* 06. THE CELEBRATION (Vertical Program Timeline) */}
        <TimelineSection />

        {/* 07. THE PLACE (The Glasshouse at Seputeh, Navigation & Maps) */}
        <VenueSection />

        {/* 08. DRESS CODE (Minimalist Earth Tone Swatches & Guides) */}
        <DressCodeSection />

        {/* 09. THE MEMORIES (Asymmetric Photography Portfolio & Fullscreen Lightbox) */}
        <GallerySection />

        {/* 10. THE RSVP (Conversational Progressive Disclosure) */}
        <RsvpSection />

        {/* 11. WORDS FOR THE COUPLE (Guestbook Notes) */}
        <GuestbookSection />

        {/* 12. WITH LOVE (Salam Kaut Digital & DuitNow QR) */}
        <DigitalGiftSection />

        {/* 13. THE CLOSING (Closing Gratitude, Share & Reopen Envelope) */}
        <ClosingSection
          onReopenEnvelope={() => setEnvelopeOpen(true)}
        />
      </main>

      {/* Tiny Luxury Music Control Bar */}
      <AudioPlayerFloating />

      {/* Quiet Luxury Footer */}
      <footer className="w-full border-t border-[#DED6C9]/60 dark:border-[#2A2722]/60 py-10 px-6 text-center text-xs text-[#716C64] dark:text-[#B7A58A] font-sans-clean mt-12">
        <p className="font-serif-luxury text-lg text-[#25231F] dark:text-[#F7F3EB] mb-1">
          {WEDDING_DATA.couple.shortNames}
        </p>
        <p className="text-[11px] uppercase tracking-[0.25em]">
          Walimatulurus Digital Experience · 12 Disember 2026
        </p>
      </footer>
    </div>
  );
}
