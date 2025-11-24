import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, LineChart, Calendar, Mail, Shield, AlertCircle, CheckCircle } from "lucide-react";
import crmHeroImage from "@/assets/crm-hero.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect, useRef, useCallback } from "react";

const ServiceCRM = () => {
  const heroReveal = useScrollReveal({ threshold: 0.2 });
  const problemsReveal = useScrollReveal({ threshold: 0.3 });
  const featuresReveal = useScrollReveal({ threshold: 0.2 });
  const processReveal = useScrollReveal({ threshold: 0.3 });
  const [cardProgress, setCardProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const progress = -rect.top / (window.innerHeight * 0.5);
      setCardProgress(progress);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleCardScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', scrollListener);
    handleCardScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleCardScroll]);

  const modules = [
    {
      icon: Users,
      title: "ניהול לקוחות 360°",
      description: "כרטיס לקוח מקיף המציג את כל ההיסטוריה – שיחות, פגישות, מסמכים והצעות מחיר. רואים את האדם, לא רק את הנתונים."
    },
    {
      icon: LineChart,
      title: "מעקב עסקאות גמיש (Pipeline)",
      description: "בנה את שלבי המכירה שלך כפי שאתה מכיר אותם. דע בדיוק מה הסטטוס של כל עסקה ומהו הצעד הבא."
    },
    {
      icon: Mail,
      title: "סנכרון מלא ואוטומטי",
      description: "חיבור חלק ל-Gmail, לוח שנה וכלים נוספים שאתם כבר משתמשים בהם. המידע פשוט זורם למערכת, ללא התערבות ידנית."
    },
    {
      icon: Database,
      title: "דשבורד ותחזיות",
      description: "גרפים, דוחות ומדדים מותאמים אישית. לא רק נתונים, אלא יכולת לחזות הכנסות ולקבל החלטות אסטרטגיות."
    },
    {
      icon: Calendar,
      title: "מנגנון הרשאות מתוחכם",
      description: "שליטה מלאה על הגישה למידע הרגיש. רק מי שצריך לראות – רואה."
    },
    {
      icon: Shield,
      title: "אבטחה וגיבויים",
      description: "הצפנה מלאה, גיבויים אוטומטיים ויומן שינויים. המידע שלכם מוגן ומאובטח תמיד."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div 
            ref={heroReveal.ref}
            className={`mb-24 transition-all duration-1000 ${
              heroReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
                  מערכת <span className="text-brand-blue">CRM</span>
                </h1>
                
                <div className="max-w-4xl mx-auto space-y-6 text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-cyan mb-4">
                    מהו CRM (ניהול קשרי לקוחות) ומה הוא נותן לנו?
                  </h2>
                  
                  <p>
                    <strong>CRM (Customer Relationship Management)</strong>, או בעברית: ניהול קשרי לקוחות, הוא כלי מרכזי לניהול כל הקשרים עם הלקוחות שלכם במקום אחד.
                  </p>
                  
                  <p>
                    מערכת CRM שאני בונה מעניקה לכם כלים מדויקים לניהול העסק שלכם בצורה פשוטה, נוחה וחכמה יותר.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                    אז מה המערכת נותנת לכם בפועל?
                  </h3>
                  
                  <div className="text-right space-y-4 max-w-3xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      <strong className="text-brand-blue text-xl">1. ריכוז וסדר:</strong>
                      <p className="mt-2">כל פרטי הלקוחות מרוכזים בצורה מסודרת. כל הנתונים החשובים יהיו ברורים ונגישים מול העיניים – בלי חוסר מעקב, בלי בלגן, ובלי בזבוז זמן.</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      <strong className="text-brand-cyan text-xl">2. מעקב מדויק:</strong>
                      <p className="mt-2">אתם יודעים בדיוק איפה כל לקוח נמצא בתהליך (התעניין? קנה? צריך חידוש?).</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                      <strong className="text-brand-purple text-xl">3. שמירה על קשר אישי:</strong>
                      <p className="mt-2">אתם יכולים לשמור על קשר אישי בלי לזכור הכול בראש.</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                      <strong className="text-brand-blue text-xl">4. שליטה מלאה והשקעה חכמה:</strong>
                      <p className="mt-2">המצב של העסק שלכם פרוס לכם כמו מפה ברורה. אתם יודעים מאיפה הגיע כל ליד בקלות, וכך יודעים איפה כדאי לכם להשקיע.</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                      <strong className="text-brand-cyan text-xl">5. דאשבורד (לוח מחוונים) כוללני:</strong>
                      <p className="mt-2">המערכת מציגה נתונים חשובים על מצב העסק. לדוגמה, אחוז המרה מליד ללקוח, וגרפים של הכנסות לפי חודש או שנה.</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                      <strong className="text-brand-purple text-xl">6. חיסכון בעלויות וסדר מנהלי:</strong>
                      <p className="mt-2">המערכת חוסכת לכם לא רק עלויות, אלא גם כאב ראש. היא יכולה לחסוך לכם מזכירה במיקור חוץ או פנים, כיוון שהיא שולחת חשבוניות וקבלות.</p>
                    </div>
                  </div>
                  
                  <p className="text-2xl font-bold text-brand-blue mt-8">
                    המערכת עוזרת לכם להחזיר את השליטה והסדר לעסק שלכם.
                  </p>
                </div>
              </div>
              
              {/* תמונה מתחת לטקסט */}
              <div className="relative rounded-3xl overflow-hidden group">
                <img 
                  src={crmHeroImage} 
                  alt="CRM System Dashboard"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* למה CRM? */}
          <div 
            ref={problemsReveal.ref}
            className={`max-w-5xl mx-auto mb-24 transition-all duration-1000 delay-200 ${
              problemsReveal.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">הבעיות שהפכו אתכם ללקוחות שלנו</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-6">🔴 הבעיה (המצב הנוכחי)</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3 animate-fade-in delay-100 hover:translate-x-2 transition-transform">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>כאוס במידע:</strong> נתונים קריטיים על לקוחות ועסקאות פזורים בין וואטסאפ, אקסל ומיילים, ומובילים להחלטות שגויות.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fade-in delay-200 hover:translate-x-2 transition-transform">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>איבוד לקוחות:</strong> קשה לעקוב אחרי ריבוי שיחות, פגישות ומשימות – לקוחות פשוט "נופלים" מהרדאר.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fade-in delay-300 hover:translate-x-2 transition-transform">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>חוסר ודאות:</strong> אין תמונה ברורה על הביצועים, חזוי המכירות ואיפה צוואר הבקבוק נמצא.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-blue mb-6">✅ הפתרון (התוצאה שלנו)</h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3 animate-fade-in delay-100 hover:translate-x-2 transition-transform">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                      <span><strong>שליטה מוחלטת:</strong> כל פיסת מידע נמצאת במקום אחד, מתויגת, מנוהלת ומאובטחת.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fade-in delay-200 hover:translate-x-2 transition-transform">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                      <span><strong>אוטומציה חכמה:</strong> תזכורות אוטומטיות, ניהול משימות חכם ומעקב אחרי כל אינטראקציה עד לסגירה.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fade-in delay-300 hover:translate-x-2 transition-transform">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                      <span><strong>תובנות בזמן אמת:</strong> דשבורד מנהלים אינטואיטיבי המציג נתונים חיים, כדי שתוכלו לקבל החלטות מבוססות נתונים תוך שניות.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* תכונות מפורטות - Stacked Cards */}
          <div 
            ref={featuresReveal.ref}
            className={`mb-24 transition-all duration-1000 ${
              featuresReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div 
              ref={containerRef}
              className="max-w-3xl mx-auto px-4 relative"
              style={{ minHeight: `${modules.length * 280}px` }}
            >
              <h2 className="text-3xl font-bold mb-16 text-center sticky top-20 bg-brand-dark/98 backdrop-blur-3xl py-6 z-20 rounded-2xl shadow-lg">
                המודולים שישנו את צורת העבודה שלכם
              </h2>
              
              {/* Progress Indicator */}
              <div className="fixed left-8 top-1/2 -translate-y-1/2 space-y-3 z-30 hidden lg:block">
                {modules.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(cardProgress / 0.35) === index
                        ? 'bg-brand-blue scale-150 shadow-lg shadow-brand-blue/50'
                        : 'bg-white/30 scale-100'
                    }`}
                  />
                ))}
              </div>

              <div className="relative space-y-6">
                {modules.map((module, index) => {
                  const cardOffset = Math.max(0, cardProgress - index * 0.35);
                  const scale = 1 - Math.min(cardOffset * 0.08, 0.12);
                  const opacity = 1;
                  const translateY = cardOffset * -60;
                  
                  // ✨ זיהוי סוג הכרטיס - זוגי = לבן, אי-זוגי = כחול
                  const isWhiteCard = index % 2 === 0;
                  
                  const gradients = [
                    'from-brand-blue/20 to-brand-cyan/10',
                    'from-brand-cyan/20 to-brand-purple/10',
                    'from-brand-purple/20 to-brand-blue/10',
                    'from-brand-blue/15 to-brand-purple/15',
                    'from-brand-cyan/15 to-brand-blue/15',
                    'from-brand-purple/15 to-brand-cyan/15'
                  ];

                  return (
                    <div
                      key={index}
                      className="group/card sticky transition-all duration-300 ease-out"
                      style={{
                        top: `${120 + index * 15}px`,
                        transform: `scale(${scale}) translateY(${translateY}px)`,
                        opacity: opacity,
                        zIndex: modules.length - index
                      }}
                    >
                      <div className={`
                        relative p-10 rounded-3xl overflow-hidden shadow-2xl 
                        transition-all duration-500
                        ${isWhiteCard 
                          ? 'bg-white/95 border-2 border-gray-200 hover:border-brand-blue/50 hover:shadow-brand-blue/20' 
                          : 'bg-brand-dark/95 border-2 border-white/10 hover:border-brand-cyan/50 hover:shadow-brand-cyan/30'
                        }
                        hover:scale-[1.02] hover:-translate-y-2
                      `}>
                        {/* שכבת gradient דקורטיבית - רק לכרטיסים כחולים */}
                        {!isWhiteCard && (
                          <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-3xl`} />
                        )}
                        
                        {/* התוכן */}
                        <div className="relative z-10">
                          {/* Layout אופקי - אייקון משמאל, תוכן מימין */}
                          <div className="flex items-start gap-8">
                            <div className={`
                              w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg
                              group-hover/card:rotate-12 group-hover/card:scale-110 transition-all duration-500
                              ${isWhiteCard
                                ? 'bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20'
                                : 'bg-gradient-to-br from-white/20 to-gray-100/10'
                              }
                            `}>
                              <module.icon className={`
                                w-11 h-11 transition-colors duration-500
                                ${isWhiteCard 
                                  ? 'text-brand-blue group-hover/card:text-brand-cyan' 
                                  : 'text-brand-cyan group-hover/card:text-white'
                                }
                              `} />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className={`
                                text-2xl font-bold mb-4 transition-colors duration-300
                                ${isWhiteCard 
                                  ? 'text-gray-900 group-hover/card:text-brand-blue' 
                                  : 'text-white group-hover/card:text-brand-cyan'
                                }
                              `}>
                                {module.title}
                              </h3>
                              <p className={`
                                text-lg leading-relaxed
                                ${isWhiteCard ? 'text-gray-700' : 'text-foreground/80'}
                              `}>
                                {module.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* איך זה עובד */}
          <div 
            ref={processReveal.ref}
            className={`max-w-5xl mx-auto mb-24 transition-all duration-1000 delay-200 ${
              processReveal.isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold mb-16 text-center">התהליך: משיחה ראשונה למערכת עובדת</h2>
              <div className="relative">
                {/* קו מחבר אנכי */}
                <div className="absolute right-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-purple opacity-30" />
                
                <div className="space-y-12">
                  {[
                    {
                      number: "1",
                      title: "אפיון מדויק",
                      description: "אנחנו מקשיבים. מבינים את הצרכים, את צווארי הבקבוק ואת החזון שלכם."
                    },
                    {
                      number: "2",
                      title: "תכנון ארכיטקטוני",
                      description: "בניית מודל נתונים, תהליכים ואוטומציות. אתם מאשרים את התוכנית לפני כל קו קוד."
                    },
                    {
                      number: "3",
                      title: "פיתוח והטמעה",
                      description: "בניית המערכת, העברת הנתונים הקיימים (Migrating Data) והדרכה מלאה לצוותים."
                    },
                    {
                      number: "4",
                      title: "ליווי והרחבות",
                      description: "אנחנו לא נעלמים. תמיכה שוטפת ושדרוגים עתידיים כדי שהמערכת תצמח יחד עם העסק שלכם."
                    }
                  ].map((step, index) => (
                    <div 
                      key={step.number} 
                      className="flex items-start gap-6 animate-fade-in"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* עיגול עם מספר */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-blue/30 animate-pulse-glow-enhanced">
                        <span className="font-bold text-white text-2xl animate-count" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>{step.number}</span>
                      </div>
                      
                      {/* תוכן */}
                      <div className="flex-1 pt-2">
                        <h3 className="font-bold text-2xl mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              בואו נדבר על איך מערכת CRM יכולה לשדרג את העסק שלכם
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="rounded-full shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              קבע פגישת ייעוץ ↓
            </Button>
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

export default ServiceCRM;
