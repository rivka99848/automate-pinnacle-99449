import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Bot, Zap, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "crm",
      number: "01",
      icon: Database,
      title: "מערכת CRM מותאמת אישית",
      description: "מערכת CRM שמסדרת את כל המידע על הלקוחות, העסקאות והתהליכים במקום אחד. מערכת שעובדת בדיוק איך שאתם צריכים - ללא פשרות.",
      features: [
        "ניהול לקוחות ולידים בממשק אחד",
        "מעקב אחרי כל שיחה ועסקה",
        "דשבורד עם תובנות בזמן אמת",
        "אינטגרציה עם Gmail, Calendar ו-WhatsApp"
      ],
      colorFrom: "from-brand-blue/10",
      colorTo: "to-brand-cyan/10",
      iconColor: "text-brand-blue",
      badgeColor: "bg-brand-blue/10 text-brand-blue",
      url: "/services/crm"
    },
    {
      id: "bots",
      number: "02",
      icon: Bot,
      title: "בוטים חכמים למענה אוטומטי",
      description: "מענה אוטומטי ללקוחות 24/7, קבלת הזמנות ושאילתות, אינטגרציה עם מערכות קיימות ודוחות על כל השיחות. הבוטים שלנו עובדים בלי הפסקה.",
      features: [
        "זמינות 24/7 ללקוחות",
        "מענה מיידי לשאלות נפוצות",
        "קבלת הזמנות והפניות אוטומטית",
        "אינטגרציה עם WhatsApp, אתרים ו-AI"
      ],
      colorFrom: "from-brand-green/10",
      colorTo: "to-brand-cyan/10",
      iconColor: "text-brand-green",
      badgeColor: "bg-brand-green/10 text-brand-green",
      url: "/services/bots"
    },
    {
      id: "automation",
      number: "03",
      icon: Zap,
      title: "אוטומציות עסקיות חכמות",
      description: "אוטומציה חכמה של תהליכים עסקיים שחוסכת זמן וממזערת טעויות אנוש. המערכת מטפלת בכל המשימות החוזרות במקומך - אתם פשוט תהנו מהתוצאות.",
      features: [
        "אוטומציה של תהליכי עבודה מורכבים",
        "חיבור בין מערכות שונות",
        "חסכון של עד 70% בזמן ביצוע משימות",
        "ניטור וביצוע אוטומטי של משימות"
      ],
      colorFrom: "from-brand-purple/10",
      colorTo: "to-brand-cyan/10",
      iconColor: "text-brand-purple",
      badgeColor: "bg-brand-purple/10 text-brand-purple",
      url: "/services/automation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Dark Background */}
      <section className="bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">השירותים שלנו</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            פתרונות אוטומציה וניהול חכמים שיקלו על העסק שלכם ויחסכו לכם זמן וכסף
          </p>
        </div>
      </section>

      {/* Services Section - Light Background */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.id}
                  className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-1 md:order-2"}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${service.badgeColor} rounded-full mb-4`}>
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                      <span className="text-sm font-semibold">{service.number} • {service.title.split(' ')[1]}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full ${service.badgeColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className={`w-4 h-4 ${service.iconColor}`} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={service.url}>
                      <Button size="lg" className="rounded-full">
                        לפרטים מלאים
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Icon/Visual */}
                  <div className={isEven ? "order-2" : "order-2 md:order-1"}>
                    <div className={`bg-gradient-to-br ${service.colorFrom} ${service.colorTo} rounded-3xl p-16 flex items-center justify-center hover:scale-105 transition-transform duration-500`}>
                      <Icon className={`w-48 h-48 ${service.iconColor} opacity-30`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section - Light Gray Background */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              איך זה עובד?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: "1", title: "פגישת ייעוץ", desc: "נפגשים ומבינים את הצרכים שלכם" },
                { num: "2", title: "תכנון מותאם", desc: "מעצבים את הפתרון בדיוק בשבילכם" },
                { num: "3", title: "פיתוח ובנייה", desc: "בונים ומחברים למערכות הקיימות" },
                { num: "4", title: "ליווי ותמיכה", desc: "מלווים אתכם כל הדרך" }
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                    <span className="text-2xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Background */}
      <section className="bg-gradient-to-br from-background to-brand-darker py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">מוכנים להתחיל?</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            בואו נדבר על איך אנחנו יכולים לעזור לעסק שלכם לצמוח ולהשתפר
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full text-lg px-8 py-6">
              קבע פגישת ייעוץ חינם
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
