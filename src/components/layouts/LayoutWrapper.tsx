import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import PublicLayout from "./PublicLayout";

interface LayoutWrapperProps {
  children: ReactNode;
}

/**
 * LayoutWrapper - Determines which layout to use based on current route
 * 
 * Admin routes (isolated layout):
 * - /staff/login (login page - no chrome)
 * - /staff/dashboard (admin dashboard - no chrome)
 * - /admin/* (future admin routes - no chrome)
 * 
 * Public routes (full layout):
 * - All other routes get Header, Footer, AlertsBar
 */
const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const location = useLocation();
  
  // Define admin routes that should use AdminLayout
  const isAdminRoute = location.pathname.startsWith('/staff/') || 
                      location.pathname.startsWith('/admin/');
  
  if (isAdminRoute) {
    return <AdminLayout>{children}</AdminLayout>;
  }
  
  return <PublicLayout>{children}</PublicLayout>;
};

export default LayoutWrapper;
