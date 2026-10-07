"use client";

const MARKETPLACE_URL =
  "https://marketplace.gohighlevel.com/integration/6a42b01a904c53a589aae692";

interface InstallButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "default" | "large";
  className?: string;
  target?: string;
  children: React.ReactNode;
}

export function InstallButton({
  variant = "primary",
  size = "default",
  className = "",
  target = "_blank",
  children,
}: InstallButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold border-2 border-black rounded-xl transition-all duration-150 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer";

  const variants: Record<string, string> = {
    primary: "bg-[#E0A24A] text-[#0F1729] hover:shadow-[8px_8px_0_0_#000]",
    secondary: "bg-[#FFE711] text-black hover:shadow-[8px_8px_0_0_#000]",
    tertiary: "bg-[#0F1729] text-white hover:shadow-[8px_8px_0_0_#000]",
    outline: "bg-white text-black hover:shadow-[8px_8px_0_0_#000]",
  };

  const sizes: Record<string, string> = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={MARKETPLACE_URL}
      target={target}
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
