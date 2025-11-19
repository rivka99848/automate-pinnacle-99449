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
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#1D2F4F] via-[#121F36] to-[#121F37] pt-32 pb-48 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                נגמר הבלגן – <br className="hidden md:block" />
                יותר סדר יותר זמן פנוי<br />
                ויותר כסף בכיס!
              </h1>
              <p className="text-xl md:text-2xl text-[#C5D1E3] mb-8 max-w-3xl mx-auto leading-relaxed">
                לידים נעלמים, משימות נערמות, וניהול העסק הופך למאבק מתיש?!<br />
                <span className="font-bold">הסוף לעבודה עם טבלאות מורכבות ומערכות מרובות!</span>
              </p>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto border-2 border-[#8FADFF]/20 transform hover:scale-105 transition-all duration-300">
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
                <Button asChild size="lg" className="text-lg px-12 py-6 bg-[#3E6AE5] hover:bg-[#6D94FF] text-white shadow-xl transition-all duration-300">
                  <a href="#contact">רוצה להתחיל לעבוד חכם</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-12 py-6 border-2 border-[#8FADFF] text-white hover:bg-white/10 transition-all duration-300">
                  <a href="#faq">שאלות נפוצות</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute top-32 left-10 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(109, 148, 255, 0.15)' }}>
            <Database className="w-7 h-7" style={{ color: '#6D94FF' }} />
          </div>
          <div className="absolute top-48 right-20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(182, 238, 248, 0.15)', animationDelay: '0.5s' }}>
            <TrendingUp className="w-7 h-7" style={{ color: '#B6EEF8' }} />
          </div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(179, 245, 160, 0.15)', animationDelay: '1s' }}>
            <CheckCircle2 className="w-7 h-7" style={{ color: '#B3F5A0' }} />
          </div>
          <div className="absolute bottom-48 right-1/3 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(237, 187, 158, 0.15)', animationDelay: '1.5s' }}>
            <Mail className="w-7 h-7" style={{ color: '#EDBB9E' }} />
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#FFFFFF"/>
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
                          <p>כל המידע מאורגן ונגיש בכרטיס לקוח מסודר</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">תזכורות אוטומטיות</h4>
                          <p>המערכת תזכיר לכם משימות ופעולות חשובות</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">אוטומציה חכמה</h4>
                          <p>עדכונים אוטומטיים ללא צורך בתיעוד ידני</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-lg mb-1">ניהול לקוחות מקצועי</h4>
                          <p>היסטוריה מסודרת ומעקב קל ונוח</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
              שאלות נפוצות
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>איך מתחילים להשתמש במערכת?</AccordionTrigger>
                <AccordionContent>
                  פשוט מאוד! פנו אלינו ונעזור לכם להגדיר את המערכת לפי הצרכים שלכם.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>האם יש תקופת ניסיון?</AccordionTrigger>
                <AccordionContent>
                  כן, יש תקופת ניסיון של 14 ימים ללא התחייבות.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>האם המערכת מתאימה לעסקים קטנים?</AccordionTrigger>
                <AccordionContent>
                  בהחלט! המערכת גמישה ומתאימה לעסקים בכל הגדלים.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>איך מתבצע הסנכרון עם יומן גוגל?</AccordionTrigger>
                <AccordionContent>
                  הסנכרון מתבצע אוטומטית ברקע, כך שכל המשימות שלכם מתעדכנות בזמן אמת.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-[#1D2F4F] via-[#121F36] to-[#121F37] text-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
              רוצה להתחיל לעבוד חכם?
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">שם מלא</label>
                <Input id="name" type="text" placeholder="הכנס את שמך" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">אימייל</label>
                <Input id="email" type="email" placeholder="הכנס את האימייל שלך" className="w-full" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-semibold">טלפון</label>
                <Input id="phone" type="tel" placeholder="הכנס את מספר הטלפון שלך" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-[#3E6AE5] hover:bg-[#6D94FF] text-white py-4 text-lg font-bold transition-all duration-300">
                שלח
              </Button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ProductCRM;
