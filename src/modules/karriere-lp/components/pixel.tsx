"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

// Define proper types for Facebook Pixel
interface FacebookPixelEventOptions {
  [key: string]: string | number | boolean | object;
}

type FacebookPixelEventType = 
  | 'PageView' 
  | 'Lead' 
  | 'Purchase' 
  | 'CompleteRegistration' 
  | 'Contact' 
  | 'CustomizeProduct'
  | 'Donate'
  | 'FindLocation'
  | 'InitiateCheckout'
  | 'Schedule'
  | 'Search'
  | 'SubmitApplication'
  | 'ViewContent'
  | 'Subscribe'
  | 'StartTrial'
  | string; // Allow custom event names

interface FacebookPixel {
  (method: 'init', pixelId: string): void;
  (method: 'track', eventName: FacebookPixelEventType, options?: FacebookPixelEventOptions): void;
  (method: 'trackCustom', eventName: string, options?: FacebookPixelEventOptions): void;
  (method: string, ...args: unknown[]): void;
  getState(): unknown;
  callMethod?(method: string, ...args: unknown[]): void;
  queue?: Array<unknown>;
  push?(args: unknown): void;
  loaded?: boolean;
  version?: string;
}

// Declare fbq with the specific type
declare global {
  interface Window {
    fbq: FacebookPixel;
    _fbq: FacebookPixel;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();

  // Track pageviews when the path changes
  useEffect(() => {
    if (pathname && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '724091626649263');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=724091626649263&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}