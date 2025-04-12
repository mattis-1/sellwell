// components/FadeIn.tsx
import React, { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const { ref, isInView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin,
  });

  const directionClass = direction === 'none' ? '' : `fade-in-${direction}`;
  const delayClass = delay === 0 ? '' : `delay-${delay}`;

  return (
    <div
      ref={ref}
      className={`fade-in-section ${directionClass} ${delayClass} ${isInView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;