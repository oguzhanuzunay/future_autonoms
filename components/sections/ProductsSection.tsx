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
  ArrowRight,
  BarChart3,
  Brain,
  Calculator,
  Clock,
  Cog,
  Cpu,
  Info,
  LineChart,
  Network,
  Percent,
  Shield,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';

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
  cta: string;
  badge?: string;
  popularity: number;
}

const products: Product[] = [
  {
    id: 'enterprise',
    title: 'Kurumsal AI Dönüşümü',
    description: "Şirketinizin DNA'sına uygun, uçtan uca AI dönüşüm süreci.",
    features: [
      {
        text: 'DNA Bazlı Metodoloji',
        icon: Brain,
        highlight: '%285 Verimlilik Artışı - Şirketinize Özel Yaklaşım',
      },
      {
        text: 'Süreç Optimizasyonu',
        icon: Cog,
        highlight: '%42 Maliyet Tasarrufu - Otomatik İş Akışları',
      },
      {
        text: 'Adaptif Entegrasyon',
        icon: Network,
        highlight: '6 Ay İçinde Tam Adaptasyon - Kesintisiz Geçiş',
      },
      {
        text: 'Performans Analizi',
        icon: LineChart,
        highlight: 'Gerçek Zamanlı Metrikler - ROI Takibi',
      },
    ],
    benefits: [
      'Ücretsiz ROI Analizi',
      '6 Ay Başarı Garantisi',
      '%100 Adaptasyon Desteği',
      'Sürekli Optimizasyon',
    ],
    cta: 'Teklif Alın',
    badge: 'En Popüler',
    popularity: 95,
  },
  {
    id: 'sales-agent',
    title: 'DN.Sales™ Agent',
    description: 'Satış süreçlerinizi 7/24 yöneten, dönüşüm odaklı AI satış temsilcisi.',
    features: [
      {
        text: 'Çok Dilli İletişim',
        icon: Network,
        highlight: '20+ Dil Desteği - Küresel Satış İmkanı',
      },
      {
        text: 'Akıllı Takip Sistemi',
        icon: Brain,
        highlight: '%99.9 Takip Oranı - Sıfır Lead Kaybı',
      },
      {
        text: 'Duygu Analizi',
        icon: Sparkles,
        highlight: '%92 Doğruluk - Kişiselleştirilmiş İletişim',
      },
      {
        text: 'Otomatik Raporlama',
        icon: BarChart3,
        highlight: 'Gerçek Zamanlı Dashboard - Satış Öngörüleri',
      },
    ],
    benefits: [
      'Ücretsiz CRM Entegrasyonu',
      'Kişiselleştirilmiş Eğitim',
      'A/B Test Desteği',
      'Performans Garantisi',
    ],
    cta: 'Demo İzle',
    badge: 'Yeni',
    popularity: 90,
  },
  {
    id: 'support-agent',
    title: 'DN.Support™ Agent',
    description: 'Müşteri hizmetlerinizi 7/24 yöneten, çözüm odaklı AI destek temsilcisi.',
    features: [
      {
        text: 'Anlık Çözüm Üretme',
        icon: Zap,
        highlight: '2 Saniye Yanıt - %89 İlk Kontakta Çözüm',
      },
      {
        text: 'Çok Kanallı Destek',
        icon: Network,
        highlight: 'Tüm Platformlarda - Kesintisiz Hizmet',
      },
      {
        text: 'Öğrenen Sistem',
        icon: Brain,
        highlight: 'Sürekli Gelişim - Artan Başarı Oranı',
      },
      {
        text: 'Proaktif Destek',
        icon: Shield,
        highlight: '%75 Sorun Önleme - Öngörülü Çözümler',
      },
    ],
    benefits: [
      'Ücretsiz Ticket Sistemi',
      'Özelleştirilmiş Yanıtlar',
      'Dil Desteği',
      'Memnuniyet Garantisi',
    ],
    cta: 'Hemen Deneyin',
    popularity: 88,
  },
  {
    id: 'process',
    title: 'DN.Process™ Agent',
    description: 'İş süreçlerinizi optimize eden ve otomatikleştiren AI süreç analisti.',
    features: [
      {
        text: 'Süreç Analizi',
        icon: BarChart3,
        highlight: '%92 Hata Azalması - Otomatik Tespit',
      },
      {
        text: 'Akıllı Otomasyon',
        icon: Cpu,
        highlight: '4.2x Hız Artışı - 24/7 Operasyon',
      },
      {
        text: 'Kaynak Optimizasyonu',
        icon: Calculator,
        highlight: '%35 Kaynak Tasarrufu - Akıllı Dağıtım',
      },
      {
        text: 'Verimlilik Takibi',
        icon: BarChart3,
        highlight: 'Anlık Metrikler - Sürekli İyileştirme',
      },
    ],
    benefits: [
      'Detaylı Süreç Analizi',
      'Kişiselleştirilmiş Çözümler',
      'Teknik Destek Garantisi',
      'Aylık Performans Raporu',
    ],
    cta: 'Analiz Başlatın',
    popularity: 85,
  },
  {
    id: 'finance-agent',
    title: 'DN.Finance™ Agent',
    description: 'Finansal süreçlerinizi yöneten ve optimize eden AI finans uzmanı.',
    features: [
      {
        text: 'Finansal Analiz',
        icon: Calculator,
        highlight: '%99.9 Doğruluk - Gerçek Zamanlı Takip',
      },
      {
        text: 'Risk Yönetimi',
        icon: Shield,
        highlight: '%92 Risk Tespiti - Proaktif Önlemler',
      },
      {
        text: 'Nakit Akışı Optimizasyonu',
        icon: TrendingUp,
        highlight: '%40 Daha İyi Tahminler - Akıllı Planlama',
      },
      {
        text: 'Bütçe Kontrolü',
        icon: BarChart3,
        highlight: '%25 Tasarruf - Otomatik Optimizasyon',
      },
    ],
    benefits: [
      'Ücretsiz Finansal Analiz',
      'Entegrasyon Desteği',
      'Aylık Raporlama',
      'Performans Garantisi',
    ],
    cta: 'Analiz İsteyin',
    popularity: 82,
  },
  {
    id: 'hr-agent',
    title: 'DN.HR™ Agent',
    description: 'İK süreçlerinizi yöneten ve optimize eden AI insan kaynakları uzmanı.',
    features: [
      {
        text: 'Aday Değerlendirme',
        icon: Brain,
        highlight: '%95 İsabet - Doğru Yetenek Seçimi',
      },
      {
        text: 'Performans Analizi',
        icon: BarChart3,
        highlight: '360° Değerlendirme - Objektif Ölçüm',
      },
      {
        text: 'Eğitim Yönetimi',
        icon: Sparkles,
        highlight: 'Kişiselleştirilmiş Gelişim - Sürekli İlerleme',
      },
      {
        text: 'Çalışan Deneyimi',
        icon: Shield,
        highlight: '%45 Daha İyi Memnuniyet - Proaktif Yaklaşım',
      },
    ],
    benefits: ['Ücretsiz İK Analizi', 'ATS Entegrasyonu', 'Eğitim Desteği', 'Adaptasyon Garantisi'],
    cta: 'Demo Talep Et',
    popularity: 80,
  },
  {
    id: 'mailing-agent',
    title: 'DN.Mail™ Agent',
    description: 'E-posta iletişiminizi otomatikleştiren ve optimize eden AI mail asistanı.',
    features: [
      {
        text: 'Akıllı Mail Yönetimi',
        icon: Brain,
        highlight: '%85 Zaman Tasarrufu - Otomatik Kategorizasyon',
      },
      {
        text: 'İçerik Optimizasyonu',
        icon: Sparkles,
        highlight: '%40 Daha Yüksek Açılma Oranı - AI Destekli İçerik',
      },
      {
        text: 'Kampanya Otomasyonu',
        icon: BarChart3,
        highlight: '%65 Daha İyi Dönüşüm - Akıllı Segmentasyon',
      },
      {
        text: 'A/B Test Yönetimi',
        icon: LineChart,
        highlight: 'Sürekli Optimizasyon - Veri Odaklı Kararlar',
      },
    ],
    benefits: [
      'Ücretsiz E-posta Analizi',
      'CRM Entegrasyonu',
      'Şablon Kütüphanesi',
      'Performans Raporları',
    ],
    cta: 'Hemen Deneyin',
    popularity: 78,
  },
  {
    id: 'personal-assistant',
    title: 'DN.Assistant™',
    description: 'Kişisel ve profesyonel hayatınızı organize eden AI asistanınız.',
    features: [
      {
        text: 'Takvim Yönetimi',
        icon: Brain,
        highlight: '%95 Doğruluk - Akıllı Planlama ve Optimizasyon',
      },
      {
        text: 'Görev Takibi',
        icon: Shield,
        highlight: 'Sıfır Görev Kaybı - Proaktif Hatırlatmalar',
      },
      {
        text: 'İletişim Asistanı',
        icon: Network,
        highlight: '24/7 Erişim - Çok Dilli İletişim Desteği',
  },
  {
        text: 'Doküman Yönetimi',
        icon: Sparkles,
        highlight: 'Akıllı Organizasyon - Hızlı Erişim',
      },
    ],
    benefits: ['Kişiselleştirilmiş AI', 'Çoklu Platform Desteği', 'Sesli Komut', 'Öğrenen Sistem'],
    cta: 'Asistanınızı Tanıyın',
    badge: 'Yeni',
    popularity: 85,
  },
  {
    id: 'survey-agent',
    title: 'DN.Survey™ Agent',
    description: 'Müşteri deneyimini sürekli iyileştiren, proaktif AI geri bildirim sistemi.',
    features: [
      {
        text: 'Akıllı Zamanlama',
        icon: Clock,
        highlight: '%92 Görüşme Tamamlanma - Optimum Zamanlı Aramalar',
      },
      {
        text: 'Akıllı Soru Yönetimi',
        icon: Brain,
        highlight: 'Dinamik Soru Akışı - Kişiselleştirilmiş Görüşme',
      },
      {
        text: 'Otomatik İçgörü',
        icon: Sparkles,
        highlight: '24 Saat İçinde Actionable Insights',
      },
      {
        text: 'Ürün Geliştirme Entegrasyonu',
        icon: Cpu,
        highlight: '%40 Daha Hızlı İyileştirme - Direkt Feedback Loop',
      },
    ],
    benefits: [
      'Ücretsiz Deneme Sürümü',
      'CRM/ERP Entegrasyonu',
      'Özelleştirilmiş Raporlar',
      'Sürekli Optimizasyon',
    ],
    cta: 'Hemen Başlayın',
    badge: 'Yeni',
    popularity: 88,
  },
];

const styles = `
  .enterprise-card-wrapper {
    position: relative;
    border-radius: 1rem;
    padding: 2px;
    transition: all 0.3s ease;
  }

  .enterprise-card-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 2px;
    background: linear-gradient(90deg, #9333ea, #3b82f6, #22d3ee, #9333ea);
    background-size: 300% 100%;
    animation: rgb-move 3s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    box-shadow: 0 0 35px rgba(147, 51, 234, 0.35),
                0 0 70px rgba(59, 130, 246, 0.25),
                0 0 100px rgba(34, 211, 238, 0.25);
  }

  .enterprise-card-wrapper:hover {
    transform: translateY(-3px);
  }

  .enterprise-card-wrapper:hover::before {
    box-shadow: 0 0 45px rgba(147, 51, 234, 0.45),
                0 0 90px rgba(59, 130, 246, 0.35),
                0 0 130px rgba(34, 211, 238, 0.35);
  }

  .premium-badge {
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 0 18px rgba(147, 51, 234, 0.35);
  }

  .premium-badge::before {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );
  }

  .popular-badge {
    position: relative;
    overflow: hidden;
  }

  .popular-badge::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: shine 2s ease-in-out infinite;
  }

  @keyframes shine {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }

  @keyframes rgb-move {
    0% { background-position: 0% 0%; }
    100% { background-position: 150% 0%; }
  }
`;

const ProductCard = ({ product }: { product: Product }) => {
  const glowVariants = {
    initial: {
      opacity: 0.5,
      scale: 1,
    },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.07, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {product.id === 'enterprise' && (
        <>
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute -inset-6 bg-gradient-to-r from-purple-600/25 via-blue-600/25 to-cyan-600/25 rounded-2xl blur-3xl z-0"
          />
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl z-0"
          />
        </>
      )}
      <div className={product.id === 'enterprise' ? 'enterprise-card-wrapper relative z-10' : ''}>
        <Card
          className={`relative h-full border-2 ${
            product.id === 'enterprise'
              ? 'border-purple-500/45 hover:border-purple-500/65 bg-card/90'
              : 'border-purple-500/20 hover:border-purple-500/40 bg-card/80'
          } transition-all duration-300 backdrop-blur-sm`}
        >
          {product.badge && (
            <Badge
              className={`absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-4 py-1 ${
                product.id === 'enterprise' ? 'popular-badge premium-badge' : ''
              }`}
              variant="default"
            >
              {product.badge}
              {product.id === 'enterprise' && <span className="ml-1 text-yellow-300">✨</span>}
            </Badge>
          )}
          <CardHeader className={product.id === 'enterprise' ? 'pt-0' : ''}>
            <CardTitle className="text-2xl flex items-center gap-2">
              {product.title}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-purple-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{product.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
            <CardDescription className="min-h-[3rem] text-foreground/80">
              {product.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Özellikler */}
            <div className="space-y-4">
        {product.features.map((feature, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center gap-3 cursor-help">
                      <feature.icon className="h-5 w-5 text-purple-400" />
                      <span className="text-sm text-foreground/80">{feature.text}</span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-card/80 backdrop-blur-sm border-purple-500/20">
                    <div className="flex justify-between space-x-4">
                      <div>
                        <h4 className="text-sm font-semibold">{feature.text}</h4>
                        <p className="text-sm text-purple-400">{feature.highlight}</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            {/* Faydalar */}
            <div className="space-y-2 pt-4">
              {product.benefits.map((benefit, index) => (
                <div
            key={index}
                  className="flex items-center gap-2 text-sm text-foreground/60"
          >
                  <Shield className="h-4 w-4 text-purple-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className={product.id === 'enterprise' ? 'pt-2' : 'pt-3'}>
            <Button
              className="w-full h-12 text-lg font-medium hover:scale-[1.02] transition-transform bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white"
              size="lg"
            >
              {product.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
};

export default function ProductsSection() {
  return (
    <>
      <style>{styles}</style>
      <section className="py-20 relative overflow-hidden bg-background/95">
        {/* Gradient Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
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
              className="mb-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-purple-300 hover:bg-purple-500/20"
            >
              🚀 Future Autonoms DN.AI™ Çözümleri
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Şirketiniz İçin{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Doğru AI Çözümü
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Test sonuçlarımıza göre, Future Autonoms'un DN.AI™ metodolojisi ile şirketler{' '}
              <span className="font-semibold text-purple-300">ortalama %285 verimlilik artışı</span>{' '}
              ve <span className="font-semibold text-purple-300">%42 maliyet tasarrufu</span> elde
              ediyor.
          </p>
        </motion.div>

          {/* Ürün Kartları Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
            <ProductCard
                key={product.id}
              product={product}
            />
          ))}
        </div>

          {/* Alt CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge
                variant="outline"
                className="border-green-500/30 text-green-400"
              >
                <Calculator className="w-3 h-3 mr-1" />
                Ücretsiz ROI Analizi
              </Badge>
              <Badge
                variant="outline"
                className="border-blue-500/30 text-blue-400"
              >
                <Shield className="w-3 h-3 mr-1" />6 Ay Garanti
              </Badge>
              <Badge
                variant="outline"
                className="border-purple-500/30 text-purple-300"
              >
                <Percent className="w-3 h-3 mr-1" />
                %100 Adaptasyon
              </Badge>
            </div>
            <p className="text-foreground/60 text-sm">
              Şirketinize en uygun çözüm için uzman ekibimiz 24 saat içinde size ulaşsın
            </p>
          </motion.div>
      </div>
    </section>
    </>
  );
}
