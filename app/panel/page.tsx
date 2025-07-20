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
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bot,
  Building2,
  ChevronRight,
  DollarSign,
  Headphones,
  Mail,
  Target,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import CountUp from 'react-countup';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Departman listesi
const departments = [
  {
    id: 'sales',
    name: 'Sales & Marketing',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
  },
  { id: 'support', name: 'Customer Support', icon: Headphones, color: 'from-blue-500 to-cyan-500' },
  { id: 'hr', name: 'Human Resources', icon: UserCheck, color: 'from-purple-500 to-violet-500' },
  {
    id: 'finance',
    name: 'Finance & Operations',
    icon: BarChart3,
    color: 'from-yellow-500 to-orange-500',
  },
  { id: 'communication', name: 'Communication', icon: Mail, color: 'from-cyan-500 to-blue-500' },
];

// Departman bazlı KPI'lar
const departmentKPIs = {
  sales: {
    mainKPIs: [
      {
        title: 'Monthly Revenue',
        value: 485000,
        target: 500000,
        unit: '₺',
        change: 12.8,
        trend: 'up',
      },
      { title: 'Lead Conversion', value: 23.4, target: 25, unit: '%', change: 2.3, trend: 'up' },
      { title: 'Active Prospects', value: 1284, target: 1500, unit: '', change: 8.5, trend: 'up' },
    ],
    agents: ['DN.Sales™ Agent'],
    performance: 94.2,
    chartData: [
      { name: 'Mon', value: 450000 },
      { name: 'Tue', value: 470000 },
      { name: 'Wed', value: 465000 },
      { name: 'Thu', value: 480000 },
      { name: 'Fri', value: 485000 },
    ],
  },
  support: {
    mainKPIs: [
      { title: 'Response Time', value: 1.2, target: 2, unit: 'min', change: -15.3, trend: 'up' },
      { title: 'Resolution Rate', value: 89.4, target: 90, unit: '%', change: 3.2, trend: 'up' },
      {
        title: 'Customer Satisfaction',
        value: 4.8,
        target: 5,
        unit: '/5',
        change: 0.3,
        trend: 'up',
      },
    ],
    agents: ['DN.Support™ Agent'],
    performance: 89.4,
    chartData: [
      { name: 'Mon', value: 2.5 },
      { name: 'Tue', value: 2.1 },
      { name: 'Wed', value: 1.8 },
      { name: 'Thu', value: 1.5 },
      { name: 'Fri', value: 1.2 },
    ],
  },
  hr: {
    mainKPIs: [
      { title: 'Recruitment Score', value: 92.1, target: 95, unit: '%', change: 5.4, trend: 'up' },
      {
        title: 'Employee Satisfaction',
        value: 4.6,
        target: 5,
        unit: '/5',
        change: 0.2,
        trend: 'up',
      },
      {
        title: 'Training Completion',
        value: 87.3,
        target: 90,
        unit: '%',
        change: 2.1,
        trend: 'up',
      },
    ],
    agents: ['DN.HR™ Agent'],
    performance: 92.1,
    chartData: [
      { name: 'Mon', value: 85.2 },
      { name: 'Tue', value: 87.8 },
      { name: 'Wed', value: 89.1 },
      { name: 'Thu', value: 90.5 },
      { name: 'Fri', value: 92.1 },
    ],
  },
  finance: {
    mainKPIs: [
      {
        title: 'Cost Savings',
        value: 284500,
        target: 300000,
        unit: '₺',
        change: 18.3,
        trend: 'up',
      },
      { title: 'Process Automation', value: 87.5, target: 90, unit: '%', change: 5.2, trend: 'up' },
      { title: 'Accuracy Rate', value: 99.2, target: 99.5, unit: '%', change: 0.8, trend: 'up' },
    ],
    agents: ['DN.Finance™ Agent', 'DN.Process™ Agent'],
    performance: 87.5,
    chartData: [
      { name: 'Mon', value: 250000 },
      { name: 'Tue', value: 265000 },
      { name: 'Wed', value: 272000 },
      { name: 'Thu', value: 280000 },
      { name: 'Fri', value: 284500 },
    ],
  },
  communication: {
    mainKPIs: [
      { title: 'Email Open Rate', value: 24.8, target: 25, unit: '%', change: 1.2, trend: 'up' },
      { title: 'Survey Response', value: 68.3, target: 70, unit: '%', change: 4.1, trend: 'up' },
      { title: 'Campaign Success', value: 15.7, target: 18, unit: '%', change: 2.3, trend: 'up' },
    ],
    agents: ['DN.Mail™ Agent', 'DN.Survey™ Agent'],
    performance: 68.3,
    chartData: [
      { name: 'Mon', value: 22.1 },
      { name: 'Tue', value: 23.4 },
      { name: 'Wed', value: 23.8 },
      { name: 'Thu', value: 24.2 },
      { name: 'Fri', value: 24.8 },
    ],
  },
};

export default function PanelPage() {
  const { user } = useUser();
  const [selectedDepartment, setSelectedDepartment] = useState('sales');

  const currentDepartment = departments.find((d) => d.id === selectedDepartment);
  const currentKPIs = departmentKPIs[selectedDepartment as keyof typeof departmentKPIs];

  return (
    <div className="space-y-6 p-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.firstName}!</h1>
          <p className="text-muted-foreground mt-1">Monitor your department performance and KPIs</p>
        </div>

        {/* Department Selector */}
        <Select
          value={selectedDepartment}
          onValueChange={setSelectedDepartment}
        >
          <SelectTrigger className="w-[250px]">
            <Building2 className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {departments.map((dept) => (
              <SelectItem
                key={dept.id}
                value={dept.id}
              >
                <div className="flex items-center gap-2">
                  <dept.icon className="h-4 w-4" />
                  {dept.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Department Overview */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${currentDepartment?.color}`}>
                {currentDepartment && <currentDepartment.icon className="h-6 w-6 text-white" />}
              </div>
              <div>
                <CardTitle>{currentDepartment?.name}</CardTitle>
                <CardDescription>Department Performance Overview</CardDescription>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{currentKPIs.performance}%</div>
              <p className="text-sm text-muted-foreground">Overall Score</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {currentKPIs.mainKPIs.map((kpi, index) => (
          <Card
            key={index}
            className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center justify-between">
                {kpi.title}
                <Badge
                  variant={kpi.trend === 'up' ? 'default' : 'secondary'}
                  className={
                    kpi.trend === 'up' ? 'bg-green-500/10 text-green-500 border-green-500/20' : ''
                  }
                >
                  {kpi.trend === 'up' ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(kpi.change)}%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {kpi.unit === '₺' && '₺'}
                  <CountUp
                    end={kpi.value}
                    decimals={kpi.unit === '%' || kpi.unit === 'min' || kpi.unit === '/5' ? 1 : 0}
                    separator=","
                  />
                  {kpi.unit && kpi.unit !== '₺' && kpi.unit}
                </span>
                <span className="text-sm text-muted-foreground">
                  / {kpi.unit === '₺' && '₺'}
                  {kpi.target.toLocaleString()}
                  {kpi.unit !== '₺' && kpi.unit}
                </span>
              </div>
              <Progress
                value={(kpi.value / kpi.target) * 100}
                className="h-2"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart and Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Performance Chart */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Department Trend
            </CardTitle>
            <CardDescription>Last 5 days performance data</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer
              width="100%"
              height={200}
            >
              <AreaChart data={currentKPIs.chartData}>
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
                </defs>
                <XAxis
                  dataKey="name"
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
                  dataKey="value"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-500" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Active Agents */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Active AI Agents</h4>
              {currentKPIs.agents.map((agent, index) => (
                <Link
                  key={index}
                  href={`/panel/agents/${selectedDepartment}`}
                  className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/50 hover:bg-background/80 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{agent}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>

            {/* Department KPIs Link */}
            <Link href="/panel/kpi">
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                View All KPIs
              </Button>
            </Link>

            {/* Department Settings */}
            <Button
              variant="outline"
              className="w-full justify-start"
              asChild
            >
              <Link href="/panel/settings">
                <Target className="h-4 w-4 mr-2" />
                Department Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* All Departments Overview */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>All Departments Summary</CardTitle>
          <CardDescription>Quick overview of all department performances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-5">
            {departments.map((dept) => {
              const deptKPIs = departmentKPIs[dept.id as keyof typeof departmentKPIs];
              return (
                <div
                  key={dept.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    selectedDepartment === dept.id
                      ? 'border-blue-500/50 bg-blue-500/5'
                      : 'border-border/50 bg-background/50'
                  }`}
                  onClick={() => setSelectedDepartment(dept.id)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <dept.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{dept.name}</span>
                  </div>
                  <div className="text-lg font-bold">{deptKPIs.performance}%</div>
                  <div className="text-xs text-muted-foreground">
                    {deptKPIs.agents.length} Agent(s)
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
