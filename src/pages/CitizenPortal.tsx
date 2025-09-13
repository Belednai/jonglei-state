import { FileText, Search, Users, Clock, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CitizenPortal = () => {
  const services = [
    {
      icon: FileText,
      title: "Submit New Request",
      description: "File complaints, requests for information, or service applications",
      features: ["Document Upload", "Real-time Tracking", "SMS Notifications"],
      action: "Get Started",
      link: "/citizen-portal/new",
      color: "bg-primary"
    },
    {
      icon: Search,
      title: "Check Request Status",
      description: "Track the progress of your submitted requests and applications",
      features: ["Status Updates", "Timeline View", "Download Documents"],
      action: "Track Now",
      link: "/citizen-portal/status", 
      color: "bg-primary"
    }
  ];

  const quickStats = [
    {
      icon: Users,
      label: "Active Users",
      value: "2,400+",
      description: "Citizens using the portal"
    },
    {
      icon: FileText,
      label: "Requests Processed",
      value: "5,680+",
      description: "Successfully completed"
    },
    {
      icon: Clock,
      label: "Average Response",
      value: "3.2 days",
      description: "Response time"
    },
    {
      icon: CheckCircle,
      label: "Success Rate",
      value: "96%",
      description: "Request completion rate"
    }
  ];

  const requestTypes = [
    {
      category: "Identity Documents",
      types: ["Birth Certificate", "National ID", "Passport Application", "Certificate Replacement"],
      processing: "5-10 business days"
    },
    {
      category: "Business Services",
      types: ["Business Registration", "License Application", "Tax Certificate", "Trade Permit"],
      processing: "7-14 business days"
    },
    {
      category: "Land & Property",
      types: ["Land Title", "Property Registration", "Ownership Transfer", "Survey Request"],
      processing: "14-21 business days"
    },
    {
      category: "General Services",
      types: ["Information Request", "Complaint Filing", "Service Feedback", "Public Records"],
      processing: "1-5 business days"
    }
  ];

  const recentUpdates = [
    {
      title: "Portal Maintenance Scheduled",
      date: "2024-01-25",
      type: "maintenance",
      description: "System maintenance on January 28, 2024 from 2:00 AM to 4:00 AM"
    },
    {
      title: "New Document Upload Feature",
      date: "2024-01-20",
      type: "feature",
      description: "You can now upload multiple documents in a single submission"
    },
    {
      title: "SMS Notifications Available",
      date: "2024-01-15",
      type: "feature",
      description: "Receive SMS updates on your request status"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Citizen Portal</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your gateway to government services. Submit requests, track applications, 
            and access important documents - all in one convenient location.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${service.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Features:</p>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={service.link}>{service.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Request Types */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Available Services</CardTitle>
                <CardDescription>
                  Types of requests you can submit through the portal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {requestTypes.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                      <Badge variant="outline">{category.processing}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="text-sm text-muted-foreground">
                          • {type}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="border-l-2 border-primary pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      {update.type === 'maintenance' ? (
                        <AlertCircle className="h-4 w-4 text-primary" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">{update.title}</h4>
                    <p className="text-sm text-muted-foreground">{update.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our support team is available to assist you with any questions or issues.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href="tel:+211123456789" className="hover:underline">
                      +211 123 456 789
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href="mailto:support@jonglei.gov.ss" className="hover:underline">
                      support@jonglei.gov.ss
                    </a>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/citizen-portal/guide">User Guide</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/citizen-portal/faq">FAQ</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/citizen-portal/fees">Service Fees</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
    </main>
  );
};

export default CitizenPortal;
