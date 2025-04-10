"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Define TypeScript interface for component props
interface BeautifulModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BeautifulModal({ isOpen, onClose }: BeautifulModalProps) {
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  // Current step state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  // Animation state
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Reset animation state and form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsAnimating(false);
        // Reset form on close
        setCurrentStep(1);
      }, 500);
    } else {
      setIsAnimating(true);
    }
  }, [isOpen]);

  // Go to next step
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      console.log('Form submitted', {
        firstName,
        lastName,
        company,
        employeeCount,
        email,
        phone
      });
      // Optional: close modal or show success message
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
    switch (currentStep) {
      case 1:
        return firstName.trim() !== '' && lastName.trim() !== '';
      case 2:
        return company.trim() !== '';
      case 3:
        return employeeCount !== '';
      case 4:
        return email.trim() !== '' && email.includes('@');
      case 5:
        return phone.trim() !== '';
      default:
        return false;
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
                ? 'bg-gradient-to-r from-[#A954F4] to-[#EA489A]'
                : index + 1 < currentStep
                ? 'bg-gray-400'
                : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-medium text-white mb-4">Wie heißt du?</h2>
            <div className="flex gap-4 w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Vorname"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#A954F4] focus:outline-none focus:ring-1 focus:ring-[#A954F4]"
                />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Nachname"
                  className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#A954F4] focus:outline-none focus:ring-1 focus:ring-[#A954F4]"
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
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#A954F4] focus:outline-none focus:ring-1 focus:ring-[#A954F4]"
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
            <h2 className="text-xl font-medium text-white mb-4">Wie viele Mitarbeiter hat dein Unternehmen?</h2>
            <div className="relative">
              <select
                value={employeeCount}
                onChange={(e) => setEmployeeCount(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#A954F4] focus:outline-none focus:ring-1 focus:ring-[#A954F4]"
              >
                <option value="" disabled>Anzahl der Mitarbeiter wählen</option>
                <option value="1-5">1-5</option>
                <option value="1-10">1-10</option>
                <option value="10-50">10-50</option>
                <option value="50-100">50-100</option>
                <option value="100-500">100-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000+">1000+</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 pointer-events-none">
                <ChevronDown size={18} />
              </span>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13-4c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm-2 9c0-2.21-1.79-4-4-4h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-xl font-medium text-white mb-4">Wie können wir dich erreichen?</h2>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deine E-Mail Adresse"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#A954F4] focus:outline-none focus:ring-1 focus:ring-[#A954F4]"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m3 7.5 8.168 5.445a1.5 1.5 0 0 0 1.664 0L21 7.5M4.25 19.25h15.5a1.5 1.5 0 0 0 1.5-1.5V6.25a1.5 1.5 0 0 0-1.5-1.5H4.25a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h2 className="text-xl font-medium text-white mb-4">Wie können wir dich telefonisch erreichen?</h2>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefonnummer"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-[#A954F4] focus:outline-none focus:ring-1 focus:ring-[#A954F4]"
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
  };

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
            className="relative flex w-full max-w-4xl overflow-hidden rounded-2xl bg-[#0b0b0f] shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.25 }}
          >
            {/* Left side (form) */}
            <motion.div 
              className="relative flex w-full flex-col items-center justify-center p-8 text-center md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#A954F4] to-[#EA489A]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0 2c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" fill="white"/>
                      <path d="M12 8c-.36 0-.7.07-1.01.19l1.3 1.3c.57.1 1.11.39 1.5.8l1.5-1.5A3.89 3.89 0 0012 8z" fill="white"/>
                      <path d="M15.19 11.77A4.007 4.007 0 0112 16c-2.21 0-4-1.79-4-4 0-1.18.51-2.25 1.33-2.98l-1.48-1.48A5.93 5.93 0 006 12c0 3.31 2.69 6 6 6 1.79 0 3.42-.79 4.53-2.04l-1.34-1.34z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl">B&M Marketscale</h1>
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-800"></div>
                  <span className="mx-4 flex-shrink mb-3 text-xs text-gray-500">JETZT SICHERN</span>
                  <div className="flex-grow border-t border-gray-800"></div>
                </div>
              </motion.div>
              
              {/* Step indicator */}
              {renderStepIndicator()}
              
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
                
                {/* Navigation buttons */}
                <div className="flex gap-3 mt-6">
                  {currentStep > 1 && (
                    <button 
                      onClick={handleBack}
                      className="flex items-center justify-center gap-2 rounded-lg border border-gray-800 bg-transparent py-3 px-4 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-900"
                    >
                      <ChevronLeft size={16} />
                      Zurück
                    </button>
                  )}
                  
                  <button 
                    onClick={handleNext}
                    disabled={!isNextEnabled()}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-3 font-medium text-white transition-all duration-200 ${
                      isNextEnabled()
                        ? 'bg-gradient-to-r from-[#A954F4] to-[#EA489A] hover:shadow-lg hover:shadow-[#A954F4]/40'
                        : 'bg-gray-700 cursor-not-allowed'
                    }`}
                  >
                    {getNextButtonText()}
                    {currentStep < totalSteps && <ChevronRight size={16} />}
                  </button>
                </div>
                
                {currentStep === 1 && (
                  <>
                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-gray-800"></div>
                      <span className="mx-4 flex-shrink text-xs text-gray-500">ODER</span>
                      <div className="flex-grow border-t border-gray-800"></div>
                    </div>
                    
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-800 bg-transparent py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-900">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.72 8.15908C14.72 7.66272 14.6755 7.18545 14.5927 6.72726H8V9.43499H11.7673C11.605 10.31 11.1118 11.0514 10.3705 11.5477V13.3041H12.6327C13.9564 12.0854 14.72 10.2909 14.72 8.15908Z" fill="#4285F4"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.9996 15C9.8896 15 11.4741 14.3732 12.6323 13.3041L10.37 11.5477C9.74323 11.9677 8.94141 12.2159 7.9996 12.2159C6.17641 12.2159 4.63323 10.9845 4.08278 9.33H1.74414V11.1436C2.89596 13.4314 5.26323 15 7.9996 15Z" fill="#34A853"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.08318 9.32999C3.94318 8.90999 3.86364 8.46135 3.86364 7.99999C3.86364 7.53863 3.94318 7.08999 4.08318 6.66999V4.85635H1.74455C1.27045 5.80135 1 6.87044 1 7.99999C1 9.12954 1.27045 10.1986 1.74455 11.1436L4.08318 9.32999Z" fill="#FBBC05"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.9996 3.78409C9.02732 3.78409 9.95005 4.13727 10.6755 4.83091L12.6832 2.82318C11.471 1.69364 9.88641 1 7.9996 1C5.26323 1 2.89596 2.56864 1.74414 4.85636L4.08278 6.67C4.63323 5.01545 6.17641 3.78409 7.9996 3.78409Z" fill="#EA4335"></path>
                      </svg>
                      Mit Google fortfahren
                    </button>
                  </>
                )}
              </motion.div>
              
              <motion.p 
                className="mt-8 text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Mit dem Absenden stimmst du zu, dass wir dich kontaktieren dürfen.
              </motion.p>
            </motion.div>
            
            {/* Right side (image) */}
            <motion.div 
              className="hidden bg-gradient-to-br from-[#A954F4]/20 to-[#EA489A]/20 md:block md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative h-full w-full">
                {/* Decorative elements */}
                <div className="absolute left-0 top-0 h-full w-full">
                  <div className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-[#A954F4]/30 to-[#EA489A]/30 blur-xl"></div>
                  <div className="absolute bottom-[30%] left-[10%] h-24 w-24 rounded-full bg-gradient-to-br from-[#EA489A]/30 to-[#A954F4]/30 blur-xl"></div>
                </div>
                
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
                    {/* Updated card display */}
                    <div className="relative mx-auto h-[420px] w-[350px] overflow-hidden rounded-xl shadow-2xl">
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
                        
                        {/* Animated gradient background */}
                        <div className="absolute left-0 top-0 h-[600px] w-[300px] animate-slow-spin opacity-50">
                          <div className="absolute left-[40%] top-[5%] h-[250px] w-[250px] rounded-full bg-[#A954F4]/30 blur-[80px]"></div>
                          <div className="absolute left-[0%] top-[40%] h-[250px] w-[250px] rounded-full bg-[#EA489A]/30 blur-[80px]"></div>
                          <div className="absolute left-[30%] top-[65%] h-[200px] w-[200px] rounded-full bg-[#EA489A]/30 blur-[80px]"></div>
                        </div>
                        
                        {/* Card content */}
                        <div className="absolute inset-0 flex flex-col items-center">
                          {/* B&M Logo (placeholder - replace with your actual inverted B&M logo) */}
                          <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                            {/* Replace this with your B&M logo SVG */}
                            <div className="text-white text-lg font-bold">B&M</div>
                          </div>
                          
                          <div className="mt-4 space-y-1 text-center">
                            <h3 className="text-[25px] mb-[-15px] font-bold text-white">Kostenloses<br />Strategiegespräch</h3>
                          </div>
                          
                          {/* Benefits list */}
                          <div className="mt-8 space-y-4 px-6 w-full">
                            
                            {/* Benefit item 4 */}
                            <div className="flex items-center gap-3 mb-[14px]">
                            <div className="mb-0 h-6 w-6 rounded-full bg-gradient-to-r from-[#A954F4] to-[#EA489A] p-[2px]">
                              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                            </div>
                              <span className="text-[16px] text-white">Hier kommt Kalender zum einbuchen hin</span>
                            </div>
                          </div>
                        </div>
                      </div>
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

// Helper component for the dropdown icon
const ChevronDown = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);