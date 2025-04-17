// app/cookie-richtlinie/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header";
import {
  Cookie,
  ShieldCheck,
  Settings,
  AlertTriangle,
  FileText,
  Check,
  
  Info,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie | Sellwell GmbH',
  description: 'Informationen zur Verwendung von Cookies und ähnlichen Technologien auf der Website der Sellwell GmbH',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <div className="container max-w-4xl py-16 px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r from-[#184639] to-[#2F8267] bg-clip-text text-transparent text-[50px] font-[800] tracking-tight">
            Cookie-Richtlinie
          </h1>
          <p className="text-[20px] text-muted-foreground mt-2 mb-[-40px]">
            Informationen zur Verwendung von Cookies
          </p>
        </div>

        <Card className="border-none shadow-md">
          <CardContent className="p-6 sm:p-8">
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Was sind Cookies?
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Cookies sind kleine Textdateien, die auf Ihrem Computer, Tablet oder Smartphone gespeichert werden, wenn Sie eine Website besuchen. Cookies werden verwendet, um Websites effizienter funktionieren zu lassen und den Websitebetreibern Informationen bereitzustellen.
                  </p>
                  <p className="text-muted-foreground">
                    Cookies ermöglichen es uns, Ihre Präferenzen zu speichern, Ihnen eine bessere Nutzererfahrung zu bieten und zu verstehen, wie Besucher unsere Website nutzen, damit wir diese verbessern können.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Arten von Cookies, die wir verwenden
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Notwendige Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies sind für das Funktionieren unserer Website unerlässlich und können in unseren Systemen nicht abgeschaltet werden. Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden oder dem Ausfüllen von Formularen.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Sie können Ihren Browser so einstellen, dass er diese Cookies blockiert oder Sie über diese Cookies informiert, aber einige Teile der Website werden dann nicht funktionieren. Diese Cookies speichern keine persönlich identifizierbaren Informationen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Funktionale Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten eingebunden haben.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht einwandfrei.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Analyse- und Leistungs-Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten am beliebtesten und welche am wenigsten beliebt sind, und zu sehen, wie sich Besucher auf der Website bewegen.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Alle Informationen, die diese Cookies sammeln, werden aggregiert und sind daher anonym. Wenn Sie diese Cookies nicht zulassen, wissen wir nicht, wann Sie unsere Website besucht haben, und können die Leistung nicht überwachen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-2">Marketing- und Targeting-Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Werbung auf anderen Websites zu zeigen.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Sie speichern nicht direkt persönliche Daten, basieren jedoch auf der einzigartigen Identifizierung Ihres Browsers und Internet-Geräts. Wenn Sie diese Cookies nicht zulassen, werden Sie weniger gezielte Werbung erleben.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Dazu gehört auch Facebook Pixel, das wir verwenden, um die Wirksamkeit unserer Werbekampagnen zu messen und Ihnen relevantere Anzeigen auf Facebook und anderen Plattformen anzuzeigen.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Steuerung und Löschung von Cookies
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <ShieldCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Die meisten Webbrowser erlauben eine gewisse Kontrolle der meisten Cookies über die Browsereinstellungen. Sie können Ihre Browser-Einstellungen so anpassen, dass Cookies blockiert oder gelöscht werden, wenn Sie dies wünschen. Detaillierte Informationen zum Umgang mit Cookies finden Sie in den Einstellungen Ihres Browsers.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Bitte beachten Sie, dass das Einschränken von Cookies Auswirkungen auf die Funktionalität dieser und vieler anderer Websites haben kann, die Sie besuchen. Das Deaktivieren von Cookies führt in der Regel auch dazu, dass bestimmte Funktionen und Merkmale dieser Website deaktiviert werden.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Nachfolgend finden Sie Links zu Anleitungen zum Verwalten von Cookies in gängigen Browsern:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground mb-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                    <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  </ul>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Einwilligung
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Wenn Sie unsere Website zum ersten Mal besuchen, werden Sie aufgefordert, Ihre Einwilligung für die verschiedenen Kategorien von Cookies zu erteilen. Sie können Ihre Wahl jederzeit über unseren Cookie-Banner ändern.
                  </p>
                  <p className="text-muted-foreground">
                    Für notwendige Cookies benötigen wir keine Einwilligung, da sie für das grundlegende Funktionieren der Website erforderlich sind.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Rechtsgrundlage
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Unser berechtigtes Interesse besteht darin, die Funktionalität unserer Website sicherzustellen.
                  </p>
                  <p className="text-muted-foreground">
                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies zu Analyse- und Marketingzwecken ist bei Vorliegen einer entsprechenden Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>
              </div>
            </section>
            
            <Separator className="my-8" />
            
            <section>
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary inline-block">
                Aktualität und Änderungen
              </h2>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookie-Richtlinie ist aktuell gültig und hat den Stand April 2025.
                  </p>
                  <p className="text-muted-foreground">
                    Aufgrund der Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Cookie-Richtlinie zu ändern. Die jeweils aktuelle Cookie-Richtlinie kann jederzeit auf dieser Website abgerufen und ausgedruckt werden.
                  </p>
                </div>
              </div>
            </section>
            
          </CardContent>
        </Card>
      </div>
    </>
  );
}