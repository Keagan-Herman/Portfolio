"use client";

import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-40 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-playfair font-black leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
            >
              Let&apos;s
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px var(--color-ink)",
                }}
              >
                work.
              </span>
            </h2>
            <p className="font-playfair italic opacity-50 mt-6" style={{ fontSize: "1.2rem" }}>
              Open to new roles, freelance work, and interesting problems.
            </p>
          </motion.div>

          {/* Right — link list */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {content.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="group relative flex items-center justify-between py-6
                           border-b border-ink/10 first:border-t first:border-ink/10
                           hover:pl-5 transition-all duration-200"
                data-cursor-label="TALK"
                data-cursor-blend="difference"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-terracotta scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div>
                  <div
                    className="font-playfair font-bold leading-none"
                    style={{ fontSize: "1.6rem" }}
                  >
                    {link.label}
                  </div>
                  <div className="mono-label opacity-35 mt-1">{link.detail}</div>
                </div>

                <span className="text-xl opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                  ↗
                </span>
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-24 pt-6 border-t-2 border-terracotta flex flex-col md:flex-row items-center justify-between gap-4 bg-ink text-paper px-8 py-6 -mx-8 md:-mx-24">
        <span className="font-playfair font-bold text-lg">{content.firstName} {content.lastName}</span>
        <span className="mono-label opacity-25">© 2026 — All rights reserved</span>
        <span className="mono-label opacity-20">React · TypeScript · Next.js · Vercel</span>
      </div>
    </section>
  );
}
