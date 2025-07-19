import { UserButton, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Settings, FileText, Home, LogOut } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/panel/sign-in");
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Welcome, {user.firstName || user.emailAddresses[0].emailAddress}
              </span>
              <UserButton 
                afterSignOutUrl="/panel/sign-in"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "bg-gray-800 border-gray-700",
                    userButtonPopoverActionButton: "hover:bg-gray-700",
                    userButtonPopoverActionButtonText: "text-gray-300",
                    userButtonPopoverFooter: "hidden",
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-gray-800 bg-gray-900/50">
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
              <FileText className="mr-2 h-4 w-4" />
              Content
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
            
            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1,234</div>
                  <p className="text-xs text-gray-400">+10% from last month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Active Projects
                  </CardTitle>
                  <FileText className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">23</div>
                  <p className="text-xs text-gray-400">+2 new this week</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Revenue
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$45,231</div>
                  <p className="text-xs text-gray-400">+20% from last month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    Active Now
                  </CardTitle>
                  <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">89</div>
                  <p className="text-xs text-gray-400">Users online</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription className="text-gray-400">
                  Your latest actions and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-white">New user registered</p>
                      <p className="text-xs text-gray-400">john.doe@example.com</p>
                    </div>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-white">Project updated</p>
                      <p className="text-xs text-gray-400">AI Integration Phase 2</p>
                    </div>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-white">Report generated</p>
                      <p className="text-xs text-gray-400">Monthly analytics report</p>
                    </div>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}