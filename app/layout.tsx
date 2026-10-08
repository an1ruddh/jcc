import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaipurcardiaccentre.com"),
  title: {
    default: `${siteConfig.name} | Dr. Raghvendra Choudhary – Cardiologist Jaipur`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Best cardiologist in Jaipur. Dr. Raghvendra Choudhary – DM Cardiology, 25+ years, 15,000+ cardiac cases, 15,000+ angioplasties. Book: +91 8107667788.",
  keywords: ["cardiologist jaipur", "best cardiologist jaipur", "Dr Raghvendra Choudhary", "heart doctor jaipur", "angioplasty jaipur", "cardiac centre jaipur", "heart specialist rajasthan"],
  authors: [{ name: "Dr. Raghvendra Choudhary" }],
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://jaipurcardiaccentre.com",
    siteName: siteConfig.name,
    title: "Jaipur Cardiac Centre | Dr. Raghvendra Choudhary",
    description: "DM Cardiology specialist with 25+ years experience and 15,000+ successful angioplasties.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://jaipurcardiaccentre.com" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://jaipurcardiaccentre.com/#business",
      name: "Jaipur Cardiac Centre",
      url: "https://jaipurcardiaccentre.com",
      telephone: "+91-8107667788",
      email: "jaipurcardiaccentre@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "52 Janak Marg, Hanuman Nagar Extension",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302012",
        addressCountry: "IN",
      },
      medicalSpecialty: "Cardiology",
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "18:00" },
      ],
      priceRange: "₹₹",
      image: "https://jaipurcardiaccentre.com/doctor-photo.jpg",
      sameAs: [
        "https://www.google.com/maps?cid=11922698404612867460",
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://jaipurcardiaccentre.com/#doctor",
      name: "Dr. Raghvendra Choudhary",
      jobTitle: "Senior Interventional Cardiologist",
      medicalSpecialty: "Cardiology",
      alumniOf: { "@type": "EducationalOrganization", name: "SMS Medical College, Jaipur" },
      knowsAbout: [
        { "@type": "MedicalTopic", name: "Coronary Angioplasty" },
        { "@type": "MedicalTopic", name: "Heart Failure Management" },
        { "@type": "MedicalTopic", name: "Pacemaker Implantation" },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
