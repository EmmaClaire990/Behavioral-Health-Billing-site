import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Billing and revenue cycle support for therapists, psychiatrists, psychologists, behavioral health clinics, group practices, and addiction treatment providers.",
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title={
          <>
            Billing Support for Every <span>Behavioral Health Provider</span>
          </>
        }
        text="Each type of practice has its own codes, payers, and workflows. We tailor our support to yours."
        crumbs={[{ label: "Who We Serve" }]}
      />
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container audrows">
          {audiences.map((a, i) => (
            <Reveal key={a.title} className="audrow">
              <div className="audrow__photo">
                <Image src={a.image} alt={a.alt} fill sizes="(max-width: 1000px) 100vw, 560px" />
              </div>
              <div>
                <span className="audrow__num">{String(i + 1).padStart(2, "0")} / {String(audiences.length).padStart(2, "0")}</span>
                <h2>{a.title}</h2>
                <p>{a.text}</p>
                <ul>
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link href="/contact" className="textlink">
                  Talk about your practice <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title="See how we'd support your practice" />
    </>
  );
}
