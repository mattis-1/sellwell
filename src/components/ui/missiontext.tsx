import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation has started, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const words = text.split(' ');
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Delay between each word's animation
      },
    },
  };
  
  const wordVariants = {
    hidden: {},
    visible: {},
  };
  
  return (
    <motion.div
      ref={containerRef}
      className={`${className}`}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block opacity-20" // Start with lower opacity
          variants={wordVariants}
          style={{ marginRight: '0.25em' }}
          animate={{
            opacity: isVisible ? 1 : 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08, // Each word animates with a delay
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;