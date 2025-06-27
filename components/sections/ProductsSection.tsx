'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import {
  Award,
  BarChart,
  CheckCircle2,
  Clock,
  Database,
  Flame,
  Gift,
  Globe,
  Heart,
  HeartHandshake,
  Info,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { useEffect } from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  features: Array<{
    text: string;
    highlight?: string;
    icon: any;
  }>;
  benefits: string[];
  price: {
    amount: string;
    period: string;
    discount?: string;
  };
  cta: string;
  badge?: string;
  popularity: number;
}

const products: Product[] = [
  {
    id: 'sales-agent',
    title: 'AI Satış Ekibi',
    description: 'Satış süreçlerinizi otomatikleştirin ve dönüşüm oranlarınızı 3X artırın.',
    features: [
      {
        text: '7/24 Aktif Satış Ekibi',
        icon: Users,
        highlight: 'Hiç Durmayan Satış - Ayda 10.000+ Lead İşleme',
      },
      {
        text: 'Akıllı Lead Skorlama',
        icon: TrendingUp,
        highlight: '%40 Daha İyi Dönüşüm - Doğru Müşteriye Odaklanın',
      },
      {
        text: 'Otomatik Takip Sistemi',
        icon: CheckCircle2,
        highlight: 'Sıfır Lead Kaybı - %99.9 Takip Oranı',
      },
      {
        text: 'Kişiselleştirilmiş Teklifler',
        icon: HeartHandshake,
        highlight: '2X Daha Fazla Kabul - Müşteriye Özel Fiyatlandırma',
      },
    ],
    benefits: [
      'İlk ay %50 indirim fırsatı',
      'Ücretsiz CRM entegrasyonu',
      '30 gün koşulsuz iade garantisi',
      'Özel onboarding desteği',
    ],
    price: {
      amount: '2,999',
      period: 'ay',
      discount: '5,998',
    },
    cta: 'Hemen Deneyin',
    badge: 'En Popüler',
    popularity: 95,
  },
  {
    id: 'marketing-team',
    title: 'AI Pazarlama Ekibi',
    description: "Pazarlama stratejilerinizi AI ile güçlendirin ve ROI'nizi 2X'e çıkarın.",
    features: [
      {
        text: 'Otomatik İçerik Üretimi',
        icon: Sparkles,
        highlight: '10X Daha Hızlı - Günde 50+ Özgün İçerik',
      },
      {
        text: 'Kampanya Optimizasyonu',
        icon: TrendingUp,
        highlight: '%60 Daha İyi Sonuç - Gerçek Zamanlı Optimizasyon',
      },
      {
        text: 'Rakip Analizi',
        icon: Award,
        highlight: 'Gerçek Zamanlı Takip - 100+ Metrik Analizi',
      },
      {
        text: 'A/B Test Otomasyonu',
        icon: CheckCircle2,
        highlight: 'Sürekli İyileştirme - %30 Daha İyi Dönüşüm',
      },
    ],
    benefits: [
      'İlk ay ücretsiz danışmanlık',
      'Sınırsız revizyon hakkı',
      'Performans garantisi',
      'Haftalık analiz raporları',
    ],
    price: {
      amount: '3,499',
      period: 'ay',
      discount: '6,998',
    },
    cta: 'Şimdi Başlayın',
    badge: 'Yeni',
    popularity: 85,
  },
  {
    id: 'customer-service',
    title: 'AI Müşteri Hizmetleri',
    description: 'Müşteri memnuniyetini %95e çıkarın ve maliyetleri %60 düşürün.',
    features: [
      { text: '7/24 Müşteri Desteği', icon: Clock, highlight: 'Anında Yanıt - 2 Saniye Ortalama' },
      { text: 'Çok Dilli Destek', icon: Globe, highlight: '20+ Dil Desteği - Otomatik Çeviri' },
      { text: 'Duygu Analizi', icon: Heart, highlight: '%90 Doğruluk - Proaktif Müdahale' },
      { text: 'Otomatik Çözüm Önerileri', icon: Zap, highlight: '%80 Self-Servis Çözüm Oranı' },
    ],
    benefits: [
      'Ücretsiz chatbot kurulumu',
      'Özel eğitim desteği',
      'API entegrasyonu',
      'Kişiselleştirilmiş yanıtlar',
    ],
    price: {
      amount: '2,799',
      period: 'ay',
      discount: '5,598',
    },
    cta: 'Hemen Başlayın',
    popularity: 80,
  },
  {
    id: 'social-media',
    title: 'AI Sosyal Medya Ekibi',
    description: 'Sosyal medya varlığınızı güçlendirin ve etkileşiminizi 5X artırın.',
    features: [
      { text: '7/24 İçerik Üretimi', icon: Clock, highlight: 'Kesintisiz İçerik - Günde 30+ Post' },
      {
        text: 'Trend Analizi',
        icon: Flame,
        highlight: 'Viral İçerik Garantisi - %90 Trend Yakalama',
      },
      {
        text: 'Etkileşim Yönetimi',
        icon: HeartHandshake,
        highlight: '%80 Daha Fazla Engagement - Akıllı Yanıtlar',
      },
      {
        text: 'Performans Raporları',
        icon: TrendingUp,
        highlight: 'Gerçek Zamanlı Analiz - 50+ Metrik',
      },
    ],
    benefits: [
      'İlk ay içerik paketi hediye',
      'Ücretsiz görsel tasarım',
      'Rakip analiz raporu',
      'Hashtag optimizasyonu',
    ],
    price: {
      amount: '2,499',
      period: 'ay',
      discount: '4,998',
    },
    cta: 'Hemen Katılın',
    popularity: 75,
  },
  {
    id: 'hr-team',
    title: 'AI İK Ekibi',
    description: 'İşe alım süreçlerinizi otomatikleştirin ve en iyi yetenekleri bulun.',
    features: [
      { text: 'Akıllı CV Tarama', icon: Search, highlight: '%90 Doğruluk - 1000+ CV/Saat' },
      {
        text: 'Otomatik Mülakat',
        icon: Users,
        highlight: '24/7 İlk Görüşme - %70 Zaman Tasarrufu',
      },
      { text: 'Yetenek Havuzu', icon: Database, highlight: 'Akıllı Eşleştirme - %85 İsabet' },
      {
        text: 'Performans Takibi',
        icon: BarChart,
        highlight: 'Objektif Değerlendirme - 360° Analiz',
      },
    ],
    benefits: [
      'Ücretsiz ATS entegrasyonu',
      'Özel mülakat şablonları',
      'Yetenek havuzu analizi',
      'Aylık İK raporu',
    ],
    price: {
      amount: '3,299',
      period: 'ay',
      discount: '6,598',
    },
    cta: 'Şimdi Deneyin',
    popularity: 70,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="relative h-full border-2 hover:border-primary/50 transition-all duration-300">
        {product.badge && (
          <Badge
            className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-1"
            variant="default"
          >
            {product.badge}
          </Badge>
        )}
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            {product.title}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{product.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription className="min-h-[3rem]">{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Özellikler */}
          <div className="space-y-4">
            {product.features.map((feature, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-3 cursor-help">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="text-sm font-semibold">{feature.text}</h4>
                      <p className="text-sm text-primary">{feature.highlight}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Fiyatlandırma */}
          <div className="text-center pt-4">
            {product.price.discount && (
              <span className="text-sm text-muted-foreground line-through">
                ₺{product.price.discount}
              </span>
            )}
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-primary">₺{product.price.amount}</span>
              <span className="text-muted-foreground">/{product.price.period}</span>
            </div>
          </div>

          {/* Faydalar */}
          <div className="space-y-2 pt-4">
            {product.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Gift className="h-4 w-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <Button
            className="w-full h-12 text-lg font-medium hover:scale-[1.02] transition-transform"
            size="lg"
          >
            {product.cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function ProductsSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animasyonlu Arka Plan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4"
          >
            🚀 Özel Lansman Fırsatı
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            AI Ekibinizi Seçin ve{' '}
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Hemen Büyümeye Başlayın
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            500+ şirket AI ekiplerimizle çalışıyor ve{' '}
            <span className="font-semibold text-foreground">ortalama %40 büyüme</span> elde ediyor.
            Üstelik şimdi <span className="font-semibold text-foreground">%50 indirim</span>{' '}
            fırsatıyla!
          </p>
        </motion.div>

        {/* Ürün Kartları Grid/Scroll Container */}
        <div className="relative">
          {/* Kaydırma İşaretleri - Sadece Mobilde */}
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 md:hidden">
            <div className="w-4 h-12 flex flex-col justify-center items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            </div>
          </div>

          {/* Kartlar Container */}
          <div
            className="
              grid grid-cols-1 gap-6 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4
              md:grid-cols-2
              overflow-x-auto
              pb-6
              snap-x
              snap-mandatory
              scrollbar-hide
              -mx-4
              px-4
              md:mx-0
              md:px-0
              md:overflow-x-visible
              scroll-smooth
              relative
            "
          >
            {/* Kartların Gölge Efekti - Sadece Mobilde */}
            <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />

            {products.map((product, index) => (
              <div
                key={product.id}
                className="
                  snap-center
                  min-w-[calc(100vw-2rem)]
                  sm:min-w-[calc(50vw-2rem)]
                  md:min-w-0
                  first:pl-4
                  last:pr-4
                  md:first:pl-0
                  md:last:pr-0
                  transform
                  transition-transform
                  duration-300
                  hover:translate-y-[-4px]
                  hover:translate-x-0
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobil Kaydırma İpucu */}
        <div className="mt-6 text-center text-sm text-muted-foreground md:hidden">
          <span className="inline-block animate-bounce">👆</span> Daha fazla seçenek için kaydırın
        </div>
      </div>
    </section>
  );
}
