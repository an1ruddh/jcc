import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Star } from "lucide-react";
import { siteConfig, services, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Best Cardiologist in Jaipur | Dr. Raghvendra Choudhary",
  description: "Jaipur Cardiac Centre — Dr. Raghvendra Choudhary, DM Cardiology with 15+ years experience & 8,000+  angioplasties. Book appointment: +91 8107667788.",
  alternates: { canonical: "https://jaipurcardiaccentre.com" },
};

export default function HomePage() {
  return (
    <div className="bg-bone">

      {/* ── HERO ── */}
      <section className="section-container pt-16 pb-0 md:pt-24">
        {/* Section label */}
        <p className="section-label mb-8">Jaipur · Rajasthan · Since 2005</p>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-0 items-end">
          <div className="pb-16">
            <h1 className="display-heading text-5xl md:text-6xl xl:text-7xl mb-8 max-w-lg">
              The Heart Demands<br />
              <em className="text-crimson not-italic">the Best</em><br />
              Hands.
            </h1>
            <p className="text-ink-soft leading-relaxed max-w-md mb-10 text-base">
              Dr. Raghvendra Choudhary has spent 25 years making the decision
              that saves lives. DM Cardiology. 8,000+ angioplasties.
              The most trusted cardiac name in Rajasthan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${siteConfig.phone1}`} className="btn-primary">
                <Phone size={15} /> Book Appointment
              </a>
              <Link href="/about" className="btn-ghost">
                Meet Dr. Choudhary <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Stats column — numbers as art */}
          <div className="border-l border-bone-border pl-10 pb-16 hidden lg:block">
            <div className="space-y-10">
              {siteConfig.stats.map((s, i) => (
                <div key={s.label} className={i !== 0 ? "pt-10 border-t border-bone-border" : ""}>
                  <div className="stat-number">{s.value}</div>
                  <div className="text-xs tracking-widest uppercase text-ink-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stats — horizontal scroll strip */}
        <div className="lg:hidden grid grid-cols-2 gap-0 border-t border-bone-border">
          {siteConfig.stats.map((s, i) => (
            <div key={s.label} className={`py-7 px-2 ${i % 2 !== 0 ? "border-l border-bone-border pl-6" : ""} ${i >= 2 ? "border-t border-bone-border" : ""}`}>
              <div className="stat-number text-3xl">{s.value}</div>
              <div className="text-xs tracking-widest uppercase text-ink-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RULED DIVIDER ── */}
      <div className="section-container"><div className="ruled" /></div>

      {/* ── DOCTOR PROFILE ── */}
      <section className="section-container section-py">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left: credentials block */}
          <div className="lg:col-span-1">
            <p className="section-label mb-6">The Doctor</p>
            {/* Avatar monogram — oversized, intentional */}
            <div className="w-28 h-36 bg-bone-dark border border-bone-border mb-6 relative overflow-hidden flex items-center justify-center">
              <span className="font-display text-3xl font-bold text-crimson/30">RC</span> {/* Replace with: <Image src="/doctor-photo.jpg" alt="Dr. Raghvendra Choudhary" fill className="object-cover object-top" /> */}
            </div>
            <h2 className="display-heading text-3xl mb-1">Dr. Raghvendra<br />Choudhary</h2>
            <p className="text-crimson text-sm tracking-wide mb-6">DM Cardiology · SMS Medical College</p>
            <div className="space-y-2 text-sm text-ink-soft border-t border-bone-border pt-6">
              {["MBBS · MD Medicine · DM Cardiology", "Interventional Cardiology", "25 Years in Practice", "Jaipur, Rajasthan"].map(c => (
                <div key={c} className="flex items-start gap-2">
                  <span className="text-crimson mt-0.5 text-xs">—</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-ghost mt-8 text-xs">
              Full Profile <ArrowRight size={13} />
            </Link>
          </div>

          {/* Right: quote + philosophy */}
          <div className="lg:col-span-2 lg:border-l lg:border-bone-border lg:pl-16">
            <p className="section-label mb-8">Philosophy</p>
            <blockquote className="display-heading text-3xl md:text-4xl text-ink mb-10 leading-snug">
              "Every patient who walks in is someone's entire world.
              I treat them that way."
            </blockquote>
            <p className="text-ink-soft leading-relaxed text-base mb-6 max-w-xl">
              Over 15,000 cardiac cases across Rajasthan. Not a number to impress —
              a record of trust built one patient at a time, in a city where
              advanced cardiac care was once inaccessible.
            </p>
            <p className="text-ink-soft leading-relaxed text-base max-w-xl">
              Dr. Choudhary pioneered complex interventional procedures in Jaipur,
              bringing catheterisation lab expertise that patients previously had to
              travel to Delhi or Mumbai for.
            </p>
          </div>
        </div>
      </section>

      <div className="section-container"><div className="ruled" /></div>

      {/* ── SERVICES ── */}
      <section className="section-container section-py">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="section-label mb-3">What We Do</p>
            <h2 className="display-heading text-4xl md:text-5xl max-w-sm">
              Cardiac Services
            </h2>
          </div>
          <Link href="/services" className="btn-ghost hidden md:inline-flex text-xs">
            All Services <ArrowRight size={13} />
          </Link>
        </div>

        {/* Services as editorial list — not cards */}
        <div className="divide-y divide-bone-border">
          {services.slice(0, 6).map((s, i) => (
            <div key={s.id}
              className="group flex items-center justify-between py-6 hover:bg-white transition-colors px-0 hover:px-4 duration-200 -mx-0 hover:-mx-4 cursor-default">
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-ink-muted mt-1 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-ink group-hover:text-crimson transition-colors mb-0.5">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-muted">{s.shortDesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0 ml-4">
                <span className="text-xs text-crimson bg-crimson-light px-2 py-1 hidden sm:block">{s.badge}</span>
                <ArrowRight size={16} className="text-bone-border group-hover:text-crimson transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <Link href="/services" className="btn-ghost mt-8 md:hidden inline-flex text-xs">
          All Services <ArrowRight size={13} />
        </Link>
      </section>

      <div className="section-container"><div className="ruled" /></div>

      {/* ── TESTIMONIALS ── */}
      <section className="section-container section-py">
        <p className="section-label mb-3">Patient Voices</p>
        <h2 className="display-heading text-4xl md:text-5xl mb-14 max-w-sm">
          In Their Words
        </h2>

        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-bone-border border border-bone-border">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="p-8 bg-white">
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-7 italic">
                "{t.text}"
              </p>
              <div className="ruled pt-5">
                <div className="font-semibold text-sm text-ink">{t.name}</div>
                <div className="text-xs text-ink-muted mt-0.5">{t.condition} · {t.location}</div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/testimonials" className="btn-ghost mt-6 text-xs">
          Read All Stories <ArrowRight size={13} />
        </Link>
      </section>

      <div className="section-container"><div className="ruled" /></div>

      {/* ── FAQ ── */}
      <section className="section-container section-py">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <p className="section-label mb-3">Questions</p>
            <h2 className="display-heading text-4xl mb-4">Common<br />Questions</h2>
            <p className="text-ink-muted text-sm">Everything you need to know before your first visit.</p>
          </div>
          <div className="lg:col-span-2 divide-y divide-bone-border">
            {[
              { q: "How do I book an appointment?", a: "Call +91 8107667788 or +91 9414262690. WhatsApp works too. We offer same-day appointments for urgent cases." },
              { q: "What should I bring to my first consultation?", a: "Previous ECGs, echo reports, blood tests, and a list of current medications. Angiography reports if you have them." },
              { q: "Does Dr. Choudhary handle emergencies?", a: "Yes. For heart attack emergencies, call 108 or rush to the nearest cath lab hospital. Time is muscle." },
              { q: "What are the consultation fees?", a: "Consultation starts at ₹500. Procedure costs vary — call us for current pricing. We make cardiac care accessible." },
              { q: "Is the clinic accessible for elderly patients?", a: "Yes. Our Janak Marg centre is fully accessible. Wheelchair assistance available." },
            ].map((faq) => (
              <div key={faq.q} className="py-7">
                <h3 className="font-semibold text-ink mb-2 text-sm">{faq.q}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-crimson text-white">
        <div className="section-container py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="section-label text-red-300 mb-3">Don't Wait</p>
              <h2 className="display-heading text-white text-4xl md:text-5xl max-w-sm">
                Your heart has been patient enough.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href={`tel:${siteConfig.phone1}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-crimson font-semibold text-sm px-6 py-3 hover:bg-red-50 transition-colors">
                <Phone size={15} /> {siteConfig.phone1}
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
