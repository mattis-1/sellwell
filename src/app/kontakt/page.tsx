import Header from "@/components/header";
import Footer from "@/components/footer";
import SellwellForm from "@/components/form"
import Image from 'next/image';

export default function KontaktPage() {
    return (
        <div className="flex min-h-screen flex-col w-full">
        <Header />
        <main className="flex-grow p-4 md:p-8">
        <div className="flex justify-center mb-3">
  <div className="inline-flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[25px] px-4 py-2 border border-[#C8C7C6] shadow-[2px_2px_19px_0px_rgba(0,0,0,0.09)]">
    <Image 
      src="/Green Star.svg" 
      alt="Green Star" 
      width={22}
      height={22}
      className="mr-2"
    />
    <p className="text-center font-medium text-primary">
      Jetzt Kontakt mit uns aufnehmen
    </p>
  </div>
</div>
          <h1 className="text-[55px] leading-17 font-bold mb-6 text-center">Wir freuen uns auf<br /><span className="text-center bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent">deine Nachricht</span></h1>
          <SellwellForm />
        </main>
        <Footer />
      </div>
    );
}