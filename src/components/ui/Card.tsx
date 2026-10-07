import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  rotate = 0,
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-white border-2 border-black rounded-xl p-6
        shadow-[4px_4px_0_0_#000]
        ${hover ? "transition-all duration-200 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000]" : ""}
        ${className}
      `}
      style={rotate !== 0 ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  iconBgColor?: string;
  accentColor?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  badge,
  badgeColor = "#FFE711",
  iconBgColor = "#93C5FD",
  accentColor,
}: FeatureCardProps) {
  return (
    <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] transition-all duration-200 ease-out hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] relative overflow-hidden">
      {accentColor && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ backgroundColor: accentColor }}
        />
      )}
      <div className={accentColor ? "pl-2" : ""}>
        {badge && (
          <span
            className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 border border-black/20"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
        )}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4 border-2 border-black/10"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rotate?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rotate = 0,
}: TestimonialCardProps) {
  return (
    <Card rotate={rotate}>
      <div className="flex gap-1 mb-3 text-yellow-400">
        {"★★★★★".split("").map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </Card>
  );
}
