'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AlertBannerProps {
  className?: string;
}

export function AlertBanner({ className }: AlertBannerProps) {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // AI İstatistik Haberleri - Mobile için kısaltılmış versiyonlar
  const aiNews = [
    {
      mobile: '🔥 AI pazarı 47B USD | %88 pazarlamacı AI kullanıyor',
      desktop:
        "🔥 AI pazarı 2025'te 47 milyar USD | %88 pazarlamacı günlük AI kullanıyor | %79 şirket AI Agent entegrasyonu tamamladı",
    },
    {
      mobile: '⚡ Salesforce %66 otomasyon | %84 destek çözümü',
      desktop:
        "⚡ Salesforce AI Agent'ları %66 talep otomasyonu sağlıyor | %84 destek sorgusu otomatik çözülüyor",
    },
    {
      mobile: '🚀 IBM AIOps %40 hata azaltma | %30 MTTR iyileştirme',
      desktop:
        '🚀 IBM AIOps Agent ile false pozitifler %40 azaldı | MTTR %30 iyileşti | 200+ kurumsal müşteri',
    },
    {
      mobile: "💼 Yöneticilerin %88'i AI yatırım artırıyor",
      desktop:
        "💼 Yöneticilerin %88'i AI yatırımlarını artırıyor | Mass General %60 belgeleme süresini kısalttı",
    },
    {
      mobile: "📊 KOBİ'lerin %75'i AI ile rekabet ediyor",
      desktop:
        "📊 KOBİ'lerin %75'i AI ile büyük şirketlerle rekabet ediyor | Adobe reklamda %40 maliyet düşürdü",
    },
    {
      mobile: "🎯 2028'de %38 şirkette AI Agent takım üyesi",
      desktop:
        "🎯 2028'de şirketlerin %38'inde AI Agent'lar takım üyesi olacak | Docket %83 operasyonel maliyet tasarrufu",
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
