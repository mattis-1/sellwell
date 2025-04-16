// app/api/firma/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { sendFirmaEmail } from '@/lib/email';
import { sendFirmaConfirmationEmail } from '@/lib/user-email';
import { appendToFirmenSheet } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
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
    
    // Create contact object with ID and timestamp
    const newContact = {
      id: uuidv4(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    // Add to Google Sheet
    await appendToFirmenSheet(newContact);
    
    // Send email notifications
    await sendFirmaEmail(newContact);
    await sendFirmaConfirmationEmail(newContact);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact request submitted successfully',
      contactId: newContact.id
    });
    
  } catch (error) {
    console.error('Error handling contact request:', error);
    
    return NextResponse.json(
      { error: 'Failed to process contact request' },
      { status: 500 }
    );
  }
}