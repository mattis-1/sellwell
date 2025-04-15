import { NextRequest, NextResponse } from 'next/server';
import { saveJobApplication, JobApplicationInput } from '@/lib/bewerber';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as JobApplicationInput;
    
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
    
    // Save job application
    const savedApplication = await saveJobApplication(data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Job application submitted successfully',
      applicationId: savedApplication.id
    });
    
  } catch (error) {
    console.error('Error handling job application:', error);
    
    return NextResponse.json(
      { error: 'Failed to process job application' },
      { status: 500 }
    );
  }
}