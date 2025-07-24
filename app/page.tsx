'use client';

import { Navigation } from '@/components/Navigation';
import BrandsSection from '@/components/sections/BrandsSection';
import CTASection from '@/components/sections/CTASection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100, // Offset (in px) from the top of the page when calculating scroll position
    });
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Future Autonoms',
    description:
      "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı sağlayan AI dönüşüm uzmanı",
    url: 'https://futureautonoms.com',
    logo: 'https://futureautonoms.com/logo.png',
    sameAs: [
      'https://twitter.com/futureautonoms',
      'https://linkedin.com/company/futureautonoms',
      'https://instagram.com/futureautonoms',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'İstanbul',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-XXX-XXX-XXXX',
      contactType: 'customer service',
      email: 'info@futureautonoms.com',
    },
    offers: {
      '@type': 'Offer',
      name: 'Kurumsal AI Dönüşümü',
      description: 'DNA bazlı metodoloji ile %285 verimlilik artışı garantisi',
      category: 'AI Transformation Services',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  };

  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'DN.AI™ Kurumsal AI Dönüşümü',
    description:
      "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı, %42 maliyet tasarrufu",
    provider: {
      '@type': 'Organization',
      name: 'Future Autonoms',
    },
    areaServed: 'TR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Dönüşüm Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DN.Sales™ Agent',
            description: 'Satış süreçlerinizi 7/24 yöneten AI satış temsilcisi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DN.Support™ Agent',
            description: 'Müşteri hizmetlerinizi 7/24 yöneten AI destek temsilcisi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DN.Mail™ Agent',
            description: 'E-posta iletişiminizi otomatikleştiren AI mail asistanı',
          },
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
        />
        <link
          rel="canonical"
          href="https://futureautonoms.com"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden pt-16 sm:pt-14">
        <Navigation />
        <div className="w-full">
          <HeroSection />
          <section
            id="features"
            className="w-full"
            aria-label="AI dönüşüm özellikleri"
          >
            <FeaturesSection />
          </section>
          <section
            id="brands"
            className="w-full"
            aria-label="Müşteri referansları ve başarı hikayeleri"
          >
            <BrandsSection />
          </section>
          <section
            id="contact"
            className="w-full"
            aria-label="İletişim formu ve teklif alma"
          >
            <CTASection />
          </section>
          <section
            id="products"
            className="w-full"
            aria-label="AI çözümleri ve ürünler"
          >
            <ProductsSection />
          </section>
          <FooterSection />
        </div>
      </main>
    </>
  );
}
