export interface PackageInfo {
  has_package: boolean;
  package_status?: string;
  remaining_tickets?: number;
  total_tickets?: number;
  package_name?: string;
  expires_at?: string;
  message?: string;
}

export const PAYMENT_URL = "https://pay.sumit.co.il/6ir0yg/mh9r7w/mh9r7x/payment/";
export const SUPPORT3_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/support3";
