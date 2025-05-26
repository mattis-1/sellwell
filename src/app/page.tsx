"use client";
import Button from "@/modules/karriere-lp/components/button"
import Header from "@/components/header";
import Footer from "@/components/footer";
import MissionSection from "@/components/ui/MissionSection";
import Image from 'next/image';
import VerticalGallerySection from "@/components/waterfall";
import SplitSection from "@/components/splitsection-carrer";
import Stellen from "@/components/stellenangebote";
import { Tabs } from "@/components/ui/tabs"
import YouTubeGrid from "@/components/youtube"
import Slider from "@/components/slider"
import Process from "@/components/process"
import Somebenefits from "@/components/columnbenefits"
import { useState } from 'react';
import SimpleModal from "@/components/SimpleModal";
import FadeIn from '@/components/fadein';
import CookieBanner from '@/components/cookiebanner';
import "@/modules/karriere-lp/styles/karriere-lp-styles.css"
import SellwellBenefits from "@/modules/karriere-lp/components/benefits"
import SellwellExpectations2 from "@/modules/karriere-lp/components/erwartungen2"



const videoIds = [
  "tUgM4kCF7rU", // New IDs
  "Jua9evvcsdE",
  "o01oAhTevzM",
  "pzrbkBLwSz8", // Original IDs
  "b3D0D-B5ceM",
  "EjHbf1cObZw"
];

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'Firma' | 'Bewerber'>('Firma');
  
  // Functions to handle modal
  const openFirmaModal = () => {
    setModalMode('Firma');
    setIsModalOpen(true);
  };
  
  const openBewerberModal = () => {
    setModalMode('Bewerber');
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);


  const cards = [
    {
      id: 1,
      name: "Maximilian Kress",
      role: "FOUNDER & CEO",
      image: "/Maxi Portrait.png",
      video: "https://www.youtube.com/watch?v=pzrbkBLwSz8",
    },
    {
      id: 2,
      name: "Moritz Habeck",
      role: "FOUNDER & CEO",
      image: "/Moritz Portrait.png",
      video: "https://www.youtube.com/watch?v=b3D0D-B5ceM",
    },
    {
      id: 3,
      name: "Leonardo Basile",
      role: "FOUNDER & CEO",
      image: "/Leo Portrait.png",
      video: "https://www.youtube.com/watch?v=EjHbf1cObZw",
    },
    {
      id: 4,
      name: "Marco Sandrisser",
      role: "TEAMLEITER",
      image: "/Marco Portrait.png",
      video: "https://www.youtube.com/watch?v=Jua9evvcsdE&t=1s",
    },
    {
      id: 5,
      name: "Chris Marquardt",
      role: "VERTRIEBLER",
      image: "/Chris Portrait.png",
      video: "https://www.youtube.com/watch?v=tUgM4kCF7rU",
    },
    {
      id: 6,
      name: "Stefan Sonderholzer",
      role: "AUSBILDER",
      image: "/Stefan Portrait.png",
      video: "https://www.youtube.com/watch?v=o01oAhTevzM",
    },
  ];

  
  return (
    <div className="flex min-h-screen flex-col w-full bg-[#FFFFFF]">

  {/* Header spans full width */}
  <Header />
  
  <main className="flex-1 w-full">
    {/* Hero Section with contained background */}
    <div className="relative overflow-hidden">
      {/* Background layers start */}
      <div className="absolute inset-0 bg-[#FFFFFF] z-0"></div>
      
      {/* Left abstract elements - adjusted positioning for mobile 
      <div className="absolute top-[-20%] sm:top-[-10%] left-[-60%] sm:left-[-40%] w-[100%] sm:w-[95%] h-[100%] sm:h-[120%] z-[1] opacity-25 sm:opacity-35">
      <div className="relative w-full h-full">
    <div className="absolute w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.4)_0%,rgba(12,70,43,0.15)_70%)] top-[10%] left-[10%] blur-[50px]"></div>
    <div className="absolute w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.45)_0%,rgba(12,70,43,0.2)_70%)] top-[20%] left-[20%] blur-[40px]"></div>
    <div className="absolute w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(12,70,43,0.25)_70%)] top-[30%] left-[30%] blur-[30px]"></div>
    <div className="absolute w-[25%] h-[25%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.55)_0%,rgba(12,70,43,0.3)_70%)] top-[38%] left-[38%] blur-[20px]"></div>
  </div>
  <div className="relative w-full h-full -rotate-25">
    <div className="absolute w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.4)_0%,rgba(12,70,43,0.15)_70%)] top-[15%] left-[15%] blur-[45px]"></div>
    <div className="absolute w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.45)_0%,rgba(12,70,43,0.2)_70%)] top-[25%] left-[25%] blur-[35px]"></div>
    <div className="absolute w-[30%] h-[30%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(12,70,43,0.25)_70%)] top-[35%] left-[35%] blur-[25px]"></div>
  </div>
</div>*/}

{/* Right abstract elements - adjusted for darker green 
<div className="absolute top-[-20%] sm:top-[-10%] right-[-60%] sm:right-[-40%] w-[100%] sm:w-[95%] h-[100%] sm:h-[120%] z-[1] opacity-25 sm:opacity-35 rotate-180">
  <div className="relative w-full h-full">
    <div className="absolute w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.4)_0%,rgba(12,70,43,0.15)_70%)] top-[10%] left-[10%] blur-[50px]"></div>
    <div className="absolute w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.45)_0%,rgba(12,70,43,0.2)_70%)] top-[20%] left-[20%] blur-[40px]"></div>
    <div className="absolute w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(12,70,43,0.25)_70%)] top-[30%] left-[30%] blur-[30px]"></div>
    <div className="absolute w-[25%] h-[25%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.55)_0%,rgba(12,70,43,0.3)_70%)] top-[38%] left-[38%] blur-[20px]"></div>
  </div>
  <div className="relative w-full h-full -rotate-25">
    <div className="absolute w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.4)_0%,rgba(12,70,43,0.15)_70%)] top-[15%] left-[15%] blur-[45px]"></div>
    <div className="absolute w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.45)_0%,rgba(12,70,43,0.2)_70%)] top-[25%] left-[25%] blur-[35px]"></div>
    <div className="absolute w-[30%] h-[30%] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.5)_0%,rgba(12,70,43,0.25)_70%)] top-[35%] left-[35%] blur-[25px]"></div>
  </div>
</div>*/}
      
          
      {/* Vertical blocks grid - reduced number for mobile */}
      <div className="absolute inset-0 flex justify-between z-[1]">
        {[...Array(12)].map((_, i) => {
          return (
            <div key={i} className="h-full w-[8%] sm:w-[4%]" style={{
              borderRight: '0.25px solid rgba(244, 242, 241,0.1)',
              boxShadow: '-26px 0 40px rgba(244, 242, 241,0.24), 10px 0 25px rgba(0, 0, 0, 0.001)'
            }}></div>
          );
        })}
      </div>
      
      {/* Smooth transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-30 bg-gradient-to-b from-transparent to-[#F4F2F1] z-[4]"></div>
      {/* Background layers end */}

      {/* Hero content with higher z-index - adjusted padding for mobile */}
      
      <div className="relative z-10 px-4 sm:px-8 md:px-20 pt-12 sm:pt-20 pb-10 sm:pb-16 container mx-auto">
        <div className="flex flex-col items-center">
        
          <div className="inline-flex items-center rounded-[10px] sm:rounded-[14px] px-3 sm:px-4 py-1.5 sm:py-2 border-[1px] border-[#AAA] shadow-[1px_1px_10px_0px_rgba(0,0,0,0.15)] sm:shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)] mb-4 sm:mb-5">
            <Image 
              src="/Green Star.svg" 
              alt="Green Star" 
              width={18}
              height={18}
              className="mr-1.5 sm:mr-2"
            />
            <p className="inter500 text-center text-sm sm:text-base font-medium text-[#000] mb-[2px]">
              Nummer 1 Vertrieb im D2D in Bayern
            </p>
          </div>
        

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-montserrat text-[57.5px] md:text-[61.5px] text-center tracking-[-1.5px] font-[700] max-w-4xl mx-auto px-4 mb-8 leading-tight">
              Mit Sellwell als Partner{" "}
              <span className=""><br />neue Türen öffnen.</span>
            </h1>
            <p className="font-[500] inter500 text-base sm:text-lg md:text-[20px] mx-auto mb-6 sm:mb-8 text-[#171717] max-w-180">
              Ob du als Vertriebstalent richtig Karriere machen willst, oder nach optimalen Vertriebslösungen für deine Unternehmung suchst - Sellwell ist der perfekter Partner für dich. 
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-20">
              <Button 
              onClick={openBewerberModal}>
                Für Vertriebstalente
              </Button>
              <Button 
              onClick={openFirmaModal}>
                Für Unternehmen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>



        <section className="bg-[#F4F2F1]">
      {/* Infinite scrolling logos */}
      <div className="w-full flex justify-center mt-0">
        <div className="logos-slider-container w-[70%] relative">
          <div className="logos-slider">
            {/* First set of logos */}
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case1.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src="/case2.svg" alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case3.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-33 rounded flex items-center justify-center mx-6">
                <Image src='/case4.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='case1.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case2.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            
            {/* Duplicate for seamless loop */}
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case3.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src="/case4.svg" alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case1.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case2.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='case3.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            <div className="inline-block">
              <div className="h-16 w-32 rounded flex items-center justify-center mx-6">
                <Image src='/case4.svg' alt="Eon Logo" width={128} height={64} />
              </div>
            </div>
            </div>
          {/* Gradient overlays for fading effect */}
          <div className="fade-left2"></div>
          <div className="fade-right2"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
    </section>




<CookieBanner />

        
       {/* Welcome Section */}
<section className="relative px-4 sm:pl-8 sm:pr-10 py-12 sm:py-16 pb-12 sm:pb-15 bg-background w-full overflow-hidden">
  {/* Background layers start */}
  
  <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      {/* Left column - Image with reduced height */}
      <div className="relative h-64 sm:h-80 md:h-[320px] lg:h-[360px] xl:h-[500px] max-h-[450px] rounded-[25px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src="/WILLKOMMEN.png" 
            alt="Vertriebsstrategie" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Right column - Content */}
      <FadeIn direction="none" delay={200}>
      <div className="flex flex-col items-start mt-6 md:mt-0">
  
        <h2 className="text-[43px] font-[600] text-left tracking-[-0.72px] leading-[40.4px] mb-3 ml-[-5px] text-[#111]">Der Partner<br />im D2D in Bayern</h2>
        <p className="text-[17px] sm:text-[17px] text-[#222] ml-[-5px] mb-4 pr-0 sm:pr-8 md:pr-12 lg:pr-20">
          Als schnellstwachsender Door-to-Door Vertrieb Bayerns übernehmen wir für führende Unternehmen in der Energiebranche den Außendienst. Mit hocheffektiven Vertriebslösungen und einem ambitionierten Team setzen wir regelmäßig neue Maßstäbe im Markt der erneuerbaren Energie.
        </p>
        <a href="#about">
        <Button>
          Mehr erfahren
        </Button>
        </a>
      </div>
      </FadeIn>
    </div>
  </div>
</section>

{/* Karriereerfolg Section */}
<section className="relative w-full py-10 px-4 sm:pl-10 sm:pr-8 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-[#E9FEE6] to-[#A4F6C0] z-0"></div>
        
  {/* Texture background */}
        
  <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      {/* Left column - Content with checklist */}
      <FadeIn direction="none" delay={200}>
      <div className="flex flex-col text-white mt-6 md:mt-10 items-start">
       
        <h2 className="text-[38px] font-[600] text-left tracking-[-0.72px] leading-[40.4px] mb-5 ml-[-5px] text-[#111]">
          Entfalte dein volles<br />Potenzial im Direktvertrieb
        </h2>
                
        <ul className="space-y-3 mb-6 sm:mb-8 w-full">
          <li className="flex items-start gap-3">
          
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0 mt-0.1" viewBox="0 0 20 20" fill="#111">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
           
            <span className="text-[17px] sm:text-[17px] text-[#222]">Konstante Weiterbildung und individualisierte Unterstützung</span>
          </li>
          <li className="flex items-start gap-3">
           
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0 mt-0.1" viewBox="0 0 20 20" fill="#111">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            
            <span className="text-[17px] sm:text-[17px] text-[#222]">Schneller Aufstieg & 1A Gehalt: 5-stellig verdienen machbar</span>
          </li>
          <li className="flex items-start gap-3">
          
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0 mt-0.1" viewBox="0 0 20 20" fill="#111">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            
            <span className="text-[17px] sm:text-[17px] text-[#222]">Arbeite mit einem ambitionierten, familiären Team</span>
          </li>
          <li className="flex items-start gap-3">
           
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0 mt-0.1" viewBox="0 0 20 20" fill="#111">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            
            <span className="text-[17px] sm:text-[17px] text-[#222]">Effiziente Prozesse & Strategien - direkt umsetzbar</span>
          </li>
          <li className="flex items-start gap-3 mb-2 sm:mb-[-9px]">
           
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0 mt-0.1" viewBox="0 0 20 20" fill="#111">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            
            <span className="text-[17px] sm:text-[17px] text-[#222]">Renommierte Partner mit gutem Ruf und etablierten Marken</span>
          </li>
        </ul>
                
        <Button   
        onClick={openBewerberModal}>
          MEHR ERFAHREN
        </Button>
      </div>
      </FadeIn>      
      {/* Right column - Image */}
      <div className="mt-8 md:mt-7 relative h-64 sm:h-80 md:h-[350px] lg:h-[400px] rounded-[25px] overflow-hidden border border-white/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src="/Potenzial.png" 
            alt="Vertriebserfolg" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Projekt erfolgreich vermarkten mit Sellwell */}
<section className="relative px-4 py-12 sm:py-16 bg-[#FFFFFF] w-full">
  <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
    {/* Noise texture overlay */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      {/* Left column - Image with reduced height */}
      <div className="z-[10] relative h-64 sm:h-80 md:h-[320px] lg:h-[360px] xl:h-[400px] max-h-[450px] rounded-[25px] overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <Image 
            src="/Projekterfolg.png" 
            alt="Vertriebsstrategie" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      <FadeIn direction="none" delay={200}>   
      {/* Right column - Content */}
      <div className="flex flex-col start-items items-start z-[125] mt-6 md:mt-0">
        <h2 className=" text-[38px] font-[600] text-left tracking-[-0.72px] leading-[40.4px] mb-5 ml-[-5px]">Produkt erfolgreich<br />mit Sellwell vermarkten</h2>
        <p className="font-inter text-[#111111] text-left text-[17px] tracking-[-0.22px] leading-[26.4px] mr-10 ml-[-5px] mb-5">
          Wir vermarkten Ihr Produkt effizient, verlässlich und mit messbaren ErgebnissenEffizient. Konstante Weiterbildung unseres Teams und bewährte Vertriebsprozesse, die kontinuierlich optimiert werden, machen uns zum optimalen Partner für Ihr Unternehmen.
        </p>
        <div className="ml-[-5px]">
        <Button 
            onClick={openFirmaModal}
          >
            Jetzt Projekt anfragen
          </Button>
      </div>
      
    
      </div></FadeIn>     
    </div>
  </div>
</section>

<div className="pt-10 pb-2">
<SellwellBenefits />
</div>
{/* Three Column Section 
<section className="bg-[#184639] py-18">
  <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
    <div className="mb-10">
  <div className="text-center tracking-[-2px] bg-gradient-to-r from-[#EDEDEE] to-[#A7A8AA] bg-clip-text text-transparent
 inter800 tracking-[-1.3px] text-3xl sm:text-[35px] md:text-[40px] lg:text-[50px] text-[#fff] mr-[6px]">Was wir bieten</div>
 <Image 
                    src="/uuunderlined.svg"
                    alt="Textunderline"
                    width={295}
                    height={295}
                    className="object-contain text-center mx-auto mt-[-7.5px] mb-[-60px]"
                  />
 </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 
      <FadeIn direction="up" delay={100}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-[-2.5px]">
        <Image 
  src="/Shaking Hands.svg" 
  alt="Shaking Hands" 
  width={108} 
  height={108} 
  className="w-25 h-25"
/>
        </div>
        <h3 className="benefitheader mb-2">
          Junges und<br />dynamisches Team
        </h3>
        <p className="benefittext">
          Für ein Erfolg förderndes und<br />familiäres Arbeitsklima.
        </p>
      </div>
</FadeIn>
      {/* Column 2 
<FadeIn direction="up" delay={200}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-[-2.5px]">
        <Image 
  src="/4.svg" 
  alt="Certificate" 
  width={108} 
  height={108} 
  className="w-25 h-25"
/>
        </div>
        <h3 className="benefitheader mb-2">
          Expertise und<br />langjährige Erfahrung
        </h3>
        <p className="benefittext">
          Strategien und Prozesse, die sich in den letzten<br /> Jahren etliche Male bewähren konnten. 
        </p>
      </div>
      </FadeIn>
      {/* Column 3
      <FadeIn direction="up" delay={300}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-[-2.5px]">
        <Image 
  src="/5.svg" 
  alt="Optimierung" 
  width={108} 
  height={108} 
  className="w-25 h-25"
/>
        </div>
        <h3 className="benefitheader mb-2">
          Stetige Optimierung<br />und Weiterbildung
        </h3>
        <p className="benefittext">
          Wachstum & erfolgsorientiertes <br />Denken sind unsere größte Priorität.
        </p>
      </div>
      </FadeIn>
      
    </div>
  </div>
</section>
*/}
<section id="about" className="mb-[-8px]">
   <VerticalGallerySection />
</section>

      {/* Header spans full width */}
      <MissionSection />



      {/*Karriere-Split Screen*/}
      <SplitSection />

{/* Three Column Section 
<section className="bg-[#EBE9E8] pb-10">
  <div className="bg-[#ffffff] pb-14 pt-5 rounded-b-[70px] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.15)]">
    {/* Added a max-width container to limit width on larger screens 
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-[#184639] py-14 rounded-[70px]">
        {/* Adjusted padding to be more consistent 
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="none" delay={100}>
              {/* Column 1 
              <div className="flex flex-col items-center text-center">
                <div className="mb-[-2.5px]">
                  <Image 
                    src="/6.svg" 
                    alt="Shaking Hands" 
                    width={108} 
                    height={108} 
                    className="w-25 h-25"
                  />
                </div>
                <h3 className="benefitheader mb-2">
                  Individuelle<br />Unterstützung
                </h3>
                <p className="benefittext">
                  Egal worum es geht - Ansprechpartner<br />stehen immer an deiner Seite.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="none" delay={200}>
              {/* Column 2 
              <div className="flex flex-col items-center text-center">
                <div className="mb-[-2.5px]">
                  <Image 
                    src="/7.svg" 
                    alt="aufstieg" 
                    width={108} 
                    height={108} 
                    className="w-25 h-25"
                  />
                </div>
                <h3 className="benefitheader mb-2">
                  Große & schnelle<br /> Aufstiegsmöglichkeiten
                </h3>
                <p className="benefittext">
                  Innerhalb kürzester Zeit aufsteigen<br />und Gehalt steigern.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="none" delay={300}>
              {/* Column 3 
              <div className="flex flex-col items-center text-center">
                <div className="mb-[-2.5px]">
                  <Image 
                    src="/8.svg" 
                    alt="personal development" 
                    width={108} 
                    height={108} 
                    className="w-25 h-25"
                  />
                </div>
                <h3 className="benefitheader mb-2">
                  Persönliche<br />Weiterentwicklung
                </h3>
                <p className="benefittext">
                  Durch dein Umfeld und konstante<br />Weiterbildung Charakter stärken.
                </p>
              </div>
            </FadeIn>  
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
*/}

<SellwellExpectations2 />

<section id="leistungen" className="py-8 sm:py-10 md:pb-0 md:pt-15 bg-white w-full">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Mission Statement */}
   
    <FadeIn delay={200}>
      <h2 className="text-[50px] leading-[50px] tracking-[-0.75px] text-center mb-7 font-inter font-[600] text-[#000000]">Unsere Leistungen</h2>
    </FadeIn>
    
    <div className="mb-8 sm:mb-12 md:mb-16">
      <Tabs
        containerClassName="justify-center sm:justify-center"
        activeTabClassName="bg-transparent border border-[#000]"
        tabClassName="font-medium text-sm md:text-base"
        contentClassName=""
        tabs={[
          {
            title: "Vertriebsberatung",
            value: "b2b",
            image: "/Leistung1.png",
            imageAlt: "Vertriebsberatung und Optimierung",
            heading: "Vertriebsberatung und Optimierung",
            text: "Wir analysieren Ihre bestehenden Vertriebsprozesse und entwickeln maßgeschneiderte Strategien für den Door-to-Door Bereich. Mit datenbasierter Optimierung und praxiserprobten Methoden steigern wir Ihre Conversion Rates und maximieren den ROI Ihrer Vertriebsaktivitäten.",
            buttonText: "JETZT KONTAKT AUFNEHMEN",
            buttonLink: "/kontakt"
          },
          {
            title: "Neukundengewinnung",
            value: "b2c",
            image: "/Leistung2.png",
            imageAlt: "Neukundengewinnung und Lead Generation",
            heading: "Neukundengewinnung und Lead Generierung",
            text: "Wir bringen Ihr Produkt direkt zu den relevanten Kunden und übernehmen den gesamten Akquiseprozess im Door-to-Door Bereich. Mit gezielter Ansprache und bewährten Verkaufstechniken überzeugen wir potenzielle Kunden und generieren qualifizierte Abschlüsse für Ihr Unternehmen.",
            buttonText: "JETZT KONTAKT AUFNEHMEN",
            buttonLink: "/kontakt"
          },
          {
            title: "Vertriebsprozesse",
            value: "online",
            image: "/Leistung3.png",
            imageAlt: "Vertriebsprozesse und Strategien",
            heading: "Vertriebsprozesse und strategische Planung",
            text: "Wir entwickeln passgenaue Vertriebsprozesse und maßgeschneiderte Strategien für Ihre Produkte im Energiesektor. Von der ersten Kundenansprache bis zum erfolgreichen Abschluss implementieren wir durchdachte Verkaufsabläufe und setzen sie mit unserem erfahrenen Team direkt im Door-to-Door Bereich um.",
            buttonText: "JETZT KONTAKT AUFNEHMEN",
            buttonLink: "/kontakt"
          },
        ]}
      />
    </div>
  </div>
</section>

<section className="bg-white mt-[-10px] pb-10">
  {/* Add container to control max width */}
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Removed background and shadow */}
    <div className="pt-8 sm:pt-10 md:pt-14 pb-10 sm:pb-12 md:pb-16 rounded-[30px] sm:rounded-[55px] md:rounded-[75px]">
      {/* Simplified width-controlled container */}
      <div className="mx-auto px-7 sm:px-6 lg:px-1 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left column - Image with responsive sizing */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full rounded-[20px] sm:rounded-[35px] overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <Image 
                src="/Perfekter Partner.png" 
                alt="Vertriebsvorteile" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right column - Content with benefits */}
          <FadeIn delay={200}>
            <div className="flex flex-col items-start">

              <h2 className="text-[40px] leading-[45px] tracking-[-0.75px] text-left mb-5 font-inter font-[600] text-[#000000]">
                Projekterfolg -<br />
                  verlässlich & stressfrei
              </h2>
              
              {/* Benefits with checkmarks - optimized for mobile */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  {/* Checkbox container */}
                  <div
                    className="flex items-center justify-center rounded-[6px] sm:rounded-[8px] flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] min-w-[20px] sm:min-w-[24px] md:min-w-[25px]"
                    style={{
                      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
                      border: "2px solid #0C462B"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="#ffffff">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] font-[600] text-[#000]/80">
                    Skalierbarer Außendienst - ohne eigene Ressourcenbindung
                  </p>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="flex items-center justify-center rounded-[6px] sm:rounded-[8px] flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] min-w-[20px] sm:min-w-[24px] md:min-w-[25px]"
                    style={{
                      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
                      border: "2px solid #0C462B"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="#ffffff">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] font-[600] text-[#000]/80">
                    Verlässliche Steigerung Ihrer Verkaufszahlen
                  </p>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="flex items-center justify-center rounded-[6px] sm:rounded-[8px] flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] min-w-[20px] sm:min-w-[24px] md:min-w-[25px]"
                    style={{
                      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
                      border: "2px solid #0C462B"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="#ffffff">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] font-[600] text-[#000]/80">
                    Schnell und ohne großen Aufwand erste Erfolge sehen
                  </p>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="flex items-center justify-center rounded-[6px] sm:rounded-[8px] flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] min-w-[20px] sm:min-w-[24px] md:min-w-[25px]"
                    style={{
                      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
                      border: "2px solid #0C462B"
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="#ffffff">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] font-[600] text-[#000]/80">
                    Bewährte Verkaufsstrategien für maximale Abschlussraten
                  </p>
                </div>
              </div>

              {/* Green gradient CTA button */}
              <Button 
                onClick={openFirmaModal}
              >
                Beratungsgespräch vereinbaren
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </div>
</section>

{/*Offene Stellen */}
<Stellen />

<section className="pt-10 sm:pt-16 md:pt-20">
<FadeIn delay={100}>
  <div className="mx-auto px-4 sm:px-6 md:px-8" style={{ maxWidth: '1200px' }}>
    {/* Mission Statement */}
    
    
      <h1 className="text-[43px] font-[600] text-center tracking-[-0.75px] sm:tracking-[-1.2px] md:tracking-[-1.6px] leading-[40.4px] text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-[#000000] mb-10 sm:mb-12 md:mb-18 ">
      Einblicke aus dem Team
    </h1>
    
    {/* YouTubeGrid with updated props - no longer needed as we're handling these with Tailwind classes */}
    <YouTubeGrid videoIds={videoIds} />
  </div>
</FadeIn>
</section>


    <section className="pt-5 lg:py-5 relative overflow-clip mb-[-40px] sm:mb-[-60px] md:mb-[-75px]">
  {/* Background gradient overlay */}
  <div className="bg-gradient-to-t absolute from-[#fff] to-[#fff] inset-0 w-full h-full pointer-events-none"></div>
  <div className="container relative px-4 sm:px-6">
    
    
    {/* Heading */}
    <div className="richtext prose-h2:text-white mb-2 sm:mb-3">
      <h2 className="mt-20 text-[43px] font-[600] text-center tracking-[-0.75px] sm:tracking-[-1.2px] md:tracking-[-1.6px] leading-[62.4px] text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-[#000000] mb-8 sm:mb-10 md:mb-16">

        Echter Vertrieb.<br />
          Echte Ergebnisse.
      </h2>
    </div>
    
    {/* Slider */}
    <div className="min-h-[36rem] sm:min-h-[42rem] md:min-h-[46rem] lg:min-h-[50rem] relative">
      <Slider cards={cards} />
    </div>
  </div>
</section>

<section>
  <Somebenefits />
</section>

    <section>
      <Process />
    </section>

{/*Instagram Einbindung*/}
<section>
</section>


</main>
      
      {/* Footer spans full width */}
      <Footer />

      <SimpleModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        mode={modalMode} 
      />

    </div>
  );
}