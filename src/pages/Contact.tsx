import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to webhook
      await fetch("https://n8n.chatnaki.co.il/webhook/website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      // Navigate to thank you page
      navigate("/thank-you");
    } catch (error) {
      toast.error("אירעה שגיאה, אנא נסה שוב");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <section className="bg-gradient-to-b from-background to-brand-darker py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                מוכנים להתחיל?
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                בואו נדבר על איך אנחנו יכולים לעזור לעסק שלכם
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* טופס ישירות על הרקע */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Grid של 4 שדות */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* שם מלא */}
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <Label htmlFor="name" className="text-sm md:text-base">
                      שם מלא
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="הכנס שם מלא"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  {/* מספר טלפון */}
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <Label htmlFor="phone" className="text-sm md:text-base">
                      מספר טלפון
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="050-1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  {/* אימייל */}
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <Label htmlFor="email" className="text-sm md:text-base">
                      אימייל
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  {/* תחום עיסוק */}
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    <Label htmlFor="business" className="text-sm md:text-base">
                      תחום העיסוק (אופציונלי)
                    </Label>
                    <Input
                      id="business"
                      type="text"
                      placeholder="למשל: מסעדה, מכירות"
                      value={formData.business}
                      onChange={(e) =>
                        setFormData({ ...formData, business: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                {/* שדה הודעה */}
                <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <Label htmlFor="message" className="text-sm md:text-base">
                    הודעה (אופציונלי)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="ספר/י לנו עוד על הצרכים שלך..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="min-h-[120px]"
                  />
                </div>

                {/* Checkbox לדיוורים */}
                <div
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked as boolean })
                    }
                  />
                  <Label
                    htmlFor="newsletter"
                    className="text-sm md:text-base cursor-pointer"
                  >
                    אני מאשר/ת קבלת דיוורים ועדכונים
                  </Label>
                </div>

                {/* כפתור שליחה */}
                <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
                  <Button
                    type="submit"
                    className="w-full h-14 md:h-16 text-base md:text-lg font-bold rounded-full bg-[#4A90E2] hover:bg-[#357ABD] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    רוצה להתחיל לעבוד חכם ולהרוויח יותר
                  </Button>
                </div>
              </form>

              {/* WhatsApp Alternative */}
              <div className="mt-12 text-center">
                <p className="text-lg text-foreground/80 mb-4">או שלח לנו הודעה ישירות בוואטסאפ</p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => window.open('https://wa.me/972501234567', '_blank')}
                >
                  פתח שיחה בוואטסאפ
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
