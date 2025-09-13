import { useState } from "react";
import { Search, MapPin, Users, Phone, Mail, Building, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { counties } from "@/data/mockData";

const Counties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCounties, setExpandedCounties] = useState<string[]>([]);

  const filteredCounties = counties.filter(county => 
    county.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    county.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
    county.commissioner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCountyExpansion = (countyId: string) => {
    setExpandedCounties(prev => 
      prev.includes(countyId) 
        ? prev.filter(id => id !== countyId)
        : [...prev, countyId]
    );
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Counties of Jonglei State</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore the administrative divisions of Jonglei State, including all seven counties, 
            their payams, bomas, and local leadership structure.
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{counties.length}</div>
              <p className="text-sm text-muted-foreground">Counties</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {counties.reduce((total, county) => total + county.payams.length, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Payams</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {counties.reduce((total, county) => 
                  total + county.payams.reduce((payamTotal, payam) => payamTotal + payam.bomas.length, 0), 0
                )}
              </div>
              <p className="text-sm text-muted-foreground">Bomas</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {formatNumber(counties.reduce((total, county) => total + county.population, 0))}
              </div>
              <p className="text-sm text-muted-foreground">Total Population</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search counties, capitals, or commissioners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              aria-label="Search counties"
            />
          </div>
        </div>

        {/* Counties List */}
        <div className="space-y-6">
          {filteredCounties.map((county) => (
            <Card key={county.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{county.name}</CardTitle>
                    <CardDescription className="text-base">
                      Capital: {county.capital} | Commissioner: {county.commissioner}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    {county.payams.length} Payams
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* County Overview */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Population</p>
                      <p className="font-medium">{formatNumber(county.population)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-medium">{formatNumber(county.area)} km²</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Administrative Units</p>
                      <p className="font-medium">
                        {county.payams.reduce((total, payam) => total + payam.bomas.length, 0)} Bomas
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <a href={`tel:${county.phone}`} className="hover:underline">
                      {county.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <a href={`mailto:${county.email}`} className="hover:underline">
                      {county.email}
                    </a>
                  </div>
                </div>

                {/* Payams Collapsible Section */}
                <Collapsible 
                  open={expandedCounties.includes(county.id)}
                  onOpenChange={() => toggleCountyExpansion(county.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>View Payams & Bomas ({county.payams.length})</span>
                      <ChevronRight 
                        className={`h-4 w-4 transition-transform ${
                          expandedCounties.includes(county.id) ? 'rotate-90' : ''
                        }`} 
                      />
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {county.payams.map((payam) => (
                        <Card key={payam.id} className="border-l-4 border-l-primary">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{payam.name} Payam</CardTitle>
                            <CardDescription>
                              Headquarters: {payam.headquarters} | Chief: {payam.chief}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center text-sm">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              <span>Population: {formatNumber(payam.population)}</span>
                            </div>
                            
                            <div className="space-y-2">
                              <p className="text-sm font-medium">Bomas ({payam.bomas.length}):</p>
                              <div className="grid grid-cols-1 gap-1">
                                {payam.bomas.map((boma) => (
                                  <div 
                                    key={boma.id} 
                                    className="flex items-center justify-between p-2 bg-muted/30 rounded text-xs"
                                  >
                                    <div>
                                      <span className="font-medium">{boma.name}</span>
                                      <span className="text-muted-foreground ml-2">
                                        Chief: {boma.chief}
                                      </span>
                                    </div>
                                    <span className="text-muted-foreground">
                                      {formatNumber(boma.population)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCounties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No counties found matching your search criteria.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Counties;
