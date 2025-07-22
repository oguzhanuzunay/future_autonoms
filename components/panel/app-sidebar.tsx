'use client';

import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Bot,
  Building2,
  ChevronDown,
  Cog,
  DollarSign,
  HeadphonesIcon,
  LayoutDashboard,
  Mail,
  PieChart as Survey,
  UserCheck,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

const agentSections = [
  {
    title: 'Sales & Marketing',
    icon: DollarSign,
    color: 'text-green-500',
    badge: 'Active',
    badgeColor: 'bg-green-500/10 text-green-500 border-green-500/20',
    items: [
      {
        title: 'DN.Sales™ Agent',
        url: '/panel/agents/sales',
        icon: Bot,
        description: '7/24 Sales Representative',
      },
      {
        title: 'Lead Management',
        url: '/panel/sales/leads',
        icon: Users,
        description: 'Manage prospects',
      },
      {
        title: 'Sales Analytics',
        url: '/panel/sales/analytics',
        icon: BarChart3,
        description: 'Performance metrics',
      },
    ],
  },
  {
    title: 'Customer Support',
    icon: HeadphonesIcon,
    color: 'text-blue-500',
    badge: 'Active',
    badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    items: [
      {
        title: 'DN.Support™ Agent',
        url: '/panel/agents/support',
        icon: Bot,
        description: 'Customer Service AI',
      },
      {
        title: 'Ticket Management',
        url: '/panel/support/tickets',
        icon: Mail,
        description: 'Support requests',
      },
      {
        title: 'Knowledge Base',
        url: '/panel/support/knowledge',
        icon: Building2,
        description: 'Support articles',
      },
    ],
  },
  {
    title: 'Human Resources',
    icon: UserCheck,
    color: 'text-purple-500',
    badge: 'Active',
    badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    items: [
      {
        title: 'DN.HR™ Agent',
        url: '/panel/agents/hr',
        icon: Bot,
        description: 'HR Assistant',
      },
      {
        title: 'Employee Management',
        url: '/panel/hr/employees',
        icon: Users,
        description: 'Staff directory',
      },
      {
        title: 'Recruitment',
        url: '/panel/hr/recruitment',
        icon: UserCheck,
        description: 'Hiring process',
      },
    ],
  },
  {
    title: 'Finance & Operations',
    icon: BarChart3,
    color: 'text-yellow-500',
    badge: 'Active',
    badgeColor: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    items: [
      {
        title: 'DN.Finance™ Agent',
        url: '/panel/agents/finance',
        icon: Bot,
        description: 'Financial AI',
      },
      {
        title: 'DN.Process™ Agent',
        url: '/panel/agents/process',
        icon: Bot,
        description: 'Process Optimization',
      },
      {
        title: 'Financial Reports',
        url: '/panel/finance/reports',
        icon: BarChart3,
        description: 'Financial analytics',
      },
    ],
  },
  {
    title: 'Communication',
    icon: Mail,
    color: 'text-cyan-500',
    badge: 'Active',
    badgeColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    items: [
      {
        title: 'DN.Mail™ Agent',
        url: '/panel/agents/mail',
        icon: Bot,
        description: 'Email Management',
      },
      {
        title: 'DN.Survey™ Agent',
        url: '/panel/agents/survey',
        icon: Survey,
        description: 'Customer Feedback',
      },
      {
        title: 'Campaign Manager',
        url: '/panel/mail/campaigns',
        icon: Mail,
        description: 'Email campaigns',
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const [openSections, setOpenSections] = React.useState<string[]>(['Sales & Marketing']);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionTitle)
        ? prev.filter((title) => title !== sectionTitle)
        : [...prev, sectionTitle],
    );
  };

  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
            >
              <Link href="/panel">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 text-white">
                  <Bot className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">DN.AI™</span>
                  <span className="truncate text-xs text-muted-foreground">Control Panel</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/panel'}
            >
              <Link href="/panel">
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* KPI Tracker */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/panel/kpi'}
            >
              <Link href="/panel/kpi">
                <BarChart3 className="size-4 text-purple-500" />
                <span>KPI Tracker</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Agent Sections */}
          {agentSections.map((section) => (
            <Collapsible
              key={section.title}
              open={openSections.includes(section.title)}
              onOpenChange={() => toggleSection(section.title)}
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="w-full">
                    <section.icon className={cn('size-4', section.color)} />
                    <span>{section.title}</span>
                    <div className="ml-auto flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={cn('text-xs', section.badgeColor)}
                      >
                        {section.badge}
                      </Badge>
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform',
                          openSections.includes(section.title) && 'rotate-180',
                        )}
                      />
                    </div>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === item.url}
                        >
                          <Link href={item.url}>
                            <item.icon className="size-4" />
                            <div className="grid flex-1">
                              <span className="font-medium">{item.title}</span>
                              {state === 'expanded' && (
                                <span className="text-xs text-muted-foreground">
                                  {item.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/panel/settings">
                <Cog className="size-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
