import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export default function ContactSection() {
  return (
    <section className="contact-band" id="contact">
      <div className="contact-inner">
        <div>
          <h2>Curious To Know More?</h2>
          <p className="contact-lines">
            <span>Email: {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : null}</span>
            <span>Phone: {site.phone ? <a href={`tel:${site.phone}`}>{site.phone}</a> : null}</span>
          </p>
        </div>
        <div>
          <h2 className="h3">Contact me</h2>
          <ContactForm showPhone />
        </div>
      </div>
    </section>
  );
}
