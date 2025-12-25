import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logo?: string;
  companyName?: string;
}

interface WebhookData {
  allTestimonials: Testimonial[];
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://n8n.chatnaki.co.il/webhook/31bbce57-f725-4bb9-b7c1-8a8161aaff31");
        const data: WebhookData[] = await response.json();
        if (data && data[0]?.allTestimonials) {
          setTestimonials(data[0].allTestimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-brand-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">הלקוחות</span>{" "}
            <span className="text-gradient-accent">שלנו</span>
          </h2>
        </div>

        <Carousel
          opts={{ 
            loop: true,
            direction: "rtl",
            align: "center"
          }}
          className="w-full max-w-3xl mx-auto"
          setApi={(emblaApi) => {
            setApi(emblaApi);
            if (!emblaApi) return;
            emblaApi.on("select", () => {
              setCurrentIndex(emblaApi.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-transparent p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    
                    {/* לוגו בצד ימין */}
                    {testimonial.logo && (
                      <div className="flex-shrink-0 w-full md:w-32 flex justify-center md:justify-start">
                        <img
                          src={testimonial.logo}
                          alt={testimonial.companyName || testimonial.author}
                          className="h-16 md:h-20 w-auto object-contain opacity-80"
                        />
                      </div>
                    )}
                    
                    {/* תוכן ההמלצה בצד שמאל */}
                    <div className="flex-1">
                      {/* גרשיים פתיחה */}
                      <div className="text-5xl md:text-6xl text-brand-cyan mb-3 text-right font-serif leading-none">"</div>
                      
                      {/* הציטוט */}
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-3 text-right">
                        {testimonial.quote}
                      </p>
                      
                      {/* גרשיים סגירה */}
                      <div className="text-5xl md:text-6xl text-brand-cyan mb-6 text-left font-serif leading-none">"</div>

                      {/* פרטי הלקוח */}
                      <div className="text-right">
                        <div className="text-base md:text-lg font-bold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-brand-cyan">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* כפתורי ניווט - Embla מטפל ב-RTL אוטומטית */}
          <CarouselPrevious className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 transition-all hover-lift" />
          <CarouselNext className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 transition-all hover-lift" />

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-brand-blue w-8"
                    : "bg-brand-blue/30 hover:bg-brand-blue/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
