import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter">
          <div>
            <span className="eyebrow eyebrow--onDark">Newsletter</span>
            <h2>Billing insights for behavioral health practices</h2>
            <p>Occasional updates on coding, eligibility, and payer changes. No spam.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Logo light />
            <p>{site.description}</p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              {nav.slice(1).map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="footer__contact">
              <li>
                <Phone size={16} aria-hidden="true" /> <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" /> <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" /> Serving behavioral health practices nationwide
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {site.domain}. All rights reserved.</p>
          <p>Content on this site is for general information and is not legal or coding advice.</p>
        </div>
      </div>
    </footer>
  );
}
