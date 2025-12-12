import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Shield, RefreshCw, BarChart3, Clock, Zap, MessageCircle, Settings, Rocket, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServiceSupport = () => {
  const heroReveal = useScrollReveal({ threshold: 0.1 });
  const audienceReveal = useScrollReveal({ threshold: 0.1 });
  const includesReveal = useScrollReveal({ threshold: 0.1 });
  const processReveal = useScrollReveal({ threshold: 0.1 });
  const resultReveal = useScrollReveal({ threshold: 0.1 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  const serviceIncludes = [
    { 
      icon: Clock, 
      title: "תמיכה טכנית זמינה", 
      description: "צוות תמיכה זמין לכל שאלה או בעיה. לא צריך להתמודד לבד עם תקלות או שאלות טכניות."
    },
    { 
      icon: RefreshCw, 
      title: "עדכונים ותחזוקה שוטפת", 
      description: "עדכונים שוטפים, תיקוני באגים ושיפורי ביצועים - המערכות שלך תמיד מעודכנות ועובדות חלק."
    },
    { 
      icon: BarChart3, 
      title: "ייעוץ ואופטימיזציה", 
      description: "ייעוץ שוטף לשיפור התהליכים והמערכות. נזהה הזדמנויות לייעול ונעזור לך לנצל את המערכות בצורה מיטבית."
    },
    { 
      icon: Shield, 
      title: "גיבויים ואבטחה", 
      description: "גיבויים קבועים של הנתונים ומעקב אחרי אבטחת המידע. שקט נפשי שהמידע שלך מוגן."
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
                  <span className="text-brand-orange">תמיכה חודשית</span>
                  <br />
                  <span className="text-foreground">לאורך כל השנה</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
                  לא צריך להתמודד לבד - צוות שמלווה אותך כל הדרך.
                  תמיכה טכנית, עדכונים, תחזוקה ושיפורים שוטפים למערכות שלך.
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
                    className="rounded-full bg-brand-orange hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    קבעו פגישת ייעוץ ↓
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange/20 to-brand-pink/10 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <HeartHandshake className="w-32 h-32 text-brand-orange mx-auto mb-6 animate-float" />
                  <p className="text-2xl font-bold text-brand-orange">ליווי מקצועי לאורך כל הדרך</p>
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
                למי השירות <span className="text-brand-orange">מתאים?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Right - Orange Background */}
              <div className="bg-brand-orange rounded-2xl p-8 border-2 border-brand-orange/30">
                <h3 className="text-2xl font-bold text-white mb-6">המציאות המוכרת</h3>
                <div className="space-y-4">
                  <p className="text-white/90">• בעיות טכניות שמעכבות את העבודה</p>
                  <p className="text-white/90">• מערכות שלא מעודכנות ולא עובדות כמו שצריך</p>
                  <p className="text-white/90">• חוסר ידע לנצל את מלוא הפוטנציאל</p>
                  <p className="text-white/90">• דאגה לאבטחת המידע והגיבויים</p>
                </div>
              </div>

              {/* Left - White Background */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-brand-orange mb-6">החיים עם תמיכה</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• צוות זמין שפותר בעיות במהירות</p>
                  <p className="text-gray-700">• מערכות מעודכנות ועובדות חלק</p>
                  <p className="text-gray-700">• ייעוץ שוטף לשיפור ואופטימיזציה</p>
                  <p className="text-gray-700">• שקט נפשי - המידע מגובה ומאובטח</p>
                </div>
              </div>
            </div>
          </div>

          {/* מה השירות כולל - Regular Cards with Animations */}
          <div 
            ref={includesReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              includesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              מה השירות <span className="text-brand-orange">כולל?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceIncludes.map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-white/10 rounded-2xl hover:border-brand-orange/50 hover:bg-white/5 hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-brand-orange mb-4" />
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
                  איך זה <span className="text-brand-orange">עובד?</span>
                </h2>
              </div>

              <div 
                ref={containerRef}
                className="relative"
              >
                {/* Progress Indicator */}
                <div className="absolute right-0 top-0 w-1 bg-white/10" style={{ height: '100%' }}>
                  <div 
                    className="w-full bg-gradient-to-b from-brand-orange to-brand-pink transition-all duration-300"
                    style={{ 
                      height: `${Math.min(100, cardProgress * 100)}%`
                    }}
                  />
                </div>

                {/* Progress Dots */}
                <div className="absolute right-[-4px] top-0 flex flex-col justify-around py-8" style={{ height: '100%' }}>
                  {[0, 1, 2, 3].map((index) => {
                    const dotProgress = Math.max(0, Math.min(1, cardProgress - index * 0.25));
                    return (
                      <div 
                        key={index}
                        className="w-3 h-3 rounded-full border-2 border-brand-orange transition-all duration-300"
                        style={{
                          backgroundColor: dotProgress > 0.5 ? 'hsl(var(--brand-orange))' : 'transparent',
                          transform: `scale(${0.8 + dotProgress * 0.4})`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Cards */}
                <div className="pr-8 relative">
                  {[
                    { icon: MessageCircle, title: "הערכת מערכות קיימות", description: "סוקרים את המערכות שלכם, מזהים נקודות חולשה והזדמנויות לשיפור. מבינים מה צריך תמיכה ומה צריך שדרוג." },
                    { icon: Settings, title: "תוכנית תמיכה מותאמת", description: "בונים תוכנית תמיכה שמתאימה בדיוק לצרכים שלכם - מה צריך מעקב שוטף, מה צריך בדיקות תקופתיות, ומה צריך שיפורים." },
                    { icon: Zap, title: "ליווי שוטף ותחזוקה", description: "תמיכה טכנית זמינה, עדכונים שוטפים, תיקוני באגים ושיפורי ביצועים. המערכות שלכם תמיד בכושר מלא." },
                    { icon: BarChart3, title: "דיווחים ועדכונים חודשיים", description: "דו\"ח חודשי על מצב המערכות, פעולות שבוצעו והמלצות לשיפור. תמיד תדעו מה קורה ולאן הולכים." }
                  ].map((step, index) => {
                    const cardProgressValue = Math.max(0, Math.min(1, cardProgress - index * 0.25));
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
                          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-orange/20 to-brand-pink/10 backdrop-blur-3xl rounded-2xl" />
                        )}
                        <div className="flex items-start gap-4">
                          <step.icon className={`w-8 h-8 flex-shrink-0 ${isEven ? 'text-brand-orange' : 'text-white'}`} />
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
                    התוצאה <span className="text-brand-orange">עבורך</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-r-4 border-brand-orange/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-brand-orange" />
                      <h3 className="text-xl font-bold text-gray-900">שקט נפשי</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">יודעים שיש מי שדואג למערכות - אפשר להתמקד בעסק</p>
                  </div>

                  <div className="border-r-4 border-brand-orange/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-brand-orange" />
                      <h3 className="text-xl font-bold text-gray-900">מערכות שעובדות</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">מערכות מעודכנות, מהירות ואמינות - בלי הפתעות</p>
                  </div>

                  <div className="border-r-4 border-brand-orange/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-brand-orange" />
                      <h3 className="text-xl font-bold text-gray-900">מידע מוגן</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">גיבויים קבועים ואבטחה שוטפת - המידע שלכם בטוח</p>
                  </div>

                  <div className="border-r-4 border-brand-orange/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Rocket className="w-6 h-6 text-brand-orange" />
                      <h3 className="text-xl font-bold text-gray-900">שיפור מתמיד</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">ייעוץ ואופטימיזציה שוטפת - המערכות שלכם רק משתפרות</p>
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
              בואו נדבר על תמיכה שמלווה אתכם כל השנה
            </p>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-20">
            <ContactFormSection buttonColor="orange" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceSupport;