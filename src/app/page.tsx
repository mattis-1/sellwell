"use client";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MissionSection from "@/components/ui/MissionSection";
import Image from 'next/image';
import VerticalGallerySection from "@/components/waterfall";
import Statistics from "@/components/Statistics";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import SplitSection from "@/components/splitsection-carrer";
//import { GlowingEffect } from "@/components/ui/glowing-effect";
import Stellen from "@/components/stellenangebote";
import { Tabs } from "@/components/ui/tabs"
import AnimatedQuoteSection from "@/components/zitat"
import FeatureGrid from "@/components/ctasection"
import Imgslider from "@/components/slidingimages";
import Testimonials from "@/components/ui/testimonials"
import YouTubeGrid from "@/components/youtube"
import Slider from "@/components/slider"
import Process from "@/components/process"
import Somebenefits from "@/components/columnbenefits"
import { ContainerTextFlip } from "@/components/ui/textflip";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import { TypewriterEffect } from "@/components/ui/typewriter";


const videoIds = [
  "tUgM4kCF7rU", // New IDs
  "Jua9evvcsdE",
  "o01oAhTevzM",
  "pzrbkBLwSz8", // Original IDs
  "b3D0D-B5ceM",
  "EjHbf1cObZw"
];

export default function Home() {

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
    <div className="flex min-h-screen flex-col w-full">
      {/* Header spans full width */}
      <Header />
      
      <main className="flex-1 w-full">
        
        <section className="relative pl-4 pr-4 py-20 pt-18 pb-1 overflow-hidden bg-gradient-to-b from-background to-muted w-full">

          <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32 relative z-10">
           
            <div className="mt-[-20px] flex justify-center mb-5">
  <div className="inline-flex items-center g-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.09)]">
       <Image 
         src="/Green Star.svg" 
         alt="Green Star" 
         width={22}
         height={22}
         className="mr-2"
       />
    <p className="text-center font-medium text-primary mb-[2.25px]">
      Nummer 1 Vertrieb im D2D in Bayern
    </p>
  </div>
</div>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-[65px] inter700 tracking-[-1px] md:text-5xl lg:text-6xl leading-18 font-bold mb-6">
                Mit Sellwell als Partner{" "}
                <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent"><br />neue Türen öffnen.</span>
              </h1>
              <p className="font-[600] text-xl max-w-160 mx-auto mb-8 text-[#171717]">
              Ob du als Vertriebstalent richtig Karriere machen willst, oder nach strategischen Vertriebslösungen für deine Unternehmung suchst - Sellwell ist dein perfekter Partner. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="text-[20px] py-2 rounded-[99px]" variant="default">
                  Für Vertriebstalente
                </Button>
                <Button className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent text-[20px] rounded-[99px] " variant="outline">
                  Für Unternehmer
                </Button>
              </div>
            </div>
          </div>
          </section>
          <section>
          {/* Infinite scrolling logos */}
          <div className="w-full flex justify-center mt-12">
            <div className="logos-slider-container w-[70%] relative">
              <div className="logos-slider">
                {/* First set of logos */}
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 1</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 2</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 3</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 4</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 5</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 6</span>
                  </div>
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 1</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 2</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 3</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 4</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 5</span>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                    <span className="text-primary font-bold">Logo 6</span>
                  </div>
                </div>
              </div>
              {/* Gradient overlays for fading effect */}
              <div className="fade-left"></div>
              <div className="fade-right"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
        </section>






        
        {/* Two-column section */}
        <section className="pl-8 pr-10 py-16 bg-background w-full">
          <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left column - Image with reduced height */}
              <div className="relative h-80 md:h-[320px] lg:h-[360px] xl:h-[500px] max-h-[450px] rounded-lg overflow-hidden">
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
              <div className="flex flex-col items-start">
  <span className="mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[16px] font-[600] rounded-[99px] px-4 py-1">
WILLKOMMEN BEI SELLWELL  </span>
                <h2 className="headr mb-3">Der Partner<br /><span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">im D2D in Bayern</span></h2>
                <p className="text-xl text-foreground/800 mb-7 pr-20">
                Als schnellstwachsender Door-to-Door Vertrieb Bayerns übernehmen wir für führende Unternehmen in der Energiebranche den Außendienst. Mit hocheffektiven Vertriebslösungen und einem ambitionierten Team setzen wir regelmäßig neue Maßstäbe im Markt der erneuerbaren Energie.
                </p>

                <Button variant="default" className="self-start text-[22px] rounded-[99px]">
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tilted green section with angled shapes */}
        <section className="relative w-full mt-1 mb-1 py-20 pl-10 pr-8 overflow-hidden">
          {/* Extra background layer with opposite tilt */}
          <div className="absolute inset-0 bg-[#A0BDB0] -z-20"
             style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)' }}></div>
          
          {/* Main background */}
          <div className="absolute inset-0 bg-[#0B3E27] -z-10"
               style={{ clipPath: 'polygon(0 12.5%, 100% 0, 100% 87.5%, 0 100%)' }}></div>
          
          <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left column - Content with checklist */}
              <div className="flex flex-col text-white mt-10 items-start">
                <span className="mb-3 inline-block bg-gradient-to-r from-[#ffffff] to-[#a9aaac] text-[#0B3E27] text-[16px] font-[700] rounded-[99px] px-4 py-1
">KARRIEREERFOLG MIT SELLWELL</span>
                <h2 className="headrr mb-3 bg-gradient-to-r from-[#ffffff] to-[#A9AAAC] bg-clip-text text-transparent
">Entfalte dein volles<br />Potenzial im Direktvertrieb</h2>
                
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-3">
                  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
                    <span className="text-[18px]" >Konstante Weiterbildung und individualisierte Unterstützung</span>
                  </li>
                  <li className="flex items-start gap-3">
                  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
                    <span className="text-[18px]">Schneller Aufstieg & Top Gehalt - problemlos 5-stellig verdienen</span>
                  </li>
                  <li className="flex items-start gap-3">
                  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
                    <span className="text-[18px]">Arbeite mit einem ambitionierten, familiären Team</span>
                  </li>
                  <li className="flex items-start gap-3">
                  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
                    <span className="text-[18px]">Effiziente Prozesse & Strategien - direkt umsetzbar</span>
                  </li>
                  <li className="flex items-start gap-3 mb-[-9px]">
  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
                    <span className="text-[18px]">Renommierte Partner mit gutem Ruf und etablierten Marken</span>
                  </li>
                </ul>
                
                <button className="inline-flex bg-gradient-to-r from-[#D8D8D9] to-[#AFB0B2]
 items-center px-5 py-2.5 text-[#0B3E27] font-[700] text-[19px] text-base rounded-full  transition shadow-[0_2px_3px_rgba(0,0,0,0.5)] self-start" 
                      >
                  MEHR ERFAHREN
                </button>
              </div>
              
              {/* Right column - Image */}
              <div className="relative h-80 md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for actual image */}
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


{/* Two-column section */}
<section className="pl-4 pr-4 py-16 bg-background w-full">
          <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left column - Image with reduced height */}
              <div className="relative h-80 md:h-[320px] lg:h-[360px] xl:h-[400px] max-h-[450px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <Image 
                    src="/Projekterfolg.png" 
                    alt="Vertriebsstrategie" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right column - Content */}
              <div className="flex flex-col start-items items-start">
                <span className="mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[16px] font-[600] rounded-[99px] px-4 py-1">PROJEKTERFOLG MIT SELLWELL</span>
                <h2 className="headr mb-2 font-[700]">Produkt erfolgreich<br /><span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">mit Sellwell vermarkten</span></h2>
                <p className="text-foreground/80 mb-6 text-xl">
                Wir vermarkten Ihr Produkt effizient, verlässlich und mit messbaren ErgebnissenEffizient. Konstante Weiterbildung unseres Teams und bewährte Vertriebsprozesse, die kontinuierlich optimiert werden, machen uns zum optimalen Partner für Ihr Unternehmen.
                </p>
                <Button variant="default" className="self-start text-[22px] rounded-[99px]">
                  Jetzt Projekt anfragen
                </Button>
              </div>
            </div>
          </div>
        </section>

{/* Three Column Section */}
<section className="bg-[#0B3F27] py-20 mb-7">
  <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
    <div className="mb-10">
  <div className="text-center tracking-[-2px] bg-gradient-to-r from-[#EDEDEE] to-[#A7A8AA] bg-clip-text text-transparent
 inter700 text-[45px] text-[#fff]">Was wir bieten</div>
 <Image 
                    src="/uuunderlined.svg"
                    alt="Textunderline"
                    width={295}
                    height={295}
                    className="object-contain text-center mx-auto mt-[-7.5px] mb-[-60px]"
                  />
 </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
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

      {/* Column 2 */}
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
      
      {/* Column 3 */}
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
      
      
    </div>
  </div>
</section>

      {/*Über uns*/}
      <VerticalGallerySection />

      {/* Header spans full width */}
      <MissionSection />

      {/* Statistics Section */}
      <Statistics />
      {/* Button Container - jetzt außerhalb des Grids */}


      {/*Karriere-Split Screen*/}
      <SplitSection />

{/* Three Column Section */}
<section className="bg-[#0B3F27] py-20 mb-7">
  <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-32">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Column 1 */}
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

      {/* Column 2 */}
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
      
      {/* Column 3 */}
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
      
      
    </div>
  </div>
</section>


<section className="pb-5 pt-25 bg-background w-full">
  <div className="container mx-auto">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-7">
<div className="mt-[-20px] flex justify-center mb-1">
  <div className="inline-flex items-center g-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
       <Image 
         src="/Green Star.svg" 
         alt="Green Star" 
         width={22}
         height={22}
         className="mr-2"
       />
    <p className="text-center font-medium text-primary mb-[2.25px]">
      Sellwell für Unternehmen
    </p>
  </div>
</div>
</div>
    <h2 className="text-center headr mb-[30px]">Unsere Leistungen</h2>
    
    <div className="mb-16">
      <Tabs
        containerClassName="justify-center mb-14"
        activeTabClassName="bg-primary/10 border border-primary/20"
        tabClassName="font-medium text-sm md:text-base mx-1"
        contentClassName=""
        tabs={[
          {
            title: "Vertriebsberatung",
            value: "b2b",
            content: (
              <div className="bg-gradient-to-br from-[#0B3E27] to-[#0B5934] p-8 rounded-[60px] shadow-lg justify-center">
                <div className="text-center text-white mt-12 mb-3">Icon hier</div>
                <h3 className="text-[42px] font-bold mb-6 text-[#fff] text-center">Vertriebsberatung<br />und Optimierung</h3>
                
                  <div>
                    <p className="text-[#fff] mb-12 leading-relaxed text-[17px] text-center max-w-150 mx-auto">
                    Wir analysieren Ihre bestehenden Vertriebsprozesse und entwickeln maßgeschneiderte Strategien für den Door-to-Door Bereich. Mit datenbasierter Optimierung und praxiserprobten Methoden steigern wir Ihre Conversion Rates und maximieren den ROI Ihrer Vertriebsaktivitäten.
                    </p>
                  </div>

                <div className="mt-8 flex justify-center mb-15">
                  <button className="px-6 py-3 text-white font-semibold rounded-full transition-all bg-gradient-to-r from-[#0B3E27] to-[#047A43] shadow-[0_4px_12px_-2px_rgba(4,122,67,0.5)] hover:shadow-[0_6px_16px_-2px_rgba(4,122,67,0.7)]">
                    Mehr über B2B-Vertrieb erfahren
                  </button>
                </div>
              </div>
            ),
          },
          {
            title: "Neukundengewinnung",
            value: "b2c",
            content: (
              <div className="bg-gradient-to-br from-[#0B3E27] to-[#0B5934] p-8 rounded-[60px] shadow-lg justify-center">
                <div className="text-center text-white mt-12 mb-3">Icon hier</div>
                <h3 className="text-[42px] font-bold mb-6 text-[#fff] text-center">Neukundengewinnung<br /> und Lead Generation</h3>
                
                  <div>
                    <p className="text-[#fff] mb-12 leading-relaxed text-[17px] text-center max-w-150 mx-auto">
                    Wir bringen Ihr Produkt direkt zu den relevanten Kunden und übernehmen den gesamten Akquiseprozess im Door-to-Door Bereich. Mit gezielter Ansprache und bewährten Verkaufstechniken überzeugen wir potenzielle Kunden und generieren qualifizierte Abschlüsse für Ihr Unternehmen.
                    </p>
                  </div>

                <div className="mt-8 flex justify-center mb-15">
                  <button className="px-6 py-3 text-white font-semibold rounded-full transition-all bg-gradient-to-r from-[#0B3E27] to-[#047A43] shadow-[0_4px_12px_-2px_rgba(4,122,67,0.5)] hover:shadow-[0_6px_16px_-2px_rgba(4,122,67,0.7)]">
                    Mehr über B2B-Vertrieb erfahren
                  </button>
                </div>
              </div>
            ),
          },
          {
            title: "Vertriebsprozesse",
            value: "online",
            content: (
              <div className="bg-gradient-to-br from-[#0B3E27] to-[#0B5934] p-8 rounded-[60px] shadow-lg justify-center">
                <div className="text-center text-white mt-12 mb-3">Icon hier</div>
                <h3 className="text-[42px] font-bold mb-6 text-[#fff] text-center">Vertriebsprozesse<br />und Strategien</h3>
                
                  <div>
                    <p className="text-[#fff] mb-12 leading-relaxed text-[17px] text-center max-w-150 mx-auto">
                    Wir entwickeln passgenaue Vertriebsprozesse und maßgeschneiderte Strategien für Ihre Produkte im Energiesektor. Von der ersten Kundenansprache bis zum erfolgreichen Abschluss implementieren wir durchdachte Verkaufsabläufe und setzen sie mit unserem erfahrenen Team direkt im Door-to-Door Bereich um.
                    </p>
                  </div>

                <div className="mt-8 flex justify-center mb-15">
                  <button className="px-6 py-3 text-white font-semibold rounded-full transition-all bg-gradient-to-r from-[#0B3E27] to-[#047A43] shadow-[0_4px_12px_-2px_rgba(4,122,67,0.5)] hover:shadow-[0_6px_16px_-2px_rgba(4,122,67,0.7)]">
                    Mehr über B2B-Vertrieb erfahren
                  </button>
                </div>
              </div>
            ),
          },
          
        ]}
      />
    </div>
  </div>
</section>

{/*Für Unternehmen Benefits*/}
<section className="pt-14 pb-16 bg-background w-full">
  {/* Width-controlled container - adjust the max-w-[1200px] or w-[90%] value to control width */}
  <div className="mx-auto w-[100%] max-w-[1200px]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* Left column - Image with reduced height */}
      <div className="relative h-80 md:h-[320px] lg:h-[360px] xl:h-[400px] max-h-[450px] rounded-3xl overflow-hidden">
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
      <div className="flex flex-col ml-[-20px] items-start">
        <span className="mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[16px] font-[600] rounded-[99px] px-4 py-1
">DER PERFEKTE PARTNER</span>
        <h2 className="headr mb-6">Projekterfolg -<br /><span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">verlässlich & stressfrei</span></h2>
        
        {/* Benefits with checkmarks */}
        <div className="space-y-5 mb-6">
        <div className="flex items-start gap-3 mb-[10px]">
  {/* New container with gradient background, white 10px border, and a white checkmark inside */}
  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
  <p className="text-[18px] w-160 max-w-220 font-[600] text-[#000]/80">
    Flexibler, skalierbarer Außendienst - ohne eigene Ressourcenbindung
  </p>
</div>

<div className="flex items-start gap-3 mb-[10px]">
  {/* New container with gradient background, white 10px border, and a white checkmark inside */}
  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
  <p className="text-[18px] w-160 max-w-220 font-[600] text-[#000]/80">
  Verlässliche Steigerung Ihrer Verkaufszahlen
  </p>
</div>

<div className="flex items-start gap-3 mb-[10px]">
  {/* New container with gradient background, white 10px border, and a white checkmark inside */}
  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
  <p className="text-[18px] w-160 max-w-220 font-[600] text-[#000]/80">
  Schnell und ohne großen Aufwand erste Erfolge sehen
  </p>
</div>

<div className="flex items-start gap-3 mb-[10px]">
  {/* New container with gradient background, white 10px border, and a white checkmark inside */}
  <div
    className="flex items-center justify-center rounded-[8px]"
    style={{
      width: "25px",
      height: "25px",
      background: "linear-gradient(to bottom, #4b4b4b, #141414)",
      border: "2.5px  #0C462B",
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="#ffffff">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
  </div>
  <p className="text-[18px] w-160 max-w-220 font-[600] text-[#000]/80">
 Bewährte Verkaufsstrategien für maximale Abschlussraten
  </p>
</div>

        </div>

        {/* Green gradient CTA button */}
        <Button variant="default" className="self-start text-[22px] rounded-[99px] pb-3">
                  Beratungsgespräch vereinbaren
                </Button>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 bg-background w-full">
  <div className="container mx-auto">
    {/* Mission Statement */}
    <div className="max-w-4xl mx-auto text-center mb-7">
<div className="mt-[-20px] flex justify-center mb-1">
  <div className="inline-flex items-center g-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
       <Image 
         src="/Green Star.svg" 
         alt="Green Star" 
         width={22}
         height={22}
         className="mr-2"
       />
    <p className="text-center font-medium text-primary mb-[2.25px]">
      Als Vertriebler bei Sellwell
    </p>
  </div>
</div>
</div>
    <h2 className="headr text-center mb-6">Erfolge des Teams</h2>
    <AnimatedTestimonials 
      testimonials={[
        {
          quote: "Seit unserer Zusammenarbeit mit Sell Well Consulting haben wir nicht nur mehr Kunden, sondern auch deutlich bessere Kundenbindung erreicht.",
          name: "Chris Marquardt",
          designation: "VERTRIEBSBERATER",
          src: "/Chris-1x1.png"
        },
        {
          quote: "Sell Well Consulting hat unseren Vertrieb komplett transformiert. Innerhalb von 3 Monaten konnten wir unsere Abschlussrate um 35% steigern.",
          name: "Marco Sandrisser",
          designation: "TEAMLEITER",
          src: "/Marco-1x1.png"
        },
        {
          quote: "Die strategische Beratung war genau das, was wir brauchten. Professionell, zielgerichtet und mit messbaren Ergebnissen. Absolut empfehlenswert!",
          name: "Stefan Sonderholzer",
          designation: "AUSBILDER & VERTRIEBSBERATER",
          src: "/Stefan-1x1.png"
        }
      ]}
      autoplay={true}
    />
  </div>
</section>

{/*Offene Stellen */}
<Stellen />

  <section className="pt-20">
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
    {/* Mission Statement */}
    <div className="max-w-4xl mx-auto text-center mb-7">
<div className="mt-[-20px] flex justify-center mb-1">
  <div className="inline-flex items-center g-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
       <Image 
         src="/Green Star.svg" 
         alt="Green Star" 
         width={22}
         height={22}
         className="mr-2"
       />
    <p className="text-center font-medium text-primary mb-[2.25px]">
      Das sagen unsere Mitarbeiter
    </p>
  </div>
  </div>
  </div>
      <h1 className="inter700 tracking-[-1.6px] text-[55px] text-[#000000]" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        Einblicke aus <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">dem Team</span>
      </h1>
      <YouTubeGrid videoIds={videoIds} borderRadius="8px" gap="40px" />
    </div>
    </section>


<section className="py-5 lg:py-5 relative overflow-clip">
      {/* Background gradient overlay */}
      <div className="bg-gradient-to-t absolute from-[#fff] to-[#fff] inset-0 w-full h-full pointer-events-none"></div>
      <div className="container relative">
            {/* Mission Statement */}
    <div className="max-w-4xl mt-30 mx-auto text-center mb-0">
<div className="mt-[-20px] flex justify-center mb-1">
  <div className="inline-flex items-center g-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[14px] px-4 py-2 border-[1.7px] border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.25)]">
       <Image 
         src="/Green Star.svg" 
         alt="Green Star" 
         width={22}
         height={22}
         className="mr-2"
       />
    <p className="text-center font-medium text-primary">
      Das Sellwell Team
    </p>
  </div>
  </div>
  </div>
        {/* Heading */}
        <div className="richtext prose-h2:text-white mb-3 lg:mb-3">
          <h2 className="text-center inter700 text-[55px] text-black tracking-[-1.5px] pt-7 mb-15 leading-[1.2]">Echter Vertrieb.<br /><span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">Echte Ergebnisse.</span></h2>
        </div>
        {/* Slider */}
        <div className="min-h-[50rem] relative">
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
  <div>Sellwell auf Instagram</div>
</section>

{/*Bilder Schleife*/}
<Imgslider />

{/*4 CTA Kasten*/}
<FeatureGrid />

</main>
      
      {/* Footer spans full width */}
      <Footer />
    </div>
  );
}