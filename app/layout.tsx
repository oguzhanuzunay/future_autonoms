import { AlertBanner } from '@/components/ui/alert-banner';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Future Autonoms - Şirketinizin DNA'sına Özel AI Dönüşümü | %285 Verimlilik Artışı",
  description:
    "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı, %42 maliyet tasarrufu. Salesforce %84, IBM %40 başarı oranlarıyla kanıtlanmış DN.AI™ metodolojisi. Ücretsiz ROI analizi.",
  keywords:
    'AI dönüşümü, yapay zeka, dijital dönüşüm, AI agent, kurumsal AI, DN.AI, Future Autonoms, Salesforce AI, IBM AIOps, verimlilik artışı, maliyet tasarrufu',
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
  },
  openGraph: {
    title: "Future Autonoms - Şirketinizin DNA'sına Özel AI Dönüşümü",
    description:
      'Salesforce %84, IBM %40 başarı oranlarıyla kanıtlanmış DN.AI™ metodolojisi ile şirketinizi dönüştürün. %285 verimlilik artışı garantisi.',
    url: 'https://futureautonoms.com',
    siteName: 'Future Autonoms',
    images: [
      {
        url: '/og-image.png',
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
      'Salesforce %84, IBM %40 başarı oranlarıyla kanıtlanmış DN.AI™ metodolojisi ile %285 verimlilik artışı.',
    images: ['/og-image.png'],
    creator: '@FutureAutonoms',
    site: '@FutureAutonoms',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.className} font-sans antialiased`}>
        <AlertBanner />
        {children}
      </body>
    </html>
  );
}
