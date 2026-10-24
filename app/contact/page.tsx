import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <section className="wrap contact-intro">
        <h1 className="serif">Contact</h1>
        <p>Send a message to ask a question or to set up your free 15-minute consultation.</p>
      </section>
      <ContactSection />
    </>
  );
}
