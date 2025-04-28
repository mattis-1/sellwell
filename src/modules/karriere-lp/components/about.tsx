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
      className={`sellwell-section-alt transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 relative">
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

          <h2 className="text-3xl md:text-4xl font-bold mb-6">Was ist Sellwell Consulting?</h2>

          <div className="space-y-4 text-lg">
            <p>
              Mit der SellWell-Consulting GmbH ist es einerseits unser Ziel, Verbrauchern dabei zu helfen, drastisch bei
              ihren Strom- und Gas-Rechnungen zu sparen, und andererseits unseren Mitarbeitern an diesem sehr lukrativen
              Markt teilhaben zu lassen.
            </p>
            <p>
              Denn als Vertriebler ist dein Gehalt so gut wie deine Leistung. Wir haben uns vor mehreren Jahren selbst
              durchkämpfen müssen. Mittlerweile geben wir unseren festangestellten Mitarbeitern ein funktionierendes
              System an die Hand, mit dem sie 100-200 Verträge im Monat abschließen und sich dadurch ein
              leistungsgerechtes Gehalt erarbeiten können.
            </p>
          </div>

          <div className="text-center mt-12">
          <a href="#formular">  <Button>JETZT TEIL UNSERES TEAMS WERDEN</Button> 
            <p className="text-sm text-gray-500 mt-2">Bewerbung in unter 60 Sekunden</p></a>
          </div>
        </div>
      </div>
    </section>
  )
}
