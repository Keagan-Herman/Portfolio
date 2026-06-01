"use client";

import { motion } from "framer-motion";

export function Colophon() {
  return (
    <footer className="relative z-10 py-24 px-8 md:px-24 bg-paper border-t border-ink/5 overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Typeface Credits */}
        <div className="space-y-6">
          <span className="mono-label text-terracotta/60 block">Typeset</span>
          <div className="space-y-8">
            <div className="group">
              <h4 className="font-playfair text-2xl mb-1 group-hover:text-terracotta transition-colors">Playfair Display</h4>
              <p className="font-cormorant text-ink/60 text-sm italic">Headlines & Display. Selected for its high stroke contrast and elegant italics.</p>
            </div>
            <div className="group">
              <h4 className="font-cormorant font-bold text-2xl mb-1 group-hover:text-terracotta transition-colors">Cormorant Garamond</h4>
              <p className="font-cormorant text-ink/60 text-sm italic">Body & Narrative. A free interpretation of the Claude Garamond's immortal grecs du roi.</p>
            </div>
            <div className="group">
              <h4 className="font-dm-mono text-xl mb-1 group-hover:text-terracotta transition-colors uppercase tracking-widest">DM Mono</h4>
              <p className="font-cormorant text-ink/60 text-sm italic">Marginalia & Data. A technical counterpoint to the organic curves of the serif family.</p>
            </div>
          </div>
        </div>

        {/* Production Notes */}
        <div className="space-y-6">
          <span className="mono-label text-terracotta/60 block">Production</span>
          <div className="space-y-4 font-cormorant text-ink/80 leading-relaxed">
            <p>
              This portfolio is built as a digital monograph, prioritizing the tactile rhythm of ink on paper over standard web patterns.
            </p>
            <p>
              Engineered with <span className="font-dm-mono text-xs border-b border-terracotta/30">Next.js 15</span>,
              <span className="font-dm-mono text-xs border-b border-terracotta/30 ml-1">Tailwind v4</span>, and
              <span className="font-dm-mono text-xs border-b border-terracotta/30 ml-1">Framer Motion</span>.
            </p>
            <p>
              The "Ink Bleed" effect is achieved via a custom SVG turbulence and color matrix filter, applied selectively to primary headlines.
            </p>
          </div>
        </div>

        {/* Closing Stamp */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <div className="text-left md:text-right space-y-2">
            <div className="inline-block border-2 border-ink p-4 -rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="font-playfair font-black text-3xl leading-none">KH</span>
              <span className="block mono-label text-[0.5rem] mt-1">CAPETOWN / SA</span>
            </div>
          </div>
          <div className="mt-12 md:mt-0 text-left md:text-right">
            <p className="font-playfair italic text-ink/30 text-xs">
              © {new Date().getFullYear()} Keagan Herman.<br />
              All rights reserved. Printed digitally.
            </p>
          </div>
        </div>
      </div>

      {/* Ghost Anchor */}
      <div
        className="absolute -bottom-10 -right-10 font-playfair font-black text-ink/[0.03] pointer-events-none select-none"
        style={{ fontSize: '20rem' }}
      >
        KH
      </div>
    </footer>
  );
}
