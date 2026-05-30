"use client";

import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 bg-[#ece6d8] py-24 md:py-40 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start mb-20">
          <div
            className="font-playfair font-black leading-[0.85] select-none pointer-events-none hidden md:block"
            style={{
              fontSize: "clamp(7rem, 15vw, 15rem)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(17,16,9,0.12)",
            }}
            aria-hidden="true"
          >
            02
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <h2
              className="font-playfair font-bold leading-[0.9]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
            >
              Work<br />
              <em className="font-normal">Experience</em>
            </h2>
          </motion.div>
        </div>

        {/* Experience items */}
        <div className="border-t border-ink/10">
          {content.experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-4 md:gap-12
                         items-start py-12 border-b border-ink/10
                         hover:bg-ink/[0.02] transition-all duration-300"
            >
              {/* Period */}
              <div className="mono-label opacity-35 pt-1 order-2 md:order-1">{item.period}</div>

              {/* Details */}
              <div className="order-1 md:order-2 relative">
                <h3
                  className="font-playfair font-bold leading-none mb-2"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                >
                  {item.role}
                </h3>
                <p className="font-playfair italic text-terracotta mb-6" style={{ fontSize: "1.1rem" }}>
                  {item.company}
                </p>

                <ul className="space-y-3">
                  {item.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3 font-cormorant opacity-70" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                      <span className="opacity-40 flex-shrink-0 mt-0.5">—</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Stamp Effect for Present role */}
                {item.period.includes("Present") && (
                  <div className="absolute -top-6 -right-4 md:-right-12 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 rotate-12">
                    <div className="border-2 border-terracotta rounded-sm px-3 py-1 text-terracotta font-playfair font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                      Active Deployment
                    </div>
                  </div>
                )}
              </div>

              {/* Right column placeholder/branding */}
              <div className="hidden md:block order-3">
                <div className="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
