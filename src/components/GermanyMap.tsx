"use client";

import React from 'react';

const GermanyMap = () => {
  return (
    <div className="relative w-full h-full max-w-md mx-auto">
      {/* White radial gradient backdrop to block testimonials */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-white opacity-80 blur-md z-10"></div>
      
      <svg 
        viewBox="0 0 800 1000" 
        className="w-full h-full max-w-md mx-auto relative z-20"
        style={{filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"}}
      >
        {/* Simplified Germany map with county lines */}
        <g stroke="white" strokeWidth="2">
          {/* Northern states */}
          <path d="M300,100 L450,120 L500,150 L550,140 L600,180 L620,250 L580,280 L600,320 L550,350 L500,330 L450,340 L420,320 L380,340 L320,320 L280,340 L250,320 L220,330 L200,300 L220,280 L200,250 L220,220 L200,180 L250,150 Z" 
                fill="transparent" />
          
          {/* Western states */}
          <path d="M200,300 L180,350 L200,380 L180,420 L200,450 L220,470 L200,500 L220,530 L200,560 L250,600 L240,650 L200,680 L220,700 L250,680 L280,700 L320,680 L350,700 L380,680 L350,650 L380,620 L350,580 L380,550 L350,500 L320,480 L350,450 L320,420 L350,400 L320,380 L350,350 L320,320 Z" 
                fill="transparent" />
          
          {/* Central states */}
          <path d="M380,340 L420,320 L450,340 L480,320 L520,340 L550,350 L580,380 L550,420 L580,450 L550,480 L580,520 L550,550 L580,580 L550,600 L520,580 L480,600 L450,580 L420,600 L400,580 L380,600 L350,580 L380,550 L350,500 L380,480 L350,450 L380,420 L350,400 L380,380 Z" 
                fill="transparent" />
          
          {/* Eastern states */}
          <path d="M580,280 L620,250 L650,280 L680,250 L700,280 L680,320 L700,350 L680,380 L700,420 L680,450 L700,480 L680,520 L650,500 L620,520 L600,500 L580,520 L550,500 L580,480 L550,450 L580,420 L550,400 L580,380 L550,350 L600,320 Z" 
                fill="transparent" />
          
          {/* Bavaria - highlighted in green */}
          <path d="M380,600 L400,580 L420,600 L450,580 L480,600 L520,580 L550,600 L520,620 L550,650 L520,680 L550,700 L520,720 L550,750 L520,780 L480,750 L450,780 L420,750 L400,780 L380,750 L350,780 L320,750 L350,720 L320,700 L350,680 L380,700 L350,650 L380,620 Z" 
                fill="#197048" fillOpacity="0.6" />
          
          {/* Southern states */}
          <path d="M200,680 L240,650 L280,680 L320,650 L350,680 L320,700 L350,720 L320,750 L350,780 L320,800 L350,830 L320,850 L280,830 L250,850 L220,830 L180,850 L150,830 L180,800 L150,750 L180,720 L150,700 L180,680 Z" 
                fill="transparent" />
        </g>
      </svg>
    </div>
  );
};

export default GermanyMap;