import { useState } from "react";
import { Search, Filter, MapPin, Users, Phone, Mail, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { departments } from "@/data/mockData";

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === "all" || dept.status.toLowerCase() === filterBy;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Departments</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore the various departments within the Office of the Governor and learn about their services, 
            leadership, and how to contact them.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search departments"
            />
          </div>
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.map((department) => (
            <Card key={department.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{department.name}</CardTitle>
                  <Badge variant={department.status === 'Active' ? 'default' : 'secondary'}>
                    {department.status}
                  </Badge>
                </div>
                <CardDescription>{department.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{department.staff} staff members</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{department.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Department Head:</p>
                  <p className="text-sm text-muted-foreground">{department.head}</p>
                </div>

                {department.budget && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>Annual Budget: ${(department.budget / 1000000).toFixed(1)}M</span>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {department.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {department.counties && department.counties.length > 0 && department.counties[0] !== "all" && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Coverage Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {department.counties.slice(0, 3).map((county, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {county.charAt(0).toUpperCase() + county.slice(1).replace('-', ' ')}
                        </Badge>
                      ))}
                      {department.counties.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{department.counties.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href={`tel:${department.phone}`} className="hover:underline">
                      {department.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href={`mailto:${department.email}`} className="hover:underline">
                      {department.email}
                    </a>
                  </div>
                </div>

                <Button 
                  asChild 
                  className="w-full"
                  aria-label={`View details for ${department.name} department`}
                >
                  <Link to={`/departments/${department.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDepartments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No departments found matching your criteria.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
