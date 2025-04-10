import React, { useState, useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';

// Define types for our stats data
interface StatItem {
  id: string;
  startValue: number;
  endValue: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: ReactNode;
}

// Define type for our counter state
interface CounterState {
  lessTime: number;
  responseRate: number;
  buyerIntent: number;
  conversions: number;
  [key: string]: number; // Add index signature to allow string indexing
}

// Updated stats data to include target values for animation
const statsData: StatItem[] = [
  { 
    id: 'lessTime',
    startValue: 0,
    endValue: 300,
    suffix: '+',
    description: 'Erfolgreiche Projekte',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="w-3/4 h-3/4 text-white">
        <g>
          <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z" opacity="0.2" fill="currentColor" />
          <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
  { 
    id: 'responseRate',
    startValue: 0,
    endValue: 5000,
    suffix: '+',
    description: 'Zufriedene Kunden',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="w-3/4 h-3/4 text-white">
        <g>
          <path d="M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z" opacity="0.2" fill="currentColor" />
          <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
  { 
    id: 'buyerIntent',
    startValue: 0,
    endValue: 30,
    suffix: '',
    description: 'Jahre Erfahrung',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="w-3/4 h-3/4 text-white">
        <g>
          <path d="M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192Z" opacity="0.2" fill="currentColor" />
          <path d="M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM227.39,60.32a111.36,111.36,0,0,0-39.12-43.08,8,8,0,1,0-8.54,13.53,94.13,94.13,0,0,1,33.46,36.91,8,8,0,0,0,14.2-7.36ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.53A111.36,111.36,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
  { 
    id: 'conversions',
    startValue: 0,
    endValue: 666,
    suffix: 'x',
    description: 'Noch ein Wert',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" className="w-3/4 h-3/4 text-white">
        <g>
          <path d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z" opacity="0.2" fill="currentColor" />
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
];

const AnimatedStats = () => {
  // State to hold the current counter values
  const [counters, setCounters] = useState<CounterState>({
    lessTime: 0,
    responseRate: 0,
    buyerIntent: 0,
    conversions: 0
  });
  
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // Animation duration in ms
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters({
            lessTime: statsData[0].endValue,
            responseRate: statsData[1].endValue,
            buyerIntent: statsData[2].endValue,
            conversions: statsData[3].endValue
          });
        } else {
          setCounters({
            lessTime: Math.floor(progress * statsData[0].endValue),
            responseRate: Math.floor(progress * statsData[1].endValue),
            buyerIntent: Math.floor(progress * statsData[2].endValue),
            conversions: Math.floor(progress * statsData[3].endValue)
          });
        }
      }, interval);
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCounters();
      }
    }, { threshold: 0.1 });

    // Store current ref value in a variable
    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Helper function to display the stat with prefix and suffix
  const displayStat = (item: StatItem, countValue: number): string => {
    const prefix = item.prefix || '';
    const suffix = item.suffix || '';
    return `${prefix}${countValue}${suffix}`;
  };

  return (
    <section ref={sectionRef} className="relative pt-12 sm:pt-16 md:pt-25 py-8 sm:py-10 md:py-15">
      {/* SVG Line at the top - limited to 90% width and centered, hidden on mobile */}
      <div className="hidden sm:block max-w-[90%] mx-auto relative">
        <div style={{ filter: 'drop-shadow(0px -4px 10px rgba(0, 0, 0, 0.40))' }}>
          <Image
            src="/Cool Line.svg"
            alt="Cool Line"
            width={1920}
            height={100}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>

      {/* The grid container for the 4 stat columns - 2x2 on mobile */}
      <div className="max-w-[95%] sm:max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 pt-4 sm:pt-5 sm:mt-[-40px] relative z-10">
        {statsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon Container with Gradient Background */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-4 md:mb-6 p-1">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C462B] to-[#057741] rounded-full"></div>
              
              {/* Icon with padding */}
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-5">
                {item.icon}
              </div>
            </div>
            
            {/* Animated Stat number */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-[#000000] font-semibold mb-1 sm:mb-2 md:mb-3 inter800">
              {displayStat(item, counters[item.id])}
            </p>
            
            {/* Description text */}
            <p className="text-gray-800 text-center text-xs sm:text-sm md:text-base" style={{ fontFamily: "'Inter Display', sans-serif", fontWeight: 600, lineHeight: "130%" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* For the image slider component that needs horizontal scrolling instead of vertical on mobile */}
      <div className="mt-8 sm:mt-12 overflow-hidden">
        {/* Two rows of horizontally scrolling images on mobile */}
        <div className="flex flex-col gap-4">
          {/* First row */}
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4 pb-2 pr-4 min-w-max">
              {/* Example images - replace with your actual content */}
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={`row1-${item}`} className="w-64 h-40 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Slide Image {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row */}
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4 pb-2 pr-4 min-w-max">
              {/* Example images - replace with your actual content */}
              {[6, 7, 8, 9, 10].map((item) => (
                <div key={`row2-${item}`} className="w-64 h-40 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Slide Image {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AnimatedStats;