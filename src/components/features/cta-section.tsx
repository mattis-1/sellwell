import { ArrowRight, ArrowUpRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-10 sm:py-20 bg-[#FAFAFA]">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-[40px] md:text-[55px] font-bold tracking-tight text-gray-900 mb-3">
          Bereit für mehr?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
        Starte in deine neue Zukunft mit Sellwell. Auch als Quereinsteiger kannst du bei uns dank individueller Unterstützung und einem positiven Arbeitsumfeld in Kürze aufsteigen und richtig Karriere machen.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-y-3 md:gap-y-6 sm:flex-row sm:gap-x-6 sm:gap-y-0">
          <a href="/karriere">
          <button
            className="sellwell-btn-primary w-full sm:w-auto justify-center flex flex-row items-center gap-2"
          >
            <div>Jetzt Bewerben</div>
            <ArrowUpRight className="h-4 w-4"/>
          </button>
          </a>
          <a href="/kontakt">
          <button
            className="sellwell-btn-secondary flex flex-row items-center justify-center gap-2 w-full sm:w-auto"
          >
            <div>Projekt Anfragen</div>
            <ArrowUpRight className="h-4 w-4"/>
          </button>
          </a>
        </div>
      </div>
    </section>
  )
}
