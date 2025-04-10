import Image from 'next/image';

const Proof = () => {
return (
<section className="bg-[#fff] mx-5 mb-8 rounded-[30px]">
{/* Infinite scrolling logos */}
<div className="w-full flex justify-center mt-0 ">
  <div className="logos-slider-container w-[70%] relative">
    <div className="logos-slider">
                {/* First set of logos */}
                <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case1.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src="/case2.svg" alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case3.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-33 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case4.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='case1.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case2.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            
                            {/* Duplicate for seamless loop */}
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case3.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src="/case4.svg" alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case1.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case2.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='case3.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
                            <div className="inline-block">
                              <div className="h-16 w-32 dark:bg-gray-700/80 rounded flex items-center justify-center mx-6">
                                <Image src='/case4.svg' alt="Eon Logo" width={128} height={64} />
                              </div>
                            </div>
              </div>
              {/* Gradient overlays for fading effect */}
              <div className="fade-left3"></div>
              <div className="fade-right3"></div>
            
  </div>
</div>
<div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
</section>

);
};

export default Proof;