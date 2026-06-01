"use client";

export function GlobalFilters() {
  return (
    <svg
      className="pointer-events-none absolute h-0 w-0 opacity-0 overflow-hidden"
      aria-hidden="true"
    >
      <defs>
        {/* Ink Bleed Filter: Subtle blur + contrast to simulate ink spreading into paper fibers */}
        <filter id="ink-bleed">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
            result="ink-bleed"
          />
          <feComposite in="SourceGraphic" in2="ink-bleed" operator="atop" />
        </filter>

        {/* Paper Grain Filter: Fractal noise for a more tactile surface */}
        <filter id="paper-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.1" />
            <feFuncG type="linear" slope="0.1" />
            <feFuncB type="linear" slope="0.1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
