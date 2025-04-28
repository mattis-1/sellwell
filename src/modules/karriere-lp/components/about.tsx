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
      <div className="sellwell-container max-w-5xl mx-auto">
        {/* Main gradient container */}
        <div className="sellwell-about-container">
          {/* Headline */}
          <h2 className="font-inter text-[30px] font-semibold tracking-[-0.75px] leading-[35px] text-[rgb(17,17,17)] mb-6 text-center">
            Was ist Sellwell Consulting?
          </h2>

          {/* Text content */}
          <div className="mb-8 text-center">
            <p className="font-inter text-[14px] font-normal tracking-[-0.2px] leading-[20px] text-[#111111] mb-4">
              Mit der SellWell-Consulting GmbH ist es einerseits unser Ziel, Verbrauchern dabei zu helfen, drastisch bei
              ihren Strom- und Gas-Rechnungen zu sparen, und andererseits unseren Mitarbeitern an diesem sehr lukrativen
              Markt teilhaben zu lassen.
            </p>
            <p className="font-inter text-[14px] font-normal tracking-[-0.2px] leading-[20px] text-[#111111]">
              Denn als Vertriebler ist dein Gehalt so gut wie deine Leistung. Wir haben uns vor mehreren Jahren selbst
              durchkämpfen müssen. Mittlerweile geben wir unseren festangestellten Mitarbeitern ein funktionierendes
              System an die Hand, mit dem sie 100-200 Verträge im Monat abschließen und sich dadurch ein
              leistungsgerechtes Gehalt erarbeiten können.
            </p>
          </div>

          {/* Stat containers */}
          <div className="space-y-4 mb-8 w-full">
            {/* Stat container 1 */}
            <div className="bg-white rounded-[999px] p-4 flex items-center w-full">
              <div className="flex-shrink-0 mr-4">
                <StarIcon />
              </div>
              <div>
                <div className="font-inter text-[18px] font-bold text-[#111111]">
                  10.000+ glückliche Kunden
                </div>
                <div className="font-inter text-[12px] text-gray-600">
                  Zufriedene Kunden in ganz Deutschland
                </div>
              </div>
            </div>

            {/* Stat container 2 */}
            <div className="bg-white rounded-[999px] p-4 flex items-center w-full">
              <div className="flex-shrink-0 mr-4">
                <StarIcon />
              </div>
              <div>
                <div className="font-inter text-[18px] font-bold text-[#111111]">
                  30 Jahre Erfahrung
                </div>
                <div className="font-inter text-[12px] text-gray-600">
                  Geballte Expertise im Vertrieb
                </div>
              </div>
            </div>
          </div>

          {/* Image frame */}
          <div className="bg-white p-3 rounded-2xl shadow-sm w-full max-w-xl mx-auto">
            <Image
              src="/Unsere Mission 2.png"
              alt="Unsere Mission"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='48' fill='%23166534'%3EUnsere Mission%3C/text%3E%3C/svg%3E"
              }}
            />
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <a href="#formular">
              <Button>JETZT SCHNELL BEWERBEN</Button>
              <p className="text-sm text-gray-500 mt-2">Und Teil unseres Teams werden</p>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for containers */}
      <style jsx global>{`
        .sellwell-about-container {
          border-radius: 40px;
          align-content: flex-start;
          align-items: flex-start;
          background-clip: border-box;
          background-image: linear-gradient(132deg, rgba(235, 255, 225, 0.5) 0%, rgba(124, 242, 165, 0.5) 100%);
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
          align-items: center;
          text-align: center;
        }
      `}</style>
    </section>
  )
}

// Star Icon Component
const StarIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
      fill="#78C07B" 
      stroke="#78C07B" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);