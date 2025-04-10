"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full z-50"
            style={{ background: 'linear-gradient(90deg, #0B3E27 0%, #197048 100%)' }}>
      {/* The header background is full width but the content is constrained */}
      <div className="container flex h-20 items-center justify-between">
        {/* Left side: Company name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl text-white">
            Sellwell GmbH
          </Link>
        </div>
        
        {/* Right side: Navigation, Instagram icon, and Contact button for desktop */}
        <div className="flex items-center">
          {/* Instagram Icon - visible on all screens */}
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
          
          {/* Main navigation - desktop only */}
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
              PRODUKTPARTNER
            </Link>
          </nav>

          {/* Contact Button - desktop only */}
          <div className="hidden md:block">
            <Link href="/kontakt">
              <button 
                className="inline-flex items-center px-5 py-2.5 text-[#000] font-[700] text-base rounded-[10px] hover:opacity-90 transition shadow-[0_2px_3px_rgba(0,0,0,0.5)]" 
                style={{ background: 'radial-gradient(circle, #E7E8E8 100%, #ABACAE 0%)' }}
              >
                KONTAKT
              </button>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
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
              {mobileMenuOpen ? (
                <>
                  {/* X icon when menu is open */}
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  {/* Hamburger icon when menu is closed */}
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#0B3E27] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6 mb-8">
            <Link 
              href="/" 
              className="inter700 text-white text-xl hover:text-white/80"
              onClick={closeMobileMenu}
            >
              HOME
            </Link>
            <Link 
              href="/#ueber-uns" 
              className="inter700 text-white text-xl hover:text-white/80"
              onClick={closeMobileMenu}
            >
              ÜBER UNS
            </Link>
            <Link 
              href="/karriere" 
              className="inter700 text-white text-xl hover:text-white/80"
              onClick={closeMobileMenu}
            >
              PRODUKTPARTNER
            </Link>
          </nav>

          {/* Contact Button in Mobile Menu */}
          <Link href="/kontakt" onClick={closeMobileMenu}>
            <button 
              className="w-full inline-flex items-center justify-center px-5 py-3 text-[#000] font-[700] text-base rounded-[10px] hover:opacity-90 transition shadow-[0_2px_3px_rgba(0,0,0,0.5)]" 
              style={{ background: 'radial-gradient(circle, #E7E8E8 100%, #ABACAE 0%)' }}
            >
              KONTAKT
            </button>
          </Link>

          {/* Social Links in Mobile Menu */}
          <div className="mt-8 flex items-center">
            <a 
              href="https://www.instagram.com/kress_maximilian/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-3"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="inter700">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;