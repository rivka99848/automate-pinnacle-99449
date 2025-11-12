const logos = [
  { name: "Make", color: "text-brand-purple" },
  { name: "Airtable", color: "text-brand-coral" },
  { name: "Google", color: "text-brand-blue" },
  { name: "Zapier", color: "text-brand-orange" },
  { name: "WhatsApp", color: "text-brand-green" },
  { name: "OpenAI", color: "text-brand-cyan" },
  { name: "Notion", color: "text-brand-purple" },
  { name: "Slack", color: "text-brand-coral" }
];

const LogoMarquee = () => {
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
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-dark/50 backdrop-blur-sm border border-brand-blue/20 hover:border-brand-blue/40 hover:scale-110 transition-all"
            >
              <span className={`text-2xl font-bold whitespace-nowrap ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-4 rounded-2xl bg-brand-dark/50 backdrop-blur-sm border border-brand-blue/20 hover:border-brand-blue/40 hover:scale-110 transition-all"
            >
              <span className={`text-2xl font-bold whitespace-nowrap ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
