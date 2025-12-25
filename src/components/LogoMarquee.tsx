import { useCachedData } from "@/hooks/useCachedData";

interface WebhookData {
  allLogos: string[];
}

const fetchLogos = async (): Promise<string[]> => {
  const response = await fetch("https://n8n.chatnaki.co.il/webhook/site");
  const data: WebhookData[] = await response.json();
  if (data && data[0]?.allLogos) {
    return data[0].allLogos;
  }
  return [];
};

const LogoMarquee = () => {
  const { data: logos, loading } = useCachedData<string[]>(
    "logos_cache",
    fetchLogos,
    { cacheDurationHours: 4 }
  );

  if (loading || !logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent to-white z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-white z-10" />

        {/* Scrolling container */}
        <div className="flex gap-12 animate-marquee-rtl">
          {/* First set */}
          {logos.map((logoUrl, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img 
                src={logoUrl} 
                alt={`לוגו לקוח ${index + 1}`}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logoUrl, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img 
                src={logoUrl} 
                alt={`לוגו לקוח ${index + 1}`}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
