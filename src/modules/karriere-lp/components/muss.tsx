"use client"

import { useRef, useEffect, useState } from "react"
import Button from "@/modules/karriere-lp/components/button"
import Image from "next/image"

const requirements = [
  {
    text: "Du bereit bist, richtig Gas zu geben und viel Geld zu verdienen",
  },
  {
    text: "Du gerne mit anderen Menschen kommunizierst",
  },
  {
    text: "Du vor Ort in München oder im Umland bist",
  },
  {
    text: "Du gutes Deutsch sprichst",
  },
  {
    text: "Du jung und ambitioniert bist, große Visionen hast und mehr als den normalen 9/5 willst",
  },
]

export default function SellwellRequirements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
      },
      { threshold: 0.1 }
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
      className={`sellwell-section bg-white py-12 md:py-16 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="sellwell-container-2 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-inter text-[28px] tracking-[-1.4px] leading-[37px] text-[rgb(17,17,17)] font-semibold mb-4">
            Wir suchen dich als Vertriebler im Außendienst (m/w/d)
          </h2>
          
          {/* Short paragraph instead of long ones */}
          <p className="font-inter text-[16px] max-w-2xl mx-auto tracking-[-0.2px] text-[rgb(17,17,17)] mb-6">
            Wir bieten dir einen zuverlässigen Weg, im Außendienst im Energie-Sektor erfolgreich zu werden. Unser bewährtes System ermöglicht dir, mit dem richtigen Einsatz ein überdurchschnittliches Einkommen zu erzielen.
          </p>
          
          <p className="font-inter text-[25px] font-semibold tracking-[-0.5px] text-[rgb(17,17,17)] mb-6">
            Bewirb dich wenn:
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <ul className="space-y-3">
            {requirements.map((requirement, index) => (
              <li 
                key={index} 
                className="flex items-start bg-white rounded-full py-2 px-4 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-[2px]">
                  {/* Green checkmark */}
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="rgb(124, 242, 165)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="font-inter text-[16px] font-normal tracking-[-0.3px] leading-[22px] text-[rgb(17,17,17)]">
                  {requirement.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-8">
            <a href="#formular">
              <Button>Jetzt durchstarten</Button>
              <p className="text-sm text-gray-500 mt-2">In unter 60 Sekunden bewerben</p>
            </a>
          </div>
        </div>

        {/* Full-width image container at the bottom */}
        <div className="sellwell-benefit-container-alt relative w-full h-[300px] overflow-hidden rounded-[33px] mt-12 mb-0 p-0">
          <Image
            src="/sellwellteam.png"
            alt="Sellwell Team"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="rounded-[33px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent"></div>
          <div className="absolute bottom-6 left-0 w-full text-center">
            <p className="text-white font-semibold text-xl mb-2">Werde Teil unseres Teams</p>
            <p className="text-white text-sm max-w-md mx-auto">Gemeinsam erfolgreich im Vertrieb</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for the glassmorphic container */}
      <style jsx global>{`
        .sellwell-benefit-container-alt {
          background-clip: border-box;
          background-image: linear-gradient(132deg, rgba(235, 255, 225, 0.5) 0%, rgba(124, 242, 165, 0.5) 100%);
          background-position-x: 0%;
          background-position-y: 0%;
          background-repeat: repeat;
          background-size: auto;
          background-origin: padding-box;
          border-width: 1px;
          border-color: rgb(124, 242, 165);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      `}</style>
    </section>
  )
}