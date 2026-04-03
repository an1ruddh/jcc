import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardiac Health Blog | Heart Disease Awareness & Tips",
  description:
    "Educational articles on heart health by Dr. Raghvendra Choudhary — heart attack signs, angioplasty vs bypass, cholesterol, hypertension, and more.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16">
        <div className="section-container">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Blog
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Cardiac Health Blog</h1>
          <p className="text-blue-100 max-w-2xl text-lg">Expert insights and educational articles on heart health from Dr. Raghvendra Choudhary.</p>
        </div>
      </section>

      <section className="section-py bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 h-40 flex items-center justify-center p-6">
                  <h2 className="text-white font-display font-bold text-lg text-center leading-snug">{post.title}</h2>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Tag size={11} /> {post.category}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="mt-4 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors inline-flex items-center gap-1">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
