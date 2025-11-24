import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, RefreshCw, LinkIcon, FileText, Mail, TrendingUp } from "lucide-react";
import automationHeroImage from "@/assets/hero-automation-future.jpg";

const ServiceAutomation = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero Section with Image */}
          <div className="mb-24 animate-fade-in-up">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden mb-12">
                <img 
                  src={automationHeroImage} 
                  alt="Business Automation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">אוטומציות עסקיות חכמות</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  אוטומציה חכמה של תהליכים עסקיים שחוסכת עד 70% מהזמן וממזערת טעויות אנוש. 
                  המערכת מטפלת בכל המשימות החוזרות במקומך - אתם פשוט תהנו מהתוצאות.
                </p>
              </div>
            </div>
          </div>

          {/* למה אוטומציה? */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              {/* כותרת מימין - sticky */}
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  למה אוטומציה <span className="text-brand-purple">משנה את המשחק?</span>
                </h2>
              </div>
              
              {/* תוכן משמאל */}
              <div className="space-y-10">
                <div className="h-px bg-gradient-to-l from-brand-purple/50 via-brand-blue/30 to-transparent" />
                
                {/* המציאות המוכרת */}
                <div>
                  <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
                    🔴 המציאות המוכרת
                  </h3>
                  <div className="space-y-4">
                    <div className="border-r-4 border-red-500/50 pr-6">
                      <p className="text-foreground/70">משימות חוזרות שגוזלות שעות כל יום</p>
                    </div>
                    <div className="border-r-4 border-red-500/50 pr-6">
                      <p className="text-foreground/70">העתקת מידע בין מערכות שונות ידנית</p>
                    </div>
                    <div className="border-r-4 border-red-500/50 pr-6">
                      <p className="text-foreground/70">טעויות אנוש שעולות כסף</p>
                    </div>
                    <div className="border-r-4 border-red-500/50 pr-6">
                      <p className="text-foreground/70">דברים שנופלים בין הכיסאות</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-l from-brand-purple/50 via-brand-cyan/30 to-transparent" />
                
                {/* החיים עם אוטומציה */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-purple mb-6 flex items-center gap-2">
                    ✅ החיים עם אוטומציה
                  </h3>
                  <div className="space-y-4">
                    <div className="border-r-4 border-brand-purple/50 pr-6">
                      <p className="text-foreground/70">חיסכון של עד 70% בזמן ביצוע משימות</p>
                    </div>
                    <div className="border-r-4 border-brand-purple/50 pr-6">
                      <p className="text-foreground/70">הכול עובד אוטומטית, ללא מעורבות שלכם</p>
                    </div>
                    <div className="border-r-4 border-brand-purple/50 pr-6">
                      <p className="text-foreground/70">דיוק מלא - אפס טעויות</p>
                    </div>
                    <div className="border-r-4 border-brand-purple/50 pr-6">
                      <p className="text-foreground/70">שום דבר לא יפול - הכול מתועד</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* סוגי אוטומציות */}
          <div className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-16 text-center">מה אפשר לעשות עם אוטומציה?</h2>
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in-scale">
              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-purple/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <RefreshCw className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">אוטומציה של תהליכי עבודה</h3>
                <p className="text-muted-foreground mb-4">
                  מקבלים פנייה? המערכת יוצרת תיקייה, שולחת מייל, מעדכנת בטבלה ומזכירה לכם במועד הנכון.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  דוגמה: קבלת פנייה → פתיחת תיקייה → שליחת מייל אישור → יצירת משימה
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <LinkIcon className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">חיבור בין מערכות</h3>
                <p className="text-muted-foreground mb-4">
                  מחברים מערכות שלא מדברות אחת עם השנייה - Google Sheets, CRM, WhatsApp, מייל ועוד.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  דוגמה: עדכון ב-CRM → שליחת הודעת WhatsApp → עדכון בטבלת Excel
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">יצירת דוחות אוטומטיים</h3>
                <p className="text-muted-foreground mb-4">
                  בסוף כל שבוע/חודש המערכת יוצרת דוח מפורט ושולחת אותו למייל - ללא מאמץ מצדכם.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  דוגמה: איסוף נתונים → יצירת דוח PDF → שליחה למייל בזמן קבוע
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">ניהול תקשורת</h3>
                <p className="text-muted-foreground mb-4">
                  שליחת מיילים, הודעות, תזכורות והתראות אוטומטיות - בזמן הנכון, לאנשים הנכונים.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  דוגמה: יום לפני פגישה → שליחת תזכורת למייל ו-SMS
                </p>
              </div>
            </div>
          </div>

          {/* דוגמאות שימוש */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">דוגמאות מהחיים</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">עסק רפואי</h3>
                <p className="text-muted-foreground">
                  פנייה חדשה → תיקייה ב-Drive → מייל ללקוח → משימה ביומן → התראות למנהלים
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">חנות אונליין</h3>
                <p className="text-muted-foreground">
                  הזמנה חדשה → עדכון מלאי → שליחת אישור ללקוח → יצירת משלוח → עדכון בחשבונאות
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
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

          {/* איך זה עובד */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              {/* כותרת מימין - sticky */}
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  איך זה <span className="text-brand-purple">עובד?</span>
                </h2>
              </div>
              
              {/* תוכן משמאל */}
              <div className="space-y-8">
                {[
                  {
                    number: "1",
                    title: "מיפוי התהליכים",
                    description: "מבינים איך העסק עובד היום, איפה הבעיות ומה צריך לשפר"
                  },
                  {
                    number: "2",
                    title: "תכנון האוטומציה",
                    description: "מתכננים את התהליך האוטומטי - מה קורה בכל שלב, מה הטריגרים ומה התוצאות"
                  },
                  {
                    number: "3",
                    title: "בניה והטמעה",
                    description: "בונים את האוטומציה, מחברים את המערכות ובודקים שהכול עובד מעולה"
                  },
                  {
                    number: "4",
                    title: "ניטור ושיפור",
                    description: "עוקבים אחרי הביצועים, משפרים ומוסיפים אוטומציות נוספות לפי הצורך"
                  }
                ].map((step, index) => (
                  <div key={step.number} className="border-r-4 border-brand-purple/50 pr-6">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <span className="bg-brand-purple/20 px-3 py-1 rounded-lg text-brand-purple">{step.number}</span>
                      {step.title}
                    </h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* פרויקט רלוונטי */}
          <div className="max-w-5xl mx-auto mb-20">
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
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 p-12 rounded-3xl border border-brand-purple/20">
            <h2 className="text-3xl font-bold mb-4">בואו נבנה אוטומציה לעסק שלכם</h2>
            <p className="text-xl text-muted-foreground mb-8">
              נשמח להראות לכם איך אוטומציה יכולה לחסוך לכם שעות כל יום
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">בואו נתחיל</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceAutomation;
