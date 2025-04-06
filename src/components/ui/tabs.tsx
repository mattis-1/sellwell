"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
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
      <div
        className={cn(
          "flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
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

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      
      <div className={cn("mt-8 relative", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {propTabs.find(tab => tab.value === activeTab.value)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};