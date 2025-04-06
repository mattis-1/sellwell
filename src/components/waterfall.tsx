"use client";

import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const VerticalGallerySection = () => {
  // Sample data for the 2x2 grid
  const features = [
    {
      icon: (
        <Image 
          src="/16.svg" 
          alt="Icon" 
          width={50} 
          height={50} 
          className="w-15 h-15 ml-[-10px]"
        />
      ),
      title: "Attraktive Vergütung",
      description: "Mit attraktivem Provisionsmodell locker um die 5-stellig als Angestellter verdienen."
    },
    {
      icon: (
        <Image 
          src="/17.svg" 
          alt="Icon" 
          width={50} 
          height={50} 
          className="w-15 h-15 ml-[-10px]"
        />
      ),
      title: "Kontinuierliche Weiterbildung",
      description: "Regelmäßiges Training, um dein volles Potenzial zu entfalten und schnelles Wachstum zu fördern."
    },
    {
      icon: (
        <Image 
          src="/18.svg" 
          alt="Icon" 
          width={50} 
          height={50} 
          className="w-15 h-15 ml-[-10px]"
        />
      ),
      title: "Individuelle Unterstützung",
      description: "Persönliche Betreuung durch erfahrene Teamleiter, um deinen individuellen Erfolgsweg zu gestalten."
    },
    {
      icon: (
        <Image 
          src="/19.svg" 
          alt="Icon" 
          width={50} 
          height={50} 
          className="w-15 h-15 ml-[-10px]"
        />
      ),
      title: "Starke Teamkultur",
      description: "Ein familiäres Umfeld mit ambitionierten Kollegen, das gemeinsame Erfolge in den Mittelpunkt stellt."
    }
  ];

  // Create image sets with URLs for each column
  const leftColumnImages = [
    { 
      id: 1, 
      imageUrl: "/ABOUT1.png", // Using placeholder API
      alt: "Team Meeting"
    },
    { 
      id: 2, 
      imageUrl: "/ABOUT2.png", 
      alt: "Office Environment"
    },
    { 
      id: 3, 
      imageUrl: "/ABOUT3.png", 
      alt: "Sales Training"
    },
    { 
      id: 4, 
      imageUrl: "/ABOUT4.png", 
      alt: "Team Building"
    },
  ];

  const rightColumnImages = [
    { 
      id: 9, 
      imageUrl: "/ABOUT5.png", 
      alt: "Customer Meeting"
    },
    { 
      id: 10, 
      imageUrl: "/ABOUT6.png", 
      alt: "Award Ceremony"
    },
    { 
      id: 11, 
      imageUrl: "/ABOUT7.png", 
      alt: "Team Workshop"
    },
    { 
      id: 12, 
      imageUrl: "/ABOUT8.png", 
      alt: "Office Culture"
    },
  ];

  return (
    <section className="py-20 pl-4 pr-4 bg-background w-full">
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Text and Features */}
          <div className="flex flex-col mt-1 pl-5 items-start">
            <span className="mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[16px] font-[600] rounded-[99px] px-4 py-1">ÜBER SELLWELL</span>
            <h2 className="headr leading-[1.3] mb-5">Vertriebsexzellenz<br /><span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">komplett neu definiert</span></h2>
            <p className="text-foreground/80 mb-8 text-[19px]">
            Wir sind eine spezialisierte Vertriebsagentur aus München in Bayern, die Unternehmen hilft, ihr volles Vertriebspotenzial auszuschöpfen und gleichzeitig ambitionierten Vertriebstalenten eine erfolgsorientierte Karrierechance bietet. Mit unserer langjährigen Expertise und einer starken Teamkultur liefern wir unseren Partnern herausragende Ergebnisse.</p>

            <p className="text-foreground/80 mb-8 text-[19px]">Unseren Vertriebstalenten helfen wir durch individuelle Unterstützung, ihr volles Potenzial zu entfalten. Wir setzen konsequent auf Weiterbildung und kontinuierliche Optimierung, um innovative Maßstäbe zu setzen und unsere Unternehmenskultur zu stärken.</p>

            <p className="text-foreground/80 mb-8 text-[19px]">Die Kombination aus strukturierter Einarbeitung, stetiger Verbesserung, persönlicher Fortbildung und außergewöhnlich attraktiver Vergütung macht uns zum Arbeitgeber der Wahl für junge, ambitionierte Vertriebstalente.</p>
            
            {/* 2x2 Grid with features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                    <div className="rounded-full bg-primary/10 p-2">
                      {feature.icon}
                    </div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="inter600 tracking-[-0.35px] text-[27px] pr-25">
                      {feature.title}</h3>
                  </div>
                  <p className="text-[17px] text-[#333] font-[600] pr-10">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Vertical Image Waterfall */}
          <div className="relative h-[1350px] overflow-hidden rounded-lg">
            {/* Stronger, shorter gradient masks for fading effect */}
            <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-background to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-background to-transparent z-10"></div>
            
            {/* Scrolling columns container */}
            <div className="scrolling-container">
              {/* Left Column */}
              <div className="scroll-column column-left">
                {/* Original set */}
                {leftColumnImages.map(img => (
                  <div key={`left-${img.id}`} className="image-item">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      {/* Using regular img tag for simplicity */}
                      <img 
                        src={img.imageUrl} 
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {leftColumnImages.map(img => (
                  <div key={`left-${img.id}-dup`} className="image-item">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={img.imageUrl} 
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="scroll-column column-right">
                {/* Original set */}
                {rightColumnImages.map(img => (
                  <div key={`right-${img.id}`} className="image-item">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={img.imageUrl} 
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {rightColumnImages.map(img => (
                  <div key={`right-${img.id}-dup`} className="image-item">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={img.imageUrl} 
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for the truly seamless vertical scrolling animation */}
      <style jsx>{`
        .scrolling-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          gap: 16px;
          padding: 0 16px;
        }
        
        .scroll-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transform: translateY(0);
        }
        
        .column-left {
          animation: scrollUp 50s linear infinite;
        }
        
        .column-right {
          animation: scrollUp 70s linear infinite;
        }
        
        .image-item {
          width: 100%;
          flex-shrink: 0;
        }
        
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-80%);
          }
        }
      `}</style>
    </section>
  );
};

export default VerticalGallerySection;