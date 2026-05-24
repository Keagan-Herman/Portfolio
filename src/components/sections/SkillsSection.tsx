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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-ink/10 pb-8 mb-16"
        >
          <h2
            className="font-playfair font-bold leading-[0.9] tracking-[-0.01em]"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            Technical<br />
            <em className="font-normal">Skills</em>
          </h2>
          <p className="font-cormorant opacity-55 max-w-sm" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
            A working vocabulary built on production systems, not tutorials.
            Every item here has shipped in a real product.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content.skills.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 3) * 0.1,
              }}
              className="relative p-8 border-r border-b border-ink/10 hover:bg-[#ece6d8] transition-colors duration-200 group"
            >
              {/* Ghost number */}
              <span className="absolute top-5 right-5 mono-label opacity-20 group-hover:opacity-30 transition-opacity">
                {group.number}
              </span>

              <h3 className="font-playfair font-bold text-xl mb-1">{group.title}</h3>
              <p className="mono-label text-terracotta mb-6">{group.subtitle}</p>

              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-label border border-ink/20 px-2 py-1 opacity-60"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
