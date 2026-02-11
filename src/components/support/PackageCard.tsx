import { PackageDetail } from "@/types/support";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, Calendar, Package } from "lucide-react";

interface PackageCardProps {
  pkg: PackageDetail;
  onSelect: (packageId: string) => void;
}

const PackageCard = ({ pkg, onSelect }: PackageCardProps) => {
  const usagePercent = pkg.total_tickets > 0 
    ? (pkg.used_tickets / pkg.total_tickets) * 100 
    : 0;

  const isActive = pkg.remaining_tickets > 0;

  const statusColor = isActive
    ? "bg-green-100 text-green-800 border-green-200"
    : "bg-red-100 text-red-800 border-red-200";

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            {pkg.package_type}
          </CardTitle>
          <Badge className={`${statusColor} border`} variant="outline">
            {pkg.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress */}
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-1.5">
            <span>{pkg.used_tickets} בשימוש מתוך {pkg.total_tickets}</span>
            <span className="font-semibold text-foreground">נותרו {pkg.remaining_tickets}</span>
          </div>
          <Progress value={usagePercent} className="h-2.5" />
        </div>

        {/* Info */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>נרכש: {pkg.purchase_date}</span>
        </div>

        {/* Action */}
        <Button
          onClick={() => onSelect(pkg.id)}
          variant="outline"
          className="w-full border-primary/30 hover:border-primary hover:bg-primary/5"
        >
          <Eye className="w-4 h-4 ml-2" />
          צפייה בפניות
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
