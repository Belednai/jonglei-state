import { useState, useEffect } from "react";
import { Search, FileText, Clock, CheckCircle, AlertCircle, Download, Eye, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Link, useSearchParams } from "react-router-dom";

interface Request {
  referenceId: string;
  title: string;
  category: string;
  serviceType: string;
  status: 'submitted' | 'under-review' | 'in-progress' | 'completed' | 'rejected';
  priority: string;
  submittedAt: string;
  lastUpdated: string;
  progress: number;
  estimatedCompletion?: string;
  assignedTo?: string;
  notes?: string;
  timeline: {
    date: string;
    status: string;
    description: string;
    by: string;
  }[];
  attachments?: {
    id: string;
    name: string;
    type: 'original' | 'response' | 'additional';
  }[];
}

// Mock data for demonstration
const mockRequests: Request[] = [
  {
    referenceId: 'REQ-2024-001',
    title: 'Birth Certificate Request',
    category: 'Identity Documents',
    serviceType: 'birth-certificate',
    status: 'completed',
    priority: 'medium',
    submittedAt: '2024-01-15T10:00:00Z',
    lastUpdated: '2024-01-20T14:30:00Z',
    progress: 100,
    assignedTo: 'Civil Registry Office',
    notes: 'Certificate has been issued and is ready for collection.',
    timeline: [
      {
        date: '2024-01-15T10:00:00Z',
        status: 'Submitted',
        description: 'Request submitted and received',
        by: 'System'
      },
      {
        date: '2024-01-16T09:15:00Z',
        status: 'Under Review',
        description: 'Documents verified and request approved for processing',
        by: 'Registry Officer'
      },
      {
        date: '2024-01-18T11:45:00Z',
        status: 'In Progress',
        description: 'Certificate generation in progress',
        by: 'Processing Unit'
      },
      {
        date: '2024-01-20T14:30:00Z',
        status: 'Completed',
        description: 'Birth certificate issued and ready for collection',
        by: 'Civil Registry Office'
      }
    ],
    attachments: [
      { id: '1', name: 'birth_certificate.pdf', type: 'response' },
      { id: '2', name: 'collection_notice.pdf', type: 'additional' }
    ]
  },
  {
    referenceId: 'REQ-2024-002',
    title: 'Business License Application',
    category: 'Business Services',
    serviceType: 'license-application',
    status: 'in-progress',
    priority: 'high',
    submittedAt: '2024-01-18T14:20:00Z',
    lastUpdated: '2024-01-22T16:10:00Z',
    progress: 75,
    estimatedCompletion: '2024-01-25T17:00:00Z',
    assignedTo: 'Business Registration Office',
    notes: 'Final verification in progress. License expected to be ready by January 25.',
    timeline: [
      {
        date: '2024-01-18T14:20:00Z',
        status: 'Submitted',
        description: 'Business license application submitted',
        by: 'System'
      },
      {
        date: '2024-01-19T10:30:00Z',
        status: 'Under Review',
        description: 'Application documents reviewed and approved',
        by: 'Business Officer'
      },
      {
        date: '2024-01-22T16:10:00Z',
        status: 'In Progress',
        description: 'Final verification and license preparation in progress',
        by: 'Registration Unit'
      }
    ],
    attachments: [
      { id: '3', name: 'business_application.pdf', type: 'original' },
      { id: '4', name: 'verification_checklist.pdf', type: 'additional' }
    ]
  }
];

const CitizenPortalStatus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundRequest, setFoundRequest] = useState<Request | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  // Check for reference ID in URL params
  useEffect(() => {
    const refId = searchParams.get('ref');
    if (refId) {
      setSearchTerm(refId);
      handleSearch(refId);
    }
  }, [searchParams]);

  const handleSearch = async (referenceId?: string) => {
    const searchId = referenceId || searchTerm;
    if (!searchId) {
      toast({
        title: "Please enter a reference ID",
        description: "You need to provide a reference ID to search for your request.",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);

    try {
      // Check localStorage first
      const localRequests = JSON.parse(localStorage.getItem('citizenRequests') || '[]');
      let request = localRequests.find((req: any) => req.referenceId === searchId);
      
      // If not found in localStorage, check mock data
      if (!request) {
        request = mockRequests.find(req => req.referenceId === searchId);
      }

      if (request) {
        setFoundRequest(request);
        toast({
          title: "Request Found",
          description: `Found request: ${request.title}`,
        });
      } else {
        setFoundRequest(null);
        toast({
          title: "Request Not Found",
          description: "No request found with the provided reference ID.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Search Error",
        description: "There was an error searching for your request.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'default';
      case 'in-progress': return 'secondary';
      case 'under-review': return 'outline';
      case 'submitted': return 'outline';
      case 'rejected': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return RefreshCw;
      case 'under-review': return Clock;
      case 'submitted': return FileText;
      case 'rejected': return AlertCircle;
      default: return FileText;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Check Request Status</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your reference ID to track the progress of your submitted request.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Search by Reference ID
              </CardTitle>
              <CardDescription>
                Enter the reference ID you received when you submitted your request.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="e.g., REQ-2024-001"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={() => handleSearch()} disabled={isSearching}>
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Request Details */}
        {foundRequest && (
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{foundRequest.title}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Reference ID: <span className="font-mono font-medium">{foundRequest.referenceId}</span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge variant={getStatusColor(foundRequest.status)} className="text-sm">
                      {foundRequest.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                    <Badge variant={getPriorityColor(foundRequest.priority)} className="text-xs">
                      {foundRequest.priority} Priority
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium">{foundRequest.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Submitted</p>
                    <p className="font-medium">{new Date(foundRequest.submittedAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Updated</p>
                    <p className="font-medium">{new Date(foundRequest.lastUpdated).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{foundRequest.progress}%</span>
                  </div>
                  <Progress value={foundRequest.progress} className="h-3" />
                </div>

                {foundRequest.estimatedCompletion && (
                  <div className="bg-primary/10 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <div>
                        <p className="font-medium text-primary">Estimated Completion</p>
                        <p className="text-primary/80">{new Date(foundRequest.estimatedCompletion).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {foundRequest.notes && (
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Latest Update</h4>
                    <p className="text-muted-foreground">{foundRequest.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Tabs defaultValue="timeline" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Timeline</CardTitle>
                    <CardDescription>Track the progress of your request through each stage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {foundRequest.timeline.map((event, index) => {
                        const StatusIcon = getStatusIcon(event.status.toLowerCase().replace(' ', '-'));
                        return (
                          <div key={index} className="relative">
                            {index < foundRequest.timeline.length - 1 && (
                              <div className="absolute left-4 top-8 w-0.5 h-16 bg-border"></div>
                            )}
                            <div className="flex items-start space-x-4">
                              <div className="bg-background border-2 border-primary rounded-full p-2">
                                <StatusIcon className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium">{event.status}</h4>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(event.date).toLocaleDateString()} at {new Date(event.date).toLocaleTimeString()}
                                  </span>
                                </div>
                                <p className="text-muted-foreground">{event.description}</p>
                                <p className="text-sm text-muted-foreground mt-1">By: {event.by}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Reference ID</p>
                          <p className="font-mono">{foundRequest.referenceId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Service Type</p>
                          <p className="font-medium">{foundRequest.serviceType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Priority Level</p>
                          <Badge variant={getPriorityColor(foundRequest.priority)}>
                            {foundRequest.priority} Priority
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Current Status</p>
                          <Badge variant={getStatusColor(foundRequest.status)}>
                            {foundRequest.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </Badge>
                        </div>
                        {foundRequest.assignedTo && (
                          <div>
                            <p className="text-sm text-muted-foreground">Assigned To</p>
                            <p className="font-medium">{foundRequest.assignedTo}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-muted-foreground">Progress</p>
                          <div className="flex items-center gap-2">
                            <Progress value={foundRequest.progress} className="flex-1" />
                            <span className="text-sm font-medium">{foundRequest.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Related Documents</CardTitle>
                    <CardDescription>Documents associated with your request</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {foundRequest.attachments && foundRequest.attachments.length > 0 ? (
                      <div className="space-y-3">
                        {foundRequest.attachments.map((doc) => (
                          <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <FileText className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{doc.name}</p>
                                <Badge variant="outline" className="text-xs">
                                  {doc.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Document
                                </Badge>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                        <p className="text-muted-foreground">No documents available yet.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Help Section */}
        {!foundRequest && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you can't find your request or need assistance, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/citizen-portal/new">Submit New Request</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
    </main>
  );
};

export default CitizenPortalStatus;
