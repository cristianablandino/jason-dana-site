import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <section className="wrap about-grid">
        <div>
          <h1 className="serif">About</h1>
          <p>
            I have been practicing as a psychotherapist since 2022 and started my own private practice in 2026. Prior to starting my own practice I worked at a community mental health clinic and currently split my time with a group private practice. I found my way to clinical social work and psychotherapy through pursuing my curiosity about understanding human psychology deeply and my desire to have a career where I help others. Beyond my work as a psychotherapist my interests in the field of mental health include increasing affordable access to psychotherapy for clients, advocating for more adequate compensation for psychotherapists participating in insurance networks, and finding creative and novel ways to incorporate mental health insights into society to alleviate systemic psychological stressors and promote psychological resilience and well being amongst the population at large.
          </p>
          <p>
            Outside of my professional life, I am a die-hard Mets fan, I enjoy playing baseball in a men’s recreational league, playing guitar/writing songs with my friends, and traveling and sharing TikToks with my wife.
          </p>
        </div>
        <img className="rounded" src={images.aboutPortrait} alt="Jason Dana smiling at a desk" />
      </section>

      <section className="wrap about-contact">
        <h2>Contact me</h2>
        <ContactForm />
      </section>
    </>
  );
}
