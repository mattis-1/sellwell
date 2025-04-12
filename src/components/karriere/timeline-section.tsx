"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Lightbulb, Rocket, Target } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function TimelineSection() {
  const [activeStep, setActiveStep] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Create refs for each step to track when they come into view
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  })

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.7,
    triggerOnce: false,
  })

  // Update active step based on which step is in view
  useEffect(() => {
    if (inView1) setActiveStep(0)
    else if (inView2) setActiveStep(1)
    else if (inView3) setActiveStep(2)
  }, [inView1, inView2, inView3])

  const steps = [
    {
      number: 1,
      title: "Beratungsgespräch",
      description: "In einem persönlichen Gespräch analysieren wir Ihre Ziele und Anforderungen.",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      ref: ref1,
    },
    {
      number: 2,
      title: "Maßgeschneiderte Lösung",
      description: "Wir entwickeln ein individuelles Konzept, das perfekt zu Ihren Bedürfnissen passt.",
      icon: <Target className="h-8 w-8 text-white" />,
      ref: ref2,
    },
    {
      number: 3,
      title: "Erfolgreiche Umsetzung",
      description: "Gemeinsam setzen wir die Strategie um und begleiten Sie auf dem Weg zum Erfolg.",
      icon: <Rocket className="h-8 w-8 text-white" />,
      ref: ref3,
    },
  ]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Image - hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#155D31]/20 to-[#179F49]/20 rounded-xl -rotate-3 z-0"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Process illustration"
                className="rounded-lg object-cover w-full relative z-10 shadow-md"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Unser Prozess</h2>
            <p className="text-muted-foreground mb-8">
              Wir begleiten Sie Schritt für Schritt auf dem Weg zu Ihrem beruflichen Erfolg. Unser bewährter Prozess
              stellt sicher, dass wir gemeinsam die besten Ergebnisse erzielen.
            </p>

            {/* Timeline */}
            <div ref={timelineRef} className="relative pl-8 border-l-2 border-gray-200">
              {/* Animated overlay timeline line */}
              <div
                className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-[#155D31] to-[#179F49] transition-all duration-1000 ease-in-out"
                style={{
                  height: activeStep === 0 ? "33%" : activeStep === 1 ? "66%" : "100%",
                  opacity: 1,
                }}
              ></div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={step.ref}
                  className={`mb-10 relative transition-all duration-500 ease-in-out ${
                    activeStep >= index ? "opacity-100 translate-x-0" : "opacity-40 -translate-x-2"
                  }`}
                >
                  {/* Circle on timeline */}
                  <div
                    className={`absolute -left-[25px] h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeStep >= index ? "green-gradient scale-100" : "bg-gray-200 scale-90"
                    }`}
                  >
                    <span className={`font-bold ${activeStep >= index ? "text-white" : "text-gray-500"}`}>
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1">
                    {/* Icon */}
                    <div
                      className={`mb-2 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeStep >= index ? "green-gradient" : "bg-gray-200"
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image for mobile only */}
          <div className="block md:hidden w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Process illustration"
              className="rounded-lg object-cover w-full shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
