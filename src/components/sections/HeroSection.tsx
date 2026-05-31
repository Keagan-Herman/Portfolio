"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const content = contentData as Content;

const SPRING = { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const };

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <header
      id="hero"
      ref={containerRef}
      className="relative z-10 min-h-screen grid grid-rows-[1fr_auto] px-8 md:px-24"
    >
      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-end pb-12 pt-16">
        {/* Left — name + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
          className="pr-0 md:pr-12"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px bg-terracotta" />
            <span className="mono-label opacity-45">Full-Stack Software Engineer</span>
          </div>

          <h1
            className="font-playfair font-black leading-[0.88] tracking-[-0.05em] mb-4"
            style={{ fontSize: "clamp(5rem, 12vw, 12rem)" }}
          >
            <motion.span style={{ y: y1 }} className="block">
              {content.firstName}
            </motion.span>
            <motion.span style={{ y: y2 }} className="hollow-text block">
              {content.lastName}
            </motion.span>
          </h1>

          <p
            className="font-playfair italic opacity-45 mb-10"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
          >
            {content.role}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              className="mono-label inline-block px-8 py-3 bg-terracotta text-paper border border-terracotta hover:bg-ink hover:border-ink transition-colors duration-200"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="mono-label inline-block px-8 py-3 border border-ink/20 hover:border-ink transition-colors duration-200"
            >
              Get in Touch
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right — summary + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.3 }}
          className="border-l border-ink/10 pl-8 md:pl-16 mt-12 md:mt-0"
        >
          <p
            className="font-cormorant opacity-75 leading-[1.75] mb-12"
            style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)" }}
          >
            {content.summary}
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {[
              { num: "2+",   label: "Years Production Experience" },
              { num: "200+", label: "Institutions Served" },
              { num: "5",    label: "Live Projects Shipped" },
              { num: "Full", label: "Stack, Front to Back" },
            ].map(({ num, label }) => (
              <div key={label} className="relative pt-6">
                <div className="absolute top-0 left-0 w-full h-px bg-terracotta/40" />
                <div className="absolute top-0 left-0 w-1/4 h-px bg-terracotta" />
                <div
                  className="font-playfair font-black leading-none mb-2"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.05em" }}
                >
                  {num}
                </div>
                <div className="mono-label opacity-40 leading-tight max-w-[120px]">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-center justify-between py-6 border-t border-ink/10"
      >
        <div className="flex gap-8">
          {content.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="mono-label opacity-40 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="mono-label opacity-30">Cape Town, South Africa</span>
      </motion.div>
    </header>
  );
}
