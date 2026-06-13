import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardiac Health Blog | Heart Disease Awareness & Tips",
  description: "Educational articles on heart health by Dr. Raghvendra Choudhary — heart attack signs, angioplasty vs bypass, cholesterol, hypertension and more.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/blog" },
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 py-12 md:py-16">
        <div className="section-container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-3">Cardiac Health Blog</h1>
          <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
            Evidence-based cardiac health education from Dr. Raghvendra Choudhary —
            because informed patients make better decisions.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-crimson-200 hover:shadow-md transition-all flex flex-col">
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 h-32 flex items-center justify-center p-5">
                <h2 className="text-white font-bold text-base text-center leading-snug">{post.title}</h2>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Tag size={11} /> {post.category}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-crimson-600 group-hover:text-crimson-700 transition-colors inline-flex items-center gap-1">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
