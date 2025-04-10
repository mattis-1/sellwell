"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/ui/missiontext';
import ATS from "@/components/ui/verticaltext";

const MissionSection = () => {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full pt-12 sm:pt-20 mt-[-2px] px-4 bg-[#EBE9E8] overflow-hidden">
      {/* Smooth transition gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-40 sm:h-60 bg-gradient-to-b from-[#EBE9E8] to-transparent z-[0]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Mission Statement */} 
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <div className="mt-[-10px] sm:mt-[-20px] flex justify-center mb-4 sm:mb-5">
            <div className="inline-flex items-center backdrop-blur-sm rounded-[14px] px-3 sm:px-4 py-1.5 sm:py-2 border-[1.5px] sm:border-[1.7px] border-[#C8C7C6] shadow-[1px_1px_12px_0px_rgba(0,0,0,0.2)] sm:shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
              <Image 
                src="/Green Star.svg" 
                alt="Green Star" 
                width={18}
                height={18}
                className="mr-2"
              />
              <p className="text-center text-sm sm:text-base font-medium text-[#000] mb-[2px]">
                Wachstum & Leistung
              </p>
            </div>
          </div>
          <h2 className="inter800 tracking-[-1px] sm:tracking-[-1.5px] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-black mb-4 leading-[1.3] sm:leading-[1.5] z-[15]">
            Unsere Mission
          </h2>
          <div className="px-0 sm:px-6 md:px-10 lg:px-30">
            <AnimatedText
              text="Unsere Mission bei Sellwell ist es, erstklassige Vertriebslösungen zu liefern und ambitionierten Talenten ein Umfeld zu schaffen, in dem sie gefördert werden und ihr volles Potenzial entfalten können. Täglich arbeiten wir daran, unser Team zu stärken und unseren Partnern bessere Ergebnisse zu liefern."
              className="text-base sm:text-lg mb-[-50px] sm:mb-[-80px] text-[#000] font-[600]"
            />
          </div>
        </div>
        
        {/* Testimonials Slider Widget with Centered Image */}
        <div className="relative pt-2 sm:pt-5 pb-20 sm:pb-35 mt-1 h-[200px] sm:h-[280px]">
          {/* Slider rows with testimonials */}
          <div className="slider-widget">
            <ATS />
          </div>
        </div>
      </div>
      
      {/* Tailwind doesn't support keyframes directly - we need to use a style tag for animations */}
      <style jsx>{`
        .slider-widget {
          position: relative;
          overflow: hidden;
          height: 400px;
          padding: 15px 0;
        }
        
        @media (min-width: 640px) {
          .slider-widget {
            height: 600px;
            padding: 20px 0;
          }
        }
        
        .slider-widget::before,
        .slider-widget::after {
          content: "";
          position: absolute;
          top: 0;
          width: 40px;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }
        
        @media (min-width: 640px) {
          .slider-widget::before,
          .slider-widget::after {
            width: 70px;
          }
        }
        
        .slider-widget::before {
          left: 0;
          background: linear-gradient(to right, #EBE9E8, transparent);
        }
        
        .slider-widget::after {
          right: 0;
          background: linear-gradient(to left, #EBE9E8, transparent);
        }
        
        .slider-section {
          position: relative;
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          margin: 15px 0;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .slider-section {
            height: 60px;
            margin: 20px 0;
          }
        }
        
        .slider-container {
          display: flex;
          width: max-content;
          height: 40px;
          transition: opacity 0.5s ease;
        }
        
        @media (min-width: 640px) {
          .slider-container {
            height: 50px;
          }
        }
        
        .testimonial-item {
          height: auto;
          min-width: 180px;
          margin-right: 15px;
          background-color: #EBE9E8;
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          border: 1.2px solid #333;
          background-clip: padding-box;
          box-shadow: 0 2px 0px rgba(0, 0, 0, 0.5);
        }
        
        @media (min-width: 640px) {
          .testimonial-item {
            min-width: 250px;
            margin-right: 25px;
            border-radius: 12px;
            padding: 12px 18px;
            border: 1.5px solid #333;
            box-shadow: 0 4px 0px rgba(0, 0, 0, 0.8);
          }
        }
        
        .testimonial-text {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          text-align: center;
          width: 100%;
          font-weight: 500;
        }
        
        @media (min-width: 640px) {
          .testimonial-text {
            font-size: 14px;
          }
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
        
        /* For very small screens - adjust animation speeds */
        @media (max-width: 360px) {
          .animate-scrollLeft,
          .animate-scrollLeftFast,
          .animate-scrollLeftSlow,
          .animate-scrollRight,
          .animate-scrollRightSlow {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionSection;