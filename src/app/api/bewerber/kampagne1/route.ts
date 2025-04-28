import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { sendKampagneEmail } from '@/lib/email';
import { sendKampagneConfirmationEmail } from '@/lib/user-email';
import { appendToKampagneSheet } from '@/lib/google-sheets';

// Define the expected form data structure
interface KampagneFormData {
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
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON
    const data: KampagneFormData = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'firstName', 
      'lastName', 
      'hasSalesExperience',
      'peopleContactRating',
      'greatestStrength',
      'hasDriversLicense',
      'email',
      'phone'
    ] as const;
    
    const missingFields = requiredFields.filter(field => {
      if (field === 'hasSalesExperience' || field === 'hasDriversLicense') {
        return data[field] === null;
      }
      if (field === 'peopleContactRating') {
        return data[field] === null;
      }
      return !data[field];
    });
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Basic phone validation
    const phoneRegex = /^[0-9+\s()-]{8,}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }
    
    // Format job preferences for sheets and emails
    const jobPreferences = [];
    if (data.jobPreferences.compensation) jobPreferences.push('Attraktive Vergütung');
    if (data.jobPreferences.flexibleHours) jobPreferences.push('Flexible Arbeitszeiten');
    if (data.jobPreferences.training) jobPreferences.push('Weiterbildungsmöglichkeiten');
    if (data.jobPreferences.teamSpirit) jobPreferences.push('Teamspirit');
    if (data.jobPreferences.responsibility) jobPreferences.push('Eigenverantwortung');
    
    // Create application object with ID and timestamp
    const newApplication = {
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      salesExperience: data.hasSalesExperience ? 'Ja' : 'Nein',
      experienceLevel: data.experienceLevel || 'Keine',
      jobImportance: jobPreferences.join(', '),
      peopleContact: data.peopleContactRating?.toString() || '',
      driversLicense: data.hasDriversLicense ? 'Ja' : 'Nein',
      fitReason: data.greatestStrength,
      email: data.email,
      phone: data.phone,
      campaign: 'Kampagne 1',
      createdAt: new Date().toISOString()
    };
    
    // Add to Google Sheet
    await appendToKampagneSheet(newApplication);
    
    // Send email notifications
    await sendKampagneEmail(newApplication);
    await sendKampagneConfirmationEmail(newApplication);
    
    // Return success response with redirect URL
    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully',
      applicationId: newApplication.id,
      redirectUrl: '/danke?lead=true'
    });
    
  } catch (error) {
    console.error('Error processing application:', error);
    
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}