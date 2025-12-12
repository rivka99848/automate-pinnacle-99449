import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Code, Lightbulb, Users, Zap, Settings, CheckCircle, Rocket, HeartHandshake, MessageCircle, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServiceCustomProducts = () => {
  const heroReveal = useScrollReveal({ threshold: 0.1 });
  const audienceReveal = useScrollReveal({ threshold: 0.1 });
  const includesReveal = useScrollReveal({ threshold: 0.1 });
  const processReveal = useScrollReveal({ threshold: 0.1 });
  const resultReveal = useScrollReveal({ threshold: 0.1 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  const serviceIncludes = [
    { 
      icon: Code, 
      title: "פיתוח מותאם אישית", 
      description: "בניית מערכות ואפליקציות שמותאמות בדיוק למה שאתם צריכים - לא פתרון גנרי, אלא כלי שנבנה במיוחד עבורכם."
    },
    { 
      icon: Zap, 
      title: "פונקציונליות ואוטומציה", 
      description: "פתרונות חכמים שחוסכים זמן ומייעלים תהליכים. המערכת עושה את העבודה במקומכם."
    },
    { 
      icon: Settings, 
      title: "בדיקות והתאמות", 
      description: "בודקים שהמערכת עובדת כמו שצריך, עם אפשרות לבצע שינויים והתאמות לפי הצורך."
    },
    { 
      icon: HeartHandshake, 
      title: "תמיכה ראשונית + אפשרות להרחבה", 
      description: "הדרכה על השימוש במערכת ותמיכה לחודש הראשון. רוצים להמשיך? יש אפשרות לחבילת תמיכה חודשית לאורך כל השנה."
    }
  ];

  const handleCardScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progress = Math.max(0, Math.min(1, -rect.top / (window.innerHeight * 0.5)));
      setCardProgress(progress);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleCardScroll);
    handleCardScroll();
    return () => window.removeEventListener('scroll', handleCardScroll);
  }, [handleCardScroll]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div 
            ref={heroReveal.ref}
            className={`mb-24 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-brand-teal">הפוך את הרעיון שלך</span>
                  <br />
                  <span className="text-foreground">למוצר או מערכת מותאמת אישית</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
                  חלום שיש לך? רעיון שיכול לשנות את העסק שלך? אנחנו מממשים אותו.
                  אני לוקחת את הרעיון שלך – קטן או גדול – והופכת אותו למערכת או מוצר עובד שמשרת בדיוק את הצרכים שלך.
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => {
                      document.getElementById('contact-form')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="rounded-full bg-brand-teal hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/30 hover:shadow-brand-teal/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    קבעו פגישת ייעוץ ↓
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-teal/20 to-brand-cyan/10 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb className="w-32 h-32 text-brand-teal mx-auto mb-6 animate-float" />
                  <p className="text-2xl font-bold text-brand-teal">מהרעיון למציאות</p>
                </div>
              </div>
            </div>
          </div>

          {/* למי השירות מתאים? - Two Box Side by Side */}
          <div 
            ref={audienceReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              audienceReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                למי השירות <span className="text-brand-teal">מתאים?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Right - Teal Background - הרעיון שלך */}
              <div className="bg-brand-teal rounded-2xl p-8 border-2 border-brand-teal/30">
                <h3 className="text-2xl font-bold text-white mb-6">יש לך רעיון?</h3>
                <div className="space-y-4">
                  <p className="text-white/90">• יזמים שרוצים להוציא רעיון לפועל</p>
                  <p className="text-white/90">• בעלי עסקים שצריכים פתרון דיגיטלי ייחודי</p>
                  <p className="text-white/90">• צוותים שמחפשים אוטומציה מותאמת</p>
                  <p className="text-white/90">• כל מי שרוצה מערכת שתעבוד בדיוק כמו שהוא צריך</p>
                </div>
              </div>

              {/* Left - White Background - התוצאה */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-brand-teal mb-6">התוצאה</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• מערכת או מוצר שעובדים בשבילך</p>
                  <p className="text-gray-700">• חסכון משמעותי בזמן ובמשאבים</p>
                  <p className="text-gray-700">• פתרון שמשרת את הצרכים המדויקים שלך</p>
                  <p className="text-gray-700">• אוטומציה שמייעלת תהליכים קיימים</p>
                </div>
              </div>
            </div>
          </div>

          {/* מה השירות כולל - Regular Cards */}
          <div 
            ref={includesReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              includesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              מה השירות <span className="text-brand-teal">כולל?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceIncludes.map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-white/10 rounded-2xl hover:border-brand-teal/50 hover:bg-white/5 hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-brand-teal mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* איך זה עובד - Stacked Cards */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  איך זה <span className="text-brand-teal">עובד?</span>
                </h2>
              </div>

              <div 
                ref={containerRef}
                className="relative"
              >
                {/* Progress Indicator */}
                <div className="absolute right-0 top-0 w-1 bg-white/10" style={{ height: '100%' }}>
                  <div 
                    className="w-full bg-gradient-to-b from-brand-teal to-brand-cyan transition-all duration-300"
                    style={{ 
                      height: `${Math.min(100, cardProgress * 100)}%`
                    }}
                  />
                </div>

                {/* Progress Dots */}
                <div className="absolute right-[-4px] top-0 flex flex-col justify-around py-8" style={{ height: '100%' }}>
                  {[0, 1, 2, 3, 4].map((index) => {
                    const dotProgress = Math.max(0, Math.min(1, cardProgress - index * 0.2));
                    return (
                      <div 
                        key={index}
                        className="w-3 h-3 rounded-full border-2 border-brand-teal transition-all duration-300"
                        style={{
                          backgroundColor: dotProgress > 0.5 ? 'hsl(var(--brand-teal))' : 'transparent',
                          transform: `scale(${0.8 + dotProgress * 0.4})`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Cards */}
                <div className="pr-8 relative">
                  {[
                    { icon: MessageCircle, title: "שיחה ראשונית / אפיון", description: "בודקים את הרעיון, מבינים את המטרות ומגדירים את הצרכים המדויקים. השלב הזה קריטי להצלחת הפרויקט." },
                    { icon: Lightbulb, title: "תכנון הפתרון", description: "מפה של המערכת או המוצר, כולל פונקציות, אוטומציות וזרימת העבודה. תוכנית ברורה לפני שמתחילים לבנות." },
                    { icon: Wrench, title: "פיתוח ובנייה", description: "הפיכת הרעיון למוצר או מערכת עובדת, חיבור למערכות קיימות אם צריך. הקסם קורה כאן." },
                    { icon: CheckCircle, title: "בדיקה והתאמות", description: "ווידוא שהכול עובד מצוין, עם אפשרות לבצע שינויים אחרונים ולהתאים את המוצר לצרכים המדויקים." },
                    { icon: Rocket, title: "מסירה ותמיכה", description: "המוצר מוכן לעבודה! הדרכה קצרה ותמיכה ראשונית כדי להבטיח שאתם יודעים להשתמש בכלי החדש." }
                  ].map((step, index) => {
                    const cardProgressValue = Math.max(0, Math.min(1, cardProgress - index * 0.2));
                    const scale = 0.95 + cardProgressValue * 0.05;
                    const translateY = (1 - cardProgressValue) * 20;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div
                        key={index}
                        className={`sticky top-32 rounded-2xl p-8 mb-6 transition-all duration-500 relative ${
                          isEven 
                            ? 'bg-white text-gray-900 border-2 border-gray-200' 
                            : 'bg-brand-dark/95 border-2 border-white/10'
                        }`}
                        style={{
                          transform: `scale(${scale}) translateY(${translateY}px)`,
                          opacity: 1,
                          zIndex: index + 1
                        }}
                      >
                        {!isEven && (
                          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-teal/20 to-brand-cyan/10 backdrop-blur-3xl rounded-2xl" />
                        )}
                        <div className="flex items-start gap-4">
                          <step.icon className={`w-8 h-8 flex-shrink-0 ${isEven ? 'text-brand-teal' : 'text-white'}`} />
                          <div>
                            <h3 className={`text-xl font-bold mb-3 ${isEven ? 'text-gray-900' : 'text-white'}`}>
                              {step.title}
                            </h3>
                            <p className={isEven ? 'text-gray-600' : 'text-white/80'}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* התוצאה עבורך - With White Background */}
          <div className="bg-white py-16 md:py-24 -mx-4 px-4">
            <div 
              ref={resultReveal.ref}
              className={`max-w-6xl mx-auto mb-8 transition-all duration-1000 ${
                resultReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                    התוצאה <span className="text-brand-teal">עבורך</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-r-4 border-brand-teal/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-brand-teal" />
                      <h3 className="text-xl font-bold text-gray-900">מערכת שעובדת בשבילך</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">לא עוד פתרונות גנריים - מוצר שנבנה במיוחד לצרכים שלך</p>
                  </div>

                  <div className="border-r-4 border-brand-teal/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-brand-teal" />
                      <h3 className="text-xl font-bold text-gray-900">חסכון בזמן</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">אוטומציה שמייעלת תהליכים וחוסכת שעות עבודה יקרות</p>
                  </div>

                  <div className="border-r-4 border-brand-teal/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="w-6 h-6 text-brand-teal" />
                      <h3 className="text-xl font-bold text-gray-900">ייעול תהליכים</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">המערכת עובדת בצורה חלקה ומאפשרת לך להתמקד במה שחשוב</p>
                  </div>

                  <div className="border-r-4 border-brand-teal/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Rocket className="w-6 h-6 text-brand-teal" />
                      <h3 className="text-xl font-bold text-gray-900">מהרעיון למציאות</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">הרעיון שלך הופך למוצר אמיתי שאפשר להשתמש בו ולהרוויח ממנו</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center mb-8 pt-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              בואו נדבר על איך להפוך את הרעיון שלכם למציאות
            </p>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-20">
            <ContactFormSection buttonColor="teal" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCustomProducts;