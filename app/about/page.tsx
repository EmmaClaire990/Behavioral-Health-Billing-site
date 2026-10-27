import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Eye, HeartHandshake, MessagesSquare, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "A billing partner focused exclusively on behavioral health practices.",
};

const values = [
  {
    icon: Target,
    title: "Specialty Focus",
    text: "We work only with behavioral health, so our workflows are built around its codes, payers, and rules.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Clear reporting and plain-language updates, so you always know where claims and revenue stand.",
  },
  {
    icon: MessagesSquare,
    title: "Responsiveness",
    text: "Questions get answered. Issues get flagged early, with a recommended next step.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for Care",
    text: "Billing should support the therapeutic relationship — not strain it with surprise balances.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            A Billing Partner That <span>Understands Behavioral Health</span>
          </>
        }
        text="We help behavioral health practices keep their revenue cycle organized, so clinicians can stay focused on patients."
        crumbs={[{ label: "About" }]}
      />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container about__intro">
          <Reveal className="about__photos">
            <div>
              <Image src="/images/clinic-team.jpg" alt="Clinicians reviewing information together" fill sizes="(max-width: 1000px) 80vw, 460px" />
            </div>
            <div>
              <Image src="/images/billing-desk.jpg" alt="Billing specialist working on a laptop" fill sizes="300px" />
            </div>
          </Reveal>
          <Reveal className="about__copy" delay={100}>
            <SectionHeading
              eyebrow="Our Approach"
              title={
                <>
                  Behavioral Health Billing <span>Is Its Own Specialty</span>
                </>
              }
            />
            <p>
              Therapy and psychiatric care are documented and reimbursed differently from other outpatient medicine.
              Time-based psychotherapy codes, add-on codes, carve-out payers, authorization limits, and credentialing
              for every clinician all require specific attention.
            </p>
            <p>
              BehavioralHealthMedicalBilling.com was created to give behavioral health practices a billing partner that
              works with those details every day — and communicates clearly about what is happening with your revenue.
            </p>
            <Link href="/services" className="btn btn--accent">
              Explore Our Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHeading align="center" eyebrow="Our Values" title={<>The Principles <span>That Guide Our Work</span></>} />
          </Reveal>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 80}>
                <span className="value__icon">
                  <v.icon size={26} aria-hidden="true" />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="commit">
            <SectionHeading
              light
              eyebrow="Our Commitment"
              title={
                <>
                  What You Can Expect <span>From Us</span>
                </>
              }
            />
            <ul className="ticklist">
              {[
                "A clear onboarding plan before any work begins",
                "Regular reporting on claims, payments, and A/R",
                "Prompt communication about denials and payer issues",
                "Recommendations to prevent recurring problems",
                "Respect for patient privacy in every workflow",
              ].map((t) => (
                <li key={t}>
                  <Check size={18} aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
