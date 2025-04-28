"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Properly typed button component
import { ReactNode, MouseEventHandler } from "react"

interface EnhancedButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const EnhancedButton = ({ children, onClick, className = "" }: EnhancedButtonProps) => (
  <motion.button
    onClick={onClick}
    className={`px-8 py-4 bg-gradient-to-r from-[#246551] to-[#348b6e] text-white font-bold rounded-lg text-lg tracking-wide shadow-lg transform transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(36, 101, 81, 0.4)" }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.button>
)

const requirements = [
  {
    text: "Du bereit bist, richtig Gas zu geben und viel Geld zu verdienen",
    icon: "/check-lp2.svg"
  },
  {
    text: "Du gerne mit anderen Menschen kommunizierst",
    icon: "/check-lp2.svg"
  },
  {
    text: "Du vor Ort in München oder im Umland bist",
    icon: "/check-lp2.svg"
  },
  {
    text: "Du gutes Deutsch sprichst",
    icon: "/check-lp2.svg"
  },
  {
    text: "Du jung und ambitioniert bist, große Visionen hast und mehr als den normalen 9/5 willst",
    icon: "/check-lp2.svg"
  },
]

export default function SellwellRequirements() {
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
      { threshold: 0.1 }
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
      className="sellwell-section bg-white py-12 md:py-16"
    >
      <div className="sellwell-container-2">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-[32px] md:text-[37px] font-bold text-left mt-5 mb-3">
              <span className="special-text leading-[1.2] text-[#246551]">Wir suchen dich</span><br />als Vertriebler im Außendienst (m/w/d)
            </h2>
            <div className="text-[26px] md:text-[30px] font-bold text-left mt-4 mb-6.5">
              Bewirb dich wenn:
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.ul variants={containerVariants} className="space-y-5">
              {requirements.map((requirement, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e0f2ed] flex items-center justify-center mr-4">
                    <Image
                      src={requirement.icon}
                      alt="check"
                      width={25}
                      height={25}
                    />
                  </div>
                  <p className="text-[19px] pt-1 text-gray-800">{requirement.text}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <a href="#formular">
                <EnhancedButton>JETZT DURCHSTARTEN</EnhancedButton>
                <p className="text-sm text-gray-500 mt-2">In unter 60 Sekunden bewerben</p>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}