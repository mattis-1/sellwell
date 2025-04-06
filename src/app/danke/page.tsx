import Header from "@/components/header";
import Footer from "@/components/footer";

export default function KarrierePage() {
    return (
    <div className="flex min-h-screen flex-col w-full">
      <Header />
      <main className="min-h-screen p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Danke Seite</h1>
        <p>Das hier ist die Danke Seite von Sellwell: Vielleicht direkt IG einbinden</p>
        {/* Danke */}
      </main>

      <Footer />
    </div>
    );
  }