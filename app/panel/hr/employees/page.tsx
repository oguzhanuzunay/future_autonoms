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
  Building2,
  Calendar,
  Clock,
  Download,
  Edit,
  Eye,
  Filter,
  Mail,
  Search,
  Star,
  TrendingUp,
  UserPlus,
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

// Employee data
const employeeGrowthData = [
  { month: 'Oca', total: 68, new: 3, left: 1 },
  { month: 'Şub', total: 72, new: 5, left: 1 },
  { month: 'Mar', total: 75, new: 4, left: 1 },
  { month: 'Nis', total: 79, new: 6, left: 2 },
  { month: 'May', total: 83, new: 5, left: 1 },
  { month: 'Haz', total: 87, new: 4, left: 0 },
];

const departmentData = [
  { name: 'Geliştirme', value: 35, color: '#3b82f6' },
  { name: 'Satış', value: 25, color: '#10b981' },
  { name: 'Pazarlama', value: 20, color: '#8b5cf6' },
  { name: 'Destek', value: 12, color: '#f59e0b' },
  { name: 'İK', value: 8, color: '#ef4444' },
];

const employees = [
  {
    id: 'EMP001',
    name: 'Ahmet Yılmaz',
    email: 'ahmet@company.com',
    department: 'Geliştirme',
    position: 'Senior Developer',
    hireDate: '2023-01-15',
    performance: 92,
    status: 'active',
  },
  {
    id: 'EMP002',
    name: 'Fatma Kaya',
    email: 'fatma@company.com',
    department: 'Satış',
    position: 'Sales Manager',
    hireDate: '2022-11-08',
    performance: 89,
    status: 'active',
  },
  {
    id: 'EMP003',
    name: 'Mehmet Demir',
    email: 'mehmet@company.com',
    department: 'Pazarlama',
    position: 'Marketing Specialist',
    hireDate: '2023-03-22',
    performance: 85,
    status: 'active',
  },
  {
    id: 'EMP004',
    name: 'Ayşe Özkan',
    email: 'ayse@company.com',
    department: 'Destek',
    position: 'Support Lead',
    hireDate: '2022-09-12',
    performance: 94,
    status: 'active',
  },
];

export default function EmployeesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Employee Management
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Çalışan yönetimi, departman analizi ve performans takibi
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
                className="h-9 bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm"
              >
                <UserPlus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Çalışan Ekle
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
                    6.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Toplam Çalışan</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={87} />
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
                  <UserPlus className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 shrink-0" />
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                    <ArrowUp className="h-2 w-2 mr-1" />
                    33.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Bu Ay Yeni</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={4} />
                  </div>
                </div>
                <Progress
                  value={67}
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
                    4.1%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ortalama Performans</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp end={90} />%
                  </div>
                </div>
                <Progress
                  value={90}
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
                    8.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Devir Oranı</p>
                  <div className="text-lg sm:text-xl font-bold">
                    <CountUp
                      end={4.2}
                      decimals={1}
                    />
                    %
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
          {/* Employee Growth Chart */}
          <Card className="lg:col-span-2 border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />6 Aylık Çalışan
                Büyümesi
              </CardTitle>
              <CardDescription className="text-sm">
                Toplam çalışan, yeni işe alım ve ayrılan sayıları
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <AreaChart data={employeeGrowthData}>
                  <defs>
                    <linearGradient
                      id="colorTotal"
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
                      id="colorNew"
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
                      id="colorLeft"
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
                    dataKey="total"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                    name="Toplam"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="new"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorNew)"
                    name="Yeni"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="left"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#colorLeft)"
                    name="Ayrılan"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Department Distribution Chart */}
          <Card className="border-border/50 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                Departman Dağılımı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <ResponsiveContainer
                width="100%"
                height={180}
              >
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
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
                {departmentData.map((item) => (
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
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
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
                <UserPlus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Çalışan Ekle
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Çalışan Ara
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Rapor İndir
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 sm:h-9 text-xs sm:text-sm"
              >
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Performans Değerlendirme
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Employee List */}
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              Çalışan Listesi
            </CardTitle>
            <CardDescription className="text-sm">
              Aktif çalışanların detaylı bilgileri
            </CardDescription>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            {/* Mobile View */}
            <div className="space-y-3 sm:hidden">
              {employees.map((employee) => (
                <div
                  key={employee.id}
                  className="p-3 rounded-lg border border-border/50 bg-background/50"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{employee.name}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          {employee.department}
                        </Badge>
                      </div>
                      <p className="text-sm truncate mb-1">{employee.position}</p>
                      <div className="flex gap-2 text-xs text-muted-foreground mb-1">
                        <span>{employee.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>İşe Giriş: {employee.hireDate}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>Performans: {employee.performance}%</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs shrink-0">
                      Aktif
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
                    <TableHead>Çalışan ID</TableHead>
                    <TableHead>Ad Soyad</TableHead>
                    <TableHead>E-posta</TableHead>
                    <TableHead>Departman</TableHead>
                    <TableHead>Pozisyon</TableHead>
                    <TableHead>İşe Giriş</TableHead>
                    <TableHead>Performans</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>İşlem</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{employee.department}</Badge>
                      </TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.hireDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{employee.performance}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                          Aktif
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
                            <Mail className="h-3 w-3" />
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
