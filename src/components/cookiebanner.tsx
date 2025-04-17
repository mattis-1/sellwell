import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';

const COOKIE_NAME = 'cookieConsent';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytic, setAnalytic] = useState(true);
  const [advertising, setAdvertising] = useState(true);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) setShowBanner(true);
  }, []);

  const handleAcceptAll = () => {
    setCookie(COOKIE_NAME, JSON.stringify({ consent: 'all', analytic: true, advertising: true }), 365);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const data = {
      consent: 'custom',
      analytic,
      advertising,
    };
    setCookie(COOKIE_NAME, JSON.stringify(data), 365);
    setShowModal(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 shadow-lg bg-[#ffffff] z-[1000]">
      <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm flex-1">
          Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mehr dazu in unserer{' '}
          <a href="/cookie-policy" className="text-green-700 underline">
            Cookie-Richtlinie
          </a>.
        </p>
        <div className="flex gap-2">
          <Button
            variant="default"
            style={{ backgroundImage: 'linear-gradient(90deg, #19473A 0%, #2F8166 100%)' }}
            onClick={handleAcceptAll}
          >
            Alle Akzeptieren
          </Button>
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-green-800 text-green-800">
                Einstellungen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cookie-Einstellungen</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-between">
                  <span>Analytische Cookies</span>
                  <Switch checked={analytic} onCheckedChange={setAnalytic} />
                </div>
                <div className="flex items-center justify-between">
                  <span>Werbe-Cookies</span>
                  <Switch checked={advertising} onCheckedChange={setAdvertising} />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button variant="default" onClick={handleSavePreferences}>
                  Speichern
                </Button>
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Abbrechen
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper functions
function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name: string): string {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return '';
}

export default CookieBanner;
