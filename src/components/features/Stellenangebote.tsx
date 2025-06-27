import React from 'react';
import { Check, MapPin, Briefcase } from 'lucide-react';

const Stellenangebote = () => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.125)',
    position: 'relative',
    borderRadius: '45px',
  };

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
      title: "Teamleiter eines Vertriebteams",
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
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Aktuelle Stellenangebote
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="relative group transition-all h-full test-perfect-shadow">
              <div 
                className="rounded-3xl p-7 px-8 h-full flex flex-col" 
                style={cardStyle}
              >
                <div style={backgroundImageStyle}></div>
                <div style={gradientOverlayStyle}></div>
                
                {/* Job Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-1 relative z-10">
                  {job.title}
                </h3>
                <span className="text-sm text-gray-600 mb-6 relative z-10">(m/w/d)</span>
                
                <div className="mb-6 flex-grow relative z-10">
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#7BF3A4] flex items-center justify-center mr-3 mt-1">
                          <Check size={12} className="text-black" />
                        </span>
                        <span className="text-gray-700 text-base leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center mb-6 text-sm text-gray-600 relative z-10">
                  <div className="flex items-center mr-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                </div>
                <a href="/karriere">
                <button className="sellwell-btn-secondary w-full relative z-10">
                  JETZT BEWERBEN
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stellenangebote; 