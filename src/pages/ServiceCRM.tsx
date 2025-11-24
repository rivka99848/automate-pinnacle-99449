import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const [scrollY, setScrollY] = useState(0);
  const [cardProgress, setCardProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Hero Section with Image */}
          <div 
            ref={heroReveal.ref}
            className={`mb-24 transition-all duration-1000 ${
              heroReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden mb-12 group">
                <img 
                  src={crmHeroImage} 
                  alt="CRM System Dashboard"
                  className="w-full h-[400px] object-cover transition-transform duration-100"
                  style={{
                    transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {['מערכת', 'CRM', 'מותאמת', 'אישית:'].map((word, i) => (
                    <span 
                      key={i}
                      className="inline-block animate-fade-in text-gradient"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {word}{' '}
                    </span>
                  ))}
                  <br />
                  {['סדר', 'בעסק,', 'צמיחה', 'בתוצאות'].map((word, i) => (
                    <span 
                      key={i}
                      className="inline-block animate-fade-in text-brand-blue"
                      style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  בניית מערכת ה-CRM שעובדת <strong>בדיוק</strong> בדרך שבה העסק שלך צריך לעבוד.
                  לא עוד פתרונות מדף גנריים - מערכת שנבנית מאפס כדי לשקף את תהליכי העבודה הייחודיים שלכם.
                </p>
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
            <div className="p-12 border border-white/10 rounded-3xl hover:border-brand-blue/30 transition-all">
              <h2 className="text-3xl font-bold mb-12 text-center">הבעיות שהפכו אתכם ללקוחות שלנו</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-destructive mb-6">🔴 הבעיה (המצב הנוכחי)</h3>
                  <ul className="space-y-4 text-foreground/70">
                    <li className="flex items-start gap-3 animate-fade-in delay-100 hover:translate-x-2 transition-transform">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <span><strong>כאוס במידע:</strong> נתונים קריטיים על לקוחות ועסקאות פזורים בין וואטסאפ, אקסל ומיילים, ומובילים להחלטות שגויות.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fade-in delay-200 hover:translate-x-2 transition-transform">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <span><strong>איבוד לקוחות:</strong> קשה לעקוב אחרי ריבוי שיחות, פגישות ומשימות – לקוחות פשוט "נופלים" מהרדאר.</span>
                    </li>
                    <li className="flex items-start gap-3 animate-fade-in delay-300 hover:translate-x-2 transition-transform">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <span><strong>חוסר ודאות:</strong> אין תמונה ברורה על הביצועים, חזוי המכירות ואיפה צוואר הבקבוק נמצא.</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-brand-blue mb-6">✅ הפתרון (התוצאה שלנו)</h3>
                  <ul className="space-y-4 text-foreground/70">
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
              style={{ minHeight: `${modules.length * 400}px` }}
            >
              <h2 className="text-3xl font-bold mb-16 text-center sticky top-20 bg-brand-dark/90 backdrop-blur-xl py-6 z-20 rounded-2xl">
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
                  const opacity = 1 - Math.min(cardOffset * 0.25, 0.4);
                  const translateY = cardOffset * -60;
                  
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
                      <div className={`p-10 border-2 border-white/10 rounded-3xl bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-2xl shadow-2xl hover:shadow-brand-blue/30 hover:scale-[1.02] hover:-translate-y-2 hover:border-brand-blue/50 transition-all duration-500`}>
                        {/* Layout אופקי - אייקון משמאל, תוכן מימין */}
                        <div className="flex items-start gap-8">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-blue/40 to-brand-cyan/40 flex items-center justify-center flex-shrink-0 shadow-lg group-hover/card:rotate-12 group-hover/card:scale-110 transition-all duration-500">
                            <module.icon className="w-11 h-11 text-brand-blue group-hover/card:text-brand-cyan transition-colors duration-500" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 group-hover/card:text-brand-blue transition-colors duration-300">
                              {module.title}
                            </h3>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                              {module.description}
                            </p>
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

          {/* פרויקטים רלוונטיים */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">פרויקטים רלוונטיים</h2>
            <div className="bg-card p-10 rounded-3xl text-center">
              <p className="text-xl text-muted-foreground mb-6">
                בקרוב תוכלו לראות כאן פרויקטי CRM שביצענו ללקוחותינו
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/projects">צפה בכל הפרויקטים</Link>
              </Button>
            </div>
          </div>

          {/* מאמרים רלוונטיים */}
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">מאמרים מומלצים</h2>
            <div className="bg-card p-8 rounded-3xl">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="text-brand-blue text-sm font-semibold mb-2">CRM</div>
                  <h3 className="text-2xl font-bold mb-3">מערכת CRM - המדריך המלא</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    כל מה שצריך לדעת על מערכות CRM וכיצד לבחור את המתאימה לעסק שלכם
                  </p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link to="/blog/crm-guide">קרא עוד</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button asChild variant="ghost" className="rounded-full">
                <Link to="/blog">למאמרים נוספים ←</Link>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 p-12 rounded-3xl border border-brand-blue/20">
            <h2 className="text-3xl font-bold mb-4">מוכנים להתחיל?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              בואו נדבר על איך מערכת CRM יכולה לשדרג את העסק שלכם
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">קבע פגישת ייעוץ</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCRM;
