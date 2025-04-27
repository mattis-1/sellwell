"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import ApplicationForm from "./formular"

const benefits = [
  "Endlose Möglichkeiten",
  "Für Quereinsteiger geeignet",
  "Ambitioniertes Team",
  "Flexible Arbeitszeiten",
  "Leistungsorientierte Bezahlung",
  "Sehr gute Provision",
  "Schnelle Aufstiegschancen",
  "Konstante Weiterbildung",
  "Individuelle Unterstützung",
]

export default function SellwellHero() {
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

  // Duplicate benefits for infinite scroll effect
  const allBenefits = [...benefits, ...benefits]

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section bg-white flex flex-col items-center min-h-screen transition-opacity duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Benefits Banner */}
      <div className="w-full bg-green-700 text-white overflow-hidden">
        <div className="sellwell-marquee">
          <div className="sellwell-marquee-content">
            {allBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center mx-4">
                <span>{benefit}</span>
                <div className="mx-3 w-2 h-2 bg-green-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-8 mb-4">
        <Image
          src="/sellwell logo.png"
          alt="Sellwell Consulting Logo"
          width={200}
          height={80}
          className="object-contain"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement
            target.onerror = null
            target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80' viewBox='0 0 200 80'%3E%3Crect width='200' height='80' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='16' fill='%23166534'%3ESellwell Consulting%3C/text%3E%3C/svg%3E"
          }}
        />
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold max-w-4xl mx-auto px-4 mb-8">
        Entfalte dein volles Potenzial als Vertriebler im Strom- und Gasvertrieb
      </h1>

      {/* VSL Container */}
      <div className="w-full max-w-3xl mx-auto px-4 mb-12 border-4 border-green-700 rounded-lg p-4">
        <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
          {/* Replace with actual VSL embed */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p className="text-center">Video Sales Letter</p>
            {/* Fallback image or video player would go here */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="w-full max-w-2xl mx-auto px-4 mb-16">
        <ApplicationForm />
      </div>
    </section>
  )
}
