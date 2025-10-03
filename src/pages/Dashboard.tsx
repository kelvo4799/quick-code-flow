import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  Bell,
  Shield,
  Phone,
  Smartphone,
  CreditCard,
  TrendingUp,
  Package,
  ShoppingCart,
  LogOut,
  Settings,
  User,
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Globe
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const notifications = [
    { id: 1, title: "New SMS sent", message: "Verification code sent to +1234567890", time: "2 min ago", unread: true },
    { id: 2, title: "Payment successful", message: "Your account has been credited with 100 SMS", time: "1 hour ago", unread: true },
    { id: 3, title: "Number purchased", message: "Virtual number +1 (555) 123-4567 activated", time: "3 hours ago", unread: false },
  ];

  const phoneNumbers = [
    { id: 1, number: "+1 (555) 123-4567", country: "United States", status: "Active", price: "$2.50/mo" },
    { id: 2, number: "+44 20 1234 5678", country: "United Kingdom", status: "Active", price: "$3.00/mo" },
    { id: 3, number: "+91 22 1234 5678", country: "India", status: "Pending", price: "$1.50/mo" },
  ];

  const esimPackages = [
    { id: 1, name: "Global Data - 5GB", coverage: "150+ Countries", price: "$29.99", data: "5GB", validity: "30 Days" },
    { id: 2, name: "Regional Europe - 10GB", coverage: "35 Countries", price: "$39.99", data: "10GB", validity: "30 Days" },
    { id: 3, name: "USA Unlimited", coverage: "United States", price: "$49.99", data: "Unlimited", validity: "30 Days" },
  ];

  const stats = [
    { label: "SMS Sent", value: "2,543", change: "+12%", icon: MessageSquare },
    { label: "Active Numbers", value: "8", change: "+2", icon: Phone },
    { label: "Success Rate", value: "99.8%", change: "+0.2%", icon: TrendingUp },
    { label: "Global Reach", value: "152", change: "+5", icon: Globe },
  ];

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="h-full flex flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-gradient-primary rounded-lg shadow-glow-primary">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            SMSVerify
          </span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start bg-sidebar-accent text-sidebar-accent-foreground">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Phone className="mr-2 h-4 w-4" />
            Phone Numbers
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Smartphone className="mr-2 h-4 w-4" />
            eSIM Packages
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </Button>
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-sidebar-border space-y-1">
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Notifications</h4>
                    <Badge variant="secondary">{notifications.filter(n => n.unread).length} new</Badge>
                  </div>
                  <Separator />
                  <ScrollArea className="h-64">
                    <div className="space-y-3">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            notif.unread ? 'bg-accent/50' : 'hover:bg-accent/30'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{notif.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
                            </div>
                            {notif.unread && <div className="h-2 w-2 bg-primary rounded-full mt-1"></div>}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <Separator />
                  <Button variant="ghost" className="w-full text-sm">
                    Mark all as read
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            {/* User Menu */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56" align="end">
                <div className="space-y-3">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                  <Separator />
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                      <Link to="/profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                      <Link to="/settings">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </Button>
                  </div>
                  <Separator />
                  <Button variant="ghost" className="w-full justify-start text-sm text-destructive hover:text-destructive" asChild>
                    <Link to="/login">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Link>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gradient-secondary p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow-accent transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-green-400 mt-1">
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Virtual Phone Numbers */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Virtual Phone Numbers
                  </CardTitle>
                  <CardDescription>Manage your virtual numbers for SMS verification</CardDescription>
                </div>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Number
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {phoneNumbers.map((phone) => (
                    <div
                      key={phone.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-accent/30 rounded-lg border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-3 sm:mb-0">
                        <div className="p-2 bg-gradient-primary rounded-lg">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{phone.number}</p>
                          <p className="text-sm text-muted-foreground">{phone.country}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={phone.status === "Active" ? "default" : "secondary"}>
                          {phone.status}
                        </Badge>
                        <span className="text-sm font-medium">{phone.price}</span>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* eSIM Packages */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    eSIM Data Packages
                  </CardTitle>
                  <CardDescription>Purchase eSIM packages for global connectivity</CardDescription>
                </div>
                <Button variant="outline">
                  View All Plans
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {esimPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="p-4 bg-gradient-primary/10 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-primary"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="p-2 bg-gradient-accent rounded-lg">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <Badge variant="secondary">{pkg.validity}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          {pkg.coverage}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Package className="h-4 w-4" />
                          {pkg.data}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{pkg.price}</span>
                        <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                          Purchase
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
