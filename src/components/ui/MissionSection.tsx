"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/ui/missiontext';



// Duplicate testimonials for infinite scrolling
//const testimonialsForSlider = [...testimonials, ...testimonials, ...testimonials];

const MissionSection = () => {
  const [,setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full pt-20 pl-4 pr-4 bg-white overflow-hidden mb-[-100px]">
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
        {/* Mission Statement */} 
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="mt-[-20px] flex justify-center mb-5">
            <div className="inline-flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
              <Image 
                src="/Green Star.svg" 
                alt="Green Star" 
                width={22}
                height={22}
                className="mr-2"
              />
              <p className="text-center font-medium text-primary mb-[2.25px]">
                Wachstum & Leistung
              </p>
            </div>
          </div>
          <h2 className="headrt mb-4 leading-[1.5]">
            Unsere Mission
          </h2>
          <AnimatedText
            text="Unsere Mission bei Sellwell ist es, erstklassige Vertriebslösungen zu liefern und ambitionierten Talenten ein Umfeld zu schaffen, in dem sie gefördert werden und ihr volles Potenzial entfalten können. Täglich arbeiten wir daran, unser Team zu stärken und unseren Partnern bessere Ergebnisse zu liefern."
            className="text-lg text-foreground/80 px-30 font-[600]"
          />
        </div>
        
        {/* Testimonials Slider Widget with Centered Image */}
        <div className="relative mt-1 h-[600px]">
          {/* Slider rows with testimonials */}
          <div className="slider-widget mt-[-40px]">
            
            {/* Centered Image Overlay */}
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center">
              <div className="relative mt-10" style={{ borderRadius: '40px', padding: '30px' }}>
                <Image 
                  src="/Unsere Mission 2.png" 
                  alt="Unsere Mission" 
                  width={750} 
                  height={500} 
                  className="w-auto h-auto"
                  style={{ 
                    borderRadius: '32px', 
                    maxWidth: '750px',
                    maxHeight: '500px',
                    objectFit: 'contain',
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tailwind doesn't support keyframes directly - we need to use a style tag for animations */}
      <style jsx>{`
        .slider-widget {
          position: relative;
          overflow: hidden;
          height: 600px;
          padding: 20px 0;
        }
        
        .slider-widget::before,
        .slider-widget::after {
          content: "";
          position: absolute;
          top: 0;
          width: 70px;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }
        
        .slider-widget::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }
        
        .slider-widget::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }
        
        .slider-section {
          position: relative;
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          margin: 20px 0;
          overflow: hidden;
        }
        
        .slider-container {
          display: flex;
          width: max-content;
          height: 50px;
          transition: opacity 0.5s ease;
        }
        
        .testimonial-item {
          height: auto;
          min-width: 250px;
          margin-right: 25px;
          background-color: white;
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          border: 1.5px solid #333;
          background-clip: padding-box;
          box-shadow: 4 4px 0px rgba(0, 0, 0, 0.8);
        }
        
        .testimonial-text {
          font-size: 14px;
          color: #666;
          white-space: nowrap;
          text-align: center;
          width: 100%;
          font-weight: 500;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12.5px)); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(calc(-50% - 12.5px)); }
          100% { transform: translateX(0); }
        }
        
        @keyframes scrollLeftSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12.5px)); }
        }
        
        @keyframes scrollRightSlow {
          0% { transform: translateX(calc(-50% - 12.5px)); }
          100% { transform: translateX(0); }
        }
        
        .animate-scrollLeft {
          animation: scrollLeft 50s linear infinite;
          opacity: 1;
        }
        
        .animate-scrollRight {
          animation: scrollRight 55s linear infinite;
          opacity: 1;
        }
        
        .animate-scrollLeftSlow {
          animation: scrollLeftSlow 60s linear infinite;
          opacity: 1;
        }
        
        .animate-scrollRightSlow {
          animation: scrollRightSlow 65s linear infinite;
          opacity: 1;
        }
        
        .animate-scrollLeftFast {
          animation: scrollLeft 45s linear infinite;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default MissionSection;