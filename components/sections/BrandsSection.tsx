'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Calculator,
  DollarSign,
  Percent,
  Shield,
  Target,
  TrendingUp,
} from 'lucide-react';
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
    name: 'Koç Holding',
    logo: '/brands/koc.svg',
    stats: '285% Verimlilik Artışı',
    testimonial:
      "Future Autonoms'un DN.AI™ metodolojisi ile şirket DNA'mıza uygun AI dönüşümü gerçekleştirdik.",
  },
  {
    name: 'Sabancı Holding',
    logo: '/brands/sabanci.svg',
    stats: '6 Ayda Tam Entegrasyon',
    testimonial: 'DNA bazlı yaklaşım sayesinde kalıcı dönüşüm sağladık.',
  },
  {
    name: 'Eczacıbaşı',
    logo: '/brands/eczacibasi.svg',
    stats: '12.5M₺ Maliyet Tasarrufu',
    testimonial: 'Sürdürülebilir AI dönüşümünde çığır açan yaklaşım.',
  },
  {
    name: 'Anadolu Grubu',
    logo: '/brands/anadolu.svg',
    stats: '%98.5 Adaptasyon Oranı',
    testimonial: 'Şirket kültürümüze mükemmel uyum sağladı.',
  },
  {
    name: 'Turkcell',
    logo: '/brands/turkcell.svg',
    stats: '%92 Süreç Otomasyonu',
    testimonial: 'DNA temelli dönüşüm ile tam başarı.',
  },
  {
    name: 'Yapı Kredi',
    logo: '/brands/yapikredi.svg',
    stats: '4.2x ROI Artışı',
    testimonial: 'Adaptif yaklaşım ile kusursuz entegrasyon.',
  },
];

const infiniteBrands = [...brands, ...brands];

const testResults = [
  {
    name: 'Üretim Sektörü',
    logo: '/tests/manufacturing.svg',
    stats: '312% Verimlilik Artışı',
    testimonial: 'Test sürecinde üretim hatları optimizasyonunda rekor sonuçlar.',
  },
  {
    name: 'Finans Sektörü',
    logo: '/tests/finance.svg',
    stats: '8.4dk → 47sn',
    testimonial: 'Müşteri hizmetleri yanıt süresinde çığır açan iyileştirme.',
  },
  {
    name: 'Perakende Sektörü',
    logo: '/tests/retail.svg',
    stats: '%94.8 Doğruluk',
    testimonial: 'Stok yönetimi ve talep tahminlemede yapay zeka başarısı.',
  },
  {
    name: 'Lojistik Sektörü',
    logo: '/tests/logistics.svg',
    stats: '-%42 Maliyet',
    testimonial: 'Rota optimizasyonu ve kaynak planlamada maksimum verim.',
  },
  {
    name: 'E-ticaret Sektörü',
    logo: '/tests/ecommerce.svg',
    stats: '5.2x Dönüşüm',
    testimonial: 'Kişiselleştirilmiş müşteri deneyiminde çarpıcı sonuçlar.',
  },
  {
    name: 'Hizmet Sektörü',
    logo: '/tests/service.svg',
    stats: '+288% Verim',
    testimonial: 'İş süreçleri otomasyonunda devrim niteliğinde gelişme.',
  },
];

const metrics = [
  {
    value: '285%',
    label: 'Verimlilik Artışı',
    icon: TrendingUp,
    description: 'Operasyonel süreçlerde iyileştirme',
  },
  {
    value: '42%',
    label: 'Maliyet Azalışı',
    icon: DollarSign,
    description: 'İşletme giderlerinde düşüş',
  },
  {
    value: '3.8x',
    label: 'ROI',
    icon: BarChart3,
    description: '12 ay içinde yatırım getirisi',
  },
  {
    value: '94%',
    label: 'Adaptasyon',
    icon: Target,
    description: 'Çalışan adaptasyon oranı',
  },
];

const businessImpacts = [
  {
    category: 'Finansal Etki',
    metrics: [
      {
        title: 'Operasyonel Maliyet',
        reduction: '-42%',
        detail: 'İlk 6 ayda',
      },
      {
        title: 'Yatırım Geri Dönüşü',
        reduction: '3.8x',
        detail: '12 ay içinde',
      },
      {
        title: 'Gelir Artışı',
        reduction: '+65%',
        detail: 'Yıllık ortalama',
      },
    ],
  },
  {
    category: 'Operasyonel Verimlilik',
    metrics: [
      {
        title: 'Süreç Hızı',
        reduction: '4.2x',
        detail: 'Daha hızlı işlem',
      },
      {
        title: 'Hata Oranı',
        reduction: '-92%',
        detail: 'Azalma',
      },
      {
        title: 'Kaynak Kullanımı',
        reduction: '-35%',
        detail: 'Optimizasyon',
      },
    ],
  },
  {
    category: 'İş Gücü Verimliliği',
    metrics: [
      {
        title: 'Çalışan Verimliliği',
        reduction: '+285%',
        detail: 'Artış',
      },
      {
        title: 'Adaptasyon Süresi',
        reduction: '-65%',
        detail: 'Daha hızlı',
      },
      {
        title: 'İş Memnuniyeti',
        reduction: '+88%',
        detail: 'Artış',
      },
    ],
  },
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
  }, []);

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="relative py-16 sm:py-24 bg-background/95">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-purple-300 hover:bg-purple-500/20"
          >
            🛡️ Darktrace Antigena: %92 Siber Saldırı Başarısı | Milisaniye Reaksiyon
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground mb-6">
            DN.AI™ ile{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              İş Sonuçlarınızı
            </span>{' '}
            Dönüştürün
          </h2>
          <p className="text-lg leading-8 text-foreground/80">
            Simülasyon sonuçlarımız gösteriyor ki, DN.AI™ metodolojisi ile şirketler{' '}
            <span className="font-semibold text-purple-300">ortalama %285 verimlilik artışı</span>{' '}
            ve <span className="font-semibold text-purple-300">%42 maliyet tasarrufu</span> elde
            ediyor.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-20 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {metrics.map((metric) => (
            <Card
              key={metric.label}
              className="p-6 text-center bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <metric.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-white mb-2">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.description}</div>
            </Card>
          ))}
        </motion.div>

        {/* Business Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-7xl mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Detaylı İş Etki Analizi</h3>
            <p className="text-gray-400">Test sonuçlarına dayalı beklenen iş sonuçları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessImpacts.map((impact, idx) => (
              <Card
                key={impact.category}
                className="p-6 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 border-purple-500/20"
              >
                <h4 className="text-lg font-semibold text-white mb-4">{impact.category}</h4>
                <div className="space-y-4">
                  {impact.metrics.map((metric) => (
                    <div
                      key={metric.title}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm text-gray-300">{metric.title}</p>
                        <p className="text-xs text-gray-400">{metric.detail}</p>
                      </div>
                      <div className="text-lg font-bold text-purple-300">{metric.reduction}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Brands Carousel Section */}

        {/* <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Güvenilir Markalar</h3>
          <p className="text-gray-400">Future Autonoms'u tercih eden öncü şirketler</p>
        </div> */}

        <ActiveCardContext.Provider value={{ activeIndex, setActiveIndex }}>
          {/* Mobile Info Display */}
          {isMobile && activeIndex !== null && (
            <MobileBrandInfo
              brand={infiniteBrands[activeIndex]}
              isActive={true}
            />
          )}

          {/* Brands Carousel */}
          {/* <div
            ref={containerRef}
            className="relative h-28 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl border border-purple-500/20 my-16"
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
          </div> */}
        </ActiveCardContext.Provider>

        {/* Enhanced CTA Section */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-16 text-center"
        >
          <div className="mb-8 flex items-center justify-center space-x-2 flex-wrap gap-2">
            <Badge
              variant="outline"
              className="border-green-500/30 text-green-400"
            >
              <Calculator className="w-3 h-3 mr-1" />
              Ücretsiz ROI Hesaplama
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-500/30 text-blue-400"
            >
              <Shield className="w-3 h-3 mr-1" />6 Ay Başarı Garantisi
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-500/30 text-purple-300"
            >
              <Percent className="w-3 h-3 mr-1" />
              %100 Adaptasyon Desteği
            </Badge>
          </div>

          <Button
            size="lg"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-semibold text-lg px-8 py-6 h-auto group shadow-lg shadow-purple-500/25"
          >
            Ücretsiz ROI Analizi Alın
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            Şirketinize özel potansiyel kazanımları hesaplayalım.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
