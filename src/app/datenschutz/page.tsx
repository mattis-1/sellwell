// app/datenschutz/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";
import Footer from "@/components/footer"
import {
  ShieldCheck,
  FileText,
  Lock,
  Cookie,
  UserCheck,
  AlertTriangle,
  Database,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Sellwell GmbH',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten durch die Sellwell GmbH gemäß DSGVO',
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <div className="container max-w-4xl py-16 px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r from-[#184639] to-[#2F8267] bg-clip-text text-transparent text-[50px] font-[800] tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-[20px] text-muted-foreground mt-2 mb-[-40px]">
            gemäß der Datenschutz-Grundverordnung (DSGVO)
          </p>
        </div>

        <Card className="border-none shadow-md">
          <CardContent className="p-6 sm:p-8">
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Verantwortliche Stelle
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <ShieldCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sellwell GmbH</p>
                  <p className="text-muted-foreground">
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <span className="font-medium">E-Mail:</span> info@sell-well-consulting.de<br />
                    <span className="font-medium">Telefon:</span> +49 123 456789-0
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Datenschutzbeauftragter
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <UserCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    Bei Fragen zum Datenschutz können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden:
                  </p>
                  <p className="mt-2">
                    Max Mustermann<br />
                    c/o Sellwell GmbH<br />
                    Musterstraße 123<br />
                    12345 Musterstadt
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <span className="font-medium">E-Mail:</span> datenschutz@sell-well-consulting.de
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Grundsätzliches zur Datenverarbeitung
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
                  </p>
                  <p className="text-muted-foreground">
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. a DSGVO, soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen. Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich sind, ist Art. 6 Abs. 1 lit. b DSGVO Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Datenerfassung auf unserer Website
              </h2>
              
              <div className="flex items-start gap-3 mb-6">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Server-Log-Dateien</h3>
                  <p className="text-muted-foreground mb-4">
                    Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Informationen über den Browsertyp und die verwendete Version</li>
                    <li>Das Betriebssystem des Nutzers</li>
                    <li>Den Internet-Service-Provider des Nutzers</li>
                    <li>Die IP-Adresse des Nutzers</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Cookies und Tracking</h3>
                  <p className="text-muted-foreground mb-4">
                    Unsere Website verwendet Cookies. Cookies sind Textdateien, die über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten und grundlegende Seitenanalysen durchzuführen.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Für Analysen und Marketingzwecke verwenden wir unter anderem Facebook Pixel. Diese ermöglichen es uns, die Nutzung unserer Website zu analysieren und unsere Angebote besser auf Ihre Interessen abzustimmen. 
                  </p>
                  <p className="text-muted-foreground">
                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von technisch notwendigen Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies zu Analysezwecken ist bei Vorliegen einer entsprechenden Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Kontaktmöglichkeiten und Formulare</h3>
                  <p className="text-muted-foreground mb-4">
                    Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
                  </p>
                  <p className="text-muted-foreground">
                    Die Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail oder über ein Kontaktformular übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt oder das Kontaktformular auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Ihre Rechte
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <Lock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung oder Löschung (Art. 16, 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  </ul>
                  <p className="text-muted-foreground mb-4">
                    Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025.
                  </p>
                  <p className="text-muted-foreground">
                    Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website von Ihnen abgerufen und ausgedruckt werden.
                  </p>
                </div>
              </div>
            </section>
            
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
    
  );
}