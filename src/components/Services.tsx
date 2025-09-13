import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Building2, 
  Megaphone,
  MapPin,
  HeadphonesIcon,
  Briefcase,
  UserCheck,
  Clock,
  ArrowRight,
  Calendar,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Digital correspondence, approvals, and document verification system",
      features: ["QR Verification", "Digital Signatures", "Version Control"],
      status: "Active",
      users: "2,400+",
      color: "primary"
    },
    {
      icon: Users,
      title: "Citizen Services",
      description: "Submit requests, complaints, and track application status online",
      features: ["24/7 Access", "SMS Updates", "Multi-language"],
      status: "Active",
      users: "1,800+",
      color: "success"
    },
    {
      icon: Calendar,
      title: "Appointments & Protocol",
      description: "Schedule meetings with officials and manage visitor protocols",
      features: ["Online Booking", "Conflict Detection", "VIP Management"],
      status: "Active",
      users: "450+",
      color: "warning"
    },
    {
      icon: Megaphone,
      title: "Press & Communications",
      description: "Official announcements, press releases, and media resources",
      features: ["Multi-channel Publishing", "Media Gallery", "Social Integration"],
      status: "Active",
      users: "15K+",
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Projects Explorer",
      description: "Track government projects, budgets, and progress across regions",
      features: ["Interactive Maps", "Progress Tracking", "Budget Transparency"],
      status: "Beta",
      users: "800+",
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Procurement Portal",
      description: "Transparent procurement processes and vendor management",
      features: ["RFQ Management", "Vendor Registry", "Evaluation Tools"],
      status: "Coming Soon",
      users: "—",
      color: "muted"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Beta':
        return 'secondary';
      case 'Coming Soon':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary group-hover:bg-primary/20';
      case 'success':
        return 'bg-primary/15 text-primary group-hover:bg-primary/25';
      case 'warning':
        return 'bg-primary/12 text-primary group-hover:bg-primary/22';
      case 'accent':
        return 'bg-primary/8 text-primary group-hover:bg-primary/18';
      default:
        return 'bg-primary/5 text-primary group-hover:bg-primary/15';
    }
  };

  return (
    <section id="services" className="gov-section bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="gov-container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6 border border-primary/20">
            <Building2 className="h-5 w-5 mr-2" />
            Digital Government Services
          </div>
          <h2 className="responsive-text-5xl font-bold text-foreground mb-6 leading-tight">
            Comprehensive Platform for
            <span className="text-primary block">Modern Governance</span>
          </h2>
          <p className="responsive-text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our integrated platform streamlines government operations while providing 
            transparent, accessible services to citizens across Jonglei State.
          </p>
        </div>

        <div className="fluid-grid lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="gov-card-feature group border-0 overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${getColorClasses(service.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-primary/60">{index + 1}</div>
                  </div>
                </div>
                <CardHeader className="pb-6 pt-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${getColorClasses(service.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col items-end space-y-3">
                      <Badge 
                        variant={getStatusVariant(service.status)}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {service.status}
                      </Badge>
                      {service.users !== '—' && (
                        <div className="flex items-center text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          <Users className="h-3 w-3 mr-2" />
                          {service.users}
                        </div>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full h-12 rounded-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 touch-friendly group-hover:scale-105" 
                      disabled={service.status === 'Coming Soon'}
                      asChild={service.status !== 'Coming Soon'}
                    >
                      {service.status === 'Coming Soon' ? (
                        'Coming Soon'
                      ) : (
                        <Link to="/citizen-portal" className="flex items-center justify-center">
                          <span>Access Service</span>
                        </Link>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Quick Access Bar */}
        <div className="mt-20 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-10 text-center text-primary-foreground shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-background/20 p-3 rounded-2xl mr-4">
                <HeadphonesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold">
                Need Immediate Assistance?
              </h3>
            </div>
            <p className="text-primary-foreground/90 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
              Our support team is available to help you navigate government services 
              and resolve any issues you may encounter with our modern platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl font-semibold" asChild>
                <Link to="/contact" className="flex items-center">
                  <HeadphonesIcon className="mr-3 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-background/30 text-background hover:bg-background/20 backdrop-blur-sm transition-all duration-300 rounded-2xl font-semibold" asChild>
                <Link to="/contact" className="flex items-center">
                  <Clock className="mr-3 h-5 w-5" />
                  View Hours
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span className="font-medium">Trusted by 50K+ Citizens</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Government Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;