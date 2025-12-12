import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { FileEdit, ClipboardCheck, Send, BarChart3, PenTool, Bell, Shield, Zap, MessageCircle, BookOpen, Handshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import formsHeroImage from "@/assets/digital-forms-hero.jpg";

const ServiceForms = () => {
  const heroReveal = useScrollReveal({ threshold: 0.1 });
  const problemsReveal = useScrollReveal({ threshold: 0.1 });
  const typesReveal = useScrollReveal({ threshold: 0.1 });
  const featuresReveal = useScrollReveal({ threshold: 0.1 });
  const processReveal = useScrollReveal({ threshold: 0.1 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  const formTypes = [
    { 
      icon: ClipboardCheck, 
      title: "טפסי הרשמה ופניות", 
      description: "טפסים לאיסוף פרטי לקוחות, הרשמה לאירועים, פניות שירות ובקשות מידע. הכול מסודר ומתועד אוטומטית."
    },
    { 
      icon: BarChart3, 
      title: "סקרים ומשובים", 
      description: "סקרי שביעות רצון, משובי עובדים ולקוחות, שאלוני בדיקה - עם דוחות וניתוח תוצאות אוטומטי."
    },
    { 
      icon: FileEdit, 
      title: "טפסי הזמנות", 
      description: "טפסי הזמנה מותאמים עם חישוב מחירים, בחירת מוצרים ואפשרויות תשלום מובנות."
    },
    { 
      icon: Send, 
      title: "טפסי דיווח ובקשות", 
      description: "דיווחי שעות, בקשות חופשה, דיווחי תקלות - הכול מועבר אוטומטית לגורם המטפל."
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
                  <span className="text-gradient">טפסים דיגיטליים חכמים</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
                  טפסים אוטומטיים שמחליפים את הנייר, אוספים מידע ומעבירים אותו ישירות למערכות שלכם. 
                  חתימה דיגיטלית, תזכורות אוטומטיות ודוחות בזמן אמת.
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
                    className="rounded-full bg-brand-pink hover:bg-brand-pink/90 shadow-lg shadow-brand-pink/30 hover:shadow-brand-pink/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    קבעו פגישת ייעוץ ↓
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={formsHeroImage} 
                  alt="טפסים דיגיטליים"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* למה טפסים דיגיטליים? - Two Box Side by Side */}
          <div 
            ref={problemsReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              problemsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                למה טפסים דיגיטליים זה בדיוק מה <span className="text-brand-pink">שאתם צריכים?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Right - Pink Background - המציאות המוכרת */}
              <div className="bg-brand-pink rounded-2xl p-8 border-2 border-brand-pink/30">
                <h3 className="text-2xl font-bold text-white mb-6">המציאות המוכרת</h3>
                <div className="space-y-4">
                  <p className="text-white/90">• טפסי נייר שאובדים או מתבלבלים</p>
                  <p className="text-white/90">• הקלדה ידנית שגוזלת שעות עבודה</p>
                  <p className="text-white/90">• טעויות בהעברת מידע בין מערכות</p>
                  <p className="text-white/90">• קושי במעקב אחרי סטטוס טפסים</p>
                </div>
              </div>

              {/* Left - White Background - החיים עם טפסים דיגיטליים */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-brand-pink mb-6">החיים עם טפסים דיגיטליים</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">• הכול נשמר אוטומטית בענן</p>
                  <p className="text-gray-700">• המידע מועבר ישירות למערכות</p>
                  <p className="text-gray-700">• אפס טעויות העתקה או אובדן נתונים</p>
                  <p className="text-gray-700">• מעקב בזמן אמת אחרי כל טופס</p>
                </div>
              </div>
            </div>
          </div>

          {/* סוגי טפסים - Regular Cards */}
          <div 
            ref={typesReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              typesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              סוגי הטפסים <span className="text-brand-pink">שלנו</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {formTypes.map((form, index) => (
                <div
                  key={index}
                  className="p-8 border border-white/10 rounded-2xl hover:border-brand-pink/50 hover:bg-white/5 transition-all"
                >
                  <form.icon className="w-8 h-8 text-brand-pink mb-4" />
                  <h3 className="text-xl font-bold mb-3">{form.title}</h3>
                  <p className="text-muted-foreground">{form.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* מה הטפסים יודעים לעשות - Stacked Cards */}
          <div 
            ref={featuresReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  מה הטפסים <span className="text-brand-pink">יודעים לעשות?</span>
                </h2>
              </div>

              <div 
                ref={containerRef}
                className="relative"
              >
                {/* Progress Indicator */}
                <div className="absolute right-0 top-0 w-1 bg-white/10" style={{ height: '100%' }}>
                  <div 
                    className="w-full bg-gradient-to-b from-brand-pink to-brand-purple transition-all duration-300"
                    style={{ 
                      height: `${Math.min(100, cardProgress * 100)}%`
                    }}
                  />
                </div>

                {/* Progress Dots */}
                <div className="absolute right-[-4px] top-0 flex flex-col justify-around py-8" style={{ height: '100%' }}>
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    const dotProgress = Math.max(0, Math.min(1, cardProgress - index * 0.17));
                    return (
                      <div 
                        key={index}
                        className="w-3 h-3 rounded-full border-2 border-brand-pink transition-all duration-300"
                        style={{
                          backgroundColor: dotProgress > 0.5 ? 'hsl(var(--brand-pink))' : 'transparent',
                          transform: `scale(${0.8 + dotProgress * 0.4})`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Cards */}
                <div className="pr-8 relative">
                  {[
                    { icon: PenTool, title: "עיצוב מותאם אישית", description: "טפסים בעיצוב שמתאים למותג שלכם - לוגו, צבעים ופונטים. הטופס נראה כחלק אינטגרלי מהעסק." },
                    { icon: Send, title: "שליחה אוטומטית למערכות", description: "המידע מהטופס מועבר אוטומטית ל-CRM, אקסל, Google Sheets או כל מערכת אחרת שאתם משתמשים בה." },
                    { icon: Bell, title: "תזכורות אוטומטיות", description: "תזכורות למילוי טפסים, התראות כשטופס ממתין לאישור, ועדכונים אוטומטיים לכל הגורמים הרלוונטיים." },
                    { icon: BarChart3, title: "דוחות וסטטיסטיקות", description: "לראות בדיוק כמה טפסים התקבלו, מה הממוצעים, ולקבל תובנות על הנתונים שנאספו." },
                    { icon: Shield, title: "אימות נתונים", description: "בדיקות אוטומטיות שמוודאות שהמידע שהוזן תקין - מייל, טלפון, תעודת זהות ועוד." },
                    { icon: FileEdit, title: "חתימה דיגיטלית", description: "חתימה דיגיטלית מאובטחת על טפסים - חוזים, הסכמות ואישורים ללא צורך בפגישה פיזית." }
                  ].map((feature, index) => {
                    const cardProgressValue = Math.max(0, Math.min(1, cardProgress - index * 0.17));
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
                          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-pink/20 to-brand-purple/10 backdrop-blur-3xl rounded-2xl" />
                        )}
                        <div className="flex items-start gap-4">
                          <feature.icon className={`w-8 h-8 flex-shrink-0 ${isEven ? 'text-brand-pink' : 'text-white'}`} />
                          <div>
                            <h3 className={`text-xl font-bold mb-3 ${isEven ? 'text-gray-900' : 'text-white'}`}>
                              {feature.title}
                            </h3>
                            <p className={isEven ? 'text-gray-600' : 'text-white/80'}>
                              {feature.description}
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
                    איך זה <span className="text-brand-pink">עובד?</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-r-4 border-brand-pink/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageCircle className="w-6 h-6 text-brand-pink" />
                      <h3 className="text-xl font-bold text-gray-900">מיפוי הצרכים</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">מבינים אילו טפסים אתם צריכים ולאן המידע צריך להגיע</p>
                  </div>

                  <div className="border-r-4 border-brand-pink/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <PenTool className="w-6 h-6 text-brand-pink" />
                      <h3 className="text-xl font-bold text-gray-900">עיצוב הטופס</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">מעצבים טפסים יפים ונוחים למילוי, עם המותג שלכם</p>
                  </div>

                  <div className="border-r-4 border-brand-pink/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-brand-pink" />
                      <h3 className="text-xl font-bold text-gray-900">חיבור למערכות</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">מחברים את הטפסים לכל המערכות שאתם עובדים איתן</p>
                  </div>

                  <div className="border-r-4 border-brand-pink/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Handshake className="w-6 h-6 text-brand-pink" />
                      <h3 className="text-xl font-bold text-gray-900">השקה ומעקב</h3>
                    </div>
                    <p className="text-gray-600 mr-[28px]">משיקים, עוקבים אחרי הנתונים ומשפרים לפי הצורך</p>
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
              בואו נדבר על איך טפסים דיגיטליים יכולים לייעל את העסק שלכם
            </p>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-20">
            <ContactFormSection buttonColor="pink" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceForms;
