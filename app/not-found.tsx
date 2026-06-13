import Link from "next/link";
import { Heart, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-crimson-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart size={36} className="text-crimson-600" fill="currentColor" />
        </div>
        <h1 className="text-5xl font-bold text-primary-900 mb-3">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you are looking for does not exist. Return to our home page or contact us for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Go to Home
          </Link>
          <a href={`tel:${siteConfig.phone1}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            <Phone size={15} /> Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
