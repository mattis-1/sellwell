"use client";

import { useRef, useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "@/modules/karriere-lp/components/button"

// Define types for the component props
interface CleanYouTubeEmbedProps {
  videoId: string;
  onPlay: () => void;
  isActive: boolean;
}

// Optimized YouTube Embed component
const CleanYouTubeEmbed: React.FC<CleanYouTubeEmbedProps> = ({ videoId, onPlay, isActive }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [thumbnailError, setThumbnailError] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Reset playing state when slide changes
  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);
  
  // YouTube thumbnail URLs with fallback strategy
  const highResThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  
  // Handle play video
  const playVideo = () => {
    setIsPlaying(true);
    onPlay();
  };
  
  return (
    <div 
      className="w-full h-full relative overflow-hidden rounded-xl shadow-lg"
      style={{ aspectRatio: "16/9" }}
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          // Thumbnail with enhanced play button
          <motion.div 
            key="thumbnail"
            className="absolute inset-0 cursor-pointer group"
            onClick={playVideo}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <Image 
              src={thumbnailError ? fallbackThumbnail : highResThumbnail}
              alt="Video thumbnail"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              onError={() => setThumbnailError(true)}
              priority={isActive}
              loading={isActive ? "eager" : "lazy"}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-[#246551]/90 w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
            </motion.div>
          </motion.div>
        ) : (
          // Optimized YouTube embed
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Testimonial type
interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  videoId: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
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
  const [isVisible, setIsVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Simplified touch handling using callback approach
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }, [])
  
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX === null) return
    
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        setActiveSlide(prev => prev === testimonials.length - 1 ? 0 : prev + 1)
      } else {
        // Swipe right
        setActiveSlide(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
      }
    }
    
    setTouchStartX(null)
  }, [touchStartX])

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after activation for better performance
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index)
  }, [])
  
  const nextSlide = useCallback(() => {
    setActiveSlide(prev => (prev + 1) % testimonials.length)
  }, [])
  
  const prevSlide = useCallback(() => {
    setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Handle video play event
  const handleVideoPlay = useCallback(() => {
    // Additional actions when video plays (if needed)
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`sellwell-section py-16 relative transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Optional background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#246551]/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#246551]/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="sellwell-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
         
          <h2 className="text-[30px] leading-[35px] tracking-[-1.4px] font-bold text-center mt-10">
            Das sagt unser Team
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)`, height: "auto" }}
            >
              <div className="flex">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-1">
                    <div className="testimonial-container">
                      {/* Video */}
                      <CleanYouTubeEmbed 
                        videoId={testimonial.videoId} 
                        onPlay={handleVideoPlay}
                        isActive={activeSlide === idx}
                      />
                      
                      {/* Person info - removed background and shadow */}
                      <motion.div 
                        className="flex items-center mt-4 p-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 border-2 border-[#246551]/20">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23246551'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='system-ui' fontSize='24' fill='white'%3E${testimonial.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(36, 101, 81, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white/80 shadow-md text-[#246551] hover:text-[#246551] transition-colors focus:outline-none focus:ring-2 focus:ring-[#246551]/50"
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index 
                      ? "bg-[#246551] w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Gehe zu Testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(36, 101, 81, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white/80 shadow-md text-[#246551] hover:text-[#246551] transition-colors focus:outline-none focus:ring-2 focus:ring-[#246551]/50"
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="#formular">
              <Button>Jetzt durchstarten</Button>
              <p className="subbtnt mt-2">In unter 60 Sekunden bewerben</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}