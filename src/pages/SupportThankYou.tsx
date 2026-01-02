import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Plus, List, MessageCircle } from "lucide-react";

const SupportThankYou = () => {
  const whatsappNumber = "972543133755";
  const whatsappMessage = encodeURIComponent("שלום, פתחתי פנייה ואשמח לקבל מענה מהיר");

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              הפנייה נשלחה בהצלחה!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-2">
              קיבלנו את הפנייה שלך ונציג יחזור אליך בהקדם.
            </p>
            <p className="text-muted-foreground">
              ניתן לעקוב אחרי הפנייה דרך דף "הפניות שלי"
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/support/my-tickets" className="block">
              <Button variant="default" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                <List className="w-5 h-5 ml-2" />
                צפה בפניות שלי
              </Button>
            </Link>

            <Link to="/support" className="block">
              <Button variant="outline" className="w-full h-12 text-lg">
                <Plus className="w-5 h-5 ml-2" />
                פתח פנייה נוספת
              </Button>
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="secondary" className="w-full h-12 text-lg">
                <MessageCircle className="w-5 h-5 ml-2" />
                פתח צ'אט בוואטסאפ
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              זמן מענה ממוצע: עד 24 שעות בימי עבודה
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportThankYou;
