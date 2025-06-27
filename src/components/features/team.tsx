import Slider from "@/components/features/Slider";

export default function Team() {

    const cards = [
        {
          id: 1,
          name: "Maximilian Kress",
          role: "FOUNDER & CEO",
          image: "/Maxi Portrait.png",
          video: "https://www.youtube.com/watch?v=pzrbkBLwSz8",
        },
        {
          id: 2,
          name: "Moritz Habeck",
          role: "FOUNDER & CEO",
          image: "/Moritz Portrait.png",
          video: "https://www.youtube.com/watch?v=b3D0D-B5ceM",
        },
        {
          id: 3,
          name: "Leonardo Basile",
          role: "FOUNDER & CEO",
          image: "/Leo Portrait.png",
          video: "https://www.youtube.com/watch?v=EjHbf1cObZw",
        },
        {
          id: 4,
          name: "Marco Sandrisser",
          role: "TEAMLEITER",
          image: "/Marco Portrait.png",
          video: "https://www.youtube.com/watch?v=Jua9evvcsdE&t=1s",
        },
        {
          id: 5,
          name: "Chris Marquardt",
          role: "VERTRIEBLER",
          image: "/Chris Portrait.png",
          video: "https://www.youtube.com/watch?v=tUgM4kCF7rU",
        },
        {
          id: 6,
          name: "Stefan Sonderholzer",
          role: "AUSBILDER",
          image: "/Stefan Portrait.png",
          video: "https://www.youtube.com/watch?v=o01oAhTevzM",
        },
      ];
    

return (
<section id="team" className="pt-5 lg:py-5 relative overflow-clip mb-[-15px] sm:mb-[-60px] md:mb-[-75px]">
  {/* Background gradient overlay */}
  <div className="bg-gradient-to-t absolute from-[#fff] to-[#fff] inset-0 w-full h-full pointer-events-none"></div>
  <div className="container relative px-4 sm:px-6">
    
    
    {/* Heading */}
    <div className="richtext prose-h2:text-white mb-2 sm:mb-3">
      <h2 className="mt-20 text-[43px] font-bold text-center  leading-[62.4px] text-2xl sm:text-4xl md:text-5xl lg:text-[55px] text-[#000000] mb-8 sm:mb-10 md:mb-16">

        Echter Vertrieb.<br />
          Echte Ergebnisse.
      </h2>
    </div>
    
    {/* Slider */}
    <div className="min-h-[36rem] sm:min-h-[42rem] md:min-h-[46rem] lg:min-h-[50rem] relative">
      <Slider cards={cards} />
    </div>
  </div>
</section>
);
}