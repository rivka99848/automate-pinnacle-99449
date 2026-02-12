import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Paperclip, X, FileText, Image, Mail, MessageSquare, HelpCircle, Upload, Loader2, ShoppingCart } from "lucide-react";
import { usePackageStatus } from "@/hooks/usePackageStatus";
import NoPackageMessage from "@/components/support/NoPackageMessage";
import { PAYMENT_URL, SUPPORT1_WEBHOOK_URL } from "@/types/support";

interface Attachment {
  filename: string;
  content_type: string;
  data: string;
}

const STORAGE_KEY = "support_customer_email";

const SupportCreate = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const savedEmail = localStorage.getItem(STORAGE_KEY) || "";
  
  const [email, setEmail] = useState(savedEmail);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { packages, isChecking, hasChecked, checkPackage, hasActivePackage } = usePackageStatus();

  const canSubmitTicket = hasActivePackage;

  const MAX_FILE_SIZE = 1536 * 1024;

  const handleCheckPackage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("נא להזין אימייל");
      return;
    }
    localStorage.setItem(STORAGE_KEY, email);
    await checkPackage(email);
  };

  const handleRecheck = async () => {
    if (email) {
      await checkPackage(email);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`הקובץ ${file.name} גדול מדי. מקסימום 1.5MB`);
        continue;
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "application/pdf"];
      if (!allowedTypes.includes(file.type)) {
        toast.error(`סוג הקובץ ${file.name} לא נתמך. רק תמונות ו-PDF`);
        continue;
      }

      const base64 = await fileToBase64(file);
      setAttachments(prev => [...prev, {
        filename: file.name,
        content_type: file.type,
        data: base64
      }]);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(",")[1];
        resolve(base64);
      };
      reader.onerror = reject;
    });
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!canSubmitTicket) {
      toast.error("אין לך חבילת פניות פעילה");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch(SUPPORT1_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject,
          message,
          attachments
        })
      });

      if (response.ok) {
        navigate("/support/thank-you");
      } else {
        toast.error("שגיאה בשליחת הפנייה. נסה שוב.");
      }
    } catch (error) {
      console.error("Error submitting ticket:", error);
      toast.error("שגיאה בשליחת הפנייה. נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFileIcon = (contentType: string) => {
    if (contentType.startsWith("image/")) {
      return <Image className="w-4 h-4 text-primary" />;
    }
    return <FileText className="w-4 h-4 text-secondary" />;
  };

  // Show no package message if checked and no valid package
  if (hasChecked && !canSubmitTicket) {
    return (
      <div className="min-h-screen bg-background flex flex-col" dir="rtl">
        <Header />
        
        <main className="flex-1 py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                פתיחת פנייה חדשה
              </h1>
            </div>

            <div className="animate-fade-in-up delay-100">
              <NoPackageMessage 
                message={packages.length > 0 ? "נגמרו הפניות בחבילה שלך" : undefined}
                onRecheck={handleRecheck}
                isRechecking={isChecking}
              />
            </div>

            <div className="mt-8 text-center animate-fade-in-up delay-200">
              <p className="text-muted-foreground">
                כבר פתחת פנייה?{" "}
                <a
                  href="/support/my-tickets"
                  className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline"
                >
                  צפה בפניות שלך
                </a>
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Calculate total remaining for display
  const totalRemaining = packages.reduce((sum, p) => sum + p.remaining_tickets, 0);
  const totalUsed = packages.reduce((sum, p) => sum + p.used_tickets, 0);
  const totalInPackages = packages.reduce((sum, p) => sum + p.total_tickets, 0);

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              פתיחת פנייה חדשה
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {!hasChecked 
                ? "הזן את האימייל שלך לבדיקת חבילת הפניות"
                : "מלא את הפרטים ונחזור אליך בהקדם האפשרי"
              }
            </p>
          </div>

          {/* Purchase Package Button */}
          <div className="mb-6 flex justify-center animate-fade-in-up">
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

          {/* Step 1: Email Verification */}
          {!hasChecked && (
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg animate-fade-in-up delay-100">
              <form onSubmit={handleCheckPackage} className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    אימייל
                    <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    dir="ltr"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isChecking || !email}
                  className="w-full h-14 text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isChecking ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      בודק חבילה...
                    </span>
                  ) : (
                    "בדיקת חבילה"
                  )}
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: Package Status + Form */}
          {hasChecked && canSubmitTicket && (
            <>
              {/* Package Status Summary */}
              <div className="mb-6 animate-fade-in-up rounded-xl border border-green-500/30 bg-green-500/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-green-500">חבילה פעילה</p>
                    <p className="text-sm text-muted-foreground">
                      {totalUsed} בשימוש מתוך {totalInPackages}, נותרו {totalRemaining} פניות
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg animate-fade-in-up delay-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field (readonly) */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      אימייל
                    </label>
                    <Input
                      type="email"
                      value={email}
                      readOnly
                      className="h-12 bg-muted/50 border-border/50 cursor-not-allowed"
                      dir="ltr"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      נושא הפנייה
                      <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="במה נוכל לעזור?"
                      required
                      className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <FileText className="w-4 h-4 text-primary" />
                      תיאור הפנייה
                      <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="פרט את הבעיה או הבקשה שלך בצורה מפורטת..."
                      required
                      className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Paperclip className="w-4 h-4 text-primary" />
                      קבצים מצורפים
                      <span className="text-muted-foreground font-normal">(אופציונלי)</span>
                    </label>
                    <div 
                      className="border-2 border-dashed border-border/50 hover:border-primary/50 rounded-xl p-8 text-center transition-all duration-300 hover:bg-primary/5 cursor-pointer group"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*,application/pdf"
                        multiple
                        className="hidden"
                      />
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Upload className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium mb-1">
                            לחץ להעלאת קבצים
                          </p>
                          <p className="text-sm text-muted-foreground">
                            תמונות או PDF, עד 1.5MB לקובץ
                          </p>
                        </div>
                      </div>
                    </div>

                    {attachments.length > 0 && (
                      <div className="space-y-2 mt-4">
                        {attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-background/70 border border-border/30 rounded-lg p-3 group hover:border-primary/30 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                {getFileIcon(file.content_type)}
                              </div>
                              <span className="text-sm text-foreground truncate max-w-[200px]">
                                {file.filename}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        שולח...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        שלח פנייה
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </>
          )}

          {/* Bottom Link */}
          <div className="mt-8 text-center animate-fade-in-up delay-200">
            <p className="text-muted-foreground">
              כבר פתחת פנייה?{" "}
              <a
                href="/support/my-tickets"
                className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline"
              >
                צפה בפניות שלך
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportCreate;
