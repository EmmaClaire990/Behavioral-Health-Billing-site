import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <Logo />
        <div className="topbar__info">
          <a className="topbar__item" href={site.phoneHref}>
            <span className="topbar__icon"><Phone size={16} aria-hidden="true" /></span>
            <span>
              <small>Call us</small>
              {site.phone}
            </span>
          </a>
          <a className="topbar__item" href={`mailto:${site.email}`}>
            <span className="topbar__icon"><Mail size={16} aria-hidden="true" /></span>
            <span>
              <small>Email us</small>
              {site.email}
            </span>
          </a>
          <Link href="/contact" className="btn btn--primary btn--sm">
            Get a Billing Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
