import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Future Autonoms',
  description: 'Future Autonoms KVKK aydınlatma metni ve veri işleme politikası.',
};

export default function KVKKPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        KVKK Aydınlatma Metni
      </h1>

      <div className="prose prose-purple dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Future Autonoms olarak
          kişisel verilerinizin işlenmesi hakkında sizi bilgilendirmek isteriz.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Veri Sorumlusu</h2>
        <p>
          Future Autonoms, kişisel verilerinizin işlenmesi konusunda veri sorumlusu sıfatıyla
          hareket etmektedir.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. İşlenen Kişisel Veriler</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Kimlik bilgileri</li>
          <li>İletişim bilgileri</li>
          <li>Şirket ve pozisyon bilgileri</li>
          <li>Kullanım verileri</li>
          <li>İşlem güvenliği bilgileri</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Veri İşleme Amaçları</h2>
        <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Hizmetlerimizin sunulması ve geliştirilmesi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>İş süreçlerinin yürütülmesi</li>
          <li>Müşteri ilişkilerinin yönetimi</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Haklarınız</h2>
        <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>
            Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp
            kullanılmadığını öğrenme
          </li>
          <li>
            Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme
          </li>
          <li>
            Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini
            isteme
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. İletişim</h2>
        <p>
          KVKK kapsamındaki haklarınızı kullanmak için:
          <br />
          E-posta: kvkk@futureautonoms.com
          <br />
          Telefon: +90 (850) 840 47 19
        </p>
      </div>
    </div>
  );
}
