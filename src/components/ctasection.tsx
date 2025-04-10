import React from 'react';

// Define the feature box props interface
interface FeatureBoxProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
  overlayOpacity?: number; // Opacity control for the overlay
}

// FeatureBox component for individual boxes
const FeatureBox = ({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  overlayOpacity = 0.6, // Default overlay opacity
}: FeatureBoxProps) => {
  return (
    <div 
      className="rounded-3xl p-8 flex flex-col items-start h-full relative overflow-hidden shadow-lg"
      style={{ 
        borderRadius: '25px',
        color: 'white',
        minHeight: '280px',
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      
      {/* Black Overlay with controllable opacity */}
      <div 
        className="absolute inset-0 z-10 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content - positioned above the background and overlay */}
      <div className="relative z-20 flex flex-col h-full w-full">
        <span className="text-sm font-semibold mb-2 opacity-80">{title}</span>
        <h2 className="text-3xl leading-[1.4] font-bold mb-auto">{subtitle}</h2>
        <button 
                className="inline-flex items-center inter700 px-4 py-2 text-white font-semibold rounded-full hover:opacity-90 transition w-full justify-center relative z-10"
                style={{ background: 'linear-gradient(to right, #0B4028 0%, #037942 100%)' }}
              >
                {buttonText}
              </button>
      </div>
    </div>
  );
};

const FeatureGrid = ({ overlayOpacity = 0.75 }) => {
  // Feature data
  const features = [
    {
      title: "KARRIEREMÖGLICHKEITEN",
      subtitle: "In eine bessere Zukunft mit Sellwell",
      buttonText: "JETZT BEWERBEN",
      backgroundImage: "/WILLKOMMEN.png",
    },
    {
      title: "PROJEKTPARTNER WERDEN",
      subtitle: "Verlässliche Vertriebslösungen für Unternehmen",
      buttonText: "JETZT BERATUNG SICHERN",
      backgroundImage: "/ABOUT2.png",
    },
    {
      title: "ÜBER DIE SELLWELL GMBH",
      subtitle: "Wer wir sind und was uns antreibt",
      buttonText: "MEHR ÜBER UNS",
      backgroundImage: "/Projekterfolg.png",
    },
    {
      title: "SUPPORTIVE",
      subtitle: "Nehme jetzt Kontakt mit uns auf",
      buttonText: "KONTAKT AUFNEHMEN",
      backgroundImage: "/sellwellteam.png",
    },
  ];

  return (
    <section className="max-w-[1100px] mx-auto py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              buttonText={feature.buttonText}
              backgroundImage={feature.backgroundImage}
              overlayOpacity={overlayOpacity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;