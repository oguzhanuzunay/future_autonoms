'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Check,
  Clock,
  Rocket,
  Shield,
  Target,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast } from 'sonner';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+90', // Default to Turkey
  });
  const [loading, setLoading] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) return;

    // Remove any spaces or special characters from phone number
    const cleanPhone = formData.phone.replace(/\D/g, '');

    setLoading(true);
    try {
      const response = await fetch('/api/submit-hero-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: cleanPhone, // Send clean phone number
          type: 'individual',
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          toast.success('Başvurunuz alındı! Size en kısa sürede dönüş yapacağız.');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '+90',
          });
        } else {
          throw new Error(responseData.error || 'Submission failed');
        }
      } else {
        const errorData = await response.json();
        throw new Error(`HTTP ${response.status}: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black py-20">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Badge
          variant="secondary"
          className="mb-8 animate-pulse bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30"
        >
          <Rocket className="mr-1 h-3 w-3" />
          <span>🚀 Sadece 3 Kontenjan Kaldı</span>
        </Badge>

        <div
          data-aos="fade-down"
          className="mx-auto mb-12 flex justify-center"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Future Autonoms"
            width={800}
            height={200}
            className="h-auto w-auto max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] transition-all duration-300 invert"
            priority
          />
        </div>

        <h1
          data-aos="fade-up"
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Şirketinizin{' '}
          <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            DNA'sına Özel
          </span>{' '}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help underline decoration-purple-500 decoration-dotted underline-offset-4 hover:text-purple-300 transition-colors">
                  DN.AI Dönüşümü
                </span>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="max-w-sm bg-black/90 border border-purple-500/50 backdrop-blur-xl shadow-2xl shadow-purple-500/30 p-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                    <h4 className="text-sm font-bold text-white">Neden "DNA'sına Özel"?</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Her şirketin benzersiz yapısını analiz ederek, tamamen size özel AI dönüşüm
                    stratejisi geliştiriyoruz.
                  </p>
                  <div className="grid grid-cols-1 gap-2 pt-2 border-t border-purple-500/30">
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="h-1.5 w-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      <span className="text-green-300 font-medium">
                        Departman bazlı özelleştirme
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="h-1.5 w-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                      <span className="text-green-300 font-medium">Kişiye özel KPI'lar</span>
                    </div>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
        >
          <strong className="text-white">%98 başarı oranımızla</strong> şirketinizi geleceğe
          taşıyoruz. AI agentlar, süreç optimizasyonu ve oyunlaştırılmış eğitimlerle
          <span className="text-cyan-300 font-semibold"> 6 ayda %300 verimlilik artışı</span>{' '}
          garantisi.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20 p-4 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-purple-400" />
              <h3 className="text-sm font-medium text-white">AI Agentlar</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">Özel akıllı asistanlar</p>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 p-4 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-400" />
              <h3 className="text-sm font-medium text-white">KPI & Hedefler</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">Kişi bazlı ölçümler</p>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 border-cyan-500/20 p-4 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-cyan-400" />
              <h3 className="text-sm font-medium text-white">Süreç Dönüşümü</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">AI entegrasyonu</p>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-purple-500/10 border-green-500/20 p-4 hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-green-400" />
              <h3 className="text-sm font-medium text-white">Oyunlaştırılmış Eğitim</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">Eğlenceli öğrenme</p>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Shield className="h-4 w-4 text-green-400" />
            <span>%98 Başarı Oranı</span>
          </div>
          <div className="flex items-center space-x-1">
            <BarChart3 className="h-4 w-4 text-blue-400" />
            <span>%300 Verimlilik Artışı</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-purple-400" />
            <span>6 Ay Garanti</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4"
        >
          <div className="w-full space-y-4">
            <div className="flex justify-between gap-4">
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-gray-300"
                >
                  Ad
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Adınız"
                  value={formData.firstName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  required
                  className={cn(
                    'mt-2 bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400',
                    'focus:border-purple-500/50 transition-colors',
                    'hover:bg-white/[0.12]',
                  )}
                />
              </div>
              <div className="flex-1 space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-gray-300"
                >
                  Soyad
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Soyadınız"
                  value={formData.lastName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  required
                  className={cn(
                    'mt-2 bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400',
                    'focus:border-purple-500/50 transition-colors',
                    'hover:bg-white/[0.12]',
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="email"
                  className="text-gray-300"
                >
                  E-posta
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge
                        variant="outline"
                        className="text-xs border-purple-500/30 text-purple-300"
                      >
                        VIP Öncelik Listesi
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>İlk başvuranlar özel fiyat ve öncelikli hizmet alır</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Input
                id="email"
                type="email"
                placeholder="ornek@sirket.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
                className={cn(
                  'mt-2 bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400',
                  'focus:border-purple-500/50 transition-colors',
                  'hover:bg-white/[0.12]',
                )}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-gray-300"
              >
                Telefon
              </Label>
              <PhoneInput
                international
                defaultCountry="TR"
                value={formData.phone}
                onChange={(value) => setFormData((prev) => ({ ...prev, phone: value || '' }))}
                className={cn(
                  'mt-2 flex h-10 w-full rounded-md border bg-white/10 px-3 py-2',
                  'border-purple-500/30 text-white placeholder:text-gray-400',
                  'focus:border-purple-500/50 transition-colors',
                  'hover:bg-white/[0.12]',
                  '[&_.PhoneInputCountry]:!text-white [&_.PhoneInputCountrySelect]:!text-white',
                  '[&_.PhoneInputCountrySelect]:!bg-black/50 [&_.PhoneInputCountrySelect_option]:!text-black',
                  '[&_.PhoneInputCountrySelectArrow]:!border-white',
                  '[&_.PhoneInputInput]:!bg-transparent [&_.PhoneInputInput]:!border-0 [&_.PhoneInputInput]:!text-white',
                  '[&_.PhoneInputInput]:!p-0 [&_.PhoneInputInput]:!outline-none',
                )}
                required
              />
            </div>

            {/* Removing AI Chat checkbox section */}
          </div>

          <Button
            type="submit"
            className={cn(
              'group relative w-full overflow-hidden rounded-lg',
              'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600',
              'px-8 py-3 text-white transition-all',
              'hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 hover:scale-105',
              'shadow-lg shadow-purple-500/25',
              'disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100',
            )}
            disabled={loading}
          >
            <span className="relative flex items-center justify-center">
              {loading ? (
                'İşleniyor...'
              ) : (
                <>
                  Ücretsiz AI Dönüşüm Analizi
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
          </Button>

          <div className="text-center space-y-2">
            <p className="text-xs text-gray-400 flex items-center justify-center">
              <Check className="mr-1 h-3 w-3 text-green-400" />
              Ücretsiz analiz ve dönüşüm planı
            </p>
            <p className="text-xs text-purple-300 font-medium">⚡ Sadece 3 kontenjan kaldı</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
