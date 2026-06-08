"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";
import { Marginalia } from "@/components/ui/Marginalia";

const content = contentData as Content;

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yGhost = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative z-10 bg-[#ece6d8] py-[calc(var(--spacing-grid)*3)] md:py-[calc(var(--spacing-grid)*5)] px-8 md:px-24"
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Header - Report Title Style */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start mb-24">
          <motion.div
            className="font-playfair font-black leading-[0.85] select-none pointer-events-none hidden md:block"
            style={{
              fontSize: "clamp(7rem, 15vw, 15rem)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(17,16,9,0.12)",
              filter: "url(#letterpress)",
              y: yGhost
            }}
            aria-hidden="true"
          >
            02
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <div className="mono-label text-terracotta mb-2 tracking-[0.3em] uppercase text-xs">Technical Dossier</div>
            <h2
              className="font-playfair font-bold leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", textWrap: "balance" } as React.CSSProperties}
            >
              Career<br />
              <em className="font-normal italic">Chronology</em>
            </h2>
            <div className="mt-6 flex gap-4">
              <div className="h-px w-12 bg-ink/20 mt-3"></div>
              <p className="font-cormorant italic text-xl opacity-60 max-w-md">
                A documented history of technical leadership, systems architecture, and product development across the digital landscape.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Experience items - The Report Layout */}
        <div className="border-b border-ink/10 relative">
          {/* Marginalia for the list */}
          <div className="absolute -left-12 top-0 h-full hidden xl:flex flex-col justify-between py-24 opacity-20 pointer-events-none">
            <div className="mono-label [writing-mode:vertical-lr] rotate-180 text-[0.6rem] tracking-[0.4em]">CHRONOLOGICAL LOG</div>
            <div className="mono-label [writing-mode:vertical-lr] rotate-180 text-[0.6rem] tracking-[0.4em]">SYSTEMS ARCHITECTURE</div>
          </div>

          {content.experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[160px_280px_1fr] gap-8 md:gap-12
                         py-16 border-t border-ink/10 relative overflow-hidden"
              data-hover

            >
              {/* Subtle background highlight on hover */}
              <div className="absolute inset-0 bg-ink/[0.02] translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

              {/* Column 1: Period & Index */}
              <div className="relative flex flex-col justify-between h-full py-1">
                <div className="mono-label text-xs opacity-40 tracking-widest uppercase">
                  {item.period}
                </div>
                <div className="hidden md:block font-playfair italic text-4xl opacity-[0.03] select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Column 2: Entity & Role */}
              <div className="relative space-y-6">
                <motion.div
                  initial={{ rotate: i % 2 === 0 ? -2 : 2, scale: 0.9 }}
                  whileInView={{ rotate: i % 2 === 0 ? -1 : 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className="inline-block relative"
                >
                   {/* Stamp effect for company */}
                   <div className="relative z-10 px-4 py-1.5 border border-ink/30 mono-label text-[0.7rem] tracking-[0.2em] uppercase bg-paper/50 shadow-[2px_2px_0px_rgba(17,16,9,0.05)]">
                    {item.company}
                  </div>
                  <div className="absolute -inset-1 border border-terracotta/20 -rotate-1 pointer-events-none group-hover:rotate-1 transition-transform duration-500" />
                </motion.div>

                <h3 className="font-playfair font-bold text-3xl leading-tight tracking-tight group-hover:text-terracotta transition-colors duration-300">
                  {item.role}
                </h3>

                <div className="flex items-center gap-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 + i * 0.1 }}
                    className="w-1 h-1 rounded-full bg-terracotta"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 1.5, rotate: -5 }}
                    whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.6 + i * 0.1,
                      scale: { type: "spring", stiffness: 400, damping: 15 }
                    }}
                    className="mono-label text-[0.6rem] uppercase tracking-tighter"
                  >
                    Verified Employment Record
                  </motion.div>
                </div>
              </div>

              {/* Column 3: Details - The "Executive Summary" */}
              <div className="relative md:pl-12 md:border-l border-ink/5">
                {i === 0 && (
                   <p className="font-cormorant text-2xl leading-relaxed text-ink/60 italic mb-10 max-w-xl">
                      <span className="float-left text-[4rem] leading-[0.8] font-playfair font-black pr-3 pt-1 text-terracotta not-italic select-none">B</span>
                      oth entries below are systems I inherited and owned, not tickets I closed. Real users, real load, no documentation waiting for me.
                   </p>
                )}
                <ul className="space-y-6">
                  {item.highlights.map((point, j) => (
                    <li key={j} className="group/item flex gap-6 font-cormorant text-xl leading-relaxed text-ink/80">
                      <div className="flex flex-col items-center pt-2">
                        <span className="mono-label text-[0.6rem] opacity-20 group-hover/item:opacity-100 transition-opacity">0{j+1}</span>
                        <div className="w-px h-full bg-ink/5 group-hover/item:bg-terracotta/30 transition-colors" />
                      </div>
                      <p className="flex-1 group-hover/item:text-ink transition-colors">
                        {(() => {
                          const marginalia = item.marginalia;
                          if (!marginalia) return point;
                          const keys = Object.keys(marginalia);
                          const pattern = new RegExp(`(${keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
                          const parts = point.split(pattern);
                          return parts.map((part, idx) => {
                            if (marginalia[part]) {
                              return (
                                <Marginalia
                                  key={idx}
                                  id={part.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                                  number={marginalia[part].number}
                                  note={marginalia[part].note}
                                >
                                  {part}
                                </Marginalia>
                              );
                            }
                            return part;
                          });
                        })()}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Stamp Effect for Present role */}
                {item.period.includes("Present") && (
                  <motion.div
                    initial={{ opacity: 0, scale: 2, rotate: 25 }}
                    whileInView={{ opacity: 0.2, scale: 1, rotate: 12 }}
                    viewport={{ once: true }}
                    whileHover={{ opacity: 0.4, scale: 1.05 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8,
                      scale: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    className="absolute -top-6 -right-4 md:-right-12 pointer-events-none transition-opacity duration-500"
                  >
                    <div className="border-2 border-terracotta rounded-sm px-3 py-1 text-terracotta font-playfair font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                      Active Deployment
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer - Ledger Metadata */}
        <div className="mt-12 flex flex-wrap justify-between items-end gap-8 opacity-30">
          <div className="mono-label text-[0.65rem] tracking-widest uppercase">
            End of Record // REF: {new Date().getFullYear()}-EXP-LOG
          </div>
          <div className="flex gap-8">
            <div className="mono-label text-[0.65rem]">LAT: 33.9608° S</div>
            <div className="mono-label text-[0.65rem]">LONG: 25.6022° E</div>
          </div>
        </div>
      </div>
    </section>
  );
}
