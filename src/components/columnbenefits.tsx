// components/WasWirBieten.tsx
import React from "react";
import Image from "next/image";

interface BenefitBox {
  id: number;
  header: string;
  description: string;
  iconUrl: string;
}

const Somebenefits: React.FC = () => {
  const benefits: BenefitBox[] = [
    {
      id: 1,
      header: "Grenzlose Wachstumsmöglichkeiten",
      description: "Dein Gehalt hängt zu 100% von deiner Leistung ab. Bei guter Arbeit wirst du gut bezahlt und kannst in wenigen Monaten früher unvorstellbare Gehälter mit nach Hause nehmen.",
      iconUrl: "/bagz.svg", // Replace with your actual icon path
    },
    {
      id: 2,
      header: "Auch als Quereinsteiger erfolgreich durchstarten",
      description: "Auch als Quereinsteiger kannst du bei uns dank individueller Unterstützung und einem positiven Arbeitsumfeld in Kürze aufsteigen und richtig Karriere machen.",
      iconUrl: "/learntoearn.svg", // Replace with your actual icon path
    },
    {
      id: 3,
      header: "Entwicklung im perfekten Umfeld",
      description: "Richtig Geld verdienen & währendessen vergessen, dass man bei der Arbeit ist - genau das ist bei Sellwell möglich. Mit ambitionierten, symphatischen Kollegen Aufsteigen leichter als je zuvor.",
      iconUrl: "/gs.svg", // Replace with your actual icon path
    },
  ];

  return (
    <section className="bg-white pt-16">
      <div className="container mx-auto px-4">
        {/* Headline with SVG Underline */}
        <div className="text-center mb-16">
          <h2 className="inter800 text-[#000000] text-[57.5px] tracking-[-2px] ">Bei uns <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">im Vertrieb</span> ...</h2>
          {/* SVG underline placeholder - replace this with your cool underline SVG 
          <div className="relative w-127 h-1 mb-5 mx-auto">
            <Image 
                    src="/Underline2.svg"
                    alt="Textunderline"
                    width={1050}
                    height={1050}
                    className="object-contain"
                  />
          </div> */}
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 mt-16 md:grid-cols-3 gap-4 md:gap-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center text-center p-6"
              data-aos="fade-up"
              data-aos-delay={benefit.id * 100}
            >
              {/* Icon */}
              <div className="w-20 h-20 mb-6">
                <div className="relative w-full h-full">
                  <Image 
                    src={benefit.iconUrl} 
                    alt={`Icon for ${benefit.header}`} 
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Header */}
              <h3 className="text-2xl inter700 text-[27.5px] px-2 mb-4 bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">{benefit.header}</h3>
              
              {/* Description */}
              <p className="text-gray-900">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Somebenefits;