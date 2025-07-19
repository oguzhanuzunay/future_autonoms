'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart3,
  Bot,
  CheckCircle,
  Clock,
  MessageSquare,
  Pause,
  Phone,
  Settings,
  Target,
  TrendingUp,
  XCircle,
} from 'lucide-react';

const agentStats = [
  {
    title: 'Active Conversations',
    value: '24',
    description: 'Currently engaged',
    icon: MessageSquare,
    color: 'text-blue-500',
  },
  {
    title: 'Leads Qualified',
    value: '156',
    description: 'This month',
    icon: Target,
    color: 'text-green-500',
  },
  {
    title: 'Conversion Rate',
    value: '23.4%',
    description: '+5.2% from last month',
    icon: TrendingUp,
    color: 'text-purple-500',
  },
  {
    title: 'Response Time',
    value: '1.2s',
    description: 'Average response',
    icon: Clock,
    color: 'text-cyan-500',
  },
];

const recentCalls = [
  {
    id: '1',
    contact: 'John Doe',
    company: 'Tech Corp',
    status: 'qualified',
    duration: '4:32',
    time: '2 hours ago',
  },
  {
    id: '2',
    contact: 'Sarah Johnson',
    company: 'Design Studio',
    status: 'follow-up',
    duration: '2:15',
    time: '3 hours ago',
  },
  {
    id: '3',
    contact: 'Mike Wilson',
    company: 'Retail Plus',
    status: 'not-interested',
    duration: '1:08',
    time: '5 hours ago',
  },
  {
    id: '4',
    contact: 'Emma Davis',
    company: 'Consulting LLC',
    status: 'qualified',
    duration: '6:45',
    time: '1 day ago',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'qualified':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    case 'follow-up':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    case 'not-interested':
      return 'bg-red-500/10 text-red-500 border-red-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'qualified':
      return <CheckCircle className="h-4 w-4" />;
    case 'follow-up':
      return <Clock className="h-4 w-4" />;
    case 'not-interested':
      return <XCircle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

export default function SalesAgentPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">DN.Sales™ Agent</h1>
              <p className="text-muted-foreground">AI-Powered Sales Representative</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Active</Badge>
          <Button
            size="sm"
            variant="outline"
          >
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
          <Button size="sm">
            <Pause className="h-4 w-4 mr-2" />
            Pause Agent
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {agentStats.map((stat) => (
          <Card
            key={stat.title}
            className="border-border/50 bg-card/50 backdrop-blur-sm"
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

      {/* Main Content */}
      <Tabs
        defaultValue="activity"
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent
          value="activity"
          className="space-y-4"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-500" />
                Recent Sales Calls
              </CardTitle>
              <CardDescription>Latest interactions with prospects and leads</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCalls.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="font-medium">{call.contact}</TableCell>
                      <TableCell>{call.company}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(call.status)}
                        >
                          <div className="flex items-center gap-1">
                            {getStatusIcon(call.status)}
                            {call.status}
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell className="text-muted-foreground">{call.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="configuration"
          className="space-y-4"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Agent Configuration</CardTitle>
              <CardDescription>Configure DN.Sales™ agent behavior and parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Language Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently supporting 20+ languages
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Manage Languages
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Script Templates</h3>
                  <p className="text-sm text-muted-foreground">Customize conversation templates</p>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Edit Scripts
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Lead Scoring</h3>
                  <p className="text-sm text-muted-foreground">Configure qualification criteria</p>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Setup Scoring
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Integration Settings</h3>
                  <p className="text-sm text-muted-foreground">CRM and third-party connections</p>
                  <Button
                    variant="outline"
                    size="sm"
                  >
                    Manage Integrations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="analytics"
          className="space-y-4"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Detailed insights and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
