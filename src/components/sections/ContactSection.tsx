"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

const content = contentData as Content;

export function ContactSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="contact" className="relative z-10 py-24 md:py-48 px-8 md:px-24 bg-paper overflow-hidden">
      {/* Background flourish - large ghost initials */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair font-black text-[30vw] opacity-[0.03] select-none pointer-events-none"
        style={{ filter: "url(#letterpress)" }}
      >
        {content.firstName[0]}{content.lastName[0]}
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Left — Narrative Sign-off */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label text-terracotta mb-6 tracking-[0.4em] uppercase text-xs">Conclusion</div>
            <h2
              className="font-playfair font-black leading-[0.85] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", textWrap: "balance" } as React.CSSProperties}
            >
              Let&apos;s<br />
              <span className="italic font-normal">Connect.</span>
            </h2>
            <div className="space-y-6 max-w-md">
              <p className="font-cormorant text-2xl leading-relaxed text-ink/70">
                Whether you have a specific project in mind or just want to discuss the finer points of editorial design and systems architecture.
              </p>
              <div className="h-px w-24 bg-terracotta/40" />
              <p className="font-dm-mono text-sm opacity-40 uppercase tracking-widest leading-loose">
                Availability: Open to new opportunities<br />
                Status: Open to Collaboration
              </p>
            </div>
          </motion.div>

          {/* Right — The Letterpress Card */}
          <div className="relative group/card-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative perspective-1000"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                mouseX.set(x);
                mouseY.set(y);
              }}
              onMouseLeave={() => {
                mouseX.set(0);
                mouseY.set(0);
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Shadow/Depth Effect */}
              <div className="absolute inset-4 bg-ink/5 blur-3xl rounded-xl -rotate-2 translate-z-[-10px]" />

              <div className="relative bg-[#fcfaf5] border border-ink/8 p-12 md:p-16 overflow-hidden">
                {/* Card Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/paper-fibers.png')]" />

                {/* Diagonal Paper Crease */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-black/5" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none" />

                <div className="space-y-12 relative z-10">
                {content.contact.links.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="group flex flex-col gap-2 transition-transform hover:-translate-y-1"
                    data-hover

                  >
                    <div className="flex items-end justify-between border-b border-ink/10 pb-4">
                      <span className="mono-label text-[0.65rem] opacity-30 uppercase tracking-[0.2em]">0{i+1} — {link.label}</span>
                      <span className="text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                    </div>
                    <div className="font-playfair font-bold text-3xl md:text-4xl tracking-tight group-hover:text-terracotta transition-colors">
                      {link.detail}
                    </div>
                  </a>
                ))}
              </div>

                {/* Card Footer Decorative */}
                <div className="mt-16 flex items-center justify-between opacity-20">
                  <div className="w-12 h-12 border border-ink flex items-center justify-center font-playfair font-bold text-xl">
                    {content.firstName[0]}
                  </div>
                  <div className="mono-label text-[0.6rem] tracking-[0.3em] uppercase">Private Correspondence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
