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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle,
  Dna,
  Fingerprint,
  GraduationCap,
  Infinity,
  Network,
  Rocket,
  Shield,
  Target,
  Users,
  X,
  XCircle,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: 'AI Agentlar',
    description: 'Şirketinize özel akıllı asistanlar',
    benefits: [
      'Departman bazlı özelleştirilmiş AI',
      '7/24 kesintisiz operasyon',
      'Otomatik öğrenme ve adaptasyon',
    ],
    stats: {
      value: '24/7',
      label: 'Kesintisiz Hizmet',
    },
    socialProof: '500+ Aktif AI Agent',
    process: '1. Hafta - Kurulum ve Eğitim',
  },
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: 'KPI & Hedef Belirleme',
    description: "DNA'ya özel performans ölçümü",
    benefits: ["Departman bazlı KPI'lar", 'Kişiye özel hedefler', 'Gerçek zamanlı takip'],
    stats: {
      value: '100%',
      label: 'Özelleştirilmiş',
    },
    socialProof: '98% Başarı Oranı',
    process: '2. Hafta - Analiz ve Planlama',
  },
  {
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    title: 'End-to-End Dönüşüm',
    description: 'Uçtan uca AI entegrasyonu',
    benefits: ['Süreç optimizasyonu', 'Verimlilik artışı', 'Maliyet tasarrufu'],
    stats: {
      value: '300%',
      label: 'Verimlilik Artışı',
    },
    socialProof: '6 Ay Garanti',
    process: '3-4. Hafta - Implementasyon',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-400" />,
    title: 'Oyunlaştırılmış Eğitim',
    description: 'Eğlenceli ve etkili öğrenme',
    benefits: ['Case study ve simülasyonlar', 'Gamification sistemi', 'Performans ölçümü'],
    stats: {
      value: '95%',
      label: 'Öğrenme Başarısı',
    },
    socialProof: '1000+ Eğitim Tamamlandı',
    process: '5-6. Hafta - Eğitim ve Adaptasyon',
  },
];

const transformationProcess = [
  {
    step: '01',
    title: 'DNA Analizi',
    description: 'Şirketinizin benzersiz yapısını ve ihtiyaçlarını derinlemesine analiz ediyoruz',
    icon: <Dna className="w-6 h-6" />,
    duration: '1 Hafta',
    outcome: 'DNA Haritası',
  },
  {
    step: '02',
    title: 'Akıllı Strateji',
    description: 'DNA analizine göre özel AI dönüşüm stratejisi oluşturuyoruz',
    icon: <Brain className="w-6 h-6" />,
    duration: '1 Hafta',
    outcome: 'Özel Yol Haritası',
  },
  {
    step: '03',
    title: 'AI Entegrasyonu',
    description: 'Şirketinize özel AI sistemlerini DNA yapınıza uygun şekilde entegre ediyoruz',
    icon: <Network className="w-6 h-6" />,
    duration: '2 Hafta',
    outcome: 'Akıllı Sistemler',
  },
  {
    step: '04',
    title: 'Adaptif Eğitim',
    description: 'Ekibinizi oyunlaştırılmış ve kişiselleştirilmiş eğitimlerle hazırlıyoruz',
    icon: <GraduationCap className="w-6 h-6" />,
    duration: '1 Hafta',
    outcome: 'Uzman Ekip',
  },
  {
    step: '05',
    title: 'Sürdürülebilirlik',
    description: 'Sürekli öğrenen ve gelişen bir sistem kuruyoruz',
    icon: <Infinity className="w-6 h-6" />,
    duration: 'Sürekli',
    outcome: 'Organik Büyüme',
  },
];

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    title: 'CEO',
    company: 'TechCo Yazılım A.Ş.',
    image: '/testimonials/1.jpg',
    quote:
      "Future Autonoms ile tam kapsamlı AI dönüşümümüzü gerçekleştirdik. Sadece AI agentlar değil, tüm süreçlerimizi analiz edip DNA'mıza özel çözümler geliştirdiler. 6 ayda %300 verimlilik artışı ve %98 başarı oranı ile beklentilerimizin çok üstünde sonuç aldık.",
    stats: '+300% Verimlilik',
    industry: 'Yazılım',
    extraStats: ['%98 Başarı Oranı', '6 Ay Garanti', "DNA'ya Özel"],
    tags: ['Tam Dönüşüm', 'DNA Analizi', 'Garantili Sonuç'],
  },
  {
    name: 'Zeynep Kaya',
    title: 'Satış Direktörü',
    company: 'B2B Market',
    image: '/testimonials/2.jpg',
    quote:
      "Sadece ürün satmıyorlar, gerçek bir dönüşüm ortağı. Her departmanımızı analiz ettiler, iş akış şemalarımızı çıkardılar ve DNA'mıza özel AI çözümleri geliştirdiler. Oyunlaştırılmış eğitimler sayesinde ekibimiz çok hızlı adapte oldu.",
    stats: '-60% Maliyet',
    industry: 'E-ticaret',
    extraStats: ['%95 Adaptasyon', 'DNA Analizi'],
    tags: ['Süreç Analizi', 'Oyunlaştırma', 'Hızlı Adaptasyon'],
  },
  {
    name: 'Mehmet Demir',
    title: 'Pazarlama Müdürü',
    company: 'Global Retail',
    image: '/testimonials/3.jpg',
    quote:
      "End-to-end AI dönüşümü gerçekleştirdik. Sadece AI agentlar değil, tüm süreçlerimizi optimize ettiler. KPI'larımızı departman ve kişi bazında belirlediler. 6 ayda %300 ROI ve %95 öğrenme başarısı ile mükemmel sonuçlar aldık.",
    stats: '3X ROI Artışı',
    industry: 'Perakende',
    extraStats: ['%95 Öğrenme Başarısı', 'Kişi Bazlı KPI'],
    tags: ['End-to-End', 'KPI Optimizasyonu', 'Yüksek ROI'],
  },
  {
    name: 'Ayşe Yıldız',
    title: 'Operasyon Direktörü',
    company: 'Lojistik Pro',
    image: '/testimonials/4.jpg',
    quote:
      "Şirketimizin DNA'sını analiz edip tamamen özelleştirilmiş bir AI dönüşümü gerçekleştirdiler. Her departman için ayrı strateji, her çalışan için özel eğitim. 6 ay garanti ile risk almadan dönüşümü tamamladık.",
    stats: '+70% Verimlilik',
    industry: 'Lojistik',
    extraStats: ['DNA Analizi', '6 Ay Garanti'],
    tags: ['DNA Analizi', 'Özelleştirme', 'Risk Yok'],
  },
  {
    name: 'Can Özkan',
    title: 'Finans Direktörü',
    company: 'FinTech Solutions',
    image: '/testimonials/5.jpg',
    quote:
      'Future Autonoms sadece AI çözümü değil, tam kapsamlı bir dönüşüm hizmeti sunuyor. İş akış şemalarımızı çıkardılar, DNA analizi yaptılar ve oyunlaştırılmış eğitimlerle ekibimizi hazırladılar. 45 günde yatırımımızın karşılığını aldık.',
    stats: '12X ROI',
    industry: 'Finans',
    extraStats: ['45 Gün Break-even', 'DNA Analizi'],
    tags: ['Tam Dönüşüm', 'Hızlı ROI', 'DNA Analizi'],
  },
  {
    name: 'Elif Yalın',
    title: 'Dijital Pazarlama Yöneticisi',
    company: 'E-Commerce Plus',
    image: '/testimonials/6.jpg',
    quote:
      "Oyunlaştırılmış eğitimler ve case study'ler sayesinde ekibimiz çok hızlı adapte oldu. Her departman için özel KPI'lar belirlediler ve sürekli takip ettiler. Bu sadece bir yazılım değil, gerçek bir dönüşüm deneyimi.",
    stats: '2X Dönüşüm',
    industry: 'E-ticaret',
    extraStats: ['Oyunlaştırma', 'Sürekli Takip'],
    tags: ['Oyunlaştırma', 'Case Study', 'Sürekli Takip'],
  },
];

const stats = [
  { value: '6 Ay', label: 'Garanti Süresi', icon: <Shield className="w-5 h-5 text-cyan-400" /> },
  { value: '500+', label: 'Başarılı Dönüşüm', icon: <Users className="w-5 h-5 text-green-400" /> },
];

const comparisonPoints = [
  {
    them: 'Sadece sayılarla ilgilenirler',
    us: "Şirketinizin DNA'sını analiz eder, özel çözüm üretiriz",
    icon: <Dna className="w-6 h-6 text-purple-400" />,
    emphasis: 'DNA Analizi',
  },
  {
    them: 'Hazır şablonlar kullanırlar',
    us: 'Her şirket için özel strateji geliştiririz',
    icon: <Fingerprint className="w-6 h-6 text-blue-400" />,
    emphasis: 'Özel Strateji',
  },
  {
    them: 'Tek seferlik çözümler sunarlar',
    us: 'Kalıcı dönüşüm ve 6 ay garanti sağlarız',
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    emphasis: 'Garantili Sonuç',
  },
  {
    them: 'Sadece AI kurulumu yaparlar',
    us: 'End-to-end dönüşüm ve sürekli destek veririz',
    icon: <Infinity className="w-6 h-6 text-green-400" />,
    emphasis: 'Tam Dönüşüm',
  },
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

  const handleScrollToCta = () => {
    if (typeof window !== 'undefined') {
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="features"
      className="relative w-full py-24 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
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
              className="mb-4 border-purple-500/50 text-purple-300 bg-purple-500/10"
            >
              <Dna className="mr-1 h-3 w-3" />
              <span>DN.AI™ - Adaptif AI Dönüşüm Metodolojisi</span>
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              DN.AI™{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Yaklaşımı
              </span>
            </h2>

            <div className="text-lg font-semibold text-purple-300 mb-6">
              Şirketinizin DNA'sına İşleyen Akıllı Dönüşüm Metodolojisi
            </div>

            <p className="text-gray-300 max-w-2xl mx-auto mb-12">
              <span className="text-gray-400">Standart uygulamalar</span>{' '}
              <span className="text-gray-400 italic">giriş seviyesi</span>{' '}
              <span className="text-gray-400">çözümler sunarken,</span>{' '}
              <span className="text-purple-300 font-semibold">DN.AI™ metodolojimiz</span>{' '}
              <span className="text-white">şirketinizin DNA'sına işleyerek</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
                kalıcı ve sürdürülebilir bir dönüşüm
              </span>{' '}
              <span className="text-white">sağlar.</span>
            </p>
          </motion.div>

          {/* DN.AI™ Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
            {transformationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 bg-gradient-to-br from-black/40 to-black/20 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-400 mb-4">{step.description}</p>
                    <div className="space-y-2">
                      <Badge
                        variant="outline"
                        className="text-xs border-purple-500/30 text-purple-300"
                      >
                        {step.duration}
                      </Badge>
                      <div className="text-xs text-green-400 font-medium">{step.outcome}</div>
                    </div>
                  </div>
                </Card>
                {index < transformationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-500/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Tabs
          defaultValue="services"
          className="mb-16"
        >
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 bg-black/40">
            <TabsTrigger
              value="services"
              className="data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-300"
            >
              Hizmetlerimiz
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-300"
            >
              Başarı Hikayeleri
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="h-full p-6 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all duration-300 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <div className="mb-6 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">
                        {service.stats.value}
                      </div>
                      <div className="text-sm text-gray-400">{service.stats.label}</div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3 pt-4 border-t border-purple-500/10">
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <Users className="w-4 h-4 mr-2 text-purple-400" />
                        {service.socialProof}
                      </div>
                      <div className="text-center">
                        <Badge
                          variant="outline"
                          className="text-xs border-purple-500/30 text-purple-300"
                        >
                          {service.process}
                        </Badge>
                      </div>
                    </div>
                  </Card>
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
                      <Card className="p-8 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border-purple-500/20">
                        <div className="flex flex-col items-center text-center">
                          <Badge
                            variant="outline"
                            className="mb-4 text-purple-300 border-purple-500/30 bg-purple-500/10"
                          >
                            {testimonial.industry}
                          </Badge>
                          <div className="flex gap-2 mb-6 flex-wrap justify-center">
                            <Badge
                              variant="secondary"
                              className="bg-purple-500/10 text-purple-300"
                            >
                              {testimonial.stats}
                            </Badge>
                            {testimonial.extraStats.map((stat, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-purple-500/5 text-purple-300"
                              >
                                {stat}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xl text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                          <div className="mt-4">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-purple-300">{testimonial.title}</p>
                            <p className="text-sm text-gray-400">{testimonial.company}</p>
                          </div>
                          <div className="flex gap-2 mt-4 flex-wrap justify-center">
                            {testimonial.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 rounded-full bg-purple-500/5 text-purple-300"
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
              <CarouselPrevious className="bg-black/40 text-purple-300 hover:bg-purple-500/10 border-purple-500/20" />
              <CarouselNext className="bg-black/40 text-purple-300 hover:bg-purple-500/10 border-purple-500/20" />
            </Carousel>
          </TabsContent>
        </Tabs>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-purple-500/50 text-purple-300 bg-purple-500/10"
            >
              <Dna className="mr-1 h-3 w-3" />
              <span>DN.AI™ - Adaptif AI Dönüşüm Metodolojisi</span>
            </Badge>
            <h3 className="text-3xl font-bold text-white mb-4">
              Sürdürülebilir{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                DN.AI™ Yaklaşımı
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              <span className="text-gray-400">Standart uygulamalar</span>{' '}
              <span className="text-gray-400 italic">giriş seviyesi</span>{' '}
              <span className="text-gray-400">çözümler sunarken,</span>{' '}
              <span className="text-purple-300 font-semibold">DN.AI™ metodolojimiz</span>{' '}
              <span className="text-white">şirketinizin DNA'sına işleyerek</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
                kalıcı ve sürdürülebilir bir dönüşüm
              </span>{' '}
              <span className="text-white">
                sağlar. Çünkü gerçek dönüşüm, şirketinizin özünü anlamakla başlar.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-500/5 via-gray-500/10 to-transparent border border-gray-500/20"
            >
              <h4 className="text-xl font-semibold text-gray-400 mb-6 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                Standart Uygulamalar: Geçici Çözümler
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">Tek tip şablon yaklaşımı</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">Adaptasyon eksikliği</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">Sürdürülebilirlik sorunu</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">Sınırlı entegrasyon</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/5 via-purple-500/10 to-transparent border border-purple-500/20"
            >
              <h4 className="text-xl font-semibold text-purple-400 mb-6 flex items-center">
                <Dna className="w-5 h-5 mr-2" />
                DN.AI™: Adaptif Dönüşüm Sistemi
              </h4>
              <ul className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <div>
                      <span className="text-white">{point.us}</span>
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs border-purple-500/30 text-purple-300"
                      >
                        {point.emphasis}
                      </Badge>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-purple-300 font-semibold mb-6">
              DN.AI™ ile sürdürülebilir dönüşüm yolculuğunuza başlayın
            </p>
            <Button
              onClick={handleScrollToCta}
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl group shadow-lg shadow-purple-500/25"
            >
              DN.AI™ Dönüşüm Sürecini Başlatın
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
