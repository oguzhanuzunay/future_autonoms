import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları | Future Autonoms',
  description: 'Future Autonoms kullanım şartları ve koşulları.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Kullanım Şartları
      </h1>

      <div className="prose prose-purple dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Future Autonoms hizmetlerini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Hizmet Kullanımı</h2>
        <p>Hizmetlerimizi kullanırken:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Yasal düzenlemelere uygun davranmalısınız</li>
          <li>Hizmet güvenliğini tehdit edecek eylemlerden kaçınmalısınız</li>
          <li>Diğer kullanıcıların haklarına saygı göstermelisiniz</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Fikri Mülkiyet</h2>
        <p>
          Future Autonoms'a ait tüm içerik, logo, marka ve yazılımlar şirketimizin fikri
          mülkiyetindedir. Bu içeriklerin izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sorumluluk Reddi</h2>
        <p>
          Hizmetlerimiz "olduğu gibi" sunulmaktadır. Yasaların izin verdiği ölçüde, hizmetlerimizin
          kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu değiliz.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Değişiklikler</h2>
        <p>
          Bu kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutarız.
          Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. İletişim</h2>
        <p>
          Kullanım şartlarıyla ilgili sorularınız için:
          <br />
          E-posta: legal@futureautonoms.com
          <br />
          Telefon: +90 (850) 840 47 19
        </p>
      </div>
    </div>
  );
}
