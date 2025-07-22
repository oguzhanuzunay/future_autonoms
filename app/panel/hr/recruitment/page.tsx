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
  Calendar,
  Clock,
  Edit,
  Eye,
  FileText,
  Filter,
  Plus,
  Search,
  Star,
  Target,
  TrendingUp,
  UserCheck,
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

// Recruitment data
const recruitmentData = [
  { month: 'Oca', applied: 45, interviewed: 18, hired: 6 },
  { month: 'Şub', applied: 52, interviewed: 22, hired: 8 },
  { month: 'Mar', applied: 38, interviewed: 16, hired: 5 },
  { month: 'Nis', applied: 67, interviewed: 28, hired: 10 },
  { month: 'May', applied: 59, interviewed: 25, hired: 9 },
  { month: 'Haz', applied: 71, interviewed: 31, hired: 12 },
];

const positionData = [
  { name: 'Geliştirici', value: 40, color: '#3b82f6' },
  { name: 'Satış', value: 25, color: '#10b981' },
  { name: 'Pazarlama', value: 20, color: '#8b5cf6' },
  { name: 'Destek', value: 15, color: '#f59e0b' },
];

const candidates = [
  {
    id: 'CND001',
    name: 'Emre Kaya',
    position: 'Senior Frontend Developer',
    experience: '5 yıl',
    status: 'interview_scheduled',
    score: 92,
    appliedDate: '2024-06-15',
    interviewDate: '2024-06-20',
    recruiter: 'Ahmet Yılmaz',
  },
  {
    id: 'CND002',
    name: 'Selin Özkan',
    position: 'Marketing Manager',
    experience: '3 yıl',
    status: 'under_review',
    score: 87,
    appliedDate: '2024-06-14',
    interviewDate: null,
    recruiter: 'Fatma Kaya',
  },
  {
    id: 'CND003',
    name: 'Burak Demir',
    position: 'Sales Representative',
    experience: '2 yıl',
    status: 'offer_sent',
    score: 89,
    appliedDate: '2024-06-10',
    interviewDate: '2024-06-18',
    recruiter: 'Mehmet Demir',
  },
  {
    id: 'CND004',
    name: 'Aylin Yılmaz',
    position: 'Customer Support Lead',
    experience: '4 yıl',
    status: 'hired',
    score: 95,
    appliedDate: '2024-05-28',
    interviewDate: '2024-06-05',
    recruiter: 'Ayşe Özkan',
  },
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Recruitment
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                İşe alım süreci yönetimi ve aday takip sistemi
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
                className="h-9 bg-violet-600 hover:bg-violet-700 text-xs sm:text-sm"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Aday Ekle
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
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 shrink-0" />
                  <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    23.5%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Aktif Başvuru</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={127} />
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
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    12.8%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bu Hafta Mülakat</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={23} />
                  </div>
                </div>
                <Progress
                  value={77}
                  className="h-1.5 sm:h-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:shadow-md transition-all duration-300">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <UserCheck className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 shrink-0" />
                  <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    18.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">İşe Alım Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={16.8}
                      decimals={1}
                    />
                    %
                  </div>
                </div>
                <Progress
                  value={17}
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
                    8.4%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Ortalama İşe Alım Süresi
                  </p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={18} />
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
          {/* Recruitment Funnel Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-violet-500" />6 Aylık İşe Alım
                Trendi
              </CardTitle>
              <CardDescription className="text-sm">
                Başvuru, mülakat ve işe alım sayıları
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={recruitmentData}>
                  <defs>
                    <linearGradient
                      id="colorApplied"
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
                      id="colorInterviewed"
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
                    <linearGradient
                      id="colorHired"
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
                    dataKey="applied"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorApplied)"
                    name="Başvuru"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="interviewed"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorInterviewed)"
                    name="Mülakat"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="hired"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorHired)"
                    name="İşe Alınan"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Position Distribution Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Pozisyon Dağılımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={positionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {positionData.map((entry, index) => (
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
                {positionData.map((item) => (
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
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-violet-500" />
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
                Aday Ekle
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Mülakat Planla
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Aday Ara
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Rapor Al
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Candidate List */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
              Aday Listesi
            </CardTitle>
            <CardDescription className="text-sm">
              Aktif başvuru sahipleri ve durumları
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{candidate.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs">{candidate.score}</span>
                        </div>
                      </div>
                      <p className="text-sm truncate mb-1">{candidate.position}</p>
                      <div className="flex gap-2 text-xs text-muted-foreground mb-1">
                        <span>Deneyim: {candidate.experience}</span>
                        <span>•</span>
                        <span>Başvuru: {candidate.appliedDate}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Sorumlu: {candidate.recruiter}
                      </p>
                    </div>
                    <Badge
                      variant={candidate.status === 'hired' ? 'default' : 'secondary'}
                      className={`text-xs shrink-0 ${
                        candidate.status === 'hired'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : candidate.status === 'offer_sent'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : candidate.status === 'interview_scheduled'
                          ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                          : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                      }`}
                    >
                      {candidate.status === 'hired'
                        ? 'İşe Alındı'
                        : candidate.status === 'offer_sent'
                        ? 'Teklif Gönderildi'
                        : candidate.status === 'interview_scheduled'
                        ? 'Mülakat Planlandı'
                        : 'İnceleme Altında'}
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
                    <TableHead>Aday ID</TableHead>
                    <TableHead>Ad Soyad</TableHead>
                    <TableHead>Pozisyon</TableHead>
                    <TableHead>Deneyim</TableHead>
                    <TableHead>Skor</TableHead>
                    <TableHead>Başvuru Tarihi</TableHead>
                    <TableHead>Mülakat Tarihi</TableHead>
                    <TableHead>Sorumlu</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidates.map((candidate) => (
                    <TableRow key={candidate.id}>
                      <TableCell className="font-medium">{candidate.id}</TableCell>
                      <TableCell>{candidate.name}</TableCell>
                      <TableCell>{candidate.position}</TableCell>
                      <TableCell>{candidate.experience}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{candidate.score}</span>
                        </div>
                      </TableCell>
                      <TableCell>{candidate.appliedDate}</TableCell>
                      <TableCell>{candidate.interviewDate || 'Planlanmadı'}</TableCell>
                      <TableCell>{candidate.recruiter}</TableCell>
                      <TableCell>
                        <Badge
                          variant={candidate.status === 'hired' ? 'default' : 'secondary'}
                          className={
                            candidate.status === 'hired'
                              ? 'bg-green-500/10 text-green-500 border-green-500/20'
                              : candidate.status === 'offer_sent'
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : candidate.status === 'interview_scheduled'
                              ? 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                              : 'bg-orange-500/10 text-orange-500 border-orange-500/20'
                          }
                        >
                          {candidate.status === 'hired'
                            ? 'İşe Alındı'
                            : candidate.status === 'offer_sent'
                            ? 'Teklif Gönderildi'
                            : candidate.status === 'interview_scheduled'
                            ? 'Mülakat Planlandı'
                            : 'İnceleme Altında'}
                        </Badge>
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
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0"
                          >
                            <Calendar className="h-3 w-3" />
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
