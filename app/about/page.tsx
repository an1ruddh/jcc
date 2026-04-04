import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { doctorProfile, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dr. Raghvendra Choudhary – DM Cardiology | About",
  description: "Dr. Raghvendra Choudhary — DM Cardiology, SMS Medical College. 15+ years, 15,000+ cases, 8,000+ angioplasties. Rajasthan's top interventional cardiologist.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-bone">

      {/* Hero — doctor photo + name */}
      <section className="section-container pt-16 pb-0 border-b border-bone-border">
        <p className="section-label mb-8">The Doctor</p>
        <div className="grid lg:grid-cols-2 gap-0 items-end">

          {/* Left — name + bio */}
          <div className="pb-16 lg:pr-16">
            <h1 className="display-heading text-5xl md:text-6xl mb-4">
              Dr. Raghvendra<br />Choudhary
            </h1>
            <p className="text-crimson text-sm tracking-wide mb-6">
              DM Cardiology · Senior Interventional Cardiologist
            </p>
            <p className="text-ink-soft text-sm leading-relaxed max-w-md">
              {doctorProfile.bio}
            </p>
          </div>

          {/* Right — doctor photo */}
          <div className="relative border-l border-bone-border">
            {/* 
              PHOTO PLACEMENT:
              Replace /doctor-photo.jpg with your uploaded image.
              Recommended: portrait photo, min 600×750px, ideally on white/light background.
              Place the file at: public/doctor-photo.jpg
            */}
            <div className="relative w-full aspect-[4/5] bg-bone-dark overflow-hidden">
              {/* Placeholder shown until real photo is added */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="w-24 h-24 bg-crimson flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-white">RC</span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed max-w-xs">
                  Replace <code className="bg-bone-border px-1 py-0.5 text-crimson">/public/doctor-photo.jpg</code> with the doctor's photo to display it here.
                </p>
              </div>

              {/* Uncomment this once you add the photo: */}
              {/* 
              <Image
                src="/doctor-photo.jpg"
                alt="Dr. Raghvendra Choudhary — Senior Interventional Cardiologist, Jaipur"
                fill
                className="object-cover object-top"
                priority
              />
              */}
            </div>

            {/* Credential badge overlaid on photo */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-bone-border p-4">
              <div className="text-xs text-ink-muted tracking-widest uppercase mb-1">Credentials</div>
              <div className="font-semibold text-ink text-sm">MBBS · MD · DM Cardiology</div>
              <div className="text-xs text-crimson mt-0.5">SMS Medical College, Jaipur</div>
            </div>
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
