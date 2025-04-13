import React from 'react';
import Image from 'next/image';

const AnimatedTextSlideshow = () => {
  const phrases = [
    "riesige Aufstiegschancen",
    "beste Vertriebsprozesse",
    "individuelle Unterstützung",
    "im starken Arbeitsumfeld",
    "auch als Quereinsteiger",
    "grenzlos viel verdienen"
  ];

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 bg-[#EAEAEA] px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center text-center sm:text-left">
          {/* Static text with SVG enhancements */}
          <div className="relative mb-4 sm:mb-0 sm:mr-4">
            {/* SVG at top-left - hidden on mobile */}
            <div className="hidden sm:block absolute -top-3 -left-6 w-6 h-6">
              <Image 
                src="/ImageEnhancer.svg" 
                alt="Enhancer" 
                width={24} 
                height={24}
              />
            </div>
            
            {/* SVG at top-right - hidden on mobile */}
            <div className="hidden sm:block absolute -top-11 -right-12 w-24 h-16">
              <Image 
                src="/quirk3.svg" 
                alt="Quirk" 
                width={90} 
                height={90}
              />
            </div>
            
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#000000]" style={{ fontFamily: "'Switzer', sans-serif" }}>
              Bei Sellwell
            </span>
          </div>
          
          {/* Animated text container with improved height management */}
          <div className="overflow-hidden relative h-14 sm:h-16 md:h-20 w-full sm:w-auto max-w-full">
            {phrases.map((phrase, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 flex items-center justify-center sm:justify-start phrase-item phrase-${index + 1}`}
              >
                <span 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-2 sm:px-0"
                  style={{ 
                    fontFamily: "'Switzer', sans-serif",
                    background: 'linear-gradient(90deg, rgb(20, 87, 46) 0%, rgb(22, 157, 57) 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .phrase-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.5s, transform 0.5s;
          width: 100%;
        }
        
        .phrase-1 {
          animation: fadeInOut 12s infinite 0s;
        }
        
        .phrase-2 {
          animation: fadeInOut 12s infinite 2s;
        }
        
        .phrase-3 {
          animation: fadeInOut 12s infinite 4s;
        }
        
        .phrase-4 {
          animation: fadeInOut 12s infinite 6s;
        }
        
        .phrase-5 {
          animation: fadeInOut 12s infinite 8s;
        }
        
        .phrase-6 {
          animation: fadeInOut 12s infinite 10s;
        }
        
        @keyframes fadeInOut {
          0%, 10%, 100% {
            opacity: 0;
            transform: translateY(30px);
          }
          
          15%, 25% {
            opacity: 1;
            transform: translateY(0);
          }
          
          30%, 40% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }
        
        @media (max-width: 640px) {
          .phrase-item span {
            display: block;
            white-space: normal;
            text-align: center;
            line-height: 1.3;
          }
          
          @keyframes fadeInOut {
            0%, 10%, 100% {
              opacity: 0;
              transform: translateY(20px);
            }
            
            15%, 25% {
              opacity: 1;
              transform: translateY(0);
            }
            
            30%, 40% {
              opacity: 0;
              transform: translateY(-20px);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedTextSlideshow;