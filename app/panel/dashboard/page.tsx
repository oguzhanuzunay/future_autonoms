'use client';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Header */}
      <header className="relative border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Yönetim Paneli
              </h1>
              <p className="text-slate-400">
                Hoş geldiniz, Demo Kullanıcı
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  alert('Demo çıkış yapılıyor...');
                  window.location.href = '/';
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Toplam Kullanıcı</p>
                <p className="text-2xl font-bold text-white">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Aktif Projeler</p>
                <p className="text-2xl font-bold text-white">52</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-400">Aylık Büyüme</p>
                <p className="text-2xl font-bold text-white">+12%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Warning */}
        <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <p className="text-yellow-400 text-sm font-medium">Demo Dashboard</p>
              <p className="text-yellow-300 text-xs">
                Bu demo paneldir. Gerçek kullanıcı verilerini görmek için Clerk kimlik doğrulamasını yapılandırın.
              </p>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-6">Demo Hesap Bilgileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Ad Soyad
              </label>
              <p className="text-white bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                Demo Kullanıcı
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                E-posta
              </label>
              <p className="text-white bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                demo@example.com
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Üyelik Tarihi
              </label>
              <p className="text-white bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                {new Date().toLocaleDateString('tr-TR')}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Son Giriş
              </label>
              <p className="text-white bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                {new Date().toLocaleDateString('tr-TR')}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}