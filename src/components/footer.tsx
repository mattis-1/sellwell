import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0B3E27] text-white relative pt-12 pb-6 w-full max-w-full">
      <div className="container mx-auto px-4 w-full">
        {/* Top section with Noch Fragen and menu columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Left section with "Noch Fragen?" */}
          <div className="md:col-span-4 md:col-start-1 md:ml-6">
            <h4 className="font-medium text-xl mb-4">Noch Fragen?</h4>
            <button className="inline-flex items-center px-4 py-2 text-black font-semibold rounded-full hover:opacity-90 transition shadow-[0_2px_3px_rgba(0,0,0,0.5)]" 
              style={{ background: 'radial-gradient(circle, #745A36 0%, #B59F7E 100%)' }}>
              Kontakt aufnehmen →
            </button>
          </div>
          
          {/* Right side menu columns - adjusted positioning */}
          <div className="md:col-span-2 md:col-start-9">
            <h4 className="font-medium mb-3 text-sm uppercase text-white/70">Home Menu</h4>
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
          
          <div className="md:col-span-2 md:col-start-11">
            <h4 className="font-medium mb-3 text-sm uppercase text-white/70">Rechtliches</h4>
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
      
      {/* Large SELLWELL text */}
      <div className="w-full overflow-hidden text-center">
        <h2 
          className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#0B3E27] to-[#00884A]"
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