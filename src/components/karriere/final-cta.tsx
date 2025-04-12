import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#155D31]/5 to-[#179F49]/5">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="mx-auto w-20 h-20 mb-6">
          <Image
            src="/placeholder.svg?height=80&width=80&text=LOGO"
            width={80}
            height={80}
            alt="Sellwell Logo"
            className="w-full h-full"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für den nächsten Karriereschritt?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Entdecken Sie jetzt Ihre Möglichkeiten und werden Sie Teil unseres Teams. Wir freuen uns darauf, Sie
          kennenzulernen.
        </p>

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
