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
          left: child.offsetLeft,
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
      {/* Slider container with left padding and swipe handlers */}
      <div {...swipeHandlers} className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth whitespace-nowrap pl-8 hide-scrollbar"
        >
          {cards.map((card) => (
            <div key={card.id} className="inline-block flex-shrink-0 mr-10">
              {/* Card with fixed dimensions */}
              <div className="relative w-[320px] h-[540px] rounded-[2rem] overflow-hidden shadow-lg">
                {/* Image area: fixed height of 480px */}
                <div className="relative w-full h-[480px]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />
                  {/* Add the gradient overlay above the image - taller now */}
                  <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-10" />
                </div>
                {/* Bottom area: 60px tall black background */}
                <div className="relative h-[60px] bg-black ">
                  {/* Text overlay in the black area with z-index to ensure it's on top */}
                  <div className="absolute bottom-0 left-0 w-full p-2 pl-6 pb-4 z-20">
                    <p className="text-[20px] inter700 text-white">{card.name}</p>
                    <div className="flex justify-between items-center">
                      <div className="bg-gradient-to-r from-[#0B3E27] to-[#047A43] text-white text-xs font-semibold py-1 px-2 rounded-full shadow-md inline-block">
                        {card.role}
                      </div>
                      <a href={card.video} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/Arrow Diagonal White.svg"
                        alt="Arrow Icon"
                        className="w-10 h-10 transform transition-transform duration-300 group-hover:-translate-y-1.5"
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
      <div className="flex justify-between items-center mt-8">
        <div className="w-[36.75rem]">
          <div className="h-3 bg-[#2D2D2D] rounded-full">
            <div
              className="h-3 bg-gradient-to-r from-[#0B4028] to-[#2B543F] rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex gap-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-[#505050] rounded-lg p-4 cursor-pointer disabled:opacity-50"
          >
            <img
              src="/Arrow.svg"
              alt="Prev"
              className="w-8 h-8 rotate-180 pointer-events-none select-none"
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className="bg-[#505050] rounded-lg p-4 cursor-pointer disabled:opacity-50"
          >
            <img
              src="Arrow.svg"
              alt="Next"
              className="w-8 h-8 pointer-events-none select-none"
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