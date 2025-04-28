"use client"

import { useRef, useEffect, useState } from "react"
import Button from "@/modules/karriere-lp/components/button"


export default function SellwellCtaSection() {
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
      className={`py-20 md:py-32 relative transition-all duration-1000 bg-cover bg-center bg-no-repeat ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
      style={{ 
        backgroundImage: "url('/ABOUT1.png')" 
      }}
    >
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="sellwell-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
           Bewirb dich noch heute für deinen Traumjob im Strom- und Gasvertrieb
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Klicke jetzt hier unten auf den Button und bewirb dich in unter 60 Sekunden ohne Anschreiben und ohne
            Lebenslauf
          </p>
          <a href="#formular"><Button>JETZT BEWERBEN</Button></a>
        </div>
      </div>
    </section>
  )
}