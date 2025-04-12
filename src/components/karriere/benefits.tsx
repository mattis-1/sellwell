import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Benefits() {
  const benefits = [
    "Flexible Arbeitszeiten für eine ausgewogene Work-Life-Balance",
    "Umfassende Weiterbildungsmöglichkeiten für Ihre berufliche Entwicklung",
    "Attraktive Vergütung und zusätzliche Leistungen",
    "Innovatives und dynamisches Arbeitsumfeld",
    "Internationale Karrieremöglichkeiten und Netzwerke",
  ]

  return (
    <section id="benefits" className="w-full py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Vorteile</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-r from-[#155D31] to-[#179F49] flex-shrink-0 mt-0.5" />
                  <p className="text-base md:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#155D31]/10 to-[#179F49]/10 rounded-xl rotate-3 z-0"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Benefits illustration"
                className="rounded-lg object-cover w-full relative z-10 shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
