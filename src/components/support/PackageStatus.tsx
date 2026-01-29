import { PackageInfo, PAYMENT_URL } from "@/types/support";
import { Package, CheckCircle, AlertTriangle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackageStatusProps {
  packageInfo: PackageInfo;
  showPurchaseButton?: boolean;
}

const PackageStatus = ({ packageInfo, showPurchaseButton = true }: PackageStatusProps) => {
  const { has_package, remaining_tickets = 0, total_tickets = 0, package_name } = packageInfo;
  
  const getStatusConfig = () => {
    if (!has_package) {
      return {
        icon: XCircle,
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive/30",
        label: "אין חבילה פעילה",
      };
    }
    
    if (remaining_tickets === 0) {
      return {
        icon: AlertTriangle,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        label: "נגמרו הפניות בחבילה",
      };
    }
    
    if (remaining_tickets <= 2) {
      return {
        icon: AlertTriangle,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/30",
        label: "נשארו מעט פניות",
      };
    }
    
    return {
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      label: "חבילה פעילה",
    };
  };
  
  const config = getStatusConfig();
  const StatusIcon = config.icon;
  const canSubmit = has_package && remaining_tickets > 0;
  
  return (
    <div className={`rounded-xl border ${config.borderColor} ${config.bgColor} p-4`}>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center`}>
            <StatusIcon className={`w-5 h-5 ${config.color}`} />
          </div>
          <div>
            <p className={`font-medium ${config.color}`}>{config.label}</p>
            {has_package && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="w-3.5 h-3.5" />
                <span>
                  {package_name && `${package_name} • `}
                  {total_tickets ? `נותרו ${remaining_tickets} מתוך ${total_tickets} פניות` : "ניתן לפתוח פניות"}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {showPurchaseButton && !canSubmit && (
          <Button
            asChild
            className="bg-primary hover:bg-primary/90"
          >
            <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 ml-2" />
              רכישת חבילה
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PackageStatus;
