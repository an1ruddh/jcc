import Link from "next/link";
import { Heart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart size={36} className="text-red-700" />
        </div>
        <h1 className="font-display text-5xl font-bold text-red-900 mb-3">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you are looking for does not exist. Return to our home page or contact us for assistance.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">Go to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
