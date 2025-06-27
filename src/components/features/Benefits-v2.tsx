import Image from "next/image";
import Link from "next/link";

export default function BenefitsV2() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-24">
     <div className="lg:order-2 space-y-4 pl-6 pb-10 md:pb-0 md:pl-0">
       <h3 className="text-[32px] md:text-[42px] font-bold leading-[1.2] font-bold text-gray-900">
       Warum bei<br />Sellwell arbeiten?
       </h3>
       <p className="text-lg md:text-xl text-gray-600 leading-relaxed pr-10">
       Du bist motiviert und suchst nach einer Möglichkeit, in einem ambitionierten Umfeld große Dinge zu erreichen und dich finanziell sowie persönlich weiterzuentwickeln? Dann gibt es für dich keinen besseren Ort als Sellwell. Bei uns erwarten dich konstante Weiterbildung und sympathische, erfolgsgetriebene Kollegen, die dich vorantreiben und motivieren, besser zu werden.
       </p>
       <Link href="/karriere">
       <button className="sellwell-btn-primary mt-2 md:mt-0">
         Jetzt Bewerben
       </button>
       </Link>
     </div>
     <div className="lg:order-1 hidden lg:flex justify-center items-center ">
       <Image 
        src="/WarumBei.png"
    	alt="Teambild"
        height={500}
        width={500}
        className="rounded-3xl object-cover h-110 w-[90%] justify-right"
       />
     </div>
   </div>
    </div>
  )
}