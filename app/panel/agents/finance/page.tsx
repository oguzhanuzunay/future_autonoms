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
  Calculator,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  PieChart,
  Play,
  Settings,
  Target,
  Wallet,
} from 'lucide-react';
import CountUp from 'react-countup';
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart as RechartPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Performance data
const financeData = [
  { day: 'Pzt', revenue: 45000, expenses: 32000, savings: 13000 },
  { day: 'Sal', revenue: 52000, expenses: 35000, savings: 17000 },
  { day: 'Çar', revenue: 48000, expenses: 33000, savings: 15000 },
  { day: 'Per', revenue: 61000, expenses: 38000, savings: 23000 },
  { day: 'Cum', revenue: 58000, expenses: 36000, savings: 22000 },
  { day: 'Cmt', revenue: 39000, expenses: 28000, savings: 11000 },
  { day: 'Paz', revenue: 31000, expenses: 24000, savings: 7000 },
];

const expenseBreakdownData = [
  { name: 'Operasyonel', value: 45, color: '#10b981' },
  { name: 'Pazarlama', value: 25, color: '#3b82f6' },
  { name: 'İK', value: 15, color: '#8b5cf6' },
  { name: 'Diğer', value: 15, color: '#f59e0b' },
];

const recentTransactions = [
  {
    id: 'TXN001',
    description: 'SaaS Abonelik Ücreti',
    amount: -2500,
    category: 'Operasyonel',
    time: '2 saat önce',
    status: 'approved',
  },
  {
    id: 'TXN002',
    description: 'Müşteri Ödemesi',
    amount: 15000,
    category: 'Gelir',
    time: '4 saat önce',
    status: 'completed',
  },
  {
    id: 'TXN003',
    description: 'Ofis Kira Ödemesi',
    amount: -8000,
    category: 'Operasyonel',
    time: '1 gün önce',
    status: 'pending',
  },
  {
    id: 'TXN004',
    description: 'Reklam Harcaması',
    amount: -3200,
    category: 'Pazarlama',
    time: '2 gün önce',
    status: 'approved',
  },
];

export default function FinanceAgentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                DN.Finance™ Agent
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                AI destekli finans yönetimi ve maliyet optimizasyonu
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
                className="h-9 bg-yellow-600 hover:bg-yellow-700 text-xs sm:text-sm"
              >
                <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Başlat
              </Button>
            </div>
          </div>
        </div>

        {/* Agent Status Card */}
        <Card className="border-border/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
                  <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                    Agent Durumu
                    <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                      Aktif
                    </Badge>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Son 24 saatte ₺184,500 tasarruf sağlandı
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-500">87.5%</div>
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
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    18.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Toplam Tasarruf</p>
                  <div className="text-lg sm:text-xl font-bold">
                    ₺
                    <CountUp
                      end={284500}
                      separator=","
                    />
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
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    5.2%
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
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    0.8%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Doğruluk Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={99.2}
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

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0" />
                  <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs">
                    <ArrowDown className="h-2 w-2 mr-1" />
                    25.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">İşlem Süresi</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={2.4}
                      decimals={1}
                    />
                    dk
                  </div>
                </div>
                <Progress
                  value={92}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Financial Performance Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                Haftalık Finansal Performans
              </CardTitle>
              <CardDescription className="text-sm">
                Gelir, gider ve tasarruf analizi
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={financeData}>
                  <defs>
                    <linearGradient
                      id="colorRevenue"
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
                      id="colorExpenses"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#ef4444"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#ef4444"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient
                      id="colorSavings"
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
                    dataKey="revenue"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    name="Gelir"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#colorExpenses)"
                    name="Gider"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#f59e0b"
                    fillOpacity={1}
                    fill="url(#colorSavings)"
                    name="Tasarruf"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expense Breakdown Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                Gider Dağılımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <RechartPieChart>
                  <Pie
                    data={expenseBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseBreakdownData.map((entry, index) => (
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
                </RechartPieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-3">
                {expenseBreakdownData.map((item) => (
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
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
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
                Fatura Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Wallet className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Ödeme Yap
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
                <Calculator className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Bütçe Planla
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions - Mobile Optimized */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Son İşlemler
            </CardTitle>
            <CardDescription className="text-sm">Son finansal hareketler</CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{transaction.id}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {transaction.category}
                        </Badge>
                      </div>
                      <p className="text-sm truncate">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-bold ${
                          transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {transaction.amount > 0 ? '+' : ''}₺
                        {Math.abs(transaction.amount).toLocaleString()}
                      </div>
                      <Badge
                        variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                        className={`text-xs mt-1 ${
                          transaction.status === 'completed'
                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                            : transaction.status === 'approved'
                            ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                            : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        }`}
                      >
                        {transaction.status === 'completed'
                          ? 'Tamamlandı'
                          : transaction.status === 'approved'
                          ? 'Onaylandı'
                          : 'Bekliyor'}
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
                    <TableHead>İşlem ID</TableHead>
                    <TableHead>Açıklama</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Tutar</TableHead>
                    <TableHead>Zaman</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`font-medium ${
                            transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {transaction.amount > 0 ? '+' : ''}₺
                          {Math.abs(transaction.amount).toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{transaction.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                          className={
                            transaction.status === 'completed'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : transaction.status === 'approved'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                          }
                        >
                          {transaction.status === 'completed'
                            ? 'Tamamlandı'
                            : transaction.status === 'approved'
                            ? 'Onaylandı'
                            : 'Bekliyor'}
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
