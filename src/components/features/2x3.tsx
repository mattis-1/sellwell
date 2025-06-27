"use client"

import { Shield, Palette, Globe, Users, BookOpen, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projekterfolg() {

  const features = [
    {
      icon: Shield,
      headline: "Skalierbarer Außendienst",
      title: "Komplett ohne eigene Ressourcesbindung"
    },
    {
      icon: Palette,
      headline: "Verlässlich & Stressfrei",
      title: "Wir liefern ihnen konstante Steigerung Ihrer Verkaufszahlen"
    },
    {
      icon: Globe,
      headline: "Schnell erste Erfolge",
      title: "Schnell und ohne großen Aufwand erste Erfolge sehen"
    },
    {
      icon: Users,
      headline: "Bewährte Verkaufsstrategien",
      title: "Unser Team sorgt für maximale Abschlussraten"
    },
    {
      icon: BookOpen,
      headline: "Kontinuierliche Prozessoptimierung",
      title: "Konstant arbeiten wir daran, effizientere Prozesse zu entwickeln"
    },
    {
      icon: Zap,
      headline: "Weiterbildung & Wachstum",
      title: "Konstante Weiterbildung unseres Teams"
    }
  ]

  return (
    <section id="b2b" className="pb-20 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl mb-15 text-center sm:text-4xl font-bold leading-[1.3] text-gray-900 dark:text-white mb-5">Projekterfolg mit Sellwell</h2>
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* Left Side - Team Image - Desktop Only */}
          <div className="relative group/image hidden lg:block">
            {/* Background card with gradient */}
            <div className="absolute inset-0 rounded-3xl transform rotate-4 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #C1F9D4 100%)" }}></div>
            {/* Main image container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-0 transform transition-transform duration-300 group-hover:shadow-3xl">

              <Image
                src="/Perfekter Partner.png"
                alt="Das Sellwell Team"
                width={600}
                height={400}
                className="rounded-3xl object-cover w-full h-150 transition-transform duration-300"
              />
            </div>
          </div>

                     {/* Right Side - Features Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {features.map((feature, index) => (
               <div
                 key={index}
                 className="flex flex-col items-start space-y-3 p-4"
               >
                 <div className="flex-shrink-0">
                   <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #F3FFEF 0%, #7BF3A4 100%)" }}>
                     <feature.icon className="w-5 h-5 text-white" />
                   </div>
                 </div>
                 <div className="flex-1">
                   <h3 className="text-2xl md:text-xl font-semibold text-gray-900 mb-1">
                     {feature.headline}
                   </h3>
                   <p className="text-lg md:text-base font-[400] text-gray-600 leading-relaxed">
                     {feature.title}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/kontakt">
          <button className="sellwell-btn-primary">
            Jetzt Erstgespräch vereinbaren
          </button>
          </Link>
        </div>

        {/* Mobile Image - Below Button */}
        <div className="block lg:hidden mt-16 flex justify-center">
          <Image
            src="/WarumBei.png"
            alt="Das Sellwell Team"
            width={600}
            height={400}
            className="rounded-3xl object-cover w-[90%] max-w-md"
          />
        </div>
      </div>
    </section>
  )
} 