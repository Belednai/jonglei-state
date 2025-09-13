import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop - Automatically scrolls to top on route changes
 * 
 * This component handles:
 * - Scrolling to top on full page navigations
 * - Preserving anchor link behavior (#section)
 * - Excluding modal/drawer routes that should preserve scroll
 * - Accessibility focus management
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if this is an anchor link (contains #)
    const isAnchorLink = location.hash && location.hash !== '';
    
    // Check if this is a modal/drawer route that should preserve scroll
    const isModalRoute = location.pathname.includes('/modal/') || 
                        location.pathname.includes('/drawer/') ||
                        location.pathname.includes('/popup/');
    
    // Only scroll to top for full page navigations, not anchor links or modal routes
    if (!isAnchorLink && !isModalRoute) {
      // Use setTimeout to ensure the DOM has updated after route change
      const timeoutId = setTimeout(() => {
        // Scroll to top with smooth behavior
        window.scrollTo({ 
          top: 0, 
          left: 0, 
          behavior: 'auto' // Use 'auto' for instant scroll, 'smooth' for animated
        });
        
        // Move focus to main content for accessibility
        const mainElement = document.getElementById('main') || 
                           document.querySelector('main') ||
                           document.querySelector('[role="main"]') ||
                           document.querySelector('h1');
        
        if (mainElement) {
          // Focus the main element without changing visual styles
          mainElement.setAttribute('tabindex', '-1');
          mainElement.focus();
          // Remove tabindex after focus to avoid keyboard navigation issues
          setTimeout(() => {
            mainElement.removeAttribute('tabindex');
          }, 100);
        }
      }, 0);

      // Cleanup timeout on unmount
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;
