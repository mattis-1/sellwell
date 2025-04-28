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
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]) 
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  // Animation will run continuously without pausing
  
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

  // Create an extended array of images for the infinite effect
  // We duplicate images multiple times to ensure the slider has enough content
  const extendedImages = [...images, ...images, ...images, ...images, ...images]

  // No longer needed - continuous animation without pause

  // Updated toggle function to handle multiple open FAQs
  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      } 
      return [...prev, index]
    })
  }

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section relative transition-all duration-1000 p-0 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      {/* Blue gradient from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[70vh] z-0 pointer-events-none bg-gradient-to-t from-[#51B1D7] to-transparent"></div>

      {/* Image Slider - Enhanced infinite version */}
      <div className="w-screen relative overflow-hidden bg-gray-50">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
        
        {/* Right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>
        
        {/* Infinite slider with CSS animation - always running */}
        <div 
          ref={sliderRef}
          className="flex overflow-hidden h-[320px] md:h-[520px]"
        >
          <div 
            className="flex animate-marquee"
            style={{ 
              animationDuration: '60s',
              willChange: 'transform'
            }}
          >
            {extendedImages.map((image, index) => (
              <div 
                key={index} 
                className="w-[260px] h-[320px] md:w-[380px] md:h-[520px] flex-shrink-0 mx-3"
              >
                <div className="w-full h-full overflow-hidden rounded-[20px] md:rounded-[20px] shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1">
                  <Image
                    src={`/${image}`}
                    alt={`Team Image ${index % images.length + 1}`}
                    width={500}
                    height={700}
                    priority={index < 5}
                    quality={90}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.onerror = null
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='380' height='520' viewBox='0 0 380 520'%3E%3Crect width='380' height='520' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='24' fill='%23166534'%3ETeam Bild ${(index % images.length) + 1}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Container - Redesigned for elegance */}
      <div className="sellwell-container -mt-24 md:-mt-48 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-[33px] shadow-xl p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 inline-block">
              <span className="font-light text-sm tracking-wide">HÄUFIG GESTELLTE FRAGEN</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">FAQ</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`
                  transition-all duration-300
                  ${index < faqs.length - 1 ? 'border-b border-gray-100 pb-6' : ''}
                `}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-start w-full text-left py-2 focus:outline-none group"
                  aria-expanded={openFaqs.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-8">
                    {faq.question}
                  </h3>
                  <span className="transition-all duration-300 ease-in-out bg-gray-50 rounded-full p-1 flex-shrink-0 mt-0.5">
                    {openFaqs.includes(index) ? (
                      <Minus className="w-5 h-5 text-blue-700" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-700" />
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openFaqs.includes(index) ? "800px" : "0px",
                    opacity: openFaqs.includes(index) ? 1 : 0,
                    transform: openFaqs.includes(index) ? "translateY(0)" : "translateY(-8px)",
                  }}
                >
                  <div className="mt-3 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add global styles for animation in the component */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  )
}