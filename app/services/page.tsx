import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardiac Services | Angioplasty, Echocardiography & More",
  description: "Comprehensive cardiac services in Jaipur: Coronary Angioplasty, Angiography, Echocardiography, Holter Monitoring, Pacemaker & Preventive Cardiology.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 py-12 md:py-16">
        <div className="section-container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-3">Cardiac Services</h1>
          <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
            Advanced diagnostics and interventions — from a single centre in Jaipur,
            by the most experienced cardiac hands in Rajasthan.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-crimson-200 hover:shadow-md transition-all flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="font-bold text-primary-900 text-lg leading-snug">{s.title}</h2>
                <span className="text-[11px] font-semibold text-crimson-600 bg-crimson-50 px-2 py-1 rounded shrink-0">{s.badge}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{s.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-primary-800">{s.price}</span>
                <a href={`tel:${siteConfig.phone1}`}
                  className="text-sm text-crimson-600 font-medium flex items-center gap-1 hover:text-crimson-700 transition-colors">
                  Book <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white">
        <div className="section-container py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold max-w-sm mx-auto md:mx-0">
              Not sure which service you need?
            </h2>
            <a href={`tel:${siteConfig.phone1}`}
              className="inline-flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors shrink-0">
              <Phone size={14} /> Call &amp; We'll Guide You
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
