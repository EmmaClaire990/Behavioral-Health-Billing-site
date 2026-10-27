import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page Not Found" text="The page you're looking for doesn't exist or has moved." crumbs={[{ label: "Not found" }]} />
      <div className="container notfound">
        <Link href="/" className="btn btn--accent btn--lg">
          Back to Home
        </Link>
      </div>
    </>
  );
}
