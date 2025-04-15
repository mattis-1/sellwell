import { useState, useEffect } from 'react';

const COOKIE_NAME = 'cookieConsent';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Prüfen, ob bereits eine Einwilligung als Cookie gespeichert ist.
  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  // Handler, wenn der Nutzer "Akzeptieren" klickt
  const handleAccept = (): void => {
    setCookie(COOKIE_NAME, 'akzeptiert', 365);
    setShowBanner(false);
  };

  // Wird im Modal aufgerufen, wenn der Nutzer seine Einstellungen speichert.
  const handleSavePreferences = (preferences: { analytische: boolean; werbung: boolean }): void => {
    const consentData = {
      consent: 'personalisierte',
      analytische: preferences.analytische,
      werbung: preferences.werbung,
    };
    setCookie(COOKIE_NAME, JSON.stringify(consentData), 365);
    setShowModal(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div style={bannerContainerStyle}>
        <div style={bannerContentStyle}>
          <p style={{ margin: 0, flex: 1 }}>
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Indem Sie diese Website nutzen, stimmen Sie unserer{' '}
            <a href="/cookie-policy" style={linkStyle}>
              Cookie-Richtlinie
            </a>{' '}
            zu.
          </p>
          <div style={buttonContainerStyle}>
            <button onClick={handleAccept} style={acceptButtonStyle}>
              Akzeptieren
            </button>
            <button onClick={() => setShowModal(true)} style={settingsButtonStyle}>
              Einstellungen
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <CookiePreferencesModal onSave={handleSavePreferences} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

//
// Hilfsfunktionen zum Setzen und Auslesen von Cookies
//
const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

const getCookie = (name: string): string => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length);
    }
  }
  return '';
};

//
// Modal-Komponente für Cookie-Einstellungen
//
interface CookiePreferencesModalProps {
  onSave: (preferences: { analytische: boolean; werbung: boolean }) => void;
  onClose: () => void;
}

const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ onSave, onClose }) => {
  // Standardmäßig sind beide Toggles eingeschaltet
  const [analytische, setAnalytische] = useState<boolean>(true);
  const [werbung, setWerbung] = useState<boolean>(true);

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2 style={modalHeaderStyle}>Cookie-Einstellungen</h2>
        <p style={modalSubTextStyle}>Wählen Sie Ihre Präferenzen:</p>
        <div style={toggleContainerStyle}>
          <ToggleSwitch label="Analytische Cookies" checked={analytische} onChange={setAnalytische} />
        </div>
        <div style={toggleContainerStyle}>
          <ToggleSwitch label="Werbe-Cookies" checked={werbung} onChange={setWerbung} />
        </div>
        <div style={modalButtonContainerStyle}>
          <button onClick={() => onSave({ analytische, werbung })} style={modalSaveButtonStyle}>
            Speichern
          </button>
          <button onClick={onClose} style={modalCancelButtonStyle}>
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
};

//
// ToggleSwitch-Komponente für ein modernes On/Off-Design
//
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, label }) => {
  return (
    <div style={toggleSwitchWrapperStyle}>
      <span style={toggleLabelStyle}>{label}</span>
      <div
        onClick={() => onChange(!checked)}
        style={{
          ...toggleSwitchStyle,
          backgroundColor: checked ? '#178640' : '#ccc',
        }}
      >
        <div
          style={{
            ...toggleKnobStyle,
            transform: checked ? 'translateX(26px)' : 'translateX(2px)',
          }}
        ></div>
      </div>
    </div>
  );
};

//
// Styles
//
const bannerContainerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  padding: '1rem',
  zIndex: 1000,
};

const bannerContentStyle: React.CSSProperties = {
  maxWidth: '1024px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
};

const buttonContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  marginLeft: '1rem',
};

const acceptButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  border: 'none',
  background: 'linear-gradient(90deg, #10412B, #178640)',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '4px',
};

const settingsButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  border: '1px solid #10412B',
  backgroundColor: '#fff',
  color: '#10412B',
  cursor: 'pointer',
  borderRadius: '4px',
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'underline',
  color: '#10412B',
};

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1100,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '500px',
  width: '90%',
  boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
};

const modalHeaderStyle: React.CSSProperties = {
  margin: '0 0 0.5rem 0',
};

const modalSubTextStyle: React.CSSProperties = {
  margin: '0 0 1.5rem 0',
  color: '#555',
};

const toggleContainerStyle: React.CSSProperties = {
  marginBottom: '1rem',
};

const modalButtonContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '1rem',
  marginTop: '1rem',
};

const modalSaveButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  border: 'none',
  background: 'linear-gradient(90deg, #10412B, #178640)',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '4px',
};

const modalCancelButtonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  border: '1px solid #10412B',
  backgroundColor: '#fff',
  color: '#10412B',
  cursor: 'pointer',
  borderRadius: '4px',
};

//
// ToggleSwitch Styles
//
const toggleSwitchWrapperStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const toggleLabelStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#333',
};

const toggleSwitchStyle: React.CSSProperties = {
  width: '50px',
  height: '28px',
  borderRadius: '14px',
  position: 'relative',
  cursor: 'pointer',
  transition: 'background 0.3s',
};

const toggleKnobStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  position: 'absolute',
  top: '2px',
  left: '2px',
  transition: 'transform 0.3s',
};

export default CookieBanner;
