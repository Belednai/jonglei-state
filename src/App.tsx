import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutWrapper from "./components/layouts/LayoutWrapper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/Contact";
import CitizenPortal from "./pages/CitizenPortal";
import CitizenPortalNew from "./pages/CitizenPortalNew";
import CitizenPortalStatus from "./pages/CitizenPortalStatus";
import StaffLogin from "./pages/StaffLogin";
import StaffDashboard from "./pages/StaffDashboard";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/citizen-portal" element={<CitizenPortal />} />
        <Route path="/citizen-portal/new" element={<CitizenPortalNew />} />
        <Route path="/citizen-portal/status" element={<CitizenPortalStatus />} />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutWrapper>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
