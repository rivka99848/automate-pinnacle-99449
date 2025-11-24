import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import ContactFormSection from "./ContactFormSection";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to webhook
      await fetch("https://n8n.chatnaki.co.il/webhook/newsleter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      toast.success("נרשמת בהצלחה לניוזלטר!");
      setEmail("");
    } catch (error) {
      toast.error("אירעה שגיאה, אנא נסה שוב");
    }
  };

  return (
    <>
      {/* טופס צור קשר */}
      <ContactFormSection />
      
      {/* Footer מקורי */}
      <footer className="bg-brand-darker border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">הצטרף לקבלת עדכונים וטיפים</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Button type="submit" variant="secondary">הרשמה</Button>
              <Input
                type="email"
                placeholder="המייל שלך"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
            </form>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  מוצרים
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  פרויקטים
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  בלוג
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <p className="text-muted-foreground mb-2">נשמח לשמוע ממך</p>
            <Button asChild variant="outline">
              <Link to="/contact">שלח הודעה</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Smartbiz. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
