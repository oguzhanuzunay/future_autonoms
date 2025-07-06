import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Future Autonoms',
  description: 'Future Autonoms gizlilik politikası ve veri koruma ilkeleri.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Gizlilik Politikası
      </h1>

      <div className="prose prose-purple dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Future Autonoms olarak kişisel verilerinizin güvenliği konusunda azami hassasiyet
          gösteriyoruz.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Veri Toplama</h2>
        <p>Hizmetlerimizi kullanırken aşağıdaki verileriniz toplanabilir:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>İletişim bilgileri (e-posta, telefon)</li>
          <li>Şirket bilgileri</li>
          <li>Kullanım istatistikleri</li>
          <li>Çerez verileri</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Veri Kullanımı</h2>
        <p>Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Hizmet kalitesini artırmak</li>
          <li>Yasal yükümlülükleri yerine getirmek</li>
          <li>Güvenliği sağlamak</li>
          <li>İletişim kurmak</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Veri Güvenliği</h2>
        <p>
          Verileriniz endüstri standardı güvenlik önlemleriyle korunmaktadır. SSL şifreleme,
          güvenlik duvarları ve düzenli güvenlik denetimleri uygulanmaktadır.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. İletişim</h2>
        <p>
          Gizlilik politikamızla ilgili sorularınız için:
          <br />
          E-posta: privacy@futureautonoms.com
          <br />
          Telefon: +90 (850) 840 47 19
        </p>
      </div>
    </div>
  );
}
