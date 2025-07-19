# Clerk Authentication Setup

Bu proje Clerk ile giriş paneli entegrasyonu içermektedir. Aşağıdaki adımları takip ederek sistemi çalışır hale getirin:

## 1. Clerk Hesabı Oluşturma

1. [Clerk Dashboard](https://dashboard.clerk.com/) adresine gidin
2. Yeni bir hesap oluşturun veya mevcut hesabınıza giriş yapın
3. Yeni bir uygulama oluşturun

## 2. Environment Variables Ayarlama

`.env.local` dosyasındaki aşağıdaki değerleri Clerk dashboard'unuzdan alacağınız gerçek değerlerle değiştirin:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
```

## 3. Clerk Dashboard Ayarları

### 3.1. Redirect URLs
Clerk dashboard'unuzda aşağıdaki redirect URL'lerini ekleyin:

**Development:**
- `http://localhost:3000/panel/sign-in`
- `http://localhost:3000/panel/sign-up`
- `http://localhost:3000/panel/dashboard`

**Production:**
- `https://yourdomain.com/panel/sign-in`
- `https://yourdomain.com/panel/sign-up`
- `https://yourdomain.com/panel/dashboard`

### 3.2. Allowed Origins
Clerk dashboard'unuzda aşağıdaki origin'leri ekleyin:

**Development:**
- `http://localhost:3000`

**Production:**
- `https://yourdomain.com`

## 4. Uygulamayı Çalıştırma

```bash
npm run dev
```

## 5. Panel Erişimi

- **Giriş Sayfası:** `http://localhost:3000/panel/sign-in`
- **Kayıt Sayfası:** `http://localhost:3000/panel/sign-up`
- **Dashboard:** `http://localhost:3000/panel/dashboard`

## 6. Özellikler

### Giriş Paneli
- Modern ve responsive tasarım
- Clerk'in güvenli authentication sistemi
- Sosyal medya ile giriş desteği
- Email/şifre ile giriş

### Dashboard
- Kullanıcı bilgileri görüntüleme
- Sistem durumu kartları
- Hızlı işlem butonları
- İstatistik kartları
- Kullanıcı profil yönetimi

## 7. Güvenlik

- Tüm panel rotaları Clerk middleware ile korunmaktadır
- Sign-in ve sign-up sayfaları public erişime açıktır
- Dashboard ve diğer panel sayfaları authentication gerektirir

## 8. Özelleştirme

### Tema Değişiklikleri
`app/panel/sign-in/page.tsx` ve `app/panel/sign-up/page.tsx` dosyalarındaki `appearance` objesini düzenleyerek Clerk bileşenlerinin görünümünü özelleştirebilirsiniz.

### Dashboard İçeriği
`app/panel/dashboard/page.tsx` dosyasını düzenleyerek dashboard içeriğini ihtiyaçlarınıza göre özelleştirebilirsiniz.

## 9. Sorun Giderme

### Environment Variables Hatası
Eğer "Missing environment variables" hatası alıyorsanız:
1. `.env.local` dosyasının doğru konumda olduğundan emin olun
2. Clerk dashboard'dan aldığınız key'lerin doğru olduğunu kontrol edin
3. Uygulamayı yeniden başlatın

### Redirect Hatası
Eğer redirect hataları alıyorsanız:
1. Clerk dashboard'da redirect URL'lerin doğru eklendiğinden emin olun
2. Environment variables'daki URL'lerin doğru olduğunu kontrol edin

## 10. Production Deployment

Production'a deploy ederken:
1. Environment variables'ları production Clerk key'leri ile güncelleyin
2. Clerk dashboard'da production domain'inizi ekleyin
3. Redirect URL'leri production domain'iniz ile güncelleyin