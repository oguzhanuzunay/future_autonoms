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
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CheckCircle,
  Clock,
  Edit,
  Eye,
  Filter,
  MessageSquare,
  Plus,
  Search,
  Star,
  Ticket,
  User,
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

// Ticket data
const ticketTrendData = [
  { day: 'Pzt', open: 15, resolved: 12, closed: 8 },
  { day: 'Sal', open: 18, resolved: 16, closed: 10 },
  { day: 'Çar', open: 12, resolved: 14, closed: 11 },
  { day: 'Per', open: 22, resolved: 18, closed: 14 },
  { day: 'Cum', open: 16, resolved: 15, closed: 12 },
  { day: 'Cmt', open: 8, resolved: 9, closed: 6 },
  { day: 'Paz', open: 5, resolved: 7, closed: 4 },
];

const ticketPriorityData = [
  { name: 'Yüksek', value: 25, color: '#ef4444' },
  { name: 'Orta', value: 45, color: '#f59e0b' },
  { name: 'Düşük', value: 30, color: '#10b981' },
];

const recentTickets = [
  {
    id: 'TKT-001',
    title: 'Giriş sorunu yaşıyorum',
    customer: 'Mehmet Kaya',
    priority: 'high',
    status: 'open',
    assignee: 'Ahmet Y.',
    created: '2 saat önce',
    category: 'Technical',
  },
  {
    id: 'TKT-002',
    title: 'Fatura ile ilgili soru',
    customer: 'Ayşe Demir',
    priority: 'medium',
    status: 'in_progress',
    assignee: 'Fatma K.',
    created: '4 saat önce',
    category: 'Billing',
  },
  {
    id: 'TKT-003',
    title: 'Özellik talebi',
    customer: 'Ali Yılmaz',
    priority: 'low',
    status: 'resolved',
    assignee: 'Mehmet D.',
    created: '1 gün önce',
    category: 'Feature Request',
  },
  {
    id: 'TKT-004',
    title: 'Hesap silme işlemi',
    customer: 'Zehra Özkan',
    priority: 'medium',
    status: 'closed',
    assignee: 'Ayşe Ö.',
    created: '2 gün önce',
    category: 'Account',
  },
];

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ticket Management
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Müşteri destek biletleri yönetimi ve takip sistemi
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
                className="h-9 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Yeni Ticket
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
                  <Ticket className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Aktif Ticket</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={187} />
                  </div>
                </div>
                <Progress
                  value={76}
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
                    12.5%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Çözüm Süresi</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.2}
                      decimals={1}
                    />
                    saat
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
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    15.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Çözüm Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={94.8}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={95}
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
                    6.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Memnuniyet Skoru</p>
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
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Ticket Trend Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Ticket className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Haftalık Ticket Trendi
              </CardTitle>
              <CardDescription className="text-sm">
                Açılan, çözülen ve kapatılan ticket sayıları
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={ticketTrendData}>
                  <defs>
                    <linearGradient
                      id="colorOpen"
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
                    <linearGradient
                      id="colorClosed"
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
                    dataKey="open"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorOpen)"
                    name="Açılan"
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
                  <Area
                    type="monotone"
                    dataKey="closed"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorClosed)"
                    name="Kapatılan"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Priority Distribution Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                Öncelik Dağılımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={ticketPriorityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ticketPriorityData.map((entry, index) => (
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
                {ticketPriorityData.map((item) => (
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
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
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
                Ticket Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Ticket Ara
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Atama Yap
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Toplu Yanıt
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Tickets - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Ticket className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
              Son Ticket'lar
            </CardTitle>
            <CardDescription className="text-sm">
              En son oluşturulan ve güncellenmiş destek biletleri
            </CardDescription>
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
                              ? 'border-orange-500/20 text-orange-500 bg-orange-500/10'
                              : 'border-green-500/20 text-green-500 bg-green-500/10'
                          }`}
                        >
                          {ticket.priority === 'high'
                            ? 'Yüksek'
                            : ticket.priority === 'medium'
                            ? 'Orta'
                            : 'Düşük'}
                        </Badge>
                      </div>
                      <p className="text-sm truncate mb-1">{ticket.title}</p>
                      <div className="flex gap-2 text-xs text-muted-foreground">
                        <span>{ticket.customer}</span>
                        <span>•</span>
                        <span>{ticket.assignee}</span>
                        <span>•</span>
                        <span>{ticket.created}</span>
                      </div>
                    </div>
                    <Badge
                      variant={ticket.status === 'closed' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        ticket.status === 'closed'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : ticket.status === 'resolved'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : ticket.status === 'in_progress'
                          ? 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                          : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                      }`}
                    >
                      {ticket.status === 'closed'
                        ? 'Kapatıldı'
                        : ticket.status === 'resolved'
                        ? 'Çözüldü'
                        : ticket.status === 'in_progress'
                        ? 'Devam Ediyor'
                        : 'Açık'}
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
                    <TableHead>Başlık</TableHead>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>Öncelik</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>Atanan</TableHead>
                    <TableHead>Oluşturma</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === 'high'
                              ? 'border-red-500/20 text-red-500 bg-red-500/10'
                              : ticket.priority === 'medium'
                              ? 'border-orange-500/20 text-orange-500 bg-orange-500/10'
                              : 'border-green-500/20 text-green-500 bg-green-500/10'
                          }
                        >
                          {ticket.priority === 'high'
                            ? 'Yüksek'
                            : ticket.priority === 'medium'
                            ? 'Orta'
                            : 'Düşük'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={ticket.status === 'closed' ? 'default' : 'secondary'}
                          className={
                            ticket.status === 'closed'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : ticket.status === 'resolved'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : ticket.status === 'in_progress'
                              ? 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                              : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                          }
                        >
                          {ticket.status === 'closed'
                            ? 'Kapatıldı'
                            : ticket.status === 'resolved'
                            ? 'Çözüldü'
                            : ticket.status === 'in_progress'
                            ? 'Devam Ediyor'
                            : 'Açık'}
                        </Badge>
                      </TableCell>
                      <TableCell>{ticket.assignee}</TableCell>
                      <TableCell className="text-muted-foreground">{ticket.created}</TableCell>
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
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                          >
                            <MessageSquare className="h-3 w-3" />
                          </Button>
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
