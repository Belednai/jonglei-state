import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Upload, X, FileText, User, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";

const requestFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().regex(/^\+211\d{9}$/, "Phone must be in format +211XXXXXXXXX"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  nationalId: z.string().min(8, "National ID must be at least 8 characters"),
  category: z.string().min(1, "Please select a request category"),
  serviceType: z.string().min(1, "Please select a service type"),
  priority: z.string().min(1, "Please select priority level"),
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  preferredContact: z.string().min(1, "Please select preferred contact method"),
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
}

const CitizenPortalNew = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<RequestFormValues>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      fullName: "",
      phone: "+211",
      email: "",
      nationalId: "",
      category: "",
      serviceType: "",
      priority: "",
      title: "",
      description: "",
      preferredContact: "",
    }
  });

  const categories = [
    { value: "identity", label: "Identity Documents", services: ["Birth Certificate", "National ID", "Passport Application", "Certificate Replacement"] },
    { value: "business", label: "Business Services", services: ["Business Registration", "License Application", "Tax Certificate", "Trade Permit"] },
    { value: "land", label: "Land & Property", services: ["Land Title", "Property Registration", "Ownership Transfer", "Survey Request"] },
    { value: "general", label: "General Services", services: ["Information Request", "Complaint Filing", "Service Feedback", "Public Records"] },
    { value: "health", label: "Health Services", services: ["Health Certificate", "Medical Records", "Vaccination Certificate", "Health Facility Registration"] },
    { value: "education", label: "Education Services", services: ["School Certificate", "Transcript Request", "School Registration", "Scholarship Application"] }
  ];

  const selectedCategory = form.watch("category");
  const selectedCategoryData = categories.find(cat => cat.value === selectedCategory);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: `${file.name} is larger than 5MB. Please choose a smaller file.`,
          variant: "destructive"
        });
        return;
      }

      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type
      };

      setUploadedFiles(prev => [...prev, newFile]);
    });

    // Reset the input
    event.target.value = '';
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const onSubmit = async (data: RequestFormValues) => {
    setIsSubmitting(true);

    try {
      // Generate a reference ID
      const referenceId = 'REQ-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
      
      // In a real implementation, this would be an API call
      const requestData = {
        ...data,
        attachments: uploadedFiles,
        referenceId,
        submittedAt: new Date().toISOString(),
        status: 'submitted'
      };

      // Simulate API call
      console.log('Request submitted:', requestData);

      // Store in localStorage for demo purposes
      const existingRequests = JSON.parse(localStorage.getItem('citizenRequests') || '[]');
      existingRequests.push(requestData);
      localStorage.setItem('citizenRequests', JSON.stringify(existingRequests));

      toast({
        title: "Request Submitted Successfully!",
        description: `Your reference ID is: ${referenceId}`,
      });

      // Navigate to status page
      navigate(`/citizen-portal/status?ref=${referenceId}`);
      
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/citizen-portal">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Citizen Portal
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Submit New Request</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to submit your request. We'll process it and get back to you as soon as possible.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Request Details"}
                {currentStep === 3 && "Review & Submit"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your personal information for this request."}
                {currentStep === 2 && "Describe your request and upload any supporting documents."}
                {currentStep === 3 && "Review your information and submit your request."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nationalId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>National ID *</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your national ID" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+211XXXXXXXXX" {...field} className="touch-friendly" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address (Optional)</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} className="touch-friendly" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="preferredContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Method *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select how you'd like to be contacted" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="phone">Phone Call</SelectItem>
                                <SelectItem value="sms">SMS</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="in-person">In-Person Visit</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Step 2: Request Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Request Category *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select request category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                      {category.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedCategory}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select service type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {selectedCategoryData?.services.map((service) => (
                                    <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="priority"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Priority Level *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select priority level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="low">Low - Standard processing</SelectItem>
                                  <SelectItem value="medium">Medium - Priority processing</SelectItem>
                                  <SelectItem value="high">High - Urgent processing</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Request Title *</FormLabel>
                              <FormControl>
                                <Input placeholder="Brief title for your request" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Detailed Description *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide a detailed description of your request, including any specific requirements or additional information..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* File Upload */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Supporting Documents</label>
                          <p className="text-sm text-muted-foreground">Upload any documents that support your request (PDF, JPG, PNG - Max 5MB each)</p>
                        </div>
                        
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                          <div className="space-y-2">
                            <label htmlFor="file-upload" className="cursor-pointer">
                              <span className="text-primary hover:text-primary/80 font-medium">Click to upload files</span>
                              <span className="text-muted-foreground"> or drag and drop</span>
                            </label>
                            <p className="text-sm text-muted-foreground">PDF, JPG, PNG up to 5MB each</p>
                          </div>
                          <input
                            id="file-upload"
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </div>

                        {/* Uploaded Files */}
                        {uploadedFiles.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium">Uploaded Files:</p>
                            {uploadedFiles.map((file) => (
                              <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <FileText className="h-5 w-5 text-primary" />
                                  <div>
                                    <p className="text-sm font-medium">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                                  </div>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFile(file.id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-muted/30 p-6 rounded-lg">
                        <h3 className="font-semibold mb-4">Review Your Request</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-muted-foreground">Full Name</p>
                              <p className="font-medium">{form.getValues('fullName')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Phone</p>
                              <p className="font-medium">{form.getValues('phone')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Category</p>
                              <p className="font-medium">{categories.find(c => c.value === form.getValues('category'))?.label}</p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-muted-foreground">Service Type</p>
                              <p className="font-medium">{form.getValues('serviceType')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Priority</p>
                              <p className="font-medium">{form.getValues('priority')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Attachments</p>
                              <p className="font-medium">{uploadedFiles.length} file(s)</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground">Request Title</p>
                          <p className="font-medium">{form.getValues('title')}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CitizenPortalNew;
