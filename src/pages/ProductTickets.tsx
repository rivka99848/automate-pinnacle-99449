import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Ticket, MapPin, Receipt, Theater, BarChart3, MousePointerClick,
  CheckCircle2, XCircle, Shield, LayoutDashboard, Calendar,
  CreditCard, Users, Clock, Zap, Target, Sparkles, Package, Video, Mail, Gift
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductTickets = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#4A1D6F] via-[#2D1045] to-[#1A0A2E] pt-32 pb-48 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                מערכת מכירת כרטיסים <br className="hidden md:block" />
                <span className="text-[#E8A0FF]">עם בחירת מושבים</span>
              </h1>
              <div className="space-y-6 mb-10 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-[#D4B8E8] leading-relaxed">
                  נגמרה התלות בחברות חיצוניות!<br />
                  <span className="font-bold text-white">שליטה מלאה על כל הופעה, כל כרטיס וכל אולם – תחת המיתוג שלכם.</span>
                </p>
                
                <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                  פתרון מושלם למפיקים, מתנסים ובעלי אולמות שרוצים לנהל הכל בעצמם
                </p>
                
                <p className="text-lg md:text-xl text-[#D4B8E8] leading-relaxed">
                  בלי עמלות מוגזמות, בלי מגבלות – רק אתם והקהל שלכם.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-12 py-6 bg-[#9B59B6] hover:bg-[#B370CF] text-white shadow-xl transition-all duration-300">
                  <a href="#contact">רוצה להתחיל למכור כרטיסים</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-12 py-6 border-2 border-[#E8A0FF] text-white hover:bg-white/10 transition-all duration-300">
                  <a href="#faq">שאלות נפוצות</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-32 left-10 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(155, 89, 182, 0.2)' }}>
            <Ticket className="w-7 h-7" style={{ color: '#E8A0FF' }} />
          </div>
          <div className="absolute top-48 right-20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(232, 160, 255, 0.15)', animationDelay: '0.5s' }}>
            <Theater className="w-7 h-7" style={{ color: '#E8A0FF' }} />
          </div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(179, 245, 160, 0.15)', animationDelay: '1s' }}>
            <MapPin className="w-7 h-7" style={{ color: '#B3F5A0' }} />
          </div>
          <div className="absolute bottom-48 right-1/3 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm animate-float" style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)', animationDelay: '1.5s' }}>
            <BarChart3 className="w-7 h-7" style={{ color: '#E8A0FF' }} />
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#FFFFFF"/>
            </svg>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Right Side - Header */}
                <div className="text-right order-1 md:order-1">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1A0A2E] leading-tight">
                    למה לשלוט <br />
                    <span className="bg-gradient-to-l from-[#9B59B6] to-[#E8A0FF] bg-clip-text text-transparent">במכירות שלכם?</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-[#6B4D7A] leading-relaxed">
                    הפסיקו לשלם עמלות מיותרות ולהיות תלויים במערכות חיצוניות!
                  </p>
                </div>

                {/* Left Side - Benefits */}
                <div className="space-y-6 order-2 md:order-2">
                  {[
                    { 
                      icon: Shield, 
                      title: "שליטה מלאה", 
                      desc: "כל הופעה, כל כרטיס וכל אולם תחת הלוגו והמיתוג שלכם – בלי לוגו של חברה אחרת על הכרטיסים.",
                      delay: "0s"
                    },
                    { 
                      icon: CreditCard, 
                      title: "בלי עמלות מוגזמות", 
                      desc: "הכסף נכנס ישר אליכם, בלי חיתוכים ועמלות של חברות ביניים.",
                      delay: "0.15s"
                    },
                    { 
                      icon: LayoutDashboard, 
                      title: "ניהול חכם וקל", 
                      desc: "דשבורד מתקדם עם תמונת מצב מלאה על כל הופעה – מושבים, מכירות, הכנסות.",
                      delay: "0.3s"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group animate-fade-in"
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#9B59B6]/10 to-[#E8A0FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-[#9B59B6]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1A0A2E]">{item.title}</h3>
                        <p className="text-sm text-[#6B4D7A] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Experience Section */}
        <section className="py-24 bg-[#F8F4FB]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1A0A2E]">
                חוויה ללקוח <span className="text-[#9B59B6]">הקונה</span>
              </h2>
              
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "1", icon: Calendar, title: "בחירת הופעה", desc: "הקונה בוחר את ההופעה הרצויה מתוך רשימת ההופעות הזמינות" },
                  { step: "2", icon: MapPin, title: "בחירת מושב", desc: "בחירת המושב במפת האולם האינטראקטיבית" },
                  { step: "3", icon: CreditCard, title: "תשלום מאובטח", desc: "הקונה משלם בצורה מאובטחת ופשוטה" },
                  { step: "4", icon: Ticket, title: "קבלת כרטיס", desc: "כרטיס דיגיטלי עם פרטי ההופעה והמושב + קבלה ממותגת" },
                  { step: "5", icon: BarChart3, title: "תיעוד אוטומטי", desc: "כל רכישה מתועדת במערכת בזמן אמת" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#9B59B6] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 text-[#9B59B6] mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-[#1A0A2E] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B4D7A] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manager Experience Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Right Side - Sticky Header */}
                <div className="md:sticky md:top-32 order-1 md:order-1 text-right">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A0A2E]">
                    ניהול עבור <span className="text-[#9B59B6]">המפיק</span>
                  </h2>
                  <p className="text-xl text-[#6B4D7A] leading-relaxed">
                    כל הכלים שאתם צריכים לניהול מושלם של ההופעות שלכם
                  </p>
                </div>

                {/* Left Side - Scrolling Cards */}
                <div className="space-y-8 order-2 md:order-2">
                  {[
                    { 
                      title: "יצירת הופעה בלחיצה", 
                      desc: "הזנת פרטים: תאריך, שעה, אולם, מחיר כרטיס, מספר מושבים ועוד.",
                      bg: "#9B59B6",
                      icon: Calendar
                    },
                    { 
                      title: "פתיחת מכירה אוטומטית", 
                      desc: "ניהול מושבים וחיבור למסופי סליקה – הכל אוטומטי.",
                      bg: "#E8A0FF",
                      icon: Zap
                    },
                    { 
                      title: "עדכון ושינוי בזמן אמת", 
                      desc: "ניהול מושבים זמינים ומעקב אחר רכישות בכל רגע.",
                      bg: "#B3F5A0",
                      icon: Clock
                    },
                    { 
                      title: "דשבורד מתקדם", 
                      desc: "תמונת מצב מלאה: כרטיסים שנמכרו, מושבים פנויים, סכומים שהתקבלו וסטטוס תשלומים.",
                      bg: "#6B4D7A",
                      icon: LayoutDashboard
                    },
                    { 
                      title: "דוחות וסטטיסטיקות", 
                      desc: "הפקת דוחות בזמן אמת לניהול חכם ויעיל של כל ההופעות.",
                      bg: "#9B59B6",
                      icon: BarChart3
                    }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="sticky p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-r-4"
                      style={{ 
                        borderRightColor: feature.bg,
                        top: `${8 + index * 2}rem`
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                          style={{ backgroundColor: feature.bg }}
                        >
                          <feature.icon className="w-7 h-7" style={{ color: '#FFFFFF' }} />
                        </div>
                        <div className="flex-1 text-right">
                          <h3 className="text-xl font-bold text-[#1A0A2E] mb-2">{feature.title}</h3>
                          <p className="text-[#6B4D7A] leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F8F4FB]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-[#1A0A2E]">
                מה ההבדל?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* עם חברות חיצוניות */}
                <div className="p-8 rounded-3xl shadow-xl" style={{ backgroundColor: '#6B4D7A' }}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-right">
                    עם חברות חיצוניות
                  </h3>
                  <div className="space-y-4">
                    {[
                      "עמלות גבוהות על כל מכירה",
                      "הלוגו שלהם על הכרטיסים שלכם",
                      "אין שליטה על העיצוב והמיתוג",
                      "תלות במערכת חיצונית",
                      "דוחות מוגבלים",
                      "אין גישה לנתוני הלקוחות"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-300 mt-1 flex-shrink-0" />
                        <p className="text-white text-right">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* עם המערכת שלנו */}
                <div className="p-8 rounded-3xl shadow-xl bg-white">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#9B59B6] mb-6 text-right">
                    עם המערכת שלנו
                  </h3>
                  <div className="space-y-4">
                    {[
                      "בלי עמלות מיותרות – הכסף שלכם",
                      "מיתוג מלא – הלוגו שלכם בכל מקום",
                      "עיצוב כרטיסים וקבלות לפי הסגנון שלכם",
                      "שליטה מלאה ללא תלות",
                      "דוחות מפורטים בזמן אמת",
                      "גישה מלאה לכל נתוני הקהל"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#B3F5A0' }} />
                        <p className="text-[#1A0A2E] text-right">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-24 bg-[#1A0A2E]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                תועלות <span className="text-[#E8A0FF]">עיקריות</span>
              </h2>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { icon: Shield, text: "שליטה מלאה על תהליך המכירה", color: "#9B59B6" },
                  { icon: Ticket, text: "מיתוג אישי על כרטיסים וקבלות", color: "#E8A0FF" },
                  { icon: MapPin, text: "מפת אולם אינטראקטיבית", color: "#B3F5A0" },
                  { icon: MousePointerClick, text: "חווית רכישה נוחה ללקוחות", color: "#9B59B6" },
                  { icon: Theater, text: "ניהול אולמות והופעות חכם", color: "#E8A0FF" },
                  { icon: LayoutDashboard, text: "דשבורד מתקדם לכל הופעה", color: "#B3F5A0" },
                  { icon: Receipt, text: "קבלות וכרטיסים דיגיטליים", color: "#9B59B6" },
                  { icon: BarChart3, text: "דוחות וסטטיסטיקות בזמן אמת", color: "#E8A0FF" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#E8A0FF]/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-white font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#1A0A2E]">
              איך זה עובד?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {[
                {
                  icon: Package,
                  title: "קבלת המערכת",
                  description: "המערכת מותאמת אישית לאולמות ולסגנון שלכם ומוכנה לשימוש.",
                  color: "#9B59B6"
                },
                {
                  icon: Video,
                  title: "הדרכה מלאה",
                  description: "סרטוני הדרכה מפורטים + ליווי אישי להתחלה מהירה.",
                  color: "#B3F5A0"
                },
                {
                  icon: Mail,
                  title: "חיבור הסליקה",
                  description: "חיבור למסופי הסליקה שלכם להפקדה ישירה לחשבון.",
                  color: "#E8A0FF"
                },
                {
                  icon: Gift,
                  title: "התחילו למכור!",
                  description: "פרסמו את ההופעות והתחילו לקבל הזמנות מיד.",
                  color: "#6B4D7A"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="bg-[#1A0A2E] rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-105"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                asChild 
                size="lg" 
                className="text-xl px-16 py-8 font-bold shadow-xl transition-all duration-300 hover:scale-105 bg-[#9B59B6] hover:bg-[#B370CF]"
              >
                <a href="#contact">רוצה להתחיל עכשיו!</a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-[#1A0A2E]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white">
              שאלות נפוצות
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "האם אפשר לנהל כמה אולמות במקביל?",
                  a: "בהחלט! המערכת תומכת בניהול מספר אולמות עם מפות מושבים שונות לכל אולם. אתם יכולים לנהל כמה אירועים ככל שתרצו.",
                  color: "#9B59B6"
                },
                {
                  q: "איך עובד מנגנון בחירת המושבים?",
                  a: "הלקוח רואה מפת אולם אינטראקטיבית, יכול לראות אילו מושבים פנויים ולבחור בדיוק איפה הוא רוצה לשבת. המערכת נועלת את המושב ברגע הבחירה כדי למנוע מכירה כפולה.",
                  color: "#E8A0FF"
                },
                {
                  q: "האם יש עמלות על כל מכירה?",
                  a: "לא! אין עמלות על מכירות. אתם משלמים רק עבור המערכת עצמה ועמלות הסליקה הרגילות של מסוף התשלומים שלכם.",
                  color: "#B3F5A0"
                },
                {
                  q: "האם אפשר למתג את הכרטיסים והקבלות?",
                  a: "כן! כל כרטיס וכל קבלה יצאו עם הלוגו שלכם, הצבעים שלכם והעיצוב שלכם. אתם שולטים במראה לחלוטין.",
                  color: "#6B4D7A"
                },
                {
                  q: "מה קורה אם לקוח רוצה לבטל או להחליף כרטיס?",
                  a: "יש לכם שליטה מלאה על מדיניות הביטולים. אתם יכולים לבטל או להחליף כרטיסים בקלות מתוך הדשבורד.",
                  color: "#9B59B6"
                },
                {
                  q: "האם המערכת מתאימה גם להופעות קטנות?",
                  a: "בהחלט! המערכת מתאימה לכל גודל – מהופעה קטנה של 50 מושבים ועד אולמות ענק עם אלפי מקומות.",
                  color: "#E8A0FF"
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: `${item.color}10`,
                    borderRight: `4px solid ${item.color}`
                  }}
                >
                  <AccordionTrigger className="px-6 py-4 text-right text-lg font-semibold text-white hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-right text-[#D4B8E8] leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-[#2D1045] to-[#4A1D6F]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
              רוצים להתחיל למכור כרטיסים?
            </h2>
            <p className="text-xl text-center text-[#D4B8E8] mb-12">
              השאירו פרטים ונחזור אליכם תוך 24 שעות!
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-white">שם מלא</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="הכנס את שמך" 
                    className="w-full h-12 bg-white/10 border-[#D4B8E8]/20 text-white placeholder:text-[#D4B8E8]/60 focus:border-[#E8A0FF] focus:ring-[#E8A0FF]" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-white">אימייל</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com" 
                    className="w-full h-12 bg-white/10 border-[#D4B8E8]/20 text-white placeholder:text-[#D4B8E8]/60 focus:border-[#E8A0FF] focus:ring-[#E8A0FF]" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold text-white">טלפון</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="050-1234567" 
                    className="w-full h-12 bg-white/10 border-[#D4B8E8]/20 text-white placeholder:text-[#D4B8E8]/60 focus:border-[#E8A0FF] focus:ring-[#E8A0FF]" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-white">ספרו לנו על האירועים שלכם (אופציונלי)</label>
                <Textarea 
                  id="message" 
                  placeholder="כמה הופעות בשנה? גודל אולמות? סוג האירועים?" 
                  className="w-full bg-white/10 border-[#D4B8E8]/20 text-white placeholder:text-[#D4B8E8]/60 focus:border-[#E8A0FF] focus:ring-[#E8A0FF] min-h-32" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full py-6 text-lg font-bold transition-all duration-300 hover:scale-105 bg-[#9B59B6] hover:bg-[#B370CF]"
              >
                שלח פנייה
              </Button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ProductTickets;
