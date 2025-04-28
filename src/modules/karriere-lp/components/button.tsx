import { ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";

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

      {/* bigger, low-opacity grid */}
      <Image
        src="/button-grid.svg"
        alt=""
        width={250}
        height={250}
        className="sellwell-btn-pattern"
        priority
      />
    </button>
  );
}
