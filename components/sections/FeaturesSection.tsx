'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BarChart,
  Bot,
  Brain,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-[#6B8AFF]" />,
    title: 'Yapay Zeka Teknolojisi',
    description: 'Rakiplerinizden bir adım önde olun',
    benefits: [
      'Müşteri Hizmetlerinde %60 Tasarruf',
      'Satışlarda %40 Artış',
      '7/24 Kesintisiz Operasyon',
    ],
    stats: {
      value: '40%',
      label: 'Daha Hızlı İş Süreçleri',
    },
    socialProof: '250+ Aktif Kullanıcı',
  },
  {
    icon: <Bot className="w-8 h-8 text-[#6B8AFF]" />,
    title: 'Akıllı Asistanlar',
    description: 'Müşterilerinize özel deneyim sunun',
    benefits: [
      'Müşteri Memnuniyetinde %95 Artış',
      'Otomatik Öğrenme ve Adaptasyon',
      'Kişiselleştirilmiş Öneriler',
    ],
    stats: {
      value: '95%',
      label: 'Müşteri Memnuniyeti',
    },
    socialProof: '10,000+ Mutlu Müşteri',
  },
  {
    icon: <Zap className="w-8 h-8 text-[#6B8AFF]" />,
    title: 'Hızlı Entegrasyon',
    description: 'Dakikalar içinde sisteminize entegre edin',
    benefits: ['15 Dakikada Kurulum', 'Teknik Ekip Gerektirmez', 'Anında Sonuç Alın'],
    stats: {
      value: '15dk',
      label: 'Kurulum Süresi',
    },
    socialProof: '1000+ Başarılı Entegrasyon',
  },
  {
    icon: <Shield className="w-8 h-8 text-[#6B8AFF]" />,
    title: 'Güvenlik Garantisi',
    description: 'Verileriniz %100 güvende',
    benefits: ['ISO 27001 Sertifikası', 'KVKK Uyumlu', 'Bankacılık Standardı'],
    stats: {
      value: '100%',
      label: 'Güvenlik Skoru',
    },
    socialProof: '0 Güvenlik İhlali',
  },
];

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    title: 'CEO',
    company: 'TechCo Yazılım A.Ş.',
    image: '/testimonials/1.jpg',
    quote:
      "Rakiplerimiz hala geleneksel yöntemlerle çalışırken, biz Future Autonoms ile satışlarımızı 3 ayda %40 artırdık. Özellikle AI destekli satış asistanı, ekibimizin kapanış oranını %85'e çıkardı. Müşteri görüşmelerimiz %60 daha verimli hale geldi ve ortalama sözleşme değerimiz %30 arttı. Bu yatırımın geri dönüşü beklentilerimizin çok üstünde oldu.",
    stats: '+40% Satış Artışı',
    industry: 'Yazılım',
    extraStats: ['%85 Kapanış Oranı', '3 Ay Geri Ödeme', '%30 LTV Artışı'],
    tags: ['Lider', 'İnovasyon', 'Hızlı Büyüme'],
  },
  {
    name: 'Zeynep Kaya',
    title: 'Satış Direktörü',
    company: 'B2B Market',
    image: '/testimonials/2.jpg',
    quote:
      "Daha önce denediğimiz hiçbir çözüm bu kadar etkili olmamıştı. AI asistanlarımız sayesinde müşteri hizmetleri maliyetlerimiz %60 düştü ve müşteri memnuniyetimiz %98'e yükseldi. Üstelik ilk aydan itibaren yatırımımızın karşılığını almaya başladık.",
    stats: '-60% Maliyet',
    industry: 'E-ticaret',
    extraStats: ['%98 Müşteri Memnuniyeti', '24/7 Operasyon'],
    tags: ['Maliyet Tasarrufu', 'Müşteri Odaklı', 'Otomasyon'],
  },
  {
    name: 'Mehmet Demir',
    title: 'Pazarlama Müdürü',
    company: 'Global Retail',
    image: '/testimonials/3.jpg',
    quote:
      "Future Autonoms'un AI pazarlama asistanı, kampanyalarımızın ROI'sini %300 artırdı. Özellikle kişiselleştirilmiş müşteri deneyimi sayesinde tekrar satın alma oranlarımız %75 yükseldi. Artık her müşterimize özel bir deneyim sunabiliyoruz.",
    stats: '3X ROI Artışı',
    industry: 'Perakende',
    extraStats: ['%75 Tekrar Satın Alma', '%90 Kampanya Başarısı'],
    tags: ['Kişiselleştirme', 'Yüksek ROI', 'Ölçeklenebilir'],
  },
  {
    name: 'Ayşe Yıldız',
    title: 'Operasyon Direktörü',
    company: 'Lojistik Pro',
    image: '/testimonials/4.jpg',
    quote:
      "Sadece 2 hafta içinde sistemlerimizi entegre ettik ve hemen sonuç almaya başladık. Operasyonel süreçlerimiz %70 hızlandı, hata oranımız %95 azaldı. Future Autonoms'un 7/24 desteği ve uzman ekibi, tüm süreçte yanımızdaydı.",
    stats: '+70% Verimlilik',
    industry: 'Lojistik',
    extraStats: ['%95 Hata Azalması', '2 Hafta Implementasyon'],
    tags: ['Hızlı Kurulum', 'Sürekli Destek', 'Sıfır Risk'],
  },
  {
    name: 'Can Özkan',
    title: 'Finans Direktörü',
    company: 'FinTech Solutions',
    image: '/testimonials/5.jpg',
    quote:
      'Future Autonoms ile yatırımımızın geri dönüşünü 45 günde aldık. Müşteri edinme maliyetimiz %50 düştü ve çapraz satış oranlarımız %120 arttı. Üstelik tüm bunları ekip büyütmeden başardık. Bu sadece bir yazılım değil, gerçek bir büyüme ortağı.',
    stats: '12X ROI',
    industry: 'Finans',
    extraStats: ['45 Gün Break-even', '%120 Çapraz Satış Artışı'],
    tags: ['Hızlı ROI', 'Maliyet Etkin', 'Ölçeklenebilir'],
  },
  {
    name: 'Elif Yalın',
    title: 'Dijital Pazarlama Yöneticisi',
    company: 'E-Commerce Plus',
    image: '/testimonials/6.jpg',
    quote:
      'AI asistanlarımız sayesinde lead kalitemiz %85 arttı ve satış döngümüz %60 kısaldı. Özellikle kişiselleştirilmiş içerik önerileri ve otomatik A/B testleri sayesinde dönüşüm oranlarımız 2 katına çıktı. Bu başarıyı gören rakiplerimiz de şimdi bizi örnek alıyor.',
    stats: '2X Dönüşüm',
    industry: 'E-ticaret',
    extraStats: ['%85 Lead Kalitesi', '%60 Daha Hızlı Satış'],
    tags: ['Pazarlama Otomasyonu', 'Lead Optimizasyonu', 'A/B Testing'],
  },
  {
    name: 'Burak Şahin',
    title: 'Müşteri Deneyimi Direktörü',
    company: 'Retail Chain Corp.',
    image: '/testimonials/7.jpg',
    quote:
      "Future Autonoms'un AI çözümleri, müşteri deneyimimizi tamamen dönüştürdü. NPS skorumuz 45'ten 85'e yükseldi ve müşteri şikayetlerimiz %75 azaldı. Artık her müşterimize premium bir deneyim sunabiliyoruz, üstelik daha düşük maliyetle.",
    stats: '85 NPS Skoru',
    industry: 'Perakende',
    extraStats: ['%75 Daha Az Şikayet', '%90 İlk Çözüm Oranı'],
    tags: ['Müşteri Deneyimi', 'Otomasyon', 'Maliyet Tasarrufu'],
  },
  {
    name: 'Deniz Aydın',
    title: 'Growth Manager',
    company: 'SaaS Growth Co.',
    image: '/testimonials/8.jpg',
    quote:
      'Büyüme hedeflerimize Future Autonoms ile 6 ay erkenden ulaştık. AI destekli growth stratejileri sayesinde kullanıcı aktivasyonumuz %150 arttı ve churn oranımız %60 düştü. Bu sonuçlar yatırımcılarımızı da çok etkiledi.',
    stats: '%150 Büyüme',
    industry: 'SaaS',
    extraStats: ['%60 Churn Azalması', '6 Ay Erken Hedef'],
    tags: ['Hızlı Büyüme', 'Kullanıcı Aktivasyonu', 'Yatırımcı Güveni'],
  },
  {
    name: 'Selin Aksoy',
    title: 'E-ticaret Direktörü',
    company: 'MegaMarket',
    image: '/testimonials/9.jpg',
    quote:
      'AI destekli ürün önerileri ve dinamik fiyatlandırma sayesinde sepet ortalamasını %45 artırdık. Stok yönetimimiz %80 daha doğru hale geldi ve sezon sonu stok maliyetlerimiz %60 azaldı. Özellikle yapay zeka destekli müşteri segmentasyonu ile hedefli kampanyalarımızın dönüşüm oranı %120 arttı.',
    stats: '%45 Sepet Artışı',
    industry: 'E-ticaret',
    extraStats: ['%120 Kampanya Dönüşümü', '%60 Stok Optimizasyonu'],
    tags: ['Stok Yönetimi', 'Dinamik Fiyatlandırma', 'Müşteri Segmentasyonu'],
  },
  {
    name: 'Murat Öztürk',
    title: 'Üretim Müdürü',
    company: 'Endüstri Tech',
    image: '/testimonials/10.jpg',
    quote:
      'Üretim hatlarımızdaki AI sensörleri ve prediktif bakım sistemi sayesinde duruş sürelerimiz %70 azaldı. Enerji tüketimimiz %25 düştü ve kalite kontrol süreçlerimiz %99.9 doğruluk oranına ulaştı. Yatırımımızı 4 ayda geri kazandık ve şimdi tüm fabrikalarımıza yaygınlaştırıyoruz.',
    stats: '-70% Duruş Süresi',
    industry: 'Üretim',
    extraStats: ['%25 Enerji Tasarrufu', '%99.9 Kalite Skoru'],
    tags: ['Endüstri 4.0', 'Prediktif Bakım', 'Enerji Verimliliği'],
  },
  {
    name: 'Aylin Çelik',
    title: 'İK Direktörü',
    company: 'Talent Hub',
    image: '/testimonials/11.jpg',
    quote:
      'AI destekli yetenek havuzu ve işe alım süreçlerimiz sayesinde doğru adayı bulma süremiz %65 kısaldı. Çalışan bağlılığımız %40 arttı ve yıllık işten ayrılma oranımız %15ten %5e düştü. Özellikle AI destekli performans değerlendirme sistemi, çalışan gelişimini %90 daha doğru ölçüyor.',
    stats: '%65 Daha Hızlı İşe Alım',
    industry: 'İnsan Kaynakları',
    extraStats: ['%40 Çalışan Bağlılığı', '%10 Düşük Turnover'],
    tags: ['Yetenek Yönetimi', 'Çalışan Deneyimi', 'Performans Analizi'],
  },
];

const stats = [
  { value: '500+', label: 'Aktif Müşteri', icon: <Users className="w-5 h-5 text-[#6B8AFF]" /> },
  {
    value: '₺2.5M+',
    label: 'Tasarruf Sağlandı',
    icon: <BarChart className="w-5 h-5 text-[#6B8AFF]" />,
  },
  { value: '50+', label: 'Sektörde Başarı', icon: <Award className="w-5 h-5 text-[#6B8AFF]" /> },
  { value: '24/7', label: 'Kesintisiz Hizmet', icon: <Clock className="w-5 h-5 text-[#6B8AFF]" /> },
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="features"
      className="relative w-full py-24 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,138,255,0.15),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={containerAnimation}
          className="text-center mb-16"
        >
          <motion.div variants={itemAnimation}>
            <Badge
              variant="outline"
              className="mb-4 border-[#6B8AFF] text-[#6B8AFF]"
            >
              <Award className="mr-1 h-3 w-3" />
              <span>Türkiye'nin Lider AI Platformu</span>
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Neden{' '}
              <span className="relative">
                Future Autonoms
                <div className="absolute inset-x-0 bottom-0 h-2 bg-[#6B8AFF]/10" />
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Yapay zeka ile işletmenizi dönüştürün, rekabette öne geçin
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={containerAnimation}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="p-4 bg-black/40 border-[#6B8AFF]/20 hover:border-[#6B8AFF]/40 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    {stat.icon}
                    <div className="mt-2 text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Tabs
          defaultValue="features"
          className="mb-16"
        >
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 bg-black/40">
            <TabsTrigger
              value="features"
              className="data-[state=active]:bg-[#6B8AFF]/10 data-[state=active]:text-[#6B8AFF]"
            >
              Özellikler
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="data-[state=active]:bg-[#6B8AFF]/10 data-[state=active]:text-[#6B8AFF]"
            >
              Başarı Hikayeleri
            </TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <HoverCard>
                    <HoverCardTrigger>
                      <Card className="h-full p-6 hover:shadow-[0_0_15px_rgba(107,138,255,0.15)] transition-all duration-300 bg-black/40 backdrop-blur-sm border-[#6B8AFF]/20 hover:border-[#6B8AFF]/40">
                        <div className="w-16 h-16 bg-[#6B8AFF]/5 rounded-2xl flex items-center justify-center mb-6">
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                        <p className="text-gray-300 mb-6">{feature.description}</p>
                        <div className="mb-6 text-center">
                          <div className="text-3xl font-bold text-[#6B8AFF] mb-1">
                            {feature.stats.value}
                          </div>
                          <div className="text-sm text-gray-400">{feature.stats.label}</div>
                        </div>
                        <ul className="space-y-3">
                          {feature.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-300"
                            >
                              <CheckCircle className="w-5 h-5 text-[#6B8AFF] mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-[#6B8AFF]/10">
                          <div className="flex items-center justify-center text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-2 text-[#6B8AFF]" />
                            {feature.socialProof}
                          </div>
                        </div>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-black/90 border-[#6B8AFF]/20">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-[#6B8AFF]">
                          {feature.title} Detayları
                        </h4>
                        <p className="text-sm text-gray-400">
                          Hemen başlayın ve ilk 14 gün ücretsiz kullanın. Kurulum için teknik ekip
                          gerektirmez.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="testimonials">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="p-8 bg-black/40 backdrop-blur-sm border-[#6B8AFF]/20">
                        <div className="flex flex-col items-center text-center">
                          <Badge
                            variant="outline"
                            className="mb-4 text-[#6B8AFF] border-[#6B8AFF]/20"
                          >
                            {testimonial.industry}
                          </Badge>
                          <div className="flex gap-2 mb-6">
                            <Badge
                              variant="secondary"
                              className="bg-[#6B8AFF]/10 text-[#6B8AFF]"
                            >
                              {testimonial.stats}
                            </Badge>
                            {testimonial.extraStats.map((stat, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-[#6B8AFF]/5 text-[#6B8AFF]"
                              >
                                {stat}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xl text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                          <div className="mt-4">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-[#6B8AFF]">{testimonial.title}</p>
                            <p className="text-sm text-gray-400">{testimonial.company}</p>
                          </div>
                          <div className="flex gap-2 mt-4">
                            {testimonial.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 rounded-full bg-[#6B8AFF]/5 text-[#6B8AFF]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-black/40 text-[#6B8AFF] hover:bg-[#6B8AFF]/10 border-[#6B8AFF]/20" />
              <CarouselNext className="bg-black/40 text-[#6B8AFF] hover:bg-[#6B8AFF]/10 border-[#6B8AFF]/20" />
            </Carousel>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-[#6B8AFF]/5 text-[#6B8AFF] px-4 py-2 rounded-full text-sm border border-[#6B8AFF]/20">
            <Clock className="w-4 h-4" />
            <span>14 Gün Ücretsiz Deneme Fırsatı</span>
          </div>

          <Button
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#6B8AFF] hover:bg-[#6B8AFF]/90 text-white text-lg px-8 py-6 rounded-xl group"
          >
            Hemen Ücretsiz Deneyin
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-gray-400 flex items-center justify-center">
            <Shield className="w-4 h-4 mr-2 text-[#6B8AFF]" />
            Kredi kartı gerektirmez, 14 gün boyunca tüm özellikler açık
          </p>
        </motion.div>
      </div>
    </section>
  );
}
