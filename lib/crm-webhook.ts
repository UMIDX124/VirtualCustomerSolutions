// Forward VCS lead/form submissions to the Alpha CRM webhook.
// Non-blocking — failures must never break the website's own form flow.

import { createHmac } from "node:crypto";

const CRM_WEBHOOK_BASE =
  process.env.CRM_WEBHOOK_URL || "https://fu-corp-crm.vercel.app";

const CRM_WEBHOOK_SECRET = process.env.CRM_WEBHOOK_SECRET || "";
const LEAD_WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET || "";

const SOURCE = "virtualcustomersolution.com";
const BRAND = "VCS";

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
    | "consultation";
  qualityScore?: number;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface CrmTicketPayload {
  subject: string;
  description: string;
  priority?: "Low" | "Medium" | "High" | "Critical" | string;
  clientEmail: string;
  clientName: string;
  channel?: string;
}

// Shared POST helper — signs the body with LEAD_WEBHOOK_SECRET and sends.
async function postToCRM(path: string, body: unknown): Promise<void> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const rawBody = JSON.stringify(body);
    const signature = LEAD_WEBHOOK_SECRET
      ? createHmac("sha256", LEAD_WEBHOOK_SECRET).update(rawBody).digest("hex")
      : "";

    await fetch(`${CRM_WEBHOOK_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(CRM_WEBHOOK_SECRET && { "X-Webhook-Secret": CRM_WEBHOOK_SECRET }),
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

export async function forwardToCRM(payload: CrmLeadPayload): Promise<void> {
  await postToCRM("/api/webhook/lead", {
    ...payload,
    source: SOURCE,
    brand: BRAND,
  });
}

export async function forwardTicketToCRM(
  payload: CrmTicketPayload
): Promise<void> {
  await postToCRM("/api/webhook/ticket", {
    ...payload,
    source: SOURCE,
    brand: BRAND,
    channel: payload.channel ?? "WEBSITE_FORM",
  });
}
