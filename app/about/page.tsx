import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Award, Phone } from "lucide-react";
import { doctorProfile, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dr. Raghvendra Choudhary – DM Cardiology | About",
  description:
    "Learn about Dr. Raghvendra Choudhary — DM Cardiology from SMS Medical College, Jaipur. 25+ years, 15,000+ cases, 10,000+ angioplasties. Rajasthan's top interventional cardiologist.",
  alternates: { canonical: "https://jaipurcardiaccentre.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-16">
        <div className="section-container">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> About Doctor
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Dr. Raghvendra Choudhary</h1>
          <p className="text-blue-100 text-lg max-w-2xl">DM Cardiology · Senior Interventional Cardiologist · 25+ Years Experience</p>
        </div>
      </section>

      {/* Profile */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-7 border border-blue-100 sticky top-24">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-5">RC</div>
                <h2 className="font-bold text-gray-900 text-center text-lg mb-1">{doctorProfile.name}</h2>
                <p className="text-blue-700 text-sm text-center mb-5">{doctorProfile.title}</p>
                <div className="space-y-2 mb-5">
                  {doctorProfile.qualifications.map(q => (
                    <div key={q} className="bg-white border border-blue-200 text-blue-800 text-xs font-semibold rounded-full px-3 py-1.5 text-center">{q}</div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 text-center mb-5">{doctorProfile.institution}</div>
                <a href={`tel:${siteConfig.phone1}`} className="btn-accent w-full justify-center text-sm py-2.5">
                  <Phone size={15} /> Book Appointment
                </a>
              </div>
            </div>

            {/* Main */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-blue-900 mb-4">Biography</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{doctorProfile.bio}</p>
                <p className="text-gray-700 leading-relaxed">{doctorProfile.bio2}</p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-blue-900 mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {doctorProfile.expertise.map(e => (
                    <div key={e} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-teal-600 shrink-0" />
                      {e}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-blue-900 mb-4">Achievements</h3>
                <div className="space-y-3">
                  {doctorProfile.achievements.map(a => (
                    <div key={a} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <Award size={18} className="text-blue-700 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-gray-800">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-blue-900 mb-6">Career Timeline</h3>
                <div className="relative border-l-2 border-blue-200 pl-6 space-y-6">
                  {doctorProfile.timeline.map((t, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] w-4 h-4 bg-blue-700 rounded-full border-2 border-white" />
                      <div className="text-xs font-bold text-blue-700 mb-1">{t.year}</div>
                      <div className="text-sm text-gray-700">{t.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
