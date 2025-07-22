'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser } from '@clerk/nextjs';
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bot,
  Building2,
  Calendar,
  Crown,
  Medal,
  Star,
  Target,
  TrendingUp,
  Trophy,
  User,
  Users,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
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

// Kişisel AI Kullanım KPI'ları
const personalAIKPIs = {
  weekly: [
    { name: 'AI Etkileşimleri', value: 147, target: 200, unit: '', change: 8.2, trend: 'up' },
    { name: 'Otomasyon Oranı', value: 78.5, target: 80, unit: '%', change: 3.1, trend: 'up' },
    { name: 'Verimlilik Artışı', value: 24.3, target: 25, unit: '%', change: 1.7, trend: 'up' },
    { name: 'AI Yanıt Hızı', value: 0.8, target: 1, unit: 's', change: -12.5, trend: 'up' },
  ],
  monthly: [
    { name: 'AI Etkileşimleri', value: 642, target: 800, unit: '', change: 12.8, trend: 'up' },
    { name: 'Otomasyon Oranı', value: 82.1, target: 85, unit: '%', change: 5.2, trend: 'up' },
    { name: 'Verimlilik Artışı', value: 28.7, target: 30, unit: '%', change: 4.1, trend: 'up' },
    { name: 'AI Yanıt Hızı', value: 0.7, target: 1, unit: 's', change: -18.3, trend: 'up' },
  ],
  quarterly: [
    { name: 'AI Etkileşimleri', value: 1847, target: 2400, unit: '', change: 15.2, trend: 'up' },
    { name: 'Otomasyon Oranı', value: 85.3, target: 90, unit: '%', change: 8.7, trend: 'up' },
    { name: 'Verimlilik Artışı', value: 32.1, target: 35, unit: '%', change: 6.8, trend: 'up' },
    { name: 'AI Yanıt Hızı', value: 0.6, target: 1, unit: 's', change: -25.1, trend: 'up' },
  ],
  yearly: [
    { name: 'AI Etkileşimleri', value: 7234, target: 9600, unit: '', change: 18.5, trend: 'up' },
    { name: 'Otomasyon Oranı', value: 87.8, target: 95, unit: '%', change: 12.3, trend: 'up' },
    { name: 'Verimlilik Artışı', value: 35.6, target: 40, unit: '%', change: 9.2, trend: 'up' },
    { name: 'AI Yanıt Hızı', value: 0.5, target: 1, unit: 's', change: -32.8, trend: 'up' },
  ],
};

// Departman KPI'ları
const departmentKPIs = {
  sales: {
    name: 'Satış & Pazarlama',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
    kpis: {
      weekly: { score: 94.2, revenue: 125000, leads: 45, conversion: 23.4 },
      monthly: { score: 91.8, revenue: 485000, leads: 187, conversion: 25.1 },
      quarterly: { score: 89.5, revenue: 1425000, leads: 542, conversion: 27.3 },
      yearly: { score: 92.1, revenue: 5850000, leads: 2184, conversion: 29.8 },
    },
  },
  support: {
    name: 'Müşteri Desteği',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    kpis: {
      weekly: { score: 89.4, tickets: 156, resolved: 142, satisfaction: 4.7 },
      monthly: { score: 91.2, tickets: 687, resolved: 634, satisfaction: 4.8 },
      quarterly: { score: 88.7, tickets: 2045, resolved: 1876, satisfaction: 4.6 },
      yearly: { score: 90.3, tickets: 8234, resolved: 7542, satisfaction: 4.7 },
    },
  },
  hr: {
    name: 'İnsan Kaynakları',
    icon: User,
    color: 'from-purple-500 to-violet-500',
    kpis: {
      weekly: { score: 92.1, hires: 3, satisfaction: 4.6, training: 87 },
      monthly: { score: 90.8, hires: 12, satisfaction: 4.7, training: 89 },
      quarterly: { score: 91.5, hires: 34, satisfaction: 4.5, training: 91 },
      yearly: { score: 88.9, hires: 142, satisfaction: 4.6, training: 88 },
    },
  },
  finance: {
    name: 'Finans & Operasyon',
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
    kpis: {
      weekly: { score: 87.5, savings: 45000, automation: 78, accuracy: 99.2 },
      monthly: { score: 89.1, savings: 184500, automation: 82, accuracy: 99.4 },
      quarterly: { score: 86.8, savings: 534000, automation: 85, accuracy: 99.1 },
      yearly: { score: 88.3, savings: 2184000, automation: 87, accuracy: 99.3 },
    },
  },
};

// Leaderboard Verileri
const leaderboardData = [
  {
    rank: 1,
    department: 'Satış & Pazarlama',
    score: 94.2,
    change: 2.1,
    icon: Target,
    color: 'text-green-500',
  },
  {
    rank: 2,
    department: 'İnsan Kaynakları',
    score: 92.1,
    change: 1.8,
    icon: User,
    color: 'text-purple-500',
  },
  {
    rank: 3,
    department: 'Müşteri Desteği',
    score: 89.4,
    change: -0.5,
    icon: Users,
    color: 'text-blue-500',
  },
  {
    rank: 4,
    department: 'Finans & Operasyon',
    score: 87.5,
    change: 1.2,
    icon: BarChart3,
    color: 'text-yellow-500',
  },
];

// AI Kullanım Dağılımı
const aiUsageData = [
  { name: 'Otomasyon', value: 45, color: '#10b981' },
  { name: 'Analiz', value: 30, color: '#3b82f6' },
  { name: 'İletişim', value: 15, color: '#8b5cf6' },
  { name: 'Diğer', value: 10, color: '#f59e0b' },
];

// Chart verileri
const weeklyTrendData = [
  { day: 'Pzt', personal: 85, department: 88 },
  { day: 'Sal', personal: 87, department: 91 },
  { day: 'Çar', personal: 89, department: 89 },
  { day: 'Per', personal: 91, department: 92 },
  { day: 'Cum', personal: 94, department: 94 },
];

export default function KPITrackerPage() {
  const { user } = useUser();
  const [timeRange, setTimeRange] = useState('monthly');
  const [selectedDepartment, setSelectedDepartment] = useState('sales');

  const currentPersonalKPIs = personalAIKPIs[timeRange as keyof typeof personalAIKPIs];
  const currentDepartmentKPIs = departmentKPIs[selectedDepartment as keyof typeof departmentKPIs];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />;
      case 3:
        return <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />;
      default:
        return <Star className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />;
    }
  };

  const getTimeRangeText = (range: string) => {
    switch (range) {
      case 'weekly':
        return 'Bu Hafta';
      case 'monthly':
        return 'Bu Ay';
      case 'quarterly':
        return 'Bu Çeyrek';
      case 'yearly':
        return 'Bu Yıl';
      default:
        return 'Bu Ay';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KPI Dashboard
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Kişisel AI performansınız ve departman karşılaştırmaları
              </p>
            </div>

            <Select
              value={timeRange}
              onValueChange={setTimeRange}
            >
              <SelectTrigger className="w-full sm:w-[140px] h-10 sm:h-9">
                <Calendar className="h-4 w-4 mr-2 shrink-0" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Haftalık</SelectItem>
                <SelectItem value="monthly">Aylık</SelectItem>
                <SelectItem value="quarterly">Çeyreklik</SelectItem>
                <SelectItem value="yearly">Yıllık</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile-First Tabs */}
        <Tabs
          defaultValue="personal"
          className="space-y-4 sm:space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3 h-auto p-1">
            <TabsTrigger
              value="personal"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <User className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Kişisel AI</span>
            </TabsTrigger>
            <TabsTrigger
              value="department"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <Building2 className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Departman</span>
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:p-3 text-xs sm:text-sm"
            >
              <Trophy className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
              <span className="text-center">Sıralama</span>
            </TabsTrigger>
          </TabsList>

          {/* Kişisel AI Kullanımı */}
          <TabsContent
            value="personal"
            className="space-y-4 sm:space-y-6"
          >
            {/* Kişisel Özet */}
            <Card className="border-border/50 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
                      <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold truncate">
                        {user?.firstName}'in AI Performansı
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {getTimeRangeText(timeRange)} AI kullanım istatistikleri
                      </p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold">
                      {Math.round(
                        currentPersonalKPIs.reduce(
                          (acc, kpi) => acc + (kpi.value / kpi.target) * 100,
                          0,
                        ) / currentPersonalKPIs.length,
                      )}
                      %
                    </div>
                    <p className="text-sm text-muted-foreground">Genel Başarı</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kişisel KPI'lar - Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {currentPersonalKPIs.map((kpi, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm sm:text-base font-medium truncate flex-1">
                          {kpi.name}
                        </h3>
                        <Badge
                          variant={kpi.trend === 'up' ? 'default' : 'secondary'}
                          className={`text-xs shrink-0 ${
                            kpi.trend === 'up'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : ''
                          }`}
                        >
                          {kpi.trend === 'up' ? (
                            <ArrowUp className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                          ) : (
                            <ArrowDown className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                          )}
                          {Math.abs(kpi.change)}%
                        </Badge>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-bold">
                          <CountUp
                            end={kpi.value}
                            decimals={kpi.unit === 's' || kpi.unit === '%' ? 1 : 0}
                            separator=","
                          />
                          {kpi.unit}
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          / {kpi.target.toLocaleString()}
                          {kpi.unit}
                        </span>
                      </div>
                      <Progress
                        value={(kpi.value / kpi.target) * 100}
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground text-right">
                        {Math.round((kpi.value / kpi.target) * 100)}% tamamlandı
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Kullanım Analizi - Mobile Optimized */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="lg:col-span-2 border-border/50 bg-card/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                    Haftalık Trend Analizi
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Kişisel performansınız vs departman ortalaması
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0">
                  <ResponsiveContainer
                    width="100%"
                    height={160}
                  >
                    <AreaChart data={weeklyTrendData}>
                      <defs>
                        <linearGradient
                          id="colorPersonal"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8b5cf6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorDepartment"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3b82f6"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3b82f6"
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
                        dataKey="personal"
                        stroke="#8b5cf6"
                        fillOpacity={1}
                        fill="url(#colorPersonal)"
                        name="Kişisel"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="department"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorDepartment)"
                        name="Departman"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                    AI Kullanım Dağılımı
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0">
                  <ResponsiveContainer
                    width="100%"
                    height={160}
                  >
                    <PieChart>
                      <Pie
                        data={aiUsageData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {aiUsageData.map((entry, index) => (
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
                    {aiUsageData.map((item) => (
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
          </TabsContent>

          {/* Departman KPI'ları */}
          <TabsContent
            value="department"
            className="space-y-4 sm:space-y-6"
          >
            {/* Mobile Departman Seçici */}
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-3 sm:p-4">
                <div className="grid grid-cols-2 sm:flex gap-2">
                  {Object.entries(departmentKPIs).map(([key, dept]) => (
                    <Button
                      key={key}
                      variant={selectedDepartment === key ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedDepartment(key)}
                      className={`flex-1 h-auto p-3 flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm ${
                        selectedDepartment === key ? 'bg-blue-600 hover:bg-blue-700' : ''
                      }`}
                    >
                      <dept.icon className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                      <span className="text-center sm:text-left truncate">{dept.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Seçili Departman KPI'ları */}
            <Card
              className={`border-border/50 bg-gradient-to-r ${currentDepartmentKPIs.color} bg-opacity-10`}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${currentDepartmentKPIs.color} shadow-lg`}
                    >
                      <currentDepartmentKPIs.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold truncate">
                        {currentDepartmentKPIs.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {getTimeRangeText(timeRange)} performans verileri
                      </p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold">
                      {
                        currentDepartmentKPIs.kpis[
                          timeRange as keyof typeof currentDepartmentKPIs.kpis
                        ].score
                      }
                      %
                    </div>
                    <p className="text-sm text-muted-foreground">Genel Skor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Departman Metrik Kartları - Mobile Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {selectedDepartment === 'sales' && (
                <>
                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <Target className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {selectedDepartment === 'sales'
                              ? 'Gelir'
                              : selectedDepartment === 'support'
                              ? 'Çözülen Ticket'
                              : selectedDepartment === 'hr'
                              ? 'İşe Alımlar'
                              : 'Tasarruf'}
                          </p>
                          <div className="text-lg sm:text-xl font-bold">
                            {selectedDepartment === 'sales'
                              ? '₺'
                              : selectedDepartment === 'finance'
                              ? '₺'
                              : ''}
                            <CountUp
                              end={
                                selectedDepartment === 'sales'
                                  ? (
                                      currentDepartmentKPIs.kpis[
                                        timeRange as keyof typeof currentDepartmentKPIs.kpis
                                      ] as any
                                    ).revenue
                                  : selectedDepartment === 'support'
                                  ? (
                                      currentDepartmentKPIs.kpis[
                                        timeRange as keyof typeof currentDepartmentKPIs.kpis
                                      ] as any
                                    ).resolved
                                  : selectedDepartment === 'hr'
                                  ? (
                                      currentDepartmentKPIs.kpis[
                                        timeRange as keyof typeof currentDepartmentKPIs.kpis
                                      ] as any
                                    ).hires
                                  : (
                                      currentDepartmentKPIs.kpis[
                                        timeRange as keyof typeof currentDepartmentKPIs.kpis
                                      ] as any
                                    ).savings
                              }
                              separator=","
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            Yeni Müşteriler
                          </p>
                          <div className="text-lg sm:text-xl font-bold">
                            <CountUp
                              end={
                                currentDepartmentKPIs.kpis[
                                  timeRange as keyof typeof currentDepartmentKPIs.kpis
                                ].leads
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Dönüşüm Oranı</p>
                          <div className="text-lg sm:text-xl font-bold">
                            <CountUp
                              end={
                                currentDepartmentKPIs.kpis[
                                  timeRange as keyof typeof currentDepartmentKPIs.kpis
                                ].conversion
                              }
                              decimals={1}
                            />
                            %
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 shrink-0" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground">Genel Skor</p>
                          <div className="text-lg sm:text-xl font-bold">
                            <CountUp
                              end={
                                currentDepartmentKPIs.kpis[
                                  timeRange as keyof typeof currentDepartmentKPIs.kpis
                                ].score
                              }
                              decimals={1}
                            />
                            %
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </TabsContent>

          {/* Leaderboard - Mobile Optimized */}
          <TabsContent
            value="leaderboard"
            className="space-y-4 sm:space-y-6"
          >
            <Card className="border-border/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
                    <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">Departman Sıralaması</h2>
                    <p className="text-sm text-muted-foreground">
                      {getTimeRangeText(timeRange)} performans sıralaması
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 sm:space-y-4">
              {leaderboardData.map((item, index) => (
                <Card
                  key={index}
                  className={`border-border/50 transition-all duration-300 hover:shadow-md ${
                    item.rank === 1
                      ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/30'
                      : item.rank === 2
                      ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-500/30'
                      : item.rank === 3
                      ? 'bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600/30'
                      : 'bg-card/50'
                  }`}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex items-center gap-2">
                          {getRankIcon(item.rank)}
                          <span className="text-xl sm:text-2xl font-bold">#{item.rank}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`p-2 rounded-lg bg-current ${item.color} bg-opacity-10`}>
                            <item.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${item.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base sm:text-lg truncate">
                              {item.department}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              Departman Performansı
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                        <div className="text-center sm:text-right">
                          <div className="text-2xl sm:text-3xl font-bold">{item.score}%</div>
                          <Badge
                            variant={item.change > 0 ? 'default' : 'secondary'}
                            className={`mt-1 text-xs ${
                              item.change > 0
                                ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                : ''
                            }`}
                          >
                            {item.change > 0 ? (
                              <ArrowUp className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                            ) : (
                              <ArrowDown className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                            )}
                            {Math.abs(item.change)}%
                          </Badge>
                        </div>
                        <Progress
                          value={item.score}
                          className="w-20 sm:w-32 h-2 sm:h-3"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ödül Sistemi - Mobile Grid */}
            <Card className="border-border/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Medal className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  Bu Ay En Başarılılar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Crown className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-yellow-500" />
                    <p className="font-semibold text-sm sm:text-base">🥇 En Yüksek Performans</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Satış & Pazarlama</p>
                    <p className="text-lg font-bold">94.2%</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-500" />
                    <p className="font-semibold text-sm sm:text-base">📈 En Çok Gelişen</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">İnsan Kaynakları</p>
                    <p className="text-lg font-bold">+2.1%</p>
                  </div>
                  <div className="text-center p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-green-500" />
                    <p className="font-semibold text-sm sm:text-base">⚡ En Verimli</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Finans & Operasyon</p>
                    <p className="text-lg font-bold">87% Otomasyon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
