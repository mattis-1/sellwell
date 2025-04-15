import { NextRequest, NextResponse } from 'next/server';
import { saveContactRequest, ContactRequestInput } from '@/lib/firma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as ContactRequestInput;
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'company', 'message', 'email', 'phone'] as const;
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
    
    // Save contact request
    const savedContact = await saveContactRequest(data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact request submitted successfully',
      contactId: savedContact.id
    });
    
  } catch (error) {
    console.error('Error handling contact request:', error);
    
    return NextResponse.json(
      { error: 'Failed to process contact request' },
      { status: 500 }
    );
  }
}