import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    business: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://n8n.chatnaki.co.il/webhook/website",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            business: formData.business,
            newsletter: formData.newsletter,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "הפנייה נשלחה בהצלחה!",
          description: "ניצור איתך קשר בהקדם",
        });
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          business: "",
          newsletter: false,
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "שגיאה בשליחה",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-background to-brand-darker py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* טופס ישירות על הרקע */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid של 4 שדות */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* שם מלא */}
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Label htmlFor="fullName" className="text-sm md:text-base">
                  שם מלא
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="הכנס שם מלא"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
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

            {/* Checkbox לדיוורים */}
            <div
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
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
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 md:h-16 text-base md:text-lg font-bold rounded-full bg-[#4A90E2] hover:bg-[#357ABD] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? "שולח..." : "רוצה להתחיל לעבוד חכם ולהרוויח יותר"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
