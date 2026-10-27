"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { formToObject, submitForm } from "@/lib/forms";
import { services } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await submitForm("consultation", formToObject(e.currentTarget));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="cform">
        <p className="form-success" role="status">
          <CheckCircle2 size={24} aria-hidden="true" />
          Thank you! Your consultation request was received. A billing specialist will follow up to schedule a time.
        </p>
        <button type="button" className="btn btn--navy" style={{ marginTop: 20 }} onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <h2>Request a Billing Consultation</h2>
      <p>Share a few details and we&apos;ll reach out to schedule a conversation. Fields marked * are required.</p>

      <div className="cform__grid">
        <label className="field">
          <span>Full name *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Practice name *</span>
          <input name="practice" required autoComplete="organization" />
        </label>
        <label className="field">
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="field">
          <span>Practice type *</span>
          <select name="practiceType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Solo therapist / counselor</option>
            <option>Psychiatry practice</option>
            <option>Psychology practice</option>
            <option>Group practice</option>
            <option>Behavioral health clinic</option>
            <option>Addiction treatment provider</option>
            <option>Other</option>
          </select>
        </label>
        <label className="field">
          <span>Number of providers</span>
          <select name="providers" defaultValue="">
            <option value="">Select one</option>
            <option>1</option>
            <option>2–5</option>
            <option>6–15</option>
            <option>16–50</option>
            <option>50+</option>
          </select>
        </label>

        <fieldset className="cform__full">
          <legend>Services you&apos;re interested in</legend>
          <div className="chips">
            {services.map((s) => (
              <label key={s.slug} className="chip">
                <input type="checkbox" name="services" value={s.title} />
                <span>{s.title}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="field cform__full">
          <span>What would you like help with?</span>
          <textarea name="message" placeholder="e.g. We have a growing backlog of denied claims and need help with credentialing two new clinicians." />
        </label>
      </div>

      <div className="cform__foot">
        <small>Please don&apos;t include patient information or other protected health information in this form.</small>
        <button type="submit" className="btn btn--accent btn--lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request Consultation"} <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
