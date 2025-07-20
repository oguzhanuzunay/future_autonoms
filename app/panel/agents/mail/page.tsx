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
  ArrowUp,
  BarChart3,
  Bot,
  Eye,
  Inbox,
  Mail,
  MousePointer,
  Play,
  Send,
  Settings,
  Star,
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

const emailData = [
  { day: 'Pzt', sent: 245, opened: 182, clicked: 47 },
  { day: 'Sal', sent: 289, opened: 216, clicked: 58 },
  { day: 'Çar', sent: 267, opened: 198, clicked: 52 },
  { day: 'Per', sent: 312, opened: 234, clicked: 67 },
  { day: 'Cum', sent: 298, opened: 221, clicked: 62 },
  { day: 'Cmt', sent: 198, opened: 145, clicked: 38 },
  { day: 'Paz', sent: 156, opened: 112, clicked: 29 },
];

const campaignTypeData = [
  { name: 'Pazarlama', value: 45, color: '#10b981' },
  { name: 'Haber Bülteni', value: 30, color: '#3b82f6' },
  { name: 'Müşteri Desteği', value: 15, color: '#8b5cf6' },
  { name: 'Diğer', value: 10, color: '#f59e0b' },
];

const recentCampaigns = [
  {
    id: 'CAMP001',
    name: 'Yaz İndirimleri',
    type: 'marketing',
    sent: 1250,
    opened: 875,
    clicked: 156,
    time: '2 saat önce',
    status: 'active',
  },
  {
    id: 'CAMP002',
    name: 'Ürün Güncellemesi',
    type: 'newsletter',
    sent: 980,
    opened: 721,
    clicked: 98,
    time: '1 gün önce',
    status: 'completed',
  },
  {
    id: 'CAMP003',
    name: 'Müşteri Anketi',
    type: 'support',
    sent: 450,
    opened: 298,
    clicked: 67,
    time: '2 gün önce',
    status: 'scheduled',
  },
  {
    id: 'CAMP004',
    name: 'Hoş Geldin Serisi',
    type: 'onboarding',
    sent: 89,
    opened: 67,
    clicked: 23,
    time: '3 gün önce',
    status: 'completed',
  },
];

export default function MailAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                DN.Mail™ Agent
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli e-posta pazarlaması ve müşteri iletişimi
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
                className="h-9 bg-cyan-600 hover:bg-cyan-700 text-xs sm:text-sm"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Başlat
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Status Card */}
        <Card className="border-border/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    Agent Durumu
                    <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20 text-xs">
                      Aktif
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Son 24 saatte 1,765 e-posta gönderildi
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500">94.8%</div>
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
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    15.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Gönderilen E-posta</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={1765}
                      separator=","
                    />
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
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Açılma Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={74.2}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={74}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <MousePointer className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    12.1%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Tıklama Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={21.3}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={21}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0" />
                  <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    6.8%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Aktif Abone</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={12400}
                      separator=","
                    />
                  </div>
                </div>
                <Progress
                  value={82}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Email Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500" />
                Haftalık E-posta Performansı
              </CardTitle>
              <CardDescription className="text-sm">
                Gönderilen, açılan ve tıklanan e-postalar
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={emailData}>
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
                      id="colorOpened"
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
                      id="colorClicked"
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
                    dataKey="opened"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorOpened)"
                    name="Açılan"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="clicked"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorClicked)"
                    name="Tıklanan"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Campaign Types Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                Kampanya Türleri
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={campaignTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {campaignTypeData.map((entry, index) => (
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
                {campaignTypeData.map((item) => (
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
              <Send className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500" />
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
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Kampanya Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Liste Yönet
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Analiz Görüntüle
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Template Seç
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Campaigns - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Inbox className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Son Kampanyalar
            </CardTitle>
            <CardDescription className="text-sm">
              Son e-posta pazarlama kampanyaları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{campaign.id}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {campaign.type}
                        </Badge>
                      </div>
                      <p className="text-sm truncate">{campaign.name}</p>
                      <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                        <span>Gönderilen: {campaign.sent}</span>
                        <span>Açılan: {campaign.opened}</span>
                        <span>Tıklanan: {campaign.clicked}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{campaign.time}</p>
                    </div>
                    <Badge
                      variant={campaign.status === 'completed' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        campaign.status === 'completed'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : campaign.status === 'active'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                      }`}
                    >
                      {campaign.status === 'completed'
                        ? 'Tamamlandı'
                        : campaign.status === 'active'
                        ? 'Aktif'
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
                    <TableHead>Kampanya ID</TableHead>
                    <TableHead>Ad</TableHead>
                    <TableHead>Tür</TableHead>
                    <TableHead>Gönderilen</TableHead>
                    <TableHead>Açılan</TableHead>
                    <TableHead>Tıklanan</TableHead>
                    <TableHead>Zaman</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.id}</TableCell>
                      <TableCell>{campaign.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </TableCell>
                      <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                      <TableCell className="text-green-600">
                        {campaign.opened.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-purple-600">
                        {campaign.clicked.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-muted-foreground">{campaign.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={campaign.status === 'completed' ? 'default' : 'secondary'}
                          className={
                            campaign.status === 'completed'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : campaign.status === 'active'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          }
                        >
                          {campaign.status === 'completed'
                            ? 'Tamamlandı'
                            : campaign.status === 'active'
                            ? 'Aktif'
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
