'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PanelPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in page for demo
    router.push('/panel/sign-in');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-500"></div>
    </div>
  );
}