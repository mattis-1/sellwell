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
              width: 90%; 
              max-width: 500px; 
              margin: 0 auto; 
              padding: 20px 15px; 
            }
            @media (max-width: 480px) {
              .container {
                width: 85%;
                padding: 15px 10px;
              }
            }
            h1 { 
              color: #2D7D63; 
              padding-bottom: 10px; 
              margin-bottom: 20px;
              font-weight: 800;
              letter-spacing: -0.5px;
            }
            p { margin-bottom: 16px; }
            .button {
              display: inline-block;
              background: linear-gradient(to right, #19483B, #2D7D63);
              color: white;
              text-decoration: none;
              font-weight: bold;
              padding: 12px 24px;
              border-radius: 25px;
              margin: 15px 0;
              text-align: center;
            }
            .social-icons {
              margin: 25px 0;
            }
            .social-icon {
              display: inline-block;
              margin-right: 15px;
              color: #2D7D63;
              text-decoration: none;
            }
            .contact-info {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
            }
            .contact-item {
              display: flex;
              align-items: center;
              margin-bottom: 8px;
            }
            .icon {
              margin-right: 10px;
              width: 16px;
              height: 16px;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #666;
              margin-top: 30px;
              padding-top: 15px;
              border-top: 1px solid #ddd;
            }
            .footer a {
              color: #2D7D63;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <p>Hallo ${data.firstName},</p>
            
            <p>vielen Dank für deine Bewerbung. Wir freuen uns über dein Interesse, als Vertriebler bei uns durchzustarten.</p>
            
            <p>Unser Team bearbeitet deine Bewerbung so schnell wie möglich und wir melden uns in Kürze bei dir mit weiteren Informationen.</p>
            
            <p>Falls du es noch nicht getan haben solltest, gehe gerne einmal unseren kurzen Persönlichkeitstest durch, um deinen Auswahlprozess zu beschleunigen.</p>
            
            <a href="https://sellwell-consulting.de/personality" class="button">ZUM PERSÖNLICHKEITSTEST</a>
            
            <p>Um einen besseren Einblick in eine Karriere bei Sellwell zu bekommen, kannst du uns auch gerne auf Instagram und Youtube folgen.</p>
            
            <div class="social-icons">
              <a href="https://youtube.com/sellwell" class="social-icon">
                <img src="https://sellwell-consulting.de/assets/youtube-icon.png" alt="Youtube" width="24" height="24" style="vertical-align: middle;"> Youtube
              </a>
              
              <a href="https://instagram.com/sellwell" class="social-icon">
                <img src="https://sellwell-consulting.de/assets/instagram-icon.png" alt="Instagram" width="24" height="24" style="vertical-align: middle;"> Instagram
              </a>
            </div>
            
            <p>Bis bald<br>
            dein Sellwell Team</p>
            
            <div class="contact-info">
              <div class="contact-item">
                <img src="https://sellwell-consulting.de/assets/phone-icon.png" alt="Telefon" class="icon">
                +49 176 76869448
              </div>
              <div class="contact-item">
                <img src="https://sellwell-consulting.de/assets/email-icon.png" alt="Email" class="icon">
                info@sell-well-consulting.de
              </div>
              <div class="contact-item">
                <img src="https://sellwell-consulting.de/assets/address-icon.png" alt="Adresse" class="icon">
                Edelweißstraße 6, 81541 München
              </div>
            </div>
            
            <div class="footer">
              <a href="https://sellwell-consulting.de/impressum">Impressum</a> | 
              <a href="https://sellwell-consulting.de/datenschutz">Datenschutz</a>
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