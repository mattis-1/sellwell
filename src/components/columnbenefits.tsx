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
      iconUrl: "/bagz.svg",
    },
    {
      id: 2,
      header: "Auch als Quereinsteiger erfolgreich durchstarten",
      description: "Auch als Quereinsteiger kannst du bei uns dank individueller Unterstützung und einem positiven Arbeitsumfeld in Kürze aufsteigen und richtig Karriere machen.",
      iconUrl: "/learntoearn.svg",
    },
    {
      id: 3,
      header: "Entwicklung im perfekten Umfeld",
      description: "Richtig Geld verdienen & währendessen vergessen, dass man bei der Arbeit ist - genau das ist bei Sellwell möglich. Mit ambitionierten, symphatischen Kollegen Aufsteigen leichter als je zuvor.",
      iconUrl: "/gs.svg",
    },
  ];

  return (
    <section className="bg-white pt-16">
      <div className="container mx-auto px-4">
        {/* Headline with SVG Underline */}
        <div className="text-center mb-16">
          <h2 className="inter800 text-[#000000] tracking-[-1.3px] text-3xl sm:text-[35px] md:text-[40px] lg:text-[50px]">
            Bei uns <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">im Vertrieb</span> ...
          </h2>
          {/*
          <div className="relative w-127 h-1 mb-5 mx-auto">
            <Image 
              src="/Underline2.svg"
              alt="Textunderline"
              width={1050}
              height={1050}
              className="object-contain"
            />
          </div>
          */}
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 mt-16 gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center text-center p-4 md:p-6"
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
              <h3 className="text-xl md:text-[27.5px] inter700 px-2 mb-4 bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">
                {benefit.header}
              </h3>
              
              {/* Description */}
              <p className="text-gray-900 text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Somebenefits;
