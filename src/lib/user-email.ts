import nodemailer from 'nodemailer';
import { JobApplication } from './bewerber';
import { ContactRequest } from './firma';

// Reuse the email configuration from the main email.ts file
// We could import it, but to avoid circular dependencies, we'll duplicate just this part
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || '',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASSWORD || '',
    },
  });
};

/**
 * Generate confirmation email template for users who submit the Firma form
 */
const generateFirmaConfirmationTemplate = (data: ContactRequest): string => {
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
          p { margin-bottom: 16px; }
          .section { margin-bottom: 20px; }
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
          .footer {
            text-align: center;
            font-size: 14px;
            color: #666;
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Danke für Ihre Anfrage</h1>
          
          <p>Sehr geehrte(r) ${data.firstName} ${data.lastName},</p>
          
          <p>vielen Dank für Ihre Kooperationsanfrage. Wir haben folgende Informationen erhalten:</p>
          
          <div class="info-box">
            <strong>Unternehmen:</strong> ${data.company}
          </div>
          
          <div class="highlight">
            <strong>Ihre Nachricht:</strong><br>
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <p>Ein Mitglied unseres Teams wird sich innerhalb der nächsten 48 Stunden mit Ihnen in Verbindung setzen.</p>
          
          <p>Mit freundlichen Grüßen,<br>
          Das Sellwell-Team</p>
          
          <div class="footer">
            <p>© 2025 Sellwell Consulting | <a href="https://sellwell-consulting.de">sellwell-consulting.de</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Generate confirmation email template for users who submit the Bewerber form
 */
const generateBewerberConfirmationTemplate = (data: JobApplication): string => {
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
          p { margin-bottom: 16px; }
          .section { margin-bottom: 20px; }
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
          .steps {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
            padding: 15px;
            margin: 20px 0;
          }
          .step {
            padding: 10px;
            border-bottom: 1px solid #eee;
          }
          .step:last-child {
            border-bottom: none;
          }
          .footer {
            text-align: center;
            font-size: 14px;
            color: #666;
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Bewerbung erhalten</h1>
          
          <p>Hallo ${data.firstName},</p>
          
          <p>vielen Dank für deine Bewerbung bei Sellwell. Wir freuen uns über dein Interesse an einer Karriere im Vertrieb!</p>
          
          <div class="highlight">
            <strong>Warum du zu Sellwell passt:</strong><br>
            ${data.fitReason.replace(/\n/g, '<br>')}
          </div>
          
          <p>Hier sind die nächsten Schritte in unserem Bewerbungsprozess:</p>
          
          <div class="steps">
            <div class="step">1. <strong>Bewerbungseingang</strong> - Erledigt ✓</div>
            <div class="step">2. <strong>Erstgespräch</strong> - Ein Recruiter wird dich innerhalb von 5 Werktagen kontaktieren</div>
            <div class="step">3. <strong>Fachgespräch</strong> - Bei gegenseitigem Interesse</div>
            <div class="step">4. <strong>Angebot</strong> - Der Start deiner Karriere bei Sellwell</div>
          </div>
          
          <p>Falls du Fragen hast, kannst du uns gerne unter <a href="mailto:recruiting@sellwell-consulting.de">recruiting@sellwell-consulting.de</a> kontaktieren.</p>
          
          <p>Viele Grüße,<br>
          Das Recruiting-Team von Sellwell</p>
          
          <div class="footer">
            <p>© 2025 Sellwell Consulting | <a href="https://sellwell-consulting.de/karriere">sellwell-consulting.de/karriere</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
};

/**
 * Send confirmation email to company contact request submitter
 */
export async function sendFirmaConfirmationEmail(data: ContactRequest): Promise<boolean> {
  try {
    if (!data.email) {
      console.error('Cannot send confirmation - no email address provided');
      return false;
    }
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Consulting" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `Ihre Anfrage bei Sellwell Consulting`,
      html: generateFirmaConfirmationTemplate(data),
    };
    
    console.log(`Sending confirmation email to ${data.email}`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending firma confirmation email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return false;
  }
}

/**
 * Send confirmation email to job application submitter
 */
export async function sendBewerberConfirmationEmail(data: JobApplication): Promise<boolean> {
  try {
    if (!data.email) {
      console.error('Cannot send confirmation - no email address provided');
      return false;
    }
    
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Sellwell Recruiting" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `Deine Bewerbung bei Sellwell`,
      html: generateBewerberConfirmationTemplate(data),
    };
    
    console.log(`Sending confirmation email to ${data.email}`);
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation message sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending bewerber confirmation email:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }
    return false;
  }
}