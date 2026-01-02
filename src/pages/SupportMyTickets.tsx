import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Search, Eye, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface Ticket {
  ticket_id: string;
  subject: string;
  status: string;
  created_at: string;
}

const STORAGE_KEY = "support_customer_email";

const SupportMyTickets = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Load email from URL params or localStorage on mount
  useEffect(() => {
    const urlEmail = searchParams.get("email");
    const savedEmail = localStorage.getItem(STORAGE_KEY);
    
    if (urlEmail) {
      setEmail(urlEmail);
      // Auto-search if email is in URL
      fetchTickets(urlEmail);
    } else if (savedEmail) {
      setEmail(savedEmail);
    }
  }, [searchParams]);

  const fetchTickets = async (searchEmail: string) => {
    setIsLoading(true);
    setHasSearched(true);

    try {
      const response = await fetch("https://n8n.chatnaki.co.il/webhook/ticket-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: searchEmail })
      });

      if (response.ok) {
        const data = await response.json();
        setTickets(Array.isArray(data) ? data : []);
        // Save email to localStorage on successful search
        localStorage.setItem(STORAGE_KEY, searchEmail);
      } else {
        toast.error("שגיאה בטעינת הפניות. נסה שוב.");
        setTickets([]);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      toast.error("שגיאה בטעינת הפניות. נסה שוב.");
      setTickets([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchTickets(email);
  };

  const getStatusIcon = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes("סגור") || statusLower.includes("closed")) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    if (statusLower.includes("ממתין") || statusLower.includes("pending")) {
      return <Clock className="w-5 h-5 text-yellow-500" />;
    }
    return <AlertCircle className="w-5 h-5 text-blue-500" />;
  };

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes("סגור") || statusLower.includes("closed")) {
      return "bg-green-100 text-green-800";
    }
    if (statusLower.includes("ממתין") || statusLower.includes("pending")) {
      return "bg-yellow-100 text-yellow-800";
    }
    return "bg-blue-100 text-blue-800";
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("he-IL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              הפניות שלי
            </h1>
            <p className="text-lg text-muted-foreground">
              הזן את האימייל שלך לצפייה בפניות
            </p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-3 mb-8">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="הזן את האימייל שלך"
              required
              className="h-12 flex-1"
              dir="ltr"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-6 bg-primary hover:bg-primary/90"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5 ml-2" />
                  חפש
                </>
              )}
            </Button>
          </form>

          {hasSearched && (
            <div className="space-y-4">
              {tickets.length === 0 ? (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground text-lg">
                    לא נמצאו פניות עבור אימייל זה
                  </p>
                  <Button
                    onClick={() => navigate("/support")}
                    className="mt-4"
                    variant="outline"
                  >
                    פתח פנייה חדשה
                  </Button>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground mb-4">
                    נמצאו {tickets.length} פניות
                  </p>
                  {tickets.map((ticket) => (
                    <div
                      key={ticket.ticket_id}
                      className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-muted-foreground font-mono">
                              #{ticket.ticket_id}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(ticket.status)}`}>
                              {ticket.status}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {ticket.subject}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {formatDate(ticket.created_at)}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusIcon(ticket.status)}
                          <Button
                            onClick={() => navigate(`/support/ticket?ticket_id=${ticket.ticket_id}&email=${encodeURIComponent(email)}`)}
                            variant="outline"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 ml-1" />
                            צפייה
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              צריך לפתוח פנייה חדשה?{" "}
              <a
                href="/support"
                className="text-primary hover:underline"
              >
                לחץ כאן
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportMyTickets;
