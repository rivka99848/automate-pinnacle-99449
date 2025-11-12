import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

const FloatingIcon = ({ icon: Icon, className = "", color = "brand-blue", strokeWidth = 1.5 }: FloatingIconProps) => {
  return (
    <div className={`absolute ${className} group`}>
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm transition-all relative"
        style={{
          backgroundColor: `hsl(var(--${color}) / 0.15)`,
          boxShadow: `0 0 20px hsl(var(--${color}) / 0.15)`,
        }}
      >
        <Icon 
          className="w-7 h-7 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" 
          style={{ color: `hsl(var(--${color}))` }}
          strokeWidth={strokeWidth}
        />
      </div>
    </div>
  );
};

export default FloatingIcon;
