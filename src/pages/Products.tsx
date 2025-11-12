import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Database } from "lucide-react";

const Products = () => {
  const keyFeatures = [
    "ניהול לקוחות ולידים בממשק אחד",
    "ניהול פרויקטים ומשימות",
    "אוטומציות חכמות למשימות",
    "דשבורד עם תובנות בזמן אמת",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">המוצרים שלנו</span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              פתרונות מוכנים שיקלו עליכם את הניהול
            </p>
          </div>

          {/* CRM Product Summary */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-3xl hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <Database className="w-12 h-12 text-brand-blue" />
                <h2 className="text-3xl font-bold">
                  מערכת CRM - ניהול מלא לעסק שלכם
                </h2>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8">
                מערכת ניהול לקוחות מתקדמת שמארגנת את כל הפרויקטים, המשימות, הלקוחות והכספים 
                במקום אחד. פתרון מלא שיחסוך לכם שעות של עבודה ויתן לכם שליטה מלאה על העסק.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">תכונות עיקריות:</h3>
                  <ul className="space-y-3">
                    {keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-darker p-6 rounded-2xl flex flex-col justify-center">
                  <div className="text-center mb-4">
                    <div className="text-muted-foreground line-through text-xl mb-1">
                      8,000 ש"ח
                    </div>
                    <div className="text-4xl font-bold text-secondary mb-1">
                      2,400 ש"ח
                    </div>
                    <p className="text-sm text-muted-foreground">תשלום חד-פעמי</p>
                  </div>
                  
                  <p className="text-center text-sm mb-4">
                    השקעה חד-פעמית שתחסוך שעות של עבודה
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1 text-lg py-6 rounded-full">
                  <Link to="/product-details">לפרטים נוספים</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 text-lg py-6 rounded-full">
                  <Link to="/contact">צור קשר</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
