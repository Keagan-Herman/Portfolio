"use client";

export function PaperTexture() {
  return (
    <>
      {/* Base Paper Grain - Persistent Fractal Noise (High Frequency) */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.06] mix-blend-multiply overflow-hidden">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="100%" height="100%" filter="url(#paper-grain-filter)" />
        </svg>
      </div>

      {/* Low Frequency Noise for Paper "Variations" (Fibrous feel) */}
      <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] mix-blend-multiply overflow-hidden">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="100%" height="100%" filter="url(#paper-fibers-filter)" />
        </svg>
      </div>

      {/* Dynamic Animated Grain - Subtle flicker for "Living Document" feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] mix-blend-multiply overflow-hidden">
        <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('/textures/natural-paper.png')] animate-grain" />
      </div>

      {/* Subtle vignettes for depth and page curvature */}
      <div className="fixed inset-0 pointer-events-none z-[101] overflow-hidden">
         {/* Overall soft vignette */}
         <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(17,16,9,0.08)]" />

         {/* Inner "binding" shadow simulation - subtle dark strip on the left */}
         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink/5 to-transparent opacity-50" />

         {/* Right edge soft lift */}
         <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink/2 to-transparent" />
      </div>
    </>
  );
}
