"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"

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
      className={`py-20 md:py-32 bg-gradient-to-r from-green-800 to-green-600 relative transition-all duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="sellwell-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bewirb dich noch heute auf deinen neuen Traumjob im Strom- und Gasvertrieb
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Klicke jetzt hier unten auf den Button und bewirb dich in unter 5 Minuten ohne Anschreiben und ohne
            Lebenslauf
          </p>
          <Link
            href="#sellwell-application-form"
            className="sellwell-btn-primary bg-white text-green-700 hover:bg-gray-100 inline-block"
          >
            Jetzt bewerben
          </Link>
        </div>
      </div>
    </section>
  )
}
