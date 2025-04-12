"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

type Stat = {
  value: number
  suffix: string
  label: string
  description: string
}

export default function StatsSection() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])
  const animationCompleted = useRef(false)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  const stats: Stat[] = [
    {
      value: 150,
      suffix: "+",
      label: "Mitarbeiter",
      description: "Talentierte Experten aus verschiedenen Fachbereichen",
    },
    {
      value: 12,
      suffix: "",
      label: "Jahre Erfahrung",
      description: "Erfolgreiche Unternehmensgeschichte seit 2012",
    },
    {
      value: 98,
      suffix: "%",
      label: "Kundenzufriedenheit",
      description: "Basierend auf unseren regelmäßigen Kundenbefragungen",
    },
    {
      value: 500,
      suffix: "+",
      label: "Erfolgreiche Projekte",
      description: "Abgeschlossene Projekte für Kunden weltweit",
    },
  ]

  useEffect(() => {
    if (inView && !animationCompleted.current) {
      animationCompleted.current = true

      stats.forEach((stat, index) => {
        let startValue = 0
        const endValue = stat.value
        const duration = 2000 // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / endValue))

        const timer = setInterval(() => {
          startValue += 1
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            newCounts[index] = startValue
            return newCounts
          })

          if (startValue === endValue) {
            clearInterval(timer)
          }
        }, stepTime)

        return () => clearInterval(timer)
      })
    } else if (!inView) {
      animationCompleted.current = false
    }
  }, [inView, stats])

  return (
    <section ref={ref} className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Sellwell in Zahlen</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Unsere Erfolge und Wachstum spiegeln sich in diesen Kennzahlen wider.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold green-gradient-text">
                  {counts[index]}
                  {stat.suffix}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
