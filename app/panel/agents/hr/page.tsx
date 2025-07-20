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
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bot,
  Calendar,
  Clock,
  GraduationCap,
  Heart,
  Play,
  Settings,
  UserCheck,
  Users,
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

// Performance data
const hrData = [
  { day: 'Pzt', hires: 2, interviews: 8, satisfaction: 4.6 },
  { day: 'Sal', hires: 3, interviews: 12, satisfaction: 4.7 },
  { day: 'Çar', hires: 1, interviews: 6, satisfaction: 4.5 },
  { day: 'Per', hires: 4, interviews: 15, satisfaction: 4.8 },
  { day: 'Cum', hires: 2, interviews: 10, satisfaction: 4.7 },
  { day: 'Cmt', hires: 1, interviews: 4, satisfaction: 4.4 },
  { day: 'Paz', hires: 0, interviews: 2, satisfaction: 4.6 },
];

const departmentSatisfactionData = [
  { name: 'Satış', value: 92, color: '#10b981' },
  { name: 'Destek', value: 89, color: '#3b82f6' },
  { name: 'Geliştirme', value: 94, color: '#8b5cf6' },
  { name: 'Pazarlama', value: 87, color: '#f59e0b' },
];

const recentActivities = [
  {
    id: 1,
    action: 'Yeni işe alım',
    candidate: 'Ahmet Yılmaz',
    position: 'Frontend Developer',
    time: '2 saat önce',
    status: 'hired',
  },
  {
    id: 2,
    action: 'Mülakat planlandı',
    candidate: 'Zehra Kaya',
    position: 'UX Designer',
    time: '4 saat önce',
    status: 'scheduled',
  },
  {
    id: 3,
    action: 'Eğitim tamamlandı',
    candidate: 'Mehmet Demir',
    position: 'Sales Rep',
    time: '1 gün önce',
    status: 'completed',
  },
  {
    id: 4,
    action: 'Performans değerlendirmesi',
    candidate: 'Ayşe Güler',
    position: 'Marketing Manager',
    time: '2 gün önce',
    status: 'review',
  },
];

export default function HRAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                DN.HR™ Agent
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli insan kaynakları ve çalışan yönetimi
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
                className="h-9 bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Başlat
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Status Card */}
        <Card className="border-border/50 bg-gradient-to-r from-purple-500/10 to-violet-500/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    Agent Durumu
                    <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                      Aktif
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Son 24 saatte 23 HR işlemi gerçekleştirildi
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">92.1%</div>
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
                  <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    15.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bu Ay İşe Alım</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={12} />
                  </div>
                </div>
                <Progress
                  value={80}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    3.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Çalışan Memnuniyeti</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.7}
                      decimals={1}
                    />
                    /5
                  </div>
                </div>
                <Progress
                  value={94}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Eğitim Tamamlama</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={89} />%
                  </div>
                </div>
                <Progress
                  value={89}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0" />
                  <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs">
                    <ArrowDown className="h-2 w-2 mr-1" />
                    12.1%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Ortalama İşe Alım Süresi
                  </p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={18} />
                    gün
                  </div>
                </div>
                <Progress
                  value={75}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* HR Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                Haftalık HR Performansı
              </CardTitle>
              <CardDescription className="text-sm">
                İşe alım ve mülakat aktiviteleri
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={hrData}>
                  <defs>
                    <linearGradient
                      id="colorHires"
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
                      id="colorInterviews"
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
                    dataKey="interviews"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorInterviews)"
                    name="Mülakat"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="hires"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorHires)"
                    name="İşe Alım"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Satisfaction Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                Departman Memnuniyeti
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={departmentSatisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {departmentSatisfactionData.map((entry, index) => (
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
                {departmentSatisfactionData.map((item) => (
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
              <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
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
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Çalışan Ekle
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Mülakat Planla
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Eğitim Başlat
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Rapor Al
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
              Son HR Aktiviteleri
            </CardTitle>
            <CardDescription className="text-sm">Son insan kaynakları işlemleri</CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.action}</p>
                      <p className="text-xs text-muted-foreground truncate">{activity.candidate}</p>
                      <p className="text-xs text-muted-foreground truncate">{activity.position}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge
                      variant={activity.status === 'hired' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        activity.status === 'hired'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : activity.status === 'scheduled'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : activity.status === 'completed'
                          ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                          : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                      }`}
                    >
                      {activity.status === 'hired'
                        ? 'İşe Alındı'
                        : activity.status === 'scheduled'
                        ? 'Planlandı'
                        : activity.status === 'completed'
                        ? 'Tamamlandı'
                        : 'Değerlendirme'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>İşlem</TableHead>
                    <TableHead>Aday/Çalışan</TableHead>
                    <TableHead>Pozisyon</TableHead>
                    <TableHead>Zaman</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="font-medium">{activity.action}</TableCell>
                      <TableCell>{activity.candidate}</TableCell>
                      <TableCell>{activity.position}</TableCell>
                      <TableCell className="text-muted-foreground">{activity.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={activity.status === 'hired' ? 'default' : 'secondary'}
                          className={
                            activity.status === 'hired'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : activity.status === 'scheduled'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : activity.status === 'completed'
                              ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                              : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          }
                        >
                          {activity.status === 'hired'
                            ? 'İşe Alındı'
                            : activity.status === 'scheduled'
                            ? 'Planlandı'
                            : activity.status === 'completed'
                            ? 'Tamamlandı'
                            : 'Değerlendirme'}
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
