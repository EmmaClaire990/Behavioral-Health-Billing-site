import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Behavioral health medical billing, eligibility verification, credentialing, denial management, A/R follow-up, and revenue cycle management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Revenue Cycle Services for <span>Behavioral Health</span>
          </>
        }
        text="Choose the support your practice needs — from a single service to complete revenue cycle management."
        crumbs={[{ label: "Services" }]}
      />
      <section className="overlap">
        <div className="container svclist">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="article" className="svcrow">
              <div className="svcrow__main">
                <div className="svcrow__tag">
                  <span className="svc__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="svc__icon" style={{ margin: 0, width: 60, height: 60 }}>
                    <Icon name={s.icon} size={30} />
                  </span>
                </div>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <Link href={`/services/${s.slug}`} className="btn btn--accent">
                  Learn More <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className="svcrow__aside">
                <h3>What&apos;s included</h3>
                <ul className="ticklist">
                  {s.includes.slice(0, 5).map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <div style={{ height: 90 }} />
      <CtaBand title="Not sure which services you need?" text="We'll review your current setup and recommend where to start — no obligation." />
    </>
  );
}
