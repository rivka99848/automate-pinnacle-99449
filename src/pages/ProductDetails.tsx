import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  
  const features = [
    "ניהול לקוחות ולידים בממשק אחד",
    "ניהול פרויקטים ומשימות",
    "מעקב אחרי כל שיחה ועסקה",
    "אוטומציות חכמות למשימות",
    "דשבורד עם תובנות בזמן אמת",
    "אינטגרציה עם יומן גוגל ו-Email",
    "שעתיים התאמה כלולים",
  ];

  const handleCRMClick = async () => {
    try {
      // Send to webhook
      await fetch("https://n8n.chatnaki.co.il/webhook/crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          action: "crm_interest",
          page: "product_details",
          timestamp: new Date().toISOString()
        }),
      });
      
      // Navigate to contact page
      navigate("/contact");
    } catch (error) {
      // Still navigate even if webhook fails
      navigate("/contact");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">מערכת CRM מלאה</span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              ניהול פרויקטים, משימות, לקוחות וכספים במקום אחד
            </p>
          </div>

          {/* CRM Product */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-card p-12 rounded-3xl mb-12">
              <h2 className="text-4xl font-bold mb-6 text-center">
                מערכת CRM - ניהול פרויקטים ומשימות לקוחות וכספים
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">תכונות עיקריות:</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-darker p-8 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="text-muted-foreground line-through text-2xl mb-2">
                      8,000 ש"ח
                    </div>
                    <div className="text-5xl font-bold text-secondary mb-2">
                      2,400 ש"ח
                    </div>
                    <p className="text-muted-foreground">תשלום חד-פעמי בלבד</p>
                  </div>
                  
                  <p className="text-center text-lg mb-6">
                    זו השקעה חד-פעמית שתחסוך לכם שעות של עבודה, תמנע אובדן לידים ולקוחות 
                    ותיתן לכם שליטה מלאה על העסק
                  </p>

                  <Button 
                    onClick={handleCRMClick}
                    size="lg" 
                    className="w-full text-lg py-6 rounded-full"
                  >
                    רוצה להתחיל לעבוד חכם
                  </Button>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-destructive">מה יש לכם היום?</h3>
                  <ul className="space-y-3">
                    <li className="text-lg">❌ ניהול מבולגן ומסורבל</li>
                    <li className="text-muted-foreground">אלפי שורות בטבלה, קשה למצוא נתונים, כל המידע מפוזר</li>
                    <li className="text-lg">❌ אין תזכורות אוטומטיות</li>
                    <li className="text-muted-foreground">אתם שוכחים משימות, מפספסים לידים ולקוחות נעלמים</li>
                    <li className="text-lg">❌ תיעוד ידני ומתיש</li>
                    <li className="text-muted-foreground">אתם כל הזמן צריכים לעדכן נתונים, להוסיף נוסחאות ולוודא שהכול עובד</li>
                    <li className="text-lg">❌ בלגן בניהול לקוחות</li>
                    <li className="text-muted-foreground">אין היסטוריה מסודרת, כל מידע מפוזר בקבצים שונים</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">עם המערכת שלנו:</h3>
                  <ul className="space-y-3">
                    <li className="text-lg">✅ הכול במקום אחד</li>
                    <li className="text-muted-foreground">מערכת חכמה שמארגנת לכם את הלידים, הלקוחות והמשימות בצורה ברורה</li>
                    <li className="text-lg">✅ פולואפים ותזכורות אוטומטיות</li>
                    <li className="text-muted-foreground">המערכת דואגת שלא תפספסו אף ליד או משימה</li>
                    <li className="text-lg">✅ הכול קורה לבד</li>
                    <li className="text-muted-foreground">אוטומציות מתקדמות דואגות לניהול חכם בלי שתצטרכו להתעסק בזה</li>
                    <li className="text-lg">✅ כרטיס לקוח מסודר</li>
                    <li className="text-muted-foreground">כל המידע על כל לקוח מרוכז במקום אחד: שיחות, משימות, תשלומים ועוד</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleCRMClick}
                  size="lg" 
                  className="text-lg px-12 py-6 rounded-full"
                >
                  הגיע הזמן לעשות סדר בעסק שלכם
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

export default ProductDetails;
