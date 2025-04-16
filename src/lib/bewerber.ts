import { v4 as uuidv4 } from 'uuid';
import { sendBewerberEmail } from './email';
import { sendBewerberConfirmationEmail } from './user-email';

// Define types
export interface JobApplication {
  id: string;
  firstName: string;
  lastName: string;
  salesExperience: string;
  jobImportance: string;
  peopleContact: string;
  driversLicense: string;
  fitReason: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt?: string;
  status: 'new' | 'screening' | 'interview' | 'offer' | 'rejected' | 'hired';
}

export type JobApplicationInput = Omit<JobApplication, 'id' | 'createdAt' | 'updatedAt' | 'status'>;

// In-memory storage (will reset on server restart - for development purposes only)
let applications: JobApplication[] = [];

/**
 * Save a new job application
 * @param applicationData Job application data
 * @returns Saved job application with ID
 */
export async function saveJobApplication(applicationData: JobApplicationInput): Promise<JobApplication> {
  try {
    // Create new application with ID and timestamp
    const newApplication: JobApplication = {
      id: uuidv4(),
      ...applicationData,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    // Store in memory (only for current session)
    applications.push(newApplication);
    
    // Send email notification to admin
    await sendBewerberEmail(newApplication);
    
    // Send confirmation email to the applicant
    await sendBewerberConfirmationEmail(newApplication);
    
    return newApplication;
  } catch (error) {
    console.error('Error processing job application:', error);
    throw new Error('Failed to process job application');
  }
}

// Simplified versions of other functions - these won't persist across restarts
// but are kept for API compatibility

export function getAllJobApplications(): JobApplication[] {
  return [...applications];
}

export function getJobApplicationById(id: string): JobApplication | null {
  return applications.find(application => application.id === id) || null;
}

export function updateJobApplication(id: string, updateData: Partial<JobApplication>): JobApplication | null {
  const index = applications.findIndex(application => application.id === id);
  
  if (index === -1) {
    return null;
  }
  
  applications[index] = {
    ...applications[index],
    ...updateData,
    updatedAt: new Date().toISOString()
  };
  
  return applications[index];
}

export function deleteJobApplication(id: string): boolean {
  const initialLength = applications.length;
  applications = applications.filter(application => application.id !== id);
  return applications.length < initialLength;
}

export function getJobApplicationsByStatus(status: JobApplication['status']): JobApplication[] {
  return applications.filter(application => application.status === status);
}