import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/panel/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Future Autonoms</h1>
              <span className="ml-4 text-gray-300">Admin Panel</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white">Hoş geldin, {user.firstName || user.emailAddresses[0]?.emailAddress}</span>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                    userButtonTrigger: "focus:shadow-none",
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Hoş Geldiniz</h2>
            <p className="text-gray-300">
              Future Autonoms admin paneline başarıyla giriş yaptınız. 
              Buradan tüm sistem ayarlarını yönetebilirsiniz.
            </p>
          </div>

          {/* User Info Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Kullanıcı Bilgileri</h2>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-medium">Ad:</span> {user.firstName || 'Belirtilmemiş'}</p>
              <p><span className="font-medium">Soyad:</span> {user.lastName || 'Belirtilmemiş'}</p>
              <p><span className="font-medium">E-posta:</span> {user.emailAddresses[0]?.emailAddress}</p>
              <p><span className="font-medium">Kullanıcı ID:</span> {user.id}</p>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Hızlı İşlemler</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Sistem Ayarları
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Kullanıcı Yönetimi
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Raporlar
              </button>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">İstatistikler</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-sm text-gray-300">Aktif Kullanıcı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">0</div>
                <div className="text-sm text-gray-300">Toplam İşlem</div>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Son Aktiviteler</h2>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                <p>Henüz aktivite bulunmuyor.</p>
              </div>
            </div>
          </div>

          {/* System Status Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Sistem Durumu</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">API Durumu</span>
                <span className="text-green-400">Çevrimiçi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Veritabanı</span>
                <span className="text-green-400">Aktif</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Güvenlik</span>
                <span className="text-green-400">Güvenli</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}