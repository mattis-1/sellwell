// components/UrlParamRemover.tsx
"use client";

import { useEffect } from 'react';

export default function UrlParamRemover() {
  useEffect(() => {
    // Check if the lead parameter is present in the URL
    if (window.location.href.includes('lead=true')) {
      // Wait for 2 seconds before removing the parameter
      setTimeout(() => {
        // Get current URL
        const currentUrl = new URL(window.location.href);
        
        // Check if the lead parameter exists
        if (currentUrl.searchParams.has('lead')) {
          // Remove the lead parameter
          currentUrl.searchParams.delete('lead');
          
          // Create the new URL string
          const newUrl = currentUrl.pathname + 
                        (currentUrl.searchParams.toString() ? '?' + currentUrl.searchParams.toString() : '') + 
                        currentUrl.hash;
          
          // Update the browser history without refreshing the page
          window.history.replaceState({}, document.title, newUrl);
        }
      }, 2000);
    }
  }, []);

  return null; // This component doesn't render anything
}