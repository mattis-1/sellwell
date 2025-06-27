"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Users, ClipboardList, type LucideIcon } from "lucide-react"
import Image from "next/image"

interface Service {
  id: string
  triggerText: string
  title: string
  description: string
  icon: LucideIcon
  imageSrc: string
  imageAlt: string
}

const services: Service[] = [
  {
    id: "beratung",
    triggerText: "Vertriebsberatung",
    title: "Vertriebsberatung und Optimierung",
    description:
      "Wir analysieren Ihre bestehenden Vertriebsprozesse und entwickeln maßgeschneiderte Strategien für den Door-to-Door Bereich. Mit datenbasierter Optimierung und praxiserprobten Methoden steigern wir Ihre Conversion Rates und maximieren den ROI Ihrer Vertriebsaktivitäten.",
    icon: TrendingUp,
    imageSrc: "/Leistung1.png",
    imageAlt: "Ein Diagramm, das Vertriebsoptimierung darstellt",
  },
  {
    id: "neukunden",
    triggerText: "Neukundengewinnung",
    title: "Neukundengewinnung und Lead Generierung",
    description:
      "Wir bringen Ihr Produkt direkt zu den relevanten Kunden und übernehmen den gesamten Akquiseprozess im Door-to-Door Bereich. Mit gezielter Ansprache und bewährten Verkaufstechniken überzeugen wir potenzielle Kunden und generieren qualifizierte Abschlüsse für Ihr Unternehmen.",
    icon: Users,
    imageSrc: "/Leistung2.png",
    imageAlt: "Ein Team, das bei der Neukundengewinnung zusammenarbeitet",
  },
  {
    id: "planung",
    triggerText: "Strategische Planung",
    title: "Vertriebsprozesse und strategische Planung",
    description:
      "Wir entwickeln passgenaue Vertriebsprozesse und maßgeschneiderte Strategien für Ihre Produkte im Energiesektor. Von der ersten Kundenansprache bis zum erfolgreichen Abschluss implementieren wir durchdachte Verkaufsabläufe und setzen sie mit unserem erfahrenen Team direkt im Door-to-Door Bereich um.",
    icon: ClipboardList,
    imageSrc: "/Leistung3.png",
    imageAlt: "Ein Whiteboard mit strategischer Planung für Vertriebsprozesse",
  },
]

export default function Leistungen() {
  return (
    <section id="about" className="pb-20 md:pb-28 md:pt-10 pt-8 bg-[#FAFBFD] dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-15">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Unsere Leistungen
          </h2>
        </div>

        <Tabs defaultValue={services[0].id} className="w-full max-w-6xl mx-auto">
          {/* Desktop Tabs */}
          <div className="hidden md:flex justify-center mb-5">
            <TabsList className="inline-flex h-auto items-center justify-center rounded-full bg-[#efefef]/25 dark:bg-slate-800/60 p-1.5 text-muted-foreground overflow-x-auto shadow-inner">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#fff] dark:data-[state=active]:bg-slate-700 data-[state=active]:text-[#000000] dark:data-[state=active]:text-green-400 data-[state=active]:shadow-md flex-shrink-0 gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  <div className="relative">
                    <div
                      className="relative z-10 flex h-7 w-7 items-center justify-center shadow-md transition-all duration-300"
                      style={{ 
                        background: "linear-gradient(135deg, #F3FFEF 0%, #7BF3A4 100%)",
                        borderRadius: "10px" 
                      }}
                    >
                      <service.icon className="h-3 w-3 text-white transition-colors duration-300" />
                    </div>  
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #C1F9D4 100%)" }}></div>
                  </div>
                  {service.triggerText}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* Mobile Tabs - Simple Vertical Stack */}
          <div className="md:hidden mb-4 px-4">
            <TabsList className="flex flex-col space-y-2 bg-gray-50 h-auto p-0 w-full">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="w-full flex items-center justify-start transition-all duration-200 data-[state=active]:bg-gray-50 border rounded-full bg-gray-50 h-auto"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
                        style={{ 
                          background: "linear-gradient(135deg, #F3FFEF 0%, #7BF3A4 100%)"
                        }}
                      >
                        <service.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-white text-lg">
                        {service.triggerText}
                      </div>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="bg-white dark:bg-slate-900 p-7 sm:p-8 lg:p-12 rounded-[40px] min-h-[220px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="order-1 lg:order-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.3] text-gray-900 dark:text-white mb-4 lg:mb-5">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5 md:mb-0 text-base lg:text-lg">{service.description}</p>
                </div>
                {/* Image Content */}
                <div className="order-2 lg:order-2">
                  <div className="relative group/image">
                    {/* Background card with gradient */}
                    <div className="absolute inset-0 rounded-3xl transform rotate-6 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #C1F9D4 100%)" }}></div>
                    
                    {/* Main image container */}
                    <div className="relative bg-white rounded-3xl shadow-2xl p-0 transform transition-transform duration-300 group-hover:shadow-3xl">
                      <Image
                        src={service.imageSrc || "/placeholder.svg"}
                        alt={service.imageAlt}
                        width={500}
                        height={350}
                        className="rounded-3xl object-cover w-full h-auto max-h-[250px] sm:max-h-[300px] lg:max-h-[350px] transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <a href="/kontakt">
          <button className="sellwell-btn-primary">
            Jetzt Projekt Anfragen
          </button>
          </a>
          <div className="text-[18px] font-semibold text-gray-900 mt-3">& Strategiegespräch sichern</div>
        </div>
      </div>
    </section>
  )
}
