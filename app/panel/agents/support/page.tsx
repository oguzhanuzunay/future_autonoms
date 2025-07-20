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
  CheckCircle,
  Clock,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  Play,
  Settings,
  Star,
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
const supportData = [
  { day: 'Pzt', tickets: 45, resolved: 42, satisfaction: 4.7 },
  { day: 'Sal', tickets: 52, resolved: 48, satisfaction: 4.8 },
  { day: 'Çar', tickets: 48, resolved: 46, satisfaction: 4.6 },
  { day: 'Per', tickets: 61, resolved: 58, satisfaction: 4.9 },
  { day: 'Cum', tickets: 58, resolved: 55, satisfaction: 4.8 },
  { day: 'Cmt', tickets: 39, resolved: 37, satisfaction: 4.5 },
  { day: 'Paz', tickets: 31, resolved: 30, satisfaction: 4.7 },
];

const ticketTypeData = [
  { name: 'Teknik Destek', value: 45, color: '#10b981' },
  { name: 'Faturalama', value: 25, color: '#3b82f6' },
  { name: 'Genel Bilgi', value: 20, color: '#8b5cf6' },
  { name: 'Diğer', value: 10, color: '#f59e0b' },
];

const recentTickets = [
  {
    id: '#1234',
    customer: 'Ahmet Yılmaz',
    issue: 'Bağlantı sorunu',
    priority: 'high',
    time: '5 dakika önce',
    status: 'open',
  },
  {
    id: '#1235',
    customer: 'Zehra Kaya',
    issue: 'Fatura düzeltme',
    priority: 'medium',
    time: '12 dakika önce',
    status: 'resolved',
  },
  {
    id: '#1236',
    customer: 'Mehmet Demir',
    issue: 'Hesap ayarları',
    priority: 'low',
    time: '25 dakika önce',
    status: 'pending',
  },
  {
    id: '#1237',
    customer: 'Ayşe Güler',
    issue: 'Ürün iadesi',
    priority: 'high',
    time: '45 dakika önce',
    status: 'escalated',
  },
];

export default function SupportAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                DN.Support™ Agent
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli müşteri hizmetleri ve destek otomasyonu
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
                className="h-9 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Başlat
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Status Card */}
        <Card className="border-border/50 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    Agent Durumu
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                      Aktif
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">Son 24 saatte 156 ticket işlendi</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-blue-500">89.4%</div>
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
                    12.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Aktif Ticket</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={156} />
                  </div>
                </div>
                <Progress
                  value={75}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Çözülen</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={142} />
                  </div>
                </div>
                <Progress
                  value={91}
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
                    15.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Yanıt Süresi</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={1.2}
                      decimals={1}
                    />
                    dk
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
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 shrink-0" />
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    3.1%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Memnuniyet</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.8}
                      decimals={1}
                    />
                    /5
                  </div>
                </div>
                <Progress
                  value={96}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Support Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Haftalık Destek Performansı
              </CardTitle>
              <CardDescription className="text-sm">
                Son 7 günün ticket ve çözüm analizi
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={supportData}>
                  <defs>
                    <linearGradient
                      id="colorTickets"
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
                      id="colorResolved"
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
                    dataKey="tickets"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorTickets)"
                    name="Gelen Ticket"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="resolved"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorResolved)"
                    name="Çözülen"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Ticket Types Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Headphones className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                Ticket Türleri
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={ticketTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ticketTypeData.map((entry, index) => (
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
                {ticketTypeData.map((item) => (
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
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
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
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Yeni Ticket
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Çağrı Başlat
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                E-posta
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

        {/* Recent Tickets - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
              Son Ticket'lar
            </CardTitle>
            <CardDescription className="text-sm">Son müşteri destek talepleri</CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{ticket.id}</p>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            ticket.priority === 'high'
                              ? 'border-red-500/20 text-red-500 bg-red-500/10'
                              : ticket.priority === 'medium'
                              ? 'border-yellow-500/20 text-yellow-500 bg-yellow-500/10'
                              : 'border-blue-500/20 text-blue-500 bg-blue-500/10'
                          }`}
                        >
                          {ticket.priority === 'high'
                            ? 'Yüksek'
                            : ticket.priority === 'medium'
                            ? 'Orta'
                            : 'Düşük'}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{ticket.customer}</p>
                      <p className="text-sm truncate">{ticket.issue}</p>
                      <p className="text-xs text-muted-foreground">{ticket.time}</p>
                    </div>
                    <Badge
                      variant={ticket.status === 'resolved' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        ticket.status === 'resolved'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : ticket.status === 'open'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : ticket.status === 'pending'
                          ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          : 'bg-red-500/10 text-red-500 border-red-500/20'
                      }`}
                    >
                      {ticket.status === 'resolved'
                        ? 'Çözüldü'
                        : ticket.status === 'open'
                        ? 'Açık'
                        : ticket.status === 'pending'
                        ? 'Bekliyor'
                        : 'Yükseltildi'}
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
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>Konu</TableHead>
                    <TableHead>Öncelik</TableHead>
                    <TableHead>Zaman</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>{ticket.issue}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === 'high'
                              ? 'border-red-500/20 text-red-500 bg-red-500/10'
                              : ticket.priority === 'medium'
                              ? 'border-yellow-500/20 text-yellow-500 bg-yellow-500/10'
                              : 'border-blue-500/20 text-blue-500 bg-blue-500/10'
                          }
                        >
                          {ticket.priority === 'high'
                            ? 'Yüksek'
                            : ticket.priority === 'medium'
                            ? 'Orta'
                            : 'Düşük'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{ticket.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={ticket.status === 'resolved' ? 'default' : 'secondary'}
                          className={
                            ticket.status === 'resolved'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : ticket.status === 'open'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : ticket.status === 'pending'
                              ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                              : 'bg-red-500/10 text-red-500 border-red-500/20'
                          }
                        >
                          {ticket.status === 'resolved'
                            ? 'Çözüldü'
                            : ticket.status === 'open'
                            ? 'Açık'
                            : ticket.status === 'pending'
                            ? 'Bekliyor'
                            : 'Yükseltildi'}
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
