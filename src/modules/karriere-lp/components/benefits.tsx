"use client"

import { useRef, useEffect, useState } from "react"
import Button from "@/modules/karriere-lp/components/button"
import Subhead from "@/modules/karriere-lp/components/subhead"
import Image from "next/image"

export default function SellwellBenefits() {
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
      className={`sellwell-section-alt transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container">
        <Subhead className="text-center mx-auto">Deine Vorteile bei Sellwell</Subhead>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Grenzenloses Wachstum beginnt hier</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefit 1 */}
          <div className="sellwell-benefit-container-alt-2">
            <div className="mb-4">
              <Image 
              src="/shx-icon1.svg"
              alt="icon"
              width={50}
              height={50}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Endlose Verdienstmöglichkeiten</h3>
            <p className="text-gray-600">
              Bei uns ist dein Gehalt so gut wie deine Leistung. Unsere Top-Vertriebler erzielen regelmäßig hohe 4- bis
              5-stellige Monatsgehälter.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="sellwell-benefit-container-alt">
            <div className="mb-4">
            <Image 
              src="/shx-icon2.svg"
              alt="icon"
              width={100}
              height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Individuelle Unterstützung, von 0 auf</h3>
            <p className="text-gray-600">
              Auch ohne Vorkenntnisse bringen wir dich auf Erfolgskurs. Unser bewährtes System und persönliches Coaching
              machen dich zum Vertriebs-Profi.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="sellwell-benefit-container-alt-3">
            <div className="mb-4">
            <Image 
              src="/shx-icon3.svg"
              alt="icon"
              width={25}
              height={25}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Ambitioniertes & spaßiges Umfeld</h3>
            <p className="text-gray-600">
              Werde Teil eines jungen, dynamischen Teams mit flachen Hierarchien. Bei uns wird hart gearbeitet, aber
              auch der Spaß kommt nicht zu kurz.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#formular"><Button>JETZT SCHNELL BEWERBEN</Button></a>
          <p className="text-sm text-gray-500 mt-2">Ohne Lebenslauf und Anschreiben</p>
        </div>
      </div>
    </section>
  )
}
