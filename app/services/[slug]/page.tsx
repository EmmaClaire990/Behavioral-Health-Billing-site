import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { services, site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.short } : {};
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        text={service.short}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />
      <section className="overlap">
        <div className="container detail">
          <article className="detail__main">
            <span className="svc__icon">
              <Icon name={service.icon} size={40} />
            </span>
            <p className="detail__lead">{service.intro}</p>

            <h2>What&apos;s included</h2>
            <ul className="ticklist">
              {service.includes.map((item) => (
                <li key={item}>
                  <Check size={18} color="#1685F8" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>

            <h2>Problems this helps solve</h2>
            <div className="detail__cols">
              {service.solves.map((p, i) => (
                <div key={p} className={`detail__box${i % 2 ? " detail__box--teal" : ""}`}>
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--navy)" }}>{p}</p>
                </div>
              ))}
            </div>

            <div className="detail__ideal">
              <h3 style={{ fontSize: 17 }}>Ideal for</h3>
              <p>{service.idealFor}</p>
            </div>
          </article>

          <aside className="sidebar">
            <div className="sidecard">
              <h3>All Services</h3>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} aria-current={s.slug === slug ? "page" : undefined}>
                      {s.title} <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidecard sidecard--cta">
              <h3>Talk With a Billing Specialist</h3>
              <p>Get a free consultation about {service.title.toLowerCase()} for your practice.</p>
              <Link href="/contact" className="btn btn--accent btn--block">
                Get a Consultation
              </Link>
              <a href={site.phoneHref} className="btn btn--outlineLight btn--block" style={{ marginTop: 10 }}>
                <Phone size={16} aria-hidden="true" /> {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
      <div style={{ height: 90 }} />
      <CtaBand />
    </>
  );
}
