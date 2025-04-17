// app/impressum/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";
import Footer from "@/components/footer"
import {
  Building,
  Phone,
  Mail,
  Globe,
  FileText,
  Scale,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Impressum | Sellwell GmbH',
  description: 'Rechtliche Informationen und Kontaktdaten der Sellwell GmbH gemäß § 5 TMG und § 55 RStV',
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <div className="container max-w-4xl py-16 px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r from-[#184639] to-[#2F8267] bg-clip-text text-transparent text-[50px] font-[800] tracking-tight">
            Impressum
          </h1>
          <p className="text-[20px] text-muted-foreground mt-2 mb-[-40px]">
            Gemäß § 5 TMG und § 55 RStV
          </p>
        </div>

        <Card className="border-none shadow-md">
          <CardContent className="p-6 sm:p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Angaben zum Unternehmen
              </h2>
              
              <div className="flex items-start gap-3 mb-6">
                <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sellwell GmbH</p>
                  <p className="text-muted-foreground">
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Telefon</p>
                  <p>+49 123 456789-0</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">E-Mail</p>
                  <p>info@sell-well-consulting.de</p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Gesetzliche Angaben
              </h2>
              
              <div className="flex items-start gap-3 mb-6">
                <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Handelsregister</p>
                  <p>
                    Amtsgericht Musterstadt<br />
                    Handelsregisternummer: HRB 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Umsatzsteuer-Identifikationsnummer</p>
                  <p>DE 123456789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <Scale className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-muted-foreground">Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV</p>
                  <p>
                    Leonardo Basile (Geschäftsführer)<br />
                    Anschrift wie oben
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Geschäftsführung
              </h2>
              <div className="flex items-start gap-3">
                <UserCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>
                  Leonardo Basile<br />
                  Moritz H.<br />
                  Maximilian Kress
                </p>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Streitschlichtung
              </h2>
              <p className="text-muted-foreground mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>{' '}
                finden.
              </p>
              <p className="text-muted-foreground">
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
              </p>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Haftungshinweise
              </h2>
              <p className="text-muted-foreground mb-4">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
              <p className="text-muted-foreground">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}