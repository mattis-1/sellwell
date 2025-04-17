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
      <!DOCTYPE html>
      <html lang="de">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Vielen Dank für Ihre Anfrage zur Zusammenarbeit!</title>
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
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              @media (max-width: 480px) {
                .container {
                  width: 85%;
                  padding: 15px 10px;
                }
              }
              .content {
                font-size: 16px;
                line-height: 1.6;
                color: #23496d;
              }
              .content p {
                margin: 10px 0;
              }
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
              .social-links {
                margin: 25px 0;
                text-align: center;
              }
              .social-icon {
                display: block;
                margin: 10px 0;
                text-decoration: none;
                color: #2D7D63;
                font-size: 14px;
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
              <div class="content">
                  <p>Sehr geehrte(r) ${data.lastName},</p>
                  <p>vielen Dank für Ihre Anfrage zur Zusammenarbeit. Wir freuen uns, mit Ihnen in Kontakt zu treten und eine erfolgreiche Partnerschaft aufzubauen.</p>
                  <p>Im nächsten Schritt wird unser Team Sie kontaktieren, um die Details der Zusammenarbeit zu besprechen und einen passenden Zeitplan zu vereinbaren. Wir freuen uns darauf, mit Ihnen gemeinsam die nächsten Schritte zu planen.</p>
                  <p>Bei Fragen stehen wir Ihnen selbstverständlich jederzeit zur Verfügung.</p>
                  <p>Mit freundlichen Grüßen,<br>
                  Ihr Team von Sellwell Consulting</p>
              </div>
              
              <div class="social-links">
                <a href="https://www.youtube.com/@SellwellConsulting" class="social-icon" target="_blank">
                    <span style="color: #FF0000; font-size: 18px; margin-right: 5px;">▶️</span> Sellwell Consulting YouTube-Kanal
                </a>
                <a href="https://www.instagram.com/kress_maximilian/" class="social-icon" target="_blank">
                    <span style="color: #C13584; font-size: 18px; margin-right: 5px;">📸</span> Sellwell Consulting auf Instagram
                </a>
                <a href="https://sellwell-consulting.de" class="social-icon" target="_blank">
                    <span style="color: #2D7D63; font-size: 18px; margin-right: 5px;">🌐</span> Zur Website von Sellwell Consulting
                </a>
              </div>
              
              <div class="contact-info">
                <div class="contact-item">
                  <span style="margin-right: 10px; font-size: 18px;">📞</span>
                  +49 176 76869448
                </div>
                <div class="contact-item">
                  <span style="margin-right: 10px; font-size: 18px;">✉️</span>
                  info@sell-well-consulting.de
                </div>
                <div class="contact-item">
                  <span style="margin-right: 10px; font-size: 18px;">📍</span>
                  Leiblstraße 26, 85567 Neubiberg
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
    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Youtube" width="24" height="24" style="vertical-align: middle;"> Youtube
  </a>
  
  <a href="https://instagram.com/sellwell" class="social-icon">
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" style="vertical-align: middle;"> Instagram
  </a>
</div>
            
            <p>Bis bald<br>
            dein Sellwell Team</p>
            
            <div class="contact-info">
  <div class="contact-item">
    <img src="https://cdn-icons-png.flaticon.com/512/455/455705.png" alt="Telefon" class="icon" style="width: 16px; height: 16px;">
    +49 176 76869448
  </div>
  <div class="contact-item">
    <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="Email" class="icon" style="width: 16px; height: 16px;">
    info@sell-well-consulting.de
  </div>
  <div class="contact-item">
    <img src="https://cdn-icons-png.flaticon.com/512/1054/1054092.png" alt="Adresse" class="icon" style="width: 16px; height: 16px;">
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