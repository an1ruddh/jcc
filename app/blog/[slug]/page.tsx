import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { blogPosts, siteConfig } from "@/lib/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://jaipurcardiaccentre.com/blog/${post.id}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) notFound();

  return (
    <div className="bg-bone">
      <section className="section-container pt-12 pb-12 border-b border-bone-border">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-crimson transition-colors mb-8">
          <ArrowLeft size={14} /> Back to Blog
        </Link>
        <div className="flex items-center gap-3 mb-5">
          <span className="section-label">{post.category}</span>
          <span className="text-ink-muted text-xs">·</span>
          <span className="text-xs text-ink-muted">{post.readTime}</span>
          <span className="text-ink-muted text-xs">·</span>
          <span className="text-xs text-ink-muted">{post.date}</span>
        </div>
        <h1 className="display-heading text-4xl md:text-5xl max-w-2xl mb-6">{post.title}</h1>
        <p className="text-sm text-ink-muted">By Dr. Raghvendra Choudhary, DM Cardiology</p>
      </section>

      <section className="section-container py-16">
        <div className="max-w-2xl">
          {post.content.split("\n\n").map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return <h2 key={i} className="font-semibold text-ink text-lg mt-8 mb-3">{para.replace(/\*\*/g, "")}</h2>;
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 mb-6 pl-0">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-ink-soft">
                      <span className="text-crimson shrink-0 mt-0.5">—</span>
                      <span>{item.slice(2).split("**").map((s, k) => k % 2 === 1 ? <strong key={k} className="text-ink">{s}</strong> : s)}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-ink-soft text-sm leading-relaxed mb-5">
                {para.split("**").map((s, k) => k % 2 === 1 ? <strong key={k} className="text-ink font-semibold">{s}</strong> : s)}
              </p>
            );
          })}

          <div className="ruled mt-12 pt-10">
            <p className="section-label mb-4">Consult the Expert</p>
            <h3 className="display-heading text-2xl text-ink mb-4">
              Have questions about your heart health?
            </h3>
            <a href={`tel:${siteConfig.phone1}`} className="btn-primary text-sm">
              <Phone size={14} /> Call Dr. Choudhary
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
