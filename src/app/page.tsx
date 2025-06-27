"use client"

import Benefits from "@/components/features/Benefits";
import Header from "@/components/features/Header";
import LinksRechts from "@/components/features/LinkRechts";
import Prozess from "@/components/features/Prozess";
import Image from "next/image";
import CtaSection from "@/components/features/cta-section";
import Footer from "@/components/features/Footer";
import Leistungen from "@/components/features/Leistungen";
import Erwartungen from "@/components/features/Erwartungen";
import Projekterfolg from "@/components/features/2x3";
import BenefitsV2 from "@/components/features/Benefits-v2";
import Stellenangebote from "@/components/features/Stellenangebote";
import ImageFlow from "@/components/features/ImageFlow";
import YouTubeGrid from "@/components/features/youtube";
import Team from "@/components/features/team";
import Link from "next/link";

const videoIds = [
  "tUgM4kCF7rU", // New IDs
  "Jua9evvcsdE",
  "o01oAhTevzM",
  "pzrbkBLwSz8", // Original IDs
  "b3D0D-B5ceM",
  "EjHbf1cObZw"
];

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      {/* Hero Section */}
      <main className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-[-30px] mt-0">
                  <span className="text-gray-900">Nummer 1 D2D</span>
                  <br />
                  <span className="text-gray-900">
                    Vertrieb Bayerns
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Ob du als Vertriebstalent Karriere machen willst, oder nach 
                  optimalen Vertriebslösungen suchst - Sellwell ist der perfekte Partner für dich.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/karriere">
                <button  className="sellwell-btn-primary">
                  Schnell Bewerben
                </button>
                </Link>
                <Link href="/kontakt">
                <button className="sellwell-btn-secondary flex items-center justify-center space-x-2">
                  <span>Projekt anfragen</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                </Link>
              </div>

              {/* Mobile Image - Show only on mobile */}
              <div className="lg:hidden">
                <div className="relative">                
                  <div className="relative group/image mt-8">
                      {/* Background card with gradient */}
                      <div className="absolute inset-0 rounded-3xl transform rotate-6 transition-transform duration-300" style={{ background: "linear-gradient(135deg,rgb(227, 252, 219) 0%, #C1F9D4 100%)" }}></div> 
                      {/* Main image container */}
                      <div className="relative bg-white rounded-3xl shadow-2xl p-0 transform transition-transform duration-300 group-hover:shadow-3xl">
                        <Image
                          src='/Projekterfolg.png'
                          alt='Sellwell Team'
                          width={500}
                          height={350}
                          className="rounded-2xl object-cover w-full h-100 transition-transform duration-300"
                        />
                      </div>
                    </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="pt-8">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-medium mb-4 ml-3">
                  In guter gemeinschaft
                </p>
                <div className="flex flex-wrap items-center gap-6 opacity-60 ">
                  <Image 
                    src="/case1.svg"
                    width={100}
                    height={100}
                    alt="Fallstudie 1"
                  />
                  <Image 
                    src="/case2.svg"
                    width={100}
                    height={100}
                    alt="Fallstudie 2"
                  />
                  <Image 
                    src="/case3.svg"
                    width={100}
                    height={100}
                    alt="Fallstudie 3"
                  />
                  <Image 
                    src="/case4.svg"
                    width={100}
                    height={100}
                    alt="Fallstudie 4"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Image - Show only on desktop */}
            <div className="hidden lg:block lg:justify-self-end">
              <div className="relative">                
                <div className="relative group/image mt-0 md:mt-[-160px]">
                    {/* Background card with gradient */}
                    <div className="absolute inset-0 rounded-3xl transform rotate-6 transition-transform duration-300" style={{ background: "linear-gradient(135deg,rgb(227, 252, 219) 0%, #C1F9D4 100%)" }}></div> 
                    {/* Main image container */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-0 transform transition-transform duration-300 group-hover:shadow-3xl">
                      <Image
                        src='/Projekterfolg.png'
                        alt='Sellwell Team'
                        width={500}
                        height={350}
                        className="rounded-2xl object-cover w-full h-100 transition-transform duration-300"
                      />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LinksRechts />
      <Benefits />      
      <Erwartungen />
      <Leistungen />
      <Projekterfolg />
      <BenefitsV2 />
      <ImageFlow />
      <Stellenangebote />
      <section className="pt-10 sm:pt-16 md:pt-20 mb-30">
        <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: '1200px' }}>
          <h1 className="text-[43px] font-[600] text-center tracking-[-0.75px] sm:tracking-[-1.2px] md:tracking-[-1.6px] leading-[40.4px] text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-[#000000] mb-10 sm:mb-12 md:mb-18 ">
          Einblicke aus dem Team
          </h1>
          <YouTubeGrid videoIds={videoIds} />
        </div>
      </section>
      <Team/>
      <Prozess />
      <CtaSection />
      <Footer />
    </div>
  );
}
