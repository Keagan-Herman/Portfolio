"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yGhost = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 bg-ink text-paper py-24 md:py-40 px-8 md:px-24 overflow-hidden"
    >
      {/* Ink Spread Entry Animation */}
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        whileInView={{ clipPath: "circle(150% at 50% 50%)" }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-ink"
      />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start relative z-10">

        {/* Left — ghost label */}
        <motion.div
          style={{ y: yGhost }}
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
              filter: "url(#letterpress)",
            }}
            aria-hidden="true"
          >
            About
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8, // Wait for ink spread to start appearing
              }
            }
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="mono-label text-terracotta block mb-6"
          >
            Biography
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-playfair italic font-normal text-paper leading-[1.1] mb-10 tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", textWrap: "balance" } as React.CSSProperties}
          >
            {content.about.headline}
          </motion.h2>

          {/* Callout block */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="border-t border-b border-paper/10 py-8 mb-12"
          >
            <p
              className="font-playfair italic text-paper leading-[1.3] tracking-tight"
              style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.7rem)" }}
            >
              {content.about.callout}
            </p>
          </motion.div>

          {/* Body paragraphs */}
          <div className="space-y-8">
            {content.about.body.map((paragraph, i) => (
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={i}
                className="font-cormorant text-paper/75 leading-[1.9]"
                style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)" }}
              >
                {i === 0 ? (
                  <>
                    <span className="float-left text-[4.5rem] leading-[0.8] font-playfair font-black pr-4 pt-1 text-terracotta select-none">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </>
                ) : paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
