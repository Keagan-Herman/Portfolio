"use client";

export function GlobalFilters() {
  return (
    <svg
      className="pointer-events-none absolute h-0 w-0 opacity-0 overflow-hidden"
      aria-hidden="true"
    >
      <defs>
        {/* Ink Bleed Filter: Subtle blur + displacement + contrast to simulate ink spreading into paper fibers */}
        <filter id="ink-bleed">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="4"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.5"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="0.4" result="blur" />
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

        {/* Paper Grain Filter: High-frequency fractal noise */}
        <filter id="paper-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.1" />
            <feFuncG type="linear" slope="0.1" />
            <feFuncB type="linear" slope="0.1" />
          </feComponentTransfer>
        </filter>

        {/* Paper Fibers Filter: Low-frequency fractal noise for organic variations */}
        <filter id="paper-fibers-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.05" />
            <feFuncG type="linear" slope="0.05" />
            <feFuncB type="linear" slope="0.05" />
          </feComponentTransfer>
        </filter>

        {/* Letterpress / Inner Shadow Filter for Ghost Numerals */}
        <filter id="letterpress">
          <feOffset dx="0.5" dy="0.5" />
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feFlood floodColor="black" floodOpacity="0.3" result="color" />
          <feComposite operator="out" in="SourceGraphic" in2="blur" result="shadow" />
          <feComposite operator="in" in="color" in2="shadow" result="finalShadow" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="finalShadow" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
