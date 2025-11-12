import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

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
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">צור קשר</span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              נשמח לשמוע ממך ולעזור לך להתחיל
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">
                    שם מלא *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg">
                    מס׳ טלפון *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg">
                    אימייל *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="business" className="text-lg">
                    תחום העסק *
                  </Label>
                  <Input
                    id="business"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-lg">
                    הודעה (אופציונלי)
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        newsletter: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="newsletter" className="cursor-pointer">
                    אני מאשר/ת קבלת דיוורים
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 rounded-full"
                >
                  רוצה להתחיל לעבוד חכם ולהרוויח יותר
                </Button>
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
