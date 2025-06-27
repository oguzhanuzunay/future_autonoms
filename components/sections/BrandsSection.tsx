'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Star, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

interface Brand {
  name: string;
  logo: string;
  stats: string;
  testimonial: string;
}

interface BrandItemProps {
  brand: Brand;
  index: number;
  containerWidth: number;
}

const brands = [
  {
    name: 'Microsoft',
    logo: '/brands/microsoft.svg',
    stats: '45% ROI increase',
    testimonial: 'Future Autonoms transformed our AI implementation process.',
  },
  {
    name: 'Google',
    logo: '/brands/google.svg',
    stats: '3x faster deployment',
    testimonial: 'Exceptional results in half the time.',
  },
  {
    name: 'Amazon',
    logo: '/brands/amazon.svg',
    stats: '2M$ cost savings',
    testimonial: 'Revolutionary approach to enterprise AI.',
  },
  {
    name: 'Facebook',
    logo: '/brands/facebook.svg',
    stats: '99.9% accuracy',
    testimonial: 'Best-in-class AI solutions.',
  },
  {
    name: 'Netflix',
    logo: '/brands/netflix.svg',
    stats: '80% automation',
    testimonial: 'Game-changing AI implementation.',
  },
  {
    name: 'Slack',
    logo: '/brands/slack.svg',
    stats: '5x productivity',
    testimonial: 'Transformed our workflow completely.',
  },
];

const infiniteBrands = [...brands, ...brands];

const metrics = [
  { value: '500+', label: 'Enterprise Clients', icon: Users },
  { value: '98%', label: 'Success Rate', icon: TrendingUp },
  { value: '15+', label: 'Industry Awards', icon: Award },
  { value: '4.9/5', label: 'Client Satisfaction', icon: Star },
];

// Context for managing active card
const ActiveCardContext = createContext<{
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}>({
  activeIndex: null,
  setActiveIndex: () => {},
});

const MobileBrandInfo = ({ brand, isActive }: { brand: Brand; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 10,
      }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="md:hidden" // Sadece mobilde göster
    >
      <div className="bg-card/85 backdrop-blur-sm border border-[#6B8AFF]/20 rounded-xl shadow-lg mx-4 mb-6">
        <div className="flex items-start gap-3 p-4">
          <div className="w-10 h-10 rounded-lg bg-[#6B8AFF]/10 flex items-center justify-center shrink-0">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-foreground/90 truncate">{brand.name}</h4>
            <p className="text-sm font-medium text-[#6B8AFF] mt-0.5">{brand.stats}</p>
            <p className="text-sm text-foreground/70 mt-1 line-clamp-2">{brand.testimonial}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BrandItem = ({ brand, index, containerWidth }: BrandItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { activeIndex, setActiveIndex } = useContext(ActiveCardContext);
  const [isNearCenter, setIsNearCenter] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const checkPosition = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const center = windowWidth / 2;
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(center - itemCenter);
        const threshold = isMobile ? 30 : 100;

        const isCentered = distance < threshold;
        setIsNearCenter(isCentered);

        if (isCentered && activeIndex !== index) {
          setActiveIndex(index);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          if (!isMobile) {
            // Desktop'ta timeout kullan
            timeoutRef.current = setTimeout(() => {
              setActiveIndex(null);
            }, 3000);
          }
        }
      }
    };

    const interval = setInterval(checkPosition, isMobile ? 50 : 100);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, activeIndex, setActiveIndex, isMobile]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={itemRef}
      className="relative"
    >
      {/* Desktop version - HoverCard */}
      {!isMobile && (
        <Popover open={isActive}>
          <PopoverTrigger asChild>
            <div className="relative group cursor-pointer w-[140px] h-[48px] flex items-center justify-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={48}
                className={`max-h-12 w-full object-contain transition-all duration-300 transform
                  ${isActive ? 'opacity-100 scale-110' : 'opacity-70'}
                  ${isNearCenter ? 'hover:opacity-100' : ''}`}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={`w-72 bg-card/85 backdrop-blur-sm border-[#6B8AFF]/20 shadow-lg 
              data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
              ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            align="center"
            side="top"
            sideOffset={15}
            forceMount
          >
            <div className="space-y-1.5 p-3">
              <h4 className="text-base font-semibold text-foreground/90 truncate">{brand.name}</h4>
              <p className="text-sm font-medium text-[#6B8AFF] break-words">{brand.stats}</p>
              <p className="text-sm text-foreground/70 break-words">{brand.testimonial}</p>
            </div>
          </PopoverContent>
        </Popover>
      )}

      {/* Mobile version - Just the logo */}
      {isMobile && (
        <div className="relative group cursor-pointer w-[140px] h-[48px] flex items-center justify-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={140}
            height={48}
            className={`max-h-12 w-full object-contain transition-all duration-300 transform
              ${isActive ? 'opacity-100 scale-110' : 'opacity-70'}`}
          />
        </div>
      )}
    </div>
  );
};

const BrandsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="relative py-16 sm:py-24 sm:pt-40 bg-background/95">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        {/* Header Section with Better Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-[#6B8AFF]/10 text-[#6B8AFF] hover:bg-[#6B8AFF]/20"
          >
            Limited Partnership Slots Available
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#6B8AFF] to-[#6B8AFF]/50 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg leading-8 text-foreground/80">
            Join the ranks of forward-thinking enterprises that have transformed their operations
            with Future Autonoms AI solutions.
          </p>
        </motion.div>

        {/* Metrics Section - Mobilde margin azaltıldı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-28 md:mb-28 mb-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={metric.label}
                className="p-6 text-center bg-card/95 border-[#6B8AFF]/10 hover:border-[#6B8AFF]/30 transition-all duration-300"
              >
                <Icon className="h-8 w-8 mx-auto mb-3 text-[#6B8AFF]" />
                <div className="text-3xl font-bold text-[#6B8AFF] mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-foreground/70">{metric.label}</div>
              </Card>
            );
          })}
        </motion.div>

        <ActiveCardContext.Provider value={{ activeIndex, setActiveIndex }}>
          {/* Mobile Info Display - Metrics ve Brands arasında */}
          {isMobile && activeIndex !== null && (
            <MobileBrandInfo
              brand={infiniteBrands[activeIndex]}
              isActive={true}
            />
          )}

          {/* Brands Carousel - Mobilde margin azaltıldı */}
          <div
            ref={containerRef}
            className="relative h-28 bg-card/30 rounded-2xl border border-[#6B8AFF]/10 my-16 md:my-16 my-8"
          >
            <div className="absolute inset-0 flex items-center overflow-x-hidden">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-50%' }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex gap-16 whitespace-nowrap px-8"
              >
                {infiniteBrands.map((brand, index) => (
                  <BrandItem
                    key={`${brand.name}-${index}`}
                    brand={brand}
                    index={index}
                    containerWidth={containerWidth}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </ActiveCardContext.Provider>

        {/* CTA Section with Better Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-[#6B8AFF] hover:bg-[#6B8AFF]/90 text-white font-semibold text-lg px-8 py-6 h-auto group shadow-[0_0_15px_rgba(107,138,255,0.3)]"
          >
            Join Industry Leaders
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm font-medium text-foreground/70">
            Limited partnership opportunities available. Schedule your consultation today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
