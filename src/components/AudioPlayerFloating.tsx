import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Disc3, Music2, Pause, Play } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';

interface AudioPlayerFloatingProps {
  onAutoPlayRequest?: () => void;
}

export const AudioPlayerFloating: React.FC<AudioPlayerFloatingProps> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(romanticAudio.getIsPlaying());
  const [volume, setVolume] = useState<number>(romanticAudio.getVolume());
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);

  useEffect(() => {
    const handleStatusChange = (status: boolean) => {
      setIsPlaying(status);
    };
    romanticAudio.addListener(handleStatusChange);
    return () => {
      romanticAudio.removeListener(handleStatusChange);
    };
  }, []);

  const handleToggle = () => {
    const newStatus = romanticAudio.toggle();
    setIsPlaying(newStatus);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    romanticAudio.setVolume(val);
  };

  return (
    <aside aria-label="Pemain Muzik" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Volume slider popover */}
      {showVolumeSlider && (
        <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-stone-200/80 dark:border-stone-800 flex items-center gap-2 transition-all">
          <button
            onClick={() => {
              const newVol = volume > 0 ? 0 : 0.4;
              setVolume(newVol);
              romanticAudio.setVolume(newVol);
            }}
            className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white"
            title={volume === 0 ? "Buka Suara" : "Senyapkan"}
            type="button"
          >
            {volume === 0 ? <VolumeX className="w-4 h-4 text-stone-400" /> : <Volume2 className="w-4 h-4 text-stone-700 dark:text-stone-300" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Kelarasan Bunyi Muzik"
            className="w-20 h-1.5 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-stone-700 dark:accent-stone-300"
          />
        </div>
      )}

      {/* Main Music Control Button */}
      <button
        onClick={handleToggle}
        onContextMenu={(e) => {
          e.preventDefault();
          setShowVolumeSlider(!showVolumeSlider);
        }}
        type="button"
        title={isPlaying ? "Jeda Muzik Latar" : "Mainkan Muzik Latar"}
        className="group relative flex items-center gap-2.5 bg-white/90 dark:bg-stone-900/90 hover:bg-white dark:hover:bg-stone-850 backdrop-blur-md px-3.5 py-2.5 rounded-full shadow-md hover:shadow-lg border border-stone-200/80 dark:border-stone-800 transition-all duration-200 cursor-pointer text-stone-800 dark:text-stone-200"
      >
        {/* Animated Vinyl Icon */}
        <div className="relative flex items-center justify-center">
          <Disc3
            className={`w-6 h-6 text-stone-700 dark:text-stone-300 transition-transform ${
              isPlaying ? 'animate-spin-slow text-[#8D735C]' : ''
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-2.5 h-2.5 text-stone-800 dark:text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            ) : (
              <Play className="w-2.5 h-2.5 text-stone-800 dark:text-stone-100 ml-0.5" />
            )}
          </div>
        </div>

        <div className="text-left hidden sm:block pr-1">
          <div className="flex items-center gap-1.5">
            <Music2 className="w-3 h-3 text-[#8D735C]" />
            <p className="text-xs font-medium tracking-tight text-stone-800 dark:text-stone-200">
              {isPlaying ? 'Alunan Akustik Romantis' : 'Pasang Muzik Latar'}
            </p>
          </div>
          <p className="text-[10px] text-stone-500 dark:text-stone-400">
            {isPlaying ? 'Sedang Dimainkan · Klik untuk Jeda' : 'Sentuh untuk Menghidupkan Suasana'}
          </p>
        </div>

        {/* Small volume indicator button */}
        <span
          onClick={(e) => {
            e.stopPropagation();
            setShowVolumeSlider(!showVolumeSlider);
          }}
          className="p-1 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-full transition-colors ml-0.5"
          title="Tetapan Kelantangan Bunyi"
        >
          <Volume2 className="w-3.5 h-3.5" />
        </span>
      </button>
    </aside>
  );
};
