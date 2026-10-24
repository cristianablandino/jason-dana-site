import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill this in, people don't. Pretend success.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const firstName = clean(body.firstName, 100);
  const lastName = clean(body.lastName, 100);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const message = clean(body.message);

  if (!firstName || !lastName || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email, and a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    // Not configured yet: log so you can see it in Vercel's function logs.
    console.log("Contact form (email not configured):", { firstName, lastName, email, phone, message });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `New website message from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "n/a"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return NextResponse.json({ error: "Your message could not be sent. Please try again or email directly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
