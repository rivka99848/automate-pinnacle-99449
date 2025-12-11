import { useEffect, useState } from "react";

interface WebhookData {
  allLogos: string[];
}

const LogoMarquee = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("https://n8n.chatnaki.co.il/webhook/site");
        const data: WebhookData[] = await response.json();
        if (data && data[0]?.allLogos) {
          setLogos(data[0].allLogos);
        }
      } catch (error) {
        console.error("Failed to fetch logos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading || logos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-brand-darker overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-foreground">עם מי</span>{" "}
          <span className="text-gradient">אנחנו עובדים</span>
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent to-brand-darker z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-brand-darker z-10" />

        {/* Scrolling container */}
        <div className="flex gap-12 animate-marquee-rtl">
          {/* First set */}
          {logos.map((logoUrl, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-2xl bg-brand-dark/50 backdrop-blur-sm border border-brand-blue/20 hover:border-brand-blue/40 hover:scale-110 transition-all"
            >
              <img 
                src={logoUrl} 
                alt={`לוגו לקוח ${index + 1}`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logoUrl, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-2xl bg-brand-dark/50 backdrop-blur-sm border border-brand-blue/20 hover:border-brand-blue/40 hover:scale-110 transition-all"
            >
              <img 
                src={logoUrl} 
                alt={`לוגו לקוח ${index + 1}`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
