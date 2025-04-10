import React from 'react';

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

  return (
    <section className="bg-[#fff]">
    <div className="pt-0 pb-10 mb-10 w-full bg-[#EBE9E8] rounded-b-[70px] shadow-[0px_10px_9px_-4px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-6">
        {/* Centered Headline */}
        <h2 className="headr text-center pt-16 mb-16 inter800">
          Aktuelle <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">Stellenangebote</span>
        </h2>
        
        {/* Three horizontally stacked boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Job Card 1 */}
          <div className="relative group transition-all h-full">
            <div 
              className="rounded-3xl p-9 h-full flex flex-col" 
              style={cardStyle}
            >
              {/* Background image with opacity */}
              <div style={backgroundImageStyle}></div>
              
              {/* Gradient overlay */}
              <div style={gradientOverlayStyle}></div>
              
              <h3 className="inter700 text-xl tracking-[-0.35] mb-4 text-primary text-black relative z-10">
                <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
text-[26px]">Vertriebsberater</span><br />(m/w/d)
              </h3>
              <p className="mb-4 text-black flex-grow relative z-10">
                Wir suchen engagierte Vertriebsberater mit Leidenschaft für Kundenberatung und Interesse an strategischem Verkauf.
              </p>
              <div className="flex items-center mb-6 text-sm text-black relative z-10">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  München
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Vollzeit
                </div>
              </div>
              <button 
                className="inline-flex items-center inter700 px-4 py-2 text-white font-semibold rounded-full hover:opacity-90 transition w-full justify-center relative z-10"
                style={{ background: 'linear-gradient(to right, #0B4028 0%, #037942 100%)' }}
              >
                JETZT BEWERBEN
              </button>
            </div>
          </div>
          
          {/* Job Card 2 */}
          <div className="relative group transition-all h-full">
            <div 
              className="rounded-3xl p-9 h-full flex flex-col" 
              style={cardStyle}
            >
              {/* Background image with opacity */}
              <div style={backgroundImageStyle}></div>
              
              {/* Gradient overlay */}
              <div style={gradientOverlayStyle}></div>
              
              <h3 className="inter700 text-xl tracking-[-0.35] mb-4 text-primary text-black relative z-10">
              <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
text-[26px]">Senior Sales Manager</span> (m/w/d)
              </h3>
              <p className="mb-4 text-black flex-grow relative z-10">
                Als Senior Sales Manager übernehmen Sie Verantwortung für Key Accounts und entwickeln strategische Vertriebskonzepte.
              </p>
              <div className="flex items-center mb-6 text-sm text-black relative z-10">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  München
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Vollzeit
                </div>
              </div>
              <button 
                className="inline-flex items-center inter700 px-4 py-2 text-white font-semibold rounded-full hover:opacity-90 transition w-full justify-center relative z-10"
                style={{ background: 'linear-gradient(to right, #0B4028 0%, #037942 100%)' }}
              >
                JETZT BEWERBEN
              </button>
            </div>
          </div>
          
          {/* Job Card 3 */}
          <div className="relative group transition-all h-full ">
            <div 
              className="rounded-3xl p-9 h-full flex flex-col" 
              style={cardStyle}
            >
              {/* Background image with opacity */}
              <div style={backgroundImageStyle}></div>
              
              {/* Gradient overlay */}
              <div style={gradientOverlayStyle}></div>
              
              <div className="px-2">
              <h3 className="inter700 text-xl tracking-[-0.35] mb-4 text-primary text-black relative z-10">
              <span className="bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
text-[26px]">Development Manager</span> (m/w/d)
              </h3>
              <p className="mb-4 text-black flex-grow relative z-10">
                Identifizieren Sie neue Geschäftsmöglichkeiten und bauen Sie strategische Partnerschaften auf, um.
              </p>
              <div className="flex items-center mb-6 text-sm text-black relative z-10">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  München
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Vollzeit
                </div>
              </div>
              <button 
                className="inline-flex items-center inter700 px-4 py-2 text-white font-semibold rounded-full hover:opacity-90 transition w-full justify-center relative z-10"
                style={{ background: 'linear-gradient(to right, #0B4028 0%, #037942 100%)' }}
              >
                JETZT BEWERBEN
              </button>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* View All Jobs Button (Optional) */}
        <div className="mt-15 pb-5 text-center">
          <button 
            className="inter700 inline-flex items-center px-6 py-3 text-white font-semibold rounded-full text-[20px] hover:opacity-90 transition"
            style={{ background: 'linear-gradient(to right, #0B4028 0%, #037942 100%)' }}
          >
            ALLE STELLENANGEBOTE ANSEHEN →
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Stellen;