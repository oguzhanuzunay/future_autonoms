import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası | Future Autonoms',
  description: 'Future Autonoms çerez kullanım politikası.',
};

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Çerez Politikası
      </h1>

      <div className="prose prose-purple dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Future Autonoms olarak web sitemizde çerezler kullanmaktayız. Bu politika, çerezlerin
          nasıl kullanıldığını açıklamaktadır.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Çerez Nedir?</h2>
        <p>
          Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin
          dosyalarıdır. Bu dosyalar size daha iyi bir kullanıcı deneyimi sunmamıza yardımcı olur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kullandığımız Çerez Türleri</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Zorunlu Çerezler: Sitenin çalışması için gerekli temel çerezler</li>
          <li>Analitik Çerezler: Ziyaretçi davranışlarını analiz etmek için kullanılan çerezler</li>
          <li>İşlevsel Çerezler: Tercihlerinizi hatırlamak için kullanılan çerezler</li>
          <li>Pazarlama Çerezleri: Size özel reklamlar göstermek için kullanılan çerezler</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Çerez Yönetimi</h2>
        <p>
          Tarayıcınızın ayarlarından çerezleri yönetebilir veya silebilirsiniz. Ancak bazı çerezleri
          devre dışı bırakmanın web sitemizin kullanımını etkileyebileceğini unutmayın.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Çerez Tercihleri</h2>
        <p>
          Web sitemizi ilk ziyaretinizde çerez tercihlerinizi belirleyebilirsiniz. Bu tercihleri
          istediğiniz zaman değiştirebilirsiniz.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. İletişim</h2>
        <p>
          Çerez politikamızla ilgili sorularınız için:
          <br />
          E-posta: privacy@futureautonoms.com
          <br />
          Telefon: +90 (850) 840 47 19
        </p>
      </div>
    </div>
  );
}
