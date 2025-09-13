import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Users, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const departments = [
  {
    id: "administration",
    name: "Administration",
    description: "General administrative services, policy coordination, and executive support",
    head: "Director General John Doe",
    staff: 45,
    location: "Building A, 1st Floor",
    phone: "+211 123 456 790",
    email: "admin@jonglei.gov.ss",
    services: ["Policy Development", "Executive Support", "Inter-agency Coordination"],
    status: "Active",
    mission: "To provide efficient administrative support and policy coordination for the Office of the Governor, ensuring seamless operations and effective governance.",
    responsibilities: [
      "Coordinate inter-departmental activities",
      "Develop and implement administrative policies",
      "Provide executive support to the Governor",
      "Manage official correspondence and documentation",
      "Oversee protocol and ceremonial functions"
    ],
    recentActivities: [
      {
        title: "Policy Review Initiative",
        date: "2024-01-15",
        description: "Comprehensive review of administrative policies to improve efficiency"
      },
      {
        title: "Digital Transformation Workshop",
        date: "2024-01-10", 
        description: "Training session on new digital workflows and processes"
      }
    ]
  },
  {
    id: "finance",
    name: "Finance & Budget",
    description: "Financial management, budget planning, and fiscal oversight",
    head: "CFO Jane Smith",
    staff: 32,
    location: "Building B, 2nd Floor",
    phone: "+211 123 456 791",
    email: "finance@jonglei.gov.ss",
    services: ["Budget Planning", "Financial Reporting", "Procurement Management"],
    status: "Active",
    mission: "To ensure responsible financial stewardship and transparent budget management for the state government.",
    responsibilities: [
      "Prepare annual budget proposals",
      "Monitor and control government expenditures",
      "Manage procurement processes",
      "Provide financial reporting and analysis",
      "Ensure compliance with financial regulations"
    ],
    recentActivities: [
      {
        title: "2024 Budget Preparation",
        date: "2024-01-20",
        description: "Finalizing budget allocations for the upcoming fiscal year"
      },
      {
        title: "Financial Audit Completion",
        date: "2024-01-12",
        description: "Successfully completed external audit with clean findings"
      }
    ]
  }
  // Add other departments as needed...
];

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const department = departments.find(dept => dept.id === id);

  if (!department) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">Department Not Found</h1>
            <p className="text-muted-foreground mb-6">The department you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/departments">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Departments
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/departments">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Departments
            </Link>
          </Button>
        </div>

        {/* Department Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold text-foreground">{department.name}</h1>
            <Badge variant={department.status === 'Active' ? 'default' : 'secondary'}>
              {department.status}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{department.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle>Mission Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{department.mission}</p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {department.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {department.services.map((service, index) => (
                    <Badge key={index} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {department.recentActivities.map((activity, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Department Head</h4>
                  <p className="text-muted-foreground">{department.head}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-primary" />
                    <a href={`tel:${department.phone}`} className="hover:underline">
                      {department.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-primary" />
                    <a href={`mailto:${department.email}`} className="hover:underline">
                      {department.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-3 text-primary mt-1" />
                    <span className="text-muted-foreground">{department.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-3 text-primary" />
                    <span className="text-muted-foreground">{department.staff} staff members</span>
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
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Department
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/citizen-portal/new">
                    <FileText className="mr-2 h-4 w-4" />
                    Submit Request
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`tel:${department.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Department
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
    </main>
  );
};

export default DepartmentDetail;
