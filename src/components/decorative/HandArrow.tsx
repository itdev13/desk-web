interface HandArrowProps {
  direction?: "right" | "down" | "left" | "up-right" | "down-right";
  text?: string;
  className?: string;
  textClassName?: string;
}

export function HandArrow({
  direction = "right",
  text,
  className = "",
  textClassName = "",
}: HandArrowProps) {
  const arrows = {
    right: (
      <svg viewBox="0 0 150 80" className="w-28" fill="none">
        <path
          d="M10,60 Q40,15 80,35 Q110,50 130,42"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M118,32 L132,42 L120,54"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    down: (
      <svg viewBox="0 0 80 120" className="w-16" fill="none">
        <path
          d="M40,10 Q65,25 55,55 Q48,85 42,100"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32,88 L42,103 L52,90"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    left: (
      <svg viewBox="0 0 150 60" className="w-28" fill="none">
        <path
          d="M140,30 Q115,12 95,35 Q75,58 55,28 Q35,5 18,32"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M28,20 L15,32 L26,44"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "up-right": (
      <svg viewBox="0 0 120 100" className="w-24" fill="none">
        <path
          d="M15,85 Q30,50 60,45 Q90,40 105,20"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M92,12 L108,18 L100,32"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "down-right": (
      <svg viewBox="0 0 120 100" className="w-24" fill="none">
        <path
          d="M15,15 Q35,30 55,50 Q80,75 105,80"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M95,68 L108,80 L93,88"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
      {text && (
        <span
          className={`text-xl font-medium ${textClassName}`}
          style={{
            fontFamily: "var(--font-caveat), Caveat, cursive",
            transform: "rotate(-6deg)",
          }}
        >
          {text}
        </span>
      )}
      {arrows[direction]}
    </div>
  );
}
