import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import Proof from "@/components/socialproof"

const SplitSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Proof />
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Linke Seite: Content */}
        <div className="w-full md:w-1/2 bg-background flex items-center">
          <div className="max-w-xl mx-auto px-6 py-16 md:py-12 md:px-12 lg:px-16">
            <span className="mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[16px] font-[600] rounded-[99px] px-4 py-1
">KARRIEREMÖGLICHKEITEN</span>
            <h2 className="headr inter800 mb-5"><span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">Warum</span> bei<br />Sellwell arbeiten?</h2>
            <p className="text-foreground/80 mb-8 text-[19px] w-120">
            Du bist motiviert und suchst nach einer Möglichkeit, in einem ambitionierten Umfeld große Dinge zu erreichen und dich finanziell sowie persönlich weiterzuentwickeln? Dann gibt es für dich keinen besseren Ort als Sellwell. Bei uns erwarten dich konstante Weiterbildung und sympathische, erfolgsgetriebene Kollegen, die dich vorantreiben und motivieren, besser zu werden.
            </p>
            <Button variant="default" className="self-start text-[22px] rounded-[99px]">
                  JETZT BEWERBEN
                </Button>
            <div className="inter600 text-start ml-[10px] mt-2">Schnell & Ohne Lebenslauf</div>
          </div>
        </div>
        
        {/* Rechte Seite: Bild */}
        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full relative">
          {/* Bild als Hintergrund */}
          <div className="absolute inset-0 bg-gray-300 my-5 mr-5 rounded-[36px]">
        
            <Image 
              src="/WarumBei.png"
              alt="Beschreibung des Bildes"
              fill
              className="object-cover rounded-[36px]"
              priority
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;