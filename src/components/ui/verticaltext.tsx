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
    <section className="relative overflow-hidden pt-10 bg-[#EAEAEA] px-4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {/* Static text with SVG enhancements */}
          <div className="flex-shrink-0 mr-4 relative">
            {/* SVG at top-left */}
            <div className="absolute -top-1 -left-5 w-6 h-6">
              <Image 
                src="/ImageEnhancer.svg" 
                alt="Enhancer" 
                width={24} 
                height={24}
              />
            </div>
            
            {/* SVG at top-right */}
            <div className="absolute -top-11 -right-12 w-35 h-15">
              <Image 
                src="/quirk3.svg" 
                alt="Quirk" 
                width={90} 
                height={90}
              />
            </div>
            
            <span className="text-[40px] font-semibold text-[#000000]" style={{ fontFamily: "'Switzer', sans-serif" }}>
              Bei Sellwell
            </span>
          </div>
          
          {/* Animated text */}
          <div className="overflow-hidden relative h-20" style={{ minWidth: "500px" }}>
            {phrases.map((phrase, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 flex items-center phrase-item phrase-${index + 1}`}
              >
                <span 
                  className="text-[40px] font-semibold whitespace-nowrap"
                  style={{ 
                    fontFamily: "'Switzer', sans-serif",
                    background: 'linear-gradient(90deg, rgb(20, 87, 46) 0%, rgb(22, 157, 57) 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    paddingRight: 700,
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
            transform: translateY(40px);
          }
          
          15%, 25% {
            opacity: 1;
            transform: translateY(0);
          }
          
          30%, 40% {
            opacity: 0;
            transform: translateY(-40px);
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedTextSlideshow;