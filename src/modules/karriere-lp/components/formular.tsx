"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function ApplicationForm() {
  const [activeSection, setActiveSection] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    experience: "",
    motivation: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextSection = () => {
    if (activeSection < 4) {
      setActiveSection(activeSection + 1)
      // Scroll to form
      document.getElementById("sellwell-application-form")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Track form submission event
      if (typeof window !== "undefined") {
        // @ts-expect-error - gtag may not be defined on window
        window.gtag?.("event", "form_submission", {
          event_category: "Application",
          event_label: "Application Form Submitted",
        })
        // @ts-expect-error - fbq may not be defined on window
        window.fbq?.("track", "Lead")
      }

      // Here you would normally send the data to your backend
      console.log("Form submitted:", formData)

      // Show success message
      setActiveSection(5)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div id="sellwell-application-form" className="sellwell-card">
      <h2 className="text-2xl font-bold text-center mb-6">Jetzt bewerben</h2>
      <p className="text-center text-gray-600 mb-8">In unter 2 Minuten, ohne Lebenslauf, ohne Anschreiben</p>

      <form onSubmit={handleSubmit}>
        {/* Section 1 */}
        <div className={`sellwell-form-section ${activeSection >= 1 ? "active" : ""}`}>
          <div className="mb-4">
            <label htmlFor="name" className="sellwell-form-label">
              Vollständiger Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="sellwell-form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sellwell-form-label">
              E-Mail Adresse
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="sellwell-form-input"
              required
              aria-required="true"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="sellwell-form-label">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="sellwell-form-input"
              required
              aria-required="true"
            />
          </div>

          {activeSection === 1 && (
            <button
              type="button"
              onClick={nextSection}
              className="sellwell-btn-primary w-full flex items-center justify-center"
            >
              Weiter <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>

        {/* Section 2 */}
        <div className={`sellwell-form-section ${activeSection >= 2 ? "active" : ""}`}>
          <div className="mb-4">
            <label htmlFor="age" className="sellwell-form-label">
              Alter
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="sellwell-form-input"
              min="18"
              max="99"
              required={activeSection >= 2}
              aria-required={activeSection >= 2 ? "true" : "false"}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="location" className="sellwell-form-label">
              Wohnort
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="sellwell-form-input"
              required={activeSection >= 2}
              aria-required={activeSection >= 2 ? "true" : "false"}
            />
          </div>

          {activeSection === 2 && (
            <button
              type="button"
              onClick={nextSection}
              className="sellwell-btn-primary w-full flex items-center justify-center"
            >
              Weiter <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>

        {/* Section 3 */}
        <div className={`sellwell-form-section ${activeSection >= 3 ? "active" : ""}`}>
          <div className="mb-6">
            <label htmlFor="experience" className="sellwell-form-label">
              Hast du bereits Erfahrung im Vertrieb?
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="sellwell-form-input"
              required={activeSection >= 3}
              aria-required={activeSection >= 3 ? "true" : "false"}
            >
              <option value="">Bitte auswählen</option>
              <option value="Keine Erfahrung">Keine Erfahrung</option>
              <option value="Wenig Erfahrung">Wenig Erfahrung</option>
              <option value="Einige Erfahrung">Einige Erfahrung</option>
              <option value="Viel Erfahrung">Viel Erfahrung</option>
            </select>
          </div>

          {activeSection === 3 && (
            <button
              type="button"
              onClick={nextSection}
              className="sellwell-btn-primary w-full flex items-center justify-center"
            >
              Weiter <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>

        {/* Section 4 */}
        <div className={`sellwell-form-section ${activeSection >= 4 ? "active" : ""}`}>
          <div className="mb-6">
            <label htmlFor="motivation" className="sellwell-form-label">
              Was motiviert dich, bei uns zu arbeiten?
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              className="sellwell-form-input h-32"
              required={activeSection >= 4}
              aria-required={activeSection >= 4 ? "true" : "false"}
            ></textarea>
          </div>

          {activeSection === 4 && (
            <button type="submit" className="sellwell-btn-primary w-full flex items-center justify-center">
              Bewerbung absenden <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          )}
        </div>

        {/* Success Message */}
        <div className={`sellwell-form-section ${activeSection === 5 ? "active" : ""}`}>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Bewerbung erfolgreich gesendet!</h3>
            <p className="text-gray-600">Vielen Dank für deine Bewerbung. Wir werden uns in Kürze bei dir melden.</p>
          </div>
        </div>
      </form>
    </div>
  )
}