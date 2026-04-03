import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Phone, ChevronRight, Star, CheckCircle, Award, Activity, Shield } from "lucide-react";
import { siteConfig, services, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Cardiologist in Jaipur | Dr. Raghvendra Choudhary",
  description:
    "Jaipur Cardiac Centre — Dr. Raghvendra Choudhary, DM Cardiology with 25+ years experience & 10,000+ angioplasties. Book appointment: +91 8107667788.",
  alternates: { canonical: "https://jaipurcardiaccentre.com" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="section-container section-py relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <Heart size={14} className="text-red-400" />
              Rajasthan's Most Trusted Cardiac Care Centre
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Heart Care<br />You Can <span className="text-teal-300">Trust</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Dr. Raghvendra Choudhary — DM Cardiology, SMS Medical College — brings 25+ years of interventional cardiology expertise to Jaipur, with 15,000+ cardiac cases and 10,000+ successful angioplasties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteConfig.phone1}`} className="btn-accent">
                <Phone size={18} /> Book Appointment Now
              </a>
              <Link href="/services" className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                View Our Services <ChevronRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              {[
                { icon: <CheckCircle size={16} />, text: "DM Cardiology Specialist" },
                { icon: <Award size={16} />, text: "25+ Years Experience" },
                { icon: <Shield size={16} />, text: "98% Success Rate" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="text-teal-300">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="section-container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 section-py">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-900 mb-4">Cardiac Services We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From diagnosis to intervention and long-term management — comprehensive cardiac care under one roof.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 4).map((s) => (
              <div key={s.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Activity size={22} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.shortDesc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-outline">View All Services <ChevronRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* Doctor snippet */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
                <Award size={13} /> DM Cardiology | SMS Medical College
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-900 mb-5">
                Dr. Raghvendra Choudhary
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                With over 25 years at the forefront of interventional cardiology, Dr. Choudhary has earned the trust of patients across Rajasthan and beyond. His compassionate approach combined with technical precision has made him one of the region's most sought-after cardiologists.
              </p>
              <ul className="space-y-2 mb-7">
                {["MBBS, MD Medicine, DM Cardiology", "15,000+ Cardiac Cases Treated", "10,000+ Successful Angioplasties", "Pioneer of Advanced PCI in Rajasthan"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-teal-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">Learn More About the Doctor <ChevronRight size={17} /></Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">RC</div>
                <div>
                  <div className="font-bold text-gray-900">Dr. Raghvendra Choudhary</div>
                  <div className="text-sm text-blue-700">DM Cardiology</div>
                  <div className="flex mt-1 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm leading-relaxed italic">
                "My mission is to deliver the highest standard of cardiac care to every patient — with honesty, compassion, and the latest evidence-based treatments. Heart disease is treatable. Early detection saves lives."
              </blockquote>
              <div className="mt-4 text-sm font-medium text-blue-800">— Dr. Raghvendra Choudhary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-gray-50 section-py">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Patients Say</h2>
            <p className="text-gray-600">Real stories from real patients who trusted Dr. Choudhary with their heart health.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.condition} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="btn-outline">Read All Testimonials <ChevronRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-blue-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How do I book an appointment?", a: "Call us at +91 8107667788 or +91 9414262690. You can also WhatsApp us or fill out the contact form. We offer same-day appointments for urgent cases." },
                { q: "What should I bring to my first consultation?", a: "Please bring previous ECGs, echo reports, blood test results and a list of current medications. If you have any angiography reports, bring those too." },
                { q: "Does Dr. Choudhary perform emergency procedures?", a: "Yes. Dr. Choudhary provides emergency cardiac care. For heart attack emergencies, call 108 or rush directly to the nearest hospital with a cath lab — time is critical." },
                { q: "What are the consultation fees?", a: "Consultation fees start at ₹500. Procedure costs vary. Please call us for current pricing — we strive to make cardiac care affordable for all." },
                { q: "Is the clinic accessible for elderly patients?", a: "Yes, our centre at 52 Janak Marg is accessible and equipped for elderly and differently-abled patients. Wheelchair assistance is available." },
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-800 text-white py-16">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Don't Wait — Your Heart Can't</h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-8">Early diagnosis and treatment can prevent a cardiac emergency. Book a consultation with Dr. Choudhary today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone1}`} className="btn-accent">
              <Phone size={18} /> Call Now: {siteConfig.phone1}
            </a>
            <Link href="/contact" className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
