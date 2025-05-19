import React from 'react';
import FadeIn from '@/components/fadein';
import SimpleModal from "@/components/SimpleModal";
import { useState } from 'react';
import { Check } from 'lucide-react'; // Import the Check icon from lucide-react

const Stellen = () => {
  // Common card style for the container
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    borderRadius: '45px',
  };

  // Background image style with opacity
  const backgroundImageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `url('/dottedbg.png')`,
    backgroundSize: 'cover',
    opacity: 0.25,
    borderRadius: '45px',
    pointerEvents: 'none',
  };

  // Gradient overlay style
  const gradientOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'radial-gradient(circle, transparent 0%, white 70%)',
    borderRadius: '45px',
    pointerEvents: 'none',
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'Firma' | 'Bewerber'>('Bewerber');
  
  const openBewerberModal = () => {
    setModalMode('Bewerber');
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);

  // Job data with bullet points
  const jobs = [
    {
      id: 1,
      title: "Vertriebler im Außendienst",
      benefits: [
        "Leistungsorientierte Bezahlung (6.000,- € und 8.000,- € pro Monat sind normal)",
        "Uneingeschränkte Verdienstmöglichkeit",
        "Ständige Weiterbildung von Experten",
        "Quereinsteiger und Berufseinsteiger herzlich willkommen!"
      ],
      location: "München",
      type: "Vollzeit"
    },
    {
      id: 2,
      title: "Teamleiter im Vertrieb",
      benefits: [
        "Exklusiver Vertrieb von Strom-, Gas- und Glasfaserverträgen",
        "Hohes Gehalt plus attraktive Provisionen",
        "Vertriebserfahrung nicht zwingend notwendig",
        "Ambitioniertes Team an deiner Seite",
        "Grenzenlose Wachstumsmöglichkeiten",
      ],
      location: "München",
      type: "Vollzeit"
    },
    {
      id: 3,
      title: "Quereinsteiger im Vertrieb",
      benefits: [
        "Umfassende Einarbeitung und Schulung",
        "Individuelle Unterstützung von Experten in der Branche",
        "Attraktives Gehalt mit leistungsorientierter Vergütung",
        "Karriere- und Aufstiegsmöglichkeiten",
        "Keine Vorkenntnisse erforderlich"
      ],
      location: "München",
      type: "Vollzeit"
    }
  ];

  return (
    <section className="bg-[#fff]">
      <div className="pt-0 pb-10 mb-10 w-full bg-[#fff] rounded-b-[70px] shadow-[0px_10px_9px_-4px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto px-6">
          {/* Centered Headline */}
          <h2 className="text-[50px] pt-10 pb-5 leading-[55px] tracking-[-0.75px] text-center mt-10 mb-5 font-inter font-[600] text-[#000000]">
            Aktuelle Stellenangebote
          </h2>
          
          {/* Job cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <FadeIn key={job.id}>
                <div className="relative group transition-all h-full">
                  <div 
                    className="rounded-3xl p-7 h-full flex flex-col" 
                    style={cardStyle}
                  >
                    {/* Background image with opacity */}
                    <div style={backgroundImageStyle}></div>
                    
                    {/* Gradient overlay */}
                    <div style={gradientOverlayStyle}></div>
                    
                    <h3 className="inter700 text-xl tracking-[-0.35] mb-4 text-primary text-black relative z-10">
                      <span className="bg-gradient-to-r from-[#184639] to-[#2F8267] bg-clip-text text-transparent text-[26px]">
                        {job.title}
                      </span>
                      <br />(m/w/d)
                    </h3>
                    
                    {/* Checkmark list instead of paragraph */}
                    <div className="mb-4 flex-grow relative z-10">
                      <ul className="space-y-3">
                        {job.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-[#184639] to-[#2F8267] flex items-center justify-center mr-3 mt-1">
                              <Check size={12} className="text-white" />
                            </span>
                            <span className="text-[rgb(115, 115, 115)] font-[400] leading-relaxed leading-[22px] tracking-[-0.28px]">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center mb-6 text-sm text-black relative z-10">
                      <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.type}
                      </div>
                    </div>
                    
                    <button 
                      onClick={openBewerberModal}
                      className="inline-flex items-center inter700 px-4 py-2 text-white font-semibold rounded-full hover:opacity-90 transition w-full justify-center relative z-10"
                      style={{ background: 'linear-gradient(to right, #184639 0%, #2F8267 100%)' }}
                    >
                      JETZT BEWERBEN
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* View All Jobs Button (Optional) */}
          <div className="mt-15 pb-5 text-center">
            <button 
              onClick={openBewerberModal}
              className="inter700 inline-flex items-center px-6 py-3 text-white font-semibold rounded-full text-[20px] hover:opacity-90 transition"
              style={{ background: 'linear-gradient(to right, #184639 0%, #2F8267 100%' }}
            >
              INTERESSE GEWECKT? JETZT BEWERBEN →
            </button>
          </div>
        </div>
      </div>
      <SimpleModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        mode={modalMode} 
      />
    </section>
  );
};

export default Stellen;