# Panel Giriş Sistemi Kurulum Rehberi

Bu proje Clerk ile entegre edilmiş bir yönetim paneli içermektedir.

## Gereksinimler

1. **Clerk Hesabı**: [clerk.com](https://clerk.com) üzerinden ücretsiz hesap oluşturun.

## Kurulum Adımları

### 1. Clerk Anahtarlarını Ayarlayın

`.env.local` dosyasında aşağıdaki değerleri Clerk Dashboard'dan aldığınız anahtarlarla güncelleyin:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

# Clerk URLs for panel subdomain
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/panel/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/panel/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/panel/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/panel/dashboard
```

### 2. Hosts Dosyasını Güncelleyin (panel.localhost için)

#### Windows:
`C:\Windows\System32\drivers\etc\hosts` dosyasına ekleyin:
```
127.0.0.1 panel.localhost
```

#### macOS/Linux:
`/etc/hosts` dosyasına ekleyin:
```
127.0.0.1 panel.localhost
```

### 3. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

## Erişim URL'leri

- **Ana Site**: http://localhost:3000
- **Panel Ana Sayfa**: http://localhost:3000/panel (otomatik yönlendirme)
- **Panel Giriş**: http://localhost:3000/panel/sign-in
- **Panel Kayıt**: http://localhost:3000/panel/sign-up
- **Panel Dashboard**: http://localhost:3000/panel/dashboard
- **Subdomain Erişim**: http://panel.localhost:3000 (hosts dosyası gerekli)

## Özellikler

### ✅ Tamamlanan Özellikler
- Modern ve responsive giriş paneli
- Clerk ile güvenli kimlik doğrulama
- Dashboard sayfası kullanıcı bilgileriyle
- Otomatik yönlendirmeler
- Türkçe arayüz
- Glassmorphism tasarım

### 🎨 Tasarım Özellikleri
- Gradient arka plan
- Glassmorphism kartlar
- Responsive tasarım
- Smooth animasyonlar
- Dark theme uyumlu

## Panel Sayfaları

1. **Giriş Sayfası** (`/panel/sign-in`)
   - E-posta/şifre girişi
   - Sosyal medya girişi (Google, GitHub vs.)
   - "Hesap oluştur" bağlantısı

2. **Kayıt Sayfası** (`/panel/sign-up`)
   - Yeni hesap oluşturma
   - E-posta doğrulama
   - "Giriş yap" bağlantısı

3. **Dashboard** (`/panel/dashboard`)
   - Kullanıcı bilgileri
   - İstatistik kartları
   - Çıkış yapma butonu

## Güvenlik

- Middleware ile korunan rotalar
- Sadece kimlik doğrulaması yapılmış kullanıcılar dashboard'a erişebilir
- Otomatik session yönetimi
- Güvenli çıkış işlemi

## Sorun Giderme

1. **"Panel sayfa yüklenmiyorsa"**:
   - Geliştirme sunucusunun çalıştığından emin olun
   - Tarayıcı cache'ini temizleyin
   - Clerk anahtarlarını kontrol edin

2. **"Subdomain çalışmıyorsa"**:
   - Hosts dosyasının doğru güncellenmesini kontrol edin
   - Tarayıcıyı yeniden başlatın
   - DNS cache'ini temizleyin

3. **"Authentication hatası"**:
   - Clerk anahtarlarının doğru olduğunu kontrol edin
   - .env.local dosyasının proje root'unda olduğunu kontrol edin
   - Geliştirme sunucusunu yeniden başlatın

## Örnek Kullanım

1. Ana siteye gidin: http://localhost:3000
2. Sağ üst köşedeki "Panel" butonuna tıklayın
3. Giriş yapmak için mevcut hesabınızı kullanın veya yeni hesap oluşturun
4. Dashboard'da kullanıcı bilgilerinizi görün

## Deployment Notları

Production'a deploy ederken:
- Clerk Production anahtarlarını kullanın
- Domain ayarlarını Clerk Dashboard'da yapılandırın
- HTTPS kullanın
- Environment variables'ları production ortamına ekleyin