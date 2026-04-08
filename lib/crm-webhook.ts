// Forward VCS lead/form submissions to the Alpha CRM webhook.
// Non-blocking — failures must never break the website's own form flow.

import { createHmac } from "node:crypto";

const CRM_WEBHOOK_BASE =
  process.env.CRM_WEBHOOK_URL || "https://fu-corp-crm.vercel.app";

const CRM_WEBHOOK_SECRET = process.env.CRM_WEBHOOK_SECRET || "";
const LEAD_WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET || "";

export interface CrmLeadPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  formType:
    | "chatbot"
    | "audit"
    | "contact"
    | "support"
    | "newsletter"
    | "founder"
    | "consultation"
    | "ticket";
  qualityScore?: number;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export async function forwardToCRM(payload: CrmLeadPayload): Promise<void> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    // Tickets route to the tickets webhook; everything else routes to leads.
    const endpoint =
      payload.formType === "ticket"
        ? `${CRM_WEBHOOK_BASE}/api/webhook/tickets`
        : `${CRM_WEBHOOK_BASE}/api/webhook/leads`;

    const webhookBody = {
      ...payload,
      source: "virtualcustomersolution.com",
      brand: "VCS",
    };

    const rawBody = JSON.stringify(webhookBody);
    const signature = LEAD_WEBHOOK_SECRET
      ? createHmac("sha256", LEAD_WEBHOOK_SECRET).update(rawBody).digest("hex")
      : "";

    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": CRM_WEBHOOK_SECRET,
        ...(signature && { "X-Webhook-Signature": `sha256=${signature}` }),
      },
      body: rawBody,
      signal: controller.signal,
    });

    clearTimeout(timeout);
  } catch (err) {
    // Non-blocking — log only, never throw
    console.error(
      "[CRM webhook] forward failed:",
      err instanceof Error ? err.message : err,
    );
  }
}
