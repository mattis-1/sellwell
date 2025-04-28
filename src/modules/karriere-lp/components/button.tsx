import { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button className="sellwell-btn-primary" {...props}>
      <span className="sellwell-btn-text">{children}</span>

      
    </button>
  );
}
