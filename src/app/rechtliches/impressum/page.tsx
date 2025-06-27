// app/impressum/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
export const metadata: Metadata = {
  title: 'Impressum | Sellwell GmbH',
  description: 'Rechtliche Informationen und Kontaktdaten der Sellwell GmbH gemäß § 5 TMG und § 55 RStV',
};

export default function ImpressumPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F9FAFB] py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Impressum
          </h1>
          <p className="text-xl text-gray-600">
            Gemäß § 5 TMG und § 55 RStV
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Angaben zum Unternehmen
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Sellwell GmbH</h3>
                <p className="text-gray-700">
                  Leiblstraße 26<br />
                  85579 Neubiberg<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Telefon</h3>
                <p className="text-gray-700">+49 176 48732077</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">E-Mail</h3>
                <p className="text-gray-700">info@sell-well-consulting.de</p>
              </div>
            </div>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Gesetzliche Angaben
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Steuernummer</h3>
                <p className="text-gray-700">
                  Amtsgericht München<br />
                  Steuernummer: 143/179/71983
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Umsatzsteuer-Identifikationsnummer</h3>
                <p className="text-gray-700">DE363648231</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV</h3>
                <p className="text-gray-700">
                  Leonardo Basile (Geschäftsführer)<br />
                  Anschrift wie oben
                </p>
              </div>
            </div>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Geschäftsführung
            </h2>
            <p className="text-gray-700">
              Leonardo Basile<br />
              Moritz H.<br />
              Maximilian Kress
            </p>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Streitschlichtung
            </h2>
            <p className="text-gray-700 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#7BF3A4] hover:underline font-medium"
              >
                https://ec.europa.eu/consumers/odr/
              </a>{' '}
              finden.
            </p>
            <p className="text-gray-700">
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Haftungshinweise
            </h2>
            <p className="text-gray-700 mb-4">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
            <p className="text-gray-700">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}