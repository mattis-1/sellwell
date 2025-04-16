// app/api/bewerber/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { sendBewerberEmail } from '@/lib/email';
import { sendBewerberConfirmationEmail } from '@/lib/user-email';
import { appendToBewerberSheet } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'firstName', 
      'lastName', 
      'salesExperience', 
      'jobImportance', 
      'peopleContact', 
      'driversLicense', 
      'fitReason', 
      'email', 
      'phone'
    ] as const;
    
    const missingFields = requiredFields.filter(field => !data[field]);
    
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
    
    // Create application object with ID and timestamp
    const newApplication = {
      id: uuidv4(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    // Add to Google Sheet
    await appendToBewerberSheet(newApplication);
    
    // Send email notifications
    await sendBewerberEmail(newApplication);
    await sendBewerberConfirmationEmail(newApplication);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Job application submitted successfully',
      applicationId: newApplication.id
    });
    
  } catch (error) {
    console.error('Error handling job application:', error);
    
    return NextResponse.json(
      { error: 'Failed to process job application' },
      { status: 500 }
    );
  }
}