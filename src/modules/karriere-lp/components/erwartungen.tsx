"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Button from "@/modules/karriere-lp/components/button"

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

// Benefit card with proper typing and animations
const BenefitCard = ({ icon, title, description, index }: BenefitCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + (index * 0.1) 
    }}
    whileHover={{ 
      y: -8,
      transition: { duration: 0.2 } 
    }}
    className="benefit-card relative overflow-hidden rounded-xl p-7 bg-white backdrop-blur-sm shadow-lg border border-gray-100 transition-all"
  >
    <div className="absolute inset-0 -z-10">
      <Image
        src="/grid-shx.svg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
        className="pointer-events-none select-none opacity-80"
      />
    </div>
    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
      <Image
        src={icon}
        alt={title}
        width={60}
        height={60}
        className="drop-shadow-md"
      />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
    
    {/* Decorative accent */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#78C07B] to-[#23624F] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
  </motion.div>
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
      icon: "/shx-icon4.webp",
      title: "Regelmäßige Weiterbildungen",
      description: "Wir investieren in deine Entwicklung mit regelmäßigen Schulungen, Workshops und individuellen Coachings."
    },
    {
      icon: "/shx-icon5.webp",
      title: "Flexible Arbeitszeiten und Freiheit",
      description: "Bei uns genießt du die Freiheit, deine Arbeitszeit flexibel zu gestalten und eigenverantwortlich zu arbeiten."
    },
    {
      icon: "/shx-icon6.webp",
      title: "Schneller Karriereaufstieg",
      description: "Zeige Leistung und steige schnell auf. Bei uns kannst du in kurzer Zeit Führungsverantwortung übernehmen."
    }
  ]

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section-alt relative overflow-hidden py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Improved background effects */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#23624F] rounded-full filter blur-[100px] opacity-40" />
      </div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#78C07B] rounded-full filter blur-[120px] opacity-20 z-0" />

      <div className="sellwell-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-3">
            <div className="bg-[#78C07B]/20 text-[#388E3C] rounded-full px-5 py-1.5 inline-block">
              <span className="font-[500] text-sm tracking-wide uppercase">DEINE VORTEILE BEI SELLWELL</span>
            </div>
          </div>
          <h2 className="text-[40px] md:text-[46px] font-bold text-center mb-2">Was dich erwartet</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#78C07B] to-[#23624F] mx-auto rounded-full"></div>
        </motion.div>

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

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut", 
            delay: 0.6 
          }}
          className="text-center mt-16 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="#formular" className="inline-block">
              <Button>JETZT SCHNELL BEWERBEN</Button>
              <p className="text-sm text-gray-500 mt-2">Ohne Lebenslauf und Anschreiben</p>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Add some styles for group hover effects */}
      <style jsx global>{`
        .benefit-card {
          height: 100%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  )
}