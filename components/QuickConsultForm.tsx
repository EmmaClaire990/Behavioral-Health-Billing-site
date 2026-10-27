"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { formToObject, submitForm } from "@/lib/forms";

export default function QuickConsultForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await submitForm("quick-consultation", formToObject(e.currentTarget));
    setStatus("done");
  }

  return (
    <div className="quickform">
      <div className="quickform__head">
        <h3>Request a Billing Consultation</h3>
        <p>Tell us a little about your practice and we&apos;ll reach out to schedule a time.</p>
      </div>
      {status === "done" ? (
        <p className="form-success" role="status">
          <CheckCircle2 size={22} aria-hidden="true" />
          Thank you! Your request was received. We&apos;ll be in touch soon.
        </p>
      ) : (
        <form className="quickform__grid" onSubmit={onSubmit}>
          <label>
            <span>Your name</span>
            <input name="name" required autoComplete="name" placeholder="Full name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" required autoComplete="email" placeholder="you@practice.com" />
          </label>
          <label>
            <span>Practice type</span>
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
            </select>
          </label>
          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request Consultation"} <ArrowRight size={16} aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
