import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardiac Health Blog | Heart Disease Awareness & Tips",
  description: "Educational articles on heart health by Dr. Raghvendra Choudhary — heart attack signs, angioplasty vs bypass, cholesterol, hypertension and more.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/blog" },
};

export default function BlogPage() {
  return (
    <div className="bg-bone">
      <section className="section-container pt-16 pb-12 border-b border-bone-border">
        <p className="section-label mb-4">Knowledge</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="display-heading text-5xl md:text-6xl max-w-sm">Cardiac<br />Insights</h1>
          <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
            Evidence-based cardiac health education from Dr. Raghvendra Choudhary.
            Because informed patients make better decisions.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="divide-y divide-bone-border">
          {blogPosts.map((post, i) => (
            <Link key={post.id} href={`/blog/${post.id}`}
              className="group grid md:grid-cols-12 gap-6 py-10 hover:bg-white transition-colors -mx-5 px-5 block">
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="md:col-span-4">
                <span className="text-xs text-crimson tracking-widest uppercase">{post.category}</span>
                <h2 className="font-semibold text-ink mt-1 group-hover:text-crimson transition-colors leading-snug">
                  {post.title}
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-ink-soft text-sm leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="md:col-span-2 flex items-center justify-end gap-3">
                <span className="text-xs text-ink-muted">{post.readTime}</span>
                <ArrowRight size={15} className="text-bone-border group-hover:text-crimson transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
