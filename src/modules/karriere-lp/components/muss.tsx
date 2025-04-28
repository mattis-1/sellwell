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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
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
        staggerChildren: 0.2,
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
        stiffness: 100,
        damping: 12
      }
    }
  }

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f8f9fa] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div variants={headerVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#246551] to-[#348b6e] leading-[1.2]">
                Wir suchen dich
              </span>
              <br />als Vertriebler im Außendienst (m/w/d)
            </h2>
            <motion.div 
              variants={itemVariants} 
              className="text-2xl md:text-3xl font-semibold inline-block relative">
              Bewirb dich wenn:
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#246551] to-[#348b6e] rounded-full"></div>
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.ul className="space-y-6 mb-16">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-[#246551] to-[#348b6e] flex items-center justify-center mr-5 shadow-md">
                    <Image
                      src={requirement.icon}
                      alt="check"
                      width={24}
                      height={24}
                      className="invert brightness-200"
                    />
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 pt-1 font-medium">{requirement.text}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <a href="#formular" className="inline-block">
                <EnhancedButton>JETZT DURCHSTARTEN</EnhancedButton>
                <p className="text-sm text-gray-500 mt-3 font-medium">In unter 60 Sekunden bewerben</p>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Optional decorative elements */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-[#246551]/5 to-[#246551]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#246551]/5 to-[#246551]/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
      </div>
    </section>
  )
}