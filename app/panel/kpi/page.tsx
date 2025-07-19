'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  PieChart,
  RefreshCw,
  Settings2,
  Target,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import CountUp from 'react-countup';
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

// KPI Categories
const kpiCategories = [
  { id: 'all', name: 'All KPIs', count: 24 },
  { id: 'sales', name: 'Sales', count: 8 },
  { id: 'support', name: 'Support', count: 6 },
  { id: 'operations', name: 'Operations', count: 5 },
  { id: 'finance', name: 'Finance', count: 5 },
];

// Detailed KPI Data
const detailedKPIs = [
  {
    id: 1,
    category: 'sales',
    name: 'Lead Conversion Rate',
    value: 23.4,
    target: 25,
    unit: '%',
    change: 2.3,
    trend: 'up',
    status: 'warning',
    priority: 'high',
    lastUpdated: '2 hours ago',
    owner: 'Sales Team',
    description: 'Percentage of leads converted to customers',
    history: [
      { month: 'Jan', value: 18.2 },
      { month: 'Feb', value: 19.5 },
      { month: 'Mar', value: 21.1 },
      { month: 'Apr', value: 22.8 },
      { month: 'May', value: 23.4 },
    ],
  },
  {
    id: 2,
    category: 'support',
    name: 'First Response Time',
    value: 1.2,
    target: 2,
    unit: 'min',
    change: -15.3,
    trend: 'up',
    status: 'success',
    priority: 'high',
    lastUpdated: '30 min ago',
    owner: 'Support Team',
    description: 'Average time to first customer response',
    history: [
      { month: 'Jan', value: 3.5 },
      { month: 'Feb', value: 2.8 },
      { month: 'Mar', value: 2.2 },
      { month: 'Apr', value: 1.8 },
      { month: 'May', value: 1.2 },
    ],
  },
  {
    id: 3,
    category: 'operations',
    name: 'Process Automation Rate',
    value: 87.5,
    target: 90,
    unit: '%',
    change: 5.2,
    trend: 'up',
    status: 'warning',
    priority: 'medium',
    lastUpdated: '1 hour ago',
    owner: 'Operations Team',
    description: 'Percentage of processes automated',
    history: [
      { month: 'Jan', value: 72.3 },
      { month: 'Feb', value: 76.8 },
      { month: 'Mar', value: 81.2 },
      { month: 'Apr', value: 84.9 },
      { month: 'May', value: 87.5 },
    ],
  },
  {
    id: 4,
    category: 'finance',
    name: 'Monthly Recurring Revenue',
    value: 485000,
    target: 500000,
    unit: '₺',
    change: 12.8,
    trend: 'up',
    status: 'warning',
    priority: 'high',
    lastUpdated: '1 day ago',
    owner: 'Finance Team',
    description: 'Total monthly recurring revenue',
    history: [
      { month: 'Jan', value: 380000 },
      { month: 'Feb', value: 410000 },
      { month: 'Mar', value: 435000 },
      { month: 'Apr', value: 460000 },
      { month: 'May', value: 485000 },
    ],
  },
];

// Performance Distribution
const performanceDistribution = [
  { name: 'Exceeding', value: 35, color: '#10b981' },
  { name: 'On Track', value: 45, color: '#3b82f6' },
  { name: 'At Risk', value: 15, color: '#f59e0b' },
  { name: 'Behind', value: 5, color: '#ef4444' },
];

export default function KPITrackerPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('30d');
  const [showTargets, setShowTargets] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const filteredKPIs =
    selectedCategory === 'all'
      ? detailedKPIs
      : detailedKPIs.filter((kpi) => kpi.category === selectedCategory);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'error':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            KPI Performance Tracker
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and analyze your key performance indicators in real-time
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <SelectTrigger className="w-[140px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-500" />
              Total KPIs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Actively tracked</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              On Target
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">18</div>
            <p className="text-xs text-muted-foreground">75% achievement</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              At Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">4</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4 text-purple-500" />
              Avg. Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.3%</div>
            <p className="text-xs text-muted-foreground">+3.2% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* KPI List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Category Tabs */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>KPI Categories</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch
                      id="show-targets"
                      checked={showTargets}
                      onCheckedChange={setShowTargets}
                    />
                    <Label
                      htmlFor="show-targets"
                      className="text-sm"
                    >
                      Show Targets
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      id="auto-refresh"
                      checked={autoRefresh}
                      onCheckedChange={setAutoRefresh}
                    />
                    <Label
                      htmlFor="auto-refresh"
                      className="text-sm"
                    >
                      <RefreshCw
                        className={`h-3 w-3 inline mr-1 ${autoRefresh ? 'animate-spin' : ''}`}
                      />
                      Auto Refresh
                    </Label>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                {kpiCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                        : ''
                    }
                  >
                    {category.name}
                    <Badge
                      variant="secondary"
                      className="ml-2"
                    >
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* KPI Cards */}
          <div className="space-y-4">
            {filteredKPIs.map((kpi) => (
              <Card
                key={kpi.id}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {kpi.name}
                        {getStatusIcon(kpi.status)}
                      </CardTitle>
                      <CardDescription>{kpi.description}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={getStatusColor(kpi.status)}
                    >
                      {kpi.priority} priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">
                          {kpi.unit === '₺' && '₺'}
                          <CountUp
                            end={kpi.value}
                            decimals={kpi.unit === '%' || kpi.unit === 'min' ? 1 : 0}
                            separator=","
                          />
                          {kpi.unit === '%' && '%'}
                          {kpi.unit === 'min' && ' min'}
                        </span>
                        {showTargets && (
                          <span className="text-sm text-muted-foreground">
                            / {kpi.unit === '₺' && '₺'}
                            {kpi.target.toLocaleString()}
                            {kpi.unit !== '₺' && kpi.unit}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <div
                          className={`flex items-center gap-1 ${
                            kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {kpi.trend === 'up' ? (
                            <ArrowUp className="h-3 w-3" />
                          ) : (
                            <ArrowDown className="h-3 w-3" />
                          )}
                          {Math.abs(kpi.change)}%
                        </div>
                        <span className="text-muted-foreground">Owner: {kpi.owner}</span>
                        <span className="text-muted-foreground">{kpi.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="w-32">
                      <Progress
                        value={(kpi.value / kpi.target) * 100}
                        className="h-2"
                      />
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-20">
                    <ResponsiveContainer
                      width="100%"
                      height="100%"
                    >
                      <AreaChart data={kpi.history}>
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
        </div>

        {/* Performance Overview */}
        <div className="space-y-4">
          {/* Distribution Chart */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-500" />
                Performance Distribution
              </CardTitle>
              <CardDescription>Overall KPI performance breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer
                width="100%"
                height={200}
              >
                <RePieChart>
                  <Pie
                    data={performanceDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {performanceDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {performanceDistribution.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                size="sm"
              >
                <Settings2 className="h-4 w-4 mr-2" />
                Configure KPIs
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                size="sm"
              >
                <Users className="h-4 w-4 mr-2" />
                Assign Owners
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                size="sm"
              >
                <Target className="h-4 w-4 mr-2" />
                Set Targets
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                size="sm"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Create Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-sm font-medium text-green-500">Positive Trend</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Support response time improved by 65% this month
                </p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm font-medium text-yellow-500">Attention Needed</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Lead conversion rate is 6.4% below target
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-sm font-medium text-blue-500">Recommendation</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Increase automation rate by 2.5% to meet Q2 goals
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
