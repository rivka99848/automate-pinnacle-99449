import { useState, useCallback } from "react";
import { PackageDetail, SUPPORT3_WEBHOOK_URL } from "@/types/support";

export const usePackageStatus = () => {
  const [packages, setPackages] = useState<PackageDetail[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkPackage = useCallback(async (email: string) => {
    if (!email) {
      setError("נא להזין אימייל");
      return null;
    }

    setIsChecking(true);
    setError(null);

    try {
      const response = await fetch(SUPPORT3_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const rawData = await response.json();
        const responseData = Array.isArray(rawData) ? rawData[0] : rawData;
        const packagesRaw = responseData?.packages || [];

        const mapped: PackageDetail[] = packagesRaw.map((pkg: any) => ({
          id: pkg.id || "",
          package_type: pkg["סוג חבילה"] || "",
          total_tickets: pkg["כמות בחבילה"] || 0,
          used_tickets: pkg["כמות פניות בשימוש לחבילה"] || 0,
          remaining_tickets: pkg["כמות שנותרה"] || 0,
          status: pkg["סטטוס חבילה"] || "",
          purchase_date: pkg["תאריך רכישה"] || "",
          price: pkg["מחיר"] || 0,
        }));

        setPackages(mapped);
        setHasChecked(true);
        return mapped;
      } else {
        setError("שגיאה בבדיקת החבילה. נסה שוב.");
        return null;
      }
    } catch (err) {
      console.error("Error checking package:", err);
      setError("שגיאה בבדיקת החבילה. נסה שוב.");
      return null;
    } finally {
      setIsChecking(false);
    }
  }, []);

  const reset = useCallback(() => {
    setPackages([]);
    setHasChecked(false);
    setError(null);
  }, []);

  const hasActivePackage = packages.some(p => p.remaining_tickets > 0);

  return {
    packages,
    isChecking,
    hasChecked,
    error,
    checkPackage,
    reset,
    hasActivePackage,
  };
};
