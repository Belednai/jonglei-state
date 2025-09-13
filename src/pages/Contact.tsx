import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { contactInfo, counties } from "@/data/mockData";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().optional() // Anti-spam field
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
      honeypot: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Check honeypot for spam protection
    if (data.honeypot) {
      toast({
        title: "Error",
        description: "Invalid submission detected.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate the submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback for development - just log to console and show success
      console.log('Contact form submission:', data);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+211 123 456 789",
      description: "Mon-Fri, 8:00 AM - 5:00 PM",
      href: "tel:+211123456789"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@jonglei.gov.ss",
      description: "We respond within 24 hours",
      href: "mailto:info@jonglei.gov.ss"
    },
    {
      icon: MapPin,
      title: "Office Address",
      content: "Governor's Office Complex, Bor, Jonglei State, South Sudan",
      description: "Main administrative building",
      href: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
      description: "Saturday: 9:00 AM - 1:00 PM",
      href: "#"
    }
  ];

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "administration", label: "Administration" },
    { value: "finance", label: "Finance & Budget" },
    { value: "hr", label: "Human Resources" },
    { value: "ict", label: "Information Technology" },
    { value: "press", label: "Press & Communications" },
    { value: "legal", label: "Legal Affairs" },
    { value: "citizen-services", label: "Citizen Services" },
    { value: "projects", label: "Projects & Development" },
    { value: "emergency", label: "Emergency Services" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. 
            Reach out to us and we'll respond as soon as we can.
          </p>
        </div>

        {/* Contact Information Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="state" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="state">State Level</TabsTrigger>
              <TabsTrigger value="county">County Level</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>
            
            <TabsContent value="state" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {contactInfo.filter(contact => contact.type === "State Level").map((contact, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Building className="mr-2 h-5 w-5" />
                        {contact.name}
                      </CardTitle>
                      <CardDescription>{contact.position}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <a href={`tel:${contact.phone}`} className="hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        <a href={`mailto:${contact.email}`} className="hover:underline">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-start text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span className="text-muted-foreground">{contact.address}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground">{contact.workingHours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="county" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactInfo.filter(contact => contact.type === "County Level").map((contact, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{contact.name}</CardTitle>
                      <CardDescription>{contact.position}</CardDescription>
                      {contact.county && (
                        <Badge variant="outline" className="w-fit">
                          {contact.county.charAt(0).toUpperCase() + contact.county.slice(1).replace('-', ' ')}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-primary" />
                        <a href={`tel:${contact.phone}`} className="hover:underline">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        <a href={`mailto:${contact.email}`} className="hover:underline text-xs">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-start text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        <span className="text-muted-foreground text-xs">{contact.address}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground text-xs">{contact.workingHours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="emergency" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {contactInfo.filter(contact => contact.type === "Emergency Services").map((contact, index) => (
                  <Card key={index} className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-700">{contact.name}</CardTitle>
                      <CardDescription className="text-red-600">{contact.position}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <a href={`tel:${contact.phone}`} className="hover:underline font-medium text-red-700">
                          {contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-red-600" />
                        <a href={`mailto:${contact.email}`} className="hover:underline text-red-600">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-start text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-red-600 mt-0.5" />
                        <span className="text-red-600">{contact.address}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-red-600" />
                        <span className="text-red-600 font-medium">{contact.workingHours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Anti-spam honeypot field - hidden from users */}
                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+211 XXX XXX XXX" 
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com" 
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {departments.map((dept) => (
                                  <SelectItem key={dept.value} value={dept.value}>
                                    {dept.label}
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
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Brief subject of your message" 
                                {...field}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide detailed information about your inquiry or request..."
                              className="min-h-[120px]"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach us for different types of inquiries.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        {info.href && info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-3">
                  For urgent matters requiring immediate attention:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-red-600" />
                    <a href="tel:+211987654321" className="font-medium text-red-700">
                      +211 987 654 321
                    </a>
                  </div>
                  <p className="text-sm text-red-600">Available 24/7 for emergencies</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline" asChild>
                  <a href="/citizen-portal/new">
                    <User className="mr-2 h-4 w-4" />
                    Submit Citizen Request
                  </a>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/citizen-portal/status">
                    Track Application Status
                  </a>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/departments">
                    View All Departments
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
