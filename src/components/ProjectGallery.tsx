import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";


interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

const ProjectGallery = ({ images, projectTitle }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Main Gallery */}
      <div className="relative group mb-8 max-w-3xl mx-auto">
        <Carousel
          opts={{ loop: true, direction: "rtl" }}
          className="w-full"
          setApi={(api) => {
            if (!api) return;
            api.on("select", () => {
              setCurrentIndex(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="animate-carousel-fade">
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  {/* Glassmorphism Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Image with Ken Burns Effect */}
                  <img
                    src={image}
                    alt={`${projectTitle} - תמונה ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
                  />
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium z-20">
                    {index + 1} / {images.length}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Buttons with Glassmorphism */}
          <CarouselPrevious className="right-4 left-auto bg-background/80 backdrop-blur-md border-white/20 hover:bg-background/90 hover:scale-110 transition-all duration-300" />
          <CarouselNext className="left-4 right-auto bg-background/80 backdrop-blur-md border-white/20 hover:bg-background/90 hover:scale-110 transition-all duration-300" />
        </Carousel>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-muted/30 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-green transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            <img
              src={selectedImage !== null ? images[selectedImage] : ""}
              alt={`${projectTitle} - תצוגה מלאה`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl animate-scale-in"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="סגור"
            >
              ✕
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectGallery;
