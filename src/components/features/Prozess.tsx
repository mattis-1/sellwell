'use client'

import { Send, Users, FileText } from "lucide-react"
import type { LucideProps } from "lucide-react"
import Image from "next/image"

// Define icons directly in the component or import if preferred
const icons = {
  Send: (props: LucideProps) => <Send {...props} />,
  Users: (props: LucideProps) => <Users {...props} />,
  FileText: (props: LucideProps) => <FileText {...props} />,
}

export default function Prozess() {
  const processSteps = [
    {
      title: "Online Bewerben",
      description:
        "In unter 2 Minuten bei uns bewerben - ohne Anschreiben, ohne Lebenslauf. Nur einige Fragen vorab, um dich gleich besser kennenzulernen.",
      icon: "Send" as keyof typeof icons,
      image: "/Onlinebewerben.png",
      badge: "In unter 2 Minuten",
    },
    {
      title: "Persönliches Kennenlernen",
      description:
        "Nachdem wir deine Bewerbung durchgegangen sind, laden wir dich auf ein persönliches Kennenlerngespräch ein, um herauszufinden, ob du zu Sellwell passt und ob du für eine Festanstellung bei uns in Frage kommst.",
      icon: "Users" as keyof typeof icons,
      image: "/Kennenlernen.png",
      badge: "Einblick ins Team",
    },
    {
      title: "Probewoche & Arbeitsvertrag",
      description:
        "Falls soweit alles passt, laden wir dich herzlich auf eine Probewoche bei uns ein, wo du erste Einblicke in den Alltag bei uns bekommst. Wenn alles passt erledigen wir in Kürze den Papierkram und du kannst schon bald anfangen, deine Karriere auf Vordermann zu bringen.",
      icon: "FileText" as keyof typeof icons,
      image: "/Probewoche.png",
      badge: "Einstieg bei Sellwell",
    },
  ]

  return (
    <section className="sellwell-section relative overflow-hidden" style={{ backgroundColor: '#FFF' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white"></div>
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gradient-to-l from-green-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-gradient-to-r from-green-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="sellwell-container relative z-10">
        <div className="text-center mb-20 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.3]">
            Bei Sellwell<br />durchstarten
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-4">
          {processSteps.map((step, index) => {
            const IconComponent = icons[step.icon]
            return (
              <div 
                key={index} 
                className="group relative"
               
              >
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                  {/* Left Column - Content */}
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative">
                        <div
                          className="relative z-10 flex h-16 w-16 items-center justify-center shadow-lg transition-all duration-300"
                          style={{ 
                            background: "linear-gradient(135deg, #F3FFEF 0%, #7BF3A4 100%)",
                            borderRadius: "16px" 
                          }}
                        >
                          {IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : null}
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #C1F9D4 100%)" }}></div>
                      </div>

                      {/* Enhanced Text Content */}
                      <div className="flex-1">
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-inter">
                          {step.title}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed md:mb-0 mb-5">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Enhanced Image */}
                  <div className="lg:justify-self-end mt-12 mb-12 lg:mt-0 lg:mb-0 px-4 lg:px-0">
                    <div className="relative group/image">
                      {/* Background card with gradient */}
                      <div className="absolute inset-0 rounded-3xl transform rotate-8 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #C1F9D4 100%)" }}></div>
                      
                      {/* Main image container */}
                      <div className="relative bg-white rounded-3xl shadow-2xl p-0 transform transition-transform duration-300 group-hover:shadow-3xl">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={450}
                          height={350}
                          className="rounded-2xl object-cover w-full h-64 sm:h-72 lg:h-80 transition-transform duration-300"
                          priority={index === 0}
                        />
                        
                        {/* Floating step indicator */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 text-[#7BF3A4] rounded-xl flex items-center justify-center font-bold text-lg shadow-lg" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #C1F9D4 100%)" }}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            )
          })}
        </div>
        </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
