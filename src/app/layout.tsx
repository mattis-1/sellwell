import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Add variable name for Inter
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Sell Well Consulting GmbH | Vertriebsberatung und Wachstum",
  description: "Dein Partner für Vertriebsberatung, Wachstum und Karrieremöglichkeiten im Vertrieb",
  keywords: "Vertriebsberatung, Vertriebslösungen, Leadgenerierung, Karriere im Vertrieb, Sell Well Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="de" 
      suppressHydrationWarning
      className={cn(inter.variable)} // Add Inter as a class to html element
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full overscroll-none",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}