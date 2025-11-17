import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, Users, LineChart, Calendar, Mail, Shield, 
  CheckCircle2, BarChart3, FileText, Bell, Zap, Settings 
} from "lucide-react";
import Testimonials from "@/components/Testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductCRM = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section with Video */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-gradient">מערכת CRM חכמה</span>
              <br />
              <span className="text-foreground">שמנהלת את העסק בשבילך</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              פתרון CRM מותאם אישית שמרכז את כל המידע על הלקוחות, העסקאות והפרויקטים במקום אחד.
              <br />
              מערכת שחוסכת זמן, מגדילה מכירות ומייעלת תהליכים.
            </p>
            
            {/* Embedded Video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 max-w-5xl mx-auto">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="מערכת CRM - סרטון הדגמה"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">קבלו הצעת מחיר</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/contact">קבעו פגישת ייעוץ חינם</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - White Background */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                מה תקבלו במערכת?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                כל מה שצריך לנהל את העסק בצורה חכמה ויעילה
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Database,
                    title: "ניהול לקוחות מרכזי",
                    description: "כל המידע על הלקוחות במקום אחד - היסטוריית שיחות, מסמכים, הערות ועסקאות"
                  },
                  {
                    icon: BarChart3,
                    title: "דשבורד אנליטי",
                    description: "ראייה מלאה של מצב העסק - הכנסות, עסקאות פתוחות, ביצועי צוות ותחזיות"
                  },
                  {
                    icon: Calendar,
                    title: "לוח שנה חכם",
                    description: "תזמון פגישות, תזכורות אוטומטיות ומעקב אחרי משימות עם אינטגרציה לגוגל Calendar"
                  },
                  {
                    icon: LineChart,
                    title: "ניהול עסקאות",
                    description: "מעקב מלא אחרי כל עסקה משלב הליד ועד לסגירה - עם שלבים מותאמים אישית"
                  },
                  {
                    icon: FileText,
                    title: "ניהול פרויקטים",
                    description: "מעקב אחרי פרויקטים, משימות ותקציבים - הכל מחובר ללקוח הרלוונטי"
                  },
                  {
                    icon: Mail,
                    title: "אוטומציה שלמה",
                    description: "שליחת מיילים אוטומטית, תזכורות, דוחות שבועיים ועדכונים ללקוחות"
                  },
                  {
                    icon: Bell,
                    title: "התראות חכמות",
                    description: "קבלו עדכון מיידי על עסקאות חדשות, לקוחות שחזרו ומשימות דחופות"
                  },
                  {
                    icon: Shield,
                    title: "אבטחה מלאה",
                    description: "ניהול הרשאות מתקדם, גיבויים אוטומטיים ואבטחת מידע ברמה הגבוהה ביותר"
                  },
                  {
                    icon: Zap,
                    title: "אינטגרציות",
                    description: "התחברות לכל המערכות שאתם משתמשים בהן - WhatsApp, Gmail, וועוד"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Gray Background */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                איך המערכת משנה את העסק?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-destructive mb-8">🔴 לפני המערכת:</h3>
                  <ul className="space-y-4">
                    {[
                      "מידע על לקוחות מפוזר בין אקסל, וואטסאפ ודוא\"ל",
                      "קשה לעקוב אחרי כל השיחות והעסקאות",
                      "לקוחות נופלים בין הכיסאות",
                      "אין תמונה ברורה על מצב העסק",
                      "בזבוז זמן על עבודה ידנית",
                      "קשה לתאם בין חברי הצוות"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg">
                        <span className="text-destructive">✕</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary mb-8">✅ אחרי המערכת:</h3>
                  <ul className="space-y-4">
                    {[
                      "כל המידע במקום אחד, נגיש ומסודר",
                      "מעקב אוטומטי אחרי כל תקשורת ועסקה",
                      "התראות ותזכורות אוטומטיות",
                      "דשבורד עם תמונת מצב בזמן אמת",
                      "חיסכון של שעות עבודה בכל שבוע",
                      "שיתוף פעולה חלק בין הצוות"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-lg">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - White Background */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                איך זה עובד?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                תהליך פשוט ומקצועי מהרעיון ועד להפעלה
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "פגישת ייעוץ",
                    description: "נפגש, מבינים את הצרכים והתהליכים שלכם, ומגדירים בדיוק מה צריך"
                  },
                  {
                    step: "02",
                    title: "תכנון המערכת",
                    description: "בונים תוכנית עבודה מפורטת, מעצבים את הממשק ומגדירים את הפיצ'רים"
                  },
                  {
                    step: "03",
                    title: "פיתוח ובדיקות",
                    description: "מפתחים את המערכת שלב אחר שלב, עם בדיקות ומשובים שוטפים מכם"
                  },
                  {
                    step: "04",
                    title: "הדרכה והטמעה",
                    description: "מדריכים את הצוות, מעבירים את הנתונים ומוודאים שהכל עובד חלק"
                  },
                  {
                    step: "05",
                    title: "תמיכה שוטפת",
                    description: "נשאר איתכם - תמיכה טכנית, שדרוגים ושיפורים לפי הצורך"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Gray Background */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                מה הלקוחות שלנו אומרים?
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                עסקים שהמערכת שלנו עזרה להם לצמוח
              </p>
              <Testimonials />
            </div>
          </div>
        </section>

        {/* FAQ Section - White Background */}
        <section className="bg-background py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                שאלות נפוצות
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16">
                כל מה שרציתם לדעת על מערכת ה-CRM
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    כמה זמן לוקח לבנות מערכת CRM?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    תלוי במורכבות המערכת, אבל בדרך כלל בין 4-8 שבועות מהתחלה ועד להפעלה מלאה. 
                    אנחנו עובדים בשלבים, אז אפשר להתחיל להשתמש במערכת כבר לפני שהיא מוכנה לחלוטין.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    כמה עולה מערכת CRM מותאמת אישית?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    המחיר משתנה לפי היקף הפרויקט, אבל בדרך כלל מערכת בסיסית מתחילה מ-₪20,000. 
                    נציע לכם מחיר מדויק אחרי פגישת ייעוץ ראשונית שבה נבין את הצרכים המדויקים שלכם.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    האם אפשר לחבר את המערכת למערכות קיימות?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    בהחלט! אנחנו יכולים לחבר את המערכת לכל מה שאתם כבר משתמשים בו - Gmail, WhatsApp Business, 
                    גוגל Calendar, מערכות חשבונאות ועוד. האינטגרציות מותאמות בדיוק לצרכים שלכם.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    מה קורה אחרי שהמערכת מוכנה?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    אנחנו נשארים איתכם! יש תמיכה טכנית שוטפת, אפשרות לשדרוגים ושיפורים, 
                    ומעקב קבוע כדי לוודא שהמערכת ממשיכה לעבוד בצורה מושלמת ולענות על הצרכים שלכם.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    האם אני צריך ידע טכני להשתמש במערכת?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    בכלל לא! אנחנו בונים את המערכת להיות פשוטה ואינטואיטיבית. בנוסף, יש הדרכה מלאה 
                    לכל הצוות, מדריכי משתמש ותמיכה זמינה בכל שאלה. כל מי שיודע להשתמש בווטסאפ ידע להשתמש במערכת.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    איך המידע מאובטח במערכת?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    אבטחת המידע היא בעדיפות עליונה. המערכת כוללת הצפנה מלאה, גיבויים אוטומטיים יומיים, 
                    ניהול הרשאות מתקדם ותשתית ענן מאובטחת. כל הנתונים שלכם מוגנים ברמה הגבוהה ביותר.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-all">
                  <AccordionTrigger className="text-xl font-bold text-right hover:no-underline">
                    למי המערכת מתאימה?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                    המערכת מתאימה לכל עסק שמנהל לקוחות ועסקאות - חברות שירות, סוכנויות, קבלנים, 
                    יועצים, עורכי דין, מתכננים ועוד. אם יש לכם לקוחות ועסקאות לנהל - המערכת בשבילכם.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section - Gradient Background */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                מוכנים להתחיל?
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                בואו נבנה ביחד את מערכת ה-CRM המושלמת לעסק שלכם.
                פגישת ייעוץ ראשונית חינם - ללא התחייבות.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 shadow-lg hover:shadow-xl">
                  <Link to="/contact">קבעו פגישה עכשיו</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground">
                  <Link to="/projects">ראו פרויקטים קודמים</Link>
                </Button>
              </div>

              <p className="mt-12 text-primary-foreground/80 text-lg">
                יש שאלות? צרו איתנו קשר ב-WhatsApp או בטלפון 050-1234567
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCRM;