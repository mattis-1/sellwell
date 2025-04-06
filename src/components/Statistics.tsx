import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, BarChart } from 'lucide-react';

const Statistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    revenue: 0
  });
  
  const targetValues = {
    projects: 299,
    clients: 5000,
    years: 30,
    revenue: 9000
  };
  
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCounters();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000; // Animation duration in ms
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      } else {
        setCounters({
          projects: Math.floor(progress * targetValues.projects),
          clients: Math.floor(progress * targetValues.clients),
          years: Math.floor(progress * targetValues.years),
          revenue: Math.floor(progress * targetValues.revenue)
        });
      }
    }, interval);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-15 bg-[#0B3E27] text-white mt-20 mb-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="headrrr leading-10 text-center mb-3">
          Echte Ergebnisse.<br />Messbare Ergebnisse. 
        </h2>
        
        <div className="grid grid-cols-1 py-3 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-30">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="inter700 text-5xl font-bold mb-2">{counters.projects}</div>
            <p className="text-center opacity-80">Erfolgreiche Projekte</p>
          </div>
          
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="inter700 text-5xl mb-2">{counters.clients}</div>
            <p className="text-center opacity-80">Zufriedene Kunden</p>
          </div>
          
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="inter700 text-5xl mb-2">{counters.years}</div>
            <p className="text-center opacity-80">Jahre Erfahrung</p>
          </div>

{/* Stat 4 */}
<div className="flex flex-col items-center">
            <div className="text-5xl font-bold mb-2">{counters.revenue}</div>
            <p className="text-center opacity-80">Jahre Erfahrung</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Statistics;