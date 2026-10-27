import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { articles } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[{ label: "Resources", href: "/resources" }, { label: article.category }]}
      />
      <section className="overlap">
        <div className="container">
          <article className="prose">
            <div className="prose__cover">
              <Image src={article.image} alt={article.alt} fill priority sizes="(max-width: 800px) 100vw, 760px" />
            </div>
            <Link href="/resources" className="backlink">
              <ArrowLeft size={16} aria-hidden="true" /> All resources
            </Link>
            <div className="prose__meta">
              <span className="post__cat">{article.category}</span>
              <span>{article.readTime}</span>
            </div>
            {article.body.map((block, i) => (
              <div key={i}>
                {block.heading && <h2>{block.heading}</h2>}
                {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {block.list && (
                  <ul>
                    {block.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <p className="prose__note">
              This article is for general educational purposes and is not legal, coding, or compliance advice. Payer
              policies vary — confirm current requirements with each payer.
            </p>
          </article>
        </div>
      </section>
      <div style={{ height: 90 }} />
      <CtaBand />
    </>
  );
}
