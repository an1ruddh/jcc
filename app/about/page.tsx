import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { doctorProfile, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dr. Raghvendra Choudhary – DM Cardiology | About",
  description: "Dr. Raghvendra Choudhary — DM Cardiology, SMS Medical College. 25+ years, 15,000+ cases, 10,000+ angioplasties. Rajasthan's top interventional cardiologist.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-bone">
      {/* Header */}
      <section className="section-container pt-16 pb-12 border-b border-bone-border">
        <p className="section-label mb-4">The Doctor</p>
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <h1 className="display-heading text-5xl md:text-6xl">
            Dr. Raghvendra<br />Choudhary
          </h1>
          <div>
            <p className="text-crimson tracking-wide text-sm mb-3">DM Cardiology · Senior Interventional Cardiologist</p>
            <p className="text-ink-soft text-sm leading-relaxed">{doctorProfile.bio}</p>
          </div>
        </div>
      </section>

      {/* Bio + credentials */}
      <section className="section-container section-py">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Credentials sidebar */}
          <div className="space-y-8">
            <div>
              <p className="section-label mb-5">Qualifications</p>
              <div className="space-y-2">
                {doctorProfile.qualifications.map(q => (
                  <div key={q} className="flex items-center gap-2 text-sm">
                    <span className="text-crimson">—</span>
                    <span className="font-medium text-ink">{q}</span>
                  </div>
                ))}
                <div className="text-xs text-ink-muted mt-2 pl-4">{doctorProfile.institution}</div>
              </div>
            </div>

            <div className="ruled pt-8">
              <p className="section-label mb-5">Expertise</p>
              <div className="space-y-2">
                {doctorProfile.expertise.map(e => (
                  <div key={e} className="flex items-center gap-2 text-sm text-ink-soft">
                    <span className="text-crimson text-xs">·</span> {e}
                  </div>
                ))}
              </div>
            </div>

            <div className="ruled pt-8">
              <a href={`tel:${siteConfig.phone1}`} className="btn-primary w-full justify-center text-sm">
                <Phone size={14} /> Book Appointment
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 lg:border-l lg:border-bone-border lg:pl-16 space-y-12">
            <div>
              <p className="section-label mb-4">In His Own Words</p>
              <blockquote className="display-heading text-3xl text-ink mb-6 leading-snug">
                "Every patient who walks in is someone's entire world. I treat them that way."
              </blockquote>
              <p className="text-ink-soft leading-relaxed text-sm">{doctorProfile.bio2}</p>
            </div>

            {/* Achievements */}
            <div className="ruled pt-12">
              <p className="section-label mb-6">Milestones</p>
              <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-bone-border border border-bone-border bg-white">
                {doctorProfile.achievements.map((a, i) => (
                  <div key={a} className={`p-6 ${i >= 2 ? "border-t border-bone-border" : ""} ${i === 4 ? "sm:col-span-2 sm:border-l-0" : ""}`}>
                    <p className="text-sm text-ink-soft">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="ruled pt-12">
              <p className="section-label mb-6">Career Timeline</p>
              <div className="space-y-0 divide-y divide-bone-border">
                {doctorProfile.timeline.map((t) => (
                  <div key={t.year + t.event} className="flex gap-8 py-4">
                    <span className="font-mono text-xs text-crimson w-10 shrink-0 mt-0.5">{t.year}</span>
                    <span className="text-sm text-ink-soft">{t.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
