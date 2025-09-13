import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AlertTriangle, X, Bell, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Alert {
  id: string;
  type: "emergency" | "warning" | "info" | "success";
  title: string;
  message: string;
  priority: "high" | "medium" | "low";
  timestamp: Date;
  expiresAt?: Date;
  county?: string;
  payam?: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "emergency",
    title: "Flood Warning",
    message: "Heavy rainfall expected in Bor County. Residents in low-lying areas should evacuate immediately.",
    priority: "high",
    timestamp: new Date(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    county: "Bor",
    payam: "Bor Town"
  },
  {
    id: "2",
    type: "warning",
    title: "Road Closure",
    message: "Main road between Bor and Juba temporarily closed for maintenance. Expected reopening in 48 hours.",
    priority: "medium",
    timestamp: new Date(),
    expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours
    county: "Bor",
    payam: "Bor Town"
  },
  {
    id: "3",
    type: "info",
    title: "Vaccination Campaign",
    message: "Free COVID-19 vaccination available at all county health centers this week.",
    priority: "low",
    timestamp: new Date(),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    county: "All Counties"
  }
];

export function AlertsBar() {
  const location = useLocation();
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [isVisible, setIsVisible] = useState(true);
  const [activeAlertIndex, setActiveAlertIndex] = useState(0);

  // Don't show alerts on staff login page
  if (location.pathname === "/staff/login") {
    return null;
  }

  useEffect(() => {
    // Auto-advance alerts every 8 seconds
    const interval = setInterval(() => {
      if (alerts.length > 1) {
        setActiveAlertIndex((prev) => (prev + 1) % alerts.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [alerts.length]);

  useEffect(() => {
    // Filter out expired alerts
    const now = new Date();
    setAlerts(prev => prev.filter(alert => 
      !alert.expiresAt || alert.expiresAt > now
    ));
  }, []);

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "emergency":
        return <AlertTriangle className="h-5 w-5 text-primary" />;
      case "warning":
        return <AlertTriangle className="h-5 w-4 text-primary" />;
      case "info":
        return <Info className="h-5 w-5 text-primary" />;
      case "success":
        return <Info className="h-5 w-5 text-primary" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getAlertStyles = (type: Alert["type"]) => {
    switch (type) {
      case "emergency":
        return "bg-primary/10 border-primary/30 text-primary-foreground";
      case "warning":
        return "bg-primary/5 border-primary/20 text-primary";
      case "info":
        return "bg-primary/5 border-primary/20 text-primary";
      case "success":
        return "bg-primary/10 border-primary/30 text-primary";
      default:
        return "bg-primary/5 border-primary/20 text-primary";
    }
  };

  const getPriorityBadge = (priority: Alert["priority"]) => {
    const variants = {
      high: "bg-primary/20 text-primary border-primary/40",
      medium: "bg-primary/10 text-primary border-primary/30",
      low: "bg-primary/5 text-primary border-primary/20"
    };
    
    return (
      <Badge variant="outline" className={`text-xs ${variants[priority]}`}>
        {priority.toUpperCase()}
      </Badge>
    );
  };

  if (!isVisible || alerts.length === 0) {
    return null;
  }

  const currentAlert = alerts[activeAlertIndex];

  return (
    <div className="bg-background border-b border-border shadow-sm">
      <div className="gov-container">
        <div className={`flex items-center justify-between p-3 border rounded-lg ${getAlertStyles(currentAlert.type)}`}>
          <div className="flex items-center space-x-3 flex-1">
            {getAlertIcon(currentAlert.type)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-sm truncate">{currentAlert.title}</h3>
                {getPriorityBadge(currentAlert.priority)}
                {currentAlert.county && (
                  <Badge variant="secondary" className="text-xs">
                    {currentAlert.county}
                  </Badge>
                )}
              </div>
              <p className="text-sm opacity-90 line-clamp-2">{currentAlert.message}</p>
              <div className="flex items-center space-x-4 mt-2 text-xs opacity-75">
                <span>Posted: {currentAlert.timestamp.toLocaleString()}</span>
                {currentAlert.expiresAt && (
                  <span>Expires: {currentAlert.expiresAt.toLocaleString()}</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            {alerts.length > 1 && (
              <div className="flex space-x-1">
                {alerts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAlertIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeAlertIndex 
                        ? "bg-current opacity-100" 
                        : "bg-current opacity-30"
                    }`}
                    aria-label={`Go to alert ${index + 1}`}
                  />
                ))}
              </div>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-8 w-8 p-0 opacity-70 hover:opacity-100"
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
