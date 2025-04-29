"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Button from "@/modules/karriere-lp/components/button"

export default function SellwellAboutUs() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section bg-white transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container max-w-5xl mx-auto relative pb-16">
        {/* Image moved above the container */}
        <div className="rounded-[30px] w-[100%] max-w-[100%] mx-auto mb-8">
          <Image
            src="/Unsere Mission 2.png"
            alt="Unsere Mission"
            width={1200}
            height={600}
            className="w-full h-auto rounded-[30px] object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='48' fill='%23166534'%3EUnsere Mission%3C/text%3E%3C/svg%3E"
            }}
          />
        </div>

        {/* Main gradient container */}
        <div className="sellwell-about-container">
          {/* Headline */}
          <h2 className="font-inter text-[30px] font-[600] tracking-[-0.75px] leading-[35px] text-[rgb(17,17,17)] mb-6 text-left w-full">
            Was ist Sellwell Consulting?
          </h2>

          {/* Text content - shortened and improved */}
          <div className="mb-8 text-left w-full">
            <p className="font-inter text-[16px] font-normal tracking-[-0.2px] leading-[22px] text-[#111111] mb-4">
              Bei SellWell-Consulting verbinden wir zwei wichtige Ziele: Verbrauchern zu helfen, ihre Energiekosten deutlich zu senken, und unseren Mitarbeitern attraktive Verdienstmöglichkeiten in diesem lukrativen Markt zu bieten.
            </p>
            <p className="font-inter text-[16px] font-normal tracking-[-0.2px] leading-[22px] text-[#111111]">
              Als Vertriebler ist dein Gehalt direkt an deine Leistung gekoppelt. Wir stellen dir ein bewährtes System zur Verfügung, mit dem du 100-200 Verträge monatlich abschließen und dir ein überdurchschnittliches Einkommen sichern kannst.
            </p>
          </div>

          {/* Stat containers - moved below text and redesigned */}
          <div className="space-y-4 mb-8 w-full">
            {/* Stat container 1 */}
            <div className="bg-white rounded-[20px] p-4 flex items-center w-full shadow-sm">
              <div className="flex-shrink-0 mr-4">
                <Image 
                 src="/greenstar.svg" 
                 alt="icon"
                 width={50}
                 height={50}
                />
              </div>
              <div>
                <div className="font-inter text-[24px] text-left font-[600] text-[#111111] tracking-[-0.5px]">
                  10.000+
                </div>
                <div className="font-inter tracking-[-0.3px] text-left text-[14px] text-[rgb(17, 17, 17)]">
                  Glückliche Kunden
                </div>
              </div>
            </div>

            {/* Stat container 2 */}
            <div className="bg-white rounded-[20px] p-4 flex items-center w-full shadow-sm">
              <div className="flex-shrink-0 mr-4">
              <Image 
                 src="/greenstar.svg" 
                 alt="icon"
                 width={50}
                 height={50}
                />
              </div>
              <div>
                <div className="font-inter text-[24px] text-left font-[600] text-[#111111] tracking-[-0.5px]">
                  30
                </div>
                <div className="font-inter tracking-[-0.3px] text-left text-[14px] text-[rgb(17, 17, 17)]">
                  Jahre Erfahrung
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button - positioned to hover over the container */}
        <div className="text-center absolute left-1/2 transform -translate-x-1/2 bottom-8">
          <a href="#formular">
            <button className="black-button">Jetzt bewerben</button>
            <p className="subbtnt mt-2">Und Teil des Teams werden</p>
          </a>
        </div>
      </div>

      {/* Custom CSS for containers */}
      <style jsx global>{`
        .sellwell-about-container {
          border-radius: 40px;
          align-content: flex-start;
          align-items: flex-start;
          background-clip: border-box;
          background-image: linear-gradient(119deg, rgba(235, 255, 225, 0.7) 0%, rgba(124, 242, 165, 0.7) 100%);
          background-position-x: 0%;
          background-position-y: 0%;
          background-repeat: repeat;
          background-size: auto;
          background-origin: padding-box;
          padding: 2.5rem;
          display: flex;
          border-width: 1px;
          border-color: rgb(124, 242, 165);
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-bottom: 4rem;
        }
        
        .black-button {
          background-color: #000;
          color: white;
          border-radius: 9999px;
          font-weight: 600;
          padding: 0.75rem 2rem;
          transition: all 0.3s ease;
          border: none;
          font-size: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .black-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        /* Ensuring the subbtnt style is consistently applied */
        .subbtnt {
          font-size: 14px;
          color: #111;
          font-weight: 600;
          letter-spacing: -0.3px;
        }
      `}</style>
    </section>
  )
}