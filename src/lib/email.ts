import nodemailer from 'nodemailer';
import { JobApplication } from './bewerber';
import { ContactRequest } from './firma';
import { BewerberData, KampagneData } from './google-sheets';

// Email configuration using environment variables with improved error handling
const getEmailConfig = () => {
  // Check if required email environment variables exist
  const missingVars = [];
  if (!process.env.EMAIL_HOST) missingVars.push('EMAIL_HOST');
  if (!process.env.EMAIL_USER) missingVars.push('EMAIL_USER');
  if (!process.env.EMAIL_PASSWORD) missingVars.push('EMAIL_PASSWORD');
  
  if (missingVars.length > 0) {
    console.error(`CRITICAL EMAIL ERROR: Missing environment variables: ${missingVars.join(', ')}`);
  }
  
  return {
    host: process.env.EMAIL_HOST || '',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASSWORD || '',
    },
  };
};

// Create transporter with better error handling
const createTransporter = () => {
  const config = getEmailConfig();
  console.log('Email config (without password):', {
    ...config,
    auth: { user: config.auth.user, pass: config.auth.pass ? '****' : 'NOT SET' }
  });
  return nodemailer.createTransport(config);

};

// Generate email template for Kampagne form submissions
const generateKampagneEmailTemplate = (data: KampagneData): string => {
  return `
    <h1>Neue Kampagnen-Bewerbung erhalten</h1>
    <p><strong>ID:</strong> ${data.id}</p>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telefon:</strong> ${data.phone}</p>
    <p><strong>Vertriebserfahrung:</strong> ${data.salesExperience}</p>
    ${data.experienceLevel ? `<p><strong>Erfahrungslevel:</strong> ${data.experienceLevel}</p>` : ''}
    <p><strong>Wichtig im Job:</strong> ${data.jobImportance}</p>
    <p><strong>Kontaktfreude (1-5):</strong> ${data.peopleContact}</p>
    <p><strong>Führerschein:</strong> ${data.driversLicense}</p>
    <p><strong>Stärke im Vertrieb:</strong> ${data.fitReason}</p>
    <p><strong>Kampagne:</strong> ${data.campaign}</p>
    <p><strong>Eingetragen am:</strong> ${new Date().toLocaleString('de-DE')}</p>
  `;
};

/**
 * Generate HTML email template for firma contact requests
 */
const generateFirmaEmailTemplate = (data: ContactRequest): string => {
  // Create a proper date object from the ISO string
  const dateObj = new Date(data.createdAt);
  
  // Format the date for German timezone (Europe/Berlin)
  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Berlin'
  }).format(dateObj);
  
  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          .container { 
            width: 95%; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px 0; 
          }
          h1 { 
            color: #0C462B; 
            border-bottom: 2px solid #eee; 
            padding-bottom: 10px; 
            margin-bottom: 20px;
            font-weight: 800;
            letter-spacing: -0.5px;
          }
          .section { margin-bottom: 20px; }
          .label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
          }
          .info-box {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
            padding: 15px;
            margin-bottom: 12px;
          }
          .highlight { 
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.15);
            padding: 20px; 
            border-left: 4px solid #16a34a; 
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Neue Kooperationsanfrage</h1>
          
          <div class="section">
            <div class="info-box"><span class="label">Name:</span> ${data.firstName} ${data.lastName}</div>
            <div class="info-box"><span class="label">Unternehmen:</span> ${data.company}</div>
            <div class="info-box"><span class="label">Email:</span> ${data.email}</div>
            <div class="info-box"><span class="label">Telefon:</span> ${data.phone}</div>
          </div>
          
          <div class="highlight">
            <div><span class="label">Nachricht:</span></div>
            <div>${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="info-box">
            <span class="label">Datum:</span> ${formattedDate}
          </div>
          <div class="info-box">
            <span class="label">Status:</span> ${data.status}
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Generate HTML email template for bewerber job applications
 */
const generateBewerberEmailTemplate = (data: JobApplication): string => {
  // Create a proper date object from the ISO string
  const dateObj = new Date(data.createdAt);
  
  // Format the date for German timezone (Europe/Berlin)
  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Berlin'
  }).format(dateObj);
  
  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
          .container { 
            width: 90%; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px 0; 
          }
          h1 { 
            color: #0C462B; 
            border-bottom: 2px solid #eee; 
            padding-bottom: 10px; 
            margin-bottom: 20px;
            font-weight: 800;
            letter-spacing: -0.5px;
          }
          .section { margin-bottom: 20px; }
          .label { 
            font-weight: bold; 
            margin-right: 5px; 
            color: #555;
          }
          .info-box {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
            padding: 15px;
            margin-bottom: 12px;
          }
          .highlight { 
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.15);
            padding: 20px; 
            border-left: 4px solid #16a34a; 
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Neue Bewerbung bei Sellwell</h1>
          
          <div class="section">
            <div class="info-box"><span class="label">Name:</span> ${data.firstName} ${data.lastName}</div>
            <div class="info-box"><span class="label">Email:</span> ${data.email}</div>
            <div class="info-box"><span class="label">Telefon:</span> ${data.phone}</div>
          </div>
          
          <div class="section">
            <div class="info-box"><span class="label">Vertriebserfahrung:</span> ${data.salesExperience}</div>
            <div class="info-box"><span class="label">Wichtigkeit im Job:</span> ${data.jobImportance}</div>
            <div class="info-box"><span class="label">Kontakt zu Menschen:</span> ${data.peopleContact}</div>
            <div class="info-box"><span class="label">Führerschein:</span> ${data.driversLicense}</div>
          </div>
          
          <div class="highlight">
            <div><span class="label">Passt gut zu Sellwell, weil:</span></div>
            <div>${data.fitReason.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="info-box">
            <span class="label">Datum:</span> ${formattedDate}
          </div>
          <div class="info-box">
            <span class="label">Status:</span> ${data.status}
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Send email notification for firma contact request
 */
export async function sendFirmaEmail(data: ContactRequest): Promise<boolean> {
  try {
    // Check if notification email is set
    const recipientEmail = process.env.NOTIFICATION_EMAIL;
    if (!recipientEmail) {
      console.error('CRITICAL: NOTIFICATION_EMAIL environment variable is not set');
      return false;
    }
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `Neue Kooperationsanfrage: ${data.firstName} ${data.lastName} von ${data.company}`,
      html: generateFirmaEmailTemplate(data),
      replyTo: data.email,
    };
    
    console.log(`Attempting to send email to ${recipientEmail}`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('CRITICAL - Error sending firma email:', error);
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
}

/**
 * Send email notification for bewerber job application
 */
export async function sendBewerberEmail(data: JobApplication): Promise<boolean> {
  try {
    // Check if notification email is set
    const recipientEmail = process.env.NOTIFICATION_EMAIL;
    if (!recipientEmail) {
      console.error('CRITICAL: NOTIFICATION_EMAIL environment variable is not set');
      return false;
    }
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Bewerbungen" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `Neue Bewerbung: ${data.firstName} ${data.lastName}`,
      html: generateBewerberEmailTemplate(data),
      replyTo: data.email,
    };
    
    console.log(`Attempting to send email to ${recipientEmail}`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('CRITICAL - Error sending bewerber email:', error);
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return false;
  }
}

export async function sendKampagneEmail(data: KampagneData): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Kampagnen" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'info@sell-well-consulting.de',
      subject: `Neue Kampagnen-Bewerbung: ${data.firstName} ${data.lastName}`,
      html: generateKampagneEmailTemplate(data),
    };
    
    console.log('Sending kampagne notification email');
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending kampagne email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return false;
  }
}