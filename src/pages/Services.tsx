import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import { Database, Bot, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">השירותים שלנו</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              פתרונות אוטומציה וניהול חכמים שיקלו על העסק שלכם ויחסכו לכם זמן וכסף
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mb-16">
            <div className="animate-fade-in-scale delay-100 h-full">
              <ServiceCard
                number="01"
                icon={Database}
                title="מערכת CRM"
                description="בניית מערכות CRM מותאמות אישית שמסדרות את כל המידע על הלקוחות, העסקאות והתהליכים במקום אחד. מערכת שעובדת בדיוק איך שאתם צריכים."
                features={[
                  "ניהול לקוחות ולידים בממשק אחד",
                  "מעקב אחרי כל שיחה ועסקה",
                  "דשבורד עם תובנות בזמן אמת",
                  "אינטגרציה עם יומן גוגל ו-Email"
                ]}
                colorClass="border-brand-blue"
                gradientClass="from-brand-blue/5 to-brand-cyan/5"
                links={[{ text: "למידע נוסף", url: "/products" }]}
              />
            </div>

            <div className="animate-fade-in-scale delay-300 h-full">
              <ServiceCard
                number="02"
                icon={Bot}
                title="בוטים חכמים"
                description="מענה אוטומטי ללקוחות, קבלת הזמנות ושאילתות, אינטגרציה עם מערכות קיימות, ודוחות על כל השיחות. הבוטים שלנו עובדים 24/7 ומספקים חוויה מעולה ללקוחות."
                features={[
                  "זמינות 24/7 ללקוחות",
                  "מענה מיידי לשאלות נפוצות",
                  "קבלת הזמנות והפניות",
                  "אינטגרציה עם WhatsApp, אתרים ועוד"
                ]}
                examples="בוט למענה אוטומטי, בוט לקבלת הזמנות, בוט לשירות לקוחות"
                colorClass="border-brand-green"
                gradientClass="from-brand-green/5 to-brand-cyan/5"
                links={[
                  { text: "בוטים לוואטסאפ", url: "/blog" },
                  { text: "בוטים AI חכמים", url: "/blog" },
                  { text: "בוט לאתרים (סיפור צימרים)", url: "/projects/nichuta-vacation-bot" },
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
                  "ניטור וביצוע אוטומטי של משימות",
                ]}
                examples="שליחת דוא״ל אוטומטית, עדכון מלאי, יצירת דוחות, ניהול משימות"
                colorClass="border-brand-purple"
                gradientClass="from-brand-purple/5 to-brand-blue/5"
                links={[{ text: "פרויקט עסק רפואי", url: "/projects/medical-automation" }]}
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">איך זה עובד?</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-secondary">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">שיחת ייעוץ ראשונית</h3>
                  <p>נפגשים, מכירים ומבינים את הצרכים שלכם ואת האתגרים העסקיים</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-secondary">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">הצעת פתרון מותאם</h3>
                  <p>בונים יחד תכנית עבודה מפורטת ומותאמת אישית לעסק שלכם</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-secondary">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">פיתוח והטמעה</h3>
                  <p>מפתחים את הפתרון, מתקינים ומלווים בתהליך ההטמעה</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-secondary">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">תמיכה ושדרוגים</h3>
                  <p>נשארים איתכם לאורך הדרך עם תמיכה שוטפת ושדרוגים לפי הצורך</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">מוכנים להתחיל?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              בואו נדבר על איך אנחנו יכולים לעזור לעסק שלכם
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full">
              <Link to="/contact">צרו קשר</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
