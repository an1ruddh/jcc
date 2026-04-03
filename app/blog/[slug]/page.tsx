import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Tag, ArrowLeft, Phone } from "lucide-react";
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
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-14">
        <div className="section-container">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-blue-200 hover:text-white mb-6">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-xs text-blue-200 mb-4">
            <span className="flex items-center gap-1"><Tag size={11} /> {post.category}</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold max-w-3xl">{post.title}</h1>
          <div className="mt-4 text-blue-200 text-sm">By Dr. Raghvendra Choudhary, DM Cardiology</div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed">
              {post.content.split("\n\n").map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return <h3 key={i} className="font-bold text-gray-900 text-lg mt-6 mb-2">{para.replace(/\*\*/g, "")}</h3>;
                }
                if (para.startsWith("- ")) {
                  const items = para.split("\n").filter(l => l.startsWith("- "));
                  return <ul key={i} className="list-disc pl-5 space-y-1 mb-4">{items.map((item, j) => (
                    <li key={j} className="text-sm">
                      {item.slice(2).split("**").map((s, k) => k % 2 === 1 ? <strong key={k}>{s}</strong> : s)}
                    </li>
                  ))}</ul>;
                }
                return <p key={i} className="mb-4 text-sm leading-relaxed">{para.split("**").map((s, k) => k % 2 === 1 ? <strong key={k}>{s}</strong> : s)}</p>;
              })}
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-7 border border-blue-100 text-center">
              <h3 className="font-display font-bold text-blue-900 text-xl mb-3">Have Cardiac Concerns?</h3>
              <p className="text-gray-600 text-sm mb-5">Don't wait. Book a consultation with Dr. Raghvendra Choudhary today.</p>
              <a href={`tel:${siteConfig.phone1}`} className="btn-accent">
                <Phone size={16} /> Call {siteConfig.phone1}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
