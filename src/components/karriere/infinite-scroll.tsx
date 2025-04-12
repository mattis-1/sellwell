"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function InfiniteScroll() {
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  // Sample image data - replace with actual images
  const images1 = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=80&width=160&text=Partner${i + 1}`,
    alt: `Partner ${i + 1}`,
  }))

  const images2 = Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    src: `/placeholder.svg?height=80&width=160&text=Client${i + 1}`,
    alt: `Client ${i + 1}`,
  }))

  useEffect(() => {
    const scroll1 = scrollRef1.current
    const scroll2 = scrollRef2.current

    if (!scroll1 || !scroll2) return

    // Clone the first set of items for seamless scrolling
    const cloneItems = () => {
      const items1 = Array.from(scroll1.children)
      const items2 = Array.from(scroll2.children)

      items1.forEach((item) => {
        const clone = item.cloneNode(true)
        scroll1.appendChild(clone)
      })

      items2.forEach((item) => {
        const clone = item.cloneNode(true)
        scroll2.appendChild(clone)
      })
    }

    cloneItems()

    // Animation for first row (left to right)
    let scrollPos1 = 0
    const scrollSpeed1 = 0.5

    // Animation for second row (right to left)
    let scrollPos2 = 0
    const scrollSpeed2 = 0.5

    const animate = () => {
      if (scroll1 && scroll2) {
        scrollPos1 += scrollSpeed1
        scrollPos2 += scrollSpeed2

        // Reset position when scrolled half way
        if (scrollPos1 >= scroll1.firstElementChild?.clientWidth! * images1.length) {
          scrollPos1 = 0
        }

        if (scrollPos2 >= scroll2.firstElementChild?.clientWidth! * images2.length) {
          scrollPos2 = 0
        }

        scroll1.style.transform = `translateX(-${scrollPos1}px)`
        scroll2.style.transform = `translateX(${scrollPos2}px)`
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [images1.length, images2.length])

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Partner & Kunden</h2>

        {/* First row - left to right */}
        <div className="mb-12 overflow-hidden">
          <div ref={scrollRef1} className="flex items-center gap-8 py-4" style={{ width: "fit-content" }}>
            {images1.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-[160px]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  width={160}
                  height={80}
                  alt={image.alt}
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - right to left */}
        <div className="overflow-hidden">
          <div ref={scrollRef2} className="flex items-center gap-8 py-4" style={{ width: "fit-content" }}>
            {images2.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-[160px]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  width={160}
                  height={80}
                  alt={image.alt}
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
