"use client"

import Header from "@/components/features/Header";
import Footer from "@/components/features/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      {/* Main Contact Section */}
      <main className="px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Kontakt 
            </h1>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Email Card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-[15px] shadow-lg" style={{ 
                  background: 'linear-gradient(132deg, rgba(235, 255, 225, 0.8) 0%, rgba(124, 242, 165, 0.8) 100%)' 
                }}>
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Mail</h3>
              <Link
                href="mailto:info@sell-well-consulting.de" 
                className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
              >
                info@sell-well-consulting.de
              </Link>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-[15px] shadow-lg" style={{ 
                  background: 'linear-gradient(132deg, rgba(235, 255, 225, 0.8) 0%, rgba(124, 242, 165, 0.8) 100%)' 
                }}>
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Telefon</h3>
              <Link 
                href="tel:+4991158084499" 
                className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
              >
                +49 911 58084499
              </Link>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-[15px] shadow-lg">
                <MapPin className="h-8 w-8 text-gray-700" />
              </div>
            </div>
            <div className="text-lg text-gray-600 space-y-1">
              <p>Sellwell Consulting GmbH</p>
              <p>Leiblstraße 26, 85579</p>
              <p>Neubiberg bei München</p>
            </div>
          </div>

          {/* CTA Section */}
                      <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Bereit für Vertriebserfolg?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0">
                <Link href="mailto:info@sell-well-consulting.de" className="w-full sm:w-auto">
                  <button className="sellwell-btn-primary w-full sm:w-auto">
                    E-Mail senden
                  </button>
                </Link>
                <Link href="tel:+4991158084499" className="w-full sm:w-auto">
                  <button className="sellwell-btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto">
                    <span>Anrufen</span>
                    <Phone className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
