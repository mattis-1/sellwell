import nodemailer from 'nodemailer';
import { JobApplication } from './bewerber';
import { ContactRequest } from './firma';

// Email configuration using environment variables
const emailConfig = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport(emailConfig);
};

/**
 * Generate HTML email template for firma contact requests
 */
const generateFirmaEmailTemplate = (data: ContactRequest): string => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0C462B; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .section { margin-bottom: 20px; }
          .label { font-weight: bold; margin-right: 5px; }
          .highlight { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #16a34a; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Neue Vertriebslösung Anfrage</h1>
          
          <div class="section">
            <div><span class="label">Name:</span> ${data.firstName} ${data.lastName}</div>
            <div><span class="label">Unternehmen:</span> ${data.company}</div>
            <div><span class="label">Email:</span> ${data.email}</div>
            <div><span class="label">Telefon:</span> ${data.phone}</div>
          </div>
          
          <div class="section highlight">
            <div><span class="label">Nachricht:</span></div>
            <div>${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="section">
            <p>Datum: ${new Date(data.createdAt).toLocaleString('de-DE')}</p>
            <p>Status: ${data.status}</p>
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
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #0C462B; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .section { margin-bottom: 20px; }
          .label { font-weight: bold; margin-right: 5px; }
          .highlight { background-color: #f8f9fa; padding: 15px; border-left: 4px solid #16a34a; }
          .data-row { margin-bottom: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Neue Bewerbung bei Sellwell</h1>
          
          <div class="section">
            <div class="data-row"><span class="label">Name:</span> ${data.firstName} ${data.lastName}</div>
            <div class="data-row"><span class="label">Email:</span> ${data.email}</div>
            <div class="data-row"><span class="label">Telefon:</span> ${data.phone}</div>
          </div>
          
          <div class="section">
            <div class="data-row"><span class="label">Vertriebserfahrung:</span> ${data.salesExperience}</div>
            <div class="data-row"><span class="label">Wichtigkeit im Job:</span> ${data.jobImportance}</div>
            <div class="data-row"><span class="label">Kontakt zu Menschen:</span> ${data.peopleContact}</div>
            <div class="data-row"><span class="label">Führerschein:</span> ${data.driversLicense}</div>
          </div>
          
          <div class="section highlight">
            <div><span class="label">Passt gut zu Sellwell, weil:</span></div>
            <div>${data.fitReason.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="section">
            <p>Datum: ${new Date(data.createdAt).toLocaleString('de-DE')}</p>
            <p>Status: ${data.status}</p>
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
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || 'service@bmmarketscale.com',
      subject: `Neue Anfrage: ${data.firstName} ${data.lastName} von ${data.company}`,
      html: generateFirmaEmailTemplate(data),
      replyTo: data.email,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending firma email:', error);
    return false;
  }
}

/**
 * Send email notification for bewerber job application
 */
export async function sendBewerberEmail(data: JobApplication): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Bewerbungen" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || 'service@bmmarketscale.com',
      subject: `Neue Bewerbung: ${data.firstName} ${data.lastName}`,
      html: generateBewerberEmailTemplate(data),
      replyTo: data.email,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending bewerber email:', error);
    return false;
  }
}