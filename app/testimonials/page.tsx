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
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 py-12 md:py-16">
        <div className="section-container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-3">Patient Testimonials</h1>
          <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
            15,000+ patients treated. Every one of them has a story — here are a few, in their own words.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <article key={t.id} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-grow">"{t.text}"</p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-primary-900">{t.name}, {t.age}</div>
                    <div className="text-xs text-gray-500">{t.condition}</div>
                    <div className="text-xs text-gray-400">{t.location} · {t.date}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white">
        <div className="section-container py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">
              Your story could be next.
            </h2>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shrink-0">
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
