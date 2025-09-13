import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Mail,
  Bell,
  LogOut,
  Settings,
  Home,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface DashboardStats {
  totalRequests: number;
  pendingRequests: number;
  completedRequests: number;
  avgResponseTime: number;
}

interface RecentRequest {
  id: string;
  title: string;
  submittedBy: string;
  category: string;
  status: 'pending' | 'in-progress' | 'completed' | 'urgent';
  submittedAt: string;
  priority: 'low' | 'medium' | 'high';
}

const StaffDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock dashboard data
  const stats: DashboardStats = {
    totalRequests: 1247,
    pendingRequests: 89,
    completedRequests: 1158,
    avgResponseTime: 2.4
  };

  const recentRequests: RecentRequest[] = [
    {
      id: 'REQ-2024-089',
      title: 'Birth Certificate Request',
      submittedBy: 'John Doe',
      category: 'Identity Documents',
      status: 'pending',
      submittedAt: '2024-01-22T10:30:00Z',
      priority: 'medium'
    },
    {
      id: 'REQ-2024-088',
      title: 'Business License Application',
      submittedBy: 'Jane Smith',
      category: 'Business Services',
      status: 'in-progress',
      submittedAt: '2024-01-22T09:15:00Z',
      priority: 'high'
    },
    {
      id: 'REQ-2024-087',
      title: 'Land Title Verification',
      submittedBy: 'Michael Johnson',
      category: 'Land & Property',
      status: 'urgent',
      submittedAt: '2024-01-21T16:45:00Z',
      priority: 'high'
    },
    {
      id: 'REQ-2024-086',
      title: 'Tax Certificate Request',
      submittedBy: 'Sarah Wilson',
      category: 'Business Services',
      status: 'completed',
      submittedAt: '2024-01-21T14:20:00Z',
      priority: 'low'
    }
  ];

  useEffect(() => {
    // Check authentication
    const authToken = localStorage.getItem('staffAuthToken') || sessionStorage.getItem('staffAuthToken');
    
    if (!authToken) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access the staff dashboard.",
        variant: "destructive"
      });
      navigate('/staff/login');
      return;
    }

    try {
      const userData = JSON.parse(atob(authToken));
      setUser(userData);
    } catch (error) {
      console.error('Invalid auth token:', error);
      navigate('/staff/login');
      return;
    }

    setIsLoading(false);
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('staffAuthToken');
    sessionStorage.removeItem('staffAuthToken');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'in-progress': return 'secondary';
      case 'pending': return 'outline';
      case 'urgent': return 'destructive';
      default: return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Staff Navigation Bar */}
      <div className="bg-primary text-primary-foreground py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span className="font-medium">Staff Dashboard</span>
              </div>
              <nav className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Requests
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Reports
                </Button>
                <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Users
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Welcome, {user?.email}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.email}. Here's what's happening in your department today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">Total Requests</span>
              </div>
              <div className="text-2xl font-bold">{stats.totalRequests.toLocaleString()}</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-orange-600" />
                </div>
                <span className="text-sm font-medium">Pending</span>
              </div>
              <div className="text-2xl font-bold">{stats.pendingRequests}</div>
              <div className="text-sm text-muted-foreground mt-1">
                Awaiting review
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">Completed</span>
              </div>
              <div className="text-2xl font-bold">{stats.completedRequests.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                Successfully processed
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium">Avg Response</span>
              </div>
              <div className="text-2xl font-bold">{stats.avgResponseTime} days</div>
              <div className="text-sm text-muted-foreground mt-1">
                Response time
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Requests */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Requests</CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </div>
                <CardDescription>
                  Latest citizen requests requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{request.title}</h4>
                          <Badge variant={getStatusColor(request.status)} className="text-xs">
                            {request.status.replace('-', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant={getPriorityColor(request.priority)} className="text-xs">
                            {request.priority.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <span>By: {request.submittedBy}</span>
                          <span>Category: {request.category}</span>
                          <span>{new Date(request.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Notifications */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Process Request
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Notification
                </Button>
              </CardContent>
            </Card>

            {/* Urgent Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4 text-orange-500" />
                  Urgent Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                    <p className="text-sm font-medium text-red-800">High Priority Request</p>
                    <p className="text-xs text-red-600">Land Title Verification - Expires in 2 hours</p>
                  </div>
                  <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                    <p className="text-sm font-medium text-orange-800">System Maintenance</p>
                    <p className="text-xs text-orange-600">Scheduled for tonight at 11 PM</p>
                  </div>
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-sm font-medium text-blue-800">New User Registration</p>
                    <p className="text-xs text-blue-600">3 pending approvals</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle>This Month's Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Request Processing</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Response Time</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Customer Satisfaction</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StaffDashboard;
