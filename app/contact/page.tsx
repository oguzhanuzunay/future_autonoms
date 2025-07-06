import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Future Autonoms',
  description: 'Future Autonoms ile iletişime geçin.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        İletişim
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>
          <p className="text-foreground/80 mb-6">
            Sorularınız veya işbirliği fırsatları için bizimle iletişime geçebilirsiniz.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Adres</h3>
              <p className="text-foreground/80">
                Maslak Mah. AOS 55. Sok. 42
                <br />
                Sarıyer, İstanbul 34485
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-foreground/80">+90 (850) 840 47 19</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">E-posta</h3>
              <p className="text-foreground/80">info@futureautonoms.com</p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">İsim Soyisim</Label>
              <Input
                id="name"
                placeholder="İsim Soyisim"
                className="bg-card border-purple-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@sirket.com"
                className="bg-card border-purple-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Şirket</Label>
              <Input
                id="company"
                placeholder="Şirket Adı"
                className="bg-card border-purple-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mesaj</Label>
              <Textarea
                id="message"
                placeholder="Mesajınız..."
                className="bg-card border-purple-500/20 min-h-[120px]"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white">
              Gönder
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
