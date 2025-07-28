'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoError, setLogoError] = useState(false);

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
        <div className="relative animate-pulse">
          {!logoError ? (
            <Image
              src="/logo.png"
              alt="Future Autonoms"
              width={120}
              height={80}
              className="object-contain"
              priority
              onError={() => setLogoError(true)}
            />
          ) : (
            // Fallback logo
            <div className="w-32 h-20 flex items-center justify-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                FUTURE
                <br />
                AUTONOMS
              </div>
            </div>
          )}
        </div>
        <div className="text-sm text-foreground/60 animate-pulse">Yükleniyor...</div>
      </div>
    </div>
  );
}
