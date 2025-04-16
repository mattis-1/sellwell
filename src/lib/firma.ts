import { v4 as uuidv4 } from 'uuid';
import { sendFirmaEmail } from './email';

// Define types
export interface ContactRequest {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  message: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt?: string;
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'rejected';
}

export type ContactRequestInput = Omit<ContactRequest, 'id' | 'createdAt' | 'updatedAt' | 'status'>;

// In-memory storage (will reset on server restart)
let contacts: ContactRequest[] = [];

/**
 * Save a new contact request
 * @param contactData Contact request data
 * @returns Saved contact request with ID
 */
export async function saveContactRequest(contactData: ContactRequestInput): Promise<ContactRequest> {
  try {
    // Create new contact with ID and timestamp
    const newContact: ContactRequest = {
      id: uuidv4(),
      ...contactData,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    // Store in memory (only for current session)
    contacts.push(newContact);
    
    // Send email notification - this is the most important part
    await sendFirmaEmail(newContact);
    
    return newContact;
  } catch (error) {
    console.error('Error processing contact request:', error);
    throw new Error('Failed to process contact request');
  }
}

// Simplified versions of other functions - these won't persist across restarts
// but are kept for API compatibility

export function getAllContactRequests(): ContactRequest[] {
  return [...contacts];
}

export function getContactRequestById(id: string): ContactRequest | null {
  return contacts.find(contact => contact.id === id) || null;
}

export function updateContactRequest(id: string, updateData: Partial<ContactRequest>): ContactRequest | null {
  const index = contacts.findIndex(contact => contact.id === id);
  
  if (index === -1) {
    return null;
  }
  
  contacts[index] = {
    ...contacts[index],
    ...updateData,
    updatedAt: new Date().toISOString()
  };
  
  return contacts[index];
}

export function deleteContactRequest(id: string): boolean {
  const initialLength = contacts.length;
  contacts = contacts.filter(contact => contact.id !== id);
  return contacts.length < initialLength;
}