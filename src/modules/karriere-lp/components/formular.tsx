import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, Briefcase, Clock, GraduationCap, Users, Zap, Car, Mail, Phone, Star } from 'lucide-react';

// Define question types
type QuestionType = 'text-dual' | 'binary' | 'select' | 'checkbox' | 'rating' | 'textarea' | 'contact';

// Base question interface
interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  icon: React.ReactNode;
  condition?: () => boolean;
}

interface TextDualQuestion extends BaseQuestion {
  type: 'text-dual';
  fields: Array<keyof FormData>;
  labels: string[];
}

interface BinaryQuestion extends BaseQuestion {
  type: 'binary';
  field: keyof FormData;
  options: Array<{ value: boolean; label: string }>;
}

interface SelectQuestion extends BaseQuestion {
  type: 'select';
  field: keyof FormData;
  options: Array<{ value: string; label: string }>;
}

interface CheckboxQuestion extends BaseQuestion {
  type: 'checkbox';
  field: 'jobPreferences';
  options: Array<{ value: keyof FormData['jobPreferences']; label: string }>;
}

interface RatingQuestion extends BaseQuestion {
  type: 'rating';
  field: keyof FormData;
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
}

interface TextareaQuestion extends BaseQuestion {
  type: 'textarea';
  field: keyof FormData;
}

interface ContactQuestion extends BaseQuestion {
  type: 'contact';
  fields: Array<keyof FormData>;
  labels: string[];
  icons: React.ReactNode[];
}

type Question =
  | TextDualQuestion
  | BinaryQuestion
  | SelectQuestion
  | CheckboxQuestion
  | RatingQuestion
  | TextareaQuestion
  | ContactQuestion;

// Form data structure
type FormData = {
  firstName: string;
  lastName: string;
  hasSalesExperience: boolean | null;
  experienceLevel: string | null;
  jobPreferences: {
    compensation: boolean;
    flexibleHours: boolean;
    training: boolean;
    teamSpirit: boolean;
    responsibility: boolean;
  };
  peopleContactRating: number | null;
  greatestStrength: string;
  hasDriversLicense: boolean | null;
  email: string;
  phone: string;
};

// Initial form state
const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  hasSalesExperience: null,
  experienceLevel: null,
  jobPreferences: {
    compensation: false,
    flexibleHours: false,
    training: false,
    teamSpirit: false,
    responsibility: false,
  },
  peopleContactRating: null,
  greatestStrength: '',
  hasDriversLicense: null,
  email: '',
  phone: '',
};

const Formular = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Custom classes for the specific width values
  const tailwindStyles = `
    .w-3\\/10 {
      width: 30%;
    }
    .w-7\\/10 {
      width: 70%;
    }
  `;

  // Proper type-safe implementation of handleChange
  const handleChange = (field: string, value: string | boolean | number | null) => {
    setFormData((prev) => {
      // For nested objects like jobPreferences
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        
        // TypeScript needs help to understand that this is an object
        const parentObj = prev[parent as keyof FormData];
        
        // Make sure we're only spreading objects
        if (parentObj && typeof parentObj === 'object' && !Array.isArray(parentObj)) {
          return {
            ...prev,
            [parent]: {
              ...parentObj,
              [child]: value,
            },
          } as FormData;
        }
        return prev; // Return unchanged if the structure doesn't match
      }
      
      return {
        ...prev,
        [field]: value,
      } as FormData;
    });
  };

  // Navigation handlers
  const goToNextQuestion = () => {
    const isValid = validateCurrentQuestion();
    if (!isValid) return;
    
    setDirection('forward');
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const goToPreviousQuestion = () => {
    setDirection('backward');
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  // Validate the current question before proceeding
  const validateCurrentQuestion = (): boolean => {
    const newErrors: Record<string, string> = {};
    const q = questions[currentQuestion];
    
    if (q.type === 'text-dual') {
      const textDualQ = q as TextDualQuestion;
      textDualQ.fields.forEach(field => {
        if (!formData[field]?.toString().trim()) {
          newErrors[String(field)] = 'Dieses Feld ist erforderlich';
        }
      });
    }
    
    if (q.type === 'binary' && q.field === 'hasSalesExperience' && formData.hasSalesExperience === null) {
      newErrors['hasSalesExperience'] = 'Bitte wähle eine Option';
    }
    
    if (q.type === 'select' && q.field === 'experienceLevel' && formData.experienceLevel === null) {
      newErrors['experienceLevel'] = 'Bitte wähle eine Option';
    }
    
    if (q.type === 'checkbox' && 
        !formData.jobPreferences.compensation && 
        !formData.jobPreferences.flexibleHours && 
        !formData.jobPreferences.training && 
        !formData.jobPreferences.teamSpirit && 
        !formData.jobPreferences.responsibility) {
      newErrors['jobPreferences'] = 'Bitte wähle mindestens eine Option';
    }
    
    if (q.type === 'rating' && formData.peopleContactRating === null) {
      newErrors['peopleContactRating'] = 'Bitte wähle eine Option';
    }
    
    if (q.type === 'textarea' && !formData.greatestStrength.trim()) {
      newErrors['greatestStrength'] = 'Bitte gib deine Antwort ein';
    }
    
    if (q.type === 'binary' && q.field === 'hasDriversLicense' && formData.hasDriversLicense === null) {
      newErrors['hasDriversLicense'] = 'Bitte wähle eine Option';
    }
    
    if (q.type === 'contact') {
      const contactQ = q as ContactQuestion;
      contactQ.fields.forEach(field => {
        if (field === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            newErrors['email'] = 'Bitte gib eine gültige E-Mail-Adresse ein';
          }
        }
        if (field === 'phone') {
          const phoneRegex = /^[0-9+\s()-]{8,}$/;
          if (!phoneRegex.test(formData.phone)) {
            newErrors['phone'] = 'Bitte gib eine gültige Telefonnummer ein';
          }
        }
      });
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async () => {
    const isValid = validateCurrentQuestion();
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    try {
      // This would be your API call
      // const response = await fetch('/api/submit-application', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // For now, just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle success
      alert('Bewerbung erfolgreich eingereicht!');
      setFormData(initialFormData);
      setCurrentQuestion(0);
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      alert('Es gab einen Fehler bei der Übermittlung. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define all questions with proper typing
  const questions: Question[] = [
    {
      id: 'salesExperience',
      type: 'binary',
      question: 'Hast du bereits Erfahrung im Direktvertrieb?',
      field: 'hasSalesExperience',
      options: [
        { value: true, label: 'Ja' },
        { value: false, label: 'Nein' },
      ],
      icon: <Briefcase className="h-6 w-6 text-green-700" />,
    },
    {
      id: 'experienceLevel',
      type: 'select',
      question: 'Wie viel Erfahrung?',
      field: 'experienceLevel',
      options: [
        { value: 'under1', label: 'Unter 1 Jahr' },
        { value: '1to3', label: '1-3 Jahre' },
        { value: 'over3', label: '3+ Jahre' },
      ],
      icon: <Clock className="h-6 w-6 text-green-700" />,
      condition: () => formData.hasSalesExperience === true,
    },
    {
      id: 'jobPreferences',
      type: 'checkbox',
      question: 'Was ist dir bei deinem neuen Job besonders wichtig?',
      field: 'jobPreferences',
      options: [
        { value: 'compensation', label: 'Attraktive Vergütung' },
        { value: 'flexibleHours', label: 'Flexible Arbeitszeiten' },
        { value: 'training', label: 'Weiterbildungsmöglichkeiten' },
        { value: 'teamSpirit', label: 'Teamspirit' },
        { value: 'responsibility', label: 'Eigenverantwortung' },
      ],
      icon: <GraduationCap className="h-6 w-6 text-green-700" />,
    },
    {
      id: 'peopleContact',
      type: 'rating',
      question: 'Bist du gern unterwegs und im direkten Kontakt mit Menschen?',
      field: 'peopleContactRating',
      min: 1,
      max: 5,
      minLabel: 'Gar nicht',
      maxLabel: 'Sehr gerne',
      icon: <Users className="h-6 w-6 text-green-700" />,
    },
    {
      id: 'greatestStrength',
      type: 'textarea',
      question: 'Was würdest du als deine größte Stärke für den Vertrieb bezeichnen?',
      field: 'greatestStrength',
      icon: <Zap className="h-6 w-6 text-green-700" />,
    },
    {
      id: 'driversLicense',
      type: 'binary',
      question: 'Hast du einen Führerschein?',
      field: 'hasDriversLicense',
      options: [
        { value: true, label: 'Ja' },
        { value: false, label: 'Nein' },
      ],
      icon: <Car className="h-6 w-6 text-green-700" />,
    },
    {
      id: 'name',
      type: 'text-dual',
      question: 'Wie heißt Du?',
      fields: ['firstName', 'lastName'],
      labels: ['Vorname', 'Nachname'],
      icon: <User className="h-6 w-6 text-green-700" />,
    },
    {
      id: 'contact',
      type: 'contact',
      question: 'Wie erreichen wir dich?',
      fields: ['email', 'phone'],
      labels: ['E-Mail-Adresse', 'Telefonnummer'],
      icons: [
        <Mail className="h-6 w-6 text-green-700" key="mail-icon" />,
        <Phone className="h-6 w-6 text-green-700" key="phone-icon" />
      ],
      icon: <Mail className="h-6 w-6 text-green-700" />, // Required icon property
    },
  ];

  // Filter questions based on conditions
  const filteredQuestions = questions.filter(q => 
    !q.condition || q.condition()
  );

  // Get the current question
  const currentQuestionData = filteredQuestions[currentQuestion];
  
  // Calculate progress
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

  // Optimized slide animation variants
  const variants = {
    enter: (direction: string) => ({
      x: direction === 'forward' ? 250 : -250,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === 'forward' ? -250 : 250,
      opacity: 0,
    }),
  };

  // Render functions for each question type
  const renderTextDual = (q: TextDualQuestion) => {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {q.fields.map((field, index) => {
            // Safe conversion to string for input value
            const inputValue = formData[field];
            const stringValue = inputValue !== null && inputValue !== undefined 
              ? String(inputValue) 
              : '';
            
            return (
              <div key={`field-${String(field)}`} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {q.labels[index]}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name={String(field)}
                    value={stringValue}
                    onChange={(e) => handleChange(String(field), e.target.value)}
                    className={`pl-9 sm:pl-10 block w-full rounded-lg shadow-md ${
                      errors[field] ? 'border border-red-500' : 'border-none'
                    } py-2.5 sm:py-3 px-3 sm:px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder={q.labels[index]}
                  />
                </div>
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  const renderBinary = (q: BinaryQuestion) => {
    return (
      <div className="space-y-3">
        {q.options.map((option) => (
          <div
            key={`option-binary-${q.field}-${String(option.value)}`}
            onClick={() => handleChange(String(q.field), option.value)}
            className={`flex items-center p-3 sm:p-4 rounded-lg shadow-md transition-all ${
              formData[q.field] === option.value
                ? 'bg-green-50/50 shadow-green-100/70'
                : 'bg-white hover:bg-gray-50/70'
            }`}
          >
            <div className="mr-3 sm:mr-4">
              {q.icon}
            </div>
            <div className="flex-grow">
              <p className="font-medium">{option.label}</p>
            </div>
          </div>
        ))}
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderSelect = (q: SelectQuestion) => {
    return (
      <div className="space-y-3">
        {q.options.map((option) => (
          <div
            key={`option-select-${q.field}-${option.value}`}
            onClick={() => handleChange(String(q.field), option.value)}
            className={`flex items-center p-3 sm:p-4 rounded-lg shadow-md cursor-pointer transition-all ${
              formData[q.field] === option.value
                ? 'bg-green-50/50 shadow-green-100/70'
                : 'bg-white hover:bg-gray-50/70'
            }`}
          >
            <div className="mr-3 sm:mr-4">
              {q.icon}
            </div>
            <div className="flex-grow">
              <p className="font-medium">{option.label}</p>
            </div>
          </div>
        ))}
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderCheckbox = (q: CheckboxQuestion) => {
    return (
      <div className="space-y-3">
        {q.options.map((option) => (
          <div
            key={`option-checkbox-${option.value}`}
            onClick={() => {
              const currentValue = formData.jobPreferences[option.value];
              handleChange(`jobPreferences.${String(option.value)}`, !currentValue);
            }}
            className={`flex items-center p-3 sm:p-4 rounded-lg shadow-md cursor-pointer transition-all ${
              formData.jobPreferences[option.value]
                ? 'bg-green-50/50 shadow-green-100/70'
                : 'bg-white hover:bg-gray-50/70'
            }`}
          >
            <div className="mr-3 sm:mr-4">
              {option.value === 'compensation' && <Star className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />}
              {option.value === 'flexibleHours' && <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />}
              {option.value === 'training' && <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />}
              {option.value === 'teamSpirit' && <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />}
              {option.value === 'responsibility' && <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />}
            </div>
            <div className="flex-grow">
              <p className="font-medium">{option.label}</p>
            </div>
          </div>
        ))}
        {errors['jobPreferences'] && (
          <p className="text-red-500 text-sm mt-1">{errors['jobPreferences']}</p>
        )}
      </div>
    );
  };
  
  const renderRating = (q: RatingQuestion) => {
    return (
      <div className="space-y-4 sm:space-y-6">
        <div className="flex justify-between text-sm text-gray-500">
          <span>{q.minLabel}</span>
          <span>{q.maxLabel}</span>
        </div>
        <div className="flex justify-between gap-1 sm:gap-2">
          {Array.from({ length: q.max - q.min + 1 }, (_, i) => i + q.min).map((rating) => (
            <div
              key={`rating-${q.field}-${rating}`}
              onClick={() => handleChange(String(q.field), rating)}
              className={`flex-1 py-3 sm:py-4 rounded-lg shadow-md cursor-pointer text-center transition-all ${
                formData[q.field] === rating
                  ? 'bg-green-50/50 shadow-green-100/70 text-green-700'
                  : 'bg-white hover:bg-gray-50/70'
              }`}
            >
              <span className="text-base sm:text-lg font-medium">{rating}</span>
            </div>
          ))}
        </div>
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderTextarea = (q: TextareaQuestion) => {
    return (
      <div className="space-y-3">
        <div className="relative">
          <textarea
            name={String(q.field)}
            value={formData[q.field] !== null ? String(formData[q.field]) : ''}
            onChange={(e) => handleChange(String(q.field), e.target.value)}
            rows={4}
            className={`block w-full rounded-lg shadow-md ${
              errors[q.field] ? 'border-red-500' : 'border-none'
            } py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="Schreibe hier deine Antwort..."
          />
        </div>
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderContact = (q: ContactQuestion) => {
    return (
      <div className="space-y-3 sm:space-y-4">
        {q.fields.map((field, index) => {
          // Safe conversion of form values to string for input fields
          const inputValue = formData[field];
          const stringValue = inputValue !== null && inputValue !== undefined 
            ? String(inputValue) 
            : '';
          
          return (
            <div key={`contact-${String(field)}`} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {q.labels[index]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Use the icon directly without cloning to avoid className typing issues */}
                  {field === 'email' ? 
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-700" /> :
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-700" />
                  }
                </div>
                <input
                  type={field === 'email' ? 'email' : 'tel'}
                  name={String(field)}
                  value={stringValue}
                  onChange={(e) => handleChange(String(field), e.target.value)}
                  className={`pl-9 sm:pl-10 block w-full rounded-lg shadow-md ${
                    errors[field] ? 'border border-red-500' : 'border-none'
                  } py-2.5 sm:py-3 px-3 sm:px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500`}
                  placeholder={q.labels[index]}
                />
              </div>
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Main render function for current question
  const renderQuestion = () => {
    const q = currentQuestionData;
    
    switch (q.type) {
      case 'text-dual':
        return renderTextDual(q as TextDualQuestion);
      case 'binary':
        return renderBinary(q as BinaryQuestion);
      case 'select':
        return renderSelect(q as SelectQuestion);
      case 'checkbox':
        return renderCheckbox(q as CheckboxQuestion);
      case 'rating':
        return renderRating(q as RatingQuestion);
      case 'textarea':
        return renderTextarea(q as TextareaQuestion);
      case 'contact':
        return renderContact(q as ContactQuestion);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-0">
      {/* Add custom styles */}
      <style>{tailwindStyles}</style>
      
      <div className="w-full max-w-xl overflow-hidden px-3 sm:px-4">
        {/* Improved Progress bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="px-3 py-4 sm:px-4 sm:py-6">
          {/* Main content */}
          <div className="min-h-[480px] flex flex-col">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentQuestion}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.25, ease: "easeInOut" },
                  opacity: { duration: 0.2 }
                }}
                className="flex-grow"
              >
                {/* Question header */}
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-2 bg-green-50 rounded-lg">
                    {currentQuestionData.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {currentQuestionData.question}
                  </h2>
                </div>
                
                {/* Question content */}
                {renderQuestion()}
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <div className="mt-8 flex w-full">
              {currentQuestion > 0 ? (
                <button
                  type="button"
                  onClick={goToPreviousQuestion}
                  className="w-3/10 flex justify-center items-center py-2.5 rounded-lg text-gray-700 transition-all border border-gray-300 hover:bg-gray-50 mr-1.5"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                  Zurück
                </button>
              ) : null }
              
              {currentQuestion < filteredQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={goToNextQuestion}
                  className={`flex justify-center items-center py-2.5 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    currentQuestion === 0 ? 'w-full' : 'w-7/10'
                  }`}
                >
                  Weiter
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex justify-center items-center py-2.5 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    currentQuestion === 0 ? 'w-full' : 'w-7/10'
                  }`}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formular;