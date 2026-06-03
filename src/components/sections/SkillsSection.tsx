"use client";

import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 md:py-40 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-ink/10 pb-8 mb-4"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="mono-label text-terracotta">Section 03</span>
              <div className="h-px w-8 bg-terracotta/30" />
              <span className="mono-label opacity-30">REF: STACK-V1.02</span>
            </div>
            <h2
              className="font-playfair font-bold leading-[0.9] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              Technical<br />
              <em className="font-normal italic">Index</em>
            </h2>
          </div>
          <div className="max-w-xs space-y-4">
            <p className="font-cormorant opacity-55" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
              A working vocabulary built on production systems, not tutorials.
              Every item here has shipped in a real product.
            </p>
            <div className="flex gap-2">
               <div className="w-1 h-1 rounded-full bg-terracotta" />
               <span className="mono-label text-[0.6rem] opacity-30 uppercase">Full Stack Proficiency Audit</span>
            </div>
          </div>
        </motion.div>

        {/* Technical Ledger */}
        <div className="relative mt-12 border-t border-ink/10">

          {/* Marginalia */}
          <div className="absolute -left-16 top-0 h-full hidden xl:flex flex-col justify-between py-12 opacity-20 pointer-events-none">
            <div className="mono-label [writing-mode:vertical-lr] rotate-180 text-[0.6rem] tracking-[0.5em]">AUDIT LOG</div>
            <div className="mono-label [writing-mode:vertical-lr] rotate-180 text-[0.6rem] tracking-[0.5em]">CAPABILITY MATRIX</div>
          </div>

          {content.skills.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] border-b border-ink/10 relative overflow-hidden"
              data-hover
            >
              {/* Row Highlight */}
              <div className="absolute inset-0 bg-[#ece6d8] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              {/* Category Column */}
              <div className="relative z-10 p-8 border-r border-ink/10 flex flex-col justify-between">
                 <div className="space-y-1">
                    <span className="mono-label text-[0.6rem] text-terracotta opacity-50 group-hover:opacity-100 transition-opacity">
                      ITEM NO. {group.number}
                    </span>
                    <h3 className="font-playfair font-bold text-2xl group-hover:text-terracotta transition-colors">
                      {group.title}
                    </h3>
                 </div>
                 <span className="mono-label text-[0.65rem] opacity-30 mt-4 group-hover:opacity-60 transition-opacity">
                    {group.subtitle.toUpperCase()}
                 </span>
              </div>

              {/* Tags Column */}
              <div className="relative z-10 p-8 md:p-12 flex flex-wrap gap-x-4 gap-y-6 items-center">
                {group.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-3 group/tag">
                    <div className="w-1.5 h-1.5 rounded-full border border-terracotta/30 group-hover/tag:bg-terracotta transition-colors" />
                    <span className="font-cormorant text-xl md:text-2xl opacity-70 group-hover/tag:opacity-100 group-hover/tag:text-ink transition-all">
                      {tag}
                    </span>
                  </div>
                ))}

                {/* Technical watermark per row */}
                <div className="absolute right-4 bottom-4 mono-label text-[0.5rem] opacity-5 pointer-events-none select-none">
                  SEC_{group.id.toUpperCase()} {'//'} STATUS: VERIFIED
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-12 flex justify-between items-center opacity-20">
           <div className="mono-label text-[0.6rem] tracking-widest">END OF TECHNICAL INDEX</div>
           <div className="h-px flex-1 mx-8 bg-ink/30" />
           <div className="mono-label text-[0.6rem] tracking-widest">P.03 / 07</div>
        </div>
      </div>
    </section>
  );
}
