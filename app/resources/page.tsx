import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { articles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical billing insights for behavioral health practices — coding, eligibility, and denials.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Billing Insights for <span>Behavioral Health Practices</span>
          </>
        }
        text="Practical, plain-language guides on coding, eligibility, credentialing, and denials."
        crumbs={[{ label: "Resources" }]}
      />
      <section className="overlap">
        <div className="container insights__grid">
          {articles.map((a, i) => (
            <Reveal as="article" key={a.slug} className="post" delay={i * 90}>
              <div className="post__photo">
                <Image src={a.image} alt={a.alt} fill sizes="(max-width: 700px) 100vw, 380px" />
                <span className="post__cat">{a.category}</span>
              </div>
              <div className="post__body">
                <span className="post__meta">{a.readTime}</span>
                <h2 style={{ fontSize: 19 }}>
                  <Link href={`/resources/${a.slug}`} className="post__link">
                    {a.title}
                  </Link>
                </h2>
                <p>{a.excerpt}</p>
                <span className="textlink">
                  Read article <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <div style={{ height: 90 }} />
      <CtaBand title="Have a billing question we didn't cover?" text="Reach out — we're happy to talk through the specifics of your practice." />
    </>
  );
}
