// app/datenschutz/page.tsx
import React from 'react';
import Header from '@/components/features/Header';
import { Metadata } from 'next';
import Footer from '@/components/features/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Sellwell GmbH',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten durch die Sellwell GmbH gemäß DSGVO',
};

export default function DatenschutzPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F9FAFB] py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-600">
            gemäß der Datenschutz-Grundverordnung (DSGVO)
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-12">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Verantwortliche Stelle
            </h2>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sellwell GmbH</h3>
              <p className="text-gray-700 mb-4">
                Leiblstraße 26<br />
                85579 Neubiberg<br />
                Deutschland
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">E-Mail:</span> info@sell-well-consulting.de<br />
                <span className="font-semibold">Telefon:</span> +49 176 48732077
              </p>
            </div>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Datenschutzbeauftragter
            </h2>
            <p className="text-gray-700 mb-4">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an unseren Datenschutzbeauftragten wenden:
            </p>
            <p className="text-gray-700 mb-4">
              Max Mustermann<br />
              c/o Sellwell GmbH<br />
              Leiblstraße 26<br />
              85579 Neubiberg
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">E-Mail:</span> datenschutz@sell-well-consulting.de
            </p>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Grundsätzliches zur Datenverarbeitung
            </h2>
            <p className="text-gray-700 mb-4">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
            </p>
            <p className="text-gray-700">
              Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. a DSGVO, soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen. Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich sind, ist Art. 6 Abs. 1 lit. b DSGVO Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
            </p>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Datenerfassung auf unserer Website
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
                <p className="text-gray-700 mb-4">
                  Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                  <li>Informationen über den Browsertyp und die verwendete Version</li>
                  <li>Das Betriebssystem des Nutzers</li>
                  <li>Den Internet-Service-Provider des Nutzers</li>
                  <li>Die IP-Adresse des Nutzers</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                </ul>
                <p className="text-gray-700">
                  Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies und Tracking</h3>
                <p className="text-gray-700 mb-4">
                  Unsere Website verwendet Cookies. Cookies sind Textdateien, die über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten und grundlegende Seitenanalysen durchzuführen.
                </p>
                <p className="text-gray-700 mb-4">
                  Für Analysen und Marketingzwecke verwenden wir unter anderem Facebook Pixel. Diese ermöglichen es uns, die Nutzung unserer Website zu analysieren und unsere Angebote besser auf Ihre Interessen abzustimmen.
                </p>
                <p className="text-gray-700">
                  Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von technisch notwendigen Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies zu Analysezwecken ist bei Vorliegen einer entsprechenden Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktmöglichkeiten und Formulare</h3>
                <p className="text-gray-700 mb-4">
                  Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
                </p>
                <p className="text-gray-700">
                  Die Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail oder über ein Kontaktformular übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt oder das Kontaktformular auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
                </p>
              </div>
            </div>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Ihre Rechte
            </h2>
            <p className="text-gray-700 mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung oder Löschung (Art. 16, 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="text-gray-700">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>
          
          <hr className="border-gray-200" />
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#7BF3A4]">
              Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-gray-700 mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025.
            </p>
            <p className="text-gray-700">
              Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website von Ihnen abgerufen und ausgedruckt werden.
            </p>
          </section>
          
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}