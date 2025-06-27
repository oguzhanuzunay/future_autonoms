'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Shield } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const CTASection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.companyEmail || !formData.phone) return;

    setLoading(true);
    try {
      const response = await fetch('https://n8n.netfera.com/webhook-test/form-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'corporate',
        }),
      });

      if (response.ok) {
        toast.success(
          'Tebrikler! 🎉 Ücretsiz danışmanlık hakkınız rezerve edildi. Uzman ekibimiz 24 saat içinde size ulaşacak.',
        );
        setFormData({
          fullName: '',
          companyEmail: '',
          phone: '',
        });
      } else {
        throw new Error('Bir hata oluştu');
      }
    } catch (error) {
      toast.error(
        'Üzgünüz, bir hata oluştu. Lütfen bizi (555) 555-5555 numaralı telefondan arayın.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-16 sm:py-24"
    >
      {/* Minimal Animasyonlu Arka Plan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background">
        <div className="h-[40rem] w-[40rem] animate-pulse rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Ana Başlık ve Alt Başlık */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"
            >
              ⚡️ Sınırlı Süre Fırsatı
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ücretsiz AI Danışmanlığı{' '}
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Fırsatını Kaçırmayın
              </span>
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              <span className="font-semibold text-foreground">Sadece bu aya özel</span>, işletmeniz
              için AI potansiyelini keşfedin ve rekabette öne geçin.
            </p>
          </motion.div>
        </div>

        {/* Form ve İkna Edici Unsurlar */}
        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 sm:p-8"
          >
            {/* Zaman Baskısı */}
            <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-primary/5 rounded-lg text-sm font-medium text-primary">
              <Clock className="h-4 w-4" />
              <span>Son 3 ücretsiz danışmanlık kontenjanı</span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <Label
                  htmlFor="fullName"
                  className="text-base"
                >
                  Ad Soyad
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  placeholder="Ad Soyad"
                  className="mt-2 h-12"
                />
              </div>
              <div>
                <Label
                  htmlFor="companyEmail"
                  className="text-base"
                >
                  Kurumsal E-posta
                </Label>
                <Input
                  type="email"
                  id="companyEmail"
                  value={formData.companyEmail}
                  onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                  required
                  placeholder="isim@sirket.com"
                  className="mt-2 h-12"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-base"
                >
                  Telefon
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="5XX XXX XX XX"
                  className="mt-2 h-12"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 mt-6"
                disabled={loading}
              >
                {loading ? (
                  'İşleniyor...'
                ) : (
                  <>
                    Hemen Ücretsiz Danışmanlık Alın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Güven Oluşturucu Elementler */}
              <div className="pt-6 space-y-4">
                <Separator />
                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Bilgileriniz %100 güvende, KVKK uyumlu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>24 saat içinde öncelikli görüşme</span>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Sosyal Kanıt */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-6"
          >
            500+ şirket bizimle çalışıyor ve operasyonel maliyetlerini{' '}
            <span className="font-semibold text-foreground">ortalama %40 düşürdü</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
