"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Tab = {
  title: string;
  value: string;
  image: string;  // URL of the image to display
  imageAlt?: string; // Alt text for the image
  heading?: string; // Optional heading for the content
  text: string;     // Main text content
  buttonText?: string; // Optional button text
  buttonLink?: string; // Optional button link
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeTab, setActiveTab] = useState(propTabs[0]);

  return (
    <>
      {/* Tabs navigation */}
      <div
        className={cn(
          "flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full mb-12",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={cn("relative px-6 py-3 rounded-full mx-2", tabClassName)}
          >
            {activeTab.value === tab.value && (
              <motion.div
                layoutId="active-tab"
                transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white font-medium">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      
      {/* Tab content with image + text layout */}
      <div className={cn("mt-8 relative", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Image and content layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 rounded-[60px] overflow-hidden bg-gradient-to-br from-[#fff] to-[#fff] p-8 lg:p-10 shadow-[0px_10px_30px_rgba(0,0,0,0.25)]">

              <div className="lg:w-2/5 h-64 lg:h-auto relative rounded-[50px] overflow-hidden">
                <Image 
                  src={activeTab.image} 
                  alt={activeTab.imageAlt || activeTab.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="lg:w-3/5 text-black flex flex-col justify-center pr-30">
                <h3 className="text-[42px] leading-[1.3] inter700 tracking-[-1.25px] font-bold mb-6 bg-gradient-to-r from-[#0C462B] to-[#057741] bg-clip-text text-transparent
">
                  {activeTab.heading || activeTab.title}
                </h3>
                
                <p className="text-[17px] text-black leading-relaxed mb-8">
                  {activeTab.text}
                </p>
                
                {activeTab.buttonText && (
                  <div className="mt-auto">
                    <a 
                      href={activeTab.buttonLink || "#"} 
                      className="inline-block px-6 py-3 text-white font-semibold rounded-full transition-all bg-gradient-to-r from-[#0B3E27] to-[#047A43] shadow-[0_4px_12px_-2px_rgba(4,122,67,0.5)] hover:shadow-[0_6px_16px_-2px_rgba(4,122,67,0.7)]"
                    >
                      {activeTab.buttonText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};