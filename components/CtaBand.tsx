import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Ready to spend less time on billing?",
  text = "Schedule a no-obligation billing consultation and get a clearer view of where your revenue stands.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="ctaband">
      <div className="container ctaband__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaband__actions">
          <Link href="/contact" className="btn btn--white">
            Get a Billing Consultation <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a href={site.phoneHref} className="btn btn--outlineLight">
            <Phone size={16} aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
