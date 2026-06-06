"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MarginaliaProps {
  id: string;
  number: string;
  children: React.ReactNode;
  note: string;
}

export function Marginalia({ id, number, children, note }: MarginaliaProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block group/marginalia">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`note-${id}`}
        className="cursor-help border-b border-terracotta/30 hover:border-terracotta transition-colors duration-300 inline-flex items-baseline text-left p-0 bg-transparent border-0 font-inherit"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        {children}
        <sup className="text-[0.6rem] font-dm-mono text-terracotta ml-0.5 select-none">
          [{number}]
        </sup>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            id={`note-${id}`}
            role="tooltip"
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 40, y: -20 }}
            exit={{ opacity: 0, x: 20, y: -10 }}
            className="absolute z-[100] left-full top-0 w-48 md:w-64 pointer-events-none"
          >
            <span className="block bg-paper/95 backdrop-blur-sm border border-ink/10 p-4 shadow-xl relative">
              {/* Reference Connector */}
              <span className="absolute right-full top-6 w-10 h-px bg-terracotta/30" />

              <span className="mono-label text-[0.6rem] text-terracotta block mb-2 opacity-50">
                FOOTNOTE_REF_{id.toUpperCase()}
              </span>
              <span className="font-cormorant text-sm italic leading-relaxed text-ink/80 block">
                {note}
              </span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
