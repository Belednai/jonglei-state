import { Link } from "react-router-dom";
import FlagImage from "/Flag_of_Jonglei.png";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink,
  FileText,
  Shield,
  Heart,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const quickLinks = [
    { name: "Departments", href: "/departments" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "Citizen Portal", href: "/citizen-portal" },
    { name: "Staff Login", href: "/staff/login" }
  ];

  const services = [
    { name: "Birth Certificate", href: "/services/birth-certificate" },
    { name: "Business Registration", href: "/services/business-registration" },
    { name: "Land Registration", href: "/services/land-registration" },
    { name: "Tax Information", href: "/services/tax-information" },
    { name: "Health Services", href: "/services/health" },
    { name: "Education", href: "/services/education" }
  ];

  const resources = [
    { name: "Open Data", href: "/open-data" },
    { name: "Publications", href: "/publications" },
    { name: "Forms & Documents", href: "/forms" },
    { name: "Procurement", href: "/procurement" },
    { name: "Careers", href: "/careers" },
    { name: "FAQs", href: "/faqs" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Accessibility", href: "/legal/accessibility" },
    { name: "Freedom of Information", href: "/legal/foi" },
    { name: "Data Protection", href: "/legal/data-protection" }
  ];

  const socialMedia = [
    { name: "Facebook", href: "#", icon: Facebook, color: "hover:text-primary" },
    { name: "Twitter", href: "#", icon: Twitter, color: "hover:text-primary" },
    { name: "Instagram", href: "#", icon: Instagram, color: "hover:text-primary" },
    { name: "YouTube", href: "#", icon: Youtube, color: "hover:text-primary" }
  ];

  const counties = [
    "Bor County", "Twic East County", "Duk County", "Pibor County", 
    "Pochalla County", "Akobo County", "Nyirol County", "Uror County"
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="gov-container">
        <div className="py-20 space-y-16">
          {/* Top Section - Logo and Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo and Description */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-4 group">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl group-hover:shadow-xl transition-all duration-300 shadow-lg border border-gray-200 relative overflow-hidden">
                  <img 
                    src={FlagImage} 
                    alt="Jonglei State Flag" 
                    className="h-12 w-12 object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Office of the Governor
                  </h2>
                  <p className="text-base text-muted-foreground font-medium">Jonglei State Government</p>
                </div>
              </Link>
              <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
                Serving the people of Jonglei State with transparency, accountability, and dedication to public service through our modern digital platform.
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`p-3 rounded-xl bg-background/80 border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300 ${social.color} hover:scale-110`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Subscribe to our newsletter for the latest government updates, announcements, and community news.
              </p>
              <div className="flex space-x-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 h-12 rounded-xl border-border/50 focus:border-primary/50 touch-friendly"
                  aria-label="Email address for newsletter subscription"
                  aria-describedby="newsletter-description"
                  required
                  autoComplete="email"
                />
                <span id="newsletter-description" className="sr-only">
                  Subscribe to receive government updates and announcements
                </span>
                <Button 
                  size="default" 
                  className="h-12 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 touch-friendly"
                  type="submit"
                  aria-describedby="newsletter-description"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link 
                      to={resource.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium group flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Counties Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Counties We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {counties.map((county) => (
                <Badge key={county} variant="secondary" className="text-sm px-4 py-2 rounded-xl font-medium">
                  {county}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-border/50">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>Address</span>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Governor's Office<br />
                Jonglei State Government Complex<br />
                Bor, Jonglei State, South Sudan
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span>Contact</span>
              </h4>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>Phone: +211 123 456 789</p>
                <p>Fax: +211 123 456 790</p>
                <p>Email: info@jonglei.gov.ss</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span>Office Hours</span>
              </h4>
              <div className="space-y-2 text-muted-foreground leading-relaxed">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center pt-8 border-t border-border/50">
            <div className="flex items-center justify-center space-x-12 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary fill-current" />
                <span className="font-medium">Trusted by 50K+ Citizens</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Government Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="gov-container">
          <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>&copy; {currentYear} Office of the Governor, Jonglei State. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Last updated: {lastUpdated}</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/legal/accessibility" className="hover:text-primary transition-colors duration-300 flex items-center space-x-2 font-medium">
                <Shield className="h-4 w-4" />
                <span>Accessibility</span>
              </Link>
              <span className="hidden md:inline">•</span>
              <Link to="/legal/privacy" className="hover:text-primary transition-colors duration-300 font-medium">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <Link to="/feedback" className="hover:text-primary transition-colors duration-300 flex items-center space-x-2 font-medium">
                <Heart className="h-4 w-4" />
                <span>Feedback</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;