"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

export default function SellwellFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-[#A6F7C2] to-[#F1FFEA] text-[#1A1A1A] py-10">
      <div className="sellwell-container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and tagline section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <p className="text-[22px] font-semibold">Sellwell Consulting</p>
            </div>
            <p className="text-[#246551] font-medium text-sm md:text-base">Wo Visionen verwirklicht werden.</p>
          </div>

          {/* Links section */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="https://sellwell-consulting.de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#246551] transition-colors text-sm md:text-base"
            >
              Impressum
            </Link>
            <Link
              href="https://sellwell-consulting.de/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#246551] transition-colors text-sm md:text-base"
            >
              Datenschutz
            </Link>
            <Link
              href="https://instagram.com/kress_maximilian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#246551] transition-colors flex items-center gap-1.5 text-sm md:text-base"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              <span>Instagram</span>
            </Link>
          </div>
        </div>

        

        {/* Copyright section */}
        <div className="text-center">
          <p className="text-[#1A1A1A99] text-sm">&copy; {currentYear} Sellwell Consulting GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}