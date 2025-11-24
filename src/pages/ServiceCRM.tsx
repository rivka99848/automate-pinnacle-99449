import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, LineChart, Calendar, Mail, Shield, AlertCircle, CheckCircle } from "lucide-react";
import crmHeroImage from "@/assets/crm-hero.jpg";

const ServiceCRM = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section with Image */}
          <div className="mb-24 animate-fade-in-up">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden mb-12 group">
                <img 
                  src={crmHeroImage} 
                  alt="CRM System Dashboard"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
              <div className="text-center animate-fade-in delay-200">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">מערכת CRM מותאמת אישית:</span>
                  <br />
                  <span className="text-brand-blue">סדר בעסק, צמיחה בתוצאות</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  בניית מערכת ה-CRM שעובדת <strong>בדיוק</strong> בדרך שבה העסק שלך צריך לעבוד.
                  לא עוד פתרונות מדף גנריים - מערכת שנבנית מאפס כדי לשקף את תהליכי העבודה הייחודיים שלכם.
                </p>
              </div>
            </div>
          </div>

          {/* למה CRM? */}
          <div className="max-w-5xl mx-auto mb-24">
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

          {/* תכונות מפורטות */}
          <div className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-16 text-center">המודולים שישנו את צורת העבודה שלכם</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 animate-fade-in">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Users className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">ניהול לקוחות 360°</h3>
                <p className="text-foreground/70">
                  כרטיס לקוח מקיף המציג את כל ההיסטוריה – שיחות, פגישות, מסמכים והצעות מחיר. 
                  <strong> רואים את האדם, לא רק את הנתונים.</strong>
                </p>
              </div>

              <div className="group p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 animate-fade-in delay-100">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <LineChart className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">מעקב עסקאות גמיש (Pipeline)</h3>
                <p className="text-foreground/70">
                  בנה את שלבי המכירה שלך כפי שאתה מכיר אותם. דע בדיוק מה הסטטוס של כל עסקה ומהו הצעד הבא.
                </p>
              </div>

              <div className="group p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 animate-fade-in delay-200">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">סנכרון מלא ואוטומטי</h3>
                <p className="text-foreground/70">
                  חיבור חלק ל-Gmail, לוח שנה וכלים נוספים שאתם כבר משתמשים בהם. 
                  <strong> המידע פשוט זורם למערכת, ללא התערבות ידנית.</strong>
                </p>
              </div>

              <div className="group p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 animate-fade-in delay-300">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Database className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">דשבורד ותחזיות</h3>
                <p className="text-foreground/70">
                  גרפים, דוחות ומדדים מותאמים אישית. לא רק נתונים, אלא 
                  <strong> יכולת לחזות הכנסות ולקבל החלטות אסטרטגיות.</strong>
                </p>
              </div>

              <div className="group p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 animate-fade-in delay-400">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Calendar className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">מנגנון הרשאות מתוחכם</h3>
                <p className="text-foreground/70">
                  שליטה מלאה על הגישה למידע הרגיש. רק מי שצריך לראות – רואה.
                </p>
              </div>

              <div className="group p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300 animate-fade-in delay-500">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">אבטחה וגיבויים</h3>
                <p className="text-foreground/70">
                  הצפנה מלאה, גיבויים אוטומטיים ויומן שינויים. המידע שלכם מוגן ומאובטח תמיד.
                </p>
              </div>
            </div>
          </div>

          {/* איך זה עובד */}
          <div className="max-w-5xl mx-auto mb-24">
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
                    className={`flex items-start gap-6 animate-fade-in delay-${(index + 1) * 100}`}
                  >
                    {/* עיגול עם מספר */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-blue/30 animate-pulse-glow">
                      <span className="font-bold text-white text-2xl">{step.number}</span>
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
