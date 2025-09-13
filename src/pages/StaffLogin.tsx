import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff, Lock, Mail, Building2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, Link } from "react-router-dom";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const StaffLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);

    try {
      // Mock authentication - in production, this would be an API call
      const mockCredentials = {
        email: "admin@jonglei.gov.ss",
        password: "admin123"
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (data.email === mockCredentials.email && data.password === mockCredentials.password) {
        // Successful login
        const authToken = btoa(JSON.stringify({
          email: data.email,
          role: "admin",
          department: "Administration",
          loginTime: new Date().toISOString()
        }));

        // Store auth token
        if (data.rememberMe) {
          localStorage.setItem('staffAuthToken', authToken);
        } else {
          sessionStorage.setItem('staffAuthToken', authToken);
        }

        toast({
          title: "Login Successful",
          description: "Welcome back! Redirecting to dashboard...",
        });

        // Redirect to staff dashboard
        setTimeout(() => {
          navigate('/staff/dashboard');
        }, 1000);

      } else {
        // Failed login
        setLoginAttempts(prev => prev + 1);
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive"
        });

        // Reset password field
        form.setValue('password', '');
      }
    } catch (error) {
      toast({
        title: "Login Error",
        description: "There was an error during login. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAccountLocked = loginAttempts >= 5;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-md mx-auto py-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Staff Login</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Access the staff portal with your government credentials
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Secure Login
              </CardTitle>
              <CardDescription>
                Enter your email and password to access the staff portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Account Lockout Warning */}
              {loginAttempts >= 3 && !isAccountLocked && (
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Warning: {5 - loginAttempts} login attempts remaining before account lockout.
                  </AlertDescription>
                </Alert>
              )}

              {/* Account Locked */}
              {isAccountLocked && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Account temporarily locked due to multiple failed login attempts. 
                    Please contact IT support or try again later.
                  </AlertDescription>
                </Alert>
              )}

              {/* Demo Credentials Info */}
              <Alert className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Demo Credentials:</strong><br />
                  Email: admin@jonglei.gov.ss<br />
                  Password: admin123
                </AlertDescription>
              </Alert>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                        <FormControl>
                          <div className="relative w-full">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              type="email"
                              placeholder="your.email@jonglei.gov.ss"
                              className="pl-10 pr-4 w-full touch-friendly text-base"
                              {...field}
                              disabled={isSubmitting || isAccountLocked}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="text-sm font-medium">Password</FormLabel>
                        <FormControl>
                          <div className="relative w-full">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input 
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              className="pl-10 pr-10 w-full touch-friendly text-base"
                              {...field}
                              disabled={isSubmitting || isAccountLocked}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3"
                              onClick={() => setShowPassword(!showPassword)}
                              disabled={isSubmitting || isAccountLocked}
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              disabled={isSubmitting || isAccountLocked}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Remember me for 30 days
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="button" 
                      variant="link" 
                      className="px-0 text-sm"
                      asChild
                    >
                      <Link to="/staff/forgot-password">Forgot password?</Link>
                    </Button>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 touch-friendly text-base font-semibold"
                    disabled={isSubmitting || isAccountLocked}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>
              </Form>

              {/* Additional Links */}
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Button variant="link" className="px-0" asChild>
                    <Link to="/staff/register">Request Access</Link>
                  </Button>
                </p>
                <p className="text-sm text-muted-foreground">
                  Having trouble logging in?{" "}
                  <Button variant="link" className="px-0" asChild>
                    <Link to="/contact">Contact IT Support</Link>
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              This is a secure government system. Unauthorized access is prohibited 
              and may be subject to criminal and civil penalties.
            </p>
          </div>
      </main>
    </div>
  );
};

export default StaffLogin;
