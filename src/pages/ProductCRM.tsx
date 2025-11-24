import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  TrendingUp, Users, Clock, Target, CheckCircle2, XCircle,
  Sparkles, Zap, BarChart3, Calendar, Mail, Database,
  FileText, Bell, Globe, RefreshCw, MessageSquare, FormInput,
  ClipboardList
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
                <span className="font-bold text-white">הסוף לעבודה עם טבלאות מורכבות ומערכות מרובות!</span>
              </p>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto border-2 border-[#8FADFF]/20 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/PcqIpmv66wM"
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

        {/* Problem Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#121F36]">
                למה להישאר מאחור כשהעסק שלכם<br />
                <span className="bg-gradient-to-l from-[#3E6AE5] to-[#6D94FF] bg-clip-text text-transparent">יכול לרוץ קדימה?</span>
              </h2>
              <p className="text-xl text-[#3D64A6]">
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
                  className="relative p-8 rounded-3xl bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})` }}
                >
                  <item.icon className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">{item.title}</h3>
                  <p className="text-[#3D64A6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-[#121F37]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
                איך המערכת שלנו תקל עליך?
              </h2>
              <p className="text-xl text-center text-[#C5D1E3] mb-16">
                מאפשרת לך לעסוק בעיקר בעשייה ולא באיך לנהל את המידע!
              </p>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { 
                    icon: Clock, 
                    title: "חסכון בזמן", 
                    desc: "יכולות האוטומציה של המערכת יחסכו זמן יקר כך שבקלות ובמחיר אטרקטיבי תוכלו לקבל בהירות ושליטה על תהליכים מורכבים שידחפו את העסק קדימה.",
                    bgColor: "#8FADFF",
                    iconColor: "#6D94FF"
                  },
                  { 
                    icon: Users, 
                    title: "פחות צורך בעובדים נוספים", 
                    desc: "מה שמזכירה או עוזר אדמיניסטרטיבי היו עושים – המערכת עושה עבורך, בלי עלות חודשית גבוהה.",
                    bgColor: "#D8FACF",
                    iconColor: "#B3F5A0"
                  },
                  { 
                    icon: Sparkles, 
                    title: "נוחות בלי מורכבות", 
                    desc: "אנחנו שמים סוף לעבודה עם טבלאות מורכבות ומערכות מרובות.",
                    bgColor: "#CDF3F7",
                    iconColor: "#B6EEF8"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="relative backdrop-blur-sm p-8 rounded-3xl hover:scale-105 transition-all duration-300"
                    style={{ 
                      backgroundColor: `${item.bgColor}20`,
                      border: `2px solid ${item.bgColor}30`
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl"
                        style={{ backgroundColor: item.iconColor }}
                      >
                        <item.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                      <p className="text-[#C5D1E3] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Scroll Cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-[#121F36]">
                מה יש במערכת?
              </h2>
              <p className="text-xl text-center text-[#3D64A6] mb-20">
                כל מה שאתם צריכים לניהול העסק במקום אחד
              </p>

              <div className="space-y-12">
                {[
                  { 
                    num: "01", 
                    title: "ניהול לידים ולקוחות", 
                    desc: "כל הנתונים שמורים ומאורגנים בכרטיס לקוח מסודר – שם, טלפון, מייל, סטטוס, תאריך יצירה וכל מה שצריך.",
                    bg: "#6D94FF",
                    icon: Database
                  },
                  { 
                    num: "02", 
                    title: "ניהול משימות ופרויקטים", 
                    desc: "תכנון, מעקב ותזכורות חכמות – כך שלא תפספסו שום משימה חשובה.",
                    bg: "#B6EEF8",
                    icon: ClipboardList
                  },
                  { 
                    num: "03", 
                    title: "ניהול הכנסות והוצאות", 
                    desc: "סטטיסטיקות חכמות שיעזרו לכם להבין איפה הכסף נכנס ויוצא ואיך לשפר את הרווחיות.",
                    bg: "#B3F5A0",
                    icon: TrendingUp
                  },
                  { 
                    num: "04", 
                    title: "פתיחה אוטומטית של כרטיסיית לקוח", 
                    desc: "ברגע שליד סוגר איתכם – המערכת פותחת כרטיס לקוח אוטומטית ושומרת את כל המידע.",
                    bg: "#99A3F0",
                    icon: FileText
                  },
                  { 
                    num: "05", 
                    title: "פולואפים אוטומטיים ללידים", 
                    desc: "כדי שלא יפלו לכם מהידיים – המערכת שולחת תזכורות ופולואפים אוטומטיים.",
                    bg: "#EDBB9E",
                    icon: Mail
                  },
                  { 
                    num: "06", 
                    title: "יומן משימות ותזכורות יומיות", 
                    desc: "תקבלו תזכורות ישירות למייל על כל המשימות שצריך לעשות היום.",
                    bg: "#3E6AE5",
                    icon: Calendar
                  },
                  { 
                    num: "07", 
                    title: "סנכרון יומן גוגל", 
                    desc: "כל המשימות שלכם מסונכרנות אוטומטית עם יומן גוגל – אז תמיד תדעו מה עומד לכם.",
                    bg: "#B6EEF8",
                    icon: RefreshCw
                  },
                  { 
                    num: "08", 
                    title: "תיעוד שיחות עם לידים ולקוחות", 
                    desc: "רשמו הערות, תיעדו שיחות ושמרו את כל המידע במקום אחד – שלא תפספסו שום פרט חשוב.",
                    bg: "#B3F5A0",
                    icon: MessageSquare
                  },
                  { 
                    num: "09", 
                    title: "סטטיסטיקות על ביצועי העסק", 
                    desc: "ראו בזמן אמת כמה לידים נכנסו, כמה עסקאות נסגרו, כמה כסף הרווחתם – הכל בפילוחים שונים.",
                    bg: "#99A3F0",
                    icon: BarChart3
                  },
                  { 
                    num: "10", 
                    title: "יצירת טופס למילוי אוטומטי ללידים", 
                    desc: "תוכלו ליצור טופס שלידים ימלאו ישירות, והמידע יכנס אוטומטית למערכת – גם מחוץ לשעות העבודה שלכם.",
                    bg: "#FEE1D1",
                    icon: FormInput
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="relative p-10 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
                    style={{ 
                      backgroundColor: `${feature.bg}15`,
                      borderRight: `6px solid ${feature.bg}`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div 
                        className="text-7xl md:text-8xl font-bold opacity-20 leading-none"
                        style={{ color: feature.bg }}
                      >
                        {feature.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <feature.icon 
                            className="w-10 h-10 flex-shrink-0 mt-1" 
                            style={{ color: feature.bg }}
                          />
                          <h3 className="text-2xl md:text-3xl font-bold text-[#121F36]">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-lg text-[#3D64A6] leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before Section */}
        <section className="py-24 bg-[#1D2F4F]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
                מה יש לכם היום?
              </h2>
              <p className="text-xl text-center text-[#C5D1E3] mb-12">
                רוב העסקים מתמודדים עם האתגרים האלה
              </p>

              <div className="space-y-6">
                {[
                  "ניהול מבולגן ומסורבל – אלפי שורות בטבלה, קשה למצוא נתונים, כל המידע מפוזר",
                  "אין תזכורות אוטומטיות – אתם שוכחים משימות, מפספסים לידים ולקוחות נעלמים",
                  "תיעוד ידני ומתיש – אתם כל הזמן צריכים לעדכן נתונים, להוסיף נוסחאות ולוודא שהכול עובד",
                  "בלגן בניהול לקוחות – אין היסטוריה מסודרת, כל מידע מפוזר בקבצים שונים"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl"
                    style={{ 
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      borderRight: '4px solid #EF4444'
                    }}
                  >
                    <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="text-lg text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* After Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#121F36]">
                עם המערכת שלנו:
              </h2>
              <p className="text-xl text-center text-[#3D64A6] mb-12">
                הפתרון לכל הבעיות שציינתם
              </p>

              <div className="space-y-6">
                {[
                  "הכול במקום אחד – כל המידע מאורגן ונגיש בכרטיס לקוח מסודר",
                  "תזכורות אוטומטיות – המערכת תזכיר לכם משימות ופעולות חשובות",
                  "אוטומציה חכמה – עדכונים אוטומטיים ללא צורך בתיעוד ידני",
                  "ניהול לקוחות מקצועי – היסטוריה מסודרת ומעקב קל ונוח"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl"
                    style={{ 
                      backgroundColor: '#B3F5A015',
                      borderRight: '4px solid #B3F5A0'
                    }}
                  >
                    <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#B3F5A0' }} />
                    <p className="text-lg text-[#121F36]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What You Will Have Section */}
        <section className="py-24 bg-[#EAEAEA]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#121F36]">
                מה יהיה לכם עם המערכת שלנו?
              </h2>
              <p className="text-xl text-center text-[#3D64A6] mb-12">
                התוצאות שתראו מיד
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Target, text: "חיסכון של שעות עבודה כל שבוע" },
                  { icon: TrendingUp, text: "יותר לידים שהופכים ללקוחות" },
                  { icon: Zap, text: "אוטומציות שעובדות בשבילכם 24/7" },
                  { icon: CheckCircle2, text: "סדר ושליטה מלאה על העסק" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#3E6AE5' }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-[#121F36]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 text-[#121F36]">
                כמה זה עולה?
              </h2>
              <p className="text-xl text-center text-[#3D64A6] mb-12 leading-relaxed">
                כשבניתי מערכת כזו ללקוחה, היא שילמה <span className="font-bold">8,000 ש״ח</span> – וזה היה כדאי לה פי כמה וכמה!
                <br />אבל אני רוצה שזה יהיה נגיש יותר, אז אני מציע לכם משהו מיוחד.
              </p>

              <div 
                className="relative p-12 rounded-3xl shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, #8FADFF05, #FFFFFF, #B6EEF805)`,
                  border: `4px solid #6D94FF30`,
                  boxShadow: `0 0 60px rgba(109, 148, 255, 0.2)`
                }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl">
                  מבצע מיוחד!
                </div>

                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <p className="text-2xl text-[#3D64A6] line-through">₪8,000 מחיר רגיל</p>
                    <div className="space-y-2">
                      <p className="text-6xl md:text-7xl font-bold" style={{ color: '#3E6AE5' }}>₪2,950</p>
                      <p className="text-xl text-[#3D64A6] font-semibold">תשלום חד-פעמי בלבד</p>
                    </div>
                    <p className="text-lg text-[#3D64A6] max-w-2xl mx-auto leading-relaxed">
                      וזה הכול! אין תשלומים חודשיים, אין עלויות נסתרות. המערכת שלכם – ואתם לא צריכים לשלם עוד שקל.
                    </p>
                  </div>

                  <div className="space-y-3 text-right max-w-md mx-auto py-6">
                    <p className="text-center font-bold text-xl text-[#121F36] mb-4">מה כלול במחיר?</p>
                    {[
                      "מערכת CRM מותאמת אישית לצרכים שלכם",
                      "כל 10 הפיצ'רים שראיתם למעלה",
                      "הטמעה והדרכה מלאה",
                      "תמיכה טכנית למשך חודש",
                      "אפשרות לשדרוגים עתידיים במחיר מוזל"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#B3F5A0' }} />
                        <span className="text-lg text-[#121F36]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <p className="text-2xl font-bold mb-6" style={{ color: '#3E6AE5' }}>
                      המבצע הזה תקף רק ל-5 הלקוחות הראשונים!
                    </p>
                    <Button 
                      asChild 
                      size="lg" 
                      className="text-xl px-16 py-8 font-bold shadow-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#3E6AE5' }}
                    >
                      <a href="#contact">רוצה לקבל את המבצע!</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-[#121F37]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white">
              שאלות נפוצות
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "מה ההבדל בין המערכת הזו לגוגל שיטס?",
                  a: "גוגל שיטס זה נהדר לניהול טבלאות פשוטות, אבל כשיש לכם עשרות לידים, עסקאות, משימות ותזכורות – זה הופך למסורבל ומבלבל. המערכת שלנו בנויה במיוחד לניהול עסק: יש בה אוטומציות, תזכורות, כרטיסי לקוח מסודרים, ויזואליזציות ברורות – הכל בממשק נוח ופשוט.",
                  color: "#6D94FF"
                },
                {
                  q: "אני משתמש/ת ברב מסר אבל מרגיש/ה שאני צריכה יותר מזה. איך המערכת שלך יכולה לעזור לי?",
                  a: "רב מסר זה כלי מצוין לתקשורת עם לקוחות בווטסאפ, אבל הוא לא נותן לכם ניהול מלא של העסק – אין בו ניהול משימות, עסקאות, פולואפים אוטומטיים או סטטיסטיקות מפורטות. המערכת שלנו משלימה את רב מסר ונותנת לכם שליטה מלאה על כל התהליכים.",
                  color: "#B6EEF8"
                },
                {
                  q: "האם אני צריך/ה ידע טכני כדי להשתמש במערכת?",
                  a: "בכלל לא! המערכת בנויה להיות פשוטה וידידותית. אני מלווה אתכם בהטמעה ובהדרכה – אז גם אם אתם לא טכנולוגים, תדעו בדיוק איך להשתמש בכל אחד מהכלים.",
                  color: "#B3F5A0"
                },
                {
                  q: "האם אפשר להתאים את המערכת לצרכים שלי?",
                  a: "בהחלט! המערכת נבנית במיוחד עבורכם – אני מתאים אותה לפי הצרכים של העסק שלכם, ככה שתקבלו בדיוק את מה שאתם צריכים.",
                  color: "#99A3F0"
                },
                {
                  q: "איך המערכת עוזרת לי להגדיל רווחים?",
                  a: "המערכת חוסכת לכם זמן (פחות ניהול ידני = יותר זמן לסגור עסקאות), מונעת מכם לאבד לידים (תזכורות ופולואפים אוטומטיים), ונותנת לכם שליטה על ההכנסות וההוצאות – ככה אתם יכולים לראות בדיוק איפה אתם מרוויחים ואיפה אתם מפסידים.",
                  color: "#EDBB9E"
                },
                {
                  q: "האם אפשר לעבוד עם צוות בתוך המערכת?",
                  a: "כן! אפשר להוסיף משתמשים נוספים ולנהל את העסק ביחד – כל אחד רואה את המידע שרלוונטי לו.",
                  color: "#6D94FF"
                },
                {
                  q: "האם זה שירות חודשי או חד-פעמי?",
                  a: "זה תשלום חד-פעמי! אתם משלמים פעם אחת, והמערכת שלכם לתמיד. אין תשלומים חודשיים (מלבד אחסון אם צריך, שזה לרוב עד 20 ש״ח לחודש).",
                  color: "#B6EEF8"
                },
                {
                  q: "אם אני לא רוצה שהאוטומציות יפעלו?",
                  a: "אפשר לכבות כל אוטומציה בקליק – אתם שולטים על הכול. אם אתם רוצים שהמערכת תזכיר לכם משימות אבל לא תשלח מיילים אוטומטיים, למשל – אין בעיה.",
                  color: "#B3F5A0"
                },
                {
                  q: "באיזה פלטפורמה המערכת בנויה?",
                  a: "המערכת בנויה על Airtable / מערכת מותאמת אישית (תלוי בצרכים שלכם), עם ממשק פשוט ונוח. אם אתם רוצים, אפשר גם לבנות משהו מותאם 100% לעסק שלכם.",
                  color: "#99A3F0"
                },
                {
                  q: "איך אפשר להצטרף למבצע?",
                  a: "פשוט לחצו על 'רוצה להתחיל לעבוד חכם' בתחתית הדף, מלאו את הפרטים, ואני אחזור אליכם תוך 24 שעות כדי לקבוע שיחה ולהתחיל לבנות את המערכת שלכם!",
                  color: "#EDBB9E"
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
                  <AccordionContent className="px-6 pb-4 text-right text-[#C5D1E3] leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-[#121F36] to-[#1D2F4F]">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
              רוצה להתחיל לעבוד חכם ולהרוויח יותר?
            </h2>
            <p className="text-xl text-center text-[#C5D1E3] mb-12">
              השאירו פרטים ונחזור אליכם תוך 24 שעות!
            </p>
            
            <div 
              className="backdrop-blur-md p-8 md:p-12 rounded-3xl"
              style={{ 
                backgroundColor: '#8FADFF05',
                border: '2px solid #6D94FF20'
              }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-semibold text-white">שם מלא</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="הכנס את שמך" 
                    className="w-full bg-white/10 border-[#C5D1E3]/20 text-white placeholder:text-[#C5D1E3]/60 focus:border-[#6D94FF] focus:ring-[#6D94FF]" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold text-white">אימייל</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@email.com" 
                    className="w-full bg-white/10 border-[#C5D1E3]/20 text-white placeholder:text-[#C5D1E3]/60 focus:border-[#6D94FF] focus:ring-[#6D94FF]" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-semibold text-white">טלפון</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="050-1234567" 
                    className="w-full bg-white/10 border-[#C5D1E3]/20 text-white placeholder:text-[#C5D1E3]/60 focus:border-[#6D94FF] focus:ring-[#6D94FF]" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-semibold text-white">הודעה (אופציונלי)</label>
                  <Textarea 
                    id="message" 
                    placeholder="ספרו לנו על העסק שלכם..." 
                    className="w-full bg-white/10 border-[#C5D1E3]/20 text-white placeholder:text-[#C5D1E3]/60 focus:border-[#6D94FF] focus:ring-[#6D94FF] min-h-32" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg font-bold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#B3F5A0', color: '#121F36' }}
                >
                  שלח פנייה
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-[#1D2F4F] via-[#121F36] to-[#121F37] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-l from-[#6D94FF] to-[#B6EEF8] bg-clip-text text-transparent">
                הגיע הזמן לעשות סדר בעסק שלכם
              </span>
            </h2>
            <p className="text-2xl text-[#C5D1E3] mb-8 max-w-3xl mx-auto leading-relaxed">
              תפסיקו לאבד זמן, לידים וכסף. התחילו לעבוד עם מערכת שתעשה את העבודה בשבילכם – 
              <br />ותיתן לכם יותר זמן פנוי, יותר לקוחות, ויותר רווחים.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-xl px-16 py-8 font-bold shadow-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#B3F5A0', color: '#121F36' }}
            >
              <a href="#contact">בואו נתחיל!</a>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ProductCRM;
