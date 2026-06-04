"use client";

import { motion, useReducedMotion } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function EducationSection() {
  const edu = content.education;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="relative z-10 bg-ink text-paper py-24 md:py-40 px-8 md:px-24 overflow-hidden">
      {/* Ink Spread Entry Animation */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-ink"
        />
      )}

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-r-0 md:border-r border-paper/10 pr-0 md:pr-16"
          >
            <span className="mono-label text-terracotta block mb-8">Academic Record</span>
            <h3
              className="font-playfair font-bold text-paper leading-[1.1] mb-2"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              {edu.degree}
            </h3>
            <p className="font-playfair italic text-terracotta mb-2" style={{ fontSize: "1.2rem" }}>
              {edu.institution}
            </p>
            <span className="mono-label opacity-35">{edu.period}</span>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.2 }}
            className="pl-0 md:pl-16 border-l-0 md:border-l border-paper/10"
          >
            <p
              className="font-playfair text-paper/80 leading-[1.35]"
              style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)" }}
              dangerouslySetInnerHTML={{ __html: edu.ethos.replace(
                "Production systems gave me the judgment.",
                "<em>Production systems gave me the judgment.</em>"
              )}}
            />
            <p className="font-cormorant italic text-paper/40 mt-8 leading-[1.7]" style={{ fontSize: "1rem" }}>
              Within 2 years of graduating I was the sole developer on two live systems
              serving hundreds of real clients. That&apos;s the education that counts.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
