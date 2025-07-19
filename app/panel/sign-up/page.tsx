'use client';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Hesap Oluştur
          </h1>
          <p className="text-slate-400">
            Yönetim paneline erişim için hesabınızı oluşturun
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="w-full max-w-md">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Kayıt Ol</h2>
                <p className="text-slate-400">Yeni hesabınızı oluşturun</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Şifre
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Şifre Tekrar
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                
                <button
                  onClick={() => {
                    alert('Demo modunda hesap oluşturuldu! Dashboard\'a yönlendiriliyorsunuz.');
                    window.location.href = '/panel/dashboard';
                  }}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Hesap Oluştur (Demo)
                </button>
                
                <div className="text-center">
                  <p className="text-slate-400 text-sm">
                    Zaten hesabınız var mı?{' '}
                    <a href="/panel/sign-in" className="text-violet-400 hover:text-violet-300">
                      Giriş yapın
                    </a>
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <p className="text-yellow-400 text-sm font-medium">Demo Modu</p>
                      <p className="text-yellow-300 text-xs">
                        Gerçek kimlik doğrulama için Clerk anahtarlarını yapılandırın.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}