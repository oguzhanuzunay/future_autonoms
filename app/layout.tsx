import { AlertBanner } from '@/components/ui/alert-banner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Future Autonoms - Şirketinizin DNA'sına Özel AI Dönüşümü",
    template: '%s | Future Autonoms',
  },
  description:
    "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı. Salesforce %84, IBM %40 başarı oranlarıyla kanıtlanmış DN.AI™ metodolojisi. Ücretsiz ROI analizi.",
  keywords: [
    'AI dönüşümü',
    'yapay zeka',
    "şirket DNA'sı",
    'DN.AI metodolojisi',
    'AI agent',
    'digital transformation',
    'kurumsal AI',
    'verimlilik artışı',
    'Salesforce AI',
    'IBM AIOps',
    'Future Autonoms',
    'satış otomasyonu',
    'müşteri hizmetleri AI',
    'süreç optimizasyonu',
  ],
  authors: [{ name: 'Future Autonoms' }],
  creator: 'Future Autonoms',
  publisher: 'Future Autonoms',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://futureautonoms.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Future Autonoms - Şirketinizin DNA'sına Özel AI Dönüşümü",
    description:
      "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı. Salesforce %84, IBM %40 başarı oranlarıyla kanıtlanmış DN.AI™ metodolojisi.",
    url: 'https://futureautonoms.com',
    siteName: 'Future Autonoms',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Future Autonoms - AI Dönüşüm Uzmanı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Future Autonoms - Şirketinizin DNA'sına Özel AI Dönüşümü",
    description:
      "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı. Salesforce %84, IBM %40 başarı oranlarıyla kanıtlanmış metodoloji.",
    site: '@futureautonoms',
    creator: '@futureautonoms',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />
        <meta
          name="theme-color"
          content="#9333ea"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Future Autonoms"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <AlertBanner />
        {children}
      </body>
    </html>
  );
}
