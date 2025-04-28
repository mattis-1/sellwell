"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Formular from "./formular"
import { motion, AnimatePresence } from "framer-motion"

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
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

  // Handle video play click
  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

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
      {/* Benefits Banner with smoother animation */}
      <div className="w-screen py-3 bg-gradient-to-r from-[#205B49] via-[#2E8166] to-[#205B49] text-white overflow-hidden">
        <div className="sellwell-marquee">
          <div className="sellwell-marquee-content">
            {allBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center mx-4">
                <span className="font-medium">{benefit}</span>
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

        {/* Headline with enhanced typography */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold max-w-4xl mx-auto px-4 mb-8 leading-tight"
        >
          <span className="relative inline-block">
            <span className="relative z-10">Entfalte dein volles Potenzial</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#246551]/10 -z-0 transform -rotate-1"></span>
          </span>{" "}
          als Vertriebler im Strom- & Gasvertrieb
        </motion.h1>

        {/* Vimeo Video with normal thumbnail */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto px-4 mb-12"
        >
          <div className="video-container relative">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                {!isVideoPlaying ? (
                  // Video Thumbnail
                  <motion.div 
                    key="thumbnail"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full relative cursor-pointer"
                    onClick={handlePlayVideo}
                  >
                    {/* Thumbnail image with play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-20 h-20 rounded-full bg-black/40 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    
                    {/* This would ideally be the actual video thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
                    
                    {/* You can replace this with an actual thumbnail image */}
                    <Image 
                      src="/vimeo-thumbnail.jpg" 
                      alt="Video Thumbnail"
                      layout="fill"
                      objectFit="cover"
                      onError={(e) => {
                        // Fallback gradient if image fails to load
                        const target = e.target as HTMLElement;
                        if (target.parentElement) {
                          target.parentElement.style.background = "linear-gradient(135deg, #246551, #348b6e)";
                        }
                      }}
                    />
                  </motion.div>
                ) : (
                  // Actual Vimeo Embed
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full"
                  >
                    <iframe
                      src="https://player.vimeo.com/video/1079393532?h=ae44b49c5b&color=246551&title=0&byline=0&portrait=0&autoplay=1"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Sellwell Consulting Promotional Video"
                    ></iframe>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Application Form - Wider without border */}
        <motion.div 
          variants={itemVariants}
          id="formular" 
          className="w-full max-w-3xl mx-auto px-4 mb-16"
        >
          <Formular />
        </motion.div>
      </motion.div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        .video-container {
          position: relative;
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
      `}</style>
    </section>
  )
}