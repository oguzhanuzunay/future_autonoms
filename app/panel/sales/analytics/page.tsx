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
  Award,
  BarChart3,
  Calendar,
  Clock,
  DollarSign,
  Download,
  Filter,
  PieChart,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
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

// Sales analytics data
const salesData = [
  { month: 'Oca', revenue: 285000, deals: 24, target: 300000 },
  { month: 'Şub', revenue: 312000, deals: 28, target: 320000 },
  { month: 'Mar', revenue: 298000, deals: 26, target: 310000 },
  { month: 'Nis', revenue: 345000, deals: 31, target: 330000 },
  { month: 'May', revenue: 367000, deals: 33, target: 350000 },
  { month: 'Haz', revenue: 389000, deals: 35, target: 370000 },
];

const salesByRegionData = [
  { name: 'İstanbul', value: 45, color: '#10b981' },
  { name: 'Ankara', value: 25, color: '#3b82f6' },
  { name: 'İzmir', value: 18, color: '#8b5cf6' },
  { name: 'Diğer', value: 12, color: '#f59e0b' },
];

const topSalesTeam = [
  { id: 1, name: 'Ahmet Yılmaz', revenue: 125000, deals: 12, conversion: 87, growth: 23 },
  { id: 2, name: 'Fatma Kaya', revenue: 98000, deals: 9, conversion: 91, growth: 18 },
  { id: 3, name: 'Mehmet Demir', revenue: 87000, deals: 8, conversion: 83, growth: 15 },
  { id: 4, name: 'Ayşe Özkan', revenue: 76000, deals: 7, conversion: 79, growth: 12 },
];

const productPerformance = [
  { product: 'Premium Plan', revenue: 156000, growth: 25, deals: 18 },
  { product: 'Business Plan', revenue: 134000, growth: 18, deals: 24 },
  { product: 'Starter Plan', revenue: 89000, growth: 12, deals: 31 },
  { product: 'Enterprise', revenue: 234000, growth: 32, deals: 8 },
];

export default function SalesAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                Sales Analytics
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Satış performansı analizi ve trend takibi
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
                className="h-9 bg-emerald-600 hover:bg-emerald-700 text-xs sm:text-sm"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Rapor İndir
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
                    18.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Toplam Satış</p>
                  <div className="text-lg sm:text-xl font-bold">
                    ₺
                    <CountUp
                      end={2156000}
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
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    12.1%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Hedef Gerçekleşme</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={105.2}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={105}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 shrink-0" />
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Anlaşma</p>
                  <div className="text-lg sm:text-xl font-bold">
                    ₺
                    <CountUp
                      end={61600}
                      separator=","
                    />
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
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowDown className="h-2 w-2 mr-1" />
                    15.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Satış Döngüsü</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={28} />
                    gün
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
          {/* Sales Trend Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />6 Aylık Satış
                Trendi
              </CardTitle>
              <CardDescription className="text-sm">
                Aylık gelir ve hedef karşılaştırması
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={200}
              >
                <AreaChart data={salesData}>
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
                      id="colorTarget"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#3b82f6"
                        stopOpacity={0.6}
                      />
                      <stop
                        offset="95%"
                        stopColor="#3b82f6"
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
                    dataKey="target"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorTarget)"
                    name="Hedef"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    name="Gerçekleşen"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sales by Region Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Bölgesel Satışlar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <RechartPieChart>
                  <Pie
                    data={salesByRegionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {salesByRegionData.map((entry, index) => (
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
                {salesByRegionData.map((item) => (
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

        {/* Product Performance */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
              Ürün Performansı
            </CardTitle>
            <CardDescription className="text-sm">Ürün bazında satış analizi</CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {productPerformance.map((product, index) => (
                <div
                  key={product.product}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.product}</p>
                      <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                        <span>₺{product.revenue.toLocaleString()}</span>
                        <span>{product.deals} anlaşma</span>
                      </div>
                    </div>
                    <Badge
                      className={`text-xs shrink-0 ${
                        product.growth > 20
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : product.growth > 10
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                      }`}
                    >
                      <ArrowUp className="h-2 w-2 mr-1" />
                      {product.growth}%
                    </Badge>
                  </div>
                  <Progress
                    value={product.growth * 2}
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
                <BarChart data={productPerformance}>
                  <XAxis
                    dataKey="product"
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
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Sales Team */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
              En İyi Satış Temsilcileri
            </CardTitle>
            <CardDescription className="text-sm">
              Bu ay en çok satış yapan temsilciler
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {topSalesTeam.map((member, index) => (
                <div
                  key={member.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0
                            ? 'bg-yellow-500 text-white'
                            : index === 1
                            ? 'bg-gray-400 text-white'
                            : index === 2
                            ? 'bg-orange-600 text-white'
                            : 'bg-blue-500 text-white'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{member.name}</p>
                        <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                          <span>₺{member.revenue.toLocaleString()}</span>
                          <span>{member.deals} anlaşma</span>
                          <span>%{member.conversion} dönüşüm</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs shrink-0">
                      <ArrowUp className="h-2 w-2 mr-1" />
                      {member.growth}%
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
                    <TableHead>Sıra</TableHead>
                    <TableHead>Temsilci</TableHead>
                    <TableHead>Satış</TableHead>
                    <TableHead>Anlaşma</TableHead>
                    <TableHead>Dönüşüm</TableHead>
                    <TableHead>Büyüme</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topSalesTeam.map((member, index) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            index === 0
                              ? 'bg-yellow-500 text-white'
                              : index === 1
                              ? 'bg-gray-400 text-white'
                              : index === 2
                              ? 'bg-orange-600 text-white'
                              : 'bg-blue-500 text-white'
                          }`}
                        >
                          {index + 1}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>₺{member.revenue.toLocaleString()}</TableCell>
                      <TableCell>{member.deals}</TableCell>
                      <TableCell>{member.conversion}%</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                          <ArrowUp className="h-2 w-2 mr-1" />
                          {member.growth}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
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
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Takım Karşılaştır
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Hedef Belirle
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
