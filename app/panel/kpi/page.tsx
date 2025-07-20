'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { useState } from 'react';
import CountUp from 'react-countup';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

// Basitleştirilmiş KPI kategorileri
const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'sales', name: 'Satış' },
  { id: 'support', name: 'Destek' },
  { id: 'hr', name: 'İK' },
  { id: 'finance', name: 'Finans' },
];

// Basitleştirilmiş KPI listesi
const kpiList = [
  {
    id: 1,
    category: 'sales',
    name: 'Aylık Satış',
    value: 485000,
    target: 500000,
    unit: '₺',
    change: 12.8,
    status: 'good',
    chartData: [
      { day: 'Pzt', value: 450000 },
      { day: 'Sal', value: 470000 },
      { day: 'Çar', value: 465000 },
      { day: 'Per', value: 480000 },
      { day: 'Cum', value: 485000 },
    ],
  },
  {
    id: 2,
    category: 'sales',
    name: 'Dönüşüm Oranı',
    value: 23.4,
    target: 25,
    unit: '%',
    change: 2.3,
    status: 'warning',
    chartData: [
      { day: 'Pzt', value: 21.2 },
      { day: 'Sal', value: 22.1 },
      { day: 'Çar', value: 22.8 },
      { day: 'Per', value: 23.1 },
      { day: 'Cum', value: 23.4 },
    ],
  },
  {
    id: 3,
    category: 'support',
    name: 'Yanıt Süresi',
    value: 1.2,
    target: 2,
    unit: 'dk',
    change: -15.3,
    status: 'good',
    chartData: [
      { day: 'Pzt', value: 2.5 },
      { day: 'Sal', value: 2.1 },
      { day: 'Çar', value: 1.8 },
      { day: 'Per', value: 1.5 },
      { day: 'Cum', value: 1.2 },
    ],
  },
  {
    id: 4,
    category: 'support',
    name: 'Müşteri Memnuniyeti',
    value: 4.8,
    target: 5,
    unit: '/5',
    change: 0.3,
    status: 'good',
    chartData: [
      { day: 'Pzt', value: 4.5 },
      { day: 'Sal', value: 4.6 },
      { day: 'Çar', value: 4.7 },
      { day: 'Per', value: 4.7 },
      { day: 'Cum', value: 4.8 },
    ],
  },
  {
    id: 5,
    category: 'hr',
    name: 'İşe Alım Başarısı',
    value: 92.1,
    target: 95,
    unit: '%',
    change: 5.4,
    status: 'good',
    chartData: [
      { day: 'Pzt', value: 85.2 },
      { day: 'Sal', value: 87.8 },
      { day: 'Çar', value: 89.1 },
      { day: 'Per', value: 90.5 },
      { day: 'Cum', value: 92.1 },
    ],
  },
  {
    id: 6,
    category: 'finance',
    name: 'Maliyet Tasarrufu',
    value: 284500,
    target: 300000,
    unit: '₺',
    change: 18.3,
    status: 'warning',
    chartData: [
      { day: 'Pzt', value: 250000 },
      { day: 'Sal', value: 265000 },
      { day: 'Çar', value: 272000 },
      { day: 'Per', value: 280000 },
      { day: 'Cum', value: 284500 },
    ],
  },
];

export default function KPITrackerPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('7d');

  const filteredKPIs =
    selectedCategory === 'all'
      ? kpiList
      : kpiList.filter((kpi) => kpi.category === selectedCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'bad':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle2 className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'bad':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-[1200px] mx-auto">
      {/* Basit Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">KPI Takibi</h1>
          <p className="text-muted-foreground">Performans göstergelerinizi izleyin</p>
        </div>

        <div className="flex gap-3">
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <SelectTrigger className="w-[120px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">7 gün</SelectItem>
              <SelectItem value="30d">30 gün</SelectItem>
              <SelectItem value="90d">90 gün</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Basit Kategori Seçimi */}
      <Card className="border-border/50 bg-card/50">
        <CardContent className="p-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-blue-600 hover:bg-blue-700' : ''}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Basit KPI Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredKPIs.map((kpi) => (
          <Card
            key={kpi.id}
            className="border-border/50 bg-card/50 hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{kpi.name}</CardTitle>
                {getStatusIcon(kpi.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Değer ve Hedef */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl font-bold">
                    {kpi.unit === '₺' && '₺'}
                    <CountUp
                      end={kpi.value}
                      decimals={kpi.unit === '%' || kpi.unit === 'dk' || kpi.unit === '/5' ? 1 : 0}
                      separator=","
                    />
                    {kpi.unit && kpi.unit !== '₺' && kpi.unit}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Hedef: {kpi.unit === '₺' && '₺'}
                    {kpi.target.toLocaleString()}
                    {kpi.unit !== '₺' && kpi.unit}
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={getStatusColor(kpi.status)}
                >
                  {kpi.change > 0 ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(kpi.change)}%
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <Progress
                  value={(kpi.value / kpi.target) * 100}
                  className="h-2"
                />
                <div className="text-xs text-muted-foreground text-right">
                  {Math.round((kpi.value / kpi.target) * 100)}% tamamlandı
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-16">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <AreaChart data={kpi.chartData}>
                    <defs>
                      <linearGradient
                        id={`gradient-${kpi.id}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#3b82f6"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#3b82f6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      fill={`url(#gradient-${kpi.id})`}
                      strokeWidth={2}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '12px',
                      }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Özet Bilgi */}
      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Özet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-green-500/10">
              <div className="text-2xl font-bold text-green-600">
                {filteredKPIs.filter((kpi) => kpi.status === 'good').length}
              </div>
              <div className="text-sm text-muted-foreground">Hedefin Üzerinde</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-yellow-500/10">
              <div className="text-2xl font-bold text-yellow-600">
                {filteredKPIs.filter((kpi) => kpi.status === 'warning').length}
              </div>
              <div className="text-sm text-muted-foreground">Dikkat Gereken</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-500/10">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(
                  filteredKPIs.reduce((acc, kpi) => acc + (kpi.value / kpi.target) * 100, 0) /
                    filteredKPIs.length,
                )}
                %
              </div>
              <div className="text-sm text-muted-foreground">Ortalama Başarı</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
