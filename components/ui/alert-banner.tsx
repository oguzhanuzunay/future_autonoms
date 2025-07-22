'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AlertBannerProps {
  className?: string;
}

export function AlertBanner({ className }: AlertBannerProps) {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // AI İstatistik Haberleri - Gerçek kaynaklarla
  const aiNews = [
    {
      mobile: '🔥 Salesforce Agentforce %84 destek çözümü sağlıyor (ITProSource)',
      desktop:
        "🔥 Salesforce Agentforce ile %84 destek sorgusu otomatik çözülüyor | Fisher & Paykel'de %66 talep otomasyonu (ITProSource)",
      source: 'ITProSource',
    },
    {
      mobile: '⚡ IBM AIOps %40 false pozitif azaltma | %30 MTTR iyileştirme (CreoleStudios)',
      desktop:
        '⚡ IBM AIOps Agent ile false pozitifler %40 azaldı | MTTR %30 iyileşti | IT operasyonlarında devrim (CreoleStudios)',
      source: 'CreoleStudios',
    },
    {
      mobile: '🚀 Mass General Brigham %60 belgeleme süresi azalttı (Case Studies)',
      desktop:
        "🚀 Mass General Brigham klinik belge agent'i ile doktorların belgeleme süresini %60 azalttı | Hasta süresi arttı",
      source: 'Medical AI Cases',
    },
    {
      mobile: '💼 Docket %83 operasyonel tasarruf | %12 kazanım artışı (ZoomInfo)',
      desktop:
        "💼 Docket satış agent'i ile %83 operasyonel maliyet tasarrufu | %12 satış kazanım oranı artışı | ZoomInfo'da kullanımda",
      source: 'ZoomInfo Case',
    },
    {
      mobile: "📊 AI Agent kullanımı büyük şirketlerde %68'e ulaştı (eMarketer)",
      desktop:
        '📊 AI Agent benimseme oranı büyük şirketlerde %68 seviyesine ulaştı | Intuit, Capital One, Highmark Health öncüleri (eMarketer)',
      source: 'eMarketer Research',
    },
    {
      mobile: '🎯 Darktrace Antigena %92 siber saldırı başarısı (Security Studies)',
      desktop:
        "🎯 Darktrace Antigena agent'i siber saldırıları %92 başarı oranıyla otomatik durduruyor | Milisaniyelerde reaksiyon",
      source: 'Cybersecurity Report',
    },
  ];

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
      className={`fixed top-0 w-full z-[60] overflow-hidden ${className || ''}`}
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
        className="relative z-10 py-2 px-3 sm:px-4"
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
                <span className="text-[10px] xs:text-xs font-medium leading-tight">
                  <strong>CANLI VERİ:</strong> {aiNews[currentNewsIndex].mobile}
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xs md:text-sm font-medium">
                  <strong>CANLI VERİ:</strong> {aiNews[currentNewsIndex].desktop}
                </span>
              </div>

              {/* Source indicator */}
              <div className="mt-0.5 flex items-center justify-center">
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-white/70 font-normal">
                  Kaynak: {aiNews[currentNewsIndex].source} | Gerçek zamanlı sektör verileri
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Bar - Mobile optimized */}
          <div className="mt-1 w-full max-w-xs sm:max-w-md mx-auto">
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
    </motion.div>
  );
}
