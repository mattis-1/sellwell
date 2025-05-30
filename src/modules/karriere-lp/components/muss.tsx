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
        {/* Added image at the top of the section */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/WarumBei.png"
            alt="Warum bei Sellwell"
            width={800}
            height={400}
            className="rounded-[30px]"
          />
        </div>
        
        <div className="text-center mb-8">
          <h2 className="font-inter text-[32px] tracking-[-1.4px] leading-[40px] text-[rgb(17,17,17)] font-semibold mb-4">
            Wir suchen dich<br />als Vertriebler im Außendienst <span className="text-[24px]">(m/w/d)</span>
          </h2>
          
          <p className="font-inter text-[25px] font-semibold tracking-[-0.5px] text-[rgb(17,17,17)] mb-6">
            Bewirb dich wenn:
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <ul className="space-y-3">
            {requirements.map((requirement, index) => (
              <li 
                key={index} 
                className="flex items-start bg-white rounded-full py-1 px-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-[2px]">
                  {/* Green checkmark */}
                  <svg 
                    width="22" 
                    height="22" 
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
              <p className="subbtnt mt-2">In unter 60 Sekunden bewerben</p>
            </a>
          </div>
        </div>

        {/* Full-width image container at the bottom 
        <div className="sellwell-benefit-container-alt relative w-full h-[300px] overflow-hidden rounded-[33px] mt-12 mb-0 p-0">
          <Image
            src="/sellwellteam.png"
            alt="Sellwell Team"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="rounded-[33px]"
          />
         
        </div>*/}
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
        
        /* New CSS class for subbtnt text */
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