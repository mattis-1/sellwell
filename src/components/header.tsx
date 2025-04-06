"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full z-50"
            style={{ background: 'linear-gradient(90deg, #0B3E27 0%, #197048 100%)' }}>
      {/* The header background is full width but the content is constrained */}
      <div className="container flex h-20 items-center justify-between">
        {/* Left side: Company name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl text-white">
Sellwell GmbH        </Link>
        </div>
        
        {/* Right side: Navigation, Instagram icon, and Contact button */}
        <div className="flex items-center">
          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/kress_maximilian/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mr-5 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="26" 
              height="26" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="hover:opacity-80 transition"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          {/* Main navigation */}
          <nav className="hidden md:flex items-center mr-3">
            <Link 
              href="/" 
              className="inter700 text-white hover:text-white/80 mx-4"
            >
              HOME
            </Link>
            <Link 
              href="/#ueber-uns" 
              className="inter700 text-white hover:text-white/80 mx-4"
            >
              ÜBER UNS
            </Link>
            <Link 
              href="/karriere" 
              className="inter700 text-white hover:text-white/80 mx-4"
            >
              KARRIERE
            </Link>
            <Link 
              href="/unternehmen" 
              className="inter700 text-white hover:text-white/80 mx-4"
            >
              PRODUKTPARTNER
            </Link>
          </nav>

          {/* Contact Button */}
          <Link href="/kontakt">
            <button 
              className="inline-flex items-center px-5 py-2.5 text-[#000] font-[700] text-base rounded-[10px] hover:opacity-90 transition shadow-[0_2px_3px_rgba(0,0,0,0.5)]" 
              style={{ background: 'radial-gradient(circle, #E7E8E8 100%, #ABACAE 0%)' }}
            >
              KONTAKT
            </button>
          </Link>
        </div>
        
        {/* Mobile menu button - only visible on small screens */}
        <div className="md:hidden ml-4">
          <button className="text-white p-2">
            <span className="sr-only">Menü öffnen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;