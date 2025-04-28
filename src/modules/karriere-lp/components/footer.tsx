import Link from "next/link"
import { Instagram } from "lucide-react"

export default function SellwellFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-[#1395C0] to-[#53B2D8] text-white py-12">
      <div className="sellwell-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-[25px] font-bold text-center">Sellwell Consulting GmbH</p>
            <p className="text-gray-100 mt-1 text-center text-lg">Wo Visionen verwirklicht werden.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <Link
              href="https://sellwell-consulting.de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="https://sellwell-consulting.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="https://instagram.com/kress_maximilian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 mx-10 text-center text-gray-100">
          <p>&copy; {currentYear} Sellwell Consulting GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
