"use client"

import { useRef, useEffect, useState } from "react"
//import Image from "next/image"
import { motion } from "framer-motion"
import Button from "@/modules/karriere-lp/components/button"

import { ReactNode } from "react"

// Enhanced motion button with animations
interface AnimatedButtonProps {
  children: ReactNode;
}

const AnimatedButton = ({ children }: AnimatedButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 400, 
      damping: 17,
      delay: 0.4 
    }}
  >
    <Button>{children}</Button>
  </motion.div>
)

export default function SellwellCtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after activation to improve performance
          if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px" // Trigger slightly earlier
      }
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

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: custom * 0.1
      }
    })
  }

  return (
    <section
      ref={sectionRef}
      className={`py-20 md:py-32 relative transition-all duration-700 bg-cover bg-center bg-no-repeat overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ 
        backgroundImage: "url('/ABOUT1.png')" 
      }}
    >
      {/* Improved overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/70"></div>
      
      {/* Optional particles or subtle animation effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#246551]/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-[#246551]/10 filter blur-3xl"></div>
      </div>

      <div className="sellwell-container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            custom={1}
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Bewirb dich noch heute für deinen Traumjob im Strom- und Gasvertrieb
          </motion.h2>
          
          <motion.p 
            custom={2}
            variants={textVariants}
            className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Klicke jetzt hier unten auf den Button und bewirb dich in unter 60 Sekunden ohne Anschreiben und ohne
            Lebenslauf
          </motion.p>
          
          <motion.div
            custom={3}
            variants={textVariants}
          >
            <a href="#formular" className="inline-block">
              <AnimatedButton>JETZT BEWERBEN</AnimatedButton>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Optional subtle diagonal shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-1"></div>
    </section>
  )
}