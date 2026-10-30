import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { IconEar, IconReed, IconSignpost, IconMountain } from "@/components/Icons";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "My Approach" };

export default function MyApproach() {
  return (
    <>
      <PageHero
        title="My Approach"
        image={images.approachHero}
        text="The therapeutic approaches I draw on, and how they show up in our work together."
        secondary={{ label: "Getting started", href: "/getting-started" }}
      />

      <div className="wrap info-stack">
        <section className="info-block">
          <span className="icon-disc"><IconEar /></span>
          <h2>Person-Centered/Rogerian Therapy</h2>
          <p>
            Developed by Carl Rogers, Person-Centered Therapy is oriented around the idea that if the therapist is able to create a therapeutic environment where the client experiences the therapist as being authentic, empathic, and having unconditional positive regard for the client that the client’s natural actualizing tendency will naturally find its way to use the therapy to heal and grow in all ways important to the client. In my practice I always try to maintain these three qualities in working with clients: authenticity, meaning that I am being honest and congruent with my actual experience and not trying to deceive you or hide how I am feeling; empathy, meaning I do my best to really understand what you are saying and how you are feeling moment-to-moment; and unconditional positive regard, meaning I am conveying that whatever internal experiences are coming up for you that you are still completely accepted as you are.
          </p>
        </section>

        <section className="info-block">
          <span className="icon-disc"><IconReed /></span>
          <h2>Acceptance and Commitment Therapy</h2>
          <p>
            Acceptance and Commitment Therapy, primarily developed by Steven Hayes, is primarily oriented around the concept of psychological flexibility. Psychological flexibility is broken down into 6 interrelated skills: mindfulness, values, committed action, self-as-context, defusion, and acceptance. In my practice we use components of all of these skills through specifically tailored thought experiments, metaphors, and reflections to continually increase your sense of agency, your connection to what matters most to you, and your ability to take action based on this.
          </p>
        </section>

        <section className="info-block">
          <span className="icon-disc"><IconSignpost /></span>
          <h2>Motivational Interviewing</h2>
          <p>
            Evolving out of Person-Centered Therapy and primarily developed by William Miller and Stephen Rollnick, Motivational Interviewing is primarily focused on helping people take action and make changes based on what helps them live healthy and meaningful lives. It involves 4 stages (engaging, focusing, evoking, and planning) of a collaborative process where clients clarify what is important to them, what they want to do to pursue their goals, how to overcome obstacles and setbacks, and how to put tangible steps into action towards these goals. In my practice I infuse this approach in just this way to ensure that we stay focused on what is most important to you as well as to make necessary space for the natural complexities and ambivalences we experience in the face of change.
          </p>
        </section>

        <section className="info-block">
          <span className="icon-disc"><IconMountain /></span>
          <h2>Exposure and Response Prevention</h2>
          <p>
            Considered the gold-standard treatment for Obsessive-Compulsive Disorder (OCD), Exposure and Response Prevention is a cognitive-behavioral treatment approach for anxiety related disorders. As the name implies, it involves two key steps: exposure, or intentionally directly experiencing something anxiety provoking; and response prevention, or intentionally resisting the urge to use a familiar but unhelpful coping mechanism. This approach can sound daunting when described, however, in practice it is essential that treatment unfolds at the pace set forth by the client. In my practice we use this general approach with OCD and a number of other similar challenges to gradually develop your capacity to experience a range of thoughts and emotions while maintaining a sense of agency in your behavior as well as establish more value-oriented and healthy patterns of behavior while leaving self-limiting and unwanted compulsive behaviors in the past.
          </p>
        </section>
      </div>

      <ContactSection />
    </>
  );
}
