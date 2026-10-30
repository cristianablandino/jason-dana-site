import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { IconCard, IconClipboard, IconClock } from "@/components/Icons";
import InNetworkBand from "@/components/InNetworkBand";
import { images } from "@/lib/images";

export const metadata: Metadata = { title: "Getting Started" };

export default function GettingStarted() {
  return (
    <>
      <PageHero
        title="Getting Started"
        image={images.gettingStartedHero}
        text="Try a free consultation to discuss the logistics of psychotherapy and see if we feel like a good fit."
      />

      <div className="wrap info-stack">
        <section className="info-block" id="what-to-expect">
          <span className="icon-disc"><IconClipboard /></span>
          <h2>What To Expect</h2>
          <p>
            Starting therapy typically begins with a 15min consultation where we discuss what you hope to get out of therapy, how I work as a therapist, insurance and fee details, and when and where we can meet. After this initial consultation I will share some intake forms to complete as well as an invitation to set up a patient portal profile on Simple Practice (the Electronic Health Record system I use for my practice) and we will meet for a 45min intake session. During the intake session there are a handful of standard questions I will walk you through which I will use to generate an appropriate diagnosis and treatment plan for your therapy (required for therapy billed through insurance). Following this we will meet for 45min sessions at the frequency that works for you. Typically, I recommend meeting at least weekly for the first 6 sessions or so to establish the therapeutic relationship, after which point we can switch between 2x weekly, weekly, bi-weekly, monthly, and ad-hoc sessions as works best for you and as my schedule allows. And finally, as you feel that your time in therapy is complete, I will take you off the schedule indefinitely knowing that you’re welcome to reach out anytime for one-off sessions as needed or to come back again on a regular basis.
          </p>
        </section>

        <section className="info-block" id="fees">
          <span className="icon-disc"><IconCard /></span>
          <h2>Insurance & Fees</h2>
          <p>
            I am currently working exclusively <strong>out-of-network</strong> from insurance plans. However, I offer <strong>courtesy billing</strong> to handle submitting claims to your insurance for plans with out-of-network benefits.
          </p>
          <p className="fee-lines">
            <span>Standard session fee: $200</span>
            <span>Sliding scale available</span>
          </p>
        </section>
      </div>
      
         <InNetworkBand />
        <div className="wrap info-stack info-stack-after">
          
        <section className="info-block" id="cancellation">
          <span className="icon-disc"><IconClock /></span>
          <h2>Cancellation Policy</h2>
          <p>
            The cancellation policy I maintain is that day-of cancellations or no-show appointments that are not able to be rescheduled within the same week will be charged $150 for the time reserved.
          </p>
        </section>
      </div>

      <ContactSection />
    </>
  );
}
