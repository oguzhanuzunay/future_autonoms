'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-lg flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-lg">FA</span>
        </div>
        <div className="text-sm text-foreground/60">Yükleniyor...</div>
      </div>
    </div>
  );
}
