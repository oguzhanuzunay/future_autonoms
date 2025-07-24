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
      "Şirketinizin DNA'sına özel AI dönüşümü ile %285 verimlilik artışı sağlayan teknoloji şirketi",
    url: 'https://futureautonoms.com',
    logo: 'https://futureautonoms.com/logo.png',
    sameAs: [
      'https://twitter.com/futureautonoms',
      'https://linkedin.com/company/futureautonoms',
      'https://instagram.com/futureautonoms',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-XXX-XXX-XX-XX',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
    },
    areaServed: 'Turkey',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Transformation Services',
      itemListElement: [
        {
          '@type': 'Service',
          name: 'Kurumsal AI Dönüşümü',
          description: "Şirketinizin DNA'sına özel AI dönüşüm hizmeti",
        },
        {
          '@type': 'Service',
          name: 'DN.Sales™ Agent',
          description: '7/24 çalışan AI satış temsilcisi',
        },
        {
          '@type': 'Service',
          name: 'DN.Support™ Agent',
          description: 'Müşteri hizmetleri AI çözümü',
        },
      ],
    },
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://futureautonoms.com',
      },
    ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
          >
            <FeaturesSection />
          </section>
          <section
            id="brands"
            className="w-full"
          >
            <BrandsSection />
          </section>
          <section
            id="contact"
            className="w-full"
          >
            <CTASection />
          </section>
          <section
            id="products"
            className="w-full"
          >
            <ProductsSection />
          </section>
          <FooterSection />
        </div>
      </main>
    </>
  );
}
