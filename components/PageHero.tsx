import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Wave from "./Wave";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  crumbs: { label: string; href?: string }[];
};

export default function PageHero({ eyebrow, title, text, crumbs }: Props) {
  return (
    <section className="pagehero">
      <div className="container pagehero__inner">
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <ChevronRight size={14} aria-hidden="true" />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <span className="eyebrow eyebrow--onDark">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
      <Wave />
    </section>
  );
}
