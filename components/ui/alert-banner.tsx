'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AlertBannerProps {
  className?: string;
}

// AI İstatistik Haberleri - Tek satıra sığacak şekilde kısaltılmış
const aiNews = [
  {
    mobile: '🔥 Salesforce %84 destek çözümü (ITProSource)',
    desktop:
      '🔥 Salesforce Agentforce %84 destek çözümü | Fisher & Paykel %66 otomasyon (ITProSource)',
    source: 'ITProSource',
    url: 'https://www.itpro.com/technology/artificial-intelligence/humans-must-remain-at-the-center-of-the-story-marc-benioff-isnt-convinced-about-the-threat-of-ai-job-losses-and-salesforces-adoption-journey-might-just-prove-his-point',
  },
  {
    mobile: '⚡ IBM AIOps %40 false pozitif azaltma (CreoleStudios)',
    desktop: '⚡ IBM AIOps %40 false pozitif azaltma | %30 MTTR iyileştirme (CreoleStudios)',
    source: 'CreoleStudios',
    url: 'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
  },
  {
    mobile: '🚀 Mass General %60 belgeleme azaltma (Case Studies)',
    desktop: '🚀 Mass General Brigham %60 belgeleme süresi azaltma | Hasta süresi artışı',
    source: 'Medical AI Cases',
    url: 'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
  },
  {
    mobile: '💼 Docket %83 tasarruf | %12 kazanım (ZoomInfo)',
    desktop: '💼 Docket %83 operasyonel tasarruf | %12 satış kazanım artışı (ZoomInfo)',
    source: 'ZoomInfo Case',
    url: 'https://www.multimodal.dev/post/useful-ai-agent-case-studies',
  },
  {
    mobile: '📊 AI Agent %68 benimseme oranı (eMarketer)',
    desktop: '📊 AI Agent benimseme oranı %68 | Intuit, Capital One öncüleri (eMarketer)',
    source: 'eMarketer Research',
    url: 'https://www.emarketer.com/content/study--ai-agents-hit-68--adoption-big-business',
  },
  {
    mobile: '🎯 Darktrace %92 siber saldırı başarısı (Security)',
    desktop: '🎯 Darktrace Antigena %92 siber saldırı başarısı | Milisaniye reaksiyon',
    source: 'Cybersecurity Report',
    url: 'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
  },
];

export function AlertBanner({ className }: AlertBannerProps) {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // News rotation
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % aiNews.length);
    }, 4000); // Her 4 saniyede bir değişir

    return () => clearInterval(interval);
  }, [aiNews.length, isPaused]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-[60] overflow-hidden h-16 sm:h-14 ${className || ''}`}
    >
      {/* Animasyonlu Geçişli Arka Plan */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* İçerik */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-3 sm:px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNewsIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-white"
            >
              {/* Mobile-first responsive text */}
              <div className="block sm:hidden">
                <div className="text-[9px] xs:text-[10px] font-medium leading-tight max-w-xs mx-auto">
                  <strong>CANLI VERİ:</strong> {aiNews[currentNewsIndex].mobile}
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-[10px] md:text-xs font-medium leading-tight max-w-3xl mx-auto">
                  <strong>CANLI VERİ:</strong> {aiNews[currentNewsIndex].desktop}
                </div>
              </div>

              {/* Source indicator */}
              <div className="mt-0.5 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(aiNews[currentNewsIndex].url, '_blank', 'noopener,noreferrer')
                  }
                  className="group flex items-center gap-1 text-[7px] xs:text-[8px] sm:text-[9px] text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <Info className="w-1.5 h-1.5 xs:w-2 xs:h-2" />
                  <span>Kaynak: {aiNews[currentNewsIndex].source}</span>
                  <ExternalLink className="w-1.5 h-1.5 xs:w-2 xs:h-2 group-hover:scale-110 transition-transform" />
                </button>
                <span className="mx-1 text-white/50 text-[7px]">|</span>
                <span className="text-[7px] xs:text-[8px] sm:text-[9px] text-white/50">
                  Sektör verileri
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar - Positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 pb-0.5">
            <div className="w-full max-w-xs sm:max-w-md mx-auto">
              <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: '0%' }}
                  animate={{
                    width: isPaused ? `${((currentNewsIndex + 1) / aiNews.length) * 100}%` : '100%',
                  }}
                  transition={{
                    duration: isPaused ? 0.3 : 4,
                    ease: isPaused ? 'easeOut' : 'linear',
                    repeat: isPaused ? 0 : Infinity,
                    repeatDelay: 0.5,
                  }}
                  key={`progress-${currentNewsIndex}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
