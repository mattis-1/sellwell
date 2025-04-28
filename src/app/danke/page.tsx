"use client"

import { useRef, useEffect, useState } from "react"
import { Instagram, Youtube } from "lucide-react"
import Link from "next/link"
//import Image from "next/image"

export default function ThankYouPage() {
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
      className={`min-h-screen flex items-center justify-center bg-gray-50 transition-all duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 py-16 text-center relative">

        

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 inline-block">
            <span className="font-light text-sm tracking-wide">BEWERBUNG ERFOLGREICH</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">Vielen Dank für <span className="special-text">deine Bewerbung!</span></h1>

        <div className="bg-white rounded-lg p-6 shadow-md mb-10">
          <h3 className="text-xl font-semibold mb-4">Was passiert als Nächstes?</h3>
          <ol className="text-left text-gray-600 space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0 mt-0.5">1</span>
              <span>Wir haben soeben deine Bewerbung erhalten und prüfen sie sobald wie möglich.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0 mt-0.5">2</span>
              <span>Darauf treten wir mit dir in Kontakt, für ein erstes kurzes Kennenlernen am Telefon</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 shrink-0 mt-0.5">3</span>
              <span>Bei gegenseitigem Interesse vereinbaren wir ein persönliches Erstgespräch mit einem unserer Teamleiter.</span>
            </li>
          </ol>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <a 
            href="https://www.instagram.com/kress_maximilian/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.youtube.com/@SellwellConsulting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Youtube size={20} />
            <span>YouTube</span>
          </a>
        </div>

        <Link href="/">
          ZURÜCK ZUR STARTSEITE
        </Link>
      </div>
    </section>
  )
}