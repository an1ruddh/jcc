"use client";
import { useState } from "react";
import { Play, X, Video } from "lucide-react";
import { videos } from "@/lib/data";

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|watch\?v=))([^&\s?]+)/);
  return match?.[1] ?? null;
}

function isYouTube(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url);
}

function getYouTubeThumb(id: string): string {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

export function VideoSection() {
  const [active, setActive] = useState<typeof videos[number] | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-3 gap-5">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => v.src && setActive(v)}
            className={`group text-left rounded-xl overflow-hidden border border-gray-200 bg-white ${v.src ? "hover:border-crimson-300 hover:shadow-md cursor-pointer" : "cursor-default"} transition-all`}
          >
            <div className="relative aspect-video bg-primary-900 flex items-center justify-center overflow-hidden">
              {v.src ? (
                <>
                  {v.poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={v.poster} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  ) : isYouTube(v.src) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={getYouTubeThumb(getYouTubeId(v.src)!)} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  ) : (
                    <video src={v.src} className="absolute inset-0 w-full h-full object-cover opacity-80" muted preload="metadata" />
                  )}
                  <div className="relative w-12 h-12 bg-crimson-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={18} className="text-white fill-white" />
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-2 text-primary-300">
                  <Video size={28} />
                  <span className="text-[11px] tracking-widest uppercase">Coming Soon</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm text-primary-900 mb-1">{v.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Video modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-2">
              <p className="text-white text-sm font-medium pl-1">{active.title}</p>
              <button onClick={() => setActive(null)} aria-label="Close"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors shrink-0">
                <X size={18} />
              </button>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {isYouTube(active.src) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(active.src)}?autoplay=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video
                  src={active.src}
                  poster={active.poster || undefined}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
