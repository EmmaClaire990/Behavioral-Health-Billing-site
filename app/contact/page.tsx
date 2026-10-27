import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free behavioral health billing consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get a <span>Billing Consultation</span>
          </>
        }
        text="Tell us about your practice and the billing challenges you're facing. We'll follow up to schedule a time to talk."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="overlap" style={{ paddingBottom: 40 }}>
        <div className="container contact">
          <aside className="contact__info">
            <h2>Contact Information</h2>
            <p>Prefer to reach out directly? We&apos;re happy to hear from you.</p>
            <ul className="contact__list">
              <li>
                <span>
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span>
                  <small>Phone</small>
                  <a href={site.phoneHref}>{site.phone}</a>
                </span>
              </li>
              <li>
                <span>
                  <Mail size={20} aria-hidden="true" />
                </span>
                <span>
                  <small>Email</small>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <span>
                  <Clock size={20} aria-hidden="true" />
                </span>
                <span>
                  <small>Hours</small>
                  <strong>{site.hours}</strong>
                </span>
              </li>
              <li>
                <span>
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <span>
                  <small>Service area</small>
                  <strong>Behavioral health practices nationwide</strong>
                </span>
              </li>
            </ul>
            <div className="contact__expect">
              <h3>What happens next</h3>
              <ol>
                <li>We review your request</li>
                <li>We reach out to schedule a call</li>
                <li>We discuss your practice and goals</li>
                <li>You receive recommended next steps</li>
              </ol>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
