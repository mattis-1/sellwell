import { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button className="sellwell-btn-primary" {...props}>
      <span className="sellwell-btn-text">{children}</span>

      <Image
        src="/button-grid.svg"
        alt=""
        fill
        className="sellwell-btn-pattern"
        priority
      />
    </button>
  );
}
