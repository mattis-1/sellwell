// components/process.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface RowContent {
  id: number;
  headline: string;
  text: string;
  imageUrl: string;
  iconUrl?: string;
}

interface ProcessProps {
  // Spacing customization
  rowSpacing?: string;        // Space between rows
  contentSpacing?: string;    // Space between text and image
  iconTextSpacing?: string;   // Space between icon and text
  textPadding?: string;       // Padding for text content
  
  // Size customization
  imageHeight?: string;       // Height for images on mobile and desktop
  imageHeightMd?: string;     // Height for images on medium screens and up
  iconSize?: string;          // Size of the icon/number container
  
  // Custom styles
  customRowClass?: string;    // Additional classes for rows
  customImageClass?: string;  // Additional classes for images
  customTextClass?: string;   // Additional classes for text content
}

const Process: React.FC<ProcessProps> = ({
  // Default values for all customizable properties
  rowSpacing = "mb-12 sm:mb-16 md:mb-24",     // Responsive spacing
  contentSpacing = "sm:pr-6 md:pr-12",        // Responsive spacing
  iconTextSpacing = "mr-4 sm:mr-6 md:mr-8",   // Responsive spacing
  textPadding = "pr-0 sm:pr-4 md:pr-8",       // Responsive padding
  imageHeight = "h-48 sm:h-52 md:h-56",       // Responsive height
  imageHeightMd = "md:h-64 lg:h-72",          // Responsive height for medium up
  iconSize = "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20", // Responsive icon size
  customRowClass = "",
  customImageClass = "",
  customTextClass = "",
}) => {
  // State to track which rows are visible
  const [visibleRows, setVisibleRows] = useState<Record<string, boolean>>({});
  
  const rows: RowContent[] = [
    {
      id: 1,
      headline: "Online Bewerben",
      text: "In unter 2 Minuten bei uns bewerben - ohne Anschreiben, ohne Lebenslauf. Nur einige Fragen vorab, um dich gleich besser kennenzulernen. Klicke jetzt einfach den Link unten und mache in wenigen Minuten die ersten Schritte in deine neue Zukunft.",
      imageUrl: "/Onlinebewerben.png",
      iconUrl: "/10.svg",
    },
    {
      id: 2,
      headline: "Persönliches Kennenlernen",
      text: "Nachdem wenn wir deine Bewerbung durchgegangen sind, laden wir dich auf ein persönliches Kennenlerngespräch ein, um herauszufinden, ob du zu Sellwell passt und ob du für eine Festanstellung bei uns in Frage kommst.",
      imageUrl: "/Kennenlernen.png",
      iconUrl: "/11.svg",
    },
    {
      id: 3,
      headline: "Probewoche & Arbeitsvertrag",
      text: "Falls soweit alles passt, laden wir dich herzlich auf eine Probewoche bei uns ein, wo du erste Einblicke in den Alltag bei uns bekommst. Wenn alles passt erledigen wir in Kürze den Papierkram und du kannst schon bald anfangen, deine Karriere auf Vordermann zu bringen.",
      imageUrl: "/Probewoche.png",
      iconUrl: "/12.svg",
    },
  ];

  // Set up Intersection Observer for scroll animations
  useEffect(() => {
    // Check if IntersectionObserver is available (for SSR compatibility)
    if (typeof IntersectionObserver === 'undefined') return;
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only handle when elements come into view, ignore when they leave
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) {
            // Set to visible and don't change it back
            setVisibleRows(prev => ({
              ...prev,
              [id]: true
            }));
            
            // Once visible, stop observing this element
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOptions);
    
    // Select all row elements after they've been rendered
    const rowElements = document.querySelectorAll('.process-row');
    rowElements.forEach(el => observer.observe(el));
    
    return () => {
      rowElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="container mx-auto px-4 pt-12 sm:pt-20 md:pt-30 py-10 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center mb-1">
        <div className="mt-[-10px] sm:mt-[-20px] flex justify-center mb-3">
          <div className="inline-flex items-center backdrop-blur-sm rounded-[10px] sm:rounded-[14px] px-3 sm:px-4 py-1.5 sm:py-2 border-[1.5px] sm:border-[1.7px] border-[#C8C7C6] shadow-[1px_1px_10px_0px_rgba(0,0,0,0.15)] sm:shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
            <Image 
              src="/Green Star.svg" 
              alt="Green Star" 
              width={18}
              height={18}
              className="mr-1.5 sm:mr-2"
            />
            <p className="text-center text-sm sm:text-base font-medium text-primary mb-[2px]">
              Unser Bewerbungsprozess
            </p>
          </div>
        </div>
      </div>
      
      <div className="inter800 text-3xl sm:text-4xl md:text-5xl lg:text-[65px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] text-center pb-2 text-[#000000] mb-6 sm:mb-8 md:mb-10">So leicht ist es</div>
      
      {rows.map((row) => (
        <div 
          key={row.id} 
          data-id={row.id.toString()}
          className={`process-row mb-[20px] sm:mb-[30px] flex flex-col md:flex-row items-center ${rowSpacing} transition-opacity duration-1000 ease-in-out ${
            visibleRows[row.id.toString()] ? 'opacity-100' : 'opacity-0'
          } ${customRowClass} py-6 sm:py-8 md:py-12 px-4 sm:px-5 md:px-6 border border-gray-100 rounded-[20px] sm:rounded-[40px] md:rounded-[70px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] sm:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)]`}
        >
          {/* Image for mobile - displayed at the top */}
          <div className="md:hidden mb-6 w-full">
            <div className={`relative w-full ${imageHeight} ${customImageClass}`}>
              <Image 
                src={row.imageUrl} 
                alt={`Image for ${row.headline}`} 
                fill
                className="object-cover rounded-[15px] sm:rounded-[20px]"
              />
            </div>
          </div>

          {/* Left side: Larger column with icon, headline and text */}
          <div className={`md:w-3/5 ${contentSpacing}`}>
            <div className="flex flex-col md:flex-row md:items-start md:pl-10">
              {/* Icon Container - above headline on mobile, next to headline on desktop */}
              <div className={`flex-shrink-0 mb-3 md:mb-0 md:mt-[-14px] mx-auto md:mx-0 ${iconTextSpacing} ${iconSize}`}>
                {row.iconUrl ? (
                  <div className={`relative ${iconSize}`}>
                    <Image 
                      src={row.iconUrl} 
                      alt={`Icon for ${row.headline}`} 
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className={`flex items-center justify-center bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-xl sm:text-2xl font-bold rounded-full ${iconSize}`}>
                    {row.id}
                  </div>
                )}
              </div>

              <div className={`${customTextClass} text-center md:text-left`}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] tracking-[-0.5px] sm:tracking-[-1px] inter800 text-[#000000] font-bold mb-2 sm:mb-3">{row.headline}</h3>
                <p className={`text-[#000] font-[400] text-sm sm:text-base md:text-[18px] ${textPadding}`}>{row.text}</p>
              </div>
            </div>
          </div>

          {/* Right side: Image - hidden on mobile (since it's moved to the top) */}
          <div className="hidden md:block md:w-2/5 md:mt-0 md:pr-5">
            <div className={`relative w-full ${imageHeightMd} ${customImageClass}`}>
              <Image 
                src={row.imageUrl} 
                alt={`Image for ${row.headline}`} 
                fill
                className="object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
      ))}
      
      <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-20 md:mt-30 mb-1">
        <div className="mt-[-10px] sm:mt-[-20px] flex justify-center mb-3">
          <div className="inline-flex items-center bg-transparent backdrop-blur-sm rounded-[10px] sm:rounded-[14px] px-3 sm:px-4 py-1.5 sm:py-2 border-[1.5px] sm:border-[1.7px] border-[#C8C7C6]">
            <Image 
              src="/Green Star.svg" 
              alt="Green Star" 
              width={18}
              height={18}
              className="mr-1.5 sm:mr-2"
            />
            <p className="text-center text-sm sm:text-base font-medium text-primary mb-[2px]">
              Richtig Karriere machen
            </p>
          </div>
        </div>
      </div>

      <div className="inter800 text-[#000000] tracking-[-0.5px] sm:tracking-[-1px] text-center text-2xl sm:text-3xl md:text-4xl lg:text-[45px]">
        Starte in deine neue<br />Zukunft <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">mit Sellwell</span>
      </div>

      <a href="/bewerben">
        <div className="text-center">
          <Button className="py-1.5 sm:py-2 text-base sm:text-xl md:text-[25px] mt-4 sm:mt-6 mb-2 sm:mb-3 rounded-[99px]" variant="default">
            JETZT SCHNELL BEWERBEN
          </Button>
        </div>
        <div className="inter700 text-sm sm:text-base md:text-[19px] text-center bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">
          Ohne Lebenslauf & Anschreiben
        </div>
      </a>
    </section>
  );
};

export default Process;