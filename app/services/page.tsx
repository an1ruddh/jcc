import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Heart, Waves, TrendingUp, Radio, Zap, Shield, CheckCircle, ChevronRight, Phone } from "lucide-react";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cardiac Services | Angioplasty, Echocardiography & More",
  description:
    "Comprehensive cardiac services in Jaipur: Coronary Angioplasty, Angiography, Echocardiography, Holter Monitoring, Pacemaker Implantation & Preventive Cardiology. Book now.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/services" },
};

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={26} className="text-blue-700" />,
  Activity: <Activity size={26} className="text-blue-700" />,
  Waves: <Waves size={26} className="text-blue-700" />,
  TrendingUp: <TrendingUp size={26} className="text-blue-700" />,
  Radio: <Radio size={26} className="text-blue-700" />,
  Zap: <Zap size={26} className="text-blue-700" />,
  Shield: <Shield size={26} className="text-blue-700" />,
  CheckCircle: <CheckCircle size={26} className="text-blue-700" />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16">
        <div className="section-container">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> Services
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Cardiac Services</h1>
          <p className="text-blue-100 max-w-2xl text-lg">Advanced cardiac diagnostics and interventions performed by Dr. Raghvendra Choudhary — Jaipur's most experienced interventional cardiologist.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.id} className="bg-white rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    {iconMap[s.icon]}
                  </div>
                  <span className="text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 rounded-full px-3 py-1">{s.badge}</span>
                </div>
                <h2 className="font-semibold text-xl text-gray-900 mb-2">{s.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-blue-700">{s.price}</span>
                  <a href={`tel:${siteConfig.phone1}`} className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                    Book Now <ChevronRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-14">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-7 max-w-lg mx-auto">Book a consultation with Dr. Choudhary and take the first step towards a healthier heart.</p>
          <a href={`tel:${siteConfig.phone1}`} className="btn-accent">
            <Phone size={18} /> {siteConfig.phone1}
          </a>
        </div>
      </section>
    </>
  );
}
