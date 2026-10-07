import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function Badge({
  children,
  color = "#A78BFA",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}
