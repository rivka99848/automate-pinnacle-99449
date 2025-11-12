import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  examples?: string;
  links?: { text: string; url: string }[];
  colorClass: string;
  gradientClass: string;
}

const ServiceCard = ({
  number,
  icon: Icon,
  title,
  description,
  features,
  examples,
  links,
  colorClass,
  gradientClass
}: ServiceCardProps) => {
  return (
    <div className={`relative h-full flex flex-col bg-gradient-to-br ${gradientClass} p-8 rounded-3xl border-4 ${colorClass} shadow-elegant hover-lift group`}>
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center mb-6 ${colorClass.replace('border-', 'text-')} group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-3xl font-semibold mb-4 text-brand-dark">{title}</h3>

      {/* Description */}
      <p className="text-lg text-brand-dark/80 mb-6 leading-relaxed flex-1">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-brand-dark mb-3">תכונות עיקריות:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-brand-dark/80">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full ${colorClass.replace('border-', 'bg-')} flex-shrink-0`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Examples */}
      {examples && (
        <p className="text-sm text-brand-dark/70 mb-6">
          <span className="font-bold">דוגמאות:</span> {examples}
        </p>
      )}

      {/* Links */}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className={`text-sm font-medium ${colorClass.replace('border-', 'text-')} hover:underline`}
            >
              {link.text} ←
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
