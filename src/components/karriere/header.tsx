"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=120&text=SELLWELL"
              alt="Sellwell Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium hover:text-[#179F49] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-[#179F49] transition-colors">
              Über uns
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-[#179F49] transition-colors">
              Vorteile
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#179F49] transition-colors">
              Mitarbeiter
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-[#179F49] transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button (Mobile & Desktop) */}
          <Button className="green-gradient text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:opacity-90">
            BEWERBEN
          </Button>
        </div>
      </div>
    </header>
  )
}
