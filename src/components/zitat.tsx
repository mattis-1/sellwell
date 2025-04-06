"use client";

import React, { useEffect, useRef, useState } from 'react';

const AnimatedQuoteSection = () => {
  // Properly type the ref as HTMLDivElement
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);
  const quoteText = '"Uns ist extremst wichtig, konstant beste Leistung zu liefern und damit jedem zeigen zu können, dass wir immer verlässlich sind und eine Kooperation mit Sellwell garantierten Erfolg bringt."';
  const words = quoteText.split(' ');
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const handleScroll = () => {
      // Get section position details
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on section position in viewport
      let scrollProgress = 0;
      
      // If the section is below the viewport
      if (sectionTop >= windowHeight) {
        scrollProgress = 0;
      } 
      // If the section is above the viewport
      else if (sectionTop + sectionHeight <= 0) {
        scrollProgress = 0;
      }
      // If the section is in the viewport
      else {
        // Calculate how close the section center is to the viewport center
        const sectionCenter = sectionTop + sectionHeight / 2;
        const viewportCenter = windowHeight / 2;
        
        // Map section position to progress:
        // - When section enters viewport: start revealing words
        // - When section center reaches viewport center: all words visible (progress = 1)
        if (sectionCenter <= viewportCenter) {
          // Section center is at or above viewport center - fully revealed
          scrollProgress = 1;
        } else {
          // Section is entering viewport - calculate partial reveal
          // Map from bottom of viewport to viewport center
          const totalDistance = windowHeight / 2;
          const distanceFromBottom = windowHeight - sectionTop;
          scrollProgress = Math.min(Math.max(distanceFromBottom / totalDistance, 0), 1);
        }
      }
      
      // Calculate visible words based on scroll progress
      const totalWords = words.length;
      const newVisibleWords = Math.round(scrollProgress * totalWords);
      
      setVisibleWords(newVisibleWords);
    };
    
    // Set initial state
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [words.length]);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white w-full relative"
    >
      <div className="max-w-4xl mx-auto px-8 relative">
        
        {/* Animated quote text */}
        <div className="text-center text-[22px] md:text-[22px] lg:text-[22px] font-medium leading-relaxed tracking-[-0.3px] px-30 ">
          {words.map((word, index) => (
            <span 
              key={index}
              className="inline-block transition-opacity duration-500"
              style={{ 
                opacity: index < visibleWords ? 1 : 0.15,
                marginRight: '0.4em' 
              }}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-[27px] font-[700]">~ Leonardo Basile</p>
          <p className="text-base text-[20px]">Geschäftsführer</p>
        </div>

      </div>
    </section>
  );
};

export default AnimatedQuoteSection;