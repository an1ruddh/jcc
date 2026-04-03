import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Patient Testimonials | Jaipur Cardiac Centre",
  description:
    "Read real patient success stories from Jaipur Cardiac Centre. Patients share their experiences after angioplasty, pacemaker and heart failure treatment by Dr. Raghvendra Choudhary.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16">
        <div className="section-container">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Testimonials
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-blue-100 max-w-2xl text-lg">The greatest reward is seeing our patients return to full, healthy lives. Here they share their journeys.</p>
        </div>
      </section>

      <section className="section-py bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article key={t.id} className="bg-white rounded-xl p-7 border border-gray-200 shadow-sm flex flex-col">
                <Quote size={28} className="text-blue-200 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow italic">"{t.text}"</p>
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">{t.name[0]}</div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{t.name}, {t.age}</div>
                      <div className="text-xs text-gray-500">{t.condition}</div>
                      <div className="text-xs text-gray-400">{t.location} · {t.date}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-800 text-white py-14">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Your Story Could Be Next</h2>
          <p className="text-blue-200 mb-7 max-w-lg mx-auto">Join thousands of patients who have trusted Dr. Choudhary with their heart health.</p>
          <Link href="/contact" className="btn-accent">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
