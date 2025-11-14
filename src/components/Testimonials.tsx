import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logoResort from "@/assets/logo-resort.png";
import logoMedical from "@/assets/logo-medical.png";
import logoDesignStudio from "@/assets/logo-design-studio.png";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logo?: string;
  companyName?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "המערכת שבנו עם רבקה שינתה לנו את החיים! היינו טובעים בפניות בוואטסאפ, והבוט החכם שהיא בנתה פתר לנו הכל. עכשיו הלקוחות מקבלים תשובות מיידיות והזמנות נכנסות אוטומטית למערכת. פשוט מדהים!",
    author: "יוסי כהן",
    role: "מנהל רשת נופש יוקרתית",
    logo: logoResort,
    companyName: "רשת נופש יוקרתית"
  },
  {
    quote: "אחרי שנים של עבודה עם טבלאות אקסל ותהליכים ידניים, סוף סוף יש לנו מערכת שעובדת בשבילנו. האוטומציות שרבקה הקימה חוסכות לנו שעות עבודה כל יום, והעסק פועל בצורה מקצועית הרבה יותר.",
    author: "ד״ר שרה לוי",
    role: "בעלת קליניקה רפואית",
    logo: logoMedical,
    companyName: "קליניקה רפואית"
  },
  {
    quote: "לפני שפגשתי את רבקה, חשבתי שאוטומציה זה משהו רק לחברות גדולות. היא הוכיחה לי שגם עסק קטן כמו שלי יכול להפיק תועלת עצומה. המערכת פשוטה, יעילה, והכי חשוב - עובדת בדיוק איך שאני צריך!",
    author: "מיכל דהן",
    role: "בעלת סטודיו לעיצוב פנים",
    logo: logoDesignStudio,
    companyName: "סטודיו לעיצוב פנים"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-brand-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">הלקוחות</span>{" "}
            <span className="text-gradient-accent">שלנו</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 flex items-center justify-center transition-all hover-lift"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-blue" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 flex items-center justify-center transition-all hover-lift"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-blue" />
          </button>

          {/* Testimonial Card */}
          <div 
            key={currentIndex}
            className="bg-brand-dark/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-elegant hover-lift animate-fade-in"
          >
            <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-start">
              
              {/* לוגו בצד ימין */}
              {testimonials[currentIndex].logo && (
                <div className="flex-shrink-0 w-full md:w-32 flex justify-center md:justify-start">
                  <img
                    src={testimonials[currentIndex].logo}
                    alt={testimonials[currentIndex].companyName || testimonials[currentIndex].author}
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
                  {testimonials[currentIndex].quote}
                </p>
                
                {/* גרשיים סגירה */}
                <div className="text-5xl md:text-6xl text-brand-cyan mb-6 text-left font-serif leading-none">"</div>

                {/* פרטי הלקוח */}
                <div className="text-right">
                  <div className="text-base md:text-lg font-bold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-brand-cyan">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-brand-blue w-8"
                    : "bg-brand-blue/30 hover:bg-brand-blue/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
