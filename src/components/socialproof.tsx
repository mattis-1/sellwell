import Image from "next/image";

const Proof = () => {
return (
<section className="bg-[#F4F2F1]">
{/* Infinite scrolling logos */}
<div className="w-full flex justify-center mt-0 ">
  <div className="logos-slider-container w-[70%] relative">
    <div className="logos-slider">
      {/* First set of logos */}
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 1</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 2</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 3</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 4</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 5</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 6</span>
        </div>
      </div>
      
      {/* Duplicate for seamless loop */}
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 1</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 2</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 3</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 4</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 5</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="h-16 w-32 bg-white/80 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
          <span className="text-primary font-bold">Logo 6</span>
        </div>
      </div>
    </div>
    {/* Gradient overlays for fading effect */}
    <div className="fade-left"></div>
    <div className="fade-right"></div>
  </div>
</div>
<div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
</section>

);
};

export default Proof;