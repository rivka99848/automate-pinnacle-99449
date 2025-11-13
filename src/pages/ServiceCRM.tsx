import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Users, LineChart, Calendar, Mail, Shield } from "lucide-react";
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
              <div className="relative rounded-3xl overflow-hidden mb-12">
                <img 
                  src={crmHeroImage} 
                  alt="CRM System"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">מערכת CRM מותאמת אישית</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  בניית מערכות CRM מותאמות אישית שמסדרות את כל המידע על הלקוחות, העסקאות והתהליכים במקום אחד. 
                  מערכת שעובדת בדיוק איך שאתם צריכים - ללא פשרות.
                </p>
              </div>
            </div>
          </div>

          {/* למה CRM? */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="p-12 border border-white/10 rounded-3xl hover:border-brand-blue/30 transition-all">
              <h2 className="text-3xl font-bold mb-12 text-center">למה אתם צריכים מערכת CRM?</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-destructive">🔴 הבעיות שאתם מכירים:</h3>
                  <ul className="space-y-4 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>מידע על לקוחות מפוזר בין אקסל, וואטסאפ ודוא"ל</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>קשה לעקוב אחרי כל השיחות והעסקאות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>לקוחות נופלים בין הכיסאות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>אין תמונה ברורה על מצב העסק</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-brand-blue">✅ הפתרון:</h3>
                  <ul className="space-y-4 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>כל המידע במקום אחד, נגיש ומסודר</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>מעקב אוטומטי אחרי כל תקשורת ועסקה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>התראות ותזכורות אוטומטיות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>דשבורד עם תובנות בזמן אמת</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* תכונות מפורטות */}
          <div className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-16 text-center">מה כולל הפתרון?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-scale">
              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">ניהול לקוחות ולידים</h3>
                <p className="text-foreground/70">
                  כל המידע על הלקוחות במקום אחד - היסטוריית שיחות, מסמכים, הערות ועוד. תוכלו לראות את כל התמונה במבט אחד.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4">
                  <LineChart className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">מעקב עסקאות</h3>
                <p className="text-foreground/70">
                  עקבו אחרי כל עסקה משלב הליד ועד לסגירה. דעו בדיוק איפה כל עסקה נמצאת ומה הצעד הבא.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Database className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">דשבורד ותובנות</h3>
                <p className="text-foreground/70">
                  תמונת מצב מלאה על העסק - כמה עסקאות פתוחות, מה הסטטוס, מה החזוי לחודש הבא ועוד.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">אינטגרציה עם יומן</h3>
                <p className="text-foreground/70">
                  חיבור מלא ליומן גוגל - פגישות אוטומטיות, תזכורות ועדכונים בזמן אמת.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">סנכרון מיילים</h3>
                <p className="text-foreground/70">
                  כל התכתבות עם הלקוח נשמרת אוטומטית במערכת. לא עוד חיפוש במייל - הכל במקום אחד.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-blue/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">ניהול הרשאות</h3>
                <p className="text-foreground/70">
                  שליטה מלאה - מי רואה מה, מי יכול לערוך ומי יכול למחוק. מערכת הרשאות גמישה ומאובטחת.
                </p>
              </div>
            </div>
          </div>

          {/* איך זה עובד */}
          <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-16 text-center">איך זה עובד?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <h2 className="text-3xl font-bold mb-8 text-center">איך זה עובד?</h2>
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "שיחת ייעוץ ראשונית",
                    description: "נפגשים, מכירים ומבינים בדיוק מה אתם צריכים ואיך אתם עובדים היום"
                  },
                  {
                    number: "2",
                    title: "תכנון ועיצוב המערכת",
                    description: "מתכננים יחד את המערכת - מה יהיה בה, איך היא תראה, איך היא תתנהג"
                  },
                  {
                    number: "3",
                    title: "פיתוח והטמעה",
                    description: "בונים את המערכת, מכניסים את המידע הקיים ומלווים אתכם בתהליך ההטמעה"
                  },
                  {
                    number: "4",
                    title: "תמיכה ושדרוגים",
                    description: "נשארים איתכם לאורך הדרך עם תמיכה שוטפת ושדרוגים לפי הצורך"
                  }
                ].map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-brand-blue text-lg">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
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
