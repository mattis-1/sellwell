"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="w-full flex flex-col items-center px-4 py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Entdecken Sie Ihre Zukunft</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Wir bieten innovative Lösungen für Ihre berufliche Entwicklung. Starten Sie jetzt Ihre Reise mit uns.
        </p>

        {/* Video embed */}
        <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden mb-8 shadow-lg">
          {isMounted && (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Promotional Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <Button
          size="lg"
          className="green-gradient text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-all hover:shadow-lg hover:opacity-90"
        >
          JETZT BEWERBEN
        </Button>
      </div>
    </section>
  )
}
