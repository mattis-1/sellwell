import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import Proof from "@/components/socialproof"
import { useState } from 'react';
import SimpleModal from "@/components/SimpleModal";
import FadeIn from '@/components/fadein';

const SplitSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'Firma' | 'Bewerber'>('Firma');
  
  const openBewerberModal = () => {
    setModalMode('Bewerber');
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#ffffff]">
      <div className="pt-6 pb-6">
      <Proof />
      </div>
      <FadeIn delay={200} direction="none">
        {/* Added a container with max-width to prevent excessive width */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[500px] bg-[#ffffff]">
            {/* Left side: Content */}
            <div className="w-full md:w-1/2 bg-background flex items-center">
              <div className="w-full max-w-xl mx-auto py-8 sm:py-12 md:py-12 pr-4 sm:pr-6 md:pr-8">
                <span className="mb-2 sm:mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[14px] sm:text-[16px] font-[600] rounded-[99px] px-3 sm:px-4 py-1">
                  KARRIEREMÖGLICHKEITEN
                </span>
                <h2 className="tracking-[-1.3px] text-3xl sm:text-[35px] md:text-[40px] lg:text-[50px] inter800 mb-3 sm:mb-5 leading-tight">
                  <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent ">
                    Warum
                  </span> bei<br />Sellwell arbeiten?
                </h2>
                <p className="text-foreground/80 mb-6 sm:mb-8 text-base font-[400] sm:text-lg md:text-[19px] w-full md:w-120">
                  Du bist motiviert und suchst nach einer Möglichkeit, in einem ambitionierten Umfeld große Dinge zu erreichen und dich finanziell sowie persönlich weiterzuentwickeln? Dann gibt es für dich keinen besseren Ort als Sellwell. Bei uns erwarten dich konstante Weiterbildung und sympathische, erfolgsgetriebene Kollegen, die dich vorantreiben und motivieren, besser zu werden.
                </p>
                <Button onClick={openBewerberModal} variant="default" className="self-start text-base sm:text-lg md:text-[22px] rounded-[99px] py-2 px-5">
                  JETZT BEWERBEN
                </Button>
                
                <div className="inter600 text-start ml-2 sm:ml-[10px] mt-2 text-sm sm:text-base">
                  Schnell & Ohne Lebenslauf
                </div>
              </div>
            </div>
            
            {/* Right side: Image - Fixed with specific sizing constraints */}
            <div className="w-full md:w-1/2 h-[550px] sm:h-[500px] mt-10 md:min-h-full relative">
              <div className="md:absolute md:inset-0 h-full md:h-auto mx-4 sm:mx-5 my-4 sm:my-5 md:my-8 md:mx-0 md:ml-4 md:mr-0 lg:ml-8 rounded-[20px] sm:rounded-[36px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image 
                    src="/WarumBei.png"
                    alt="Beschreibung des Bildes"
                    fill
                    className="object-cover rounded-[20px] sm:rounded-[36px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      
      <SimpleModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        mode={modalMode} 
      />
    </section>
  );
};

export default SplitSection;