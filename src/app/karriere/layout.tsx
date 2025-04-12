import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./karriere-styles.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Karriere bei Sellwell",
  description: "Entdecken Sie Ihre berufliche Zukunft mit Sellwell",
}

export default function KarriereLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
