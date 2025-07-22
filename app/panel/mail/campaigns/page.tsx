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
  Calendar,
  Copy,
  Edit,
  Eye,
  Filter,
  Mail,
  MousePointer,
  Plus,
  Send,
  TrendingUp,
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

// Campaign data
const campaignPerformance = [
  { day: 'Pzt', sent: 2450, opened: 1823, clicked: 456, unsubscribed: 12 },
  { day: 'Sal', sent: 2890, opened: 2145, clicked: 578, unsubscribed: 15 },
  { day: 'Çar', sent: 2670, opened: 1987, clicked: 523, unsubscribed: 8 },
  { day: 'Per', sent: 3120, opened: 2342, clicked: 672, unsubscribed: 18 },
  { day: 'Cum', sent: 2980, opened: 2205, clicked: 618, unsubscribed: 14 },
  { day: 'Cmt', sent: 1980, opened: 1456, clicked: 378, unsubscribed: 9 },
  { day: 'Paz', sent: 1560, opened: 1123, clicked: 289, unsubscribed: 6 },
];

const campaignTypes = [
  { name: 'Promosyon', value: 35, color: '#10b981' },
  { name: 'Haber Bülteni', value: 30, color: '#3b82f6' },
  { name: 'Ürün Duyurusu', value: 20, color: '#8b5cf6' },
  { name: 'Hoş Geldin', value: 15, color: '#f59e0b' },
];

const campaigns = [
  {
    id: 'CAM001',
    name: 'Yaz İndirimleri 2024',
    type: 'Promosyon',
    status: 'sent',
    sent: 12500,
    opened: 8750,
    clicked: 1563,
    unsubscribed: 45,
    openRate: 70.0,
    clickRate: 17.9,
    scheduledDate: '2024-06-15',
    sentDate: '2024-06-15',
    subject: "🌞 Yaz İndirimleri Başladı! %50'ye Varan İndirimler",
  },
  {
    id: 'CAM002',
    name: 'Haftalık Haber Bülteni',
    type: 'Haber Bülteni',
    status: 'scheduled',
    sent: null,
    opened: null,
    clicked: null,
    unsubscribed: null,
    openRate: null,
    clickRate: null,
    scheduledDate: '2024-06-22',
    sentDate: null,
    subject: 'Bu Hafta Neler Oldu? Haftalık Özet',
  },
  {
    id: 'CAM003',
    name: 'Yeni Özellik Duyurusu',
    type: 'Ürün Duyurusu',
    status: 'draft',
    sent: null,
    opened: null,
    clicked: null,
    unsubscribed: null,
    openRate: null,
    clickRate: null,
    scheduledDate: '2024-06-25',
    sentDate: null,
    subject: 'Yeni Özellikler Artık Burada!',
  },
  {
    id: 'CAM004',
    name: 'Hoş Geldin Serisi - 1',
    type: 'Hoş Geldin',
    status: 'active',
    sent: 450,
    opened: 342,
    clicked: 89,
    unsubscribed: 3,
    openRate: 76.0,
    clickRate: 26.0,
    scheduledDate: 'Otomatik',
    sentDate: 'Son 7 gün',
    subject: 'Hoş Geldiniz! İlk Adımlarınızı Atın',
  },
];

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Campaign Manager
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                E-posta kampanya yönetimi ve performans analizi
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-9 text-xs sm:text-sm"
              >
                <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Filtrele
              </Button>
              <Button
                size="sm"
                className="h-9 bg-cyan-600 hover:bg-cyan-700 text-xs sm:text-sm"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Kampanya Oluştur
              </Button>
            </div>
          </div>
        </div>

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
                  <p className="text-xs sm:text-sm text-muted-foreground">Bu Hafta Gönderilen</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={17650}
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
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Açılma</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={73.2}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={73}
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
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Tıklama</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={19.8}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={20}
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
                  <p className="text-xs sm:text-sm text-muted-foreground">Aktif Kampanya</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={12} />
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
          {/* Campaign Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500" />
                Haftalık Kampanya Performansı
              </CardTitle>
              <CardDescription className="text-sm">
                Gönderilen, açılan, tıklanan e-posta sayıları
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={campaignPerformance}>
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
                    data={campaignTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {campaignTypes.map((entry, index) => (
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
                {campaignTypes.map((item) => (
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

        {/* Quick Actions */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500" />
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
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Kampanya Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Copy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Şablon Kopyala
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Zamanlama
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                A/B Test
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Campaign List */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Kampanya Listesi
            </CardTitle>
            <CardDescription className="text-sm">
              Tüm e-posta kampanyaları ve performansları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{campaign.name}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {campaign.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate mb-2">
                        {campaign.subject}
                      </p>
                      {campaign.sent && (
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-1">
                          <span>Gönderilen: {campaign.sent.toLocaleString()}</span>
                          <span>Açılma: %{campaign.openRate}</span>
                          <span>Açılan: {campaign.opened.toLocaleString()}</span>
                          <span>Tıklama: %{campaign.clickRate}</span>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {campaign.sentDate
                          ? `Gönderildi: ${campaign.sentDate}`
                          : `Planlandı: ${campaign.scheduledDate}`}
                      </p>
                    </div>
                    <Badge
                      variant={campaign.status === 'sent' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        campaign.status === 'sent'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : campaign.status === 'active'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : campaign.status === 'scheduled'
                          ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                          : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                      }`}
                    >
                      {campaign.status === 'sent'
                        ? 'Gönderildi'
                        : campaign.status === 'active'
                        ? 'Aktif'
                        : campaign.status === 'scheduled'
                        ? 'Planlandı'
                        : 'Taslak'}
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
                    <TableHead>Kampanya</TableHead>
                    <TableHead>Tür</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>Gönderilen</TableHead>
                    <TableHead>Açılma</TableHead>
                    <TableHead>Tıklama</TableHead>
                    <TableHead>Tarih</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{campaign.name}</p>
                          <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                            {campaign.subject}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={campaign.status === 'sent' ? 'default' : 'secondary'}
                          className={
                            campaign.status === 'sent'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : campaign.status === 'active'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : campaign.status === 'scheduled'
                              ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                              : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                          }
                        >
                          {campaign.status === 'sent'
                            ? 'Gönderildi'
                            : campaign.status === 'active'
                            ? 'Aktif'
                            : campaign.status === 'scheduled'
                            ? 'Planlandı'
                            : 'Taslak'}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.sent ? campaign.sent.toLocaleString() : '-'}</TableCell>
                      <TableCell>
                        {campaign.openRate ? (
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3 text-green-500" />
                            <span>{campaign.openRate}%</span>
                          </div>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell>
                        {campaign.clickRate ? (
                          <div className="flex items-center gap-1">
                            <MousePointer className="h-3 w-3 text-purple-500" />
                            <span>{campaign.clickRate}%</span>
                          </div>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {campaign.sentDate || campaign.scheduledDate}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          {campaign.status === 'draft' && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-7 w-7 p-0"
                            >
                              <Send className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
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
