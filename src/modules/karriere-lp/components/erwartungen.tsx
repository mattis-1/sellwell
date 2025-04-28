"use client"

import { useRef, useEffect, useState } from "react"
import Button from "@/modules/karriere-lp/components/button"
import Image from "next/image"


export default function SellwellExpectations() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Was dich erwartet</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Expectation 1 */}
          <div className="sellwell-benefit-container">
            <div className="mb-4">
            <Image
              src="/shx-icon4.webp"
              alt="Icon"
              width={100}
              height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Regelmäßige Weiterbildungen</h3>
            <p className="text-gray-600">
              Wir investieren in deine Entwicklung mit regelmäßigen Schulungen, Workshops und individuellen Coachings.
            </p>
          </div>

          {/* Expectation 2 */}
          <div className="sellwell-benefit-container">
            <div className="mb-4">
              <Image
              src="/shx-icon5.webp"
              alt="Icon"
              width={100}
              height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Arbeitszeiten und Freiheit</h3>
            <p className="text-gray-600">
              Bei uns genießt du die Freiheit, deine Arbeitszeit flexibel zu gestalten und eigenverantwortlich zu
              arbeiten.
            </p>
          </div>

          {/* Expectation 3 */}
          <div className="sellwell-benefit-container">
            <div className="mb-4">
            <Image
              src="/shx-icon6.webp"
              alt="Icon"
              width={100}
              height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Schneller Karriereaufstieg</h3>
            <p className="text-gray-600">
              Zeige Leistung und steige schnell auf. Bei uns kannst du in kurzer Zeit Führungsverantwortung übernehmen.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          
           <a href="#formular"><Button>JETZT SCHNELL BEWERBEN</Button>
          <p className="text-sm text-gray-500 mt-2">Ohne Lebenslauf und Anschreiben</p></a>
        </div>
      </div>
    </section>
  )
}
