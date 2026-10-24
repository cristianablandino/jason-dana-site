import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Specializations" };

function Buttons() {
  return (
    <div className="btn-row">
      <Link href="/contact" className="btn btn-primary">Book a free consultation</Link>
      <Link href="/my-approach" className="btn btn-secondary">My approach</Link>
    </div>
  );
}

export default function Specializations() {
  return (
    <>
      <PageHero
        title="Specializations"
        text="Although the primary modalities I use are transdiagnostic and work with a variety of mental health diagnoses and populations, here are a few of the areas of focus I’ve been developing some specialization in over my career so far."
      />

      <section className="wrap feature-row">
        <img className="rounded" src={images.youngAdults} alt="A smiling young woman with her arms crossed" />
        <div>
          <h2>Young adults</h2>
          <p>
            While young adults can experience a variety of challenges with their mental health, the experience of being a young adult itself is very particular and can benefit from working with a therapist with a similar background. This period of life always brings unique challenges with it: going to college, entering the workforce, beginning to live independently, dating and finding a partner etc. For Gen Z and Millenials, these common experiences intersect uniquely with the current social and economic conditions we live in and having a therapist with first hand experience of this often allows for an increased ease and comfort in establishing a therapeutic relationship and finding relevant solutions that fit the lives of young people today. In therapy I incorporate my experiences using therapeutic tools and approaches to work with the unique challenges for young people today to help my clients feel validated and discover the specific approaches that will work for them in their own lives as young adults today.
          </p>
          <Buttons />
        </div>
      </section>

      <section className="wrap feature-row flip">
        <div>
          <h2>Anxiety, stress, OCD, panic</h2>
          <p>
            Anxiety, although a natural and healthy emotion to experience, often can become overwhelming at certain points in our lives and at its most intense can be completely debilitating. Anxiety also can have numerous possible sources as well as numerous possible expressions. The roots of anxiety may be related to developmental or childhood experiences, they may be acute and primarily due to recent stressors, they may be broad and related to larger socio-political systems, and sometimes they can be related to physiological processes that have become imbalanced. Additionally anxiety might express itself through panic attacks, recurring obsessive fears and compulsive behaviors, irritability, or just a pervasive feeling of stress and overwhelm. My process of working with clients struggling with anxiety starts with collaboratively developing a clear understanding of where the anxiety is rooted. Developing this understanding is often significantly relieving itself, and additionally from this understanding we start to develop a roadmap out of the overwhelm. We accomplish this by identifying what needs to be done either internally with how you are relating to yourself and your internal experience and/or externally in how you show up in and structure your life. And, as always, this work is guided by what is most important to you and what you feel ready for.
          </p>
          <Buttons />
        </div>
        <img className="rounded" src={images.anxiety} alt="A client and therapist in conversation" />
      </section>

      <section className="wrap feature-row">
        <img className="rounded" src={images.depression} alt="A young woman sitting with her arms around her knees" />
        <div>
          <h2>Depression</h2>
          <p>
            When feelings of sadness, self-criticism, and hopelessness pass beyond occasional fleeting experiences and become recurring primary features of our life, this is called depression. While depression can have many possible causes, it often ends up leaving us feeling heavy and struggling to find the energy and motivation to invest in and pursue meaningful goals in our lives. In working with clients struggling with depression, my approach begins with us coming to a collaborative understanding of what your present experience of your depression is like and getting some sense of what both in your past and present circumstances may be contributing to it. From here we turn our attention to what is possible to change in your life to reconnect with feelings of meaningfulness and self-worth, as well as continually reflecting internally on what might be making it difficult to access or allow yourself to feel these feelings in the first place.
          </p>
          <Buttons />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
