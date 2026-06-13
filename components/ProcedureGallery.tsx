"use client";
import { useState } from "react";
import { X, Stethoscope, ZoomIn } from "lucide-react";
import { procedureGallery } from "@/lib/data";

export function ProcedureGallery() {
  const [active, setActive] = useState<typeof procedureGallery[number] | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {procedureGallery.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="group relative aspect-square bg-primary-50 border border-primary-100 rounded-xl overflow-hidden hover:border-crimson-300 hover:shadow-md transition-all text-left"
          >
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3 text-center">
                <Stethoscope size={28} className="text-primary-300 group-hover:text-crimson-400 transition-colors" />
                <span className="text-[11px] font-medium text-primary-700 leading-tight">{p.title}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors flex items-center justify-center">
              <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="absolute top-1.5 left-1.5 text-[10px] font-semibold bg-white/90 text-crimson-600 px-1.5 py-0.5 rounded">
              {p.category}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-primary-50">
              {active.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <Stethoscope size={48} className="text-primary-300" />
                  <p className="text-xs text-primary-400 px-8 text-center">
                    Photo placeholder — add an image at <code className="bg-primary-100 text-primary-700 px-1 rounded">/public/procedures/{active.id}.jpg</code> and set the <code className="bg-primary-100 text-primary-700 px-1 rounded">image</code> field in <code className="bg-primary-100 text-primary-700 px-1 rounded">lib/data.ts</code>
                  </p>
                </div>
              )}
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-crimson-600 tracking-wide uppercase">{active.category}</span>
              <h3 className="font-bold text-primary-900 text-lg mt-1 mb-2">{active.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
