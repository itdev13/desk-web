import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "default" | "large";
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#E0A24A] text-[#0F1729]",
  secondary: "bg-[#FFE711]",
  tertiary: "bg-[#0F1729] text-white",
  outline: "bg-white",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold text-black
    border-2 border-black rounded-md
    transition-all duration-200 ease-out
    hover:translate-x-[-4px] hover:translate-y-[-4px]
    hover:shadow-[8px_8px_0_0_#000]
    cursor-pointer
  `;

  const sizeStyles =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
