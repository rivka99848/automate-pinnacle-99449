import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  TrendingUp, Users, Clock, Target, CheckCircle2, XCircle,
  Sparkles, Zap, BarChart3, Calendar, Mail, Database,
  FileText, Bell, Globe, Phone, User, Briefcase
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductCRM = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section - Wave Background with Gradient */}
        <section className="relative bg-gradient-to-br from-brand-blue via-brand-cyan to-white pt-32 pb-48 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                נגמר הבלגן – <br className="hidden md:block" />
                יותר סדר יותר זמן פנוי<br />
                ויותר כסף בכיס!
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                לידים נעלמים, משימות נערמות, וניהול העסק הופך למאבק מתיש?!<br />
                <span className="font-bold">הסוף לעבודה עם טבלאות מורכבות ומערכות מרובות!</span>
              </p>
              
              {/* Video Embed */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
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
                <Button asChild size="lg" className="text-lg px-12 py-6 bg-white text-brand-blue hover:bg-white/90 shadow-xl">
                  <a href="#contact">רוצה להתחיל לעבוד חכם</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white/10">
                  <a href="#faq">שאלות נפוצות</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Wave Shape at Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Problem Section with Angled Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                למה להישאר מאחור כשהעסק שלכם<br />
                <span className="text-gradient">יכול לרוץ קדימה?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                העולם מתקדם, הטכנולוגיה משתפרת – והשאלה היא האם גם העסק שלכם מתקדם?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: XCircle, title: "ניהול מבולגן ומסורבל", desc: "אלפי שורות בטבלה, קשה למצוא נתונים, כל המידע מפוזר" },
                { icon: XCircle, title: "אין תזכורות אוטומטיות", desc: "אתם שוכחים משימות, מפספסים לידים ולקוחות נעלמים" },
                { icon: XCircle, title: "תיעוד ידני ומתיש", desc: "אתם כל הזמן צריכים לעדכן נתונים, להוסיף נוסחאות ולוודא שהכול עובד" },
                { icon: XCircle, title: "בלגן בניהול לקוחות", desc: "אין היסטוריה מסודרת, כל מידע מפוזר בקבצים שונים" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative p-8 border-2 border-destructive/20 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})` }}
                >
                  <item.icon className="w-12 h-12 text-destructive mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section - Large Circles */}
        <section className="py-24 bg-gradient-to-b from-brand-cyan/10 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                איך המערכת שלנו תקל עליך?
              </h2>
              <p className="text-xl text-center text-muted-foreground mb-16">
                מאפשרת לך לעסוק בעיקר בעשייה ולא באיך לנהל את המידע!
              </p>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { 
                    icon: Clock, 
                    title: "חסכון בזמן", 
                    desc: "יכולות האוטומציה של המערכת יחסכו זמן יקר כך שבקלות ובמחיר אטרקטיבי תוכלו לקבל בהירות ושליטה על תהליכים מורכבים שידחפו את העסק קדימה.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  { 
                    icon: Users, 
                    title: "פחות צורך בעובדים נוספים", 
                    desc: "מה שמזכירה או עוזר אדמיניסטרטיבי היו עושים – המערכת עושה עבורך, בלי עלות חודשית גבוהה.",
                    color: "from-purple-500 to-pink-500"
                  },
                  { 
                    icon: Sparkles, 
                    title: "נוחות בלי מורכבות", 
                    desc: "אנחנו שמים סוף לעבודה עם טבלאות מורכבות ומערכות מרובות.",
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-20 h-20 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Bento Box Style */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                הגיע הזמן לעבוד בצורה חכמה ויעילה<br />
                <span className="text-gradient">והכל במערכת אחת!</span>
              </h2>
              <p className="text-xl text-center text-muted-foreground mb-16">
                10 פיצ'רים שישנו לכם את העסק
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
                {/* Large Feature Cards */}
                <div className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-brand-blue to-brand-cyan p-8 rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Database className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl font-bold mb-3">ניהול לידים ולקוחות</h3>
                  <p className="text-white/90 text-lg">כל הנתונים שמורים ומאורגנים בכרטיס לקוח מסודר</p>
                </div>

                <div className="bg-purple-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CheckCircle2 className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">ניהול משימות ופרויקטים</h3>
                  <p className="text-white/90">תכנון, מעקב ותזכורות חכמות</p>
                </div>

                <div className="bg-green-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <BarChart3 className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">ניהול הכנסות והוצאות</h3>
                  <p className="text-white/90">סטטיסטיקות חכמות שיעזרו לכם</p>
                </div>

                <div className="bg-orange-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Zap className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">פתיחה אוטומטית של כרטיסיית לקוח</h3>
                  <p className="text-white/90">ברגע שליד סוגר איתכם</p>
                </div>

                <div className="bg-pink-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Target className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">פולואפים אוטומטיים ללידים</h3>
                  <p className="text-white/90">כדי שלא יפלו לכם מהידיים</p>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-cyan-500 to-blue-500 p-8 rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <Bell className="w-14 h-14 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">יומן משימות ותזכורות יומיות</h3>
                  <p className="text-white/90 text-lg">תקבלו תזכורות ישירות למייל כדי שלא תשכחו דבר</p>
                </div>

                <div className="bg-indigo-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Calendar className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">סנכרון יומן גוגל</h3>
                  <p className="text-white/90">המשימות מסונכרנות אוטומטי</p>
                </div>

                <div className="bg-teal-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <FileText className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">תיעוד שיחות עם לידים ולקוחות</h3>
                  <p className="text-white/90">שלא תפספסו שום פרט חשוב</p>
                </div>

                <div className="bg-yellow-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <TrendingUp className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">סטטיסטיקות על ביצועי העסק</h3>
                  <p className="text-white/90">פילוחים שונים בזמן אמת</p>
                </div>

                <div className="bg-red-500 p-6 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Globe className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">יצירת טופס למילוי אוטומטי ללידים</h3>
                  <p className="text-white/90">להכניס פנויות מחוץ לשעות</p>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-2xl font-bold text-gradient mb-4">
                  אל תישארו בעבר – העתיד כבר כאן!
                </p>
                <p className="text-lg text-muted-foreground">
                  מעכשיו כל ליד שנכנס למערכת, יקבל הודעת מייל אישית
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Split Section */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
                מה יש לכם היום vs. עם המערכת שלנו
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Before - Left Side */}
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-destructive rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                    ❌
                  </div>
                  <div className="bg-muted/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-destructive/30 space-y-6">
                    <h3 className="text-3xl font-bold mb-6">מה יש לכם היום?</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">ניהול מבולגן ומסורבל</h4>
                          <p className="text-muted-foreground">אלפי שורות בטבלה, קשה למצוא נתונים, כל המידע מפוזר</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">אין תזכורות אוטומטיות</h4>
                          <p className="text-muted-foreground">אתם שוכחים משימות, מפספסים לידים ולקוחות נעלמים</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">תיעוד ידני ומתיש</h4>
                          <p className="text-muted-foreground">אתם כל הזמן צריכים לעדכן נתונים, להוסיף נוסחאות ולוודא שהכול עובד</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">בלגן בניהול לקוחות</h4>
                          <p className="text-muted-foreground">אין היסטוריה מסודרת, כל מידע מפוזר בקבצים שונים</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After - Right Side */}
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                    ✓
                  </div>
                  <div className="bg-gradient-to-br from-brand-blue to-brand-cyan p-8 rounded-3xl text-white shadow-2xl space-y-6">
                    <h3 className="text-3xl font-bold mb-6">עם המערכת שלנו:</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">הכול במקום אחד</h4>
                          <p className="text-white/90">מערכת חכמה שמארגנת לכם את הלידים, הלקוחות והמשימות בצורה ברורה</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">פולואפים ותזכורות אוטומטיות</h4>
                          <p className="text-white/90">המערכת דואגת שלא תפספסו אף ליד או משימה</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">הכול קורה לבד</h4>
                          <p className="text-white/90">אוטומציות מתקדמות דואגות לניהול חכם בלי שתצטרכו להתעסק בזה</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">כרטיס לקוח מסודר</h4>
                          <p className="text-white/90">כל המידע על כל לקוח מרוכז במקום אחד: שיחות, משימות, תשלומים ועוד</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Floating 3D Card */}
        <section className="py-32 bg-gradient-to-br from-brand-cyan/20 via-white to-brand-blue/10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xl text-muted-foreground mb-2">
                  כשבניתי מערכת כזו ללקוחה, היא שילמה 8,000 ש״ח על פיתוח אישי.
                </p>
                <p className="text-xl text-muted-foreground">
                  אבל אז הבנתי – לא לכל עסק יש תקציב כזה, זה לא צריך להיות חסם!
                </p>
              </div>

              {/* Floating Pricing Card */}
              <div className="relative transform hover:scale-105 transition-all duration-500">
                {/* Price Badge */}
                <div className="absolute -top-8 -right-8 bg-red-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl rotate-12 animate-pulse z-20">
                  מבצע מוגבל! 🔥
                </div>

                <div className="bg-white rounded-[3rem] shadow-2xl p-12 border-4 border-brand-cyan relative overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-brand-blue/20 to-transparent rounded-full translate-x-32 translate-y-32"></div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-center mb-8">מה יהיה לכם עם המערכת שלנו?</h3>

                    {/* Crossed-out Prices */}
                    <div className="text-center mb-6 space-y-2">
                      <div className="text-3xl text-muted-foreground line-through">8,000 ₪</div>
                      <div className="text-4xl text-muted-foreground line-through">2,950 ₪</div>
                    </div>

                    {/* Final Price */}
                    <div className="text-center mb-8">
                      <div className="text-7xl font-bold text-gradient mb-2">2,400 ₪</div>
                      <p className="text-xl font-bold text-brand-blue">תשלום חד-פעמי בלבד</p>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                      <p className="text-center leading-relaxed text-muted-foreground">
                        זו השקעה חד-פעמית שתחסוך לכם שעות של עבודה, תמנע אובדן לידים ולקוחות
                        ותיתן לכם שליטה מלאה על העסק כדי שתוכלו <span className="font-bold text-foreground">להרוויח יותר בפחות זמן</span>
                      </p>
                    </div>

                    <p className="text-center text-2xl font-bold mb-6">
                      ההזדמנות הזו לא תחזור!
                    </p>

                    <div className="text-center">
                      <Button asChild size="lg" className="text-xl px-16 py-8 bg-gradient-to-r from-brand-blue to-brand-cyan hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <a href="#contact">רוצה להתחיל לעבוד חכם ולהרוויח יותר</a>
                      </Button>
                    </div>

                    <p className="text-center text-muted-foreground mt-6">
                      מהיום כל עסק יכול להרשות לעצמו להתקדם
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form - Glassmorphism */}
        <section id="contact" className="py-24 bg-gradient-to-br from-brand-blue via-brand-cyan to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-12 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    הגיע הזמן לעשות סדר בעסק שלכם
                  </h2>
                  <p className="text-xl text-white/90">
                    רוצה להתחיל לעבוד חכם ולהרוויח יותר
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="שם מלא*" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground h-14 text-lg rounded-2xl"
                      required
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      placeholder="מס׳ טלפון*" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground h-14 text-lg rounded-2xl"
                      required
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      placeholder="אימייל*" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground h-14 text-lg rounded-2xl"
                      required
                    />
                  </div>

                  <div>
                    <Input 
                      type="text" 
                      placeholder="תחום העסק*" 
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground h-14 text-lg rounded-2xl"
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="mt-1 w-5 h-5 rounded border-white/30"
                      required
                    />
                    <label htmlFor="consent" className="text-white text-sm">
                      אני מאשר/ת קבלת דיוורים*
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-xl py-8 bg-white text-brand-blue hover:bg-white/90 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    רוצה להתחיל לעבוד חכם ולהרוויח יותר
                  </Button>

                  <p className="text-center text-white text-lg font-bold">
                    רק 2,400 ש״ח
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Colorful Accordion */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                שאלות ותשובות
              </h2>
              <p className="text-xl text-center text-muted-foreground mb-16">
                כל מה שרציתם לדעת על המערכת
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: "מה ההבדל בין המערכת הזו לגוגל שיטס?",
                    a: "במערכת שלנו הכל מסונכרן אוטומטית, אין צורך לעדכן ידנית או להתעסק עם נוסחאות מסובכות. יש כרטיסיית לקוח מסודרת עם כל הנתונים במקום אחד, כולל תשלומים, משימות ופרויקטים, ובנוסף – אוטומציות שמבצעות פולואפים, תזכורות וסנכרונים בלי שתצטרכו להתערב.",
                    color: "border-r-4 border-r-blue-500"
                  },
                  {
                    q: "אני משתמש/ת ברב מסר אבל מרגיש/ה שאני צריכה יותר מזה. איך המערכת שלך יכולה לעזור לי?",
                    a: "רב מסר מצוינת לשיווק, אך היא לא מספקת פתרון לניהול העסק עצמו. המערכת שלי מרכזת את כל מה שאת/ה צריכה במקום אחד: ניהול לידים, משימות, לקוחות, פרויקטים, מעקב תשלומים וזמן עבודה – בלי לקפוץ בין כלים שונים.",
                    color: "border-r-4 border-r-purple-500"
                  },
                  {
                    q: "האם אני צריך/ה ידע טכני כדי להשתמש במערכת?",
                    a: "ממש לא. המערכת בנויה כך שכל אחד יכול להשתמש בה בקלות. הכל ברור, נוח ומותאם לניהול העסק בלי צורך בהבנה טכנית מעמיקה.",
                    color: "border-r-4 border-r-green-500"
                  },
                  {
                    q: "האם אפשר להתאים את המערכת לצרכים שלי?",
                    a: "בהחלט. ניתן לבצע התאמות לפי הצורך, בתוספת תשלום לפי שעות, ולהוסיף כל נתון או אוטומציה שאתם צריכים",
                    color: "border-r-4 border-r-orange-500"
                  },
                  {
                    q: "איך המערכת עוזרת לי להגדיל רווחים?",
                    a: "היא מוודאת שאף ליד לא הולך לאיבוד, שהלקוחות נשארים מעורבים, ושאתה מתמקד בעבודה שמכניסה כסף: סגירת יותר עסקאות, לידים שמתחממים במקום שמתקררים, פחות ניהול ידני ויותר עבודה רווחית, תמחור חכם יותר עם מעקב אחרי זמן עבודה, ושליטה מלאה על הכספים.",
                    color: "border-r-4 border-r-red-500"
                  },
                  {
                    q: "האם אפשר לעבוד עם צוות בתוך המערכת?",
                    a: "כן! אפשר להגדיר הרשאות לכל משתמש, כך שכל אחד יקבל גישה למה שהוא צריך.",
                    color: "border-r-4 border-r-pink-500"
                  },
                  {
                    q: "האם זה שירות חודשי או חד-פעמי?",
                    a: "זו מערכת בתשלום חד-פעמי. אין צורך במנוי חודשי, משלמים פעם אחת ונשארים עם מערכת שעובדת בשבילכם לטווח ארוך.",
                    color: "border-r-4 border-r-cyan-500"
                  },
                  {
                    q: "אם אני לא רוצה שהאוטומציות יפעלו?",
                    a: "יש אופציה לכבות ולהדליק מתי שתרצו.",
                    color: "border-r-4 border-r-indigo-500"
                  },
                  {
                    q: "באיזה פלטפורמה המערכת בנויה?",
                    a: "המערכת בנויה בפלטפורמת Airtable.",
                    color: "border-r-4 border-r-teal-500"
                  },
                  {
                    q: "איך אפשר להצטרף למבצע?",
                    a: "קל מאוד! המבצע תקף לזמן מוגבל. כדאי למהר ולתפוס את ההזדמנות. כל שעליכם לעשות הוא למלא את הטופס בדף זה ונחזור אליכם בהקדם.",
                    color: "border-r-4 border-r-yellow-500"
                  }
                ].map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className={`bg-muted/30 rounded-2xl px-6 border-2 border-transparent hover:border-muted ${item.color}`}
                  >
                    <AccordionTrigger className="text-right text-lg font-bold hover:no-underline py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-right text-muted-foreground leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Dramatic Gradient */}
        <section className="py-32 bg-gradient-to-br from-brand-blue via-purple-600 to-brand-cyan relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLS4wMyAyMGw0MC4wNiAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                מוכנים לשדרג את העסק?
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 mb-12">
                הצטרפו עכשיו למאות עסקים שכבר עושים את זה נכון
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="text-2xl px-16 py-10 bg-white text-brand-blue hover:bg-white/90 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                <a href="#contact">בואו נתחיל! 🚀</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductCRM;