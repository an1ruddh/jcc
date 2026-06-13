import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, ArrowRight, Star, CheckCircle2, HeartPulse, HeartCrack, Activity,
  Gauge, Heart, Droplet, ShieldCheck, Footprints, Apple, Stethoscope,
} from "lucide-react";
import {
  siteConfig, testimonials, conditionsTreated, diagnosticsList,
  treatmentsList, lifestyleCategories,
} from "@/lib/data";
import Image from "next/image";
import { ProcedureGallery } from "@/components/ProcedureGallery";
import { VideoSection } from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "Best Cardiologist in Jaipur | Dr. Raghvendra Choudhary",
  description: "Jaipur Cardiac Centre — Dr. Raghvendra Choudhary, DM Cardiology with 25+ years experience & 10,000+ angioplasties. Book appointment: +91 8107667788.",
  alternates: { canonical: "https://jaipurcardiaccentre.com" },
};

const conditionIcons: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse size={32} className="text-crimson-600" />,
  HeartCrack: <HeartCrack size={32} className="text-crimson-600" />,
  Activity: <Activity size={32} className="text-crimson-600" />,
  Gauge: <Gauge size={32} className="text-crimson-600" />,
  Heart: <Heart size={32} className="text-crimson-600" />,
  Droplet: <Droplet size={32} className="text-crimson-600" />,
};

const lifestyleIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={22} />,
  Footprints: <Footprints size={22} />,
  Apple: <Apple size={22} />,
};

const lifestyleColors: Record<string, { bg: string; border: string; icon: string; check: string }> = {
  green: { bg: "bg-green-50", border: "border-green-100", icon: "text-green-600 bg-green-100", check: "text-green-600" },
  blue: { bg: "bg-primary-50", border: "border-primary-100", icon: "text-primary-700 bg-primary-100", check: "text-primary-600" },
  orange: { bg: "bg-orange-50", border: "border-orange-100", icon: "text-orange-600 bg-orange-100", check: "text-orange-600" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What heart conditions does Dr. Raghvendra Choudhary treat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Choudhary treats all types of cardiac conditions including coronary artery disease, heart failure, arrhythmias, hypertension, valvular heart disease, and high cholesterol. He has successfully managed 15,000+ cardiac cases with a 98% success rate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my chest pain is heart-related or just gas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heart-related chest pain often feels like pressure, squeezing, or tightness that may radiate to the arm, jaw, or back. It can be accompanied by shortness of breath, cold sweats, or nausea. Gas pain is typically sharp, localized, and relieved by passing gas or burping. If you're unsure, always seek emergency care — many heart attack survivors initially mistook their symptoms for acidity.",
      },
    },
    {
      "@type": "Question",
      name: "What should I expect during my first visit to Jaipur Cardiac Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your first visit includes a thorough consultation, review of medical history, and necessary diagnostic tests such as ECG or echocardiography. Dr. Choudhary takes time to explain your condition and treatment options in simple language. The clinic is equipped with advanced diagnostics for accurate, same-day assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle emergency cardiac cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we handle cardiac emergencies including heart attacks, unstable angina, and acute heart failure. For emergencies, call +91 8107667788 immediately. Dr. Choudhary has performed over 10,000 emergency angioplasties with outstanding outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment with Dr. Raghvendra Choudhary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book by calling +91 8107667788 or +91 9414262690, sending a message through the contact form on this website, or chatting via WhatsApp. We respond within a few hours on working days.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 overflow-hidden">
        <div className="section-container py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary-900 leading-tight mb-5">
                Expert Care for<br />
                Every <span className="text-crimson-600">Heart</span>beat
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mb-8">
                Comprehensive cardiac care from Dr. Raghvendra Choudhary — 25+ years
                of experience, advanced diagnostics, personalised treatment, and
                preventive strategies for a healthier heart.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phone1}`}
                  className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Consult Now <ArrowRight size={16} />
                </a>
                <Link href="/about"
                  className="inline-flex items-center gap-2 border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Doctor photo */}
            <div className="relative max-w-md mx-auto">
              <Image
                src="/doctor-photo.jpg"
                alt="Dr. Raghvendra Choudhary"
                width={600}
                height={700}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HEART CONDITIONS WE TREAT ── */}
      <section className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-12">
          Heart Conditions We Treat
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {conditionsTreated.map((c) => (
            <div key={c.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-crimson-50 flex items-center justify-center">
                {conditionIcons[c.icon]}
              </div>
              <p className="text-sm font-semibold text-primary-900 leading-snug">{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIAGNOSTICS & TREATMENTS ── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container grid md:grid-cols-2 gap-6">

          {/* Diagnostics */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7">
            <h3 className="text-xl font-bold text-primary-900 mb-1">Diagnostics &amp; Tests</h3>
            <p className="text-sm text-gray-500 mb-6">Advanced technology for accurate diagnosis</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {diagnosticsList.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatments */}
          <div className="bg-white rounded-2xl border border-gray-200 p-7">
            <h3 className="text-xl font-bold text-primary-900 mb-1">Treatment Options</h3>
            <p className="text-sm text-gray-500 mb-6">Personalised treatment for better outcomes</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {treatmentsList.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCEDURE GALLERY ── */}
      <section className="section-container py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">Inside Our Centre</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            A look at our facilities and procedures. Tap any tile to view details.
          </p>
        </div>
        <ProcedureGallery />
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">Watch &amp; Learn</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Short educational videos from Dr. Choudhary on heart health, procedures and recovery.
            </p>
          </div>
          <VideoSection />
        </div>
      </section>

      {/* ── LIFESTYLE / PREVENTION ── */}
      <section className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {lifestyleCategories.map((cat) => {
            const c = lifestyleColors[cat.color];
            return (
              <div key={cat.title} className={`rounded-2xl border ${c.border} ${c.bg} p-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${c.icon}`}>
                    {lifestyleIcons[cat.icon]}
                  </div>
                  <h3 className="font-bold text-primary-900">{cat.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={15} className={`${c.check} mt-0.5 shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STATS + TESTIMONIALS ── */}
      <section className="bg-primary-900 text-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-14">
            {siteConfig.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-crimson-400 mb-1">{s.value}</div>
                <div className="text-xs md:text-sm text-primary-200 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">What Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-primary-100 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-primary-300">{t.condition} · {t.location}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-sm font-medium text-crimson-300 hover:text-crimson-200 transition-colors">
              Read All Stories <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-container py-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-primary-900 text-lg">Your Heart Deserves the Best Care</h3>
              <p className="text-sm text-gray-500">Consult our expert cardiologist today.</p>
            </div>
          </div>
          <a href={`tel:${siteConfig.phone1}`}
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shrink-0 w-full md:w-auto justify-center">
            <Phone size={16} /> Book an Appointment
          </a>
        </div>
      </section>

    </div>
    </>
  );
}
