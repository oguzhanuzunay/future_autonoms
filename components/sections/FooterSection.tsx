'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const legalContent = {
  kvkk: {
    title: 'KVKK Aydınlatma Metni',
    content: `Future Autonoms olarak kişisel verilerinizin güvenliği ve gizliliği konusuna önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz aşağıda açıklanan kapsamda işlenebilecektir.

    Kişisel Verilerin İşlenme Amacı:
    • Ürün ve hizmetlerimizin sunulması
    • Müşteri ilişkilerinin yönetimi
    • Yasal yükümlülüklerimizin yerine getirilmesi
    • İş geliştirme ve analiz çalışmaları
    
    Kişisel Verilerinizin Aktarılması:
    Kişisel verileriniz, yasal yükümlülüklerimiz ve iş süreçlerimizin gerektirdiği ölçüde, yurt içi ve yurt dışındaki iş ortaklarımıza, tedarikçilerimize ve yasal mercilere aktarılabilir.
    
    Haklarınız:
    KVKK'nın 11. maddesi kapsamında;
    • Kişisel verilerinizin işlenip işlenmediğini öğrenme
    • İşlenen kişisel verileriniz hakkında bilgi talep etme
    • Kişisel verilerinizin işlenme amacını öğrenme
    • Kişisel verilerinizin yurt içi veya yurt dışına aktarılıp aktarılmadığını öğrenme
    • Eksik veya yanlış işlenen kişisel verilerinizin düzeltilmesini isteme
    • Kişisel verilerinizin silinmesini veya yok edilmesini talep etme
    haklarına sahipsiniz.`,
  },
  privacy: {
    title: 'Gizlilik Politikası',
    content: `Future Autonoms Gizlilik Politikası

    Bu gizlilik politikası, Future Autonoms'un web sitesi ve hizmetleri aracılığıyla toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklar.

    Toplanan Bilgiler:
    • Kimlik bilgileri
    • İletişim bilgileri
    • Kullanım verileri
    • Teknik veriler

    Bilgilerin Kullanımı:
    • Hizmetlerimizin sağlanması ve iyileştirilmesi
    • İletişim ve destek
    • Yasal yükümlülüklerin yerine getirilmesi
    • Güvenlik ve dolandırıcılığın önlenmesi

    Çerezler ve Takip Teknolojileri:
    Web sitemizde çerezler ve benzer takip teknolojileri kullanılmaktadır. Bu teknolojiler, site kullanımını analiz etmek ve kullanıcı deneyimini iyileştirmek için kullanılır.

    Güvenlik:
    Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri kullanıyoruz.`,
  },
  terms: {
    title: 'Kullanım Koşulları',
    content: `Future Autonoms Kullanım Koşulları

    Bu kullanım koşulları, Future Autonoms'un hizmetlerini kullanırken uymanız gereken kuralları ve şartları belirler.

    Hizmet Kullanımı:
    • Hizmetlerimizi yasal ve etik kurallara uygun şekilde kullanmalısınız
    • Hesap güvenliğinizden siz sorumlusunuz
    • Hizmetlerimizi kötüye kullanmak yasaktır

    Fikri Mülkiyet:
    • Tüm içerik ve markalar Future Autonoms'a aittir
    • İzinsiz kullanım ve kopyalama yasaktır

    Sorumluluk Reddi:
    • Hizmetler "olduğu gibi" sunulmaktadır
    • Kesintisiz hizmet garantisi verilmez

    Değişiklikler:
    • Koşullar önceden haber verilmeksizin değiştirilebilir
    • Değişiklikler web sitesinde yayınlanacaktır`,
  },
  contact: {
    title: 'İletişim Bilgileri',
    content: `Future Autonoms İletişim

    Adres:
    İstanbul, Türkiye

    E-posta:
    info@futureautonoms.com

    Telefon:
    +90 (XXX) XXX XX XX

    Sosyal Medya:
    LinkedIn: Future Autonoms
    Twitter: @FutureAutonoms
    Instagram: @futureautonoms

    Çalışma Saatleri:
    Pazartesi - Cuma: 09:00 - 18:00
    
    Size en kısa sürede dönüş yapacağız.`,
  },
};

const LegalDialog = ({
  title,
  content,
  trigger,
}: {
  title: string;
  content: string;
  trigger: string;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant="link"
        className="text-foreground/60 hover:text-foreground/80"
      >
        {trigger}
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[60vh] mt-4 pr-4">
        <div className="text-foreground/80 whitespace-pre-line">{content}</div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

const navigation = {
  solutions: [
    { name: 'DN.AI™ Çözümleri', href: '#products' },
    { name: 'Kurumsal AI Dönüşümü', href: '#products' },
    { name: 'DN.Sales™ Agent', href: '#products' },
    { name: 'DN.Support™ Agent', href: '#products' },
  ],
  company: [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Referanslar', href: '#testimonials' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'KVKK', content: 'kvkk' as keyof typeof legalContent },
    { name: 'Gizlilik Politikası', content: 'privacy' as keyof typeof legalContent },
    { name: 'Kullanım Koşulları', content: 'terms' as keyof typeof legalContent },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/futureautonoms',
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
      href: 'https://linkedin.com/company/futureautonoms',
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
      href: 'https://instagram.com/futureautonoms',
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
    <footer className="bg-background/95 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05),rgba(59,130,246,0.05),rgba(34,211,238,0.05))]" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12 border-b border-purple-500/10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 text-purple-300 hover:bg-purple-500/20"
              >
                AI Dünyasında Öncü
              </Badge>
              <h3 className="text-2xl font-bold mb-4">
                Future Autonoms ile geleceği{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  şekillendirin
                </span>
              </h3>
              <p className="text-foreground/80 mb-6">
                Haftalık bültenimize katılın, yapay zeka dönüşümündeki son gelişmeleri ve başarı
                hikayelerini ilk siz öğrenin.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Kurumsal e-posta adresiniz"
                  className="max-w-sm bg-card border-purple-500/20 focus:border-purple-500/40"
                />
                <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white">
                  Katıl
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
            <div className="flex flex-col items-start md:items-end">
              <div className="text-2xl font-bold mb-4">
                <Image
                  src="/images/logo/logo.png"
                  alt="Future Autonoms"
                  width={200}
                  height={40}
                  className="invert"
                />
              </div>
              <p className="text-foreground/80 text-sm mb-2">info@futureautonoms.com</p>
              <p className="text-foreground/80 text-sm">+90 (850) 840 74 19</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-6 text-purple-300">Çözümler</h3>
              <ul
                role="list"
                className="space-y-4"
              >
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/60 hover:text-purple-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-purple-300">Şirket</h3>
              <ul
                role="list"
                className="space-y-4"
              >
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/60 hover:text-purple-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-purple-300">Yasal</h3>
              <ul
                role="list"
                className="space-y-4"
              >
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <LegalDialog
                      title={legalContent[item.content].title}
                      content={legalContent[item.content].content}
                      trigger={item.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-6 text-purple-300">Sosyal Medya</h3>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-purple-300 transition-colors"
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

        {/* Kaynak ve Credibility Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-purple-300">
              Verilerimiz Doğrulanmış Kaynaklardan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-foreground/60">
              <div className="space-y-1">
                <div className="font-medium text-purple-400">Araştırma Kurumları</div>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.emarketer.com/content/study--ai-agents-hit-68--adoption-big-business',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  eMarketer Research
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-agent-survey.html',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  PwC AI Survey
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.capgemini.com/research/generative-ai-in-organizations/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Capgemini Reports
                </button>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-purple-400">Teknoloji Medyası</div>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.itpro.com/technology/artificial-intelligence/humans-must-remain-at-the-center-of-the-story-marc-benioff-isnt-convinced-about-the-threat-of-ai-job-losses-and-salesforces-adoption-journey-might-just-prove-his-point',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  ITProSource
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.businessinsider.com/lowes-ai-retail-store-layout-product-trends-customer-experience-2025-7',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Business Insider
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  CreoleStudios
                </button>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-purple-400">Kurumsal Case Studies</div>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.itpro.com/technology/artificial-intelligence/humans-must-remain-at-the-center-of-the-story-marc-benioff-isnt-convinced-about-the-threat-of-ai-job-losses-and-salesforces-adoption-journey-might-just-prove-his-point',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Salesforce Agentforce
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  IBM AIOps
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Mass General Brigham
                </button>
              </div>
              <div className="space-y-1">
                <div className="font-medium text-purple-400">Güvenlik Araştırmaları</div>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Darktrace Security
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.cybersecurityinsiders.com/ai-security-research/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Cybersecurity Reports
                </button>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.creolestudios.com/real-world-ai-agent-case-studies/',
                      '_blank',
                    )
                  }
                  className="block hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  Medical AI Cases
                </button>
              </div>
            </div>
            <p className="mt-4 text-xs text-foreground/50">
              Tüm istatistikler ve case study'ler 2025 yılı gerçek sektör verilerinden alınmıştır.
              Detaylı kaynak listesi için bizimle iletişime geçin.
            </p>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:order-1 md:mt-0 mt-8">
              <p className="text-center text-xs leading-5 text-foreground/60">
                &copy; 2025 Future Autonoms. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex justify-center space-x-6 md:order-2 text-xs text-foreground/60">
              <Link
                href="/privacy"
                className="hover:text-purple-300 transition-colors"
              >
                Gizlilik
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-purple-300 transition-colors"
              >
                Şartlar
              </Link>
              <span>•</span>
              <Link
                href="/accessibility"
                className="hover:text-purple-300 transition-colors"
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
