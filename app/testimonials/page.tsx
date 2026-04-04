import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Patient Testimonials | Jaipur Cardiac Centre",
  description: "Real patient stories from Jaipur Cardiac Centre. Angioplasty, pacemaker, heart failure — read how Dr. Raghvendra Choudhary changed their lives.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <div className="bg-bone">
      <section className="section-container pt-16 pb-12 border-b border-bone-border">
        <p className="section-label mb-4">Patient Voices</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="display-heading text-5xl md:text-6xl max-w-sm">In Their<br />Words</h1>
          <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
            15,000 patients. Every one of them has a story.
            Here are a few.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0">
          {testimonials.map((t, i) => (
            <article key={t.id}
              className={`p-8 bg-white border border-bone-border ${i % 2 === 1 ? "md:border-l-0" : ""} ${i >= 2 ? "border-t-0" : ""}`}>
              <div className="flex gap-0.5 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
              <div className="ruled pt-5">
                <div className="font-semibold text-sm text-ink">{t.name}, {t.age}</div>
                <div className="text-xs text-ink-muted mt-0.5">{t.condition}</div>
                <div className="text-xs text-ink-muted">{t.location} · {t.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-crimson text-white">
        <div className="section-container py-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="display-heading text-white text-3xl md:text-4xl">
              Your story could be next.
            </h2>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white text-crimson font-semibold text-sm px-6 py-3 hover:bg-red-50 transition-colors shrink-0">
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
