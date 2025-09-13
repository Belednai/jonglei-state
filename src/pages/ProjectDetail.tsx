import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, DollarSign, Users, User, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: "healthcare-expansion",
    title: "Healthcare Infrastructure Expansion",
    description: "Upgrading medical facilities and establishing new health centers across rural areas to improve healthcare access and quality for underserved communities.",
    status: "In Progress",
    progress: 65,
    budget: 2500000,
    spent: 1625000,
    startDate: "2023-06-01",
    endDate: "2024-12-31",
    location: "Bor County, Twic East County",
    beneficiaries: 25000,
    category: "Healthcare",
    priority: "High",
    manager: "Dr. Sarah Johnson",
    objectives: [
      "Establish 5 new health centers in rural areas",
      "Upgrade existing medical equipment in 3 facilities", 
      "Train 50 healthcare workers",
      "Improve maternal and child health services",
      "Implement telemedicine capabilities"
    ],
    milestones: [
      {
        title: "Site Preparation and Planning",
        status: "Completed",
        date: "2023-08-15",
        description: "Completed site surveys and obtained necessary permits"
      },
      {
        title: "Phase 1: Equipment Procurement",
        status: "Completed", 
        date: "2023-10-30",
        description: "Procured and delivered medical equipment for 3 health centers"
      },
      {
        title: "Phase 2: Construction",
        status: "Completed",
        date: "2024-01-15", 
        description: "Completed construction of 3 new health centers"
      },
      {
        title: "Phase 3: Staff Training",
        status: "In Progress",
        date: "2024-03-01",
        description: "Training healthcare workers on new equipment and procedures"
      },
      {
        title: "Phase 4: Final Implementation",
        status: "Pending",
        date: "2024-06-01",
        description: "Complete remaining 2 health centers and full system integration"
      }
    ],
    updates: [
      {
        date: "2024-01-15",
        title: "Phase 2 Construction Completed",
        description: "Successfully completed construction of 3 new health centers in Bor County. All facilities are equipped with modern medical equipment and are ready for operation.",
        author: "Project Manager"
      },
      {
        date: "2024-01-08",
        title: "Equipment Installation Progress",
        description: "Medical equipment installation is proceeding on schedule. X-ray machines and laboratory equipment have been installed and tested.",
        author: "Technical Team"
      },
      {
        date: "2023-12-20",
        title: "Community Engagement Session",
        description: "Held community meetings to educate residents about new healthcare services and gather feedback on service delivery preferences.",
        author: "Community Liaison"
      }
    ],
    risks: [
      {
        type: "High",
        description: "Weather delays during rainy season may affect remaining construction",
        mitigation: "Adjusted timeline and secured covered storage for materials"
      },
      {
        type: "Medium", 
        description: "Difficulty recruiting qualified healthcare staff",
        mitigation: "Partnering with medical schools and offering competitive packages"
      }
    ],
    documents: [
      { name: "Project Proposal", type: "PDF", date: "2023-05-15" },
      { name: "Environmental Impact Assessment", type: "PDF", date: "2023-06-01" },
      { name: "Budget Breakdown", type: "Excel", date: "2023-06-10" },
      { name: "Progress Report Q4 2023", type: "PDF", date: "2024-01-05" }
    ]
  }
  // Add more projects as needed
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "In Progress": return "secondary";
      case "Planning": return "outline";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  const budgetPercentage = (project.spent / project.budget) * 100;

  return (
    <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant={getStatusColor(project.status)}>{project.status}</Badge>
              <Badge variant={getPriorityColor(project.priority)}>{project.priority} Priority</Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Progress</span>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{project.progress}%</div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Budget</span>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">${(project.budget / 1000000).toFixed(1)}M</div>
                  <div className="text-sm text-muted-foreground">
                    ${(project.spent / 1000000).toFixed(1)}M spent ({budgetPercentage.toFixed(0)}%)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Beneficiaries</span>
                </div>
                <div className="text-2xl font-bold">{project.beneficiaries.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">People served</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Timeline</span>
                </div>
                <div className="text-lg font-bold">
                  {Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                </div>
                <div className="text-sm text-muted-foreground">Until completion</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="milestones">Milestones</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {project.risks && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Risk Assessment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {project.risks.map((risk, index) => (
                        <div key={index} className="border-l-4 border-yellow-500 pl-4">
                          <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            <Badge variant={risk.type === 'High' ? 'destructive' : 'secondary'}>
                              {risk.type} Risk
                            </Badge>
                          </div>
                          <p className="font-medium mb-1">{risk.description}</p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Mitigation:</strong> {risk.mitigation}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="milestones" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Milestones</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {project.milestones.map((milestone, index) => (
                      <div key={index} className="relative">
                        {index < project.milestones.length - 1 && (
                          <div className="absolute left-4 top-8 w-0.5 h-16 bg-border"></div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            milestone.status === 'Completed' ? 'bg-green-100 text-green-600' :
                            milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                            'bg-gray-100 text-gray-400'
                          }`}>
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{milestone.title}</h4>
                              <Badge variant={
                                milestone.status === 'Completed' ? 'default' :
                                milestone.status === 'In Progress' ? 'secondary' :
                                'outline'
                              }>
                                {milestone.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              Target: {new Date(milestone.date).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="updates" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Updates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {project.updates.map((update, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {new Date(update.date).toLocaleDateString()}
                          </span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{update.author}</span>
                        </div>
                        <h4 className="font-medium mb-2">{update.title}</h4>
                        <p className="text-sm text-muted-foreground">{update.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {project.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">{doc.type}</span>
                            </div>
                            <div>
                              <p className="font-medium">{doc.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(doc.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">Download</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Project Manager</p>
                      <p className="font-medium">{project.manager}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-3 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">
                        {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <Link to="/contact">Contact Project Team</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  Subscribe to Updates
                </Button>
                <Button variant="outline" className="w-full">
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
    </main>
  );
};

export default ProjectDetail;
