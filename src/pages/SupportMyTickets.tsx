import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Search, Eye, Clock, CheckCircle, AlertCircle, Loader2, ShoppingCart, ArrowRight } from "lucide-react";
import { usePackageStatus } from "@/hooks/usePackageStatus";
import PackageCard from "@/components/support/PackageCard";
import { PAYMENT_URL, SUPPORT2_WEBHOOK_URL } from "@/types/support";

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
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [isLoadingTickets, setIsLoadingTickets] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const { packages, isChecking, hasChecked, checkPackage } = usePackageStatus();

  useEffect(() => {
    const urlEmail = searchParams.get("email");
    const savedEmail = localStorage.getItem(STORAGE_KEY);
    
    if (urlEmail) {
      setEmail(urlEmail);
      checkPackage(urlEmail);
    } else if (savedEmail) {
      setEmail(savedEmail);
    }
  }, [searchParams]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, email);
    checkPackage(email);
  };

  const fetchTicketsForPackage = async (packageId: string) => {
    setSelectedPackageId(packageId);
    setIsLoadingTickets(true);
    setHasSearched(true);

    try {
      const response = await fetch(SUPPORT2_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ package_id: packageId })
      });

      if (response.ok) {
        const rawData = await response.json();
        console.log("Raw tickets data from API:", rawData);
        const data = Array.isArray(rawData) ? rawData : [];
        const mappedTickets: Ticket[] = data.map((item: any) => ({
          ticket_id: item.מזהה_פניה || item.ticket_id,
          subject: item.נושא_הפניה || item.subject || "",
          status: item.סטטוס_פניה || item.status || "",
          created_at: item.תאריך_פניה || item.created_at || "",
        }));
        setTickets(mappedTickets);
        localStorage.setItem(`support_tickets_${packageId}`, JSON.stringify(mappedTickets));
      } else {
        toast.error("שגיאה בטעינת הפניות. נסה שוב.");
        setTickets([]);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      toast.error("שגיאה בטעינת הפניות. נסה שוב.");
      setTickets([]);
    } finally {
      setIsLoadingTickets(false);
    }
  };

  const handleBackToPackages = () => {
    setSelectedPackageId(null);
    setTickets([]);
    setHasSearched(false);
  };

  const getStatusIcon = (status?: string) => {
    const statusLower = (status ?? "").toLowerCase();
    if (statusLower.includes("סגור") || statusLower.includes("closed")) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
    if (statusLower.includes("ממתין") || statusLower.includes("pending")) {
      return <Clock className="w-5 h-5 text-yellow-500" />;
    }
    return <AlertCircle className="w-5 h-5 text-blue-500" />;
  };

  const getStatusColor = (status?: string) => {
    const statusLower = (status ?? "").toLowerCase();
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

  const selectedPkg = packages.find(p => p.id === selectedPackageId);

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              הפניות שלי
            </h1>
            <p className="text-lg text-muted-foreground">
              {!hasChecked ? "הזן את האימייל שלך לצפייה בחבילות ובפניות" : 
               selectedPackageId ? `פניות בחבילת ${selectedPkg?.package_type || ""}` : "בחר חבילה לצפייה בפניות"}
            </p>
          </div>

          {/* Purchase Package Button */}
          <div className="mb-6 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-4 h-4 ml-2" />
                רכישת חבילת פניות חדשה
              </a>
            </Button>
          </div>

          {/* Email Search Form */}
          {!hasChecked && (
            <form onSubmit={handleSearch} className="flex gap-3 mb-6">
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
                disabled={isChecking}
                className="h-12 px-6 bg-primary hover:bg-primary/90"
              >
                {isChecking ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Search className="w-5 h-5 ml-2" />
                    חפש
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Loading packages */}
          {isChecking && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Package Cards View */}
          {hasChecked && !selectedPackageId && !isChecking && (
            <div className="space-y-4">
              {packages.length === 0 ? (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground text-lg">
                    לא נמצאו חבילות עבור אימייל זה
                  </p>
                  <Button
                    onClick={() => window.open(PAYMENT_URL, "_blank")}
                    className="mt-4"
                  >
                    רכישת חבילה
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {packages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      onSelect={fetchTicketsForPackage}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tickets View (after selecting a package) */}
          {selectedPackageId && (
            <div className="space-y-4">
              <Button
                variant="ghost"
                onClick={handleBackToPackages}
                className="mb-2"
              >
                <ArrowRight className="w-4 h-4 ml-2" />
                חזרה לחבילות
              </Button>

              {isLoadingTickets ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : tickets.length === 0 ? (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground text-lg">
                    אין פניות בחבילה זו
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
                            onClick={() => {
                              localStorage.setItem("support_selected_ticket", JSON.stringify(ticket));
                              navigate(`/support/ticket?ticket_id=${ticket.ticket_id}&email=${encodeURIComponent(email)}`);
                            }}
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
