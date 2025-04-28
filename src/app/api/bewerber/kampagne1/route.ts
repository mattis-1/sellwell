import { NextRequest, NextResponse } from 'next/server';

// Define the expected form data structure
interface BewerberFormData {
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
    const data: BewerberFormData = await request.json();
    
    // Validate required fields
    const requiredFields = [
      'firstName', 
      'lastName', 
      'hasSalesExperience',
      'jobPreferences',
      'peopleContactRating',
      'greatestStrength',
      'hasDriversLicense',
      'email',
      'phone'
    ] as const;
    
    const missingFields = requiredFields.filter(field => {
      // Handle the nested jobPreferences object specially
      if (field === 'jobPreferences') {
        const preferences = data.jobPreferences;
        // Check if at least one preference is selected
        return !(
          preferences.compensation || 
          preferences.flexibleHours || 
          preferences.training || 
          preferences.teamSpirit || 
          preferences.responsibility
        );
      }
      return data[field] === undefined || data[field] === null || data[field] === '';
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
    
    // Create a record with an ID and timestamp
    const application = {
      id: crypto.randomUUID(),
      ...data,
      campaign: 'kampagne1',
      createdAt: new Date().toISOString()
    };
    
    // Here you would typically:
    // 1. Save to a database
    // 2. Send email notifications
    // 3. Perform any other processing
    
    console.log('Received application:', application);
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: application.id
    });
    
  } catch (error) {
    console.error('Error processing application:', error);
    
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}