"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  videoId: string
  name: string
  position: string
  avatar: string
  quote: string
}

export default function EmployeeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const maxVisibleItems = 1
  const slideRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      videoId: "dQw4w9WgXcQ",
      name: "Anna Schmidt",
      position: "Senior Projektmanagerin",
      avatar: "/placeholder.svg?height=60&width=60&text=AS",
      quote:
        "Die Arbeitsatmosphäre und die Entwicklungsmöglichkeiten hier sind einzigartig. Ich konnte meine Karriere gezielt vorantreiben.",
    },
    {
      id: 2,
      videoId: "dQw4w9WgXcQ",
      name: "Thomas Müller",
      position: "Teamleiter Entwicklung",
      avatar: "/placeholder.svg?height=60&width=60&text=TM",
      quote:
        "Die Zusammenarbeit im Team und die innovativen Projekte machen die Arbeit hier besonders spannend und abwechslungsreich.",
    },
    {
      id: 3,
      videoId: "dQw4w9WgXcQ",
      name: "Laura Weber",
      position: "UX/UI Designerin",
      avatar: "/placeholder.svg?height=60&width=60&text=LW",
      quote:
        "Die kreative Freiheit und das Feedback der Kollegen haben mir geholfen, mich beruflich weiterzuentwickeln.",
    },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - maxVisibleItems ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - maxVisibleItems : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Das sagen unsere Mitarbeiter</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Erfahren Sie aus erster Hand, wie es ist, Teil unseres Teams zu sein und welche Erfahrungen unsere Mitarbeiter
          gemacht haben.
        </p>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 px-2 md:px-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Vorheriges Video</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Nächstes Video</span>
            </Button>
          </div>

          <div ref={slideRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="aspect-video w-full">
                      {isMounted && (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                          title={`Testimonial von ${testimonial.name}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? "green-gradient" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Gehe zu Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
