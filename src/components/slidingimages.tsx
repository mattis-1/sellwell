import React from 'react';

const Imgslider = () => {
  return (
    <section className="w-full py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto" style={{ width: '80%' }}>
        {/* Image slider container */}
        <div className="w-full relative overflow-hidden">
          <div className="image-slider-container relative">
            {/* First set of images */}
            <div className="image-slider flex animate-scroll">
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-blue-200 flex items-center justify-center">
                  {/* Auskommentiertes Bild - entferne die Kommentare, wenn die Bilder verfügbar sind
                  <img 
                    src="/pfad/zum/bild1.jpg" 
                    alt="Bild 1" 
                    className="w-full h-full object-cover"
                  />
                  */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">Bild 1</div>
                    <div className="text-sm text-blue-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-green-200 flex items-center justify-center">
                  {/* Auskommentiertes Bild - entferne die Kommentare, wenn die Bilder verfügbar sind
                  <img 
                    src="/pfad/zum/bild2.jpg" 
                    alt="Bild 2" 
                    className="w-full h-full object-cover"
                  />
                  */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">Bild 2</div>
                    <div className="text-sm text-green-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-amber-200 flex items-center justify-center">
                  {/* Auskommentiertes Bild - entferne die Kommentare, wenn die Bilder verfügbar sind
                  <img 
                    src="/pfad/zum/bild3.jpg" 
                    alt="Bild 3" 
                    className="w-full h-full object-cover"
                  />
                  */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600 mb-2">Bild 3</div>
                    <div className="text-sm text-amber-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-purple-200 flex items-center justify-center">
                  {/* Auskommentiertes Bild - entferne die Kommentare, wenn die Bilder verfügbar sind
                  <img 
                    src="/pfad/zum/bild4.jpg" 
                    alt="Bild 4" 
                    className="w-full h-full object-cover"
                  />
                  */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">Bild 4</div>
                    <div className="text-sm text-purple-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-red-200 flex items-center justify-center">
                  {/* Auskommentiertes Bild - entferne die Kommentare, wenn die Bilder verfügbar sind
                  <img 
                    src="/pfad/zum/bild5.jpg" 
                    alt="Bild 5" 
                    className="w-full h-full object-cover"
                  />
                  */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">Bild 5</div>
                    <div className="text-sm text-red-800">500 × 350</div>
                  </div>
                </div>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">Bild 1</div>
                    <div className="text-sm text-blue-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">Bild 2</div>
                    <div className="text-sm text-green-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-amber-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600 mb-2">Bild 3</div>
                    <div className="text-sm text-amber-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">Bild 4</div>
                    <div className="text-sm text-purple-800">500 × 350</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 p-2">
                <div className="h-64 w-96 rounded-lg overflow-hidden mx-4 bg-red-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">Bild 5</div>
                    <div className="text-sm text-red-800">500 × 350</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gradient overlays for fading effect */}
            <div className="absolute top-0 left-0 h-full w-32 pointer-events-none" 
              style={{ 
                background: 'linear-gradient(to right, white, transparent)' 
              }}
            ></div>
            <div className="absolute top-0 right-0 h-full w-32 pointer-events-none" 
              style={{ 
                background: 'linear-gradient(to left, white, transparent)' 
              }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        .image-slider {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Imgslider;