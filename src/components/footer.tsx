import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#CEFAD6] text-black relative pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 w-full max-w-full">
      <div className="container mx-auto px-4 w-full">
        {/* Top section with Noch Fragen and menu columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Left section with "Noch Fragen?" */}
          <div className="col-span-2 md:col-span-4 md:col-start-1 md:ml-6">
            <h4 className="font-medium text-[17px] sm:text-[17px] mb-2 sm:mb-2 text-black">Noch Fragen?</h4>
            <Link href="/kontakt">
              <button 
                className="inline-flex bg-white items-center px-4 sm:px-5 py-2 sm:py-2.5 text-[#000] font-[500] text-[17px] rounded-[99px] hover:opacity-90 transition" 
                style={{ background: '#fff' }}
              >
                Kontakt aufnehmen
              </button>
            </Link>
          </div>
          
          {/* Right side menu columns - adjusted for mobile */}
          <div className="col-span-1 md:col-span-2 md:col-start-9">
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm uppercase text-black">Home Menu</h4>
            <ul className="space-y-1 text-sm text-black">
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
            <h4 className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm uppercase text-black">Rechtliches</h4>
            <ul className="space-y-1 text-sm text-black">
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
          className="text-[4rem] xs:text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#fff] to-[#fff] tracking-tight"
          style={{ lineHeight: '0.8' }}
        >
          SELLWELL
        </h2>
      </div>
      
      {/* Copyright text */}
      <div className="container mx-auto px-4 mt-2">
        <p className="text-xs text-black/90">@2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;