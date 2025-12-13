import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, LineChart, Calendar, Mail, Shield, AlertCircle, CheckCircle, Target, Wrench, BookOpen, Handshake, Lightbulb } from "lucide-react";
import crmHeroImage from "@/assets/crm-hero.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projectsData } from "@/data/projectsData";
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
      icon: Database,
      title: "ריכוז וסדר",
      description: "כל פרטי הלקוחות מרוכזים בצורה מסודרת. כל הנתונים החשובים יהיו ברורים ונגישים מול העיניים – בלי חוסר מעקב, בלי בלגן, ובלי בזבוז זמן."
    },
    {
      icon: Users,
      title: "מעקב מדויק",
      description: "אתם יודעים בדיוק איפה כל לקוח נמצא בתהליך (התעניין? קנה? צריך חידוש?)."
    },
    {
      icon: Mail,
      title: "שמירה על קשר אישי",
      description: "אתם יכולים לשמור על קשר אישי בלי לזכור הכול בראש."
    },
    {
      icon: LineChart,
      title: "שליטה מלאה והשקעה חכמה",
      description: "המצב של העסק שלכם פרוס לכם כמו מפה ברורה. אתם יודעים מאיפה הגיע כל ליד בקלות, וכך יודעים איפה כדאי לכם להשקיע."
    },
    {
      icon: Calendar,
      title: "דאשבורד (לוח מחוונים) כוללני",
      description: "המערכת מציגה נתונים חשובים על מצב העסק. לדוגמה, אחוז המרה מליד ללקוח, וגרפים של הכנסות לפי חודש או שנה."
    },
    {
      icon: Shield,
      title: "חיסכון בעלויות וסדר מנהלי",
      description: "המערכת חוסכת לכם לא רק עלויות, אלא גם כאב ראש. היא יכולה לחסוך לכם מזכירה במיקור חוץ או פנים, כיוון שהיא שולחת חשבוניות וקבלות."
    },
    {
      icon: Handshake,
      title: "אפשרות לתמיכה חודשית",
      description: "רוצים שקט נפשי? אפשרות לחבילת תמיכה חודשית הכוללת תחזוקה, עדכונים ומענה שוטף לכל שאלה או בעיה שתתעורר."
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
                  <span className="text-white">מערכת</span> <span className="text-brand-blue">CRM</span>
                </h1>
                
                <div className="max-w-4xl mx-auto space-y-6 text-xl md:text-2xl text-foreground/80 leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
                  מהו CRM (ניהול קשרי לקוחות) ומה הוא נותן לנו?
                </h2>
                  
                  <p>
                    <strong>CRM (Customer Relationship Management)</strong>, או בעברית: ניהול קשרי לקוחות, הוא כלי מרכזי לניהול כל הקשרים עם הלקוחות שלכם במקום אחד.
                  </p>
                  
                  <p>
                    מערכת CRM שאני בונה מעניקה לכם כלים מדויקים לניהול העסק שלכם בצורה פשוטה, נוחה וחכמה יותר.
                  </p>
                  
                  
                  <p className="text-2xl font-bold text-brand-blue mt-8">
                    המערכת עוזרת לכם להחזיר את השליטה והסדר לעסק שלכם.
                  </p>
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      size="lg" 
                      onClick={() => {
                        document.getElementById('contact-form')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                      className="rounded-full bg-brand-blue hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 animate-fade-in"
                    >
                      קבעו פגישת ייעוץ ↓
                    </Button>
                  </div>
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

          {/* הופכים את הניהול לפשוט וחכם */}
          <div 
            ref={problemsReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 delay-200 ${
              problemsReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* כותרת ממורכזת */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 flex items-center justify-center gap-3">
                <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-brand-blue" strokeWidth={1.5} />
                הופכים את הניהול ל
                <span className="text-brand-blue">פשוט וחכם</span>
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                השירות שלנו נועד לתת מענה מדויק לנקודות התורפה שמכבידות על עסקים בצמיחה. 
                אנו משנים את הדרך שבה המידע זורם בעסק, ומאפשרים לכם להתמקד בלקוחות ובמכירות.
              </p>
            </div>
            
            {/* שני ריבועים ממורכזים */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* ריבוע ימני - תכלת - האתגרים */}
              <div className="bg-brand-blue rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  🛑 האתגרים שאנו פותרים עבורך
                </h3>
                <p className="text-white/90 mb-6">
                  רוב העסקים מגיעים אלינו כשהם מתמודדים עם תהליכים לא יעילים:
                </p>
                <div className="space-y-5">
                  <div className="border-r-4 border-white/30 pr-4">
                    <h4 className="text-lg font-bold text-white mb-1">פיזור מידע מתיש:</h4>
                    <p className="text-white/80 text-sm">
                      נתונים חשובים מפוזרים בין מייל, אקסל ווואטסאפ.
                    </p>
                  </div>
                  <div className="border-r-4 border-white/30 pr-4">
                    <h4 className="text-lg font-bold text-white mb-1">איבוד לידים ועסקאות:</h4>
                    <p className="text-white/80 text-sm">
                      קשה לעקוב אחרי כל משימה ולקוח פוטנציאלי.
                    </p>
                  </div>
                  <div className="border-r-4 border-white/30 pr-4">
                    <h4 className="text-lg font-bold text-white mb-1">תמונת ביצועים מעורפלת:</h4>
                    <p className="text-white/80 text-sm">
                      אין ודאות על ביצועי הצוות וחזוי המכירות.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* ריבוע שמאלי - לבן - הפתרונות */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                  ✅ הדרך החדשה לניהול העסק
                </h3>
                <p className="text-gray-700 mb-6">
                  השירות שלנו מסדר את העסק שלך ומוביל לשליטה מוחלטת:
                </p>
                <div className="space-y-5">
                  <div className="border-r-4 border-brand-blue/30 pr-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">שליטה מלאה וריכוז נתונים:</h4>
                    <p className="text-gray-700 text-sm">
                      כל המידע במקום אחד - מאורגן, מתויג ומאובטח.
                    </p>
                  </div>
                  <div className="border-r-4 border-brand-blue/30 pr-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">מנגנוני מעקב אוטומטיים:</h4>
                    <p className="text-gray-700 text-sm">
                      תזכורות וניהול משימות חכם - אף לקוח לא "נופל".
                    </p>
                  </div>
                  <div className="border-r-4 border-brand-blue/30 pr-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">תובנות ניהוליות בזמן אמת:</h4>
                    <p className="text-gray-700 text-sm">
                      דשבורד אינטואיטיבי עם נתונים חיים לקבלת החלטות.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* תכונות מפורטות - Stacked Cards */}
          <div 
            ref={featuresReveal.ref}
            className={`max-w-6xl mx-auto mb-24 transition-all duration-1000 ${
              featuresReveal.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              {/* כותרת מימין - sticky */}
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  מה המערכת <span className="text-brand-blue">נותנת לכם</span>
                </h2>
              </div>
              
              {/* כרטיסיות משמאל */}
              <div 
                ref={containerRef}
                className="relative"
                style={{ minHeight: `${modules.length * 280}px` }}
              >
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

                <div className="relative">
                  {modules.map((module, index) => {
                    const cardOffset = Math.max(0, cardProgress - index * 0.35);
                    const scale = 1 - Math.min(cardOffset * 0.08, 0.12);
                    const opacity = 1;
                    const translateY = cardOffset * -60;
                    
                    // ✨ זיהוי סוג הכרטיס - זוגי = לבן, אי-זוגי = כחול
                    const isWhiteCard = index % 2 === 0;
                    
                    const gradients = [
                      'from-brand-blue/20 to-brand-cyan/10',
                      'from-brand-cyan/20 to-brand-blue/10',
                      'from-brand-blue/20 to-brand-cyan/10',
                      'from-brand-blue/15 to-brand-cyan/15',
                      'from-brand-cyan/15 to-brand-blue/15',
                      'from-brand-blue/15 to-brand-cyan/15'
                    ];

                    return (
                      <div
                        key={index}
                        className="group/card sticky transition-all duration-300 ease-out"
                        style={{
                          top: '150px',
                          transform: `scale(${scale}) translateY(${translateY}px)`,
                          opacity: opacity,
                          zIndex: index + 1
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
          </div>

          {/* תהליך העבודה - עם רקע לבן */}
          <div className="bg-white py-16 md:py-24 -mx-4 px-4">
            <div 
              ref={processReveal.ref}
              className={`max-w-6xl mx-auto mb-8 transition-all duration-1000 delay-200 ${
                processReveal.isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                
                {/* כותרת מימין - sticky */}
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#121F37]">
                    תהליך העבודה <span className="text-brand-blue">איתנו</span>
                  </h2>
                  <p className="text-xl text-gray-600 mt-4">
                    אנו מלווים אותך בתהליך ממוקד וברור, המבטיח שמערכת הניהול תותאם באופן מושלם לצרכים שלך ותעבוד ביעילות מרבית מהיום הראשון.
                  </p>
                </div>
                
                {/* תוכן משמאל */}
                <div className="space-y-10">
                  
                  {/* שלב 1 */}
                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <Target className="w-6 h-6 text-gray-500 animate-fade-in hover:text-brand-blue hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.1s" }} />
                      צלילה לעומק הצרכים והאסטרטגיה
                    </h3>
                    <p className="text-gray-600">
                      אנו מתחילים בהקשבה מעמיקה וירידה לשטח. בפגישה מקיפה, אנו מכירים לעומק את צורת העבודה, 
                      הדפוסים הניהוליים והכשלים הקיימים בעסק שלך. המטרה היא להבין את הצרכים המדויקים, 
                      כדי שנוכל להתאים את המערכת אליך – ולא להיפך.
                    </p>
                  </div>
                  
                  {/* שלב 2 */}
                  <div className="border-r-4 border-brand-cyan/50 pr-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <Wrench className="w-6 h-6 text-gray-500 animate-fade-in hover:text-brand-blue hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.2s" }} />
                      בניית המערכת והתאמתה
                    </h3>
                    <p className="text-gray-600 mb-3">
                      לאחר שהבנו את הצרכים, אנו מתרגמים אותם למבנה דיגיטלי:
                    </p>
                    <ul className="space-y-2 text-gray-600 mr-4">
                      <li>• תכנון מבנה אסטרטגי והקמת המערכת בהתאם לתהליכי העבודה שלך.</li>
                      <li>• הטמעת אוטומציות חכמות (תזכורות, מעקבים) לחיסכון בזמן.</li>
                      <li>• הקמה של דשבורד מנהלים אינטואיטיבי שמציג נתונים בזמן אמת.</li>
                    </ul>
                    <p className="text-gray-600 mt-3">התוצאה היא מערכת מדויקת ומוכנה לפעולה.</p>
                  </div>
                  
                  {/* שלב 3 */}
                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-gray-500 animate-fade-in hover:text-brand-blue hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.3s" }} />
                      הטמעה, הדרכה וספריית ידע
                    </h3>
                    <p className="text-gray-600 mb-3">כדי להבטיח שימוש מוצלח, אנו מבצעים:</p>
                    <ul className="space-y-2 text-gray-600 mr-4">
                      <li>• הטמעה מדורגת וחלקה במעבר למערכת.</li>
                      <li>• הדרכות מותאמות אישית לצוותים השונים, תוך התמקדות בתפקיד כל משתמש.</li>
                      <li>• ספריית סרטוני הדרכה זמינה לשימוש תמידי, להכשרת עובדים חדשים ולרענון ידע.</li>
                    </ul>
                    <p className="text-gray-600 mt-3">שלב זה מוודא שכל משתמש מרגיש בטוח לעבוד עם הפתרון החדש.</p>
                  </div>
                  
                  {/* שלב 4 */}
                  <div className="border-r-4 border-brand-blue/50 pr-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <Handshake className="w-6 h-6 text-gray-500 animate-fade-in hover:text-brand-blue hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.4s" }} />
                      אחריות, תמיכה וליווי מתמשך
                    </h3>
                    <p className="text-gray-600 mb-3">אנו דואגים להצלחה שלך גם לאחר ההשקה:</p>
                    <ul className="space-y-2 text-gray-600 mr-4">
                      <li>• אחריות מלאה לחודש הראשון לטיפול ותיקון כל כיוונון נדרש.</li>
                      <li>• אפשרות לליווי חודשי צמוד (אופציונלי) – לתמיכה מתקדמת, שיפור מתמיד והתאמות בהתאם לצורכי העסק המשתנים.</li>
                    </ul>
                  </div>
                  
                  <div className="h-px bg-gradient-to-l from-brand-blue/30 via-brand-blue/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section - After Process */}
          <section className="py-16 md:py-24 -mx-4 px-4 bg-[#E8EAED]">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-end">
                {[
                  {
                    stat: "50k",
                    height: "h-40 md:h-56",
                    text: "עסקים שמשתמשים במערכת CRM מנהלים בממוצע 50K לקוחות ויותר בצורה מסודרת ויעילה"
                  },
                  {
                    stat: "3m",
                    height: "h-48 md:h-64",
                    text: "עסקים מדווחים על שיפור בפרודוקטיביות תוך 3-6 חודשים מהטמעת מערכת CRM."
                  },
                  {
                    stat: "6.5H",
                    height: "h-56 md:h-80",
                    text: "מערכת CRM יכולה לחסוך עד 6.5 שעות בשבוע לכל נציג מכירות, זה כמעט יום עבודה שלם שנחסך."
                  },
                  {
                    stat: "75%",
                    height: "h-40 md:h-56",
                    text: "מהעסקים שמטמיעים מערכת CRM מדווחים על שיפור משמעותי במערכות היחסים עם הלקוחות"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative w-full">
                      {/* Card with stat inside */}
                      <div className={`w-full ${item.height} bg-[#121F37] rounded-2xl flex items-start justify-center pt-4 md:pt-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                        {/* Stat text inside card */}
                        <span className="text-3xl md:text-5xl font-bold text-white z-10">{item.stat}</span>
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    {/* Text below */}
                    <p className="text-center text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Projects Section */}
          {projectsData.filter(p => p.serviceTypes.includes("crm")).length > 0 && (
            <section className="py-12 md:py-16 -mx-4 px-4 bg-gray-50">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                  פרויקטים בתחום
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {projectsData
                    .filter(p => p.serviceTypes.includes("crm"))
                    .map((project, index) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.slug}`}
                        className="group animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={project.images[0]}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-3 md:p-4">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-brand-blue transition-colors duration-300 line-clamp-1">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              בואו נדבר על איך מערכת CRM יכולה לשדרג את העסק שלכם
            </p>
          </div>

          {/* Contact Form Section */}
          <div id="contact-form" className="scroll-mt-20">
            <ContactFormSection buttonColor="blue" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceCRM;
