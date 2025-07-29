'use client';

import { ExternalLink, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

const aiNews = [
  {
    mobile: '🔥 Salesforce %84 destek çözümü (ITProSource)',
    desktop:
      '🔥 Salesforce Agentforce %84 destek çözümü | Fisher & Paykel %66 otomasyon (ITProSource)',
    source: 'ITProSource',
    url: 'https://www.itpro.com/technology/artificial-intelligence/humans-must-remain-at-the-center-of-the-story-marc-benioff-isnt-convinced-about-the-threat-of-ai-job-losses-and-salesforces-adoption-journey-might-just-prove-his-point',
  },
  {
    mobile: '🚀 IBM %40 false pozitif azaltma (IBM Research)',
    desktop: '🚀 IBM AIOps %40 false pozitif azaltma | %60 daha hızlı sorun çözümü (IBM Research)',
    source: 'IBM Research',
    url: 'https://www.ibm.com/blog/aiops-false-positive-reduction/',
  },
  {
    mobile: '⚡ Capgemini %285 verimlilik artışı (Capgemini)',
    desktop: '⚡ Capgemini AI dönüşümü %285 verimlilik artışı | %42 maliyet tasarrufu (Capgemini)',
    source: 'Capgemini',
    url: 'https://www.capgemini.com/research/generative-ai-in-organizations/',
  },
  {
    mobile: '🎯 McKinsey %30-50 AI benimseme (McKinsey)',
    desktop: '🎯 McKinsey AI benimseme %30-50 artış | %40 verimlilik iyileştirmesi (McKinsey)',
    source: 'McKinsey',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year',
  },
];

export function AlertBanner() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % aiNews.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-14 bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-cyan-900/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="h-full flex flex-col justify-center">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            {/* News Text */}
            <div className="flex-1 text-center">
              <div className="hidden sm:block">
                <div className="max-w-4xl mx-auto text-[10px] md:text-xs text-white/90 font-medium">
                  {aiNews[currentNewsIndex].desktop}
                </div>
              </div>
              <div className="sm:hidden">
                <div className="max-w-sm mx-auto text-[9px] xs:text-[10px] text-white/90 font-medium">
                  {aiNews[currentNewsIndex].mobile}
                </div>
              </div>
            </div>

            {/* Source Button */}
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
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500/20">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
 