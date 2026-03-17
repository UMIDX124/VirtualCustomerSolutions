"use client";

import { useEffect, useState } from "react";

import { CTAButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/lib/content";

type SubmitState = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Digital Marketing",
  "Remote Workforce Solutions",
  "Systems & Automation",
  "Operations Support",
  "Growth Strategy",
  "Performance Optimization",
];

export function StrategyCallForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState(
    "Submit the form and your request will be sent without leaving the page."
  );
  const [currentUrl, setCurrentUrl] = useState(siteConfig.siteUrl);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const subject = `Strategy Call Request${company ? ` - ${company}` : ""}`;

    formData.set("_subject", subject);
    formData.set("_template", "table");
    formData.set("_honey", "");
    formData.set("_captcha", "false");
    formData.set("_replyto", email);
    formData.set("_url", currentUrl);
    formData.set(
      "_autoresponse",
      "Thank you. We received your strategy call request and will review it shortly."
    );

    setSubmitState("submitting");
    setSubmitMessage("Sending your strategy call request...");

    try {
      const response = await fetch(siteConfig.formSubmitAction, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = (await response.json()) as { success?: string | boolean; message?: string };

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || "Form submission failed");
      }

      form.reset();
      setSubmitState("success");
      setSubmitMessage("Request sent successfully. We received your booking inquiry and you can stay on this page.");
    } catch {
      setSubmitState("error");
      setSubmitMessage("We could not send the request right now. Please try again, or use the direct email link below.");
    }
  };

  return (
    <form
      id="strategy-call-form"
      onSubmit={handleSubmit}
      tabIndex={-1}
      className="scroll-mt-32 rounded-[30px] border border-white/12 bg-white/8 p-8 text-white shadow-[0_24px_80px_rgba(18,9,35,0.18)] backdrop-blur-md sm:scroll-mt-36"
    >
      <div className="flex flex-col gap-3">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/56">Strategy call form</p>
        <h3 className="text-[28px] font-semibold leading-[1.16] tracking-[-0.04em] text-white">Tell us what you need.</h3>
        <p className="text-[15px] leading-[1.8] text-white/68">
          Fill out the form and we will send the booking request directly through FormSubmit without redirecting you away from the page.
        </p>
      </div>

      <input type="hidden" name="_honey" value="" />
      <input type="hidden" name="_url" value={currentUrl} />
      <input type="hidden" name="_captcha" value="false" />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[14px] font-medium text-white">Full name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/36 focus:border-white/28"
            placeholder="Your full name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[14px] font-medium text-white">Work email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/36 focus:border-white/28"
            placeholder="you@company.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[14px] font-medium text-white">Company</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            required
            className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/36 focus:border-white/28"
            placeholder="Company name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[14px] font-medium text-white">Website</span>
          <input
            name="website"
            type="url"
            autoComplete="url"
            className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/36 focus:border-white/28"
            placeholder="https://yourcompany.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[14px] font-medium text-white">Primary need</span>
          <select
            name="service"
            required
            defaultValue=""
            className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition focus:border-white/28"
          >
            <option value="" disabled className="text-ink">
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="text-ink">
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[14px] font-medium text-white">Team size</span>
          <input
            name="teamSize"
            type="text"
            className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/36 focus:border-white/28"
            placeholder="e.g. 10-25 employees"
          />
        </label>

        <label className="flex flex-col gap-2 md:col-span-2">
          <span className="text-[14px] font-medium text-white">Goals or bottlenecks</span>
          <textarea
            name="goals"
            rows={5}
            required
            className="min-h-32 rounded-[24px] border border-white/12 bg-white/8 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/36 focus:border-white/28"
            placeholder="Tell us what you want to improve, what is slowing growth down, and what support would be most valuable."
          />
        </label>
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CTAButton type="submit" className="min-w-[220px]" disabled={submitState === "submitting"}>
          {submitState === "submitting" ? "Sending Request..." : "Send Strategy Call Request"}
        </CTAButton>
        <a
          href={siteConfig.bookingEmailHref}
          className="text-[14px] leading-[1.7] text-[#FFCAD7] transition hover:text-white"
        >
          Prefer direct email? {siteConfig.email}
        </a>
      </div>

      <div
        aria-live="polite"
        className={`mt-4 rounded-2xl border px-4 py-3 text-[14px] leading-[1.7] ${
          submitState === "success"
            ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
            : submitState === "error"
              ? "border-rose-300/20 bg-rose-300/10 text-rose-100"
              : "border-white/10 bg-white/6 text-white/54"
        }`}
      >
        {submitMessage}
      </div>
    </form>
  );
}
