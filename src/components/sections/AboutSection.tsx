"use client";

import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 bg-ink text-paper py-24 md:py-40 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">

        {/* Left — ghost label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="font-playfair font-black leading-[0.85] select-none pointer-events-none"
            style={{
              fontSize: "clamp(6rem, 14vw, 14rem)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(244,239,228,0.12)",
            }}
            aria-hidden="true"
          >
            About
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div
          data-cursor-label="READ"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <span className="mono-label text-terracotta block mb-6">01 — About</span>

          <h2
            className="font-playfair italic font-normal text-paper leading-[1.2] mb-10"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            {content.about.headline}
          </h2>

          {/* Callout block */}
          <div className="border-l-2 border-terracotta pl-6 mb-10">
            <p
              className="font-playfair italic text-paper/90 leading-[1.4]"
              style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
            >
              {content.about.callout}
            </p>
          </div>

          {/* Body paragraphs */}
          <div className="space-y-6">
            {content.about.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-cormorant text-paper/70 leading-[1.8]"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
