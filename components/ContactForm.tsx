"use client";

import { FormEvent, useState } from "react";

type Props = { showPhone?: boolean };

export default function ContactForm({ showPhone = false }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const req = showPhone ? <span className="req"> (Required)</span> : null;

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="row two">
        <label>
          <span>First name{req}</span>
          <input name="firstName" placeholder="Jane" required autoComplete="given-name" />
        </label>
        <label>
          <span>Last name{req}</span>
          <input name="lastName" placeholder="Smitherton" required autoComplete="family-name" />
        </label>
      </div>
      <label>
        <span>Email address{req}</span>
        <input name="email" type="email" placeholder="email@janesfakedomain.net" required autoComplete="email" />
      </label>
      {showPhone && (
        <label>
          <span>Phone number{req}</span>
          <input name="phone" type="tel" placeholder="(123) 456-7890" required autoComplete="tel" />
        </label>
      )}
      <label>
        <span>Your message{req}</span>
           <p className="form-note">
  Please don’t include private health details in this form. Web forms and email aren’t a secure way to share clinical information. If you are in crisis, call or text 988 or go to your nearest emergency room.
</p>
        <textarea name="message" placeholder="Enter your question or message" rows={5} required />
      </label>
      {/* Honeypot: real visitors never see or fill this */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
  
      <button type="submit" className="btn btn-primary block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === "sent" && "Thank you. Your message was sent, and I’ll reply soon."}
        {status === "error" && error}
      </p>
    </form>
  );
}
