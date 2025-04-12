"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "Wie läuft der Bewerbungsprozess ab?",
      answer:
        "Unser Bewerbungsprozess besteht aus mehreren Schritten: Zunächst reichen Sie Ihre Bewerbungsunterlagen ein, anschließend führen wir ein erstes Telefon- oder Videointerview. Bei gegenseitigem Interesse folgt ein persönliches Gespräch, bevor wir Ihnen ein Angebot unterbreiten.",
    },
    {
      question: "Welche Weiterbildungsmöglichkeiten bieten Sie an?",
      answer:
        "Wir bieten eine Vielzahl an Weiterbildungsmöglichkeiten, darunter fachspezifische Schulungen, Soft-Skill-Trainings, Sprachkurse und Führungskräfteentwicklung. Zudem unterstützen wir externe Zertifizierungen und berufsbegleitende Studiengänge.",
    },
    {
      question: "Gibt es flexible Arbeitszeitmodelle?",
      answer:
        "Ja, wir bieten verschiedene flexible Arbeitszeitmodelle an, darunter Gleitzeit, Teilzeitoptionen und die Möglichkeit zum mobilen Arbeiten. Die genauen Modelle variieren je nach Position und Abteilung.",
    },
    {
      question: "Wie unterstützen Sie die Work-Life-Balance?",
      answer:
        "Wir fördern eine gesunde Work-Life-Balance durch flexible Arbeitszeiten, Homeoffice-Möglichkeiten, Gesundheitsprogramme, Teamevents und eine familienfreundliche Unternehmenskultur.",
    },
    {
      question: "Welche Karrieremöglichkeiten gibt es im Unternehmen?",
      answer:
        "Wir bieten sowohl vertikale als auch horizontale Karrierepfade. Sie können sich in Ihrer Fachdisziplin spezialisieren oder Führungsverantwortung übernehmen. Regelmäßige Entwicklungsgespräche helfen dabei, Ihre individuellen Karriereziele zu definieren und zu verfolgen.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Häufig gestellte Fragen</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hier finden Sie Antworten auf die am häufigsten gestellten Fragen. Falls Sie weitere Fragen haben,
          kontaktieren Sie uns gerne.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
