import { ReactNode } from "react";

interface StickyHighlightProps {
  children: ReactNode;
  rotate?: number;
  className?: string;
}

export function StickyHighlight({
  children,
  rotate = -2,
  className = "",
}: StickyHighlightProps) {
  return (
    <span
      className={`inline-block bg-[#FFE711] px-2 py-0.5 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
