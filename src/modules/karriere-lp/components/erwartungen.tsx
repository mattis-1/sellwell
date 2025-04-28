"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Button from "@/modules/karriere-lp/components/button"

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div
    className="benefit-card relative overflow-hidden rounded-xl p-7 bg-white backdrop-blur-sm border border-gray-100 transition-all text-center"
  >
    <div className="absolute inset-0 -z-10">
    </div>
    <div className="mb-4 flex justify-center">
      <div 
        className="w-16 h-16 rounded-[15px]"
        style={{ 
          background: "linear-gradient(to right top, #EBFFE1, #7BF3A4)" 
        }}
      />
      <Image 
      src={icon}
      alt="icon"
      height={75}
      width={75}
      />
    </div>
    <h3 className="text-[25px] font-inter font-semibold mb-3 tracking-[-0.75px]">{title}</h3>
    <p className="text-[rgb(115, 115, 115)] font-[400] leading-relaxed leading-[22px] tracking-[-0.28px]">
      {description}
    </p>
       
  </div>
);

export default function SellwellExpectations() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after activation to improve performance
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
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

  // Benefits data
  const benefits = [
    {
      icon: "/lp-icon1.svg",
      title: "Regelmäßige Weiterbildungen",
      description: "Wir investieren in deine Entwicklung mit regelmäßigen Schulungen, Workshops und individuellen Coachings."
    },
    {
      icon: "/lp-icon2.svg",
      title: "Flexible Arbeitszeiten",
      description: "Bei uns genießt du die Freiheit, deine Arbeitszeit flexibel zu gestalten und eigenverantwortlich zu arbeiten."
    },
    {
      icon: "/lp-icon3.svg",
      title: "Schneller Karriereaufstieg",
      description: "Zeige Leistung und steige schnell auf. Bei uns kannst du in kurzer Zeit Führungsverantwortung übernehmen."
    }
  ]

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section-alt bg-[#F9F9F9] relative overflow-hidden py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="sellwell-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[34px] leading-[40px] tracking-[-0.75px] text-center mb-2 font-inter font-[600]">Was dich bei<br />Sellwell erwartet</h2>
          <div className="jajabing text-center">Finde heraus, was Sellwell zum Nummer 1 D2D Vertrieb in Bayern macht</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16 relative z-10">
          <div>
            <a href="#formular" className="inline-block">
              <Button>Jetzt schnell bewerben</Button>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-2">Ohne Lebenslauf und Anschreiben</p>
        </div>
      </div>

      {/* Styles with box shadows removed */}
      <style jsx global>{`
        .benefit-card {
          height: 100%;
          transition: all 0.3s ease;
          background-color: #fff;
          border-radius: 20px;
        }
      `}</style>
    </section>
  )
}