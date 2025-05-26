
// PrimaryButton.tsx
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
    <button className="sellwell-btn-primary2" {...props}>
      <span className="sellwell-btn-text2">{children}</span>
    </button>
  );
}