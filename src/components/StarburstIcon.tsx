interface StarburstIconProps {
  className?: string;
}

const StarburstIcon = ({ className = "" }: StarburstIconProps) => {
  return (
    <div className={`absolute ${className}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="animate-starburst-spin"
      >
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16;
          const length = i % 2 === 0 ? 80 : 60;
          const x1 = 100;
          const y1 = 100;
          const x2 = 100 + length * Math.cos((angle * Math.PI) / 180);
          const y2 = 100 + length * Math.sin((angle * Math.PI) / 180);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--secondary))"
              strokeWidth="3"
              strokeLinecap="round"
              opacity={i % 2 === 0 ? "0.8" : "0.5"}
            />
          );
        })}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill="hsl(var(--secondary))"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export default StarburstIcon;
