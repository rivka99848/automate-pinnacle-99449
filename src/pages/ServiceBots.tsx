import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, MessageCircle, Clock, Zap, BarChart3, Sparkles } from "lucide-react";
import botAiImage from "@/assets/bot-ai-assistant.jpg";

const ServiceBots = () => {
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
                  src={botAiImage} 
                  alt="AI Bots"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-gradient">בוטים חכמים למענה אוטומטי</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  מענה אוטומטי ללקוחות 24/7, קבלת הזמנות ושאילתות, אינטגרציה עם מערכות קיימות ודוחות על כל השיחות. 
                  הבוטים שלנו עובדים בלי הפסקה ומספקים חוויה מעולה ללקוחות.
                </p>
              </div>
            </div>
          </div>

          {/* למה בוטים? */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="p-12 border border-white/10 rounded-3xl hover:border-brand-green/30 transition-all">
              <h2 className="text-3xl font-bold mb-12 text-center">למה בוט זה בדיוק מה שאתם צריכים?</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-destructive">🔴 המצב המוכר:</h3>
                  <ul className="space-y-4 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>שאלות חוזרות שלוקחות הרבה זמן</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>פניות בשעות לא שגרתיות שאף אחד לא עונה להן</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>לקוחות מתוסכלים שמחכים למענה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>•</span>
                      <span>הזמנות שאובדות בין ההודעות</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-brand-green">✅ הפתרון:</h3>
                  <ul className="space-y-4 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>מענה מיידי לכל שאלה, בכל שעה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>זמינות 24/7 ללא עלות נוספת</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>לקוחות מרוצים שמקבלים שירות מהיר</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>✓</span>
                      <span>כל ההזמנות מתועדות ומסודרות</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* סוגי בוטים */}
          <div className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-bold mb-16 text-center">סוגי הבוטים שלנו</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">בוט WhatsApp</h3>
                <p className="text-foreground/70">
                  מענה אוטומטי בוואטסאפ - השאלות הכי נפוצות, מחירונים, זמינות ועוד. הלקוחות מקבלים תשובות מיידיות.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">בוט AI חכם</h3>
                <p className="text-foreground/70">
                  בוט מבוסס בינה מלאכותית שמבין שאלות מורכבות, לומד מהשיחות ומשתפר עם הזמן.
                </p>
              </div>

              <div className="p-8 border border-white/10 rounded-2xl hover:border-brand-green/50 hover:bg-white/5 transition-all">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Bot className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">בוט לאתרים</h3>
                <p className="text-muted-foreground">
                  צ'אט חי באתר שמשיב על שאלות, עוזר למבקרים למצוא מה שהם מחפשים ומגדיל המרות.
                </p>
              </div>
            </div>
          </div>

          {/* תכונות מפורטות */}
          <div className="max-w-6xl mx-auto mb-24">
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

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">מענה מיידי</h3>
                <p className="text-muted-foreground">
                  לקוחות לא אוהבים לחכות. הבוט עונה תוך שניות ונותן בדיוק את המידע שהם צריכים.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">שאלות מורכבות</h3>
                <p className="text-muted-foreground">
                  הבוט מבין שאלות בשפה טבעית, יודע להתאים את התשובות ואפילו לשאול שאלות הבהרה.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">קבלת הזמנות</h3>
                <p className="text-muted-foreground">
                  הבוט יכול לקבל הזמנות, לבדוק זמינות, להציע אלטרנטיבות ולסגור עסקאות.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
                <div className="w-14 h-14 rounded-xl bg-brand-green/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">דוחות ומדדים</h3>
                <p className="text-muted-foreground">
                  לראות בדיוק כמה פניות היו, מה השאלות הכי נפוצות ואיפה אפשר לשפר.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl hover-lift">
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

          {/* איך זה עובד */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card p-10 rounded-3xl">
              <h2 className="text-3xl font-bold mb-8 text-center">איך זה עובד?</h2>
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "נפגשים ומבינים",
                    description: "מה הלקוחות שואלים? איזה תהליך יש היום? מה החזון?"
                  },
                  {
                    number: "2",
                    title: "בונים את הבוט",
                    description: "מתכננים את השיחות, מכינים תשובות ומלמדים את הבוט"
                  },
                  {
                    number: "3",
                    title: "בדיקות ושיפורים",
                    description: "בודקים את הבוט, משפרים ומוודאים שהוא עובד מצוין"
                  },
                  {
                    number: "4",
                    title: "השקה ותמיכה",
                    description: "משיקים, עוקבים אחרי הביצועים ומשפרים לפי הצורך"
                  }
                ].map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-brand-green text-lg">{step.number}</span>
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

          {/* פרויקט רלוונטי */}
          <div className="max-w-5xl mx-auto mb-20">
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
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-brand-green/10 to-brand-cyan/10 p-12 rounded-3xl border border-brand-green/20">
            <h2 className="text-3xl font-bold mb-4">בואו נדבר על בוט לעסק שלכם</h2>
            <p className="text-xl text-muted-foreground mb-8">
              נשמח לשמוע על העסק שלכם ולהראות לכם איך בוט יכול לשנות את המשחק
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

export default ServiceBots;
