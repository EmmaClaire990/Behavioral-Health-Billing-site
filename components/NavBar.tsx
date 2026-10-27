"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div className={`navwrap${scrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main">
          <div className="navbar__brand">
            <Logo light />
          </div>
          <ul className="navbar__links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : undefined}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.phoneHref} className="navbar__phone">
            <Phone size={16} aria-hidden="true" /> {site.phone}
          </a>
          <Link href="/contact" className="navbar__cta">
            Free Consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <div id="mobile-menu" className={`mobilemenu${open ? " is-open" : ""}`} hidden={!open}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={isActive(item.href) ? "is-active" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn--primary btn--block">
          Get a Billing Consultation
        </Link>
        <a href={site.phoneHref} className="mobilemenu__phone">
          <Phone size={16} aria-hidden="true" /> {site.phone}
        </a>
      </div>
    </div>
  );
}
