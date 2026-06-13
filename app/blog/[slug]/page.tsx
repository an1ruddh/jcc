import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, Clock, Tag } from "lucide-react";
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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 py-10 md:py-14">
        <div className="section-container">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary-700 hover:text-crimson-600 transition-colors mb-6">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
            <span className="flex items-center gap-1 text-crimson-600 font-semibold uppercase tracking-wide"><Tag size={11} /> {post.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-primary-900 max-w-2xl mb-3">{post.title}</h1>
          <p className="text-sm text-gray-500">By Dr. Raghvendra Choudhary, DM Cardiology</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-12 md:py-16">
        <div className="max-w-2xl">
          {post.content.split("\n\n").map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return <h2 key={i} className="font-bold text-primary-900 text-lg mt-8 mb-3">{para.replace(/\*\*/g, "")}</h2>;
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 mb-6 pl-0">
                  {items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-crimson-600 shrink-0 mt-0.5">—</span>
                      <span>{item.slice(2).split("**").map((s, k) => k % 2 === 1 ? <strong key={k} className="text-primary-900">{s}</strong> : s)}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-600 text-sm leading-relaxed mb-5">
                {para.split("**").map((s, k) => k % 2 === 1 ? <strong key={k} className="text-primary-900 font-semibold">{s}</strong> : s)}
              </p>
            );
          })}

          {/* CTA */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-6 md:p-7 border border-primary-100">
            <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-3">Consult the Expert</p>
            <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-4">
              Have questions about your heart health?
            </h3>
            <a href={`tel:${siteConfig.phone1}`}
              className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
              <Phone size={14} /> Call Dr. Choudhary
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
