"use client"

import { useRef, useEffect, useState } from "react"
import Button from "@/modules/karriere-lp/components/button"
import Image from "next/image"

export default function SellwellBenefits() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
          {/* Benefit 1 */}
          <div className="sellwell-benefit-container-alt">
            <div className="mb-3 mr-auto">
            <Image 
              src="/green-shx-icon1.svg"
              alt="icon"
              width={75}
              height={75}
              />
            </div>
            <h3 className="text-[24px] font-[600] text-left tracking-[-0.72px] leading-[30.4px] mb-3 pl-2">Grenzenlose Verdienstmöglichkeiten</h3>
            <p className="font-inter text-[#111111] text-left text-[14px] tracking-[-0.22px] leading-[22.4px] pl-2">
            Bei uns ist dein Gehalt so gut wie deine Leistung. Unsere Top-Vertriebler erzielen regelmäßig hohe 4- bis
            5-stellige Monatsgehälter.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="sellwell-benefit-container-alt">
            <div className="mb-3 mr-auto">
            <Image 
              src="/green-shx-icon2.svg"
              alt="icon"
              width={75}
              height={75}
              />
            </div>
            <h3 className="text-[24px] font-[600] text-left tracking-[-0.72px] leading-[30.4px] mb-3 ml-[-5px]">Von Anfang an<br />individuelle Unterstützung</h3>
            <p className="font-inter text-[#111111] text-left text-[14px] tracking-[-0.22px] leading-[22.4px] pl-2">
              Auch ohne Vorkenntnisse bringen wir dich auf Erfolgskurs. Unser bewährtes System und persönliches Coaching
              machen dich zum Vertriebs-Profi.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="sellwell-benefit-container-alt">
            <div className="mb-3 mr-auto">
            <Image 
              src="/green-shx-icon3.svg"
              alt="icon"
              width={75}
              height={75}
              />
            </div>
            <h3 className="text-[24px] font-[600] text-left tracking-[-0.72px] leading-[30.4px] mb-3 pl-2 ">Ambitioniertes &<br />spaßiges Umfeld</h3>
            <p className="font-inter text-[#111111] text-left text-[14px] tracking-[-0.22px] leading-[22.4px] pl-2">
            Werde Teil eines jungen, dynamischen Teams mit flachen Hierarchien. Bei uns wird hart gearbeitet, aber
            auch der Spaß kommt nicht zu kurz.
            </p>
          </div>

          
        </div>

        <div className="text-center mt-12">
          <a href="#formular"><Button>Jetzt schnell bewerben</Button></a>
          <p className="subutton mt-2">Ohne Lebenslauf und Anschreiben</p>
        </div>
      </div>
    </section>
  )
}
