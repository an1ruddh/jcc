import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardiac Services | Angioplasty, Echocardiography & More",
  description: "Comprehensive cardiac services in Jaipur: Coronary Angioplasty, Angiography, Echocardiography, Holter Monitoring, Pacemaker & Preventive Cardiology.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-bone">
      {/* Header */}
      <section className="section-container pt-16 pb-12 border-b border-bone-border">
        <p className="section-label mb-4">What We Do</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="display-heading text-5xl md:text-6xl max-w-sm">Cardiac<br />Services</h1>
          <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
            Advanced diagnostics and interventions — from a single centre in Jaipur,
            by the most experienced cardiac hands in Rajasthan.
          </p>
        </div>
      </section>

      {/* Services — editorial list */}
      <section className="section-container py-16">
        <div className="divide-y divide-bone-border">
          {services.map((s, i) => (
            <div key={s.id} className="grid md:grid-cols-12 gap-6 py-10 group">
              <div className="md:col-span-1">
                <span className="font-mono text-sm text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-semibold text-ink text-lg mb-1 group-hover:text-crimson transition-colors">
                  {s.title}
                </h2>
                <span className="text-xs text-crimson tracking-wide bg-crimson-light px-2 py-0.5">{s.badge}</span>
              </div>
              <div className="md:col-span-4">
                <p className="text-ink-soft text-sm leading-relaxed">{s.description}</p>
              </div>
              <div className="md:col-span-2 flex flex-col items-end justify-between">
                <span className="text-sm font-medium text-ink">{s.price}</span>
                <a href={`tel:${siteConfig.phone1}`}
                  className="text-xs text-crimson flex items-center gap-1 hover:underline mt-4">
                  Book <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-crimson text-white">
        <div className="section-container py-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="display-heading text-white text-3xl md:text-4xl max-w-sm">
              Not sure which service you need?
            </h2>
            <a href={`tel:${siteConfig.phone1}`}
              className="inline-flex items-center gap-2 bg-white text-crimson font-semibold text-sm px-6 py-3 hover:bg-red-50 transition-colors shrink-0">
              <Phone size={14} /> Call & We'll Guide You
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
