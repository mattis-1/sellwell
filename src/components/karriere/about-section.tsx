"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Sample team member data
  const teamMembers = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Team Member ${i + 1}`,
    position: ["CEO", "CTO", "Designer", "Developer", "Marketing", "HR", "Sales", "Product Manager"][i],
    image: `/placeholder.svg?height=300&width=300&text=Team${i + 1}`,
  }))

  useEffect(() => {
    const scroll = scrollRef.current

    if (!scroll) return

    // Clone the first set of items for seamless scrolling
    const cloneItems = () => {
      const items = Array.from(scroll.children)
      items.forEach((item) => {
        const clone = item.cloneNode(true)
        scroll.appendChild(clone)
      })
    }

    cloneItems()

    // Animation
    let scrollPos = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (scroll) {
        scrollPos += scrollSpeed

        // Reset position when scrolled half way
        if (scrollPos >= scroll.firstElementChild?.clientWidth! * teamMembers.length) {
          scrollPos = 0
        }

        scroll.style.transform = `translateX(-${scrollPos}px)`
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [teamMembers.length])

  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Über Sellwell</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sellwell ist ein innovatives Unternehmen mit einem dynamischen Team aus Experten verschiedener Fachbereiche.
          Gemeinsam arbeiten wir an zukunftsweisenden Lösungen für unsere Kunden.
        </p>

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex items-center gap-6 py-4" style={{ width: "fit-content" }}>
            {teamMembers.map((member) => (
              <div key={member.id} className="flex-shrink-0 w-[220px]">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={220}
                    height={220}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
