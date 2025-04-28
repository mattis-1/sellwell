"use client";

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "@/modules/karriere-lp/components/button"

// Define types for the component props
interface CleanYouTubeEmbedProps {
  videoId: string;
}

// Clean YouTube Embed component
const CleanYouTubeEmbed: React.FC<CleanYouTubeEmbedProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [thumbnailError, setThumbnailError] = useState<boolean>(false);
  
  // YouTube thumbnail URLs - we'll try maxresdefault first (highest quality)
  const highResThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  // Fallback to hqdefault if maxresdefault is not available
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  
  // Handle thumbnail load error (switch to fallback)
  const handleThumbnailError = () => {
    setThumbnailError(true);
  };
  
  // Play the video when thumbnail is clicked
  const playVideo = () => {
    setIsPlaying(true);
  };
  
  return (
    <div 
      className="w-full h-full relative overflow-hidden rounded-lg cursor-pointer"
      onClick={!isPlaying ? playVideo : undefined}
      style={{ cursor: isPlaying ? 'default' : 'pointer' }}
    >
      {!isPlaying ? (
        // Thumbnail with play button overlay
        <>
          <Image 
            src={thumbnailError ? fallbackThumbnail : highResThumbnail}
            alt="Video thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            onError={handleThumbnailError}
            priority
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-16 h-12 bg-black/70 rounded-lg flex justify-center items-center
                      transition-all hover:bg-black/90 hover:scale-105"
          >
            <div 
              className="w-0 h-0 border-t-[10px] border-t-transparent 
                        border-b-[10px] border-b-transparent
                        border-l-[16px] border-l-white ml-1"
            />
          </div>
        </>
      ) : (
        // Actual YouTube embed (only loaded after clicking)
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full absolute inset-0"
        />
      )}
    </div>
  );
};

// Update testimonials to reference YouTube video IDs instead of local MP4s
const testimonials = [
  {
    name: "Marco Sandrisser",
    role: "TEAMLEITER",
    avatar: "/Marco-1x1.png",
    videoId: "Jua9evvcsdE",
  },
  {
    name: "Chris Marquardt",
    role: "VERTRIEBLER",
    avatar: "/Chris-1x1.png",
    videoId: "tUgM4kCF7rU",
  },
  {
    name: "Stefan Sonderholzer",
    role: "VERTRIEBLER & AUSBILDENDER",
    avatar: "/Stefan-1x1.png",
    videoId: "o01oAhTevzM",
  },
]

export default function SellwellTestimonials() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const nextSlide = () => setActiveSlide(prev => prev === testimonials.length - 1 ? 0 : prev + 1)
  const prevSlide = () => setActiveSlide(prev => prev === 0 ? testimonials.length - 1 : prev - 1)

  const minSwipeDistance = 50
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) nextSlide()
    else if (distance < -minSwipeDistance) prevSlide()
  }

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section transition-all duration-1000 ${isIntersecting ? "opacity-100" : "opacity-0"}`}
    >
      <div className="sellwell-container">
      <div className="flex justify-center mb-3">
          <div className="bg-[#18473A] text-[#fff] rounded-full px-4 py-1 inline-block">
            <span className="font-[500] text-sm tracking-wide">MEINUNG DES TEAMS</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Das sagt <span className="special-text">unser Team</span></h2>

        <div className="relative w-screen -mx-[calc(50vw-50%)]">
          <div className="bg-[#205B49] py-12">
            <div 
              className="max-w-4xl mx-auto px-4 relative"
              ref={sliderRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-4">
                      <div className="bg-black rounded-lg overflow-hidden aspect-video mb-6">
                        {/* Replace iframe with clean YouTube embed */}
                        <CleanYouTubeEmbed videoId={t.videoId} />
                      </div>

                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                          <Image
                            src={t.avatar || "/placeholder.svg"}
                            alt={t.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f9fafb'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='24' fill='%23166534'%3E" +
                                t.name.charAt(0) +
                                "%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div className="text-white">
                          <h3 className="font-bold text-lg">{t.name}</h3>
                          <p className="text-white">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls moved to bottom near dots */}
          <div className="bg-white py-6 flex justify-center items-center space-x-2 relative">
            <button
              onClick={prevSlide}
              className="absolute left-1/4 bg-white/20 rounded-full p-2 text-black hover:bg-black transition-colors"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === index ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
            
            <button
              onClick={nextSlide}
              className="absolute right-1/4 bg-white/20 rounded-full p-2 text-black hover:bg-black transition-colors"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
        <a href="#formular"><Button>JETZT SCHNELL BEWERBEN</Button>
        <p className="text-sm text-gray-500 mt-2">Ohne Lebenslauf und Anschreiben</p></a>
        </div>
      </div>
    </section>
  )
}