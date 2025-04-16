"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image"
// Basic props interface - keeping the same interface as SimpleModal
interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'Firma' | 'Bewerber';
}

export default function SimpleModal({ isOpen, onClose, mode = 'Firma' }: SimpleModalProps) {
  // Form state from BeautifulModal
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Firma-specific state
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  
  // Bewerber-specific state
  const [salesExperience, setSalesExperience] = useState('');
  // Change from string to string[]
const [jobImportance, setJobImportance] = useState<string[]>([]);
  const [peopleContact, setPeopleContact] = useState('');
  const [driversLicense, setDriversLicense] = useState('');
  const [fitReason, setFitReason] = useState('');
  
  // Form status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Current step state - different total steps based on mode
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = mode === 'Firma' ? 4 : 7; // 4 steps for Firma, 7 for Bewerber
  
  // Animation state
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Reset animation state and form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsAnimating(false);
        // Reset form on close
        setCurrentStep(1);
        resetForm();
      }, 500);
    } else {
      setIsAnimating(true);
    }
  }, [isOpen]);

  // Reset all form fields
  const resetForm = () => {
    // Common fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    
    // Firma-specific fields
    setCompany('');
    setMessage('');
    
    // Bewerber-specific fields
    setSalesExperience('');
    setJobImportance([]); // Reset to empty array instead of empty string
    setPeopleContact('');
    setDriversLicense('');
    setFitReason('');
    
    // Reset status
    setSubmitError('');
    setSubmitSuccess(false);
    setIsSubmitting(false);
  };
  // Submit form to API
  const submitForm = async () => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Determine which endpoint to use based on mode
      const endpoint = mode === 'Firma' ? 'https://sellwell-consulting.de/api/firma' : 'https://sellwell-consulting.de/api/bewerber';
      
      // Prepare form data based on mode
      const formData = mode === 'Firma' 
        ? {
            firstName,
            lastName,
            company,
            message,
            email,
            phone
          }
        : {
            firstName,
            lastName,
            salesExperience,
            jobImportance: jobImportance.join(', '), // Join array values for API
            peopleContact,
            driversLicense,
            fitReason,
            email,
            phone
          };
      
      // Submit to API
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      // Handle success
      setSubmitSuccess(true);
      
      // Optional: close modal after successful submission
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Go to next step
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form when on last step
      submitForm();
    }
  };

  // Go to previous step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Determine if next button should be enabled for current step
  const isNextEnabled = () => {
    if (mode === 'Firma') {
      switch (currentStep) {
        case 1:
          return firstName.trim() !== '' && lastName.trim() !== '';
        case 2:
          return company.trim() !== '';
        case 3:
          return message.trim() !== '';
        case 4:
          return email.trim() !== '' && email.includes('@') && phone.trim() !== '';
        default:
          return false;
      }
    } else {
      // Bewerber mode
      switch (currentStep) {
        case 1:
          return firstName.trim() !== '' && lastName.trim() !== '';
        case 2:
          return salesExperience !== '';
        case 3:
          return jobImportance.length > 0; // Check array length instead of string
        case 4:
          return peopleContact !== '';
        case 5:
          return driversLicense !== '';
        case 6:
          return fitReason.trim() !== '';
        case 7:
          return email.trim() !== '' && email.includes('@') && phone.trim() !== '';
        default:
          return false;
      }
    }
  };
  // Next button text based on current step
  const getNextButtonText = () => {
    if (currentStep === totalSteps) {
      return 'Absenden';
    }
    return 'Weiter';
  };

  // Render step indicator
  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center space-x-2 mb-6">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index + 1 === currentStep
                ? 'bg-gradient-to-r from-[#0C462B] to-[#16a34a]'
                : index + 1 < currentStep
                ? 'bg-gray-400'
                : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  // Render current step content based on mode
  const renderStepContent = () => {
    if (mode === 'Firma') {
      // Firma-specific steps
      switch (currentStep) {
        case 1:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Wie heißt du?</h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Vorname"
                    className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                  />
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Nachname"
                    className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                  />
                </div>
              </div>
            </>
          );
        case 2:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Für welches Unternehmen arbeitest du?</h2>
              <div className="relative">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Firma"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5m0-16h2m-2 4h2m-2 4h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </div>
            </>
          );
        case 3:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Deine Nachricht</h2>
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Deine Nachricht"
                  rows={4}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
              </div>
            </>
          );
        case 4:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Wie können wir dich erreichen?</h2>
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail Adresse"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m3 7.5 8.168 5.445a1.5 1.5 0 0 0 1.664 0L21 7.5M4.25 19.25h15.5a1.5 1.5 0 0 0 1.5-1.5V6.25a1.5 1.5 0 0 0-1.5-1.5H4.25a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefonnummer"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </div>
            </>
          );
        default:
          return null;
      }
    } else {
      // Bewerber-specific steps
      switch (currentStep) {
        case 1:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Wie heißt du?</h2>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Vorname"
                    className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                  />
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Nachname"
                    className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                  />
                </div>
              </div>
            </>
          );
        case 2:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Hast du Erfahrung im Vertrieb?</h2>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setSalesExperience('Ja, habe ich')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    salesExperience === 'Ja, habe ich'
                      ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
                      : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Ja, habe ich
                </button>
                <button
                  onClick={() => setSalesExperience('Nein, ich bin Quereinsteiger')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    salesExperience === 'Nein, ich bin Quereinsteiger'
                      ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
                      : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Nein, ich bin Quereinsteiger
                </button>
              </div>
            </>
          );
          case 3:
  return (
    <>
      <h2 className="text-xl font-medium text-white mb-4">Was ist dir bei deinem neuen Job besonders wichtig?</h2>
      
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={() => {
            if (jobImportance.includes('motiviertes umfeld')) {
              setJobImportance(jobImportance.filter(item => item !== 'motiviertes umfeld'));
            } else {
              setJobImportance([...jobImportance, 'motiviertes umfeld']);
            }
          }}
          className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
            jobImportance.includes('motiviertes umfeld')
              ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
              : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
          }`}
        >
          Motiviertes Umfeld
        </button>
        <button
          onClick={() => {
            if (jobImportance.includes('hoher verdienst')) {
              setJobImportance(jobImportance.filter(item => item !== 'hoher verdienst'));
            } else {
              setJobImportance([...jobImportance, 'hoher verdienst']);
            }
          }}
          className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
            jobImportance.includes('hoher verdienst')
              ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
              : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
          }`}
        >
          Hoher Verdienst
        </button>
        <button
          onClick={() => {
            if (jobImportance.includes('richtige ausbildung')) {
              setJobImportance(jobImportance.filter(item => item !== 'richtige ausbildung'));
            } else {
              setJobImportance([...jobImportance, 'richtige ausbildung']);
            }
          }}
          className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
            jobImportance.includes('richtige ausbildung')
              ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
              : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
          }`}
        >
          Richtige Ausbildung
        </button>
        <button
          onClick={() => {
            if (jobImportance.includes('spaß an der arbeit')) {
              setJobImportance(jobImportance.filter(item => item !== 'spaß an der arbeit'));
            } else {
              setJobImportance([...jobImportance, 'spaß an der arbeit']);
            }
          }}
          className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
            jobImportance.includes('spaß an der arbeit')
              ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
              : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
          }`}
        >
          Spaß an der Arbeit
        </button>
      </div>
    </>
  );
        case 4:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Bist du gerne unterwegs und hast gerne Kontakt zu anderen Menschen?</h2>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setPeopleContact('Ja bin ich gerne')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    peopleContact === 'Ja bin ich gerne'
                      ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
                      : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Ja, bin ich gerne
                </button>
                <button
                  onClick={() => setPeopleContact('Nein, das ist nichts für mich')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    peopleContact === 'Nein, das ist nichts für mich'
                      ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
                      : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Nein, das ist nichts für mich
                </button>
              </div>
            </>
          );
        case 5:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Hast du einen Führerschein?</h2>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => setDriversLicense('Ja')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    driversLicense === 'Ja'
                      ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
                      : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Ja
                </button>
                <button
                  onClick={() => setDriversLicense('Nein')}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-3 px-4 text-sm font-medium transition-all duration-200 ${
                    driversLicense === 'Nein'
                      ? 'border-[#0C462B] bg-[#16a34a]/10 text-white'
                      : 'border-gray-800 bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Nein
                </button>
              </div>
            </>
          );
        case 6:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Ich passe gut zu Sellwell, weil ...</h2>
              <div className="relative">
                <textarea
                  value={fitReason}
                  onChange={(e) => setFitReason(e.target.value)}
                  placeholder="Erzähl uns mehr über dich"
                  rows={4}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
              </div>
            </>
          );
        case 7:
          return (
            <>
              <h2 className="text-xl font-medium text-white mb-4">Wie können wir dich erreichen?</h2>
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail Adresse"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m3 7.5 8.168 5.445a1.5 1.5 0 0 0 1.664 0L21 7.5M4.25 19.25h15.5a1.5 1.5 0 0 0 1.5-1.5V6.25a1.5 1.5 0 0 0-1.5-1.5H4.25a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefonnummer"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#0C462B] focus:outline-none focus:ring-1 focus:ring-[#16a34a]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
              </div>
            </>
          );
        default:
          return null;
      }
    }
  };

  // Update the title shown in the modal based on mode
  const getModalTitle = () => {
    if (mode === 'Firma') {
      return "Vertriebslösung anfragen";
    } else {
      return "Bewerbung bei Sellwell";
    }
  };

  // Update the subtitle shown below the title based on mode
  const getModalSubtitle = () => {
    if (mode === 'Firma') {
      return "JETZT KONTAKTIEREN";
    } else {
      return "JETZT BEWERBEN";
    }
  };

  // If modal is not open, return null (early return)
  if (!isOpen) return null;

  // Return the AnimatePresence for smooth animations
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal container */}
          <motion.div
            className="relative flex w-full max-w-4xl flex-col md:flex-row overflow-hidden rounded-2xl bg-[#0b0b0f] shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.25 }}
          >
            {/* Left side (form) */}
            <motion.div 
              className="relative flex w-full flex-col items-center justify-center p-6 sm:p-8 text-center md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0C462B] to-[#16a34a]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0 2c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" fill="white"/>
                      <path d="M12 8c-.36 0-.7.07-1.01.19l1.3 1.3c.57.1 1.11.39 1.5.8l1.5-1.5A3.89 3.89 0 0012 8z" fill="white"/>
                      <path d="M15.19 11.77A4.007 4.007 0 0112 16c-2.21 0-4-1.79-4-4 0-1.18.51-2.25 1.33-2.98l-1.48-1.48A5.93 5.93 0 006 12c0 3.31 2.69 6 6 6 1.79 0 3.42-.79 4.53-2.04l-1.34-1.34z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h1 className="mb-2 text-xl sm:text-2xl font-bold text-white md:text-3xl">{getModalTitle()}</h1>
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-800"></div>
                  <span className="mx-4 flex-shrink mb-3 text-xs text-gray-500">{getModalSubtitle()}</span>
                  <div className="flex-grow border-t border-gray-800"></div>
                </div>
              </motion.div>
              
              {/* Step indicator */}
              {renderStepIndicator()}
              
              {/* Show success message if form submitted successfully */}
              {submitSuccess ? (
                <motion.div
                  className="w-full max-w-md space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-white">Vielen Dank!</h3>
                    <p className="text-gray-400">
                      {mode === 'Firma' 
                        ? 'Wir haben deine Anfrage erhalten und werden uns in Kürze bei dir melden.' 
                        : 'Wir haben deine Bewerbung erhalten und werden sie sorgfältig prüfen.'}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="w-full max-w-md space-y-4"
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Current step content */}
                  {renderStepContent()}
                  
                  {/* Error message */}
                  {submitError && (
                    <div className="mt-2 text-sm text-red-500">
                      {submitError}
                    </div>
                  )}
                  
                  {/* Navigation buttons */}
                  <div className="flex gap-3 mt-6">
                    {currentStep > 1 && (
                      <button 
                        onClick={handleBack}
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-800 bg-transparent py-2 sm:py-3 px-3 sm:px-4 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-900"
                      >
                        <ChevronLeft size={16} />
                        <span className="hidden sm:inline">Zurück</span>
                      </button>
                    )}
                    
                    <button 
                      onClick={handleNext}
                      disabled={!isNextEnabled() || isSubmitting}
                      className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2 sm:py-3 font-medium text-white transition-all duration-200 ${
                        isNextEnabled() && !isSubmitting
                          ? 'bg-gradient-to-r from-[#184639] to-[#2F8267] hover:shadow-lg hover:shadow-[#0C462B]/40'
                          : 'bg-gray-700 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          {getNextButtonText()}
                          {currentStep < totalSteps && <ChevronRight size={16} />}
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
              
              <motion.p 
                className="mt-6 sm:mt-8 text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Mit dem Eintragen stimmst du unserer Datenschutzerklärung zu.
              </motion.p>
            </motion.div>
            
            {/* Right side (image) - Only visible on md and larger screens */}
            <motion.div 
              className="hidden bg-gradient-to-br from-[#0C462B]/20 to-[#16a34a]/20 md:block md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative h-full w-full">
                {/* Decorative elements */}
                <div className="absolute left-0 top-0 h-full w-full">
                  <div className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-[#0C462B]/30 to-[#16a34a]/30 blur-xl"></div>
                  <div className="absolute bottom-[30%] left-[10%] h-24 w-24 rounded-full bg-gradient-to-br from-[#16a34a]/30 to-[#0C462B]/30 blur-xl"></div>
                </div>
                
                {/* Card display */}
                {/* Card display */}
{isAnimating && (
  <motion.div 
    className="absolute inset-0 flex items-center justify-center"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: 0.7, 
      duration: 0.8,
      type: "spring",
      stiffness: 100 
    }}
  >
    {/* Image card */}
    <div className="relative mx-auto h-[420px] w-[320px] overflow-hidden rounded-xl shadow-2xl">
      <Image 
        src="/ABOUT7.png" 
        alt="About Sellwell"
        layout="fill"
        objectFit="cover"
        priority
        className="rounded-xl"
      />
    </div>
  </motion.div>
)}
              </div>
            </motion.div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-800 hover:text-white"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}