import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

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
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">הצטרף לקבלת עדכונים וטיפים</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Button type="submit" variant="secondary">הרשמה</Button>
              <Input
                type="email"
                placeholder="המייל שלך"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-gray-50 border-gray-300 text-gray-900"
              />
            </form>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">
                  מוצרים
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-primary transition-colors">
                  פרויקטים
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">צור קשר</h3>
            <p className="text-gray-600 mb-2">נשמח לשמוע ממך</p>
            <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              <Link to="/contact">שלח הודעה</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Smartbiz. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
