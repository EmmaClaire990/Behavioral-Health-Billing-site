import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ClipboardList,
  FileSearch,
  HeartHandshake,
  Hourglass,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Icon from "@/components/Icon";
import Wave from "@/components/Wave";
import Faq from "@/components/Faq";
import QuickConsultForm from "@/components/QuickConsultForm";
import { articles, audiences, process, services } from "@/lib/site";

const challenges = [
  {
    icon: ShieldAlert,
    title: "Denials that keep repeating",
    text: "The same authorization or eligibility denial shows up month after month, and no one has time to trace it back.",
  },
  {
    icon: Hourglass,
    title: "A/R that keeps aging",
    text: "Claims drift past 90 days without a response, and timely-filing windows close before anyone follows up.",
  },
  {
    icon: CalendarClock,
    title: "Evenings spent on billing",
    text: "Clinicians end long days of sessions by logging into payer portals instead of resting or seeing more patients.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <span className="hero__watermark" aria-hidden="true">
          BEHAVIORAL
        </span>
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow eyebrow--onDark">
              <HeartHandshake size={14} aria-hidden="true" /> Behavioral Health Billing &amp; RCM
            </span>
            <h1>
              Less Time Chasing Claims. <span>More Time Caring for Patients.</span>
            </h1>
            <p>
              Specialized medical billing and revenue cycle support for behavioral health practices. Keep billing
              workflows organized, address claim issues, and gain clearer visibility into outstanding revenue.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--accent btn--lg">
                Get a Billing Consultation <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn--outlineLight btn--lg">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__photo">
              <Image
                src="/images/hero-clinician.jpg"
                alt="Smiling behavioral health clinician in teal scrubs with arms crossed"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 440px"
              />
            </div>
            <div className="hero__chip">
              <Sparkles size={16} aria-hidden="true" /> Behavioral health focused
            </div>
          </div>
        </div>

        <div className="container hero__panelwrap">
          <div className="hero__panel">
            <div className="hero__benefit">
              <span className="hero__benefitIcon">
                <FileSearch size={26} aria-hidden="true" />
              </span>
              <div>
                <h2>Cleaner Claims</h2>
                <p>Charge entry and scrubbing built around psychotherapy and psychiatric codes.</p>
              </div>
            </div>
            <div className="hero__benefit">
              <span className="hero__benefitIcon">
                <ClipboardList size={26} aria-hidden="true" />
              </span>
              <div>
                <h2>Organized Follow-Up</h2>
                <p>Denials and aging claims worked by payer, with clear status notes.</p>
              </div>
            </div>
            <div className="hero__benefit">
              <span className="hero__benefitIcon">
                <Icon name="trend" size={26} />
              </span>
              <div>
                <h2>Revenue Visibility</h2>
                <p>Plain-language reporting on what&apos;s billed, paid, and outstanding.</p>
              </div>
            </div>
          </div>
        </div>
        <Wave />
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section className="section services">
        <div className="container">
          <Reveal className="services__head">
            <SectionHeading
              eyebrow="Our Services"
              title={
                <>
                  Revenue Cycle Support <span>Built for Behavioral Health</span>
                </>
              }
            />
            <p className="services__intro">
              From the first eligibility check to the final payment, each service is designed around how behavioral
              health care is delivered, documented, and reimbursed.
            </p>
            <Link href="/services" className="btn btn--accent">
              All Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="services__grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── EXPERTISE ───────────── */}
      <section className="section expertise">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Why Practices Choose Us"
              title={
                <>
                  Billing Specialists Focused <span>Only on Behavioral Health</span>
                </>
              }
            />
          </Reveal>
          <div className="expertise__grid">
            <Reveal className="expertise__photoA">
              <Image
                src="/images/counseling-session.jpg"
                alt="A behavioral health clinician meeting with a client"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
              />
              <span className="expertise__badge">
                <HeartHandshake size={20} aria-hidden="true" />
                Care comes first
              </span>
            </Reveal>
            <Reveal className="expertise__copy" delay={80}>
              <p>
                General medical billers often treat therapy claims like any other office visit. Behavioral health is
                different — time-based codes, carve-out payers, authorization limits, and credentialing for every
                clinician.
              </p>
              <ul className="checklist">
                <li>
                  <Check size={18} aria-hidden="true" /> Psychotherapy, psychiatric &amp; group therapy coding
                </li>
                <li>
                  <Check size={18} aria-hidden="true" /> Carve-out and managed behavioral health payers
                </li>
                <li>
                  <Check size={18} aria-hidden="true" /> Telehealth place-of-service and modifiers
                </li>
                <li>
                  <Check size={18} aria-hidden="true" /> Credentialing for growing clinical teams
                </li>
              </ul>
              <Link href="/about" className="textlink">
                Learn about our approach <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
            <Reveal className="expertise__panel" delay={160}>
              <h3>How We Work With You</h3>
              <ol>
                <li>
                  <span>Discover</span> Free consultation
                </li>
                <li>
                  <span>Assess</span> Review your A/R &amp; denials
                </li>
                <li>
                  <span>Onboard</span> Access, payers &amp; setup
                </li>
                <li>
                  <span>Support</span> Ongoing claims &amp; reporting
                </li>
              </ol>
              <Link href="/contact" className="btn btn--white btn--block">
                Start With a Consultation
              </Link>
            </Reveal>
            <Reveal className="expertise__photoB" delay={120}>
              <Image
                src="/images/billing-desk.jpg"
                alt="A billing specialist typing on a laptop beside a stethoscope"
                fill
                sizes="(max-width: 900px) 100vw, 640px"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── FOCUS BANNER ───────────── */}
      <section className="statband">
        <div className="container statband__inner">
          <div className="statband__lead">
            <div className="statband__avatars" aria-hidden="true">
              <Image src="/images/psychiatrist.jpg" alt="" width={44} height={44} />
              <Image src="/images/psychologist.jpg" alt="" width={44} height={44} />
              <Image src="/images/practice-owner.jpg" alt="" width={44} height={44} />
            </div>
            <p>
              <strong>One billing partner</strong> for every type of behavioral health provider.
            </p>
          </div>
          <dl className="statband__stats">
            <div>
              <dt>6</dt>
              <dd>Core revenue cycle services</dd>
            </div>
            <div>
              <dt>6</dt>
              <dd>Behavioral health provider types supported</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>Specialty focus: behavioral health</dd>
            </div>
            <div>
              <dt>A–Z</dt>
              <dd>Coverage from eligibility to final payment</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ───────────── WHO WE SERVE ───────────── */}
      <section className="section audiences">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Who We Serve"
              title={
                <>
                  Built for the Providers <span>Who Care for Minds</span>
                </>
              }
              text="Whether you're a solo therapist or a multi-location clinic, we adapt our workflows to the way you practice."
            />
          </Reveal>
          <div className="audiences__grid">
            {audiences.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} className="aud" delay={i * 90}>
                <div className="aud__photo">
                  <Image src={a.image} alt={a.alt} fill sizes="(max-width: 700px) 100vw, 360px" />
                </div>
                <div className="aud__body">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <ul>
                    {a.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="audiences__more">
            <p>
              Also supporting <strong>behavioral health clinics</strong>, <strong>group practices</strong>, and{" "}
              <strong>addiction treatment providers</strong>.
            </p>
            <Link href="/who-we-serve" className="btn btn--navy">
              See Everyone We Serve <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="section process">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Getting Started"
              title={
                <>
                  A Simple Process <span>From Day One</span>
                </>
              }
            />
          </Reveal>
          <ol className="process__steps">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} className="step" delay={i * 100}>
                <span className="step__icon">
                  <Icon name={p.icon} size={30} />
                  <span className="step__num">{i + 1}</span>
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── CONSULT CTA ───────────── */}
      <section className="consult">
        <div className="consult__band">
          <div className="container consult__grid">
            <Reveal className="consult__copy">
              <span className="eyebrow eyebrow--onDark">Free Billing Consultation</span>
              <h2>
                Support for Your Practice, <span>So You Can Support Your Patients</span>
              </h2>
              <p>
                Talk with a behavioral health billing specialist about your payers, your current workflow, and where
                claims are getting stuck.
              </p>
              <Link href="/contact" className="btn btn--accent btn--lg">
                Book a Consultation <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Reveal>
            <div className="consult__photo">
              <Image
                src="/images/cta-clinician.jpg"
                alt="Friendly clinician in blue scrubs with a stethoscope"
                fill
                sizes="(max-width: 900px) 70vw, 420px"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <Reveal>
            <QuickConsultForm />
          </Reveal>
        </div>
      </section>

      {/* ───────────── CHALLENGES ───────────── */}
      <section className="section challenges">
        <div className="container">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Sound Familiar?"
              title={
                <>
                  Billing Problems We <span>Help Practices Solve</span>
                </>
              }
            />
          </Reveal>
          <div className="challenges__grid">
            {challenges.map((c, i) => (
              <Reveal key={c.title} className="challenge" delay={i * 90}>
                <span className="challenge__icon">
                  <c.icon size={24} aria-hidden="true" />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="challenges__cta">
            <Link href="/contact" className="btn btn--accent">
              Talk Through Your Billing Challenges <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="section faqsec">
        <div className="container faqsec__grid">
          <Reveal className="faqsec__intro">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Questions Practices <span>Often Ask</span>
                </>
              }
              text="Don't see your question here? Reach out and we'll walk you through it."
            />
            <div className="faqsec__photo">
              <Image
                src="/images/about-stethoscope.jpg"
                alt="Clinician holding a stethoscope"
                fill
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>

      {/* ───────────── RESOURCES ───────────── */}
      <section className="section insights">
        <div className="container">
          <Reveal className="insights__head">
            <SectionHeading
              eyebrow="Resources"
              title={
                <>
                  Read Our Latest <span>Billing Insights</span>
                </>
              }
            />
            <Link href="/resources" className="btn btn--accent">
              View All Resources <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="insights__grid">
            {articles.map((a, i) => (
              <Reveal as="article" key={a.slug} className="post" delay={i * 90}>
                <div className="post__photo">
                  <Image src={a.image} alt={a.alt} fill sizes="(max-width: 700px) 100vw, 380px" />
                  <span className="post__cat">{a.category}</span>
                </div>
                <div className="post__body">
                  <span className="post__meta">{a.readTime}</span>
                  <h3>
                    <Link href={`/resources/${a.slug}`} className="post__link">
                      {a.title}
                    </Link>
                  </h3>
                  <p>{a.excerpt}</p>
                  <span className="textlink">
                    Read article <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
