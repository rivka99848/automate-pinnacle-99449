import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

const Contact = () => {
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
      
      toast.success("תודה! ניצור איתך קשר בהקדם");
      setFormData({
        name: "",
        phone: "",
        email: "",
        business: "",
        message: "",
        newsletter: false,
      });
    } catch (error) {
      toast.error("אירעה שגיאה, אנא נסה שוב");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Contact Form */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-3xl p-6 md:p-12 relative shadow-2xl border border-border/50">
              {/* כוכבית מעוצבת */}
              <div
                className="absolute top-4 right-4 md:top-6 md:right-6"
                style={{
                  animation: "scale-in 0.8s ease-out forwards, spin 0.8s ease-out forwards",
                }}
              >
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-[#8FADFF] drop-shadow-[0_0_20px_rgba(143,173,255,0.6)]" />
              </div>

              {/* כותרת */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-reisinger font-bold text-center mb-8 md:mb-12 text-foreground animate-fade-in pr-12 md:pr-0">
                הגיע הזמן לעשות סדר בעסק שלכם<span className="text-[#8FADFF]">{"<<"}</span>
              </h1>

              {/* טופס */}
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
                      תחום העיסוק
                    </Label>
                    <Input
                      id="business"
                      type="text"
                      placeholder="למשל: מסעדה, מכירות"
                      value={formData.business}
                      onChange={(e) =>
                        setFormData({ ...formData, business: e.target.value })
                      }
                      required
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
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                או שלח לנו הודעה ישירות בוואטסאפ
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  פתח שיחה בוואטסאפ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
