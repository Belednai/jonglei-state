import { ReactNode } from "react";
import { AlertsBar } from "@/components/AlertsBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PublicLayoutProps {
  children: ReactNode;
}

/**
 * PublicLayout - Standard layout for public routes
 * 
 * This layout includes all global chrome elements:
 * - AlertsBar (top notifications)
 * - Header (navigation, search, etc.)
 * - Footer (site footer with links)
 * 
 * Used for:
 * - All public pages (/, /departments, /projects, etc.)
 * - Citizen portal pages
 * - Any non-admin pages
 */
const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <AlertsBar />
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
