"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            
            // Close mobile menu if open
            closeMobileMenu();
        }
    };

    return(
        <>
            {/* Global smooth scrolling style */}
            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
            
            <header className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16 relative z-50">
                <div className={`flex items-center space-x-2 ${isMobileMenuOpen ? 'md:flex hidden' : 'flex'}`}>
                    <Image 
                        src="/sellwell-logo-black.svg" 
                        alt="SellWell Logo" 
                        width={180} height={180} 
                        className="mt-[-5px]"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 ml-40">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                    <Link 
                        href="#about" 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={(e) => handleSmoothScroll(e, '#about')}
                    >
                        Über uns
                    </Link>
                    <Link href="/karriere" className="text-gray-600 hover:text-gray-900 transition-colors">Karriere</Link>
                    <Link 
                        href="#b2b" 
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={(e) => handleSmoothScroll(e, '#b2b')}
                    >
                        Produktpartner
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="#about">
                    <button className="header-btn-secondary flex flex-row items-center gap-2">
                        <div>Unternehmen</div>
                        <ArrowRight className="h-4 w-4"/>
                    </button>
                    </Link>
                    <Link href="/karriere">
                    <button className="header-btn">
                        Bewerben
                    </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <Menu className="h-6 w-6 text-gray-600" />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={closeMobileMenu}
                    ></div>
                    
                    {/* Mobile Menu */}
                    <div className="fixed top-0 right-0 w-[100%] max-w-[100%] h-full bg-white shadow-xl">
                        <div className="flex flex-col h-full">
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <div className="flex items-center space-x-2">
                                    <Image 
                                        src="/sellwell-logo-black.svg" 
                                        alt="SellWell Logo" 
                                        width={140} 
                                        height={140} 
                                        className="mt-[-2px]"
                                    />
                                </div>
                                <button
                                    onClick={closeMobileMenu}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-label="Close mobile menu"
                                >
                                    <X className="h-6 w-6 text-gray-600" />
                                </button>
                            </div>

                            {/* Mobile Navigation */}
                            <nav className="flex-1 px-6 py-8">
                                <div className="space-y-6">
                                    <Link 
                                        href="/" 
                                        className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                                        onClick={closeMobileMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link 
                                        href="#about" 
                                        className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                                        onClick={(e) => handleSmoothScroll(e, '#about')}
                                    >
                                        Über uns
                                    </Link>
                                    <Link 
                                        href="/karriere" 
                                        className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                                        onClick={closeMobileMenu}
                                    >
                                        Karriere
                                    </Link>
                                    <Link 
                                        href="#b2b" 
                                        className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                                        onClick={(e) => handleSmoothScroll(e, '#b2b')}
                                    >
                                        Produktpartner
                                    </Link>
                                </div>
                            </nav>

                            {/* Mobile Buttons */}
                            <div className="p-6 border-t border-gray-200 space-y-4">
                                <button 
                                    className="w-full header-btn-secondary flex flex-row items-center justify-center gap-2"
                                    onClick={closeMobileMenu}
                                >
                                    <div>Unternehmen</div>
                                    <ArrowRight className="h-4 w-4"/>
                                </button>
                                <button 
                                    className="w-full header-btn"
                                    onClick={closeMobileMenu}
                                >
                                    Bewerben
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}