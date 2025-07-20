'use client';

import { AppSidebar } from '@/components/panel/app-sidebar';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/nextjs';
import { Bell, Menu, Search } from 'lucide-react';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header */}
          <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 sm:h-16 items-center gap-3 px-4 sm:px-6">
              {/* Mobile Menu Trigger */}
              <SidebarTrigger className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </SidebarTrigger>

              {/* Search Button - Mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>

              {/* Title - Hidden on mobile */}
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold">DN.AI™ Control Panel</h1>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Notifications */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 sm:h-9 sm:w-9"
                >
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>

                {/* User Button */}
                <div className="scale-90 sm:scale-100">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'h-8 w-8 sm:h-9 sm:w-9',
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
