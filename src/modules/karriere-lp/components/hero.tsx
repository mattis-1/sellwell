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

        {/* Vimeo Video with beautiful styling */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto px-4 mb-12"
        >
          <div className="video-container relative">
            {/* Gradient border and glow effect */}
            <div className="video-border-gradient rounded-[30px] overflow-hidden">
              <div className="aspect-video bg-gray-900 rounded-[28px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isVideoPlaying ? (
                    // Video Thumbnail and Play Button
                    <motion.div 
                      key="thumbnail"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                      
                      {/* Play button with pulse effect */}
                      <motion.button
                        onClick={handlePlayVideo}
                        className="play-button-wrapper z-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="play-button-outer">
                          <div className="play-button-inner">
                            <div className="play-button-icon"></div>
                          </div>
                        </div>
                        <div className="mt-4 text-white text-xl font-medium tracking-wide">Jetzt abspielen</div>
                      </motion.button>
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
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div 
          variants={itemVariants}
          id="formular" 
          className="w-full max-w-2xl mx-auto px-4 mb-16"
        >
          <div className="apply-now-banner text-center mb-8">
            <div className="text-xl md:text-2xl font-bold text-[#246551] mb-2">Bereit, durchzustarten?</div>
            <div className="text-gray-600">Fülle das Formular aus und wir melden uns innerhalb von 24h!</div>
          </div>
          <Formular />
        </motion.div>
      </motion.div>

      {/* Custom CSS for the video border and modern styling */}
      <style jsx>{`
        .video-container {
          position: relative;
          filter: drop-shadow(0 5px 25px rgba(36, 101, 81, 0.3));
          transition: all 0.3s ease;
        }
        
        .video-container:hover {
          filter: drop-shadow(0 8px 35px rgba(36, 101, 81, 0.4));
          transform: translateY(-3px);
        }
        
        .video-border-gradient {
          position: relative;
          padding: 2px;
          background: linear-gradient(90deg, #246551 0%, #348b6e 50%, #246551 100%);
          border-radius: 30px;
        }
        
        .video-border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 30px;
          padding: 2px;
          background: linear-gradient(90deg, #246551 0%, #348b6e 50%, #246551 100%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .play-button-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .play-button-outer {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .play-button-outer::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          z-index: -1;
          animation: pulse 2s infinite;
        }
        
        .play-button-inner {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(36, 101, 81, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(36, 101, 81, 0.5);
        }
        
        .play-button-icon {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 15px 0 15px 26px;
          border-color: transparent transparent transparent #ffffff;
          margin-left: 6px;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
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