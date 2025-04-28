// components/Subhead.tsx
import { HTMLAttributes, ReactNode } from 'react';

interface SubheadProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function Subhead({
    children,
    ...props
  }: SubheadProps) {
    return (
      <h2 className="sellwell-subhead" {...props}>
        {children}
      </h2>
    );
  }
