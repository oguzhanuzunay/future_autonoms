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
  Calculator,
  Calendar,
  DollarSign,
  Download,
  Eye,
  FileText,
  Filter,
  PieChart,
  Target,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import CountUp from 'react-countup';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart as RechartPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Financial reports data
const monthlyFinancials = [
  { month: 'Oca', revenue: 245000, expenses: 180000, profit: 65000, margin: 26.5 },
  { month: 'Şub', revenue: 287000, expenses: 195000, profit: 92000, margin: 32.1 },
  { month: 'Mar', revenue: 268000, expenses: 188000, profit: 80000, margin: 29.9 },
  { month: 'Nis', revenue: 312000, expenses: 205000, profit: 107000, margin: 34.3 },
  { month: 'May', revenue: 345000, expenses: 225000, profit: 120000, margin: 34.8 },
  { month: 'Haz', revenue: 398000, expenses: 248000, profit: 150000, margin: 37.7 },
];

const expenseCategories = [
  { name: 'Operasyonel', value: 45, amount: 111600, color: '#3b82f6' },
  { name: 'Pazarlama', value: 25, amount: 62000, color: '#10b981' },
  { name: 'İK', value: 15, amount: 37200, color: '#8b5cf6' },
  { name: 'Teknoloji', value: 10, amount: 24800, color: '#f59e0b' },
  { name: 'Diğer', value: 5, amount: 12400, color: '#ef4444' },
];

const quarterlyComparison = [
  { quarter: 'Q1 2023', revenue: 800000, profit: 240000 },
  { quarter: 'Q2 2023', revenue: 925000, profit: 295000 },
  { quarter: 'Q3 2023', revenue: 1050000, profit: 336000 },
  { quarter: 'Q4 2023', revenue: 1180000, profit: 390000 },
  { quarter: 'Q1 2024', revenue: 1285000, profit: 425000 },
  { quarter: 'Q2 2024', revenue: 1355000, profit: 477000 },
];

const recentReports = [
  {
    id: 'RPT001',
    name: 'Aylık Mali Durum Raporu',
    type: 'Aylık',
    period: 'Haziran 2024',
    generatedDate: '2024-07-01',
    status: 'ready',
    size: '2.4 MB',
  },
  {
    id: 'RPT002',
    name: 'Çeyreklik Kar-Zarar Raporu',
    type: 'Çeyreklik',
    period: 'Q2 2024',
    generatedDate: '2024-06-30',
    status: 'ready',
    size: '1.8 MB',
  },
  {
    id: 'RPT003',
    name: 'Gider Analizi Raporu',
    type: 'Haftalık',
    period: 'Hafta 26',
    generatedDate: '2024-06-28',
    status: 'generating',
    size: '-',
  },
  {
    id: 'RPT004',
    name: 'Yıllık Bütçe Karşılaştırması',
    type: 'Yıllık',
    period: '2024',
    generatedDate: '2024-06-25',
    status: 'ready',
    size: '4.1 MB',
  },
];

export default function FinancialReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Financial Reports
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Mali raporlar, trend analizi ve finansal performans
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
                className="h-9 bg-amber-600 hover:bg-amber-700 text-xs sm:text-sm"
              >
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Rapor Oluştur
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
                  <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    15.4%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bu Ay Gelir</p>
                  <div className="text-lg sm:text-xl font-bold">
                    ₺
                    <CountUp
                      end={398000}
                      separator=","
                    />
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
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Kar Marjı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={37.7}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={38}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    25.0%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Net Kar</p>
                  <div className="text-lg sm:text-xl font-bold">
                    ₺
                    <CountUp
                      end={150000}
                      separator=","
                    />
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
                  <Wallet className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 shrink-0" />
                  <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    10.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Toplam Gider</p>
                  <div className="text-lg sm:text-xl font-bold">
                    ₺
                    <CountUp
                      end={248000}
                      separator=","
                    />
                  </div>
                </div>
                <Progress
                  value={62}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Monthly Financial Trend */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />6 Aylık Mali
                Performans
              </CardTitle>
              <CardDescription className="text-sm">
                Gelir, gider ve kar trend analizi
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={monthlyFinancials}>
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
                      id="colorProfit"
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
                    dataKey="month"
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
                    dataKey="profit"
                    stroke="#f59e0b"
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                    name="Kar"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Expense Categories Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Gider Kategorileri
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <RechartPieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseCategories.map((entry, index) => (
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
                {expenseCategories.map((item) => (
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
                    <span className="font-medium shrink-0">₺{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quarterly Comparison */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
              Çeyreklik Karşılaştırma
            </CardTitle>
            <CardDescription className="text-sm">
              Son 6 çeyrek gelir ve kar karşılaştırması
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {quarterlyComparison.map((quarter, index) => (
                <div
                  key={quarter.quarter}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{quarter.quarter}</p>
                      <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                        <span>Gelir: ₺{quarter.revenue.toLocaleString()}</span>
                        <span>Kar: ₺{quarter.profit.toLocaleString()}</span>
                      </div>
                    </div>
                    <Badge
                      className={`text-xs shrink-0 ${
                        index >= quarterlyComparison.length - 2
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                      }`}
                    >
                      {((quarter.profit / quarter.revenue) * 100).toFixed(1)}%
                    </Badge>
                  </div>
                  <Progress
                    value={(quarter.profit / quarter.revenue) * 100}
                    className="h-1.5"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Chart */}
            <div className="hidden sm:block">
              <ResponsiveContainer
                width="100%"
                height={200}
              >
                <BarChart data={quarterlyComparison}>
                  <XAxis
                    dataKey="quarter"
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
                  <Bar
                    dataKey="revenue"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    name="Gelir"
                  />
                  <Bar
                    dataKey="profit"
                    fill="#f59e0b"
                    radius={[4, 4, 0, 0]}
                    name="Kar"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
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
                Rapor Oluştur
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Excel İndir
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Tarih Seç
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
              Son Raporlar
            </CardTitle>
            <CardDescription className="text-sm">
              Oluşturulan mali raporlar ve durumları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {recentReports.map((report) => (
                <div
                  key={report.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{report.id}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {report.type}
                        </Badge>
                      </div>
                      <p className="text-sm truncate mb-1">{report.name}</p>
                      <div className="flex gap-2 text-xs text-muted-foreground">
                        <span>{report.period}</span>
                        <span>•</span>
                        <span>{report.generatedDate}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <Badge
                      variant={report.status === 'ready' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        report.status === 'ready'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                      }`}
                    >
                      {report.status === 'ready' ? 'Hazır' : 'Oluşturuluyor'}
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
                    <TableHead>Rapor ID</TableHead>
                    <TableHead>Ad</TableHead>
                    <TableHead>Tür</TableHead>
                    <TableHead>Dönem</TableHead>
                    <TableHead>Oluşturma Tarihi</TableHead>
                    <TableHead>Boyut</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{report.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.type}</Badge>
                      </TableCell>
                      <TableCell>{report.period}</TableCell>
                      <TableCell>{report.generatedDate}</TableCell>
                      <TableCell>{report.size}</TableCell>
                      <TableCell>
                        <Badge
                          variant={report.status === 'ready' ? 'default' : 'secondary'}
                          className={
                            report.status === 'ready'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                          }
                        >
                          {report.status === 'ready' ? 'Hazır' : 'Oluşturuluyor'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                            disabled={report.status !== 'ready'}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                            disabled={report.status !== 'ready'}
                          >
                            <Download className="h-3 w-3" />
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
