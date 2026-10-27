import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="svc">
      <div className="svc__top">
        <span className="svc__num">{String(index + 1).padStart(2, "0")}</span>
        <h3>
          <Link href={`/services/${service.slug}`} className="svc__link">
            {service.title}
          </Link>
        </h3>
      </div>
      <span className="svc__icon">
        <Icon name={service.icon} size={40} />
      </span>
      <p>{service.short}</p>
      <span className="svc__more">
        Learn more <ArrowRight size={15} aria-hidden="true" />
      </span>
    </article>
  );
}
