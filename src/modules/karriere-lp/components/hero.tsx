"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Formular from "./formular"

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
      className={`sellwell-section bg-white flex flex-col items-center min-h-screen transition-opacity duration-1000 p-0 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Benefits Banner - Moved to top with full width */}
      <div className="w-screen py-3 bg-gradient-to-r from-[#184639] via-[#2E8166] to-[#184639] text-white overflow-hidden">
        <div className="sellwell-marquee">
          <div className="sellwell-marquee-content">
            {allBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center mx-4">
                <span>{benefit}</span>
                <Image 
                src="/check-lp.svg"
                alt="check"
                width={35}
                height={35}
                className="pr-2.5 pl-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="mt-8 mb-4">
        <Image
          src="/sellwell-logo-black.svg"
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
        Entfalte dein volles Potenzial als Vertriebler im Strom- & Gasvertrieb
      </h1>

      {/* Vimeo Video Placeholder with styled border and glow */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-12">
        <div className="video-container relative">
          {/* Gradient border and glow effect */}
          <div className="video-border-gradient rounded-[30px] overflow-hidden">
            {/* Video placeholder */}
            <div className="aspect-video bg-black rounded-[28px] flex items-center justify-center relative overflow-hidden">
              {/* Placeholder content */}
              <div className="text-white text-center z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer mx-auto mb-4">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-lg font-medium">Vimeo Video wird hier eingebettet</p>
              </div>
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="formular" className="w-full max-w-2xl mx-auto px-4 mb-16">
        <Formular />
      </div>

      {/* Custom CSS for the video border and glow effects */}
      <style jsx>{`
        .video-container {
          position: relative;
          filter: drop-shadow(0 0 20px rgba(19, 149, 192, 0.8));
        }
        
        .video-border-gradient {
          position: relative;
          padding: 2px;
          background: linear-gradient(90deg, #1395C0 0%, #62BED9 50%, #1395C0 100%);
          border-radius: 30px;
        }
        
        .video-border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 30px;
          padding: 2px;
          background: linear-gradient(90deg, #1395C0 0%, #62BED9 50%, #1395C0 100%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>
    </section>
  )
}