'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, LineChart, Percent, Shield } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast } from 'sonner';

const CTASection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    phone: '+90', // Default to Turkey
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!', formData);

    if (!formData.firstName || !formData.lastName || !formData.companyEmail || !formData.phone) {
      toast.error('Lütfen tüm alanları doldurun.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.companyEmail)) {
      toast.error('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }

    // Phone validation (should have at least 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      toast.error('Lütfen geçerli bir telefon numarası girin.');
      return;
    }

    // Remove any spaces or special characters from phone number
    const cleanPhone = formData.phone.replace(/\D/g, '');
    console.log('Clean phone:', cleanPhone);

    setLoading(true);
    try {
      const payload = {
        ...formData,
        phone: cleanPhone, // Send clean phone number
        fullName: `${formData.firstName} ${formData.lastName}`,
        type: 'corporate',
      };

      console.log('Sending payload:', payload);

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);

        if (responseData.success) {
          toast.success(
            'Tebrikler! 🎉 Şirketinize özel ROI analizi için uzman ekibimiz 24 saat içinde size ulaşacak.',
          );
          setFormData({
            firstName: '',
            lastName: '',
            companyEmail: '',
            phone: '+90',
          });
        } else {
          throw new Error(responseData.error || 'Submission failed');
        }
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(`HTTP ${response.status}: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast.error(
        'Üzgünüz, bir hata oluşturun.',
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="text-base"
                  >
                    Ad
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    placeholder="Adınız"
                    className="mt-2 h-12 bg-card border-purple-500/20 focus:border-purple-500/40"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="text-base"
                  >
                    Soyad
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    placeholder="Soyadınız"
                    className="mt-2 h-12 bg-card border-purple-500/20 focus:border-purple-500/40"
                  />
                </div>
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
                <PhoneInput
                  international
                  defaultCountry="TR"
                  value={formData.phone}
                  onChange={(value) => setFormData((prev) => ({ ...prev, phone: value || '' }))}
                  className="mt-2 flex h-12 w-full rounded-md border bg-card border-purple-500/20 focus:border-purple-500/40 [&_.PhoneInputCountry]:!border-r-purple-500/20 [&_.PhoneInputCountry]:!pr-3 [&_.PhoneInputCountry]:!mr-3"
                  required
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
