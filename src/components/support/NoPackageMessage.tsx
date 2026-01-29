import { PAYMENT_URL } from "@/types/support";
import { ShoppingCart, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoPackageMessageProps {
  message?: string;
  onRecheck?: () => void;
  isRechecking?: boolean;
}

const NoPackageMessage = ({ message, onRecheck, isRechecking }: NoPackageMessageProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-lg text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-destructive/10 mb-6">
        <AlertCircle className="w-10 h-10 text-destructive" />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        {message || "אין לך חבילת פניות פעילה"}
      </h2>
      
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        כדי לפתוח פניות חדשות, יש לרכוש חבילת פניות. 
        לאחר הרכישה תוכל לשלוח פניות ולקבל מענה מהצוות שלנו.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
        >
          <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="w-5 h-5 ml-2" />
            רכישת חבילת פניות
          </a>
        </Button>
        
        {onRecheck && (
          <Button
            variant="outline"
            size="lg"
            onClick={onRecheck}
            disabled={isRechecking}
            className="min-w-[200px]"
          >
            {isRechecking ? (
              <RefreshCw className="w-5 h-5 ml-2 animate-spin" />
            ) : (
              <RefreshCw className="w-5 h-5 ml-2" />
            )}
            כבר רכשתי? בדיקה מחדש
          </Button>
        )}
      </div>
    </div>
  );
};

export default NoPackageMessage;
