export interface PackageInfo {
  has_package: boolean;
  package_status?: string;
  remaining_tickets?: number;
  used_tickets?: number;
  total_tickets?: number;
  package_name?: string;
  expires_at?: string;
  message?: string;
}

export interface PackageDetail {
  id: string;
  package_type: string;
  total_tickets: number;
  used_tickets: number;
  remaining_tickets: number;
  status: string;
  purchase_date: string;
  price: number;
}

export const PAYMENT_URL = "https://pay.sumit.co.il/6ir0yg/mh9r7w/mh9r7x/payment/";
export const SUPPORT1_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/support1";
export const SUPPORT3_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/support3";
export const SUPPORT2_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/support2";
export const REPLY_WEBHOOK_URL = "https://n8n.chatnaki.co.il/webhook/1016231e-df1b-4668-b55f-c96dcbaf5cbd";
