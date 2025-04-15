import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { sendFirmaEmail } from './email';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'firma_contacts.json');

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

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure contacts file exists
if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]));
}

/**
 * Get all contact requests
 * @returns Array of contact requests
 */
export function getAllContactRequests(): ContactRequest[] {
  try {
    const data = fs.readFileSync(CONTACTS_FILE, 'utf8');
    return JSON.parse(data) as ContactRequest[];
  } catch (error) {
    console.error('Error reading contacts file:', error);
    return [];
  }
}

/**
 * Save a new contact request
 * @param contactData Contact request data
 * @returns Saved contact request with ID
 */
export async function saveContactRequest(contactData: ContactRequestInput): Promise<ContactRequest> {
  try {
    const contacts = getAllContactRequests();
    
    // Create new contact with ID and timestamp
    const newContact: ContactRequest = {
      id: uuidv4(),
      ...contactData,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    
    // Add to contacts array
    contacts.push(newContact);
    
    // Save to file
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    // Send email notification
    await sendFirmaEmail(newContact);
    
    return newContact;
  } catch (error) {
    console.error('Error saving contact request:', error);
    throw new Error('Failed to save contact request');
  }
}

/**
 * Get a contact request by ID
 * @param id Contact request ID
 * @returns Contact request or null if not found
 */
export function getContactRequestById(id: string): ContactRequest | null {
  try {
    const contacts = getAllContactRequests();
    return contacts.find(contact => contact.id === id) || null;
  } catch (error) {
    console.error('Error getting contact by ID:', error);
    return null;
  }
}

/**
 * Update a contact request
 * @param id Contact request ID
 * @param updateData Updated contact data
 * @returns Updated contact or null if not found
 */
export function updateContactRequest(id: string, updateData: Partial<ContactRequest>): ContactRequest | null {
  try {
    const contacts = getAllContactRequests();
    const index = contacts.findIndex(contact => contact.id === id);
    
    if (index === -1) {
      return null;
    }
    
    // Update contact
    contacts[index] = {
      ...contacts[index],
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    
    // Save to file
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    return contacts[index];
  } catch (error) {
    console.error('Error updating contact:', error);
    return null;
  }
}

/**
 * Delete a contact request
 * @param id Contact request ID
 * @returns Success status
 */
export function deleteContactRequest(id: string): boolean {
  try {
    const contacts = getAllContactRequests();
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    
    if (filteredContacts.length === contacts.length) {
      return false; // Contact not found
    }
    
    // Save to file
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(filteredContacts, null, 2));
    
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    return false;
  }
}