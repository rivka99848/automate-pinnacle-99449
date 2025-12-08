import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, DollarSign, Lightbulb, TrendingUp, Clock, Target, Eye, Database, Bot, Zap } from "lucide-react";
import FloatingIcon from "@/components/FloatingIcon";
import StarburstIcon from "@/components/StarburstIcon";
import DecorativeLine from "@/components/DecorativeLine";
import Testimonials from "@/components/Testimonials";
import LogoMarquee from "@/components/LogoMarquee";
import ServiceCard from "@/components/ServiceCard";
import ContactFormSection from "@/components/ContactFormSection";

import projectVacationBot from "@/assets/bot-website-widget.jpg";
import projectMedicalAutomation from "@/assets/automation-process.jpg";
import heroBusinessGrowth from "@/assets/hero-business-growth.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-darker" />
        
        {/* Floating Icons */}
        <FloatingIcon icon={Sparkles} className="top-20 left-1/4 animate-float-drift" color="brand-blue" strokeWidth={1.5} />
        <FloatingIcon icon={DollarSign} className="bottom-36 right-[20%] animate-float-sway" color="secondary" strokeWidth={1.5} />
        <FloatingIcon icon={Lightbulb} className="top-32 right-1/3 animate-float-bounce" color="brand-cyan" strokeWidth={1.5} />
        <FloatingIcon icon={Zap} className="bottom-28 left-[15%] animate-float-orbital" color="brand-coral" strokeWidth={1.5} />
        
        {/* Decorative Lines */}
        <DecorativeLine className="top-0 left-0 w-96 h-96 opacity-40" color="hsl(var(--secondary))" />
        <DecorativeLine className="bottom-0 right-0 w-80 h-80 opacity-30 rotate-180" color="hsl(var(--brand-cyan))" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
              <span className="inline-block animate-fade-in delay-100">למה להישאר מאחור</span>{" "}
              <span className="inline-block animate-fade-in delay-300">כשהעסק שלכם</span>{" "}
              <span className="text-secondary inline-block animate-fade-in delay-500 animate-pulse">
                יכול לרוץ קדימה
              </span>
            </h1>
          </div>
        </div>

      </section>

      {/* How Automation Changes the Game */}
      <section className="py-12 bg-brand-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in delay-100">
              <span className="inline-block animate-fade-in delay-200">איך</span>{" "}
              <span className="text-gradient inline-block animate-scale-in delay-400">אוטומציה חכמה</span>{" "}
              <span className="inline-block animate-fade-in delay-600">משנה את כללי המשחק</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-800">
              ברגע שתבינו איך אוטומציה וניהול חכם יכולים לשנות את כללי המשחק, לא תבינו איך עבדתם אחרת. 
              למה לבזבז זמן וכסף על משימות ידניות, כשאפשר לתת למערכת לעבוד בשבילכם – ולפנות לכם זמן 
              לדברים שבאמת מקדמים את העסק?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-blue/10 backdrop-blur-sm p-8 rounded-3xl hover-lift border border-brand-blue/20 animate-fade-in-scale delay-100">
              <Clock className="w-12 h-12 text-brand-blue mb-4 hover-rotate" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-200">חסכון בזמן</h3>
              <p className="text-muted-foreground">
                יכולות האוטומציה של המערכת יחסכו זמן יקר כך שבקלות תוכלו לקבל בהירות ושליטה 
                על תהליכים מורכבים
              </p>
            </div>

            <div className="bg-secondary/10 backdrop-blur-sm p-8 rounded-3xl hover-lift border border-secondary/20 animate-fade-in-scale delay-300">
              <Target className="w-12 h-12 text-secondary mb-4 hover-rotate" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-400">דיוק ומקצועיות</h3>
              <p className="text-muted-foreground">
                פתרונות מותאמים אישית המבטיחים תוצאות מדויקות ושיפור מתמיד בתהליכי העבודה
              </p>
            </div>

            <div className="bg-brand-cyan/10 backdrop-blur-sm p-8 rounded-3xl hover-lift border border-brand-cyan/20 animate-fade-in-scale delay-500">
              <TrendingUp className="w-12 h-12 text-brand-cyan mb-4 hover-rotate" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 animate-fade-in delay-600">צמיחה מתמשכת</h3>
              <p className="text-muted-foreground">
                כלים מתקדמים שידחפו את העסק קדימה ויאפשרו לכם להתמקד במה שחשוב באמת
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - נעים להכיר */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* כותרת קטנה */}
            <h3 className="text-2xl md:text-3xl font-light tracking-wide text-gray-700 animate-fade-in delay-100">נעים להכיר</h3>
            
            {/* כותרת ראשית גדולה */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark animate-fade-in-up delay-300">
              <span className="inline-block animate-scale-in delay-400">רבקה</span>{" "}
              <span className="inline-block animate-fade-in delay-500">בעלת עסק</span>{" "}
              <span className="text-brand-blue font-fredoka inline-block animate-pulse delay-700">Smartbiz</span>
            </h1>
            
            {/* כל הטקסט ממורכז */}
            <div className="space-y-0 text-lg md:text-xl leading-tight max-w-4xl mx-auto text-gray-800">
              <p>
                מרצה בתחום האוטומציה ומתמחה בבניית מעטפות ניהול חכמות לעסקים.
              </p>
              
              <p>
                אני מלווה בעלי ובעלות עסקים בבנייה של מערכות ניהול מדויקות שמותאמות לצרכים שלהם –
                מערכות שמביאות איתן פתרונות אוטומציה חכמים, כמו צ'אטבוטים, טפסים דיגיטליים, יומנים, 
                דיווחים חכמים וכלים נוספים – כאלה שיזיזו את העסק קדימה, יכניסו בו שליטה, סדר וחופש אמיתי.
              </p>
              
              <p className="text-xl md:text-2xl leading-tight">
                אחרי עבודה עם עשרות לקוחות מעולמות שונים,
              </p>
              
              <p className="text-brand-blue font-semibold text-xl md:text-2xl leading-tight animate-fade-in-scale delay-800">
                גיליתי שהבעיה הכי עמוקה שחוזרת על עצמה היא התחושה הזו של בלגן תמידי:
              </p>
              
              <p>
                חוסר שקט, רשימות מפוזרות, זמן שמתבזבז על ניהול משימות ופרויקטים, חוסר שליטה בכסף,
                כאב ראש יומיומי וחוסר בהירות אמיתית לגבי מצב העסק.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-cyan/5 p-8 rounded-3xl hover-lift border border-brand-blue/30 backdrop-blur-sm animate-fade-in-scale delay-100">
                <Target className="w-12 h-12 text-brand-blue mb-6 hover-rotate" strokeWidth={1.5} />
                <h2 className="text-3xl font-semibold mb-4 text-brand-dark animate-fade-in delay-200">המשימה שלנו</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  אנחנו מאמינים שכל עסק ראוי לכלים הטכנולוגיים הטובים ביותר, לא משנה מה הגודל שלו. 
                  המשימה שלנו היא להנגיש טכנולוגיות אוטומציה מתקדמות לכל עסק, ולעזור לבעלי עסקים 
                  להתמקד במה שהם עושים הכי טוב - להוביל את העסק שלהם קדימה.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-brand-purple/5 p-8 rounded-3xl hover-lift border border-secondary/30 backdrop-blur-sm animate-fade-in-scale delay-300">
                <Eye className="w-12 h-12 text-secondary mb-6 hover-rotate" strokeWidth={1.5} />
                <h2 className="text-3xl font-semibold mb-4 text-brand-dark animate-fade-in delay-400">החזון שלנו</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  אנחנו שואפים ליצור עתיד שבו כל עסק פועל בצורה חכמה, אוטומטית ויעילה. עתיד שבו 
                  טכנולוגיה משחררת את האנשים לעסוק ביצירתיות, בחדשנות ובבניית קשרים אמיתיים עם 
                  הלקוחות. אנחנו לא רק מספקים כלים - אנחנו שותפים להצלחה של העסק שלכם.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - White Background */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark animate-fade-in-up">
              <Lightbulb className="inline-block w-10 h-10 md:w-12 md:h-12 text-brand-blue animate-fade-in delay-100" strokeWidth={1.5} />{" "}
              <span className="text-brand-dark inline-block animate-fade-in delay-200">מה אנחנו</span>{" "}
              <span className="text-brand-blue inline-block animate-scale-in delay-400">עושים</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            <div className="animate-fade-in-scale delay-100 h-full">
              <ServiceCard
                number="01"
                icon={Database}
                title="מערכת CRM"
                description="בניית מערכות CRM מותאמות אישית שמסדרות את כל המידע על הלקוחות, העסקאות והתהליכים במקום אחד. מערכת שעובדת בדיוק איך שאתם צריכים."
                colorClass="border-brand-blue"
                gradientClass="from-brand-blue/5 to-brand-cyan/5"
                links={[
                  { text: "לפרטים נוספים", url: "/services/crm" }
                ]}
              />
            </div>

            <div className="animate-fade-in-scale delay-300 h-full">
              <ServiceCard
                number="02"
                icon={Bot}
                title="בוטים חכמים"
                description="מענה אוטומטי ללקוחות, קבלת הזמנות ושאילתות, אינטגרציה עם מערכות קיימות, ודוחות על כל השיחות. הבוטים שלנו עובדים 24/7 ומספקים חוויה מעולה ללקוחות."
                colorClass="border-brand-green"
                gradientClass="from-brand-green/5 to-brand-cyan/5"
                links={[
                  { text: "לפרטים נוספים", url: "/services/bots" }
                ]}
              />
            </div>

            <div className="animate-fade-in-scale delay-500 h-full">
              <ServiceCard
                number="03"
                icon={Zap}
                title="אוטומציות"
                description="אוטומציה חכמה של תהליכים עסקיים שחוסכת זמן וממזערת טעויות אנוש. המערכת מטפלת בכל המשימות החוזרות במקומך."
                features={[
                  "אוטומציה של תהליכי עבודה מורכבים",
                  "חיבור בין מערכות שונות",
                  "חסכון של עד 70% בזמן ביצוע משימות",
                  "ניטור וביצוע אוטומטי של משימות"
                ]}
                examples="שליחת דוא״ל אוטומטית, עדכון מלאי, יצירת דוחות"
                colorClass="border-brand-purple"
                gradientClass="from-brand-purple/5 to-brand-blue/5"
                links={[
                  { text: "לפרטים נוספים", url: "/services/automation" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Dark Background */}
      <section className="py-24 bg-brand-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="text-gradient inline-block animate-scale-in delay-200">מקרי הצלחה</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in delay-400">
              פרויקטים שעשו את ההבדל
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Project 1 */}
            <div className="bg-card rounded-3xl overflow-hidden hover-lift shadow-elegant border border-brand-cyan/10 animate-fade-in-scale delay-200 group">
              <div className="overflow-hidden">
                <img
                  src={projectVacationBot}
                  alt="Vacation Bot - ניהול פניות אוטומטי"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  🏝 ניהול פניות אוטומטי לרשת נופש יוקרתית
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  כששאלות כמו 'יש דיל?', 'פנוי בסופ"ש?' ו'מה המחיר?' לא הפסיקו להגיע – מנהל רשת ניחותא מצא את עצמו קבור בהתכתבויות. הפתרון? בוט חכם עם סוכן AI שמנהל את כל התקשורת עם הלקוחות – מהבירור ועד לסגירה.
                </p>
                <Button asChild variant="secondary" className="w-full rounded-full font-semibold transition-all">
                  <Link to="/projects/nichuta-vacation-bot">להמשך קריאה</Link>
                </Button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card rounded-3xl overflow-hidden hover-lift shadow-elegant border border-secondary/10 animate-fade-in-scale delay-400 group">
              <div className="overflow-hidden">
                <img
                  src={projectMedicalAutomation}
                  alt="Medical Automation - אוטומציה לעסק רפואי"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  💼 אוטומציה מלאה לעסק רפואי עמוס בפניות
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  בעל עסק רפואי טובע בפניות, מיילים ומסמכים? גם הלקוח שלנו היה שם – עד שהמערכת שבנינו עשתה מהפכה. טופס חכם, תיקיות אוטומטיות, ניהול משימות והתראות – הכול רץ לבד.
                </p>
                <Button asChild variant="secondary" className="w-full rounded-full font-semibold transition-all">
                  <Link to="/projects/medical-automation">להמשך קריאה</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
              <Link to="/projects">לכל הפרויקטים</Link>
            </Button>
          </div>

        </div>
      </section>

      <Testimonials />
      <LogoMarquee />

      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;
