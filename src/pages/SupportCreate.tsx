import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Paperclip, X, FileText, Image } from "lucide-react";

interface Attachment {
  filename: string;
  content_type: string;
  data: string;
}

const SupportCreate = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_FILE_SIZE = 1536 * 1024; // 1.5MB in bytes

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
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.chatnaki.co.il/webhook/ticket-create", {
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
      return <Image className="w-4 h-4" />;
    }
    return <FileText className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              פתיחת פנייה חדשה
            </h1>
            <p className="text-lg text-muted-foreground">
              מלא את הפרטים ונחזור אליך בהקדם
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                אימייל *
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="h-12"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                נושא הפנייה *
              </label>
              <Input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="במה נוכל לעזור?"
                required
                className="h-12"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                תיאור הפנייה *
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="פרט את הבעיה או הבקשה שלך..."
                required
                className="min-h-[150px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                קבצים מצורפים (אופציונלי)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                  multiple
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <Paperclip className="w-8 h-8 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    לחץ להעלאת קבצים (תמונות או PDF, עד 1.5MB)
                  </span>
                </label>
              </div>

              {attachments.length > 0 && (
                <div className="mt-4 space-y-2">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-muted/50 rounded-lg p-3"
                    >
                      <div className="flex items-center gap-2">
                        {getFileIcon(file.content_type)}
                        <span className="text-sm">{file.filename}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="text-destructive hover:text-destructive/80"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                "שולח..."
              ) : (
                <>
                  <Send className="w-5 h-5 ml-2" />
                  שלח פנייה
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              כבר פתחת פנייה?{" "}
              <a
                href="/support/my-tickets"
                className="text-primary hover:underline"
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
