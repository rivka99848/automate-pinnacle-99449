import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, MessageCircle, Clock, Zap, BarChart3, Sparkles, Target, Wrench, BookOpen, Handshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import botAiImage from "@/assets/bot-ai-assistant.jpg";

const ServiceBots = () => {
  const heroReveal = useScrollReveal({ threshold: 0.1 });
  const problemsReveal = useScrollReveal({ threshold: 0.1 });
  const typesReveal = useScrollReveal({ threshold: 0.1 });
  const featuresReveal = useScrollReveal({ threshold: 0.1 });
  const processReveal = useScrollReveal({ threshold: 0.1 });
  const successReveal = useScrollReveal({ threshold: 0.1 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardProgress, setCardProgress] = useState(0);

  const botTypes = [
    { 
      icon: MessageCircle, 
      title: "בוט WhatsApp", 
      description: "מענה אוטומטי בוואטסאפ - השאלות הכי נפוצות, מחירונים, זמינות ועוד. הלקוחות מקבלים תשובות מיידיות."
    },
    { 
      icon: Sparkles, 
      title: "בוט AI חכם", 
      description: "בוט מבוסס בינה מלאכותית שמבין שאלות מורכבות, לומד מהשיחות ומשתפר עם הזמן."
    },
    { 
      icon: Bot, 
      title: "בוט לאתרים", 
      description: "צ'אט חי באתר שמשיב על שאלות, עוזר למבקרים למצוא מה שהם מחפשים ומגדיל המרות."
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
                  <span className="text-gradient">בוטים חכמים למענה אוטומטי</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
                  מענה אוטומטי ללקוחות 24/7, קבלת הזמנות ושאילתות, אינטגרציה עם מערכות קיימות ודוחות על כל השיחות. 
                  הבוטים שלנו עובדים בלי הפסקה ומספקים חוויה מעולה ללקוחות.
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
                    className="rounded-full shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    קבעו פגישת ייעוץ ↓
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={botAiImage} 
                  alt="AI Bots"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
            </div>
          </div>

          {/* למה בוטים? - Two Box Style */}
          <div 
            ref={problemsReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              problemsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  למה בוט זה בדיוק מה <span className="text-brand-green">שאתם צריכים?</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="h-px bg-gradient-to-l from-brand-green/50 via-brand-cyan/30 to-transparent" />
                
                {/* Challenge Box */}
                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-red-500 mb-6">המצב המוכר</h3>
                  <div className="space-y-4">
                    <p className="text-foreground/80">• שאלות חוזרות שלוקחות הרבה זמן</p>
                    <p className="text-foreground/80">• פניות בשעות לא שגרתיות שאף אחד לא עונה להן</p>
                    <p className="text-foreground/80">• לקוחות מתוסכלים שמחכים למענה</p>
                    <p className="text-foreground/80">• הזמנות שאובדות בין ההודעות</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-l from-brand-green/50 via-brand-cyan/30 to-transparent" />

                {/* Solution Box */}
                <div className="bg-background/50 backdrop-blur-sm border-2 border-brand-green/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-brand-green mb-6">הפתרון</h3>
                  <div className="space-y-4">
                    <p className="text-foreground/80">• מענה מיידי לכל שאלה, בכל שעה</p>
                    <p className="text-foreground/80">• זמינות 24/7 ללא עלות נוספת</p>
                    <p className="text-foreground/80">• לקוחות מרוצים שמקבלים שירות מהיר</p>
                    <p className="text-foreground/80">• כל ההזמנות מתועדות ומסודרות</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* סוגי בוטים - Stacked Cards */}
          <div 
            ref={typesReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              typesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  סוגי הבוטים <span className="text-brand-green">שלנו</span>
                </h2>
              </div>

              <div 
                ref={containerRef}
                className="relative"
                style={{ minHeight: `${botTypes.length * 400}px` }}
              >
                {/* Progress Indicator */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/10">
                  <div 
                    className="w-full bg-gradient-to-b from-brand-green to-brand-cyan transition-all duration-300"
                    style={{ 
                      height: `${Math.min(100, cardProgress * 100)}%`
                    }}
                  />
                </div>

                {/* Progress Dots */}
                <div className="absolute right-[-4px] top-0 bottom-0 flex flex-col justify-around py-8">
                  {botTypes.map((_, index) => {
                    const dotProgress = Math.max(0, Math.min(1, cardProgress - index * 0.33));
                    return (
                      <div 
                        key={index}
                        className="w-3 h-3 rounded-full border-2 border-brand-green transition-all duration-300"
                        style={{
                          backgroundColor: dotProgress > 0.5 ? 'hsl(var(--brand-green))' : 'transparent',
                          transform: `scale(${0.8 + dotProgress * 0.4})`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Cards */}
                <div className="pr-8 space-y-6">
                  {botTypes.map((bot, index) => {
                    const cardProgressValue = Math.max(0, Math.min(1, cardProgress - index * 0.33));
                    const scale = 0.95 + cardProgressValue * 0.05;
                    const translateY = (1 - cardProgressValue) * 20;
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div
                        key={index}
                        className={`sticky top-32 rounded-2xl p-8 transition-all duration-500 ${
                          isEven 
                            ? 'bg-white text-gray-900 border-2 border-gray-200' 
                            : 'bg-gradient-to-br from-brand-green/20 to-brand-cyan/10 border-2 border-brand-green/30'
                        }`}
                        style={{
                          transform: `scale(${scale}) translateY(${translateY}px)`,
                          opacity: 0.5 + cardProgressValue * 0.5
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            isEven ? 'bg-brand-green/20' : 'bg-brand-green/30'
                          }`}>
                            <bot.icon className={`w-7 h-7 ${isEven ? 'text-brand-green' : 'text-white'}`} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold mb-3 ${isEven ? 'text-gray-900' : 'text-white'}`}>
                              {bot.title}
                            </h3>
                            <p className={isEven ? 'text-gray-600' : 'text-white/80'}>
                              {bot.description}
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

          {/* תכונות מפורטות */}
          <div 
            ref={featuresReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-16 text-center">מה הבוט יודע לעשות?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">זמינות 24/7</h3>
                <p className="text-muted-foreground">
                  הבוט לא ישן, לא לוקח חופשה ולא מחכה לחזור מהמקלחת. תמיד זמין, תמיד מוכן לענות.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">מענה מיידי</h3>
                <p className="text-muted-foreground">
                  לקוחות לא אוהבים לחכות. הבוט עונה תוך שניות ונותן בדיוק את המידע שהם צריכים.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">שאלות מורכבות</h3>
                <p className="text-muted-foreground">
                  הבוט מבין שאלות בשפה טבעית, יודע להתאים את התשובות ואפילו לשאול שאלות הבהרה.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">קבלת הזמנות</h3>
                <p className="text-muted-foreground">
                  הבוט יכול לקבל הזמנות, לבדוק זמינות, להציע אלטרנטיבות ולסגור עסקאות.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">דוחות ומדדים</h3>
                <p className="text-muted-foreground">
                  לראות בדיוק כמה פניות היו, מה השאלות הכי נפוצות ואיפה אפשר לשפר.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">אינטגרציה</h3>
                <p className="text-muted-foreground">
                  חיבור למערכות קיימות - CRM, יומן, מערכת הזמנות ועוד. הכול עובד ביחד בצורה חלקה.
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
                    איך זה <span className="text-brand-green">עובד?</span>
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div className="border-r-4 border-brand-green/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">נפגשים ומבינים</h3>
                    </div>
                    <p className="text-gray-600 mr-[52px]">מה הלקוחות שואלים? איזה תהליך יש היום? מה החזון?</p>
                  </div>

                  <div className="border-r-4 border-brand-green/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">בונים את הבוט</h3>
                    </div>
                    <p className="text-gray-600 mr-[52px]">מתכננים את השיחות, מכינים תשובות ומלמדים את הבוט</p>
                  </div>

                  <div className="border-r-4 border-brand-green/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">בדיקות ושיפורים</h3>
                    </div>
                    <p className="text-gray-600 mr-[52px]">בודקים את הבוט, משפרים ומוודאים שהוא עובד מצוין</p>
                  </div>

                  <div className="border-r-4 border-brand-green/50 pr-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">השקה ותמיכה</h3>
                    </div>
                    <p className="text-gray-600 mr-[52px]">משיקים, עוקבים אחרי הביצועים ומשפרים לפי הצורך</p>
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
                <span className="inline-block px-4 py-1 bg-brand-green/20 text-brand-green text-sm font-semibold rounded-full">
                  01 • בוט חכם
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                🏝 ניהול פניות אוטומטי לרשת נופש יוקרתית
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                כששאלות כמו "יש דיל?", "פנוי בסופ״ש?" ו״מה המחיר?" לא הפסיקו להגיע – 
                מנהל רשת ניחותא מצא את עצמו קבור בהתכתבויות. הפתרון? בוט חכם עם סוכן AI 
                שמנהל את כל התקשורת עם הלקוחות – מהבירור ועד לסגירה.
              </p>
              <div className="flex gap-4">
                <Button asChild className="rounded-full">
                  <Link to="/projects/nichuta-vacation-bot">צפה בפרויקט המלא</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/blog/nichuta-bot">קרא את הסיפור</Link>
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
              בואו נדבר על איך בוט יכול לשדרג את העסק שלכם
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

export default ServiceBots;
