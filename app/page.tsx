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
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BrandsSection />
      <CTASection />
       <ProductsSection /> 
      <FooterSection />
    </main>
  );
}
