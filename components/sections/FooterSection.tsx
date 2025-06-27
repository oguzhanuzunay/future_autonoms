'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const navigation = {
  solutions: [
    { name: 'AI Satış Ekibi', href: '/solutions/sales' },
    { name: 'AI Pazarlama Ekibi', href: '/solutions/marketing' },
    { name: 'AI Müşteri Hizmetleri', href: '/solutions/customer-service' },
    { name: 'AI İK Ekibi', href: '/solutions/hr' },
    { name: 'AI Sosyal Medya Ekibi', href: '/solutions/social-media' },
  ],
  company: [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kariyer', href: '/careers' },
    { name: 'Basın', href: '/press' },
    { name: 'İletişim', href: '/contact' },
  ],
  legal: [
    { name: 'Gizlilik Politikası', href: '/privacy' },
    { name: 'Kullanım Şartları', href: '/terms' },
    { name: 'KVKK', href: '/kvkk' },
    { name: 'Çerez Politikası', href: '/cookies' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/futureautonomstr',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/futureautonomstr',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/futureautonomstr',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          {...props}
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ],
};

const FooterSection = () => {
  return (
    <footer className="bg-[#0D0D0D] relative overflow-hidden">
      {/* Animasyonlu Arka Plan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,138,255,0.05),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        {/* Üst Kısım - Bülten ve İletişim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 border-b border-primary/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-[#6B8AFF] text-[#6B8AFF]"
              >
                Güncel Kalın
              </Badge>
              <h3 className="text-2xl font-bold mb-4">
                AI dünyasındaki son gelişmelerden haberdar olun
              </h3>
              <p className="text-muted-foreground mb-6">
                Haftalık bültenimize katılın, AI teknolojilerindeki son gelişmeleri ve özel
                fırsatları kaçırmayın.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="max-w-sm"
                />
                <Button>Katıl</Button>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
            <div className="flex flex-col items-start md:items-end">
              <Image
                src="/images/logo/logo.png"
                alt="Future Autonoms Logo"
                width={180}
                height={40}
                className="mb-4 invert"
              />
              <p className="text-muted-foreground text-sm mb-2">info@futureautonomstr.com</p>
              <p className="text-muted-foreground text-sm">+90 (555) 123 45 67</p>
            </div>
          </div>
        </div>

        {/* Orta Kısım - Navigasyon */}
        <div className="px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-6 text-primary">Çözümler</h3>
              <ul
                role="list"
                className="space-y-4"
              >
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-primary">Şirket</h3>
              <ul
                role="list"
                className="space-y-4"
              >
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-primary">Yasal</h3>
              <ul
                role="list"
                className="space-y-4"
              >
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-primary">Sosyal Medya</h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Telif Hakkı */}
        <div className="border-t border-primary/10 px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Future Autonoms. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link
                href="/sitemap"
                className="hover:text-primary transition-colors"
              >
                Site Haritası
              </Link>
              <span>•</span>
              <Link
                href="/accessibility"
                className="hover:text-primary transition-colors"
              >
                Erişilebilirlik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
