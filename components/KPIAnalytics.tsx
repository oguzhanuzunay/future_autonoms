'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Zap, 
  Brain, 
  Users,
  Clock,
  Activity,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const kpiTrendData = [
  { month: 'Oca', aiAdoption: 65, efficiency: 72, satisfaction: 78, cost: 45 },
  { month: 'Şub', aiAdoption: 72, efficiency: 75, satisfaction: 82, cost: 42 },
  { month: 'Mar', aiAdoption: 78, efficiency: 81, satisfaction: 85, cost: 38 },
  { month: 'Nis', aiAdoption: 82, efficiency: 85, satisfaction: 88, cost: 35 },
  { month: 'May', aiAdoption: 87, efficiency: 89, satisfaction: 91, cost: 32 },
  { month: 'Haz', aiAdoption: 94, efficiency: 93, satisfaction: 94, cost: 28 }
];

const departmentPerformance = [
  { department: 'Teknoloji', A: 95, B: 88, C: 92, D: 87, E: 90, fullMark: 100 },
  { department: 'Pazarlama', A: 82, B: 75, C: 85, D: 78, E: 80, fullMark: 100 },
  { department: 'Satış', A: 78, B: 85, C: 80, D: 82, E: 85, fullMark: 100 },
  { department: 'İK', A: 65, B: 72, C: 68, D: 75, E: 70, fullMark: 100 },
  { department: 'Finans', A: 88, B: 82, C: 85, D: 80, E: 83, fullMark: 100 }
];

const realTimeMetrics = [
  { time: '09:00', activeUsers: 145, cpuUsage: 45, aiRequests: 230 },
  { time: '10:00', activeUsers: 189, cpuUsage: 52, aiRequests: 340 },
  { time: '11:00', activeUsers: 234, cpuUsage: 48, aiRequests: 420 },
  { time: '12:00', activeUsers: 298, cpuUsage: 65, aiRequests: 520 },
  { time: '13:00', activeUsers: 256, cpuUsage: 58, aiRequests: 480 },
  { time: '14:00', activeUsers: 312, cpuUsage: 72, aiRequests: 580 },
  { time: '15:00', activeUsers: 289, cpuUsage: 69, aiRequests: 540 }
];

const kpiTargets = [
  { 
    name: 'AI Kullanım Oranı', 
    current: 94.2, 
    target: 95, 
    trend: 'up', 
    change: '+12.5%',
    icon: Brain,
    color: 'text-purple-400'
  },
  { 
    name: 'Kullanıcı Memnuniyeti', 
    current: 88.7, 
    target: 90, 
    trend: 'up', 
    change: '+5.2%',
    icon: Users,
    color: 'text-blue-400'
  },
  { 
    name: 'Ortalama Yanıt Süresi', 
    current: 1.2, 
    target: 1.0, 
    trend: 'down', 
    change: '-8.3%',
    icon: Clock,
    color: 'text-orange-400'
  },
  { 
    name: 'Sistem Kullanılabilirliği', 
    current: 99.8, 
    target: 99.9, 
    trend: 'up', 
    change: '+0.1%',
    icon: Activity,
    color: 'text-green-400'
  }
];

export function KPIAnalytics() {
  return (
    <div className="space-y-6">
      {/* KPI Target Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiTargets.map((kpi) => {
          const IconComponent = kpi.icon;
          const isOnTarget = kpi.current >= kpi.target;
          
          return (
            <Card key={kpi.name} className="bg-white/10 backdrop-blur-md border-white/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <IconComponent className="w-full h-full" />
              </div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white truncate">{kpi.name}</CardTitle>
                <div className={`p-2 rounded-lg bg-opacity-20 ${kpi.color}`}>
                  <IconComponent className={`h-4 w-4 ${kpi.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-white">
                    {kpi.name.includes('Süresi') ? `${kpi.current}s` : `${kpi.current}%`}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      kpi.trend === 'up' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {kpi.change}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Hedef: {kpi.target}%</span>
                    <span className={isOnTarget ? 'text-green-400' : 'text-orange-400'}>
                      {isOnTarget ? 'Hedef Aşıldı' : 'Hedefe Yakın'}
                    </span>
                  </div>
                  <Progress 
                    value={(kpi.current / kpi.target) * 100} 
                    className="h-2"
                  />
                </div>
                {isOnTarget ? (
                  <div className="flex items-center mt-2 text-xs text-green-400">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Performans hedefi aşıldı
                  </div>
                ) : (
                  <div className="flex items-center mt-2 text-xs text-orange-400">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    İyileştirme gerekli
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Advanced Analytics Tabs */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-md">
          <TabsTrigger value="trends" className="data-[state=active]:bg-violet-600">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trend Analizi
          </TabsTrigger>
          <TabsTrigger value="departments" className="data-[state=active]:bg-violet-600">
            <Target className="mr-2 h-4 w-4" />
            Departman Performansı
          </TabsTrigger>
          <TabsTrigger value="realtime" className="data-[state=active]:bg-violet-600">
            <Zap className="mr-2 h-4 w-4" />
            Gerçek Zamanlı
          </TabsTrigger>
        </TabsList>

        {/* Trend Analysis */}
        <TabsContent value="trends" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">KPI Trend Analizi</CardTitle>
              <CardDescription className="text-slate-400">
                Son 6 aylık performans göstergeleri ve gelişim trendi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={kpiTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="aiAdoption" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="efficiency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="satisfaction" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="aiAdoption" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#aiAdoption)"
                    name="AI Kullanımı"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="efficiency" 
                    stroke="#06b6d4" 
                    fillOpacity={1} 
                    fill="url(#efficiency)"
                    name="Verimlilik"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="satisfaction" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#satisfaction)"
                    name="Memnuniyet"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Department Performance */}
        <TabsContent value="departments" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Departman Performans Radarı</CardTitle>
              <CardDescription className="text-slate-400">
                5 ana kategoride departman bazlı performans karşılaştırması
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={departmentPerformance}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="department" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <PolarRadiusAxis 
                    angle={60} 
                    domain={[0, 100]} 
                    tick={{ fill: '#9ca3af', fontSize: 10 }}
                  />
                  <Radar 
                    name="AI Kullanımı" 
                    dataKey="A" 
                    stroke="#8b5cf6" 
                    fill="#8b5cf6" 
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Radar 
                    name="Verimlilik" 
                    dataKey="B" 
                    stroke="#06b6d4" 
                    fill="#06b6d4" 
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Radar 
                    name="İnovasyon" 
                    dataKey="C" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Real-time Metrics */}
        <TabsContent value="realtime" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Anlık Kullanıcı Aktivitesi</CardTitle>
                <CardDescription className="text-slate-400">Son 7 saatlik kullanıcı trafiği</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={realTimeMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="activeUsers" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                      name="Aktif Kullanıcılar"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Sistem Performansı</CardTitle>
                <CardDescription className="text-slate-400">CPU kullanımı ve AI istekleri</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={realTimeMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="cpuUsage" fill="#06b6d4" name="CPU Kullanımı %" />
                    <Bar dataKey="aiRequests" fill="#10b981" name="AI İstekleri" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}