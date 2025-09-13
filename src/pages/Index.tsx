import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Newspaper, 
  Calendar, 
  TrendingUp, 
  MapPin, 
  Users, 
  DollarSign, 
  Building2,
  ArrowRight,
  Clock,
  CheckCircle,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import { newsArticles, upcomingEvents, projects, counties, departments } from "@/data/mockData";

const Index = () => {
  // Get featured news (first 3 featured articles)
  const featuredNews = newsArticles.filter(article => article.featured).slice(0, 3);
  
  // Get upcoming events (next 4 events)
  const nextEvents = upcomingEvents.slice(0, 4);
  
  // Get active projects (first 3 in-progress projects)
  const activeProjects = projects.filter(project => project.status === "In Progress").slice(0, 3);
  
  // Calculate statistics
  const totalPopulation = counties.reduce((total, county) => total + county.population, 0);
  const totalBudget = departments.reduce((total, dept) => total + (dept.budget || 0), 0);
  const totalStaff = departments.reduce((total, dept) => total + dept.staff, 0);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <main id="main-content">
        <Hero />
        <Services />
        
        {/* Key Statistics Section */}
        <section className="gov-section bg-gradient-subtle texture-dots">
          <div className="gov-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Jonglei State at a Glance
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key statistics and achievements across our administrative divisions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Card className="gov-card google-hover-lift text-center p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {formatNumber(totalPopulation)}
                  </div>
                  <p className="text-muted-foreground">Total Population</p>
                </CardContent>
              </Card>
              
              <Card className="gov-card google-hover-lift text-center p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <Building2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {counties.length}
                  </div>
                  <p className="text-muted-foreground">Counties</p>
                </CardContent>
              </Card>
              
              <Card className="gov-card google-hover-lift text-center p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    ${(totalBudget / 1000000).toFixed(1)}M
                  </div>
                  <p className="text-muted-foreground">Annual Budget</p>
                </CardContent>
              </Card>
              
              <Card className="gov-card google-hover-lift text-center p-4 md:p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {totalStaff}
                </div>
                  <p className="text-muted-foreground">Government Staff</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured News Section */}
        <section className="gov-section">
          <div className="gov-container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div className="flex-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-4">
                  Latest News & Updates
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Stay informed about government initiatives and community developments
                </p>
              </div>
              <Button variant="outline" className="google-hover-lift w-full sm:w-auto self-start sm:self-auto" asChild>
                <Link to="/news">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {featuredNews.map((article) => (
                <Card key={article.id} className="gov-card google-hover-lift group">
                  <div className="aspect-video bg-muted mb-4 overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Eye className="h-3 w-3 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{article.author}</span>
                      <span>{formatDate(article.publishedDate)}</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link to={`/news/${article.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Active Projects Section */}
        <section className="gov-section bg-gradient-subtle texture-subtle">
          <div className="gov-container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-4">
                  Active Development Projects
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Track progress on major infrastructure and development initiatives
                </p>
              </div>
              <Button variant="outline" className="w-full sm:w-auto self-start sm:self-auto" asChild>
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {activeProjects.map((project) => (
                <Card key={project.id} className="gov-card group hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{project.status}</Badge>
                      <Badge variant={project.priority === 'High' ? 'destructive' : 'outline'}>
                        {project.priority} Priority
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-primary" />
                        <div>
                          <p className="text-muted-foreground">Budget</p>
                          <p className="font-medium">${(project.budget / 1000000).toFixed(1)}M</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <div>
                          <p className="text-muted-foreground">Beneficiaries</p>
                          <p className="font-medium">{formatNumber(project.beneficiaries)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to={`/projects/${project.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="gov-section">
          <div className="gov-container">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-4">
                  Upcoming Events & Activities
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Join government meetings, training programs, and community events
                </p>
              </div>
              <Button variant="outline" className="w-full sm:w-auto self-start sm:self-auto" asChild>
                <Link to="/events">
                  View All Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nextEvents.map((event) => (
                <Card key={event.id} className="gov-card group hover:shadow-lg transition-shadow">
                  {event.image && (
                    <div className="aspect-video bg-muted mb-4 overflow-hidden rounded-t-lg">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <Badge 
                        variant={event.status === 'Registration Open' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    
                    {event.capacity && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Capacity</span>
                        <span className="font-medium">{event.capacity} people</span>
                      </div>
                    )}
                    
                    <Button className="w-full" asChild>
                      <Link to="/events">
                        {event.status === 'Registration Open' ? 'Register Now' : 'View Details'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="gov-section bg-gradient-hero rounded-t-3xl texture-subtle">
          <div className="gov-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Quick Access to Government Services
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Everything you need to interact with Jonglei State Government in one place
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-effect text-center p-6 border-0 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-primary/15 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Citizen Portal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Submit requests, track applications, and access government services
                </p>
                <Button className="w-full" asChild>
                  <Link to="/citizen-portal">Access Portal</Link>
                </Button>
              </Card>
              
              <Card className="glass-effect text-center p-6 border-0 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-primary/15 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Departments</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Explore government departments and their services
                </p>
                <Button className="w-full" asChild>
                  <Link to="/departments">View Departments</Link>
                </Button>
              </Card>
              
              <Card className="glass-effect text-center p-6 border-0 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-primary/15 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Counties</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn about administrative divisions and local leadership
                </p>
                <Button className="w-full" asChild>
                  <Link to="/counties">View Counties</Link>
                </Button>
              </Card>
              
              <Card className="glass-effect text-center p-6 border-0 shadow-xl hover:scale-105 transition-all duration-300">
                <div className="bg-primary/15 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Newspaper className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">News & Events</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Stay updated with latest news and upcoming events
                </p>
                <Button className="w-full" asChild>
                  <Link to="/news">Read News</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Index;
