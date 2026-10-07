interface WaveDividerProps {
  fromColor: string;
  toColor: string;
  variant?: 1 | 2 | 3 | 4;
}

const wavePaths = {
  1: "M0,70 Q120,30 280,50 Q450,75 580,35 Q750,5 920,55 Q1100,95 1280,45 Q1380,25 1440,60 L1440,120 L0,120 Z",
  2: "M0,55 Q200,15 380,60 Q520,95 700,40 Q900,0 1100,65 Q1300,100 1440,50 L1440,110 L0,110 Z",
  3: "M0,50 Q180,85 400,35 Q600,0 800,55 Q1000,90 1200,40 Q1350,15 1440,45 L1440,100 L0,100 Z",
  4: "M0,60 Q150,20 320,55 Q500,90 680,30 Q880,0 1060,60 Q1240,100 1440,55 L1440,110 L0,110 Z",
};

const waveStrokes = {
  1: "M0,70 Q120,30 280,50 Q450,75 580,35 Q750,5 920,55 Q1100,95 1280,45 Q1380,25 1440,60",
  2: "M0,55 Q200,15 380,60 Q520,95 700,40 Q900,0 1100,65 Q1300,100 1440,50",
  3: "M0,50 Q180,85 400,35 Q600,0 800,55 Q1000,90 1200,40 Q1350,15 1440,45",
  4: "M0,60 Q150,20 320,55 Q500,90 680,30 Q880,0 1060,60 Q1240,100 1440,55",
};

const viewBoxes = {
  1: "0 0 1440 120",
  2: "0 0 1440 110",
  3: "0 0 1440 100",
  4: "0 0 1440 110",
};

export function WaveDivider({
  fromColor,
  toColor,
  variant = 1,
}: WaveDividerProps) {
  return (
    <div className="w-full" style={{ backgroundColor: fromColor }}>
      <svg
        viewBox={viewBoxes[variant]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{ marginTop: "-1px", marginBottom: "-1px" }}
        preserveAspectRatio="none"
      >
        <path d={wavePaths[variant]} fill={toColor} />
        <path
          d={waveStrokes[variant]}
          stroke="#000000"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
