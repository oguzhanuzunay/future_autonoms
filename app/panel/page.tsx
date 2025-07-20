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
import { useUser } from '@clerk/nextjs';
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bot,
  Building2,
  Calendar,
  Clock,
  Target,
  TrendingUp,
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

// Department KPIs
const departmentKPIs = {
  sales: {
    name: 'Satış & Pazarlama',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
    score: 94.2,
    change: 2.1,
    metrics: [
      { name: 'Gelir', value: 485000, unit: '₺', icon: Target },
      { name: 'Müşteri', value: 187, unit: '', icon: Users },
      { name: 'Dönüşüm', value: 25.1, unit: '%', icon: TrendingUp },
      { name: 'AI Kullanım', value: 89, unit: '%', icon: Bot },
    ],
  },
  support: {
    name: 'Müşteri Desteği',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    score: 89.4,
    change: -0.5,
    metrics: [
      { name: 'Ticket', value: 687, unit: '', icon: Clock },
      { name: 'Çözüm', value: 634, unit: '', icon: Target },
      { name: 'Memnuniyet', value: 4.8, unit: '/5', icon: Users },
      { name: 'AI Yardım', value: 78, unit: '%', icon: Bot },
    ],
  },
  hr: {
    name: 'İnsan Kaynakları',
    icon: User,
    color: 'from-purple-500 to-violet-500',
    score: 92.1,
    change: 1.8,
    metrics: [
      { name: 'İşe Alım', value: 12, unit: '', icon: User },
      { name: 'Memnuniyet', value: 4.7, unit: '/5', icon: Users },
      { name: 'Eğitim', value: 89, unit: '%', icon: Target },
      { name: 'AI Analiz', value: 85, unit: '%', icon: Bot },
    ],
  },
  finance: {
    name: 'Finans & Operasyon',
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
    score: 87.5,
    change: 1.2,
    metrics: [
      { name: 'Tasarruf', value: 184500, unit: '₺', icon: Target },
      { name: 'Otomasyon', value: 82, unit: '%', icon: Zap },
      { name: 'Doğruluk', value: 99.4, unit: '%', icon: BarChart3 },
      { name: 'AI Verimlilik', value: 91, unit: '%', icon: Bot },
    ],
  },
};

// Chart data
const chartData = [
  { name: 'Pzt', value: 85 },
  { name: 'Sal', value: 87 },
  { name: 'Çar', value: 89 },
  { name: 'Per', value: 91 },
  { name: 'Cum', value: 94 },
  { name: 'Cmt', value: 88 },
  { name: 'Paz', value: 82 },
];

const kpiData = [
  { name: 'Performans', value: 85, color: '#10b981' },
  { name: 'Verimlilik', value: 92, color: '#3b82f6' },
  { name: 'Memnuniyet', value: 88, color: '#8b5cf6' },
  { name: 'AI Kullanım', value: 76, color: '#f59e0b' },
];

export default function DashboardPage() {
  const { user } = useUser();
  const [selectedDepartment, setSelectedDepartment] = useState('sales');

  const currentDept = departmentKPIs[selectedDepartment as keyof typeof departmentKPIs];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hoş Geldin, {user?.firstName || 'Kullanıcı'}! 👋
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Departman performansın ve AI kullanım istatistiklerin
            </p>
          </div>

          {/* Mobile Department Selector */}
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <div className="flex-1">
                  <Select
                    value={selectedDepartment}
                    onValueChange={setSelectedDepartment}
                  >
                    <SelectTrigger className="w-full h-10 sm:h-9">
                      <Building2 className="h-4 w-4 mr-2 shrink-0" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(departmentKPIs).map(([key, dept]) => (
                        <SelectItem
                          key={key}
                          value={key}
                        >
                          <div className="flex items-center gap-2">
                            <dept.icon className="h-4 w-4" />
                            {dept.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto h-10 sm:h-9"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Bu Ay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Overview Card */}
        <Card
          className={`border-border/50 bg-gradient-to-r ${currentDept.color} bg-opacity-10 overflow-hidden`}
        >
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${currentDept.color} shadow-lg`}
                >
                  <currentDept.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold truncate">{currentDept.name}</h2>
                  <p className="text-sm text-muted-foreground">Departman Performansı</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                <div className="text-center sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <CountUp
                      end={currentDept.score}
                      decimals={1}
                    />
                    %
                  </div>
                  <Badge
                    variant={currentDept.change > 0 ? 'default' : 'secondary'}
                    className={`mt-1 ${
                      currentDept.change > 0
                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                        : ''
                    }`}
                  >
                    {currentDept.change > 0 ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(currentDept.change)}%
                  </Badge>
                </div>
                <div className="hidden sm:block">
                  <Progress
                    value={currentDept.score}
                    className="w-24 h-3"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Progress Bar */}
            <div className="mt-4 sm:hidden">
              <Progress
                value={currentDept.score}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground mt-1 text-center">
                {Math.round(currentDept.score)}% hedef tamamlandı
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Grid - Mobile First */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentDept.metrics.map((metric, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-3 sm:p-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <metric.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                    <div className="text-right flex-1 min-w-0">
                      <div className="text-lg sm:text-xl font-bold truncate">
                        <CountUp
                          end={metric.value}
                          decimals={metric.unit === '/5' || metric.unit === '%' ? 1 : 0}
                          separator=","
                        />
                        <span className="text-sm">{metric.unit}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{metric.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Weekly Performance */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Haftalık Performans
              </CardTitle>
              <CardDescription className="text-sm">Son 7 günün detaylı analizi</CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="colorValue"
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
                    dataKey="name"
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
                    dataKey="value"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* KPI Overview */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                KPI Özeti
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={kpiData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {kpiData.map((entry, index) => (
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
                {kpiData.map((item) => (
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
                    <span className="font-medium">{item.value}%</span>
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
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
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
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                KPI Detay
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Takım Görünümü
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Rapor Al
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Bot className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                AI Yardım
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
