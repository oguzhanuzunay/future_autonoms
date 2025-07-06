'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, LineChart, Percent, Shield } from 'lucide-react';
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
          'Tebrikler! 🎉 Şirketinize özel ROI analizi için uzman ekibimiz 24 saat içinde size ulaşacak.',
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
      {/* Gradient Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background">
        <div className="h-[40rem] w-[40rem] animate-pulse rounded-full bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-purple-300 hover:bg-purple-500/20"
            >
              🚀 Özel ROI Analizi
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Şirketinizin AI Potansiyelini{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Keşfedin
              </span>
            </h2>
            <p className="text-lg leading-8 text-foreground/80">
              <span className="font-semibold text-purple-300">İlk 5 şirkete özel</span>, Future
              Autonoms'un DN.AI™ metodolojisi ile{' '}
              <span className="font-semibold text-purple-300">%285'e varan verimlilik artışı</span>{' '}
              potansiyelinizi hesaplayalım.
            </p>
          </motion.div>
        </div>

        {/* Form ve İkna Edici Unsurlar */}
        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8"
          >
            {/* Zaman Baskısı */}
            <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-lg text-sm font-medium text-purple-300">
              <Calculator className="h-4 w-4" />
              <span>Son 5 ücretsiz ROI analizi kontenjanı</span>
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
                  className="mt-2 h-12 bg-card border-purple-500/20 focus:border-purple-500/40"
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
                  className="mt-2 h-12 bg-card border-purple-500/20 focus:border-purple-500/40"
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
                  className="mt-2 h-12 bg-card border-purple-500/20 focus:border-purple-500/40"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-semibold text-lg h-12 mt-6"
                disabled={loading}
              >
                {loading ? (
                  'İşleniyor...'
                ) : (
                  <>
                    Ücretsiz ROI Analizi Alın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Güven Oluşturucu Elementler */}
              <div className="pt-6 space-y-4">
                <Separator className="bg-purple-500/20" />
                <div className="flex flex-col gap-3 text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-purple-400" />
                    <span>Şirketinize özel detaylı ROI analizi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-purple-400" />
                    <span>6 ay başarı garantisi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Percent className="h-4 w-4 text-purple-400" />
                    <span>%100 adaptasyon desteği</span>
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
            className="text-center text-sm text-foreground/80 mt-6"
          >
            Test sonuçlarımıza göre, Future Autonoms'un DN.AI™ metodolojisi ile şirketler{' '}
            <span className="font-semibold text-purple-300">ortalama %285 verimlilik artışı</span>{' '}
            ve <span className="font-semibold text-purple-300">%42 maliyet tasarrufu</span> elde
            ediyor
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
