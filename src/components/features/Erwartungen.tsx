"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div
    className="relative overflow-hidden rounded-[35px] py-9 p-7 bg-white backdrop-blur-sm transition-all text-center"
  >
    <div className="absolute inset-0 -z-10">
    </div>
    <div className="mb-4 flex justify-center">
      <div 
        className="w-16 h-16 rounded-[15px] flex items-center justify-center"
        style={{ 
          background: "linear-gradient(to bottom right, #EBFFE1, #7BF2A5)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
        }}
      >
        <Image 
          src={icon}
          alt="icon"
          height={45}
          width={45}
        />
      </div>
    </div>
    <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 mt-3 leading-tight ml-[10px]">{title}</h3>
    <p className="text-md md:text-lg text-gray-800 leading-[1.4] ml-[-5px] mb-3 ml-[10px]">
      {description}
    </p>
       
  </div>
);

export default function Erwartungen() {
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
      title: "Sehr flexible Arbeitszeiten",
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
        <h2 className="text-[36px] md:text-[45px] font-bold leading-[1.2] text-gray-900 dark:text-white">Was dich bei<br />Sellwell erwartet</h2>
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
            <Link href="/karriere" className="inline-block">
              <button className="sellwell-btn-primary flex flex-row gap-2 items-center">
                <div>Jetzt Bewerben</div>
                <div><ArrowRight className="h-5 w-5"/></div>
            </button>
            </Link>
          </div>
          <p className="subbtnt mt-2">Ohne Lebenslauf & Anschreiben</p>
        </div>
      </div>

      {/* Updated styles */}
      <style jsx global>{`
        .benefit-card {
          height: 100%;
          transition: all 0.3s ease;
          background-color: #fff;
          border-radius: 20px;
        }
        
        /* New CSS class for subbtnt text */
        .subbtnt {
          font-size: 14px;
          color: #111;
          font-weight: 600;
          letter-spacing: -0.3px;
        }
      `}</style>
    </section>
  )
}