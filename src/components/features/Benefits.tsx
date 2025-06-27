import Image from "next/image"

export default function Benefits() {
return (
<section
className={`sellwell-section bg-[#F9FAFB] transition-all duration-1000`}
>
<div className="flex flex-col items-center">
  <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
          Warum SellWell?
  </h2>
</div>
<div className="sellwell-container">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-[#222222]">
  
    {/* Benefit 1 */}
    <div className="sellwell-benefit-container-alt">
      <div className="mb-3 mr-auto">
      <Image 
        src="/green-shx-icon1.svg"
        alt="icon"
        width={75}
        height={75}
        />
      </div>
      <h3 className="text-[23px] md:text-[28px] font-[600] text-left tracking-[-0.72px] leading-[1.2] mb-3 mr-auto ml-[10px]">Grenzenloser<br />Aufstieg</h3>
      <p className="text-md md:text-lg text-gray-800 leading-[1.4] text-left ml-[-5px] mb-3 ml-[10px]">
      Bei uns ist dein Gehalt so gut wie deine Leistung. Unsere Top-Vertriebler erzielen regelmäßig hohe 4- bis
      5-stellige Monatsgehälter.
      </p>
    </div>

    {/* Benefit 2 */}
    <div className="sellwell-benefit-container-alt">
      <div className="mb-2 mr-auto">
      <Image 
        src="/green-shx-icon2.svg"
        alt="icon"
        width={75}
        height={75}
        />
      </div>
      <h3 className="text-[23px] md:text-[28px] font-[600] text-left tracking-[-0.72px] leading-[1.2] mb-3 mr-auto ml-[10px]">Individuelle<br />Unterstützung</h3>
      <p className="text-md md:text-lg text-gray-800 leading-[1.4] text-left ml-[-5px] mb-3 ml-[10px]">
        Auch ohne Vorkenntnisse bringen wir dich auf Erfolgskurs. Unser System und persönliches Coaching
        machen dich zum Vertriebs-Profi.
      </p>
    </div>

    {/* Benefit 3 */}
    <div className="sellwell-benefit-container-alt">
      <div className="mb-3 mr-auto">
      <Image 
        src="/green-shx-icon3.svg"
        alt="icon"
        width={75}
        height={75}
        />
      </div>
      <h3 className="text-[23px] md:text-[28px] font-[600] text-left tracking-[-0.72px] leading-[1.2] mb-3 mr-auto ml-[10px]">Ambitioniertes<br />Umfeld</h3>
      <p className="text-md md:text-lg text-gray-800 leading-[1.4] text-left ml-[-5px] mb-3 ml-[10px]">
      Werde Teil eines jungen Teams mit flachen Hierarchien. Bei uns wird hart gearbeitet, aber
      auch der Spaß kommt nicht zu kurz.
      </p>
    </div>
  </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full pt-12">
      <a href="/karriere">
      <button className="sellwell-btn-primary w-[80%] sm:w-auto">
        Jetzt schnell bewerben
      </button>
      </a>
      <a href="#team">
      <button className="sellwell-btn-secondary flex items-center justify-center space-x-2 w-[80%] sm:w-auto">
            <span>Einblick ins Team</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
      </button>
      </a>
    </div>
</section>
)
}