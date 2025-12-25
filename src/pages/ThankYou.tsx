import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <section className="bg-gradient-to-b from-background to-brand-darker py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* אייקון הצלחה */}
              <div className="mb-8 animate-fade-in">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
                </div>
              </div>

              {/* כותרת */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                תודה על פנייתך!
              </h1>

              {/* תיאור */}
              <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                קיבלנו את ההודעה שלך בהצלחה
              </p>
              
              <p className="text-lg text-foreground/70 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                נציג מצוות SmartBiz ייצור איתך קשר בהקדם האפשרי.
                <br />
                בדרך כלל אנחנו מגיבים תוך 24 שעות.
              </p>

              {/* כפתורים */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/">
                    <Home className="w-5 h-5 ml-2" />
                    חזרה לדף הבית
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full"
                  onClick={() => window.open('https://wa.me/972501234567', '_blank')}
                >
                  <Phone className="w-5 h-5 ml-2" />
                  צור קשר בוואטסאפ
                </Button>
              </div>

              {/* מידע נוסף */}
              <div className="mt-16 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h2 className="text-xl font-semibold mb-4">בינתיים, כדאי לבדוק:</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/projects" className="text-primary hover:underline">
                    הפרויקטים שלנו →
                  </Link>
                  <Link to="/services" className="text-primary hover:underline">
                    השירותים שלנו →
                  </Link>
                  <Link to="/products" className="text-primary hover:underline">
                    המוצרים שלנו →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
