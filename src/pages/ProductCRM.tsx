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

        {/* Features Grid - Bento Box */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-[#121F36]">
                הגיע הזמן לעבוד בצורה חכמה ויעילה<br />
                <span className="bg-gradient-to-l from-[#3E6AE5] to-[#6D94FF] bg-clip-text text-transparent">והכל במערכת אחת!</span>
              </h2>
              <p className="text-xl text-center text-[#3D64A6] mb-16">
                10 פיצ'רים שישנו לכם את העסק
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Large Card 1 - Database */}
                <div 
                  className="md:col-span-2 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #8FADFF10, #6D94FF10)`,
                    borderRight: `4px solid #6D94FF`
                  }}
                >
                  <Database className="w-16 h-16 mb-4" style={{ color: '#6D94FF' }} />
                  <h3 className="text-3xl font-bold mb-3 text-[#121F36]">ניהול לידים ולקוחות</h3>
                  <p className="text-[#3D64A6] text-lg">כל הנתונים שמורים ומאורגנים בכרטיס לקוח מסודר</p>
                </div>

                {/* ClipboardList */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #B6EEF810, #CDF3F710)`,
                    borderRight: `4px solid #B6EEF8`
                  }}
                >
                  <ClipboardList className="w-12 h-12 mb-3" style={{ color: '#B6EEF8' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">ניהול משימות ופרויקטים</h3>
                  <p className="text-[#3D64A6]">תכנון, מעקב ותזכורות חכמות</p>
                </div>

                {/* TrendingUp */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #B3F5A010, #D8FACF10)`,
                    borderRight: `4px solid #B3F5A0`
                  }}
                >
                  <TrendingUp className="w-12 h-12 mb-3" style={{ color: '#B3F5A0' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">ניהול הכנסות והוצאות</h3>
                  <p className="text-[#3D64A6]">סטטיסטיקות חכמות שיעזרו לכם</p>
                </div>

                {/* FileText */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #99A3F010, #99A3F005)`,
                    borderRight: `4px solid #99A3F0`
                  }}
                >
                  <FileText className="w-12 h-12 mb-3" style={{ color: '#99A3F0' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">פתיחה אוטומטית של כרטיסיית לקוח</h3>
                  <p className="text-[#3D64A6]">ברגע שליד סוגר איתכם</p>
                </div>

                {/* Large Card 2 - Mail */}
                <div 
                  className="md:col-span-2 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #EDBB9E10, #FEE1D110)`,
                    borderRight: `4px solid #EDBB9E`
                  }}
                >
                  <Mail className="w-14 h-14 mb-4" style={{ color: '#EDBB9E' }} />
                  <h3 className="text-2xl font-bold mb-3 text-[#121F36]">פולואפים אוטומטיים ללידים</h3>
                  <p className="text-[#3D64A6] text-lg">כדי שלא יפלו לכם מהידיים</p>
                </div>

                {/* Calendar */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #3E6AE510, #6D94FF10)`,
                    borderRight: `4px solid #3E6AE5`
                  }}
                >
                  <Calendar className="w-12 h-12 mb-3" style={{ color: '#3E6AE5' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">יומן משימות ותזכורות</h3>
                  <p className="text-[#3D64A6]">תקבלו תזכורות ישירות למייל</p>
                </div>

                {/* RefreshCw */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #CDF3F710, #FFFFFF)`,
                    borderRight: `4px solid #B6EEF8`
                  }}
                >
                  <RefreshCw className="w-12 h-12 mb-3" style={{ color: '#B6EEF8' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">סנכרון יומן גוגל</h3>
                  <p className="text-[#3D64A6]">המשימות מסונכרנות אוטומטי</p>
                </div>

                {/* MessageSquare */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #D8FACF10, #FFFFFF)`,
                    borderRight: `4px solid #B3F5A0`
                  }}
                >
                  <MessageSquare className="w-12 h-12 mb-3" style={{ color: '#B3F5A0' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">תיעוד שיחות</h3>
                  <p className="text-[#3D64A6]">שלא תפספסו שום פרט חשוב</p>
                </div>

                {/* BarChart3 */}
                <div 
                  className="p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #99A3F010, #FFFFFF)`,
                    borderRight: `4px solid #99A3F0`
                  }}
                >
                  <BarChart3 className="w-12 h-12 mb-3" style={{ color: '#99A3F0' }} />
                  <h3 className="text-xl font-bold mb-2 text-[#121F36]">סטטיסטיקות ביצועים</h3>
                  <p className="text-[#3D64A6]">פילוחים שונים בזמן אמת</p>
                </div>

                {/* Large Card 3 - FormInput */}
                <div 
                  className="md:col-span-2 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: `linear-gradient(135deg, #FEE1D110, #FFFFFF)`,
                    borderRight: `4px solid #EDBB9E`
                  }}
                >
                  <FormInput className="w-14 h-14 mb-4" style={{ color: '#EDBB9E' }} />
                  <h3 className="text-2xl font-bold mb-3 text-[#121F36]">טופס אוטומטי ללידים</h3>
                  <p className="text-[#3D64A6] text-lg">להכניס פנויות מחוץ לשעות</p>
                </div>
              </div>

              <div className="text-center mt-16">
                <p className="text-2xl font-bold bg-gradient-to-l from-[#3E6AE5] to-[#6D94FF] bg-clip-text text-transparent mb-4">
                  אל תישארו בעבר – העתיד כבר כאן!
                </p>
                <p className="text-lg text-[#3D64A6]">
                  מעכשיו כל ליד שנכנס למערכת, יקבל הודעת מייל אישית
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-24 bg-[#1D2F4F]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
                מה יש לכם היום vs. עם המערכת שלנו
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Before */}
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10">
                    ❌
                  </div>
                  <div 
                    className="backdrop-blur-sm p-8 rounded-3xl space-y-6"
                    style={{ 
                      backgroundColor: 'rgba(127, 29, 29, 0.2)',
                      border: '2px solid rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    <h3 className="text-3xl font-bold mb-6 text-white">מה יש לכם היום?</h3>
                    
                    <div className="space-y-4">
                      {[
                        { title: "ניהול מבולגן ומסורבל", desc: "אלפי שורות בטבלה, קשה למצוא נתונים, כל המידע מפוזר" },
                        { title: "אין תזכורות אוטומטיות", desc: "אתם שוכחים משימות, מפספסים לידים ולקוחות נעלמים" },
                        { title: "תיעוד ידני ומתיש", desc: "אתם כל הזמן צריכים לעדכן נתונים, להוסיף נוסחאות ולוודא שהכול עובד" },
                        { title: "בלגן בניהול לקוחות", desc: "אין היסטוריה מסודרת, כל מידע מפוזר בקבצים שונים" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                            <p className="text-[#C5D1E3]">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div 
                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl z-10"
                    style={{ backgroundColor: '#B3F5A0' }}
                  >
                    ✓
                  </div>
                  <div 
                    className="backdrop-blur-sm p-8 rounded-3xl shadow-2xl space-y-6"
                    style={{ 
                      backgroundColor: '#D8FACF10',
                      border: '2px solid #B3F5A030'
                    }}
                  >
                    <h3 className="text-3xl font-bold mb-6 text-white">עם המערכת שלנו:</h3>
                    
                    <div className="space-y-4">
                      {[
                        { title: "הכול במקום אחד", desc: "כל המידע מאורגן ונגיש בכרטיס לקוח מסודר" },
                        { title: "תזכורות אוטומטיות", desc: "המערכת תזכיר לכם משימות ופעולות חשובות" },
                        { title: "אוטומציה חכמה", desc: "עדכונים אוטומטיים ללא צורך בתיעוד ידני" },
                        { title: "ניהול לקוחות מקצועי", desc: "היסטוריה מסודרת ומעקב קל ונוח" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#B3F5A0' }} />
                          <div>
                            <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                            <p className="text-[#C5D1E3]">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#121F36]">
                מבצע מיוחד – <span className="bg-gradient-to-l from-[#3E6AE5] to-[#6D94FF] bg-clip-text text-transparent">רק עכשיו!</span>
              </h2>

              <div 
                className="relative p-12 rounded-3xl shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, #8FADFF05, #FFFFFF, #B6EEF805)`,
                  border: `4px solid #6D94FF30`,
                  boxShadow: `0 0 60px rgba(109, 148, 255, 0.2)`
                }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl">
                  מבצע מוגבל!
                </div>

                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <p className="text-2xl text-[#3D64A6] line-through">₪15,000 מחיר רגיל</p>
                    <p className="text-7xl font-bold" style={{ color: '#3E6AE5' }}>₪7,500</p>
                    <p className="text-xl text-[#3D64A6]">חד-פעמי + תחזוקה חודשית</p>
                  </div>

                  <div className="space-y-3 text-right max-w-md mx-auto py-8">
                    {[
                      "מערכת CRM מותאמת אישית",
                      "כל הפיצ'רים שצריכים לכם",
                      "הטמעה והדרכה מלאה",
                      "תמיכה טכנית מתמשכת",
                      "עדכונים ושיפורים"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#B3F5A0' }} />
                        <span className="text-lg text-[#121F36]">{item}</span>
                      </div>
                    ))}
                  </div>

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
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-[#EAEAEA]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-[#121F36]">
              שאלות נפוצות
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "איך מתחילים להשתמש במערכת?",
                  a: "פשוט מאוד! פנו אלינו ונעזור לכם להגדיר את המערכת לפי הצרכים שלכם.",
                  color: "#6D94FF",
                  bg: "#8FADFF"
                },
                {
                  q: "האם יש תקופת ניסיון?",
                  a: "כן, יש תקופת ניסיון של 14 ימים ללא התחייבות.",
                  color: "#B6EEF8",
                  bg: "#CDF3F7"
                },
                {
                  q: "האם המערכת מתאימה לעסקים קטנים?",
                  a: "בהחלט! המערכת גמישה ומתאימה לעסקים בכל הגדלים.",
                  color: "#B3F5A0",
                  bg: "#D8FACF"
                },
                {
                  q: "איך מתבצע הסנכרון עם יומן גוגל?",
                  a: "הסנכרון מתבצע אוטומטית ברקע, כך שכל המשימות שלכם מתעדכנות בזמן אמת.",
                  color: "#99A3F0",
                  bg: "#99A3F0"
                },
                {
                  q: "כמה זמן לוקח ההטמעה?",
                  a: "תהליך ההטמעה לוקח בין שבוע לשבועיים, תלוי במורכבות העסק שלכם.",
                  color: "#EDBB9E",
                  bg: "#FEE1D1"
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundColor: `${item.bg}05`,
                    borderRight: `4px solid ${item.color}`
                  }}
                >
                  <AccordionTrigger className="px-6 py-4 text-right text-lg font-semibold text-[#121F36] hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-right text-[#3D64A6]">
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
              רוצה להתחיל לעבוד חכם?
            </h2>
            <p className="text-xl text-center text-[#C5D1E3] mb-12">
              השאירו פרטים ונחזור אליכם בהקדם!
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
                תפסיקו לבזבז זמן על ניהול ידני
              </span>
            </h2>
            <p className="text-2xl text-[#C5D1E3] mb-8 max-w-3xl mx-auto">
              התחילו לעבוד חכם עם מערכת CRM שתשנה לכם את העסק!
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
