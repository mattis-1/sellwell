import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B3E27] text-white relative pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 w-full max-w-full">
      <div className="container mx-auto px-4 w-full">
        {/* Top section with Noch Fragen and menu columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Left section with "Noch Fragen?" */}
          <div className="col-span-2 md:col-span-4 md:col-start-1 md:ml-6">
            <h4 className="font-medium text-lg sm:text-xl mb-3 sm:mb-4">Noch Fragen?</h4>
            <Link href="/kontakt">
              <button 
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-[#000] font-[700] text-sm sm:text-base rounded-[10px] hover:opacity-90 transition shadow-[0_2px_3px_rgba(0,0,0,0.5)]" 
                style={{ background: 'radial-gradient(circle, #E7E8E8 100%, #ABACAE 0%)' }}
              >
                KONTAKT AUFNEHMEN →
              </button>
            </Link>
          </div>
          
          {/* Right side menu columns - adjusted for mobile */}
          <div className="col-span-1 md:col-span-2 md:col-start-9">
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm uppercase text-white/70">Home Menu</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:text-opacity-80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="hover:text-opacity-80 transition">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-opacity-80 transition">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/produktpartner" className="hover:text-opacity-80 transition">
                  Produktpartner
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2 md:col-start-11">
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm uppercase text-white/70">Rechtliches</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-opacity-80 transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-opacity-80 transition">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-opacity-80 transition">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Large SELLWELL text - optimized for mobile */}
      <div className="w-full overflow-hidden text-center">
        <h2 
          className="text-[4rem] xs:text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#0B3E27] to-[#00884A] tracking-tight"
          style={{ lineHeight: '0.8' }}
        >
          SELLWELL
        </h2>
      </div>
      
      {/* Copyright text */}
      <div className="container mx-auto px-4 mt-2">
        <p className="text-xs text-white/60">@2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;