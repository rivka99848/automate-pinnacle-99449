import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, RefreshCw, LinkIcon, FileText, Mail, TrendingUp, Compass, Settings, Rocket, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import automationHeroImage from "@/assets/hero-automation-future.jpg";

const ServiceAutomation = () => {
  const heroReveal = useScrollReveal({ threshold: 0.1 });
  const problemsReveal = useScrollReveal({ threshold: 0.1 });
  const typesReveal = useScrollReveal({ threshold: 0.1 });
  const examplesReveal = useScrollReveal({ threshold: 0.1 });
  const processReveal = useScrollReveal({ threshold: 0.1 });
  const successReveal = useScrollReveal({ threshold: 0.1 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  const automationTypes = [
    { 
      icon: RefreshCw, 
      title: "אוטומציה של תהליכי עבודה", 
      description: "מקבלים פנייה? המערכת יוצרת תיקייה, שולחת מייל, מעדכנת בטבלה ומזכירה לכם במועד הנכון.",
      example: "קבלת פנייה → פתיחת תיקייה → שליחת מייל אישור → יצירת משימה"
    },
    { 
      icon: LinkIcon, 
      title: "חיבור בין מערכות", 
      description: "מחברים מערכות שלא מדברות אחת עם השנייה - Google Sheets, CRM, WhatsApp, מייל ועוד.",
      example: "עדכון ב-CRM → שליחת הודעת WhatsApp → עדכון בטבלת Excel"
    },
    { 
      icon: FileText, 
      title: "יצירת דוחות אוטומטיים", 
      description: "בסוף כל שבוע/חודש המערכת יוצרת דוח מפורט ושולחת אותו למייל - ללא מאמץ מצדכם.",
      example: "איסוף נתונים → יצירת דוח PDF → שליחה למייל בזמן קבוע"
    },
    { 
      icon: Mail, 
      title: "ניהול תקשורת", 
      description: "שליחת מיילים, הודעות, תזכורות והתראות אוטומטיות - בזמן הנכון, לאנשים הנכונים.",
      example: "יום לפני פגישה → שליחת תזכורת למייל ו-SMS"
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
          {/* Hero Section - New Structure */}
          <div 
            ref={heroReveal.ref}
            className={`mb-24 transition-all duration-1000 ${
              heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">אוטומציות עסקיות חכמות</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
                  אוטומציה חכמה של תהליכים עסקיים שחוסכת עד 70% מהזמן וממזערת טעויות אנוש. 
                  המערכת מטפלת בכל המשימות החוזרות במקומך - אתם פשוט תהנו מהתוצאות.
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
                    className="rounded-full shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    קבעו פגישת ייעוץ ↓
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={automationHeroImage} 
                  alt="Business Automation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* למה אוטומציה? - Two Box Side by Side */}
          <div 
            ref={problemsReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              problemsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                למה אוטומציה <span className="text-brand-blue">משנה את המשחק?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Right - Blue Background - המציאות המוכרת */}
              <div className="bg-brand-blue rounded-2xl p-8 border-2 border-brand-blue/30">
                <h3 className="text-2xl font-bold text-white mb-6">המציאות המוכרת</h3>
                <div className="space-y-4">
                  <p className="text-white/90">• משימות חוזרות שגוזלות שעות כל יום</p>
                  <p className="text-white/90">• העתקת מידע בין מערכות שונות ידנית</p>
                  <p className="text-white/90">• טעויות אנוש שעולות כסף</p>
                  <p className="text-white/90">• דברים שנופלים בין הכיסאות</p>
                </div>
              </div>

              {/* Left - White Background - החיים עם אוטומציה */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">החיים עם אוטומציה</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• חיסכון של עד 70% בזמן ביצוע משימות</p>
                  <p className="text-gray-700">• הכול עובד אוטומטית, ללא מעורבות שלכם</p>
                  <p className="text-gray-700">• דיוק מלא - אפס טעויות</p>
                  <p className="text-gray-700">• שום דבר לא יפול - הכול מתועד</p>
                </div>
              </div>
            </div>
          </div>

          {/* סוגי אוטומציות - Stacked Cards */}
          <div 
            ref={typesReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              typesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  מה אפשר לעשות <span className="text-brand-blue">עם אוטומציה?</span>
                </h2>
              </div>

              <div 
                ref={containerRef}
                className="relative"
              >
                {/* Progress Indicator */}
                <div className="absolute right-0 top-0 w-1 bg-white/10" style={{ height: '100%' }}>
                  <div 
                    className="w-full bg-gradient-to-b from-brand-blue to-brand-cyan transition-all duration-300"
                    style={{ 
                      height: `${Math.min(100, cardProgress * 100)}%`
                    }}
                  />
                </div>

                {/* Progress Dots */}
                <div className="absolute right-[-4px] top-0 flex flex-col justify-around py-8" style={{ height: '100%' }}>
                  {automationTypes.map((_, index) => {
                    const dotProgress = Math.max(0, Math.min(1, cardProgress - index * 0.25));
                    return (
                      <div 
                        key={index}
                        className="w-3 h-3 rounded-full border-2 border-brand-blue transition-all duration-300"
                        style={{
                          backgroundColor: dotProgress > 0.5 ? 'hsl(var(--brand-blue))' : 'transparent',
                          transform: `scale(${0.8 + dotProgress * 0.4})`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Cards */}
                <div className="pr-8 relative">
                  {automationTypes.map((automation, index) => {
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
                          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blue/20 to-brand-cyan/10 backdrop-blur-3xl rounded-2xl" />
                        )}
                        <div className="flex items-start gap-4">
                          <automation.icon className={`w-8 h-8 flex-shrink-0 ${isEven ? 'text-brand-blue' : 'text-white'}`} />
                          <div>
                            <h3 className={`text-xl font-bold mb-3 ${isEven ? 'text-gray-900' : 'text-white'}`}>
                              {automation.title}
                            </h3>
                            <p className={`mb-4 ${isEven ? 'text-gray-600' : 'text-white/80'}`}>
                              {automation.description}
                            </p>
                            <p className={`text-sm italic ${isEven ? 'text-gray-500' : 'text-white/60'}`}>
                              {automation.example}
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

          {/* דוגמאות שימוש */}
          <div 
            ref={examplesReveal.ref}
            className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 ${
              examplesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">דוגמאות מהחיים</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <Zap className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">עסק רפואי</h3>
                <p className="text-muted-foreground">
                  פנייה חדשה → תיקייה ב-Drive → מייל ללקוח → משימה ביומן → התראות למנהלים
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <TrendingUp className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">חנות אונליין</h3>
                <p className="text-muted-foreground">
                  הזמנה חדשה → עדכון מלאי → שליחת אישור ללקוח → יצירת משלוח → עדכון בחשבונאות
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <FileText className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">משרד שירות</h3>
                <p className="text-muted-foreground">
                  ליד חדש → הוספה ל-CRM → תזכורת מעקב → דוח שבועי → עדכון סטטוס אוטומטי
                </p>
              </div>
            </div>
          </div>

          {/* איך זה עובד - With White Background */}
          <div className="bg-white py-16 md:py-24 -mx-4 px-4">
            <div 
              ref={processReveal.ref}
              className={`max-w-6xl mx-auto mb-8 transition-all duration-1000 ${
                processReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                    איך זה <span className="text-brand-blue">עובד?</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Compass className="w-6 h-6 text-brand-blue" />
                      <h3 className="text-xl font-bold text-gray-900">מיפוי התהליכים</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">מבינים איך העסק עובד היום, איפה הבעיות ומה צריך לשפר</p>
                  </div>

                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="w-6 h-6 text-brand-blue" />
                      <h3 className="text-xl font-bold text-gray-900">תכנון האוטומציה</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">מתכננים את התהליך האוטומטי - מה קורה בכל שלב, מה הטריגרים ומה התוצאות</p>
                  </div>

                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Rocket className="w-6 h-6 text-brand-blue" />
                      <h3 className="text-xl font-bold text-gray-900">בניה והטמעה</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">בונים את האוטומציה, מחברים את המערכות ובודקים שהכול עובד מעולה</p>
                  </div>

                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <HeartHandshake className="w-6 h-6 text-brand-blue" />
                      <h3 className="text-xl font-bold text-gray-900">ניטור ושיפור</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">עוקבים אחרי הביצועים, משפרים ומוסיפים אוטומציות נוספות לפי הצורך</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* פרויקט רלוונטי */}
          <div 
            ref={successReveal.ref}
            className={`max-w-5xl mx-auto mb-20 transition-all duration-1000 ${
              successReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">סיפור הצלחה</h2>
            <div className="bg-card p-10 rounded-3xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-1 bg-brand-blue/20 text-brand-blue text-sm font-semibold rounded-full">
                  02 • אוטומציה מלאה
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                💼 אוטומציה מלאה לעסק רפואי עמוס בפניות
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                בעל עסק רפואי טובע בפניות, מיילים ומסמכים? גם הלקוח שלנו היה שם – עד שהמערכת 
                שבנינו עשתה מהפכה. טופס חכם, תיקיות אוטומטיות, ניהול משימות והתראות – הכול רץ לבד. 
                פחות התעסקות, יותר סדר ויותר זמן לעסוק במה שבאמת חשוב.
              </p>
              <div className="flex gap-4">
                <Button asChild className="rounded-full">
                  <Link to="/projects/medical-automation">צפה בפרויקט המלא</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/blog/medical-automation">קרא את הסיפור</Link>
                </Button>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="ghost" className="rounded-full">
                <Link to="/projects">צפה בכל הפרויקטים ←</Link>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              בואו נדבר על איך אוטומציה יכולה לשדרג את העסק שלכם
            </p>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-20">
            <ContactFormSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAutomation;
