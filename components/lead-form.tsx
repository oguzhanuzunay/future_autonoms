'use client';

import { Button } from '@/components/ui/button';
import { CheckIcon, Spinner } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .email('Lütfen geçerli bir e-posta adresi girin')
    .min(1, 'E-posta adresi gerekli'),
  company: z.string().min(1, 'Şirket adı gerekli'),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  onSubmit?: (data: FormData) => void;
  buttonText?: string;
  className?: string;
}

export function LeadForm({ onSubmit, buttonText = 'Hemen Başla', className }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmitForm = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      onSubmit?.(data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto p-4 md:p-6 ${className}`}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center justify-center text-center space-y-4 p-6 rounded-lg bg-card"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="rounded-full bg-primary/10 p-3"
            >
              <CheckIcon className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-semibold">Teşekkürler!</h3>
            <p className="text-muted-foreground text-base">
              Dönüşüm uzmanlarımız sizinle en kısa sürede iletişime geçecek.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit(onSubmitForm)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-base font-medium"
              >
                E-posta Adresi
              </Label>
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="ornek@sirket.com"
                className={`h-12 text-base px-4 ${errors.email ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm text-destructive mt-1 pl-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="company"
                className="text-base font-medium"
              >
                Şirket Adı
              </Label>
              <Input
                {...register('company')}
                id="company"
                type="text"
                placeholder="Şirketinizin adı"
                className={`h-12 text-base px-4 ${errors.company ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.company && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm text-destructive mt-1 pl-1"
                >
                  {errors.company.message}
                </motion.p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full h-12 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center space-x-2"
                >
                  <Spinner className="h-5 w-5" />
                  <span>İşleniyor...</span>
                </motion.div>
              ) : (
                buttonText
              )}
            </Button>
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 rounded-md bg-destructive/10 border border-destructive/20"
              >
                <p className="text-sm text-destructive text-center">{error}</p>
              </motion.div>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
