import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { REPLY_WEBHOOK_URL, SUPPORT2_WEBHOOK_URL } from "@/types/support";
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
  X
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
}

const STORAGE_KEY = "support_customer_email";

const SupportTicketDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ticketId = searchParams.get("ticket_id");
  const emailFromUrl = searchParams.get("email");
  
  // Get email from URL or localStorage
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
      const response = await fetch(SUPPORT2_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticket_id: ticketId })
      });

      if (response.ok) {
        const rawData = await response.json();
        const data = Array.isArray(rawData) ? rawData[0] : rawData;
        const mappedTicket: TicketDetails = {
          ticket_id: data.מזהה_פניה || data.ticket_id || ticketId || "",
          subject: data.נושא_הפניה || data.subject || "",
          message: data.תוכן_פניה || data.message || "",
          status: data.סטטוס_פניה || data.status || "",
          created_at: data.תאריך_פניה || data.created_at || "",
          attachments: data.מסמכים_מצורפים || data.attachments || [],
          replies: (data.תקשורת || data.replies || []).map((r: any) => ({
            sender_type: r.sender_type || r.סוג_שולח || "admin",
            message: r.message || r.הודעה || "",
            created_at: r.created_at || r.תאריך || "",
          })),
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

      const response = await fetch(REPLY_WEBHOOK_URL, {
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
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
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

  const isImageUrl = (url: string) => {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col" dir="rtl">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
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

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={navigateToMyTickets}
            className="mb-6"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            חזרה לפניות שלי
          </Button>

          {/* Ticket Info - Read Only */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground font-mono">
                #{ticket.ticket_id}
              </span>
              <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(ticket.status)}`}>
                {ticket.status}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-4">
              {ticket.subject}
            </h1>

            <div className="bg-muted/30 rounded-lg p-4 mb-4">
              <p className="text-foreground whitespace-pre-wrap">
                {ticket.message}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              נפתח ב-{formatDate(ticket.created_at)}
            </div>

            {/* Attachments */}
            {ticket.attachments && ticket.attachments.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-3">
                  קבצים מצורפים
                </h3>
                <div className="grid gap-3">
                  {ticket.attachments.map((url, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {isImageUrl(url) ? (
                        <>
                          <Image className="w-5 h-5 text-muted-foreground" />
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex-1 truncate"
                          >
                            תמונה {index + 1}
                          </a>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </>
                      ) : (
                        <>
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex-1 truncate"
                          >
                            קובץ {index + 1}
                          </a>
                          <a
                            href={url}
                            download
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Replies Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-4">
              שיחה
            </h2>

            {ticket.replies && ticket.replies.length > 0 ? (
              <div className="space-y-4">
                {ticket.replies.map((reply, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 ${
                      reply.sender_type === "admin"
                        ? "bg-muted/50 border-r-4 border-primary"
                        : "bg-blue-50 dark:bg-blue-950/30 border-r-4 border-blue-500"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {reply.sender_type === "admin" ? (
                        <>
                          <Headphones className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            צוות התמיכה
                          </span>
                        </>
                      ) : (
                        <>
                          <User className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            אני
                          </span>
                        </>
                      )}
                      <span className="text-xs text-muted-foreground mr-auto">
                        {formatDate(reply.created_at)}
                      </span>
                    </div>
                    <p className="text-foreground whitespace-pre-wrap">
                      {reply.message}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-muted/20 rounded-lg">
                <p className="text-muted-foreground">
                  עדיין אין תגובות בשיחה זו
                </p>
              </div>
            )}
          </div>

          {/* Add Reply Form */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              הוסף תגובה
            </h3>
            <form onSubmit={handleSendReply} className="space-y-4">
              <Textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="כתוב את התגובה שלך..."
                className="min-h-[120px]"
                required
              />
              
              {/* File Upload */}
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => setReplyFile(e.target.files?.[0] || null)}
                  accept="image/*,.pdf,.doc,.docx"
                  className="hidden"
                />
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
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
              </div>

              <Button
                type="submit"
                disabled={isSendingReply || !replyMessage.trim()}
                className="bg-primary hover:bg-primary/90"
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
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportTicketDetail;
