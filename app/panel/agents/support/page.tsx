'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Bot,
  CheckCircle2,
  Clock,
  Headphones,
  MessageSquare,
  Pause,
  Play,
  Settings,
  Star,
  TrendingDown,
  Users,
} from 'lucide-react';
import CountUp from 'react-countup';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const agentStats = [
  {
    title: 'Aktif Destek',
    value: 18,
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    title: 'Çözülen Sorun',
    value: 89,
    icon: CheckCircle2,
    color: 'text-green-500',
  },
  {
    title: 'Yanıt Süresi',
    value: 1.2,
    unit: 'dk',
    icon: Clock,
    color: 'text-purple-500',
  },
  {
    title: 'Memnuniyet',
    value: 4.8,
    unit: '/5',
    icon: Star,
    color: 'text-yellow-500',
  },
];

const recentTickets = [
  {
    id: '#1234',
    customer: 'Fatma Özkan',
    issue: 'Giriş sorunu',
    status: 'resolved',
    priority: 'high',
    time: '1 saat önce',
  },
  {
    id: '#1235',
    customer: 'Ali Vural',
    issue: 'Ödeme problemi',
    status: 'in-progress',
    priority: 'medium',
    time: '2 saat önce',
  },
  {
    id: '#1236',
    customer: 'Zehra Kaya',
    issue: 'Hesap ayarları',
    status: 'new',
    priority: 'low',
    time: '3 saat önce',
  },
];

const performanceData = [
  { day: 'Pzt', tickets: 45, resolved: 42 },
  { day: 'Sal', tickets: 52, resolved: 48 },
  { day: 'Çar', tickets: 38, resolved: 36 },
  { day: 'Per', tickets: 41, resolved: 39 },
  { day: 'Cum', tickets: 36, resolved: 34 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'resolved':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    case 'in-progress':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'new':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'resolved':
      return 'Çözüldü';
    case 'in-progress':
      return 'İşlemde';
    case 'new':
      return 'Yeni';
    default:
      return 'Bekliyor';
  }
};

const getPriorityText = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'Yüksek';
    case 'medium':
      return 'Orta';
    case 'low':
      return 'Düşük';
    default:
      return 'Normal';
  }
};

export default function SupportAgentPage() {
  return (
    <div className="space-y-6 p-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">DN.Support™ Agent</h1>
            <p className="text-muted-foreground">AI Müşteri Destek Temsilcisi</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Aktif</Badge>
          <Button
            size="sm"
            variant="outline"
          >
            <Settings className="h-4 w-4 mr-2" />
            Ayarlar
          </Button>
          <Button size="sm">
            <Pause className="h-4 w-4 mr-2" />
            Duraklat
          </Button>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid gap-4 md:grid-cols-4">
        {agentStats.map((stat) => (
          <Card
            key={stat.title}
            className="border-border/50 bg-card/50"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <div className="text-2xl font-bold">
                    <CountUp
                      end={stat.value}
                      decimals={stat.unit === 'dk' || stat.unit === '/5' ? 1 : 0}
                    />
                    {stat.unit}
                  </div>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ana İçerik */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Performans Grafiği */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-blue-500" />
              Haftalık Destek Performansı
            </CardTitle>
            <CardDescription>Son 5 günün ticket ve çözüm verileri</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer
              width="100%"
              height={200}
            >
              <AreaChart data={performanceData}>
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
                  fontSize={12}
                />
                <YAxis
                  stroke="#666"
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="tickets"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorTickets)"
                  name="Ticket"
                />
                <Area
                  type="monotone"
                  dataKey="resolved"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorResolved)"
                  name="Çözülen"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Hızlı İşlemler */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-purple-500" />
              Hızlı İşlemler
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Play className="h-4 w-4" />
              Yeni Ticket Oluştur
            </Button>
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Users className="h-4 w-4" />
              Müşteri Listesi
            </Button>
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Headphones className="h-4 w-4" />
              Canlı Destek
            </Button>
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Star className="h-4 w-4" />
              Bilgi Bankası
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Son Ticket'lar */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            Son Destek Talepleri
          </CardTitle>
          <CardDescription>En son gelen müşteri destek talepleri</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Müşteri</TableHead>
                <TableHead>Sorun</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead>Öncelik</TableHead>
                <TableHead>Zaman</TableHead>
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
                      className={getStatusColor(ticket.status)}
                    >
                      {getStatusText(ticket.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>{getPriorityText(ticket.priority)}</TableCell>
                  <TableCell className="text-muted-foreground">{ticket.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
