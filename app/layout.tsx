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
    other: {
      'msvalidate.01': 'your-bing-verification-code',
      'baidu-site-verification': 'your-baidu-verification-code',
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
  other: {
    'msapplication-TileColor': '#9333ea',
    'msapplication-config': '/browserconfig.xml',
    'yandex-verification': 'your-yandex-verification-code',
    alexaVerifyID: 'your-alexa-verification-code',
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

        {/* Search Engine Verification Tags */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta
          name="msvalidate.01"
          content="your-bing-verification-code"
        />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />
        <meta
          name="baidu-site-verification"
          content="your-baidu-verification-code"
        />
        <meta
          name="naver-site-verification"
          content="your-naver-verification-code"
        />
        <meta
          name="alexaVerifyID"
          content="your-alexa-verification-code"
        />

        {/* Bing/Microsoft specific */}
        <meta
          name="msapplication-TileColor"
          content="#9333ea"
        />
        <meta
          name="msapplication-config"
          content="/browserconfig.xml"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/mstile-310x310.png"
        />

        {/* Yandex specific */}
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />
        <meta
          property="ya:ovs:upload_date"
          content="2025-01-01"
        />
        <meta
          property="ya:ovs:adult"
          content="false"
        />

        {/* DuckDuckGo and privacy-focused search engines */}
        <meta
          name="referrer"
          content="origin-when-cross-origin"
        />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />

        {/* International SEO */}
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://futureautonoms.com/"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://futureautonoms.com/en/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://futureautonoms.com/"
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
