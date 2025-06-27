'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, Check, Clock, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Particles from 'react-particles';
import { toast } from 'sonner';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch('https://n8n.netfera.com/webhook-test/form-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'individual',
        }),
      });

      if (response.ok) {
        toast.success('Başvurunuz alındı! Size en kısa sürede dönüş yapacağız.');
        setEmail('');
      } else {
        throw new Error('Bir hata oluştu');
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
          className="mb-8 animate-pulse bg-blue-500/10 text-blue-400"
        >
          <Users className="mr-1 h-3 w-3" />
          <span>Son 24 saatte 50+ şirket katıldı</span>
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
          AI Destekli{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            İş Gücünüz
          </span>{' '}
          ile Satışlarınızı{' '}
          <HoverCard>
            <HoverCardTrigger>
              <span className="cursor-help underline decoration-blue-500 decoration-dotted underline-offset-4">
                2 Katına Çıkarın
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Kanıtlanmış Sonuçlar</h4>
                  <p className="text-sm text-muted-foreground">
                    Müşterilerimiz ortalama olarak ilk 3 ayda satışlarını %100+ artırdı.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
        >
          Yapay zeka destekli asistanlarımızla işletmenizi geleceğe taşıyın. 7/24 aktif, verimli ve
          ölçeklenebilir çözümler.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <Card className="bg-white/5 p-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <h3 className="text-sm font-medium text-white">Anında Entegrasyon</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">15 dakika içinde sisteminize entegre edin</p>
          </Card>
          <Card className="bg-white/5 p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <h3 className="text-sm font-medium text-white">Artırılmış Verimlilik</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">Operasyonel maliyetlerde %40 tasarruf</p>
          </Card>
          <Card className="bg-white/5 p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-400" />
              <h3 className="text-sm font-medium text-white">7/24 Aktif</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">Kesintisiz müşteri desteği ve satış</p>
          </Card>
        </div>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4"
        >
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="email"
                className="text-gray-300"
              >
                E-posta adresiniz
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      256-bit SSL Korumalı
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Verileriniz güvende, SSL sertifikası ile şifrelenir</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="email"
              type="email"
              placeholder="ornek@sirket.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <Button
            type="submit"
            className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 text-white transition-all hover:from-blue-600 hover:to-blue-800"
            disabled={loading}
          >
            <span className="relative flex items-center justify-center">
              {loading ? (
                'İşleniyor...'
              ) : (
                <>
                  Ücretsiz Deneyin
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
          </Button>
          <p className="text-xs text-gray-400 flex items-center justify-center">
            <Check className="mr-1 h-3 w-3 text-green-400" />
            14 gün ücretsiz deneme, kredi kartı gerektirmez
          </p>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
