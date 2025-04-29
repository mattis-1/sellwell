"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Formular from "./formular"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section bg-white flex flex-col items-center min-h-screen transition-all duration-1000 p-0 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Benefits Banner with darker colors and border */}
      <div className="w-screen py-3 bg-gradient-to-r from-[#7CF2A5] to-[#C8F9D7] text-white overflow-hidden border-b-2 border-[#5AC27F]">
        <div className="sellwell-marquee">
          <div className="sellwell-marquee-content">
            {allBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center mx-4">
                <span className="font-medium">{benefit}</span>
                <div className="mx-2 text-white">
                  <Check className="w-5 h-5 stroke-[3] text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto px-4"
      >
        {/* Logo with subtle animation */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-8 mb-4"
        >
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
        </motion.div>

        {/* Headline with gradient removed */}
        <motion.h1 
          variants={itemVariants}
          className="font-montserrat text-3xl md:text-4xl lg:text-5xl text-center tracking-[-1px] font-[600] max-w-4xl mx-auto px-4 mb-8 leading-tight"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Entfalte dein volles Potenzial</span>
          </span> als Vertriebler im Strom- & Gasvertrieb
        </motion.h1>

        {/* Container specifically for video with full width */}
        <div className="w-full mx-auto mb-12">
          {/* Vimeo Video - larger with thicker border */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-[100%] mx-auto"
          >
            <div className="video-wrapper p-1.5 rounded-2xl" style={{ border: '3px solid #246551' }}>
              <div className="video-container relative">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/1079393532?h=ae44b49c5b&color=246551&title=0&byline=0&portrait=0&dnt=1"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Sellwell Consulting Promotional Video"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Application Form - adjusted width to match new layout */}
        <motion.div 
          variants={itemVariants}
          id="formular" 
          className="w-full max-w-[90%] mx-auto mb-16"
        >
          <div className="w-screen px-5">
          <Formular />
          </div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        .video-container {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .video-wrapper {
          background-color: transparent;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        /* Enhanced marquee animation */
        .sellwell-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .sellwell-marquee-content {
          display: flex;
          animation: marquee 35s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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