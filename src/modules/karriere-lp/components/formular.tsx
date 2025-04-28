import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, Briefcase, Clock, GraduationCap, Users, Zap, Car, Mail, Phone, Star, Check } from 'lucide-react';

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
  const [recentlyChanged, setRecentlyChanged] = useState<string | null>(null);

  // Custom classes for the specific width values
  const tailwindStyles = `
    .w-3\\/10 {
      width: 30%;
    }
    .w-7\\/10 {
      width: 70%;
    }
    @keyframes smoothProgress {
      from { transform: translateX(-5px); opacity: 0.8; }
      to { transform: translateX(0); opacity: 1; }
    }
    .animate-progress {
      animation: smoothProgress 0.3s ease-out;
    }
    .absolute-on-exit {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
    @keyframes pulse-border {
      0% { box-shadow: 0 0 0 0 rgba(36, 101, 81, 0.15); }
      70% { box-shadow: 0 0 0 6px rgba(36, 101, 81, 0); }
      100% { box-shadow: 0 0 0 0 rgba(36, 101, 81, 0); }
    }
    .pulse-animation {
      animation: pulse-border 0.8s ease-out;
    }
    .check-mark-animation {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    input:focus, textarea:focus {
      box-shadow: 0 0 0 3px rgba(36, 101, 81, 0.35); 
    }
    .bg-green-primary {
      background-color: #246551;
    }
    .hover\\:bg-green-dark:hover {
      background-color: #1a5040;
    }
    .bg-green-light {
      background-color: #e6f0ed;
    }
    .border-green-primary {
      border-color: #246551;
    }
    .text-green-primary {
      color: #246551;
    }
    .focus\\:ring-green-primary:focus {
      --tw-ring-color: rgba(36, 101, 81, 0.35);
    }
    .bg-green-lightest {
      background-color: #f0f5f4;
    }
  `;

  // Proper type-safe implementation of handleChange
  const handleChange = (field: string, value: string | boolean | number | null) => {
    setRecentlyChanged(field);
    setTimeout(() => setRecentlyChanged(null), 800);
    
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

  // Bug fix: Fix the validation of jobPreferences
  const validateCurrentQuestion = (): boolean => {
    const newErrors: Record<string, string> = {};
    const q = filteredQuestions[currentQuestion];
    
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
    
    if (q.type === 'checkbox') {
      // Only require selection if this is the current displayed question
      if (
        !formData.jobPreferences.compensation && 
        !formData.jobPreferences.flexibleHours && 
        !formData.jobPreferences.training && 
        !formData.jobPreferences.teamSpirit && 
        !formData.jobPreferences.responsibility
      ) {
        newErrors['jobPreferences'] = 'Bitte wähle mindestens eine Option';
      }
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

  // Submit handler with faster redirection
  const handleSubmit = async () => {
    const isValid = validateCurrentQuestion();
    if (!isValid) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare the form data for submission
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        hasSalesExperience: formData.hasSalesExperience,
        experienceLevel: formData.experienceLevel,
        jobPreferences: {
          compensation: formData.jobPreferences.compensation,
          flexibleHours: formData.jobPreferences.flexibleHours,
          training: formData.jobPreferences.training,
          teamSpirit: formData.jobPreferences.teamSpirit,
          responsibility: formData.jobPreferences.responsibility
        },
        peopleContactRating: formData.peopleContactRating,
        greatestStrength: formData.greatestStrength,
        hasDriversLicense: formData.hasDriversLicense,
        email: formData.email,
        phone: formData.phone,
        submittedAt: new Date().toISOString()
      };
      
      // Make the API call
      const response = await fetch('/api/bewerber/kampagne1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with an error: ${response.status}`);
      }
      
      // Immediately redirect without showing any alerts
      window.location.href = '/danke?lead=true';
      
    } catch (error) {
      // Only show error alerts
      console.error('Error submitting form:', error);
      alert('Es gab einen Fehler bei der Übermittlung. Bitte versuche es erneut.');
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
      icon: <Briefcase className="h-6 w-6 text-green-primary" />,
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
      icon: <Clock className="h-6 w-6 text-green-primary" />,
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
      icon: <GraduationCap className="h-6 w-6 text-green-primary" />,
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
      icon: <Users className="h-6 w-6 text-green-primary" />,
    },
    {
      id: 'greatestStrength',
      type: 'textarea',
      question: 'Was würdest du als deine größte Stärke für den Vertrieb bezeichnen?',
      field: 'greatestStrength',
      icon: <Zap className="h-6 w-6 text-green-primary" />,
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
      icon: <Car className="h-6 w-6 text-green-primary" />,
    },
    {
      id: 'name',
      type: 'text-dual',
      question: 'Wie heißt Du?',
      fields: ['firstName', 'lastName'],
      labels: ['Vorname', 'Nachname'],
      icon: <User className="h-6 w-6 text-green-primary" />,
    },
    {
      id: 'contact',
      type: 'contact',
      question: 'Wie erreichen wir dich?',
      fields: ['email', 'phone'],
      labels: ['E-Mail-Adresse', 'Telefonnummer'],
      icons: [
        <Mail className="h-6 w-6 text-green-primary" key="mail-icon" />,
        <Phone className="h-6 w-6 text-green-primary" key="phone-icon" />
      ],
      icon: <Mail className="h-6 w-6 text-green-primary" />, // Required icon property
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

  // Improved slide animation variants for smoother transitions
  const variants = {
    enter: (direction: string) => ({
      x: direction === 'forward' ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === 'forward' ? -20 : 20,
      opacity: 0,
    }),
  };

  // Render functions for each question type
  const renderTextDual = (q: TextDualQuestion) => {
    return (
      <div className="space-y-13">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {q.fields.map((field, index) => {
            // Safe conversion to string for input value
            const inputValue = formData[field];
            const stringValue = inputValue !== null && inputValue !== undefined 
              ? String(inputValue) 
              : '';
            
            const isRecentlyChanged = recentlyChanged === String(field);
            
            return (
              <div key={`field-${String(field)}`} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {q.labels[index]}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-green-primary" />
                  </div>
                  <input
                    type="text"
                    name={String(field)}
                    value={stringValue}
                    onChange={(e) => handleChange(String(field), e.target.value)}
                    className={`pl-9 sm:pl-10 block w-full rounded-lg transition-all duration-300 ${
                      errors[field] ? 'border border-red-500' : isRecentlyChanged ? 'border border-green-primary pulse-animation' : 'border border-gray-200'
                    } py-3 sm:py-4 px-3 sm:px-4 text-gray-900 focus:outline-none`}
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
        {q.options.map((option) => {
          const isSelected = formData[q.field] === option.value;
          const isRecentlyChanged = recentlyChanged === String(q.field) && isSelected;
          
          return (
            <div
              key={`option-binary-${q.field}-${String(option.value)}`}
              onClick={() => handleChange(String(q.field), option.value)}
              className={`flex items-center p-4 sm:p-5 rounded-lg transition-all duration-300 cursor-pointer relative group ${
                isSelected ? 
                  isRecentlyChanged ? 
                    'bg-green-light border border-green-primary pulse-animation' : 
                    'bg-green-light border border-green-primary' 
                : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.01] transform'
              }`}
            >
              <div className="mr-3 sm:mr-4">
                {q.icon}
              </div>
              <div className="flex-grow">
                <p className="font-medium">{option.label}</p>
              </div>
              {isSelected && (
                <div className="absolute right-4 flex items-center justify-center check-mark-animation">
                  <div className="w-6 h-6 rounded-full bg-green-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderSelect = (q: SelectQuestion) => {
    return (
      <div className="space-y-3">
        {q.options.map((option) => {
          const isSelected = formData[q.field] === option.value;
          const isRecentlyChanged = recentlyChanged === String(q.field) && isSelected;
          
          return (
            <div
              key={`option-select-${q.field}-${option.value}`}
              onClick={() => handleChange(String(q.field), option.value)}
              className={`flex items-center p-4 sm:p-5 rounded-lg cursor-pointer transition-all duration-300 relative group ${
                isSelected ? 
                  isRecentlyChanged ? 
                    'bg-green-light border border-green-primary pulse-animation' : 
                    'bg-green-light border border-green-primary' 
                : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.01] transform'
              }`}
            >
              <div className="mr-3 sm:mr-4">
                {q.icon}
              </div>
              <div className="flex-grow">
                <p className="font-medium">{option.label}</p>
              </div>
              {isSelected && (
                <div className="absolute right-4 flex items-center justify-center check-mark-animation">
                  <div className="w-6 h-6 rounded-full bg-green-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderCheckbox = (q: CheckboxQuestion) => {
    return (
      <div className="space-y-3">
        {q.options.map((option) => {
          const isSelected = formData.jobPreferences[option.value];
          const checkboxField = `jobPreferences.${String(option.value)}`;
          const isRecentlyChanged = recentlyChanged === checkboxField;
          
          return (
            <div
              key={`option-checkbox-${option.value}`}
              onClick={() => {
                const currentValue = formData.jobPreferences[option.value];
                handleChange(checkboxField, !currentValue);
              }}
              className={`flex items-center p-4 sm:p-5 rounded-lg cursor-pointer transition-all duration-300 relative group ${
                isSelected ? 
                  isRecentlyChanged ? 
                    'bg-green-light border border-green-primary pulse-animation' : 
                    'bg-green-light border border-green-primary' 
                : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-[1.01] transform'
              }`}
            >
              <div className="mr-3 sm:mr-4">
                {option.value === 'compensation' && <Star className="h-5 w-5 sm:h-6 sm:w-6 text-green-primary" />}
                {option.value === 'flexibleHours' && <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-primary" />}
                {option.value === 'training' && <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-green-primary" />}
                {option.value === 'teamSpirit' && <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-primary" />}
                {option.value === 'responsibility' && <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-green-primary" />}
              </div>
              <div className="flex-grow">
                <p className="font-medium">{option.label}</p>
              </div>
              {isSelected && (
                <div className="absolute right-4 flex items-center justify-center check-mark-animation">
                  <div className="w-6 h-6 rounded-full bg-green-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
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
          {Array.from({ length: q.max - q.min + 1 }, (_, i) => i + q.min).map((rating) => {
            const isSelected = formData[q.field] === rating;
            const isRecentlyChanged = recentlyChanged === String(q.field) && isSelected;
            
            return (
              <div
                key={`rating-${q.field}-${rating}`}
                onClick={() => handleChange(String(q.field), rating)}
                className={`flex-1 py-4 sm:py-5 rounded-lg cursor-pointer text-center transition-all duration-300 
                  ${isSelected ? 
                    isRecentlyChanged ? 
                      'bg-green-light border border-green-primary pulse-animation scale-110 transform' : 
                      'bg-green-light border border-green-primary scale-110 transform' 
                    : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transform'
                }`}
              >
                <span className={`text-base sm:text-lg font-medium ${isSelected ? 'text-gray-800' : 'text-gray-600'}`}>
                  {rating}
                </span>
              </div>
            );
          })}
        </div>
        {errors[q.field] && (
          <p className="text-red-500 text-sm mt-1">{errors[q.field]}</p>
        )}
      </div>
    );
  };
  
  const renderTextarea = (q: TextareaQuestion) => {
    const isRecentlyChanged = recentlyChanged === String(q.field);
    
    return (
      <div className="space-y-3">
        <div className="relative">
          <textarea
            name={String(q.field)}
            value={formData[q.field] !== null ? String(formData[q.field]) : ''}
            onChange={(e) => handleChange(String(q.field), e.target.value)}
            rows={4}
            className={`block w-full rounded-lg transition-all duration-300 ${
              errors[q.field] ? 'border border-red-500' : isRecentlyChanged ? 'border border-green-primary pulse-animation' : 'border border-gray-200'
            } py-3 px-4 text-gray-900 focus:outline-none`}
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
          
          const isRecentlyChanged = recentlyChanged === String(field);
          
          return (
            <div key={`contact-${String(field)}`} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {q.labels[index]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {field === 'email' ? 
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-primary" /> :
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-primary" />
                  }
                </div>
                <input
                  type={field === 'email' ? 'email' : 'tel'}
                  name={String(field)}
                  value={stringValue}
                  onChange={(e) => handleChange(String(field), e.target.value)}
                  className={`pl-9 sm:pl-10 block w-full rounded-lg transition-all duration-300 ${
                    errors[field] ? 'border border-red-500' : isRecentlyChanged ? 'border border-green-primary pulse-animation' : 'border border-gray-200'
                  } py-2.5 sm:py-3 px-3 sm:px-4 text-gray-900 focus:outline-none`}
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
    <div className="w-full flex flex-col items-center bg-white">
      {/* Add custom styles */}
      <style>{tailwindStyles}</style>
      
      {/* Wrap the form in a div with auto height instead of min-h-screen */}
      <div className="w-full max-w-xl px-3 sm:px-4 my-4">
        {/* Improved Progress bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-green-primary transition-all duration-500 ease-out animate-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 px-3 py-4 sm:px-6 sm:py-8">
          {/* Main content with dynamic height and smooth transitions */}
          <div className="flex flex-col justify-between min-h-[300px]">
            <div className="relative" style={{ minHeight: '240px' }}>
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentQuestion}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full absolute-on-exit"
                  style={{ position: direction === 'forward' ? 'relative' : 'absolute', width: '100%' }}
                >
                  {/* Question header */}
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-2 bg-green-lightest rounded-lg">
                      {currentQuestionData.icon}
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {currentQuestionData.question}
                    </h2>
                  </div>
                  
                  {/* Question content */}
                  {renderQuestion()}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation buttons - always positioned correctly */}
            <div className="mt-8 flex w-full">
              {currentQuestion > 0 ? (
                <button
                  type="button"
                  onClick={goToPreviousQuestion}
                  className="w-3/10 flex justify-center items-center py-2.5 rounded-lg text-gray-700 transition-all duration-300 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 mr-1.5 focus:outline-none focus:ring-2 focus:ring-green-primary"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                  Zurück
                </button>
              ) : null }
              
              {currentQuestion < filteredQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={goToNextQuestion}
                  className={`flex justify-center items-center py-2.5 bg-green-primary text-white rounded-lg hover:bg-green-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-primary transform hover:scale-[1.02] ${
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
                  className={`flex justify-center items-center py-2.5 bg-green-primary text-white rounded-lg hover:bg-green-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-primary transform hover:scale-[1.02] ${
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