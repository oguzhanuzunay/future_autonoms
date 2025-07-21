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
  Book,
  Bookmark,
  Calendar,
  Edit,
  Eye,
  FileText,
  Filter,
  Plus,
  Search,
  Star,
  ThumbsUp,
  TrendingUp,
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

// Knowledge base data
const viewsData = [
  { day: 'Pzt', views: 145, searches: 89, articles: 12 },
  { day: 'Sal', views: 167, searches: 98, articles: 15 },
  { day: 'Çar', views: 189, searches: 112, articles: 18 },
  { day: 'Per', views: 234, searches: 134, articles: 22 },
  { day: 'Cum', views: 198, searches: 124, articles: 19 },
  { day: 'Cmt', views: 123, searches: 76, articles: 8 },
  { day: 'Paz', views: 98, searches: 54, articles: 6 },
];

const categoryData = [
  { name: 'Teknik', value: 35, color: '#3b82f6' },
  { name: 'Faturalama', value: 25, color: '#10b981' },
  { name: 'Genel', value: 20, color: '#8b5cf6' },
  { name: 'Özellikler', value: 20, color: '#f59e0b' },
];

const popularArticles = [
  {
    id: 'KB001',
    title: 'Hesap oluşturma ve ilk adımlar',
    category: 'Genel',
    views: 2847,
    likes: 134,
    shares: 23,
    author: 'Ahmet Yılmaz',
    updated: '2 gün önce',
    rating: 4.8,
  },
  {
    id: 'KB002',
    title: 'Fatura ve ödeme sorunları çözümü',
    category: 'Faturalama',
    views: 1923,
    likes: 98,
    shares: 15,
    author: 'Fatma Kaya',
    updated: '5 gün önce',
    rating: 4.6,
  },
  {
    id: 'KB003',
    title: 'API entegrasyonu rehberi',
    category: 'Teknik',
    views: 1654,
    likes: 87,
    shares: 34,
    author: 'Mehmet Demir',
    updated: '1 hafta önce',
    rating: 4.9,
  },
  {
    id: 'KB004',
    title: 'Yeni özellikler ve kullanım kılavuzu',
    category: 'Özellikler',
    views: 1432,
    likes: 76,
    shares: 19,
    author: 'Ayşe Özkan',
    updated: '3 gün önce',
    rating: 4.7,
  },
];

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Knowledge Base
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Bilgi bankası yönetimi ve makale performans analizi
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
                className="h-9 bg-indigo-600 hover:bg-indigo-700 text-xs sm:text-sm"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Yeni Makale
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
                  <Book className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 shrink-0" />
                  <Badge className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    12.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Toplam Makale</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={324} />
                  </div>
                </div>
                <Progress
                  value={81}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    18.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Haftalık Görüntüleme</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={12540}
                      separator=","
                    />
                  </div>
                </div>
                <Progress
                  value={92}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    8.9%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Arama Başarı Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={87.3}
                      decimals={1}
                    />
                    %
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
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 shrink-0" />
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    5.4%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Değerlendirme</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.6}
                      decimals={1}
                    />
                    /5
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
          {/* Views Trend Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                Haftalık Aktivite Trendi
              </CardTitle>
              <CardDescription className="text-sm">
                Görüntüleme, arama ve yeni makale sayıları
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={viewsData}>
                  <defs>
                    <linearGradient
                      id="colorViews"
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
                      id="colorSearches"
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
                      id="colorArticles"
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
                    dataKey="views"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                    name="Görüntüleme"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="searches"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorSearches)"
                    name="Arama"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="articles"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorArticles)"
                    name="Yeni Makale"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Book className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                Kategori Dağılımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
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
                {categoryData.map((item) => (
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
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
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
                Makale Ekle
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Makale Ara
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Yazar Ata
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Yayın Planla
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popular Articles */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
              Popüler Makaleler
            </CardTitle>
            <CardDescription className="text-sm">
              En çok görüntülenen ve beğenilen makaleler
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {popularArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{article.id}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {article.category}
                        </Badge>
                      </div>
                      <p className="text-sm truncate mb-1">{article.title}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{article.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {article.author} • {article.updated}
                      </p>
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
                    <TableHead>Makale ID</TableHead>
                    <TableHead>Başlık</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Görüntüleme</TableHead>
                    <TableHead>Beğeni</TableHead>
                    <TableHead>Paylaşım</TableHead>
                    <TableHead>Değerlendirme</TableHead>
                    <TableHead>Yazar</TableHead>
                    <TableHead>Güncellenme</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {popularArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.id}</TableCell>
                      <TableCell className="max-w-[200px] truncate">{article.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{article.category}</Badge>
                      </TableCell>
                      <TableCell>{article.views.toLocaleString()}</TableCell>
                      <TableCell>{article.likes}</TableCell>
                      <TableCell>{article.shares}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{article.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{article.author}</TableCell>
                      <TableCell className="text-muted-foreground">{article.updated}</TableCell>
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
                            <Bookmark className="h-3 w-3" />
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
