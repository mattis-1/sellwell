import React, { useState } from 'react';

const ApplyButton = ({ href = "#formular" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      className="relative flex items-center justify-between px-6 py-3 overflow-hidden transition-all duration-300 bg-black rounded-full group hover:pl-8"
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'rgb(17, 17, 17)',
        borderRadius: '50px',
      }}
    >
      {/* Text container */}
      <div className="relative flex items-center">
        <div 
          className="relative text-white font-semibold transition-transform duration-300"
          style={{
            fontFamily: 'var(--font-montserrat), "Inter", sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          Jetzt bewerben
        </div>
      </div>
      
      {/* Arrow circle */}
      <div 
        className="relative flex items-center justify-center w-8 h-8 ml-4 transition-all duration-300 bg-white rounded-full group-hover:bg-emerald-400"
        style={{
          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
        }}
      >
        {/* Arrow icon */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform duration-300"
          style={{
            transform: isHovered ? 'translateX(1px)' : 'translateX(0)',
          }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default ApplyButton;