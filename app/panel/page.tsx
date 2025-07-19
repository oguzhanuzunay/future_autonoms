'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@clerk/nextjs';
import {
  Activity,
  BarChart3,
  Bot,
  MessageSquare,
  Settings,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const stats = [
  {
    title: 'Active Agents',
    value: '12',
    description: 'Currently running',
    icon: Bot,
    color: 'text-green-500',
  },
  {
    title: 'Total Interactions',
    value: '2,847',
    description: 'Last 30 days',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    title: 'Performance Score',
    value: '94.2%',
    description: '+2.1% from last month',
    icon: TrendingUp,
    color: 'text-purple-500',
  },
  {
    title: 'Active Users',
    value: '1,284',
    description: 'Connected users',
    icon: Users,
    color: 'text-cyan-500',
  },
];

const recentActivity = [
  {
    agent: 'DN.Sales™',
    action: 'Lead qualification completed',
    time: '2 minutes ago',
    status: 'success',
  },
  {
    agent: 'DN.Support™',
    action: 'Customer issue resolved',
    time: '5 minutes ago',
    status: 'success',
  },
  {
    agent: 'DN.HR™',
    action: 'Interview scheduled',
    time: '12 minutes ago',
    status: 'pending',
  },
  {
    agent: 'DN.Finance™',
    action: 'Report generated',
    time: '18 minutes ago',
    status: 'success',
  },
];

export default function PanelPage() {
  const { user } = useUser();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Welcome back, {user?.firstName}!
        </h2>
        <p className="text-muted-foreground">
          Here's an overview of your AI agent ecosystem performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-500" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions performed by your AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.agent}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={activity.status === 'success' ? 'default' : 'secondary'}
                      className={
                        activity.status === 'success'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : ''
                      }
                    >
                      {activity.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
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
            <CardDescription>Manage your AI agents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Bot className="h-4 w-4" />
              Deploy New Agent
            </Button>
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <BarChart3 className="h-4 w-4" />
              View Analytics
            </Button>
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Settings className="h-4 w-4" />
              System Settings
            </Button>
            <Button
              className="w-full justify-start gap-2"
              variant="outline"
            >
              <Users className="h-4 w-4" />
              Manage Users
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
