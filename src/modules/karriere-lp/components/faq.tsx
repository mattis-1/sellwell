"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Wie läuft der Bewerbungsprozess ab?",
    answer:
      "Nach deiner Schnellbewerbung erhältst du einen Persönlichkeitstest. Wir bitten dich die Fragen ehrlich zu beantworten. Dann erhältst Du von uns in der Regel innerhalb von 48h einen Anruf. In diesem Gespräch hast Du die Möglichkeit, Dich mit unserem Geschäftsführer Leo auszutauschen, der Dir einen ersten Eindruck von unseren Erwartungen vermitteln kann. Passt der erste Eindruck, vereinbaren wir ein digitales Kennenlernen mit Dir. Sollten unsere Vorstellungen und Erwartungen auch matchen, laden wir Dich zu einem persönlichen Kennenlernen zu uns ins Office ein und bei Erfolg, lernen wir Dich bei einer Probewoche näher kennen!",
  },
  {
    question: "Welche Karrieremöglichkeiten habe ich bei euch?",
    answer:
      "Bei uns hast Du die Chance, Dich stetig weiterzuentwickeln und in eine Senior-Position zu wachsen, in der Du auch Verantwortung für ein Team übernimmst. Wir schätzen und belohnen Deine harte Arbeit und Deinen Einsatz, denn bei uns wird gute Leistung nicht nur gesehen, sondern auch anerkannt.",
  },
  {
    question: "Welches Gehalt kann ich erwarten?",
    answer:
      "Im Vertrieb steigt mit höherer Leistung auch direkt dein Gehalt. Unsere besten Mitarbeiter bekommen hohe 4-bis 5-stellige Gehälter ausgezahlt.",
  },
  {
    question: "Muss ich etwas verkaufen?",
    answer:
      "Ja. Wir vertreiben mit unserem Team Strom- und Gasverträge in Berlin. Wir gewinnen neue Kunden für Strom- und Gasverträge und erhalten für jeden gewonnenen Kunden eine Provision. Ein durchschnittlicher Mitarbeiter gewinnt bei uns im Team bis zu 6 Kunden am Tag.",
  },
]

const images = ["ABOUT7.png", "ABOUT4.png", "ABOUT2.png", "ABOUT3.png", "ABOUT1.png"]

export default function SellwellFaqSection() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]) // Start with first FAQ open, now using array
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

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

  // Updated toggle function to handle multiple open FAQs
  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => {
      // If already open, remove it from array
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      } 
      // Otherwise add it to array of open FAQs
      return [...prev, index]
    })
  }

  // Minimum distance required for swipe
  const minSwipeDistance = 50

  // Swipe handling for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    
    // Store the current scroll position
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft)
    }
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
    
    // Calculate and apply immediate scroll for a dragging effect
    if (touchStart !== null && sliderRef.current) {
      const xDiff = touchStart - e.targetTouches[0].clientX;
      sliderRef.current.scrollLeft = scrollPosition + xDiff;
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (sliderRef.current) {
      if (isLeftSwipe) {
        // Scroll right
        sliderRef.current.scrollBy({
          left: window.innerWidth / 2,
          behavior: 'smooth'
        });
      } else if (isRightSwipe) {
        // Scroll left
        sliderRef.current.scrollBy({
          left: -window.innerWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section relative transition-all duration-1000 p-0 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      {/* Image Slider - Full width with fade gradients */}
      <div className="w-screen relative overflow-hidden">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent"></div>
        
        {/* Right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent"></div>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide h-[300px] md:h-[500px] scroll-smooth"
          style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {[...images, ...images, ...images].map((image, index) => (
            <div key={index} className="w-[240px] h-[300px] md:w-[300px] md:h-[500px] flex-shrink-0 mx-2">
              <Image
                src={`/${image}`}
                alt={`Team Image ${index + 1}`}
                width={300}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement
                  target.onerror = null
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='500' viewBox='0 0 300 500'%3E%3Crect width='300' height='500' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='24' fill='%23166534'%3ETeam Bild ${(index % images.length) + 1}%3C/text%3E%3C/svg%3E`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Container */}
      <div className="sellwell-container -mt-20 md:-mt-40 relative z-10">
        <div className="sellwell-card p-6 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Häufig gestellte Fragen</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 pb-4 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none group"
                  aria-expanded={openFaqs.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="transition-all duration-300 ease-in-out">
                    {openFaqs.includes(index) ? (
                      <Minus className="w-5 h-5 text-green-700" />
                    ) : (
                      <Plus className="w-5 h-5 text-green-700" />
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openFaqs.includes(index) ? "500px" : "0px",
                    opacity: openFaqs.includes(index) ? 1 : 0,
                    transform: openFaqs.includes(index) ? "translateY(0)" : "translateY(-8px)",
                  }}
                >
                  <div className="mt-2 pt-2">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}