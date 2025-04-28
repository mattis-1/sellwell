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
      className={`sellwell-section-alt relative overflow-hidden transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container relative z-10">
        <div className="flex justify-center mb-3">
          <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 inline-block">
            <span className="font-light text-sm tracking-wide">DEINE VORTEILE BEI SELLWELL</span>
          </div>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">Was dich erwartet</h2>

        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] bg-[#22d3ee] rounded-full filter blur-3xl opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Expectation 1 */}
          <div className="sellwell-benefit-container relative overflow-hidden rounded-lg p-6">
            <Image
              src="/grid-shx.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="-z-10 pointer-events-none select-none"
            />
            <div className="mb-4">
              <Image
                src="/shx-icon4.webp"
                alt="Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Regelmäßige Weiterbildungen</h3>
            <p className="text-gray-600">
              Wir investieren in deine Entwicklung mit regelmäßigen Schulungen, Workshops und individuellen Coachings.
            </p>
          </div>

          {/* Expectation 2 */}
          <div className="sellwell-benefit-container relative overflow-hidden rounded-lg p-6">
            <Image
              src="/grid-shx.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="-z-10 pointer-events-none select-none"
            />
            <div className="mb-4">
              <Image
                src="/shx-icon5.webp"
                alt="Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Flexible Arbeitszeiten und Freiheit</h3>
            <p className="text-gray-600">
              Bei uns genießt du die Freiheit, deine Arbeitszeit flexibel zu gestalten und eigenverantwortlich zu
              arbeiten.
            </p>
          </div>

          {/* Expectation 3 */}
          <div className="sellwell-benefit-container relative overflow-hidden rounded-lg p-6">
            <Image
              src="/grid-shx.svg"
              alt=""
              fill
              style={{ objectFit: "contain" }}
              className="-z-10 pointer-events-none select-none"
            />
            <div className="mb-4">
              <Image
                src="/shx-icon6.webp"
                alt="Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Schneller Karriereaufstieg</h3>
            <p className="text-gray-600">
              Zeige Leistung und steige schnell auf. Bei uns kannst du in kurzer Zeit Führungsverantwortung übernehmen.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 relative z-10">
          <a href="#formular">
            <Button>JETZT SCHNELL BEWERBEN</Button>
            <p className="text-sm text-gray-500 mt-2">Ohne Lebenslauf und Anschreiben</p>
          </a>
        </div>
      </div>
    </section>
  )
}