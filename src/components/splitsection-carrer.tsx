import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import Proof from "@/components/socialproof"
import { useState } from 'react';
import BeautifulModal from "@/components/BeautifulModal";

const SplitSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for modal mode (Firma or Bewerber)
  const [modalMode, setModalMode] = useState<'Firma' | 'Bewerber'>('Firma');
  
  // Functions to handle opening modal with specific mode
  {/*const openFirmaModal = () => {
    setModalMode('Firma');
    setIsModalOpen(true);
  };*/}
  
  const openBewerberModal = () => {
    setModalMode('Bewerber');
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#ffffff]">
      <Proof />
      <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[500px] bg-[#ffffff]">
        {/* Left side: Content */}
        <div className="w-full md:w-1/2 bg-background flex items-center">
          <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-12 md:px-12 lg:px-16">
            <span className="mb-2 sm:mb-3 inline-block bg-gradient-to-r from-[#0C462B] to-[#067741] text-white text-[14px] sm:text-[16px] font-[600] rounded-[99px] px-3 sm:px-4 py-1">
              KARRIEREMÖGLICHKEITEN
            </span>
            <h2 className="tracking-[-1.3px] text-3xl sm:text-[35px] md:text-[40px] lg:text-[50px] inter800 mb-3 sm:mb-5 leading-tight">
              <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent ">
                Warum
              </span> bei<br />Sellwell arbeiten?
            </h2>
            <p className="text-foreground/80 mb-6 sm:mb-8 text-base sm:text-lg md:text-[19px] w-full md:w-120">
              Du bist motiviert und suchst nach einer Möglichkeit, in einem ambitionierten Umfeld große Dinge zu erreichen und dich finanziell sowie persönlich weiterzuentwickeln? Dann gibt es für dich keinen besseren Ort als Sellwell. Bei uns erwarten dich konstante Weiterbildung und sympathische, erfolgsgetriebene Kollegen, die dich vorantreiben und motivieren, besser zu werden.
            </p>
            {/*Fix this*/}
            <Button onClick={openBewerberModal} variant="default" className="self-start text-base sm:text-lg md:text-[22px] rounded-[99px] py-2 px-5">
              JETZT BEWERBEN
            </Button>
            {/* The modal component with dynamic mode */}
            <BeautifulModal 
              isOpen={isModalOpen} 
              onClose={closeModal}
              mode={modalMode} 
            />
            <div className="inter600 text-start ml-2 sm:ml-[10px] mt-2 text-sm sm:text-base">
              Schnell & Ohne Lebenslauf
            </div>
          </div>
        </div>
        
        {/* Right side: Image */}
        <div className="w-full md:w-1/2 h-[550px] sm:h-[500px] md:min-h-full relative">
          {/* Image as background */}
          <div className="absolute inset-0 bg-gray-300 mx-4 sm:mx-5 my-4 sm:my-5 md:mr-5 md:ml-0 rounded-[20px] sm:rounded-[36px]">
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
      
    </section>
  );
};

export default SplitSection;