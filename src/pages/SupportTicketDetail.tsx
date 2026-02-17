import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { TICKET_DETAIL_WEBHOOK_URL, TICKET_REPLY_WEBHOOK_URL } from "@/types/support";
import { 
  Send, 
  Clock, 
  FileText, 
  Image, 
  Download, 
  ArrowRight,
  User,
  Headphones,
  Loader2,
  Paperclip,
  X,
  Hash,
  MessageSquare,
  CalendarDays,
  Tag
} from "lucide-react";

interface Reply {
  sender_type: "admin" | "customer";
  message: string;
  created_at: string;
}

interface TicketDetails {
  ticket_id: string;
  subject: string;
  message: string;
  attachments: string[];
  status: string;
  created_at: string;
  replies: Reply[];
  package_type?: string;
}

const STORAGE_KEY = "support_customer_email";

const SupportTicketDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  let ticketId = searchParams.get("ticket_id");
  if (!ticketId || ticketId === "undefined") {
    try {
      const saved = localStorage.getItem("support_selected_ticket");
      if (saved) {
        const savedTicket = JSON.parse(saved);
        ticketId = savedTicket.ticket_id || null;
      }
    } catch {}
  }
  
  const emailFromUrl = searchParams.get("email");
  const customerEmail = emailFromUrl || localStorage.getItem(STORAGE_KEY) || "";
  
  const navigateToMyTickets = () => {
    if (customerEmail) {
      navigate(`/support/my-tickets?email=${encodeURIComponent(customerEmail)}`);
    } else {
      navigate("/support/my-tickets");
    }
  };

  const [ticket, setTicket] = useState<TicketDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [replyMessage, setReplyMessage] = useState("");
  const [replyFile, setReplyFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSendingReply, setIsSendingReply] = useState(false);

  const fetchTicket = async () => {
    if (!ticketId) {
      toast.error("מזהה פנייה חסר");
      navigate("/support/my-tickets");
      return;
    }

    try {
      const response = await fetch(TICKET_DETAIL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticket_id: ticketId })
      });

      if (response.ok) {
        const rawData = await response.json();
        console.log("Raw ticket detail data:", rawData);
        const data = Array.isArray(rawData) ? rawData[0] : rawData;
        const mappedTicket: TicketDetails = {
          ticket_id: data.מזהה || data.id || data.ticket_id || ticketId || "",
          subject: data["נושא הפניה"] || data.נושא_הפניה || data.subject || "",
          message: data["תוכן הפניה"] || data.תוכן_פניה || data.message || "",
          status: data["סטטוס הפניה"] || data.סטטוס_פניה || data.status || "",
          created_at: data["תאריך הפניה"] || data.תאריך_פניה || data.created_at || "",
          attachments: data.מסמכים_מצורפים || data.attachments || [],
          replies: (data.תקשורת || data.replies || []).map((r: any) => ({
            sender_type: r.sender_type || r.סוג_שולח || "admin",
            message: r.message || r.הודעה || "",
            created_at: r.created_at || r.תאריך || "",
          })),
          package_type: data["סוג חבילה (from חבילות פניות ללקוח)"]?.[0] || "",
        };
        setTicket(mappedTicket);
      } else {
        toast.error("שגיאה בטעינת הפנייה");
        navigate("/support/my-tickets");
      }
    } catch (error) {
      console.error("Error fetching ticket:", error);
      toast.error("שגיאה בטעינת הפנייה");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, [ticketId]);

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    setIsSendingReply(true);

    try {
      const body: any = {
        ticket_id: ticketId,
        message: replyMessage,
        sender_type: "customer",
      };

      if (replyFile) {
        const reader = new FileReader();
        const fileData = await new Promise<string>((resolve) => {
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(replyFile);
        });
        body.attachments = [{
          filename: replyFile.name,
          content_type: replyFile.type,
          data: fileData,
        }];
      }

      const response = await fetch(TICKET_REPLY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        toast.success("התגובה נשלחה בהצלחה");
        setReplyMessage("");
        setReplyFile(null);
        await fetchTicket();
      } else {
        toast.error("שגיאה בשליחת התגובה");
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      toast.error("שגיאה בשליחת התגובה");
    } finally {
      setIsSendingReply(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("he-IL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatDateTime = (dateString: string) => {
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

  const getStatusVariant = (status?: string): { color: string; label: string } => {
    const statusLower = (status ?? "").toLowerCase();
    if (statusLower.includes("סגור") || statusLower.includes("closed")) {
      return { color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", label: status || "" };
    }
    if (statusLower.includes("ממתין") || statusLower.includes("pending")) {
      return { color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", label: status || "" };
    }
    if (statusLower.includes("בטיפול")) {
      return { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", label: status || "" };
    }
    return { color: "bg-muted text-muted-foreground", label: status || "" };
  };

  const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground text-sm">טוען פרטי פנייה...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen bg-background flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-4">הפנייה לא נמצאה</p>
            <Button onClick={navigateToMyTickets}>
              חזרה לפניות שלי
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const statusInfo = getStatusVariant(ticket.status);

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={navigateToMyTickets}
            className="mb-6 hover:bg-muted/50"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            חזרה לפניות שלי
          </Button>

          {/* Ticket Header Card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6 shadow-sm">
            {/* Status Bar */}
            <div className="bg-muted/30 border-b border-border px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Hash className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono">{ticket.ticket_id}</span>
                </div>
                {ticket.package_type && (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Tag className="w-3.5 h-3.5" />
                    <span className="text-xs">{ticket.package_type}</span>
                  </div>
                )}
              </div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusInfo.color}`}>
                {statusInfo.label}
              </span>
            </div>

            {/* Subject & Content */}
            <div className="p-6">
              <h1 className="text-xl font-bold text-foreground mb-4 leading-relaxed">
                {ticket.subject}
              </h1>

              <div className="bg-muted/20 rounded-xl p-5 mb-5 border border-border/50">
                <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed text-sm">
                  {ticket.message}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>נפתח ב-{formatDate(ticket.created_at)}</span>
              </div>
            </div>

            {/* Attachments */}
            {ticket.attachments && ticket.attachments.length > 0 && (
              <div className="px-6 pb-6">
                <div className="border-t border-border pt-5">
                  <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Paperclip className="w-4 h-4 text-muted-foreground" />
                    קבצים מצורפים
                  </h3>
                  <div className="grid gap-2">
                    {ticket.attachments.map((url, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/50"
                      >
                        {isImageUrl(url) ? (
                          <Image className="w-4 h-4 text-primary" />
                        ) : (
                          <FileText className="w-4 h-4 text-primary" />
                        )}
                        <span className="text-sm text-foreground flex-1 truncate">
                          {isImageUrl(url) ? `תמונה ${index + 1}` : `קובץ ${index + 1}`}
                        </span>
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conversation Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">שיחה</h2>
            </div>

            {ticket.replies && ticket.replies.length > 0 ? (
              <div className="space-y-3">
                {ticket.replies.map((reply, index) => {
                  const isAdmin = reply.sender_type === "admin";
                  return (
                    <div
                      key={index}
                      className={`rounded-xl p-4 transition-colors ${
                        isAdmin
                          ? "bg-primary/5 border border-primary/20"
                          : "bg-muted/30 border border-border/50"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          isAdmin ? "bg-primary/10" : "bg-muted"
                        }`}>
                          {isAdmin ? (
                            <Headphones className="w-3.5 h-3.5 text-primary" />
                          ) : (
                            <User className="w-3.5 h-3.5 text-muted-foreground" />
                          )}
                        </div>
                        <span className={`text-sm font-medium ${
                          isAdmin ? "text-primary" : "text-foreground"
                        }`}>
                          {isAdmin ? "צוות התמיכה" : "אני"}
                        </span>
                        <span className="text-xs text-muted-foreground mr-auto">
                          {formatDateTime(reply.created_at)}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/90 whitespace-pre-wrap pr-9 leading-relaxed">
                        {reply.message}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-10 bg-muted/10 rounded-xl border border-dashed border-border">
                <MessageSquare className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  עדיין אין תגובות בשיחה זו
                </p>
              </div>
            )}
          </div>

          {/* Reply Form */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Send className="w-4 h-4 text-primary" />
              הוסף תגובה
            </h3>
            <form onSubmit={handleSendReply} className="space-y-4">
              <Textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="כתוב את התגובה שלך..."
                className="min-h-[120px] rounded-xl resize-none"
                required
              />
              
              {/* File Upload */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => setReplyFile(e.target.files?.[0] || null)}
                    accept="image/*,.pdf,.doc,.docx"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-lg"
                  >
                    <Paperclip className="w-4 h-4 ml-2" />
                    צרף קובץ
                  </Button>
                  {replyFile && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-1.5">
                      <FileText className="w-4 h-4" />
                      <span className="truncate max-w-[200px]">{replyFile.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setReplyFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSendingReply || !replyMessage.trim()}
                  className="rounded-lg"
                >
                  {isSendingReply ? (
                    <>
                      <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                      שולח...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 ml-2" />
                      שלח תגובה
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportTicketDetail;
