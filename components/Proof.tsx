import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { proof } from "@/lib/proof";

export function MetricsBand() {
  if (!proof.metrics.length) return null;
  return (
    <section className="metrics">
      <div className="container">
        <div className="metrics__head">
          <h2>
            Trusted Revenue Cycle Partner for <span>Behavioral Health Practices</span>
          </h2>
        </div>
        <dl className="metrics__grid">
          {proof.metrics.map((m) => (
            <div key={m.label}>
              <dt>{m.value}</dt>
              <dd>{m.label}</dd>
            </div>
          ))}
        </dl>
        {proof.metricsNote && <p className="metrics__note">{proof.metricsNote}</p>}
      </div>
    </section>
  );
}

export function CaseStudies() {
  const [featured, ...rest] = proof.caseStudies;
  if (!featured) return null;
  return (
    <section className="section cases">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Client Results"
            title={
              <>
                Real Practices. <span>Measurable Results.</span>
              </>
            }
          />
        </Reveal>
        <Reveal className="case case--featured">
          <div className="case__intro">
            {featured.label && <span className="case__period">{featured.label}</span>}
            <h3>{featured.client}</h3>
            {featured.location && <p className="case__loc">{featured.location}</p>}
            {featured.summary && <p>{featured.summary}</p>}
          </div>
          <dl className="case__results">
            {featured.results.map((r) => (
              <div key={r.label}>
                <dt>{r.value}</dt>
                <dd>{r.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        {rest.length > 0 && (
          <div className="cases__grid">
            {rest.map((c, i) => (
              <Reveal key={c.client} className="case" delay={i * 90}>
                {c.label && <span className="case__period">{c.label}</span>}
                <h3>{c.client}</h3>
                {c.summary && <p>{c.summary}</p>}
                <dl className="case__results case__results--small">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <dt>{r.value}</dt>
                      <dd>{r.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function SystemsStrip() {
  if (!proof.systems.length && !proof.payers.length) return null;
  return (
    <section className="systems">
      <div className="container">
        {proof.systems.length > 0 && (
          <div className="systems__row">
            <h2>EHR &amp; practice management systems we work in</h2>
            <ul>
              {proof.systems.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {proof.payers.length > 0 && (
          <div className="systems__row">
            <h2>Payers we bill every day</h2>
            <ul>
              {proof.payers.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export function Testimonials() {
  if (!proof.testimonials.length) return null;
  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Client Feedback"
            title={
              <>
                What Behavioral Health <span>Practices Say</span>
              </>
            }
          />
        </Reveal>
        <div className="testimonials__grid">
          {proof.testimonials.map((t, i) => (
            <Reveal as="article" key={i} className="tcard" delay={i * 90}>
              <Quote size={34} className="tcard__icon" aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <footer>
                <span className="avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  {t.role}, {t.practice}
                </span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamGrid() {
  if (!proof.team.length) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title={
              <>
                The People Behind <span>Your Revenue Cycle</span>
              </>
            }
          />
        </Reveal>
        <div className="team">
          {proof.team.map((m, i) => (
            <Reveal key={i} className="member" delay={i * 90}>
              <div className="member__photo">
                {m.photo ? (
                  <Image src={m.photo} alt={m.name} fill sizes="160px" />
                ) : (
                  <span aria-hidden="true">{initials(m.name)}</span>
                )}
              </div>
              <h3>{m.name}</h3>
              <span className="member__title">{m.title}</span>
              <p>{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
