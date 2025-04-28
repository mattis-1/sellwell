"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Marco Sandrisser",
    role: "TEAMLEITER",
    avatar: "/Marco-1x1.png",
    video: "/testimonial1.mp4",
  },
  {
    name: "Chris Marquardt",
    role: "VERTRIEBLER",
    avatar: "/Chris-1x1.png",
    video: "/testimonial2.mp4",
  },
  {
    name: "Stefan Sonderholzer",
    role: "VERTRIEBLER & AUSBILDENDER",
    avatar: "/Stefan-1x1.png",
    video: "/testimonial3.mp4",
  },
]

export default function SellwellTestimonials() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Minimum distance required for swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Das sagt unser Team</h2>

        {/* Full width green background */}
        <div className="relative w-screen -mx-[calc(50vw-50%)]">
          <div className="bg-green-700 py-12">
            <div 
              className="max-w-4xl mx-auto px-4 relative"
              ref={sliderRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-black rounded-lg overflow-hidden aspect-video mb-6">
                        {/* Video placeholder */}
                        <div className="w-full h-full flex items-center justify-center text-white">
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
                              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement
                              target.onerror = null
                              target.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='24' fill='%23166534'%3E" +
                                testimonial.name.charAt(0) +
                                "%3C/text%3E%3C/svg%3E"
                            }}
                          />
                        </div>
                        <div className="text-white">
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-green-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls moved to bottom near dots */}
          <div className="bg-white py-6 flex justify-center items-center space-x-2 relative">
            <button
              onClick={prevSlide}
              className="absolute left-1/4 bg-white/20 rounded-full p-2 text-green-700 hover:bg-green-50 transition-colors"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === index ? "bg-green-700" : "bg-gray-300"
                }`}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
            
            <button
              onClick={nextSlide}
              className="absolute right-1/4 bg-white/20 rounded-full p-2 text-green-700 hover:bg-green-50 transition-colors"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#sellwell-application-form" className="sellwell-btn-primary inline-block">
            Jetzt bewerben
          </Link>
        </div>
      </div>
    </section>
  )
}