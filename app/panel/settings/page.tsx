'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser } from '@clerk/nextjs';
import {
  AlertTriangle,
  Bell,
  CheckCircle,
  CreditCard,
  Database,
  Globe,
  Key,
  Lock,
  Mail,
  Palette,
  Save,
  Shield,
  Smartphone,
  User,
  Volume2,
  Zap,
} from 'lucide-react';

export default function SettingsPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent">
                Panel Ayarları
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Hesap ve sistem tercihlerinizi yönetin
              </p>
            </div>

            <Button
              size="sm"
              className="h-9 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
            >
              <Save className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Kaydet
            </Button>
          </div>
        </div>

        {/* Mobile-First Tabs */}
        <Tabs
          defaultValue="general"
          className="space-y-4 sm:space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 h-auto p-1">
            <TabsTrigger
              value="general"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <User className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Genel</span>
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <Bell className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Bildirim</span>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Güvenlik</span>
            </TabsTrigger>
            <TabsTrigger
              value="integrations"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Entegrasyon</span>
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <CreditCard className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Fatura</span>
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <Database className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Gelişmiş</span>
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent
            value="general"
            className="space-y-4 sm:space-y-6"
          >
            {/* Profile Information */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  Profil Bilgileri
                </CardTitle>
                <CardDescription className="text-sm">
                  Kişisel bilgilerinizi güncelleyin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm"
                    >
                      Ad
                    </Label>
                    <Input
                      id="firstName"
                      defaultValue={user?.firstName || ''}
                      className="h-9"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm"
                    >
                      Soyad
                    </Label>
                    <Input
                      id="lastName"
                      defaultValue={user?.lastName || ''}
                      className="h-9"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm"
                  >
                    E-posta
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.emailAddresses[0]?.emailAddress || ''}
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="department"
                    className="text-sm"
                  >
                    Departman
                  </Label>
                  <Select defaultValue="sales">
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Satış & Pazarlama</SelectItem>
                      <SelectItem value="support">Müşteri Desteği</SelectItem>
                      <SelectItem value="hr">İnsan Kaynakları</SelectItem>
                      <SelectItem value="finance">Finans & Operasyon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  Tercihler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Karanlık Tema</Label>
                    <p className="text-xs text-muted-foreground">
                      Arayüz görünümünü karanlık moda çevir
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Otomatik Kaydet</Label>
                    <p className="text-xs text-muted-foreground">
                      Değişiklikleri otomatik olarak kaydet
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label className="text-sm">Dil</Label>
                  <Select defaultValue="tr">
                    <SelectTrigger className="h-9">
                      <Globe className="h-4 w-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tr">Türkçe</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent
            value="notifications"
            className="space-y-4 sm:space-y-6"
          >
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                  Bildirim Ayarları
                </CardTitle>
                <CardDescription className="text-sm">
                  Hangi bildirimleri almak istediğinizi seçin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">E-posta Bildirimleri</Label>
                      <p className="text-xs text-muted-foreground">
                        Önemli güncellemeler için e-posta al
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-4 w-4 text-green-500 shrink-0" />
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Push Bildirimleri</Label>
                      <p className="text-xs text-muted-foreground">Anında bildirimler al</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-4 w-4 text-purple-500 shrink-0" />
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Ses Bildirimleri</Label>
                      <p className="text-xs text-muted-foreground">Bildirimler için ses çal</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Bildirim Türleri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Sistem Güncellemeleri</Label>
                    <p className="text-xs text-muted-foreground">Yeni özellik ve düzeltmeler</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Performance Raporları</Label>
                    <p className="text-xs text-muted-foreground">Haftalık performans özetleri</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Güvenlik Uyarıları</Label>
                    <p className="text-xs text-muted-foreground">Önemli güvenlik bildirimleri</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent
            value="security"
            className="space-y-4 sm:space-y-6"
          >
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  Güvenlik Ayarları
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Lock className="h-4 w-4 text-blue-500 shrink-0" />
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">İki Faktörlü Doğrulama</Label>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-muted-foreground">Ekstra güvenlik katmanı</p>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                          <CheckCircle className="h-2 w-2 mr-1" />
                          Aktif
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                  >
                    Yönet
                  </Button>
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Key className="h-4 w-4 text-yellow-500 shrink-0" />
                    <div className="space-y-1">
                      <Label className="text-sm font-medium">Şifre Değiştir</Label>
                      <p className="text-xs text-muted-foreground">Son değişiklik: 3 ay önce</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                  >
                    Değiştir
                  </Button>
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Oturum Zaman Aşımı</Label>
                    <p className="text-xs text-muted-foreground">Otomatik çıkış süresi</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger className="w-full sm:w-32 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 dakika</SelectItem>
                      <SelectItem value="30">30 dakika</SelectItem>
                      <SelectItem value="60">1 saat</SelectItem>
                      <SelectItem value="240">4 saat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-yellow-500/5 border-yellow-500/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Güvenlik Önerisi</p>
                    <p className="text-xs text-muted-foreground">
                      Hesabınızın güvenliği için iki faktörlü doğrulamayı etkinleştirmenizi ve güçlü
                      bir şifre kullanmanızı öneririz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent
            value="integrations"
            className="space-y-4 sm:space-y-6"
          >
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                  Entegrasyonlar
                </CardTitle>
                <CardDescription className="text-sm">
                  Üçüncü parti servisleri bağlayın
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Mail className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Slack</p>
                          <p className="text-xs text-muted-foreground">Mesajlaşma</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-8 text-xs"
                      >
                        Bağla
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                          <Database className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Zapier</p>
                          <p className="text-xs text-muted-foreground">Otomasyon</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-8 text-xs"
                      >
                        <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                        Bağlı
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing */}
          <TabsContent
            value="billing"
            className="space-y-4 sm:space-y-6"
          >
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  Fatura ve Abonelik
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">Pro Plan</p>
                      <p className="text-xs text-muted-foreground">Aylık faturalandırma</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">₺299/ay</p>
                      <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                        Aktif
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 text-xs sm:text-sm"
                  >
                    Plan Değiştir
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 text-xs sm:text-sm"
                  >
                    Fatura Geçmişi
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Advanced */}
          <TabsContent
            value="advanced"
            className="space-y-4 sm:space-y-6"
          >
            <Card className="border-border/50 bg-card/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  Gelişmiş Ayarlar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Debug Modu</Label>
                    <p className="text-xs text-muted-foreground">
                      Geliştirici araçlarını etkinleştir
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Analitik</Label>
                    <p className="text-xs text-muted-foreground">Kullanım verilerini paylaş</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium text-red-500">Hesabı Sil</Label>
                    <p className="text-xs text-muted-foreground">
                      Tüm verilerinizi kalıcı olarak silin
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="h-8 text-xs"
                  >
                    Sil
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
