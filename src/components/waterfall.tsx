"use client";

import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/fadein';

const VerticalGallerySection = () => {

  // Create image sets with URLs for each column
  const imageGroup1 = [
    { 
      id: 1, 
      imageUrl: "/ABOUT1.png",
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

  const imageGroup2 = [
    
    { 
      id: 9, 
      imageUrl: "/ABOUT7.png", 
      alt: "Team Workshop"
    },
    { 
      id: 10, 
      imageUrl: "/ABOUT8.png", 
      alt: "Office Culture"
    },
  ];

  return (
    <section className="relative py-15 sm:py-15 md:py-20 pt-20 sm:pt-20 md:pt-20 px-4 bg-[#F9F9F9] w-full overflow-hidden">
      {/* Texture overlay properly implemented */}    
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Text and Features */}
          <FadeIn delay={100} direction="none">
          <div className=" sellwell-about-container">
            
                    {/* Headline */}
                    <h2 className="font-inter text-[35px] font-[600] tracking-[-0.8px] leading-[40px] text-[rgb(17,17,17)] mb-6 text-left w-full">
                      Vertriebsexzellenz, <br /> komplett neu definiert.
                    </h2>
          
                    {/* Text content - shortened and improved */}
                    <div className="mb-8 text-left w-full">
                      <p className="font-inter text-[17px] font-normal tracking-[-0.2px] leading-[22px] text-[#111111] mb-4">
                        Wir sind eine spezialisierte Vertriebsagentur aus München in Bayern, die Unternehmen hilft, ihr volles Vertriebspotenzial auszuschöpfen und gleichzeitig ambitionierten Vertriebstalenten eine erfolgsorientierte Karrierechance bietet. Mit unserer langjährigen Expertise und einer starken Teamkultur liefern wir unseren Partnern herausragende Ergebnisse.
                      </p>
                      <p className="font-inter text-[17px] font-normal tracking-[-0.2px] leading-[22px] text-[#111111] mb-4">
Unseren Vertriebstalenten helfen wir durch individuelle Unterstützung, ihr volles Potenzial zu entfalten. Wir setzen konsequent auf Weiterbildung und kontinuierliche Optimierung, um innovative Maßstäbe zu setzen und unsere Unternehmenskultur zu stärken.                      </p>
                   
                     <p className="font-inter text-[17px] font-normal tracking-[-0.2px] leading-[22px] text-[#111111]">  Die Kombination aus strukturierter Einarbeitung, stetiger Verbesserung, persönlicher Fortbildung und außergewöhnlich attraktiver Vergütung macht uns zum Arbeitgeber der Wahl für junge, ambitionierte Vertriebstalente.
</p>
</div>
                    {/* Stat containers - moved below text and redesigned */}
                    <div className="space-y-4 mb-2 w-full">
                      {/* Stat container 1 */}
                      <div className="bg-white rounded-[20px] p-4 flex items-center w-full shadow-sm">
                        <div className="flex-shrink-0 mr-4">
                          <Image 
                           src="/greenstar.svg" 
                           alt="icon"
                           width={50}
                           height={50}
                          />
                        </div>
                        <div>
                          <div className="font-inter text-[24px] text-left font-[600] text-[#111111] tracking-[-0.5px]">
                            10.000+
                          </div>
                          <div className="font-inter tracking-[-0.3px] text-left text-black text-[14px] text-[rgb(17, 17, 17)]">
                            Glückliche Kunden
                          </div>
                        </div>
                      </div>
          
                      {/* Stat container 2 */}
                      <div className="bg-white rounded-[20px] p-4   flex items-center w-full shadow-sm">
                        <div className="flex-shrink-0 mr-4">
                        <Image 
                           src="/greenstar.svg" 
                           alt="icon"
                           width={50}
                           height={50}
                          />
                        </div>
                        <div>
                          <div className="font-inter text-[24px] text-left font-[600] text-[#111111] tracking-[-0.5px]">
                            30
                          </div>
                          <div className="font-inter tracking-[-0.3px] text-left text-[14px]  text-black text-[rgb(17, 17, 17)]">
                            Jahre Erfahrung
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </FadeIn>
          
          {/* Gallery - Vertical on desktop, Horizontal on mobile */}
          <div className="gallery-container">
            {/* Desktop Vertical Scrolling Gallery (hidden on mobile) */}
            <div className="hidden md:block relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-lg">
              {/* Gradient masks for fading effect */}
              <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-[#EBE9E8] to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-[#EBE9E8] to-transparent z-10"></div>
              
              {/* Scrolling columns container */}
              <div className="desktop-scrolling-container">
                {/* Left Column */}
                <div className="desktop-scroll-column column-left">
                  {/* Original set */}
                  {imageGroup1.map(img => (
                    <div key={`left-${img.id}`} className="desktop-image-item">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {imageGroup1.map(img => (
                    <div key={`left-${img.id}-dup`} className="desktop-image-item">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
    
                {/* Right Column */}
                <div className="desktop-scroll-column column-right">
                  {/* Original set */}
                  {imageGroup2.map(img => (
                    <div key={`right-${img.id}`} className="desktop-image-item">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {imageGroup2.map(img => (
                    <div key={`right-${img.id}-dup`} className="desktop-image-item">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Horizontal Scrolling Gallery (hidden on desktop) */}
            <div className="md:hidden mt-4 space-y-4">
              {/* First row of horizontal scrolling */}
              <div className="relative overflow-hidden">
                {/* Gradient masks for horizontal fading effect */}
                <div className="absolute top-0 left-0 h-full w-[40px] bg-gradient-to-r from-[#EBE9E8] to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-[40px] bg-gradient-to-l from-[#EBE9E8] to-transparent z-10"></div>
                
                <div className="mobile-scroll-row row-1">
                  {/* Original set */}
                  {imageGroup1.map(img => (
                    <div key={`mobile-row1-${img.id}`} className="mobile-image-item">
                      <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {imageGroup1.map(img => (
                    <div key={`mobile-row1-${img.id}-dup`} className="mobile-image-item">
                      <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Second row of horizontal scrolling */}
              <div className="relative overflow-hidden">
                {/* Gradient masks for horizontal fading effect */}
                <div className="absolute top-0 left-0 h-full w-[40px] bg-gradient-to-r from-[#EBE9E8] to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-[40px] bg-gradient-to-l from-[#EBE9E8] to-transparent z-10"></div>
                
                <div className="mobile-scroll-row row-2">
                  {/* Original set */}
                  {imageGroup2.map(img => (
                    <div key={`mobile-row2-${img.id}`} className="mobile-image-item">
                      <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {imageGroup2.map(img => (
                    <div key={`mobile-row2-${img.id}-dup`} className="mobile-image-item">
                      <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-lg overflow-hidden">
                        <Image 
                          src={img.imageUrl} 
                          alt={img.alt}
                          width={160}
                          height={160}
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
      </div>
      
      {/* CSS for both vertical and horizontal scrolling animations */}
      <style jsx>{`
        /* Desktop vertical scrolling styles */
        .desktop-scrolling-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          gap: 16px;
          padding: 0 16px;
        }

         .sellwell-about-container {
          border-radius: 40px;
          align-content: flex-start;
          align-items: flex-start;
          background-clip: border-box;
          background-image: linear-gradient(119deg, rgba(235, 255, 225, 0.7) 0%, rgba(124, 242, 165, 0.7) 100%);
          background-position-x: 0%;
          background-position-y: 0%;
          background-repeat: repeat;
          background-size: auto;
          background-origin: padding-box;
          padding: 2.5rem;
          margin-right: -1.5rem;
          display: flex;
          border-width: 1px;
          border-color: rgb(124, 242, 165);
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-bottom: 4rem;
        }
        
        .desktop-scroll-column {
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
        
        .desktop-image-item {
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
        
        /* Mobile horizontal scrolling styles */
        .mobile-scroll-row {
          display: flex;
          gap: 12px;
          padding: 10px 0;
          width: max-content;
        }
        
        .row-1 {
          animation: scrollLeft 35s linear infinite;
        }
        
        .row-2 {
          animation: scrollRight 40s linear infinite;
        }
        
        .mobile-image-item {
          flex-shrink: 0;
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default VerticalGallerySection;