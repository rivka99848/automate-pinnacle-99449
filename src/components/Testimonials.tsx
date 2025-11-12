import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "המערכת שבנו עם רבקה שינתה לנו את החיים! היינו טובעים בפניות בוואטסאפ, והבוט החכם שהיא בנתה פתר לנו הכל. עכשיו הלקוחות מקבלים תשובות מיידיות והזמנות נכנסות אוטומטית למערכת. פשוט מדהים!",
    author: "יוסי כהן",
    role: "מנהל רשת נופש יוקרתית"
  },
  {
    quote: "אחרי שנים של עבודה עם טבלאות אקסל ותהליכים ידניים, סוף סוף יש לנו מערכת שעובדת בשבילנו. האוטומציות שרבקה הקימה חוסכות לנו שעות עבודה כל יום, והעסק פועל בצורה מקצועית הרבה יותר.",
    author: "ד״ר שרה לוי",
    role: "בעלת קליניקה רפואית"
  },
  {
    quote: "לפני שפגשתי את רבקה, חשבתי שאוטומציה זה משהו רק לחברות גדולות. היא הוכיחה לי שגם עסק קטן כמו שלי יכול להפיק תועלת עצומה. המערכת פשוטה, יעילה, והכי חשוב - עובדת בדיוק איך שאני צריך!",
    author: "מיכל דהן",
    role: "בעלת סטודיו לעיצוב פנים"
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
    <section className="py-24 bg-brand-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">הלקוחות</span>{" "}
            <span className="text-gradient-accent">שלנו</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 flex items-center justify-center transition-all hover-lift"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-brand-blue" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-brand-blue/20 hover:bg-brand-blue/30 backdrop-blur-sm border border-brand-blue/30 flex items-center justify-center transition-all hover-lift"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-brand-blue" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-brand-dark/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-brand-blue/20 shadow-elegant hover-lift">
            <div className="text-6xl text-brand-cyan mb-6 font-serif leading-none">"</div>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 text-right">
              {testimonials[currentIndex].quote}
            </p>

            <div className="flex items-center justify-end gap-4">
              {testimonials[currentIndex].image && (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-blue"
                />
              )}
              <div className="text-right">
                <div className="text-lg font-bold text-foreground">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-sm text-brand-cyan">
                  {testimonials[currentIndex].role}
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
