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
  Clock,
  FileText,
  MessageSquare,
  Play,
  Settings,
  Star,
  Target,
  ThumbsUp,
  Users,
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

const surveyData = [
  { day: 'Pzt', sent: 145, responses: 98, completed: 87 },
  { day: 'Sal', sent: 167, responses: 124, completed: 112 },
  { day: 'Çar', sent: 153, responses: 115, completed: 98 },
  { day: 'Per', sent: 189, responses: 142, completed: 128 },
  { day: 'Cum', sent: 172, responses: 129, completed: 115 },
  { day: 'Cmt', sent: 98, responses: 71, completed: 63 },
  { day: 'Paz', sent: 76, responses: 54, completed: 47 },
];

const satisfactionData = [
  { name: 'Çok Memnun', value: 45, color: '#10b981' },
  { name: 'Memnun', value: 35, color: '#3b82f6' },
  { name: 'Nötr', value: 12, color: '#f59e0b' },
  { name: 'Memnun Değil', value: 8, color: '#ef4444' },
];

const recentSurveys = [
  {
    id: 'SURV001',
    name: 'Müşteri Memnuniyet Anketi',
    type: 'satisfaction',
    responses: 245,
    completion: 87,
    score: 4.6,
    time: '1 saat önce',
    status: 'active',
  },
  {
    id: 'SURV002',
    name: 'Ürün Geri Bildirim',
    type: 'product',
    responses: 189,
    completion: 76,
    score: 4.2,
    time: '1 gün önce',
    status: 'completed',
  },
  {
    id: 'SURV003',
    name: 'Hizmet Kalitesi Değerlendirmesi',
    type: 'service',
    responses: 312,
    completion: 92,
    score: 4.8,
    time: '2 gün önce',
    status: 'analyzing',
  },
  {
    id: 'SURV004',
    name: 'Yeni Özellik Talebi',
    type: 'feature',
    responses: 98,
    completion: 68,
    score: 3.9,
    time: '3 gün önce',
    status: 'scheduled',
  },
];

export default function SurveyAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                DN.Survey™ Agent
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli anket yönetimi ve müşteri geri bildirim analizi
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
                className="h-9 bg-pink-600 hover:bg-pink-700 text-xs sm:text-sm"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Başlat
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Status Card */}
        <Card className="border-border/50 bg-gradient-to-r from-pink-500/10 to-purple-500/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    Agent Durumu
                    <Badge className="bg-pink-500/10 text-pink-500 border-pink-500/20 text-xs">
                      Aktif
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Son 24 saatte 844 anket yanıtı toplandı
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-pink-500">91.7%</div>
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
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    18.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Toplam Yanıt</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={844}
                      separator=","
                    />
                  </div>
                </div>
                <Progress
                  value={84}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    12.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Tamamlama Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={82.3}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={82}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 shrink-0" />
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    4.8%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Puan</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.4}
                      decimals={1}
                    />
                    /5
                  </div>
                </div>
                <Progress
                  value={88}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowDown className="h-2 w-2 mr-1" />
                    15.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Süre</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={3.2}
                      decimals={1}
                    />
                    dk
                  </div>
                </div>
                <Progress
                  value={76}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Survey Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                Haftalık Anket Performansı
              </CardTitle>
              <CardDescription className="text-sm">
                Gönderilen, yanıtlanan ve tamamlanan anketler
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={surveyData}>
                  <defs>
                    <linearGradient
                      id="colorSent"
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
                    <linearGradient
                      id="colorResponses"
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
                      id="colorCompleted"
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
                    dataKey="sent"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorSent)"
                    name="Gönderilen"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="responses"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorResponses)"
                    name="Yanıtlanan"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="completed"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorCompleted)"
                    name="Tamamlanan"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Satisfaction Distribution Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                Memnuniyet Dağılımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {satisfactionData.map((entry, index) => (
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
                {satisfactionData.map((item) => (
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
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
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
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Anket Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Hedef Seç
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Sonuçları Analiz Et
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Otomatik Gönder
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Surveys - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
              Son Anketler
            </CardTitle>
            <CardDescription className="text-sm">
              Son müşteri anketleri ve geri bildirimler
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentSurveys.map((survey) => (
                <div
                  key={survey.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{survey.id}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {survey.type}
                        </Badge>
                      </div>
                      <p className="text-sm truncate">{survey.name}</p>
                      <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                        <span>Yanıt: {survey.responses}</span>
                        <span>Tamamlama: {survey.completion}%</span>
                        <span>Puan: {survey.score}/5</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{survey.time}</p>
                    </div>
                    <Badge
                      variant={survey.status === 'completed' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        survey.status === 'completed'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : survey.status === 'active'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : survey.status === 'analyzing'
                          ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                          : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                      }`}
                    >
                      {survey.status === 'completed'
                        ? 'Tamamlandı'
                        : survey.status === 'active'
                        ? 'Aktif'
                        : survey.status === 'analyzing'
                        ? 'Analiz Ediliyor'
                        : 'Planlandı'}
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
                    <TableHead>Anket ID</TableHead>
                    <TableHead>Ad</TableHead>
                    <TableHead>Tür</TableHead>
                    <TableHead>Yanıt</TableHead>
                    <TableHead>Tamamlama</TableHead>
                    <TableHead>Puan</TableHead>
                    <TableHead>Zaman</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSurveys.map((survey) => (
                    <TableRow key={survey.id}>
                      <TableCell className="font-medium">{survey.id}</TableCell>
                      <TableCell>{survey.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{survey.type}</Badge>
                      </TableCell>
                      <TableCell>{survey.responses.toLocaleString()}</TableCell>
                      <TableCell className="text-green-600">{survey.completion}%</TableCell>
                      <TableCell className="text-yellow-600">{survey.score}/5</TableCell>
                      <TableCell className="text-muted-foreground">{survey.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={survey.status === 'completed' ? 'default' : 'secondary'}
                          className={
                            survey.status === 'completed'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : survey.status === 'active'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : survey.status === 'analyzing'
                              ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                              : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          }
                        >
                          {survey.status === 'completed'
                            ? 'Tamamlandı'
                            : survey.status === 'active'
                            ? 'Aktif'
                            : survey.status === 'analyzing'
                            ? 'Analiz Ediliyor'
                            : 'Planlandı'}
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
