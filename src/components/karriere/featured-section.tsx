import { useId } from "react"

export default function FeaturedSection() {
  const id1 = useId()
  const id2 = useId()

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Angebote</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left container with gradient */}
          <div className="w-full md:w-1/3 rounded-xl p-8 relative overflow-hidden shadow-md min-h-[320px]">
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <linearGradient id={id1} x1="0%" y1="0%" x2="100%" y2="0%" className="md:block hidden">
                    <stop offset="0%" stopColor="rgba(21, 93, 49, 0)" />
                    <stop offset="100%" stopColor="rgba(23, 159, 73, 1)" />
                  </linearGradient>
                  <linearGradient id={`${id1}-mobile`} x1="0%" y1="0%" x2="0%" y2="100%" className="md:hidden block">
                    <stop offset="0%" stopColor="rgba(21, 93, 49, 0)" />
                    <stop offset="100%" stopColor="rgba(23, 159, 73, 1)" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id1})`} className="hidden md:block" />
                <rect width="100%" height="100%" fill={`url(#${id1}-mobile)`} className="block md:hidden" />
              </svg>
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Karriereberatung</h3>
              <p className="mb-6 text-gray-700">
                Individuelle Beratung für Ihren beruflichen Werdegang mit erfahrenen Experten.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 green-gradient rounded-full"></span>
                  <span>Persönliche Stärkenanalyse</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 green-gradient rounded-full"></span>
                  <span>Karriereplanung</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 green-gradient rounded-full"></span>
                  <span>Bewerbungscoaching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle container with solid color */}
          <div className="w-full md:w-1/3 rounded-xl p-8 relative z-10 shadow-md min-h-[320px] green-gradient">
            <div className="h-full flex flex-col text-white">
              <h3 className="text-2xl font-bold mb-4">Weiterbildung</h3>
              <p className="mb-6">Umfassende Weiterbildungsprogramme für Ihre berufliche Entwicklung.</p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Zertifizierte Kurse</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Praxisorientierte Workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Digitale Lernplattform</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right container with gradient */}
          <div className="w-full md:w-1/3 rounded-xl p-8 relative overflow-hidden shadow-md min-h-[320px]">
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <linearGradient id={id2} x1="100%" y1="0%" x2="0%" y2="0%" className="md:block hidden">
                    <stop offset="0%" stopColor="rgba(21, 93, 49, 0)" />
                    <stop offset="100%" stopColor="rgba(23, 159, 73, 1)" />
                  </linearGradient>
                  <linearGradient id={`${id2}-mobile`} x1="0%" y1="100%" x2="0%" y2="0%" className="md:hidden block">
                    <stop offset="0%" stopColor="rgba(21, 93, 49, 0)" />
                    <stop offset="100%" stopColor="rgba(23, 159, 73, 1)" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id2})`} className="hidden md:block" />
                <rect width="100%" height="100%" fill={`url(#${id2}-mobile)`} className="block md:hidden" />
              </svg>
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Jobvermittlung</h3>
              <p className="mb-6 text-gray-700">
                Professionelle Vermittlung zu passenden Arbeitgebern in Ihrer Branche.
              </p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 green-gradient rounded-full"></span>
                  <span>Zugang zu exklusiven Stellenangeboten</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 green-gradient rounded-full"></span>
                  <span>Persönliche Vermittlung</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 green-gradient rounded-full"></span>
                  <span>Langfristige Betreuung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
