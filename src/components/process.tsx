// components/process.tsx
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface RowContent {
  id: number;
  headline: string;
  text: string;
  imageUrl: string;
  iconUrl?: string;
}

const Process: React.FC = () => {
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
    <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-4">
      <div className="mt-[-20px] flex justify-center mb-1">
        <div className="inline-flex items-center g-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
             <Image 
               src="/Green Star.svg" 
               alt="Green Star" 
               width={22}
               height={22}
               className="mr-2"
             />
          <p className="text-center font-medium text-primary mb-[2.25px]">
            Unser Bewerbungsprozess
          </p>
        </div>
        </div>
        </div>
      <div className="inter700 text-[65px] tracking-[-2px] text-center pb-2">So leicht ist es</div>
      <div className="inter700 text-[25px] bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
 tracking-[-0.2px] text-center pb-20">In unter 2 Minuten, ohne Anschrift<br />oder Lebenslauf</div>
      {rows.map((row) => (
        <div 
          key={row.id} 
          data-id={row.id.toString()}
          className={`process-row flex flex-col md:flex-row items-center mb-16 transition-opacity duration-1000 ease-in-out ${
            visibleRows[row.id.toString()] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Left side: Larger column with icon, headline and text */}
          <div className="md:w-3/5 pr-8">
            <div className="flex items-start">
              {/* Icon Container - Larger and now can use custom images */}
              <div className="w-20 h-20 flex-shrink-0 mt-[-14px] mr-6">
                {row.iconUrl ? (
                  <div className="relative w-20 h-20">
                    <Image 
                      src={row.iconUrl} 
                      alt={`Icon for ${row.headline}`} 
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-2xl font-bold rounded-full">
                    {row.id}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-[38px] tracking-[-1px] inter700 font-bold mb-4">{row.headline}</h3>
                <p className="text-[#000] font-[400] text-[20px] pr-6">{row.text}</p>
              </div>
            </div>
          </div>

          {/* Right side: Image - now pushed more to the right */}
          <div className="md:w-2/5 mt-6 md:mt-0">
            <div className="relative w-full h-64 md:h-80">
              <Image 
                src={row.imageUrl} 
                alt={`Image for ${row.headline}`} 
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
      <a href="/bewerben">
      <div className="text-center">
      <Button className=" py-2 text-[27.5px] mt-10 mb-2 rounded-[99px]" variant="default">
      Jetzt schnell bewerben
                </Button>
      </div>
      <div className="inter700 text-[19px] text-center bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">Ohne Lebenslauf & Anschreiben</div>
      </a>
    </section>
  );
};

export default Process;
