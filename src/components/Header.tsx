import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FlagImage from "/Flag_of_Jonglei.png";

import { 
  Building2, 
  Menu, 
  X, 
  Globe,
  Phone,
  Mail,
  ChevronDown,
  Users,
  FileText,
  Newspaper,
  MessageSquare,
  Shield,
  Settings,
  Search,
} from "lucide-react";

import { SkipToContent } from "./SkipToContent";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(null);
  }, [location.pathname]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: "Departments", 
      href: "/departments",
      icon: Building2,
      description: "Government departments and services",
      children: [
        { name: "All Departments", href: "/departments", description: "Browse all government departments" },
        { name: "Health Services", href: "/departments/health", description: "Healthcare and medical services" },
        { name: "Education", href: "/departments/education", description: "Schools and educational programs" },
        { name: "Infrastructure", href: "/departments/infrastructure", description: "Roads, buildings, and utilities" }
      ]
    },
    { 
      name: "Projects", 
      href: "/projects",
      icon: FileText,
      description: "Development projects and initiatives",
      children: [
        { name: "All Projects", href: "/projects", description: "Browse all development projects" },
        { name: "Infrastructure", href: "/projects?category=infrastructure", description: "Roads, bridges, and buildings" },
        { name: "Healthcare", href: "/projects?category=healthcare", description: "Medical facilities and programs" },
        { name: "Education", href: "/projects?category=education", description: "Schools and training centers" }
      ]
    },
    { 
      name: "News", 
      href: "/news",
      icon: Newspaper,
      description: "Latest government news and updates",
      children: [
        { name: "All News", href: "/news", description: "Latest government announcements" },
        { name: "Press Releases", href: "/news?type=press-release", description: "Official press statements" },
        { name: "Events", href: "/news?type=events", description: "Upcoming government events" },
        { name: "Publications", href: "/news?type=publications", description: "Reports and documents" }
      ]
    },
    { 
      name: "Contact", 
      href: "/contact",
      icon: MessageSquare,
      description: "Get in touch with government offices",
      children: [
        { name: "General Inquiry", href: "/contact", description: "Contact government offices" },
        { name: "Report Issue", href: "/contact?type=issue", description: "Report problems or concerns" },
        { name: "Request Information", href: "/contact?type=foi", description: "Freedom of Information requests" },
        { name: "Feedback", href: "/contact?type=feedback", description: "Share your feedback" }
      ]
    }
  ];

  const quickActions = [
    { name: "Staff Login", href: "/staff/login", icon: Shield, variant: "default" as const }
  ];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Array<{
    id: number;
    type: string;
    url: string;
    title: string;
    description: string;
    category?: string;
  }>>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would call an API here
    // For demonstration, we'll simulate a search
    if (query.toLowerCase().includes("health")) {
      setResults([
        { id: 1, type: "department", url: "/departments/health", title: "Health Services Department", description: "Information about healthcare and medical services." },
        { id: 2, type: "project", url: "/projects?category=healthcare", title: "Healthcare Projects", description: "Development projects related to healthcare." },
      ]);
    } else if (query.toLowerCase().includes("education")) {
      setResults([
        { id: 3, type: "department", url: "/departments/education", title: "Education Department", description: "Information about schools and educational programs." },
        { id: 4, type: "project", url: "/projects?category=education", title: "Education Projects", description: "Development projects related to education." },
      ]);
    } else {
      setResults([]);
    }
    setShowResults(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "department":
        return <Building2 className="h-5 w-5 text-primary" />;
      case "project":
        return <FileText className="h-5 w-5 text-primary" />;
      case "news":
        return <Newspaper className="h-5 w-5 text-primary" />;
      default:
        return <Search className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <>
      <SkipToContent />
      <header className={`gov-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Contact Bar - Clean and spacious */}
        <div className="bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground py-4 transition-all duration-300">
          <div className="gov-container">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3 hover:text-primary-foreground/80 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+211 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-primary-foreground/80 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">info@jonglei.gov.ss</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-4 w-4" />
                <select 
                  className="bg-transparent text-primary-foreground text-sm border-none focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 rounded-lg px-3 py-2 font-medium transition-all duration-300 hover:bg-primary-foreground/10 touch-friendly-sm"
                  aria-label="Select language"
                  title="Language selection"
                  role="combobox"
                  aria-expanded="false"
                >
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="gov-container">
          <div className="flex justify-between items-center py-4 sm:py-6">
            {/* Logo and Title - Clean and concise */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group">
              <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 shadow-sm border border-gray-200 relative overflow-hidden">
                <img 
                  src={FlagImage} 
                  alt="Jonglei State Flag" 
                  className="h-6 w-6 sm:h-10 sm:w-10 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                  onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Image loaded successfully')}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300 tracking-tight">
                  Jonglei State
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 ml-auto mr-8">
              {/* Home Button */}
              <Button
                variant="ghost"
                className="google-hover-lift h-11 px-4 text-foreground/80 hover:text-primary hover:bg-primary/8 transition-all duration-300 font-medium rounded-xl relative overflow-hidden group"
                asChild
              >
                <Link to="/">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </Link>
              </Button>
              
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsMegaMenuOpen(item.name)}
                  onMouseLeave={() => setIsMegaMenuOpen(null)}
                >
                  <Button
                    variant="ghost"
                    className="google-hover-lift h-11 px-4 text-foreground/80 hover:text-primary hover:bg-primary/8 transition-all duration-300 font-medium rounded-xl relative overflow-hidden group"
                    asChild
                  >
                    <Link to={item.href}>
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-180" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    </Link>
                  </Button>

                  {/* Google-inspired Mega Menu */}
                  {isMegaMenuOpen === item.name && (
                    <div className="absolute top-full left-0 w-[420px] bg-popover/95 backdrop-blur-xl border border-border/30 rounded-3xl shadow-lg p-8 z-50 animate-fade-in animate-scale-in">
                      <div className="grid grid-cols-1 gap-3">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="google-hover-lift flex items-start space-x-4 p-4 rounded-2xl hover:bg-accent/20 hover:text-accent-foreground transition-all duration-300 group"
                          >
                            <div className="bg-primary/10 p-3 rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                              <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                            </div>
                            <div className="space-y-1">
                              <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">{child.name}</div>
                              <div className="text-xs text-muted-foreground group-hover:text-accent-foreground/90 transition-colors duration-300 leading-relaxed">{child.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:block w-52">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-12 py-2.5 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 touch-friendly-sm bg-background/50 backdrop-blur-sm"
                  aria-label="Search government services"
                  aria-describedby="search-description"
                  role="searchbox"
                  autoComplete="off"
                />
                <span id="search-description" className="sr-only">
                  Search for government services, departments, and information
                </span>
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 p-1 rounded-md hover:bg-primary/10"
                  aria-label="Search button"
                >
                  <Search className="h-4 w-4" />
                </button>
                
                {/* Desktop Search Results */}
                {showResults && (
                  <div className="absolute top-full left-0 w-full bg-white border border-border rounded-lg shadow-lg z-50 p-4 animate-fade-in animate-scale-in">
                    <h3 className="text-lg font-semibold mb-3">Search Results</h3>
                    {results.length === 0 ? (
                      <p className="text-muted-foreground">No results found for "{query}". Try a different search term.</p>
                    ) : (
                      <div className="space-y-3">
                        {results.map((result) => (
                          <div key={result.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/20">
                            <div className="bg-primary/10 p-2 rounded-md">
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1">
                              <Link to={result.url} className="text-sm font-medium text-foreground hover:underline">
                                {result.title}
                              </Link>
                              <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                              {result.category && (
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {result.category}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* CTA Buttons - Improved Spacing */}
            <div className="hidden lg:flex items-center space-x-3 ml-8">
              {quickActions.map((action) => (
                <Button key={action.name} variant={action.variant} size="sm" className="google-hover-lift h-11 px-6 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300" asChild>
                  <Link to={action.href} className="flex items-center space-x-2 group">
                    <action.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold">{action.name}</span>
                  </Link>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-10 w-10 p-0 rounded-lg touch-friendly"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav 
              id="mobile-navigation" 
              className="lg:hidden border-t border-border/50 py-4 space-y-4 animate-fade-in max-h-[calc(100vh-120px)] overflow-y-auto"
              aria-label="Mobile navigation menu"
              role="navigation"
            >
              {/* Mobile Search */}
              <div className="px-2">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 touch-friendly text-base bg-background/50 backdrop-blur-sm"
                    aria-label="Search government services on mobile"
                    role="searchbox"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 p-1.5 rounded-md hover:bg-primary/10"
                    aria-label="Search button"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </form>
                
                {/* Mobile Search Results */}
                {showResults && (
                  <div className="mt-4 bg-white border border-border rounded-lg shadow-lg p-4">
                    <h3 className="text-lg font-semibold mb-3">Search Results</h3>
                    {results.length === 0 ? (
                      <p className="text-muted-foreground">No results found for "{query}". Try a different search term.</p>
                    ) : (
                      <div className="space-y-3">
                        {results.map((result) => (
                          <div key={result.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/20">
                            <div className="bg-primary/10 p-2 rounded-md">
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1">
                              <Link to={result.url} className="text-sm font-medium text-foreground hover:underline">
                                {result.title}
                              </Link>
                              <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                              {result.category && (
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {result.category}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Home Button */}
              <Link
                to="/"
                className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold py-3 text-base px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <img 
                    src={FlagImage} 
                    alt="Jonglei State Flag" 
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <span>Home</span>
              </Link>
              
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold py-3 text-base px-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                  {item.children && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300 py-2 font-medium px-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-border/50 px-2 pb-6">
                {quickActions.map((action) => (
                  <Button key={action.name} variant={action.variant} size="default" className="h-12 rounded-xl font-semibold touch-friendly shadow-sm hover:shadow-md transition-all duration-300" asChild>
                    <Link to={action.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center space-x-2">
                      <action.icon className="h-4 w-4" />
                      <span>{action.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;