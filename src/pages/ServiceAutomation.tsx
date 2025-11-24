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
  const [cardProgress, setCardProgress] = useState({ card1: 0, card2: 0, card3: 0, card4: 0 });

  const handleCardScroll = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cards = container.querySelectorAll('[data-card]');
    
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      setCardProgress(prev => ({
        ...prev,
        [`card${index + 1}`]: progress
      }));
    });
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
                    className="rounded-full shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
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

          {/* למה אוטומציה? - Two Box Style */}
          <div 
            ref={problemsReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              problemsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  למה אוטומציה <span className="text-brand-purple">משנה את המשחק?</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="h-px bg-gradient-to-l from-brand-purple/50 via-brand-blue/30 to-transparent" />
                
                {/* Challenge Box */}
                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-red-500 mb-6">המציאות המוכרת</h3>
                  <div className="space-y-4">
                    <p className="text-foreground/80">• משימות חוזרות שגוזלות שעות כל יום</p>
                    <p className="text-foreground/80">• העתקת מידע בין מערכות שונות ידנית</p>
                    <p className="text-foreground/80">• טעויות אנוש שעולות כסף</p>
                    <p className="text-foreground/80">• דברים שנופלים בין הכיסאות</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-l from-brand-purple/50 via-brand-cyan/30 to-transparent" />

                {/* Solution Box */}
                <div className="bg-background/50 backdrop-blur-sm border-2 border-brand-purple/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-brand-purple mb-6">החיים עם אוטומציה</h3>
                  <div className="space-y-4">
                    <p className="text-foreground/80">• חיסכון של עד 70% בזמן ביצוע משימות</p>
                    <p className="text-foreground/80">• הכול עובד אוטומטית, ללא מעורבות שלכם</p>
                    <p className="text-foreground/80">• דיוק מלא - אפס טעויות</p>
                    <p className="text-foreground/80">• שום דבר לא יפול - הכול מתועד</p>
                  </div>
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
                  מה אפשר לעשות <span className="text-brand-purple">עם אוטומציה?</span>
                </h2>
              </div>

              <div ref={containerRef} className="space-y-6">
                {/* Workflow Automation */}
                <div data-card="1" className="bg-gradient-to-br from-brand-purple/5 to-transparent border border-brand-purple/20 rounded-2xl p-8 hover:border-brand-purple/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-7 h-7 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">אוטומציה של תהליכי עבודה</h3>
                      <p className="text-foreground/70 mb-4">
                        מקבלים פנייה? המערכת יוצרת תיקייה, שולחת מייל, מעדכנת בטבלה ומזכירה לכם במועד הנכון.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        דוגמה: קבלת פנייה → פתיחת תיקייה → שליחת מייל אישור → יצירת משימה
                      </p>
                    </div>
                  </div>
                </div>

                {/* System Integration */}
                <div data-card="2" className="bg-gradient-to-br from-brand-purple/5 to-transparent border border-brand-purple/20 rounded-2xl p-8 hover:border-brand-purple/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <LinkIcon className="w-7 h-7 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">חיבור בין מערכות</h3>
                      <p className="text-foreground/70 mb-4">
                        מחברים מערכות שלא מדברות אחת עם השנייה - Google Sheets, CRM, WhatsApp, מייל ועוד.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        דוגמה: עדכון ב-CRM → שליחת הודעת WhatsApp → עדכון בטבלת Excel
                      </p>
                    </div>
                  </div>
                </div>

                {/* Report Generation */}
                <div data-card="3" className="bg-gradient-to-br from-brand-purple/5 to-transparent border border-brand-purple/20 rounded-2xl p-8 hover:border-brand-purple/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-7 h-7 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">יצירת דוחות אוטומטיים</h3>
                      <p className="text-foreground/70 mb-4">
                        בסוף כל שבוע/חודש המערכת יוצרת דוח מפורט ושולחת אותו למייל - ללא מאמץ מצדכם.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        דוגמה: איסוף נתונים → יצירת דוח PDF → שליחה למייל בזמן קבוע
                      </p>
                    </div>
                  </div>
                </div>

                {/* Communication Management */}
                <div data-card="4" className="bg-gradient-to-br from-brand-purple/5 to-transparent border border-brand-purple/20 rounded-2xl p-8 hover:border-brand-purple/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">ניהול תקשורת</h3>
                      <p className="text-foreground/70 mb-4">
                        שליחת מיילים, הודעות, תזכורות והתראות אוטומטיות - בזמן הנכון, לאנשים הנכונים.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        דוגמה: יום לפני פגישה → שליחת תזכורת למייל ו-SMS
                      </p>
                    </div>
                  </div>
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
              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-purple/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">עסק רפואי</h3>
                <p className="text-muted-foreground">
                  פנייה חדשה → תיקייה ב-Drive → מייל ללקוח → משימה ביומן → התראות למנהלים
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-purple/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">חנות אונליין</h3>
                <p className="text-muted-foreground">
                  הזמנה חדשה → עדכון מלאי → שליחת אישור ללקוח → יצירת משלוח → עדכון בחשבונאות
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-purple/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">משרד שירות</h3>
                <p className="text-muted-foreground">
                  ליד חדש → הוספה ל-CRM → תזכורת מעקב → דוח שבועי → עדכון סטטוס אוטומטי
                </p>
              </div>
            </div>
          </div>

          {/* איך זה עובד - With Lucide Icons */}
          <div 
            ref={processReveal.ref}
            className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 ${
              processReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  איך זה <span className="text-brand-purple">עובד?</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-r-4 border-brand-purple/50 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                      <Compass className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-bold">מיפוי התהליכים</h3>
                  </div>
                  <p className="text-foreground/70 mr-[52px]">מבינים איך העסק עובד היום, איפה הבעיות ומה צריך לשפר</p>
                </div>

                <div className="border-r-4 border-brand-purple/50 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-bold">תכנון האוטומציה</h3>
                  </div>
                  <p className="text-foreground/70 mr-[52px]">מתכננים את התהליך האוטומטי - מה קורה בכל שלב, מה הטריגרים ומה התוצאות</p>
                </div>

                <div className="border-r-4 border-brand-purple/50 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-bold">בניה והטמעה</h3>
                  </div>
                  <p className="text-foreground/70 mr-[52px]">בונים את האוטומציה, מחברים את המערכות ובודקים שהכול עובד מעולה</p>
                </div>

                <div className="border-r-4 border-brand-purple/50 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                      <HeartHandshake className="w-5 h-5 text-brand-purple" />
                    </div>
                    <h3 className="text-xl font-bold">ניטור ושיפור</h3>
                  </div>
                  <p className="text-foreground/70 mr-[52px]">עוקבים אחרי הביצועים, משפרים ומוסיפים אוטומציות נוספות לפי הצורך</p>
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
                <span className="inline-block px-4 py-1 bg-brand-purple/20 text-brand-purple text-sm font-semibold rounded-full">
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
