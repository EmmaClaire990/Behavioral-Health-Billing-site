"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { formToObject, submitForm } from "@/lib/forms";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await submitForm("newsletter", formToObject(e.currentTarget));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="newsletter__done" role="status">
        <CheckCircle2 size={20} aria-hidden="true" /> Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form className="newsletter__form" onSubmit={onSubmit}>
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input id="nl-email" name="email" type="email" required placeholder="Your work email" autoComplete="email" />
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Subscribing…" : "Subscribe"} <Send size={16} aria-hidden="true" />
      </button>
    </form>
  );
}
