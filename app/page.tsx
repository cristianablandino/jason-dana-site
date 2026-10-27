import Link from "next/link";
import { IconChat, IconCompass, IconHeart } from "@/components/Icons";
import { images } from "@/lib/images";
import { posts } from "@/lib/posts";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img src={images.homeHero} alt="" className="home-hero-bg" />
        <div className="home-hero-copy">
          <h1 className="serif">Feel better,<br />live authentically</h1>
          <p>
            Jason Dana offers research-backed psychotherapy to help you feel better and live a life you are proud of.
          </p>
          <Link href="/getting-started" className="btn btn-primary">Book a free consultation</Link>
        </div>
      </section>

      <section className="section wrap">
        <h2 className="serif">Specializations</h2>
        <div className="spec-grid">
          <article>
            <span className="icon-disc"><IconCompass /></span>
            <h3>Young adults</h3>
            <p>Jason adapts the tools of therapy to meet young adults where they are and help them find solutions that fit their lives.</p>
          </article>
          <article>
            <span className="icon-disc"><IconChat /></span>
            <h3>Anxiety</h3>
            <p>Whether manifesting as stress, social anxiety, panic attacks, OCD, or overwhelm, Jason offers a supportive relationship and effective tools for relieving excessive anxiety.</p>
          </article>
          <article>
            <span className="icon-disc"><IconHeart /></span>
            <h3>Depression</h3>
            <p>Whether struggling to feel valuable oneself or struggling to feel hope for the future, Jason meets you where you are at and collaboratively helps you re-engage with your life in ways that work for you.</p>
          </article>
        </div>
        <div className="btn-row center">
          <Link href="/contact" className="btn btn-primary">Book a free consultation</Link>
          <Link href="/specializations" className="btn btn-secondary">Learn more</Link>
        </div>
      </section>

      <section className="section wrap split">
        <div>
          <h2 className="serif">My goal as a clinician</h2>
          <p>
            As a therapist, I sincerely hope to make a meaningful difference in the lives of everyone who comes through my office. As someone who has benefited from therapy myself, I know how powerful a consistent and supportive therapeutic relationship can be in a person’s life. Whether we meet for one session or for several years my intention is to offer everything that I can from my clinical education and personal experience to benefit you in your life.
          </p>
          <div className="btn-row">
            <Link href="/my-approach" className="btn btn-primary">My approach</Link>
            <Link href="/getting-started" className="btn btn-secondary">Getting started</Link>
          </div>
        </div>
        <img className="rounded" src={images.homeClinician} alt="A young man smiling during a therapy session" />
      </section>

      <section className="network-band">
        <div className="network-inner">
          <div>
            <h2>In Network</h2>
            <img src="/images/Aetna_logo_reg_rgb_vio.png" alt="Aetna" className="aetna-logo" />
          </div>
          <div>
            <h2>Out of Network?</h2>
            <Link href="/getting-started#fees" className="btn btn-primary">Learn more</Link>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <h2 className="serif">Blog articles</h2>
        <div className="card-grid two">
          {posts.slice(0, 2).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
              <img src={images.card} alt="" />
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <span className="read-more">Read more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2 className="serif">Curious to know more?</h2>
        <Link href="/getting-started#contact" className="btn btn-primary">Book a free consultation</Link>
      </section>
      
      <section className="wrap about-contact">
  <h2>Contact me</h2>
  <ContactForm />
</section>
    </>
  );
}
