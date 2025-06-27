import Image from "next/image";
 
 export default function LinksRechts() {
 return (
 <section className="sellwell-section bg-gray-50 mt-8 mb-10">
 <div className="sellwell-container">
   

   {/* Feature 1 - Image Left */}
   <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
     <div className="lg:order-2 space-y-2 pl-3 md:pl-0">
       <div className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full text-[#000]" style={{ backgroundColor: '#7BF3A4' }}>
         FÜR UNTERNEHMEN
       </div>       <h3 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-bold text-gray-900 mb-3">
       Der Partner<br />im D2D in Bayern 
       </h3>
       <p className="text-lg md:text-xl text-gray-600 leading-relaxed pr-10 mb-5">
       Als schnellstwachsender Door-to-Door Vertrieb Bayerns übernehmen wir für führende Unternehmen in der Energiebranche den Außendienst. Mit hocheffektiven Vertriebslösungen und einem ambitionierten Team setzen wir regelmäßig neue Maßstäbe im Markt der erneuerbaren Energie.
       </p>
       <a href="/kontakt">
       <button className="sellwell-btn-secondary">
         Jetzt Erstgespräch sichern
       </button>
       </a>
     </div>
     <div className="lg:order-1 flex justify-left items-left">
       <Image 
        src="/WILLKOMMEN.png"
    	alt="Teambild"
        height={500}
        width={500}
        className="rounded-3xl object-cover"
       />
     </div>
   </div>

   {/* Feature 2 - Image Right */}
   <div className="grid lg:grid-cols-2 gap-16 items-center ">
     <div className="space-y-6 pl-3 md:pl-0">
       <div className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full text-black" style={{ backgroundColor: '#7BF3A4' }}>
         KARRIERE BEI SELLWELL
       </div>
       <h3 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-gray-900">
       Entfalte dein volles<br />Potenzial im Direktvertrieb
       </h3>
       <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        Du bist motiviert und suchst nach einer Möglichkeit, dich finanziell sowie persönlich weiterzuentwickeln? Dann gibt es für dich keinen besseren Ort als Sellwell. Bei uns erwarten dich konstante Weiterbildung und ein sympathisches, ambitioniertes Team.
       </p>
       <ul className="space-y-3 text-[18px]">
         <li className="flex items-center space-x-3">
           <div className="w-5 h-5 bg-[#7BF3A4] rounded-full flex items-center justify-center">
             <svg className="w-3 h-3 text-[#000]" fill="currentColor" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
             </svg>
           </div>
           <span className="text-gray-600">Konstante Weiterbildung & individualisierte Unterstützung</span>
         </li>
         <li className="flex items-center space-x-3">
           <div className="w-5 h-5 bg-[#7BF3A4] rounded-full flex items-center justify-center">
           <svg className="w-3 h-3 text-[#000]" fill="currentColor" viewBox="0 0 20 20">
           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
             </svg>
           </div>
           <span className="text-gray-600">Effiziente Prozesse & Strategien - direkt umsetzbar</span>
         </li>
         <li className="flex items-center space-x-3">
           <div className="w-5 h-5 bg-[#7BF3A4] rounded-full flex items-center justify-center">
           <svg className="w-3 h-3 text-[#000]" fill="currentColor" viewBox="0 0 20 20">
           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
             </svg>
           </div>
           <span className="text-gray-600">Schneller Aufstieg & 1A Gehalt</span>
         </li>
       </ul>
       <a href="/karriere">
       <button className="sellwell-btn-secondary">
         Bei Sellwell durchstarten
       </button>
       </a>
     </div>
     <div className="lg:justify-self-end flex justify-right items-center">
     <Image 
        src="/Potenzial2.png"
    	alt="Teambild"
        height={500}
        width={500}
        className="rounded-3xl object-cover mr-[0px] md:mr-[25px]"
       />
     </div>
   </div> 
 </div>
</section>
 );
}