import Header from "@/components/header";
import Footer from "@/components/footer";

export default function KarrierePage() {
    return (
    <div className="flex min-h-screen flex-col w-full">
    <Header />
      <main className="min-h-screen p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Karriere bei Sell Well Consulting</h1>
        <p>Hier finden Sie unsere aktuellen Stellenangebote und Karrieremöglichkeiten.</p>
        {/* Weiterer Inhalt der Karriere-Seite */}
      </main>
    <Footer />
    </div>
    );
  }