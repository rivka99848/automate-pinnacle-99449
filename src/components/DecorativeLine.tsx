interface DecorativeLineProps {
  className?: string;
  color?: string;
}

const DecorativeLine = ({ className = "", color = "hsl(var(--brand-coral))" }: DecorativeLineProps) => {
  return (
    <svg
      className={`absolute ${className} animate-draw-line`}
      viewBox="0 0 400 400"
      fill="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 350 Q 150 250, 200 200 T 350 50"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        filter="url(#glow)"
      />
      <circle cx="350" cy="50" r="8" fill={color} opacity="0.8">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <path
        d="M 340 45 L 350 50 L 345 60"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DecorativeLine;
