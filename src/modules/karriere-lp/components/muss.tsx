"use client"

import { useRef, useEffect, useState } from "react"
import { Check } from "lucide-react"
import Button from "@/modules/karriere-lp/components/button"

const requirements = [
  "Du kommunizierst gerne mit anderen Menschen",
  "Du bist bereit, richtig Gas zu geben und viel Geld zu verdienen",
  "Du bist vor Ort in München oder Umland",
  "Du bist jung, ambitioniert mit einer Vision und willst mehr als den normalen 9/5",
]

export default function SellwellRequirements() {
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

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section bg-white transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Bewirb dich bei uns, wenn du folgende Kriterien erfüllst
        </h2>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <Check className="w-6 h-6 text-green-700" />
                </div>
                <p className="text-lg pt-1">{requirement}</p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            
            <a href="#formular"><Button>JETZT BEWERBEN</Button>
          <p className="text-sm text-gray-500 mt-2">In unter 60 Sekunden</p></a>
          </div>
        </div>
      </div>
    </section>
  )
}
