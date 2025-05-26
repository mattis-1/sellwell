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
      header: "Endlose Möglichkeiten",
      description: "Dein Gehalt hängt zu 100% von deiner Leistung ab. Bei guter Arbeit wirst du gut bezahlt und kannst in wenigen Monaten früher unvorstellbare Gehälter mit nach Hause nehmen.",
      iconUrl: "/bagz.svg",
    },
    {
      id: 2,
      header: "Als Quereinsteiger erfolgreich starten",
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
    <section className="bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-semibold text-[#111111] tracking-[-1.3px] text-3xl sm:text-[35px] md:text-[40px] lg:text-[50px]">
            Bei uns im Vertrieb ...
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 mt-16 gap-6 sm:gap-8 md:grid-cols-3 px-2 sm:px-4 md:px-6 mb-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center bg-white rounded-[35px] shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8"
              data-aos="fade-up"
              data-aos-delay={benefit.id * 100}
              style={{
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Icon - remains centered due to parent's items-center */}
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
              
              {/* Text Content Wrapper for alignment control */}
              <div className="w-full"> 
                {/* Header - Updated styles, now text-center */}
                <h3 className="font-inter text-[24px] font-semibold text-[#111111] text-center tracking-[-0.72px] leading-[30.4px] mb-3">
                  {benefit.header}
                </h3>
                
                {/* Description - Remains text-left */}
                <p className="font-inter text-[#111111] text-center text-[14px] tracking-[-0.22px] leading-[22.4px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Somebenefits;