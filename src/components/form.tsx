'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define form data type
type FormDataType = {
  interest: string;
  salesExperience: string;
  jobPreferences: string[];
  traveling: string;
  driversLicense: string;
  sellwellFit: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  address: string;
  message: string;
  privacyAgreed: boolean;
  [key: string]: string | string[] | boolean; // Allow for dynamic indexing
};

export default function SellwellForm() {
  // Initialize router for redirection
  const router = useRouter();
  
  // Main state to track current step and form data
  const [currentStep, setCurrentStep] = useState<string>('initial');
  const [formData, setFormData] = useState<FormDataType>({
    interest: '',
    salesExperience: '',
    jobPreferences: [],
    traveling: '',
    driversLicense: '',
    sellwellFit: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    message: '',
    privacyAgreed: false
  });

    // Add global style to handle autofill and radio buttons
  useEffect(() => {
    // Add a style tag to handle autofill across all inputs
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      input:-webkit-autofill,
      input:-webkit-autofill:hover, 
      input:-webkit-autofill:focus, 
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        -webkit-text-fill-color: inherit !important;
      }
      
      input[type="radio"]:checked {
        background-color: #0B3E27 !important;
        border-color: #0B3E27 !important;
      }
    `;
    document.head.appendChild(styleTag);
    
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Handle single choice selection
  const handleSingleChoice = (field: string, value: string): void => {
    setFormData({ ...formData, [field]: value });
    
    // Determine next step based on current step and selection
    if (field === 'interest') {
      if (value === '1') {
        setCurrentStep('salesExperience');
      } else if (value === '2') {
        setCurrentStep('companyInfo');
      } else {
        setCurrentStep('otherReason');
      }
    } else if (field === 'salesExperience') {
      setCurrentStep('jobPreferences');
    } else if (field === 'traveling') {
      if (value === 'yes') {
        setCurrentStep('driversLicense');
      } else {
        setCurrentStep('notFitting');
      }
    } else if (field === 'driversLicense') {
      setCurrentStep('sellwellFit');
    } else if (field === 'salutation') {
      // Just set the value but don't change step
    }
  };

  // Handle multiple choice selection (checkboxes)
  const handleMultipleChoice = (field: string, value: string): void => {
    const currentValues = formData[field] as string[];
    
    if (currentValues.includes(value)) {
      // Remove value if already selected
      setFormData({
        ...formData,
        [field]: currentValues.filter((item: string) => item !== value)
      });
    } else {
      // Add value if not selected
      setFormData({
        ...formData,
        [field]: [...currentValues, value]
      });
    }
  };

  // Handle text input changes
  const handleTextChange = (field: string, value: string): void => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle checkbox input (like privacy policy)
  const handleCheckboxChange = (field: string): void => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted with data:', formData);
    setCurrentStep('submitted');
    
    // Redirect to thank you page
    setTimeout(() => {
      router.push('/danke');
    }, 1500); // Short delay to show the success message before redirect
  };

  // Handle "next" navigation
  const handleNext = (nextStep: string): void => {
    setCurrentStep(nextStep);
  };
  
  // Handle "back" navigation
  const handleBack = (): void => {
    // Define the navigation flow for going back
    switch(currentStep) {
      case 'salesExperience':
        setCurrentStep('initial');
        break;
      case 'jobPreferences':
        setCurrentStep('salesExperience');
        break;
      case 'traveling':
        setCurrentStep('jobPreferences');
        break;
      case 'driversLicense':
        setCurrentStep('traveling');
        break;
      case 'sellwellFit':
        setCurrentStep('driversLicense');
        break;
      case 'personalInfo':
        setCurrentStep('sellwellFit');
        break;
      case 'emailInfo':
        setCurrentStep('personalInfo');
        break;
      case 'phoneInfo':
        setCurrentStep('emailInfo');
        break;
      case 'companyInfo':
        setCurrentStep('initial');
        break;
      case 'cooperationMessage':
        setCurrentStep('companyInfo');
        break;
      case 'otherReason':
        setCurrentStep('initial');
        break;
      default:
        setCurrentStep('initial');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit}>
        
        {/* Initial Question */}
        {currentStep === 'initial' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Worum geht es?</h2>
            
            {/* Desktop view: horizontally stacked containers */}
            <div className="hidden md:flex space-x-4">
              <div 
                onClick={() => handleSingleChoice('interest', '1')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p>Ich habe Interesse an einer Karriere bei Sellwell</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('interest', '2')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p>Ich habe Interesse an einer Kooperation mit Sellwell</p>
              </div>
            </div>
            
            {/* Desktop view: "Anderer Grund" as underlined text with arrow */}
            <div className="hidden md:flex justify-center mt-6">
              <div 
                onClick={() => handleSingleChoice('interest', '3')}
                className="inline-flex items-center text-gray-500 border-b border-gray-400 pb-1 cursor-pointer hover:text-[#0B3E27] hover:border-[#0B3E27] transition-all"
              >
                <span>Anderer Grund</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Mobile view: vertically stacked containers */}
            <div className="md:hidden space-y-3">
              <div 
                onClick={() => handleSingleChoice('interest', '1')}
                className="w-full border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-[#E7EBE9] hover:border-[#0B3E27] transition-all"
              >
                <p>Ich habe Interesse an einer Karriere bei Sellwell</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('interest', '2')}
                className="w-full border-2 border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-[#E7EBE9] hover:border-[#0B3E27] transition-all"
              >
                <p>Ich habe Interesse an einer Kooperation mit Sellwell</p>
              </div>
              
              {/* Mobile view: "Anderer Grund" as underlined text with arrow */}
              <div className="pt-2 flex justify-center">
                <div 
                  onClick={() => handleSingleChoice('interest', '3')}
                  className="inline-flex items-center text-gray-500 border-b border-gray-400 pb-1 cursor-pointer hover:text-[#0B3E27] hover:border-[#0B3E27]"
                >
                  <span>Anderer Grund</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Career Path Questions */}
        {currentStep === 'salesExperience' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Hast du bereits Erfahrung im Vertrieb?</h2>
            
            {/* Desktop view */}
            <div className="hidden md:flex space-x-4">
              <div 
                onClick={() => handleSingleChoice('salesExperience', 'yes')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Ja, habe ich bereits</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('salesExperience', 'no')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p>Nein, ich bin Quereinsteiger</p>
              </div>
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden space-y-3">
              <div 
                onClick={() => handleSingleChoice('salesExperience', 'yes')}
                className="w-full border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all"
              >
                <p>Ja, habe ich bereits</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('salesExperience', 'no')}
                className="w-full border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all"
              >
                <p>Nein, ich bin Quereinsteiger</p>
              </div>
            </div>
          </section>
        )}

        {currentStep === 'jobPreferences' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Was wäre dir wichtig bei einem neuen Job?</h2>
            <p className="text-sm text-gray-500 mb-4">Mehrfachauswahl möglich</p>
            
            {/* Desktop view */}
            <div className="hidden md:flex flex-wrap gap-4">
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'motivatedEnvironment')}
                className={`flex-1 min-w-[calc(50%-0.5rem)] border-2 ${formData.jobPreferences.includes('motivatedEnvironment') ? 'border-[#0B3E27] bg-[#0B3E27]/10' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all text-center`}
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p>Motiviertes Umfeld</p>
              </div>
              
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'highIncome')}
                className={`flex-1 min-w-[calc(50%-0.5rem)] border-2 ${formData.jobPreferences.includes('highIncome') ? 'border-[#0B3E27] bg-[#0B3E27]/10' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all text-center`}
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Hoher Verdienst</p>
              </div>
              
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'properTraining')}
                className={`flex-1 min-w-[calc(50%-0.5rem)] border-2 ${formData.jobPreferences.includes('properTraining') ? 'border-[#0B3E27] bg-[#0B3E27]/10' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all text-center`}
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <p>Richtige Ausbildung</p>
              </div>
              
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'funAtWork')}
                className={`flex-1 min-w-[calc(50%-0.5rem)] border-2 ${formData.jobPreferences.includes('funAtWork') ? 'border-[#0B3E27] bg-[#0B3E27]/10' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all text-center`}
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Spaß an der Arbeit</p>
              </div>
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden space-y-3">
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'motivatedEnvironment')}
                className={`w-full flex items-center justify-between border-2 ${formData.jobPreferences.includes('motivatedEnvironment') ? 'border-[#0B3E27]' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all`}
              >
                <p>Motiviertes Umfeld</p>
                <div className={`w-6 h-6 flex items-center justify-center rounded-md border ${formData.jobPreferences.includes('motivatedEnvironment') ? 'border-[#0B3E27] bg-[#0B3E27]' : 'border-gray-300'}`}>
                  {formData.jobPreferences.includes('motivatedEnvironment') && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'highIncome')}
                className={`w-full flex items-center justify-between border-2 ${formData.jobPreferences.includes('highIncome') ? 'border-[#0B3E27]' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all`}
              >
                <p>Hoher Verdienst</p>
                <div className={`w-6 h-6 flex items-center justify-center rounded-md border ${formData.jobPreferences.includes('highIncome') ? 'border-[#0B3E27] bg-[#0B3E27]' : 'border-gray-300'}`}>
                  {formData.jobPreferences.includes('highIncome') && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'properTraining')}
                className={`w-full flex items-center justify-between border-2 ${formData.jobPreferences.includes('properTraining') ? 'border-[#0B3E27]' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all`}
              >
                <p>Richtige Ausbildung</p>
                <div className={`w-6 h-6 flex items-center justify-center rounded-md border ${formData.jobPreferences.includes('properTraining') ? 'border-[#0B3E27] bg-[#0B3E27]' : 'border-gray-300'}`}>
                  {formData.jobPreferences.includes('properTraining') && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              
              <div 
                onClick={() => handleMultipleChoice('jobPreferences', 'funAtWork')}
                className={`w-full flex items-center justify-between border-2 ${formData.jobPreferences.includes('funAtWork') ? 'border-[#0B3E27]' : 'border-gray-300'} rounded-xl p-4 cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] transition-all`}
              >
                <p>Spaß an der Arbeit</p>
                <div className={`w-6 h-6 flex items-center justify-center rounded-md border ${formData.jobPreferences.includes('funAtWork') ? 'border-[#0B3E27] bg-[#0B3E27]' : 'border-gray-300'}`}>
                  {formData.jobPreferences.includes('funAtWork') && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setCurrentStep('traveling')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-[#0B3E27]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {currentStep === 'traveling' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Bist du gerne unterwegs und hast gerne Kontakt zu anderen Menschen?</h2>
            
            {/* Desktop view */}
            <div className="hidden md:flex space-x-4">
              <div 
                onClick={() => handleSingleChoice('traveling', 'yes')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p>Ja, ich bin gerne unterwegs</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('traveling', 'no')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <p>Nein, das ist nichts für mich</p>
              </div>
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden space-y-3">
              <div 
                onClick={() => handleSingleChoice('traveling', 'yes')}
                className="w-full border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all"
              >
                <p>Ja, ich bin gerne unterwegs</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('traveling', 'no')}
                className="w-full border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all"
              >
                <p>Nein, das ist nichts für mich</p>
              </div>
            </div>
          </section>
        )}

        {currentStep === 'notFitting' && (
          <section className="mb-6 transition-opacity duration-300">
            <div className="p-6 bg-gray-50 rounded-lg text-center shadow-md">
              <h2 className="text-xl font-semibold mb-4">Wir passen leider nicht zusammen</h2>
              <p className="text-gray-600 mb-6">Vielen Dank für dein Interesse, aber wir suchen jemanden, der gerne unterwegs ist.</p>
              <button
                type="button"
                onClick={() => setCurrentStep('initial')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-[#0B3E27]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all"
              >
                Zurück zum Anfang
              </button>
            </div>
          </section>
        )}

        {currentStep === 'driversLicense' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Hast du einen Führerschein?</h2>
            
            {/* Desktop view */}
            <div className="hidden md:flex space-x-4">
              <div 
                onClick={() => handleSingleChoice('driversLicense', 'yes')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Ja</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('driversLicense', 'no')}
                className="flex-1 border-2 border-gray-300 rounded-xl p-4 shadow-sm cursor-pointer hover:border-[#0B3E27] hover:bg-[#E7EBE9] hover:shadow-md transition-all text-center"
              >
                <div className="mx-auto w-12 h-12 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Nein</p>
              </div>
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden space-y-3">
              <div 
                onClick={() => handleSingleChoice('driversLicense', 'yes')}
                className="w-full border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all"
              >
                <p>Ja</p>
              </div>
              
              <div 
                onClick={() => handleSingleChoice('driversLicense', 'no')}
                className="w-full border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 transition-all"
              >
                <p>Nein</p>
              </div>
            </div>
          </section>
        )}

        {currentStep === 'sellwellFit' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Ich passe gut zu Sellwell, weil...</h2>
            <div className="mb-6">
              <textarea
                value={formData.sellwellFit}
                onChange={(e) => handleTextChange('sellwellFit', e.target.value)}
                placeholder="weil ..."
                className="w-full p-3 bg-transparent focus:outline-none resize-none border-2 border-gray-300 rounded-xl focus:border-[#0B3E27] transition-all"
                rows={3}
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep('personalInfo')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-[#0B3E27]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {/* Personal Information - Split into sections */}
        {currentStep === 'personalInfo' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Persönliche Informationen</h2>
            
            <div className="mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Anrede</label>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="herr"
                      name="salutation"
                      checked={formData.salutation === 'herr'}
                      onChange={() => handleSingleChoice('salutation', 'herr')}
                      className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <label htmlFor="herr" className="text-gray-700">Herr</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="frau"
                      name="salutation"
                      checked={formData.salutation === 'frau'}
                      onChange={() => handleSingleChoice('salutation', 'frau')}
                      className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                    />
                    <label htmlFor="frau" className="text-gray-700">Frau</label>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-1 border-b border-gray-300 focus-within:border-green-500 transition-all">
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleTextChange('firstName', e.target.value)}
                    placeholder="Vorname"
                    className="w-full p-3 bg-transparent focus:outline-none"
                    onKeyDown={(e) => {
                      if (e.key === ' ' && e.currentTarget.value.trim().length > 0) {
                        const lastNameInput = document.querySelector('input[placeholder="Nachname"]') as HTMLInputElement;
                        
                        // Check if lastname field is empty
                        if (lastNameInput && !formData.lastName) {
                          e.preventDefault(); // Prevent adding the space
                          lastNameInput.focus();
                        }
                        // If lastname field already has content, allow multiple first names
                      }
                    }}
                  />
                </div>
                <div className="flex-1 border-b border-gray-300 focus-within:border-green-500 transition-all">
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleTextChange('lastName', e.target.value)}
                    placeholder="Nachname"
                    className="w-full p-3 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep('emailInfo')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-[#0B3E27]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {currentStep === 'emailInfo' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">E-Mail Adresse</h2>
            
            <div className="mb-6 border-b border-gray-300 focus-within:border-green-500 transition-all">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleTextChange('email', e.target.value)}
                placeholder="deine@email.de"
                className="w-full p-3 bg-transparent focus:outline-none"
              />
            </div>
            
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep('phoneInfo')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-[#0B3E27]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {currentStep === 'phoneInfo' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Telefonnummer</h2>
            
            <div className="mb-6 border-b border-gray-300 focus-within:border-green-500 transition-all">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleTextChange('phone', e.target.value)}
                placeholder="+49 123 456789"
                className="w-full p-3 bg-transparent focus:outline-none"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start space-x-3">
                <div 
                  onClick={() => handleCheckboxChange('privacyAgreed')}
                  className={`w-6 h-6 mt-1 flex-shrink-0 flex items-center justify-center rounded-md border cursor-pointer ${formData.privacyAgreed ? 'border-[#0B3E27] bg-[#0B3E27]' : 'border-gray-300'}`}
                >
                  {formData.privacyAgreed && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-700">
                  Ich stimme den Datenschutzrichtlinien zu und erlaube Sellwell, meine Daten zu speichern und mich zu kontaktieren.
                </p>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={!formData.privacyAgreed}
                className={`px-6 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all ${formData.privacyAgreed ? 'bg-[#0B3E27] text-white hover:bg-[#0B3E27]/90' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                Absenden
              </button>
            </div>
          </section>
        )}

        {/* Cooperation Path Questions */}
        {currentStep === 'companyInfo' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Unternehmensinformationen</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-300 focus-within:border-green-500 transition-all">
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleTextChange('companyName', e.target.value)}
                  placeholder="Firma"
                  className="w-full p-3 bg-transparent focus:outline-none"
                />
              </div>
              
              <div className="border-b border-gray-300 focus-within:border-green-500 transition-all">
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleTextChange('address', e.target.value)}
                  placeholder="Anschrift"
                  className="w-full p-3 bg-transparent focus:outline-none"
                />
              </div>
              
              <div className="flex space-x-4">
                <div className="flex-1 border-b border-gray-300 focus-within:border-green-500 transition-all">
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleTextChange('firstName', e.target.value)}
                    placeholder="Vorname"
                    className="w-full p-3 bg-transparent focus:outline-none"
                  />
                </div>
                
                <div className="flex-1 border-b border-gray-300 focus-within:border-green-500 transition-all">
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleTextChange('lastName', e.target.value)}
                    placeholder="Nachname"
                    className="w-full p-3 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setCurrentStep('cooperationMessage')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-[#0B3E27]/90 focus:outline-none focus:ring-2 focus:ring-[#0B3E27] transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {currentStep === 'cooperationMessage' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Ihre Nachricht</h2>
            
            <div className="bg-white mb-5">
              <textarea
                value={formData.message}
                onChange={(e) => handleTextChange('message', e.target.value)}
                placeholder="Bitte beschreiben Sie Ihr Anliegen..."
                className="w-full p-3 bg-transparent focus:outline-none resize-none border-2 border-gray-300 rounded-3xl focus:border-[#0B3E27] transition-all"
                rows={5}
              ></textarea>
            </div>
            
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep('emailInfo')}
                className="px-6 py-3 bg-[#0B3E27] text-white rounded-full shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {/* Other Reason Path */}
        {currentStep === 'otherReason' && (
          <section className="mb-6 transition-opacity duration-300">
            <h2 className="text-xl font-semibold mb-6">Anderer Grund</h2>
            
            <div className="mb-6">
              <textarea
                value={formData.message}
                onChange={(e) => handleTextChange('message', e.target.value)}
                placeholder="Bitte beschreiben Sie Ihr Anliegen hier..."
                className="w-full p-3 bg-transparent focus:outline-none resize-none border border-gray-300 rounded-md focus:border-green-500 transition-all"
                rows={5}
              ></textarea>
            </div>
            
            <div>
              <button
                type="button"
                onClick={() => setCurrentStep('personalInfo')}
                className="px-6 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              >
                Weiter
              </button>
            </div>
          </section>
        )}

        {/* Submission Confirmation */}
        {currentStep === 'submitted' && (
          <section className="mb-6 transition-opacity duration-300">
            <div className="p-8 bg-green-50 rounded-lg text-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Vielen Dank für Ihre Nachricht!</h2>
              <p className="text-green-600 mb-6">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
              <button
                type="button"
                onClick={() => {
                  setCurrentStep('initial');
                  setFormData({
                    interest: '',
                    salesExperience: '',
                    jobPreferences: [],
                    traveling: '',
                    driversLicense: '',
                    sellwellFit: '',
                    salutation: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    address: '',
                    message: '',
                    privacyAgreed: false
                  });
                }}
                className="px-6 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              >
                Neues Formular
              </button>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}