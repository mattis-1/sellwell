import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Your Google Sheet ID (from the URL of your sheet)
const SPREADSHEET_ID = '13xQufn_RmVuYcUVRemPHKhCQYL9ZxVzqSw0lv3HaQZo';

// Define an interface for the Bewerber sheet data
export interface BewerberData {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  salesExperience: string; // Change to boolean if appropriate
  jobImportance: string;
  peopleContact: string;
  driversLicense: string;
  fitReason: string;
}

// Define an interface for the Firmen sheet data
export interface FirmenData {
  id: string | number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

// Create a JWT client using service account credentials
const getAuthClient = () => {
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '', 'base64').toString()
  );
  
  return new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
};

// Function to get formatted date and time in German format with correct timezone
function getFormattedDateTime() {
  // Create a date object with the current time
  const now = new Date();
  
  // Format the date for German timezone (Europe/Berlin)
  return now.toLocaleString('de-DE', { 
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

// Function to append data to the Bewerber sheet
export async function appendToBewerberSheet(data: BewerberData) {
  try {
    const authClient = getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
    
    // Format the data according to your sheet headers
    const rowData = [
      data.id,           // ID
      data.firstName,    // Vorname
      data.lastName,     // Nachname
      data.email,        // Email
      data.phone,        // Telefonnummer
      data.salesExperience, // Erfahrung?
      data.jobImportance,   // Besonders wichtig?
      data.peopleContact,   // Gerne unterwegs und im Kontakt?
      data.driversLicense,  // Führerschein?
      data.fitReason,       // Passt gut zu Sellwell, weil ...
      getFormattedDateTime(), // Eingetragen am ... (with correct timezone)
      '', // Persönlichkeitstest?
      '', // Persönlichkeitstest Ergebnis
      ''  // Persönlichkeitstest Einträge
    ];
    
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Bewerber!A:N', // Use all columns
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData]
      }
    });
    
    return result.data;
  } catch (error) {
    console.error('Error appending to Bewerber sheet:', error);
    throw error;
  }
}

// Function to append data to the Firmen sheet
export async function appendToFirmenSheet(data: FirmenData) {
  try {
    const authClient = getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
    
    // Format the data according to your sheet headers
    const rowData = [
      data.id,           // ID
      data.firstName,    // Vorname
      data.lastName,     // Nachname
      data.company,      // Unternehmen
      data.email,        // Email
      data.phone,        // Telefonnummer
      data.message,      // Nachricht
      getFormattedDateTime() // Eingetragen am ... (with correct timezone)
    ];
    
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Firmen!A:H', // Use all columns
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData]
      }
    });
    
    return result.data;
  } catch (error) {
    console.error('Error appending to Firmen sheet:', error);
    throw error;
  }
}