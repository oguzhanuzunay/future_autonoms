'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useUser } from '@clerk/nextjs';
import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowUp,
  Bot,
  Brain,
  CheckCircle2,
  Chrome,
  Download,
  Gauge,
  LineChart,
  Monitor,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import CountUp from 'react-countup';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Sample data for charts
const performanceData = [
  { name: 'Mon', value: 85, calls: 120, conversions: 28 },
  { name: 'Tue', value: 88, calls: 145, conversions: 35 },
  { name: 'Wed', value: 92, calls: 160, conversions: 42 },
  { name: 'Thu', value: 90, calls: 155, conversions: 38 },
  { name: 'Fri', value: 94, calls: 180, conversions: 45 },
  { name: 'Sat', value: 91, calls: 140, conversions: 36 },
  { name: 'Sun', value: 89, calls: 130, conversions: 32 },
];

const agentPerformance = [
  { name: 'DN.Sales™', score: 94, color: '#10b981' },
  { name: 'DN.Support™', score: 89, color: '#3b82f6' },
  { name: 'DN.HR™', score: 92, color: '#8b5cf6' },
  { name: 'DN.Finance™', score: 87, color: '#f59e0b' },
];

const kpiData = [
  {
    title: 'Total AI Interactions',
    value: 15847,
    target: 20000,
    change: 12.5,
    icon: Brain,
    color: 'from-purple-500 to-blue-500',
    description: 'This month',
  },
  {
    title: 'Automation Rate',
    value: 94.2,
    target: 95,
    change: 2.1,
    icon: Gauge,
    color: 'from-blue-500 to-cyan-500',
    description: 'Process automation',
  },
  {
    title: 'Cost Savings',
    value: 284500,
    target: 300000,
    change: 18.3,
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    description: 'Monthly savings (₺)',
  },
  {
    title: 'Customer Satisfaction',
    value: 4.8,
    target: 5.0,
    change: 0.3,
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-500',
    description: 'Average rating',
  },
];

const recentAlerts = [
  {
    type: 'success',
    title: 'DN.Sales™ Performance Peak',
    message: 'Conversion rate reached 94% - highest this month',
    time: '5 min ago',
  },
  {
    type: 'warning',
    title: 'High Traffic Alert',
    message: 'Support requests increased by 45% in last hour',
    time: '12 min ago',
  },
  {
    type: 'info',
    title: 'System Update Available',
    message: 'New AI model improvements ready for deployment',
    time: '1 hour ago',
  },
];

export default function PanelPage() {
  const { user } = useUser();
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="space-y-6 p-6 max-w-[1600px] mx-auto">
      {/* Welcome Section with Quick Actions */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-muted-foreground text-lg">
            Your AI ecosystem is performing at peak efficiency today
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPI Cards with Progress */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card
            key={kpi.title}
            className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${kpi.color} opacity-5`} />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${kpi.color}`}>
                <kpi.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold">
                  {typeof kpi.value === 'number' && kpi.value > 1000 ? (
                    <CountUp
                      end={kpi.value}
                      separator=","
                      prefix={kpi.title.includes('Cost') ? '₺' : ''}
                    />
                  ) : (
                    <CountUp
                      end={kpi.value}
                      decimals={kpi.value < 10 ? 1 : 0}
                    />
                  )}
                  {kpi.title.includes('Rate') && '%'}
                </div>
                <Badge
                  variant={kpi.change > 0 ? 'default' : 'secondary'}
                  className={
                    kpi.change > 0 ? 'bg-green-500/10 text-green-500 border-green-500/20' : ''
                  }
                >
                  {kpi.change > 0 ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(kpi.change)}%
                </Badge>
              </div>
              <Progress
                value={(kpi.value / kpi.target) * 100}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Performance Chart */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-blue-500" />
                  AI Performance Analytics
                </CardTitle>
                <CardDescription>Real-time performance metrics across all agents</CardDescription>
              </div>
              <Badge
                variant="outline"
                className="bg-blue-500/10 text-blue-500 border-blue-500/20"
              >
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient
                    id="colorValue"
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
                    id="colorCalls"
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
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#333"
                />
                <XAxis
                  dataKey="name"
                  stroke="#666"
                />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
                <Area
                  type="monotone"
                  dataKey="calls"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorCalls)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Agent Performance Radial Chart */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-purple-500" />
              Agent Performance
            </CardTitle>
            <CardDescription>Individual agent efficiency scores</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="90%"
                data={agentPerformance}
              >
                <RadialBar
                  background
                  dataKey="score"
                >
                  {agentPerformance.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </RadialBar>
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {agentPerformance.map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: agent.color }}
                    />
                    <span className="text-sm">{agent.name}</span>
                  </div>
                  <span className="text-sm font-medium">{agent.score}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Extension Download & Alerts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* AI Usage Tracker Extension */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Chrome className="h-5 w-5 text-green-500" />
              AI Usage Tracker Extension
            </CardTitle>
            <CardDescription>Monitor your team's AI adoption and usage patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-background/50 border border-border/50">
                <Monitor className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <p className="text-sm font-medium">Desktop</p>
                <p className="text-xs text-muted-foreground">Windows, Mac</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2"
                >
                  Download
                </Button>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 border border-border/50">
                <Chrome className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <p className="text-sm font-medium">Chrome</p>
                <p className="text-xs text-muted-foreground">Extension</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2"
                >
                  Install
                </Button>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50 border border-border/50">
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <p className="text-sm font-medium">Mobile</p>
                <p className="text-xs text-muted-foreground">iOS, Android</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2"
                >
                  Get App
                </Button>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <h4 className="font-medium mb-2">Extension Features:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real-time AI usage tracking</li>
                <li>• Productivity insights & analytics</li>
                <li>• Team collaboration metrics</li>
                <li>• Custom KPI monitoring</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              System Alerts & Notifications
            </CardTitle>
            <CardDescription>Important updates and system notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  {alert.type === 'success' && (
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  )}
                  {alert.type === 'warning' && (
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  )}
                  {alert.type === 'info' && <Activity className="h-5 w-5 text-blue-500 mt-0.5" />}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4"
            >
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
