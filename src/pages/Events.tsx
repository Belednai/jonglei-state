import { useState } from "react";
import { Search, Filter, Calendar, MapPin, Users, Clock, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { upcomingEvents } from "@/data/mockData";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || event.type.toLowerCase().replace(" ", "-") === typeFilter;
    const matchesStatus = statusFilter === "all" || event.status.toLowerCase().replace(" ", "-") === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

  const eventTypes = ["Conference", "Training", "Meeting", "Fair/Exhibition", "Celebration", "Dialogue", "Campaign Launch", "Public Consultation", "Public Service"];
  const eventStatuses = ["Registration Open", "Registration Closed", "Scheduled", "Open to Public", "Invitation Only"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open": return "default";
      case "Registration Closed": return "secondary";
      case "Scheduled": return "outline";
      case "Open to Public": return "default";
      case "Invitation Only": return "destructive";
      default: return "outline";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference": return "default";
      case "Training": return "secondary";
      case "Official Meeting": return "outline";
      case "Fair/Exhibition": return "default";
      case "Celebration": return "default";
      default: return "secondary";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Events & Activities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay informed about upcoming government events, public meetings, training programs, 
            and community activities across Jonglei State.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events by title, description, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search events"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(" ", "-")}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {eventStatuses.map((status) => (
                  <SelectItem key={status} value={status.toLowerCase().replace(" ", "-")}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {currentEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  <Badge variant={getStatusColor(event.status)} className="ml-2 text-xs">
                    {event.status}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Date and Time */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{formatTime(event.time)}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground">{event.location}</span>
                </div>

                {/* Organizer */}
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground">{event.organizer}</span>
                </div>

                {/* Capacity and Registration */}
                {event.capacity && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground">Capacity</span>
                      </div>
                      <span className="font-medium">{event.capacity} people</span>
                    </div>
                    {event.registered && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${Math.min((event.registered! / event.capacity) * 100, 100)}%` }}
                        ></div>
                      </div>
                    )}
                    {event.registered && (
                      <p className="text-xs text-muted-foreground">
                        {event.registered} registered out of {event.capacity}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <Badge variant={getTypeColor(event.type)} className="text-xs">
                    {event.type}
                  </Badge>
                  {event.county && (
                    <Badge variant="outline" className="text-xs">
                      {event.county.charAt(0).toUpperCase() + event.county.slice(1).replace('-', ' ')} County
                    </Badge>
                  )}
                </div>

                {/* Action Button */}
                {event.status === "Registration Open" && (
                  <Button className="w-full">
                    Register Now
                  </Button>
                )}
                {event.status === "Open to Public" && (
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Information
                  </Button>
                )}
                {event.status === "Scheduled" && (
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                )}
                {event.status === "Registration Closed" && (
                  <Button variant="secondary" className="w-full" disabled>
                    Registration Closed
                  </Button>
                )}
                {event.status === "Invitation Only" && (
                  <Button variant="outline" className="w-full">
                    Contact Organizer
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                size="sm"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found matching your criteria.</p>
          </div>
        )}

        {/* Upcoming Highlights */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Important Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                <div className="bg-primary/10 p-2 rounded">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm line-clamp-1">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(event.date)} at {formatTime(event.time)}</p>
                  <p className="text-xs text-muted-foreground">{event.location}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {event.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
