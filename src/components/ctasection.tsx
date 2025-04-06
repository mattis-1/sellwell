import React from 'react';

const FeatureGrid = () => {
  return (
    <section className="max-w-[1100px] mx-auto py-16 bg-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Container 1 */}
          <div 
            className="rounded-3xl p-8 flex flex-col items-start"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0B4129, #0B502F)',
              borderRadius: '25px',
              color: 'white'
            }}
          >
            <span className="text-sm font-semibold mb-2 opacity-80">KARRIEREMÖGLICHKEITEN</span>
            <h2 className="text-3xl leading-[1.4] font-bold  mb-18">In eine bessere Zukunft<br />mit Sellwell</h2>
            <button className="mt-auto px-6 py-2 rounded-lg font-medium text-gray-800" 
              style={{ 
                background: 'linear-gradient(to right, #C0C0C0, #E8E8E8)', 
              }}
            >
              Learn More
            </button>
          </div>

          {/* Container 2 */}
          <div 
            className="rounded-3xl p-8 flex flex-col items-start"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0B4129, #0B502F)',
              borderRadius: '25px',
              color: 'white'
            }}
          >
            <span className="text-sm font-semibold mb-2 opacity-80">PROJEKTPARTNER WERDEN</span>
            <h2 className="text-3xl leading-[1.4] font-bold  mb-18">Verlässliche Vertriebslösungen<br />für Unternehmen</h2>
            <button className="mt-auto px-6 py-2 rounded-lg font-medium text-gray-800" 
              style={{ 
                background: 'linear-gradient(to right, #C0C0C0, #E8E8E8)', 
              }}
            >
              Discover
            </button>
          </div>

          {/* Container 3 */}
          <div 
            className="rounded-3xl p-8 flex flex-col items-start"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0B4129, #0B502F)',
              borderRadius: '25px',
              color: 'white'
            }}
          >
            <span className="text-sm font-semibold mb-2 opacity-80">ÜBER DIE SELLWELL GMBH</span>
            <h2 className="text-3xl font-bold leading-[1.4]  mb-18">Wer wir sind und<br />was uns antreibt</h2>
            <button className="mt-auto px-6 py-2 rounded-lg font-medium text-gray-800" 
              style={{ 
                background: 'linear-gradient(to right, #C0C0C0, #E8E8E8)', 
              }}
            >
              Explore
            </button>
          </div>

          {/* Container 4 */}
          <div 
            className="rounded-3xl p-8 flex flex-col items-start"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0B4129, #0B502F)',
              borderRadius: '25px',
              color: 'white'
            }}
          >
            <span className="text-sm font-semibold mb-2 opacity-80">SUPPORTIVE</span>
            <h2 className="text-3xl leading-[1.4] font-bold mb-18">Nehme jetzt Kontakt<br />mit uns auf</h2>
            <button className="mt-auto px-6 py-2 rounded-lg font-medium text-gray-800" 
              style={{ 
                background: 'linear-gradient(to right, #C0C0C0, #E8E8E8)', 
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;