import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Phone, Mail, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ButtonColor = "secondary" | "blue" | "pink" | "purple" | "teal" | "orange";

interface ContactFormSectionProps {
  buttonColor?: ButtonColor;
}

const getButtonClasses = (color: ButtonColor): string => {
  const baseClasses = "w-full h-14 md:h-16 text-base md:text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]";
  
  switch (color) {
    case "blue":
      return `${baseClasses} bg-brand-blue hover:bg-brand-blue/90 text-white`;
    case "pink":
      return `${baseClasses} bg-brand-pink hover:bg-brand-pink/90 text-white`;
    case "purple":
      return `${baseClasses} bg-brand-purple hover:bg-brand-purple/90 text-white`;
    case "teal":
      return `${baseClasses} bg-brand-teal hover:bg-brand-teal/90 text-white`;
    case "orange":
      return `${baseClasses} bg-brand-orange hover:bg-brand-orange/90 text-white`;
    case "secondary":
    default:
      return baseClasses;
  }
};

const ContactFormSection = ({ buttonColor = "secondary" }: ContactFormSectionProps) => {
  const navigate = useNavigate();
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
        // Navigate to thank you page
        navigate("/thank-you");
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
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* טופס ישירות על הרקע */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid של 4 שדות */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* שם מלא */}
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Label htmlFor="fullName" className="text-sm md:text-base text-gray-700">
                  שם מלא
                </Label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="הכנס שם מלא"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                    className="h-12 pr-10 bg-transparent border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* מספר טלפון */}
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Label htmlFor="phone" className="text-sm md:text-base text-gray-700">
                  מספר טלפון
                </Label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="050-1234567"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="h-12 pr-10 bg-transparent border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* אימייל */}
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Label htmlFor="email" className="text-sm md:text-base text-gray-700">
                  אימייל
                </Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 pr-10 bg-transparent border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* תחום עיסוק */}
              <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Label htmlFor="business" className="text-sm md:text-base text-gray-700">
                  תחום העיסוק (אופציונלי)
                </Label>
                <div className="relative">
                  <Briefcase className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="business"
                    type="text"
                    placeholder="למשל: מסעדה, מכירות"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    className="h-12 pr-10 bg-transparent border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
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
                className="text-sm md:text-base cursor-pointer text-gray-700"
              >
                אני מאשר/ת קבלת דיוורים ועדכונים
              </Label>
            </div>

            {/* כפתור שליחה */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant={buttonColor === "secondary" ? "secondary" : undefined}
                className={getButtonClasses(buttonColor)}
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