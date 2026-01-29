import { useState, useCallback } from "react";
import { PackageInfo, SUPPORT3_WEBHOOK_URL } from "@/types/support";

export const usePackageStatus = () => {
  const [packageInfo, setPackageInfo] = useState<PackageInfo | null>(null);
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
        const data: PackageInfo = await response.json();
        setPackageInfo(data);
        setHasChecked(true);
        return data;
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
    setPackageInfo(null);
    setHasChecked(false);
    setError(null);
  }, []);

  const canSubmitTicket = packageInfo?.has_package && (packageInfo?.remaining_tickets ?? 0) > 0;

  return {
    packageInfo,
    isChecking,
    hasChecked,
    error,
    checkPackage,
    reset,
    canSubmitTicket,
  };
};
