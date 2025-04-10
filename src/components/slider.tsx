// components/Slider.tsx
import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

interface Card {
  id: number;
  name: string;
  role: string;
  image: string;
  video: string;
}

interface SliderProps {
  cards: Card[];
}

const Slider: React.FC<SliderProps> = ({ cards }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Scroll to the active card when the index changes
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const child = container.children[currentIndex] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - (container.offsetWidth - child.offsetWidth) / 2 + (window.innerWidth < 640 ? 0 : 60),
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  // Enable swipe gestures for mobile and mouse dragging
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const progressPercentage =
    cards.length > 1 ? (currentIndex / (cards.length - 1)) * 100 : 0;

  return (
    <div className="relative">
      {/* Slider container with adaptive padding and swipe handlers */}
      <div {...swipeHandlers} className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap pl-3 sm:pl-5 md:pl-8 hide-scrollbar"
        >
          {cards.map((card) => (
            <div key={card.id} className="inline-block flex-shrink-0 mr-4 sm:mr-6 md:mr-10">
              {/* Card with responsive dimensions */}
              <div className="relative w-[280px] sm:w-[300px] md:w-[320px] h-[420px] sm:h-[480px] md:h-[540px] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg">
                {/* Image area with responsive height */}
                <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />
                  {/* Add the gradient overlay above the image - taller now */}
                  <div className="absolute bottom-0 left-0 w-full h-[140px] sm:h-[170px] md:h-[200px] bg-gradient-to-t from-black to-transparent z-10" />
                </div>
                {/* Bottom area: black background with responsive height */}
                <div className="relative h-[60px] bg-black">
                  {/* Text overlay in the black area with z-index to ensure it's on top */}
                  <div className="absolute bottom-0 left-0 w-full p-2 pl-4 sm:pl-6 pb-3 sm:pb-4 z-20">
                    <p className="text-base sm:text-lg md:text-[20px] inter700 text-white">{card.name}</p>
                    <div className="flex justify-between items-center">
                      <div className="bg-gradient-to-r from-[#0B3E27] to-[#047A43] text-white text-xs font-semibold py-1 px-2 rounded-full shadow-md inline-block">
                        {card.role}
                      </div>
                      <a href={card.video} target="_blank" rel="noopener noreferrer">
                        <img
                          src="/Arrow Diagonal White.svg"
                          alt="Arrow Icon"
                          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transform transition-transform duration-300 group-hover:-translate-y-1.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom navigation: progress bar (left) and arrow buttons (right) */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 md:mt-8 gap-4 sm:gap-0">
        <div className="w-full sm:w-[50%] md:w-[30rem] lg:w-[36.75rem]">
          <div className="h-2 sm:h-3 bg-[#2D2D2D] rounded-full">
            <div
              className="h-2 sm:h-3 bg-gradient-to-r from-[#0B4028] to-[#2B543F] rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-[#505050] rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer disabled:opacity-50"
          >
            <img
              src="/Arrow.svg"
              alt="Prev"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rotate-180 pointer-events-none select-none"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="bg-[#505050] rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer disabled:opacity-50"
          >
            <img
              src="Arrow.svg"
              alt="Next"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 pointer-events-none select-none"
            />
          </button>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Slider;