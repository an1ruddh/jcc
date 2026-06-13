import type { Metadata } from "next";
import { Phone, CheckCircle2, Award } from "lucide-react";
import { doctorProfile, siteConfig } from "@/lib/data";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Dr. Raghvendra Choudhary – DM Cardiology | About",
  description: "Dr. Raghvendra Choudhary — DM Cardiology, SMS Medical College. 25+ years, 15,000+ cases, 10,000+ angioplasties. Rajasthan's top interventional cardiologist.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero — doctor photo + name */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50">
        <div className="section-container py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Text */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-3">The Doctor</p>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-900 mb-4">
                Dr. Raghvendra Choudhary
              </h1>
              <p className="text-crimson-600 text-sm font-medium mb-4">
                DM Cardiology · Senior Interventional Cardiologist
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                {doctorProfile.bio}
              </p>
            </div>

          
{/* Doctor photo */}
<div className="relative max-w-sm mx-auto">
  <Image
    src="/doctor-photo.jpg"
    alt="Dr. Raghvendra Choudhary"
    width={600}
    height={750}
    className="w-full h-auto rounded-2xl shadow-xl object-cover"
    priority
  />

  {/* Credential badge */}
  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl border border-primary-100 p-4 shadow-lg">
    <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">
      Credentials
    </div>
    <div className="font-semibold text-primary-900 text-sm">
      MBBS · MD · DM Cardiology
    </div>
    <div className="text-xs text-crimson-600 mt-0.5">
      SMS Medical College, Jaipur
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Bio + credentials */}
      <section className="section-container py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Sidebar */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-4">Qualifications</p>
              <div className="space-y-2 mb-1">
                {doctorProfile.qualifications.map(q => (
                  <div key={q} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={15} className="text-green-600 shrink-0" />
                    <span className="font-medium text-primary-900">{q}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2 pl-6">{doctorProfile.institution}</div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-4">Areas of Expertise</p>
              <div className="space-y-2">
                {doctorProfile.expertise.map(e => (
                  <div key={e} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-green-600 shrink-0" /> {e}
                  </div>
                ))}
              </div>
            </div>

            <a href={`tel:${siteConfig.phone1}`}
              className="flex items-center justify-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors w-full">
              <Phone size={15} /> Book Appointment
            </a>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-4">In His Own Words</p>
              <blockquote className="text-2xl md:text-3xl font-bold text-primary-900 mb-5 leading-snug">
                "Every patient who walks in is someone's entire world. I treat them that way."
              </blockquote>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{doctorProfile.bio2}</p>
            </div>

            {/* Achievements */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-4">Milestones</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {doctorProfile.achievements.map((a) => (
                  <div key={a} className="flex items-start gap-3 bg-primary-50 rounded-xl p-4 border border-primary-100">
                    <Award size={18} className="text-primary-700 mt-0.5 shrink-0" />
                    <p className="text-sm font-medium text-primary-900">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-crimson-600 mb-5">Career Timeline</p>
              <div className="relative border-l-2 border-primary-100 pl-6 space-y-6">
                {doctorProfile.timeline.map((t) => (
                  <div key={t.year + t.event} className="relative">
                    <div className="absolute -left-[29px] w-4 h-4 bg-crimson-600 rounded-full border-2 border-white" />
                    <div className="text-xs font-bold text-crimson-600 mb-1">{t.year}</div>
                    <div className="text-sm text-gray-700">{t.event}</div>
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
