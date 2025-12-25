import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialImage {
  id: string;
  url: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [testimonials, setTestimonials] = useState<TestimonialImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://n8n.chatnaki.co.il/webhook/31bbce57-f725-4bb9-b7c1-8a8161aaff31");
        const data: TestimonialImage[] = await response.json();
        if (data && Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Skeleton loading state
  if (loading) {
    return (
      <section className="py-16 bg-brand-darker relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">הלקוחות</span>{" "}
              <span className="text-gradient-accent">שלנו</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Skeleton className="w-full h-72 md:h-80 lg:h-96 rounded-2xl bg-brand-blue/10" />
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            <Skeleton className="w-12 h-12 rounded-full bg-brand-blue/20" />
            <div className="flex gap-2">
              {[1, 2, 3].map((_, index) => (
                <Skeleton key={index} className="w-2 h-2 rounded-full bg-brand-blue/20" />
              ))}
            </div>
            <Skeleton className="w-12 h-12 rounded-full bg-brand-blue/20" />
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
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
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
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
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-2 h-72 md:h-80 lg:h-96 flex items-center justify-center">
                  <img
                    src={testimonial.url}
                    alt="המלצת לקוח"
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/20"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center gap-6 mt-8">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 transition-all hover-lift" />
            <div className="flex gap-2">
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
            <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 transition-all hover-lift" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
