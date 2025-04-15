import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { sendBewerberEmail } from './email';

const DATA_DIR = path.join(process.cwd(), 'data');
const APPLICATIONS_FILE = path.join(DATA_DIR, 'bewerber_applications.json');

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

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure applications file exists
if (!fs.existsSync(APPLICATIONS_FILE)) {
  fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify([]));
}

/**
 * Get all job applications
 * @returns Array of job applications
 */
export function getAllJobApplications(): JobApplication[] {
  try {
    const data = fs.readFileSync(APPLICATIONS_FILE, 'utf8');
    return JSON.parse(data) as JobApplication[];
  } catch (error) {
    console.error('Error reading applications file:', error);
    return [];
  }
}

/**
 * Save a new job application
 * @param applicationData Job application data
 * @returns Saved job application with ID
 */
export async function saveJobApplication(applicationData: JobApplicationInput): Promise<JobApplication> {
  try {
    const applications = getAllJobApplications();
    
    // Create new application with ID and timestamp
    const newApplication: JobApplication = {
      id: uuidv4(),
      ...applicationData,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    // Add to applications array
    applications.push(newApplication);
    
    // Save to file
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
    
    // Send email notification
    await sendBewerberEmail(newApplication);
    
    return newApplication;
  } catch (error) {
    console.error('Error saving job application:', error);
    throw new Error('Failed to save job application');
  }
}

/**
 * Get a job application by ID
 * @param id Application ID
 * @returns Job application or null if not found
 */
export function getJobApplicationById(id: string): JobApplication | null {
  try {
    const applications = getAllJobApplications();
    return applications.find(application => application.id === id) || null;
  } catch (error) {
    console.error('Error getting application by ID:', error);
    return null;
  }
}

/**
 * Update a job application
 * @param id Application ID
 * @param updateData Updated application data
 * @returns Updated application or null if not found
 */
export function updateJobApplication(id: string, updateData: Partial<JobApplication>): JobApplication | null {
  try {
    const applications = getAllJobApplications();
    const index = applications.findIndex(application => application.id === id);
    
    if (index === -1) {
      return null;
    }
    
    // Update application
    applications[index] = {
      ...applications[index],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    // Save to file
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
    
    return applications[index];
  } catch (error) {
    console.error('Error updating application:', error);
    return null;
  }
}

/**
 * Delete a job application
 * @param id Application ID
 * @returns Success status
 */
export function deleteJobApplication(id: string): boolean {
  try {
    const applications = getAllJobApplications();
    const filteredApplications = applications.filter(application => application.id !== id);
    
    if (filteredApplications.length === applications.length) {
      return false; // Application not found
    }
    
    // Save to file
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(filteredApplications, null, 2));
    
    return true;
  } catch (error) {
    console.error('Error deleting application:', error);
    return false;
  }
}

/**
 * Get applications filtered by status
 * @param status Status to filter by
 * @returns Filtered applications
 */
export function getJobApplicationsByStatus(status: JobApplication['status']): JobApplication[] {
  try {
    const applications = getAllJobApplications();
    return applications.filter(application => application.status === status);
  } catch (error) {
    console.error('Error filtering applications by status:', error);
    return [];
  }
}