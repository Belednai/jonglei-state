import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

/**
 * AdminLayout - Isolated layout for admin routes
 * 
 * This layout hides all global chrome (navbar, headers, breadcrumbs, footer)
 * and provides a clean admin interface without public site elements.
 * 
 * Used for:
 * - /staff/dashboard
 * - /admin/* routes
 * - Any authenticated admin pages
 */
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Admin content only - no Header, Footer, or AlertsBar */}
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
