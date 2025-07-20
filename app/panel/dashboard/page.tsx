'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Download, 
  TrendingUp, 
  Users, 
  Brain, 
  Settings, 
  MoreHorizontal,
  Chrome,
  Firefox,
  Smartphone,
  Monitor,
  BarChart3,
  Target,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react';
import { KPIAnalytics } from '@/components/KPIAnalytics';

// Mock data
const kpiData = [
  { name: 'Oca', aiUsage: 4000, efficiency: 2400, tasks: 2400 },
  { name: 'Şub', aiUsage: 3000, efficiency: 1398, tasks: 2210 },
  { name: 'Mar', aiUsage: 2000, efficiency: 9800, tasks: 2290 },
  { name: 'Nis', aiUsage: 2780, efficiency: 3908, tasks: 2000 },
  { name: 'May', aiUsage: 1890, efficiency: 4800, tasks: 2181 },
  { name: 'Haz', aiUsage: 2390, efficiency: 3800, tasks: 2500 }
];

const departmentData = [
  { name: 'Pazarlama', value: 400, color: '#8b5cf6' },
  { name: 'Satış', value: 300, color: '#06b6d4' },
  { name: 'İnsan Kaynakları', value: 200, color: '#10b981' },
  { name: 'Teknoloji', value: 500, color: '#f59e0b' }
];

const aiTools = [
  { id: 1, name: 'ChatGPT Assistant', department: 'Genel', usage: 95, status: 'active', users: 1234 },
  { id: 2, name: 'Sales AI Predictor', department: 'Satış', usage: 87, status: 'active', users: 456 },
  { id: 3, name: 'Marketing Optimizer', department: 'Pazarlama', usage: 92, status: 'active', users: 789 },
  { id: 4, name: 'HR Screening Bot', department: 'İnsan Kaynakları', usage: 76, status: 'warning', users: 234 },
  { id: 5, name: 'Code Review AI', department: 'Teknoloji', usage: 98, status: 'active', users: 567 }
];

const extensions = [
  { 
    id: 1, 
    name: 'AI Usage Tracker Pro', 
    icon: Chrome, 
    platform: 'Chrome', 
    downloads: 15420, 
    rating: 4.8,
    description: 'AI kullanımınızı detaylı takip edin'
  },
  { 
    id: 2, 
    name: 'Smart AI Monitor', 
    icon: Firefox, 
    platform: 'Firefox', 
    downloads: 8730, 
    rating: 4.6,
    description: 'Akıllı AI performans monitörü'
  },
  { 
    id: 3, 
    name: 'Mobile AI Tracker', 
    icon: Smartphone, 
    platform: 'Mobile', 
    downloads: 12560, 
    rating: 4.9,
    description: 'Mobil AI kullanım analizi'
  },
  { 
    id: 4, 
    name: 'Desktop AI Suite', 
    icon: Monitor, 
    platform: 'Desktop', 
    downloads: 9430, 
    rating: 4.7,
    description: 'Masaüstü AI yönetim araçları'
  }
];

export default function DashboardPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('6m');

  const filteredAITools = selectedDepartment === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Header */}
      <header className="relative border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                AI Yönetim Paneli
              </h1>
              <p className="text-slate-400">
                KPI takibi, uygulama merkezi ve departman yönetimi
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger className="w-[140px] bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="1m">Son 1 Ay</SelectItem>
                  <SelectItem value="3m">Son 3 Ay</SelectItem>
                  <SelectItem value="6m">Son 6 Ay</SelectItem>
                  <SelectItem value="1y">Son 1 Yıl</SelectItem>
                </SelectContent>
              </Select>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/avatar.jpg" alt="Kullanıcı" />
                      <AvatarFallback className="bg-violet-600">DK</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-800 border-slate-700" align="end">
                  <DropdownMenuItem className="text-slate-200 hover:bg-slate-700">
                    <Settings className="mr-2 h-4 w-4" />
                    Ayarlar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  <DropdownMenuItem 
                    className="text-red-400 hover:bg-slate-700"
                    onClick={() => {
                      alert('Demo çıkış yapılıyor...');
                      window.location.href = '/';
                    }}
                  >
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-md">
            <TabsTrigger value="overview" className="data-[state=active]:bg-violet-600">
              <BarChart3 className="mr-2 h-4 w-4" />
              Genel Bakış
            </TabsTrigger>
            <TabsTrigger value="kpi" className="data-[state=active]:bg-violet-600">
              <Target className="mr-2 h-4 w-4" />
              KPI Tracker
            </TabsTrigger>
            <TabsTrigger value="apps" className="data-[state=active]:bg-violet-600">
              <Download className="mr-2 h-4 w-4" />
              Uygulama Merkezi
            </TabsTrigger>
            <TabsTrigger value="departments" className="data-[state=active]:bg-violet-600">
              <Brain className="mr-2 h-4 w-4" />
              Departmanlar
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Toplam AI Kullanımı</CardTitle>
                  <Activity className="h-4 w-4 text-violet-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">94.2%</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +12.5% geçen aya göre
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Aktif Kullanıcılar</CardTitle>
                  <Users className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2,480</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +8.1% geçen aya göre
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Görev Tamamlama</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">87.4%</div>
                  <p className="text-xs text-red-400 flex items-center">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -2.3% geçen aya göre
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Ortalama Yanıt Süresi</CardTitle>
                  <Clock className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1.2s</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +5.2% daha hızlı
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">AI Kullanım Trendi</CardTitle>
                  <CardDescription className="text-slate-400">Son 6 aylık performans</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={kpiData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Line type="monotone" dataKey="aiUsage" stroke="#8b5cf6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Departman Dağılımı</CardTitle>
                  <CardDescription className="text-slate-400">AI araç kullanımı</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={departmentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={(entry) => entry.name}
                      >
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* KPI Tracker Tab */}
          <TabsContent value="kpi" className="space-y-6">
            <KPIAnalytics />
          </TabsContent>

          {/* Apps Tab */}
          <TabsContent value="apps" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {extensions.map((ext) => {
                const IconComponent = ext.icon;
                return (
                  <Card key={ext.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-200">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-white">{ext.name}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {ext.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Platform:</span>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                          {ext.platform}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">İndirmeler:</span>
                        <span className="text-white font-medium">
                          {ext.downloads.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">Değerlendirme:</span>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-white">{ext.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                        <Download className="mr-2 h-4 w-4" />
                        İndir
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">İndirme İstatistikleri</CardTitle>
                <CardDescription className="text-slate-400">
                  Platform bazında uygulama indirme verileri
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={extensions}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="platform" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="downloads" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Departments Tab */}
          <TabsContent value="departments" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Departman AI Araçları</h2>
                <p className="text-slate-400">AI araçlarını departmanlara göre yönetin</p>
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-[200px] bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Departman seçin" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">Tüm Departmanlar</SelectItem>
                  <SelectItem value="Pazarlama">Pazarlama</SelectItem>
                  <SelectItem value="Satış">Satış</SelectItem>
                  <SelectItem value="İnsan Kaynakları">İnsan Kaynakları</SelectItem>
                  <SelectItem value="Teknoloji">Teknoloji</SelectItem>
                  <SelectItem value="Genel">Genel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAITools.map((tool) => (
                <Card key={tool.id} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{tool.name}</CardTitle>
                        <CardDescription className="text-slate-400">
                          {tool.department}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4 text-slate-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-slate-800 border-slate-700">
                          <DropdownMenuItem className="text-slate-200 hover:bg-slate-700">
                            Düzenle
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-slate-200 hover:bg-slate-700">
                            Ayarlar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-slate-700" />
                          <DropdownMenuItem className="text-red-400 hover:bg-slate-700">
                            Devre Dışı Bırak
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-300">Kullanım Oranı</span>
                        <span className="text-white">{tool.usage}%</span>
                      </div>
                      <Progress value={tool.usage} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Durum:</span>
                      <Badge 
                        variant="secondary" 
                        className={
                          tool.status === 'active' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-orange-500/20 text-orange-400'
                        }
                      >
                        {tool.status === 'active' ? 'Aktif' : 'Uyarı'}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Kullanıcılar:</span>
                      <span className="text-white font-medium">{tool.users.toLocaleString()}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                        <Settings className="mr-2 h-3 w-3" />
                        Ayarlar
                      </Button>
                      <Button size="sm" className="flex-1 bg-violet-600 hover:bg-violet-700">
                        <Zap className="mr-2 h-3 w-3" />
                        Optimize Et
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}