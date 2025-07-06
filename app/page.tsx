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
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100, // Offset (in px) from the top of the page when calculating scroll position
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
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
  );
}
