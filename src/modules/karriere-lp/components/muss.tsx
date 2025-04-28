"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Button from "@/modules/karriere-lp/components/button"

const requirements = [
  "Du kommunizierst gerne mit anderen Menschen",
  "Du bist bereit, richtig Gas zu geben und viel Geld zu verdienen",
  "Du bist vor Ort in München oder Umland",
  "Du bist jung, ambitioniert mit einer Vision und willst mehr als den normalen 9/5",
]

export default function SellwellRequirements() {
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
      <div className="sellwell-container">
        <h2 className="text-[30px] md:text-[35px] font-bold text-left mt-5 mb-12">
          <span className="special-text leading-[1.3]">Wir suchen dich</span>als Vertriebler im Außendienst (m/w/d)
        </h2>
        <div className="text-[19px] md:text-[22px] font-bold text-left mt-2 mb-2">Bewirb dich wenn du:</div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d2f4ff] flex items-center justify-center mr-4">
                  <Image
                  src="/check-lp2.svg"
                  alt="check"
                  width={25}
                  height={25}
                  />
                </div>
                <p className="text-[19px] pt-1">{requirement}</p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            
            <a href="#formular"><Button>JETZT DURCHSTARTEN</Button>
          <p className="text-sm text-gray-500 mt-2">In unter 60 Sekunden bewerben</p></a>
          </div>
        </div>
      </div>
    </section>
  )
}
