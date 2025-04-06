import React, { useState } from 'react';

const EmployeeTestimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Bei Sell Well Consulting habe ich nicht nur beruflich, sondern auch persönlich enorm wachsen können. Das Team ist unterstützend und die Karrieremöglichkeiten sind exzellent.",
      name: "Julia Becker",
      position: "Senior Vertriebsberaterin",
      duration: "Seit 3 Jahren im Team"
    },
    {
      id: 2,
      quote: "Was mir besonders gefällt, ist die Mischung aus eigenverantwortlichem Arbeiten und dem starken Teamzusammenhalt. Jeder Tag bringt neue, spannende Herausforderungen mit sich.",
      name: "Markus Weber",
      position: "Business Development Manager",
      duration: "Seit 2 Jahren im Team"
    },
    {
      id: 3,
      quote: "Die Möglichkeit, mit verschiedenen Branchen zusammenzuarbeiten und dabei von erfahrenen Kollegen zu lernen, macht diese Position besonders wertvoll für meine Karriereentwicklung.",
      name: "Sarah Müller",
      position: "Account Managerin",
      duration: "Seit 1,5 Jahren im Team"
    },
    {
      id: 4,
      quote: "Die Unternehmenskultur ist geprägt von Respekt, Innovation und ständigem Wachstum. Ich schätze besonders die regelmäßigen Weiterbildungen und den offenen Austausch.",
      name: "Thomas Schmidt",
      position: "Sales Consultant",
      duration: "Seit 4 Jahren im Team"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Testimonial section with tilted background including headline */}
      <section className="relative w-full overflow-hidden py-24 mb-20">
        {/* Extra background layer with opposite tilt - lighter gray */}
        <div className="absolute inset-0 bg-[#F6F6F6] -z-20"
             style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)' }}></div>
        
        {/* Main background - light gray */}
        <div className="absolute inset-0 bg-[#F0F0F0] -z-10"
             style={{ clipPath: 'polygon(0 12.5%, 100% 0, 100% 87.5%, 0 100%)' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Headline now inside the tilted section */}
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 pt-10 mt-5">
            Was unsere Mitarbeiter<br />zu sagen haben
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Testimonial content */}
              <div className="bg-transparent px-16 py-8 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                <div className="mb-7">5 Sterne SVG - gold & glowing hier</div>
                  {/* Quote text */}
                  <p className="text-lg md:text-xl text-black text-center w-2/3 mx-auto leading-relaxed mb-10">
                    {testimonials[currentIndex].quote}
                  </p>
                  
                  <div className="flex items-center justify-center mb-10">
                    {/* Dark green background for initial with mask capability */}
                    <div className="relative w-12 h-12 rounded-full bg-[#0B3E27] flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                      {testimonials[currentIndex].name.charAt(0)}
                      {/* This div acts as mask for potential SVG replacement */}
                      <div className="absolute inset-0 rounded-full overflow-hidden"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-black">
                        {testimonials[currentIndex].name}
                      </h4>
                      <div className="text-sm text-black/80">
                        <p>{testimonials[currentIndex].position}</p>
                        <p>{testimonials[currentIndex].duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gradient button with bottom-oriented glow effect */}
                  <button 
                    className="mt-4 inline-flex items-center px-6 py-3 text-white font-semibold rounded-full transition-all
                    bg-gradient-to-r from-[#0B3E27] to-[#047A43] 
                    shadow-[0_4px_12px_-2px_rgba(4,122,67,0.5)] 
                    hover:shadow-[0_6px_16px_-2px_rgba(4,122,67,0.7)]"
                  >
                    Jetzt bewerben
                  </button>
                </div>
              </div>
              
              {/* Left arrow - positioned higher */}
              <button 
                onClick={handlePrevious}
                className="absolute left-3 top-1/4 -translate-y-1/2 z-30 rounded-full p-2 transition-all
                bg-gradient-to-r from-[#0B3E27] to-[#047A43] 
                shadow-[0_2px_8px_-1px_rgba(4,122,67,0.4)] 
                hover:shadow-[0_3px_12px_-1px_rgba(4,122,67,0.6)]"
                aria-label="Vorheriges Testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Right arrow - positioned higher */}
              <button 
                onClick={handleNext}
                className="absolute right-3 top-1/4 -translate-y-1/2 z-30 rounded-full p-2 transition-all
                bg-gradient-to-r from-[#0B3E27] to-[#047A43] 
                shadow-[0_2px_8px_-1px_rgba(4,122,67,0.4)] 
                hover:shadow-[0_3px_12px_-1px_rgba(4,122,67,0.6)]"
                aria-label="Nächstes Testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dots indicator*/} 
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index 
                      ? 'bg-[#047A43]' 
                      : 'bg-[#047A43]/40'
                  }`}
                  aria-label={`Gehe zu Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeTestimonials;