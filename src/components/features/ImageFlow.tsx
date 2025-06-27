"use client"

import Image from "next/image"

export default function ImageFlow() {
  // Array of image sources - duplicated for seamless looping
  const baseImages = [
    "/ABOUT1.png",
    "/ABOUT2.png",
    "/ABOUT3.png",
    "/ABOUT4.png",
    "/ABOUT7.png",
    "/ABOUT8.png",
  ]
  
  // Create multiple copies for seamless infinite scroll
  const images = [...baseImages, ...baseImages, ...baseImages]

  return (
    <section className="py-5 md:py-5 overflow-hidden">
      <div className="relative">
        {/* Flowing Images Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-flow">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 md:mx-3"
              >
                <Image
                  src={image}
                  alt={`Partner ${index + 1}`}
                  width={300}
                  height={200}
                  className="h-60 md:h-80 w-auto object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes flow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-flow {
          animation: flow 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
} 