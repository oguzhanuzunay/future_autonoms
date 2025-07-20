'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Activity,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bot,
  CheckCircle,
  Clock,
  Gauge,
  Play,
  Settings,
  Target,
  Workflow,
  Zap,
} from 'lucide-react';
import CountUp from 'react-countup';
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const processData = [
  { day: 'Pzt', automated: 85, manual: 15, efficiency: 92 },
  { day: 'Sal', automated: 87, manual: 13, efficiency: 94 },
  { day: 'Çar', automated: 89, manual: 11, efficiency: 91 },
  { day: 'Per', automated: 91, manual: 9, efficiency: 96 },
  { day: 'Cum', automated: 88, manual: 12, efficiency: 93 },
  { day: 'Cmt', automated: 82, manual: 18, efficiency: 89 },
  { day: 'Paz', automated: 79, manual: 21, efficiency: 87 },
];

const processTypeData = [
  { name: 'Otomatik', value: 73, color: '#10b981' },
  { name: 'Yarı-Otomatik', value: 18, color: '#3b82f6' },
  { name: 'Manuel', value: 9, color: '#f59e0b' },
];

const recentProcesses = [
  {
    id: 'PROC001',
    name: 'Fatura İşleme',
    status: 'optimized',
    time: '1 saat önce',
    efficiency: 94,
    type: 'financial',
  },
  {
    id: 'PROC002',
    name: 'Müşteri Onboarding',
    status: 'running',
    time: '3 saat önce',
    efficiency: 87,
    type: 'customer',
  },
  {
    id: 'PROC003',
    name: 'Envanter Yönetimi',
    status: 'analyzing',
    time: '5 saat önce',
    efficiency: 91,
    type: 'operations',
  },
  {
    id: 'PROC004',
    name: 'HR Süreçleri',
    status: 'completed',
    time: '1 gün önce',
    efficiency: 89,
    type: 'hr',
  },
];

export default function ProcessAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                DN.Process™ Agent
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli süreç optimizasyonu ve otomasyon yönetimi
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-9 text-xs sm:text-sm"
              >
                <Settings className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Ayarlar
              </Button>
              <Button
                size="sm"
                className="h-9 bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Başlat
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Status Card */}
        <Card className="border-border/50 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    Agent Durumu
                    <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs">
                      Aktif
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Son 24 saatte 47 süreç optimize edildi
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">91.2%</div>
                <p className="text-sm text-muted-foreground">Performans Skoru</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics - Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    12.5%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Otomasyon Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={87} />%
                  </div>
                </div>
                <Progress
                  value={87}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Gauge className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Verimlilik</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={93} />%
                  </div>
                </div>
                <Progress
                  value={93}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowDown className="h-2 w-2 mr-1" />
                    35.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Süre</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.2}
                      decimals={1}
                    />
                    dk
                  </div>
                </div>
                <Progress
                  value={85}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    5.1%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Başarı Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={98.7}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={99}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Process Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                Haftalık Süreç Performansı
              </CardTitle>
              <CardDescription className="text-sm">Otomasyon vs manuel süreçler</CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={processData}>
                  <defs>
                    <linearGradient
                      id="colorAutomated"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#10b981"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#10b981"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient
                      id="colorManual"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#f59e0b"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#f59e0b"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="day"
                    stroke="#666"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="automated"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorAutomated)"
                    name="Otomatik"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="manual"
                    stroke="#f59e0b"
                    fillOpacity={1}
                    fill="url(#colorManual)"
                    name="Manuel"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Process Types Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                Süreç Türleri
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={processTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {processTypeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-3">
                {processTypeData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="truncate">{item.name}</span>
                    </div>
                    <span className="font-medium shrink-0">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Workflow className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
              Hızlı İşlemler
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Workflow className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Süreç Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Otomatikleştir
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Analiz Et
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Optimize Et
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Processes - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Son Süreçler
            </CardTitle>
            <CardDescription className="text-sm">Son optimize edilen iş süreçleri</CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentProcesses.map((process) => (
                <div
                  key={process.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{process.id}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {process.type}
                        </Badge>
                      </div>
                      <p className="text-sm truncate">{process.name}</p>
                      <p className="text-xs text-muted-foreground">{process.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-500">{process.efficiency}%</div>
                      <Badge
                        variant={process.status === 'completed' ? 'default' : 'secondary'}
                        className={`text-xs mt-1 ${
                          process.status === 'completed'
                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                            : process.status === 'optimized'
                            ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                            : process.status === 'running'
                            ? 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                            : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        }`}
                      >
                        {process.status === 'completed'
                          ? 'Tamamlandı'
                          : process.status === 'optimized'
                          ? 'Optimize Edildi'
                          : process.status === 'running'
                          ? 'Çalışıyor'
                          : 'Analiz Ediliyor'}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Süreç ID</TableHead>
                    <TableHead>Ad</TableHead>
                    <TableHead>Tür</TableHead>
                    <TableHead>Verimlilik</TableHead>
                    <TableHead>Zaman</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentProcesses.map((process) => (
                    <TableRow key={process.id}>
                      <TableCell className="font-medium">{process.id}</TableCell>
                      <TableCell>{process.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{process.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-blue-500">{process.efficiency}%</span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{process.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={process.status === 'completed' ? 'default' : 'secondary'}
                          className={
                            process.status === 'completed'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : process.status === 'optimized'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : process.status === 'running'
                              ? 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                              : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          }
                        >
                          {process.status === 'completed'
                            ? 'Tamamlandı'
                            : process.status === 'optimized'
                            ? 'Optimize Edildi'
                            : process.status === 'running'
                            ? 'Çalışıyor'
                            : 'Analiz Ediliyor'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
