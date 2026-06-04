"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";
import React, { useRef, useState, useEffect } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const content = contentData as Content;

const SPRING = { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...SPRING },
  },
};

const inkPressVariants = {
  hidden: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0,
    scale: 1.02,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.19, 1, 0.22, 1] as const,
      delay: 0.5,
    },
  },
};

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 150]);
  const yAside = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], shouldReduceMotion ? [1, 1] : [1, 0]);

  return (
    <header
      id="hero"
      ref={containerRef}
      className="relative z-10 min-h-screen grid grid-rows-[auto_1fr_auto] px-8 md:px-24"
    >
      {/* Editorial Masthead Top Bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ opacity }}
        className="flex justify-between items-center py-8 border-b border-ink/10 relative"
      >
        <div className="flex gap-12">
          <motion.div variants={itemVariants} className="space-y-1">
            <span className="mono-label block opacity-30 text-[0.6rem]">Volume</span>
            <span className="mono-label block font-bold">No. 01 — Portfolio</span>
          </motion.div>
          <motion.div variants={itemVariants} className="hidden md:block space-y-1">
            <span className="mono-label block opacity-30 text-[0.6rem]">Location</span>
            <span className="mono-label block">Port Elizabeth, SA</span>
          </motion.div>
        </div>

        {/* Floating Rule Line */}
        <div className="absolute bottom-[-1px] left-0 w-full h-[1px] overflow-hidden">
           <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
              className="w-full h-full bg-terracotta"
           />
        </div>

        <motion.div variants={itemVariants} className="text-right space-y-1">
          <span className="mono-label block opacity-30 text-[0.6rem]">Date Shipped</span>
          <span className="mono-label block">
            {mounted
              ? new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }).toUpperCase()
              : "JAN 2025" // Fallback to avoid shift
            }
          </span>
        </motion.div>
      </motion.div>

      {/* Marginalia - Side Notes */}
      <motion.aside
        style={{ y: yAside, opacity }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...SPRING, delay: 0.6 }}
        className="absolute left-6 top-1/3 hidden lg:block w-32 space-y-8"
      >
        <div className="space-y-2">
          <div className="w-8 h-px bg-terracotta" />
          <p className="mono-label text-[0.55rem] leading-relaxed opacity-40">
            ENGINEERED FOR<br />
            PRECISION AND<br />
            AESTHETIC LONGEVITY.
          </p>
        </div>
        <div className="space-y-2 pt-12">
           <span className="mono-label text-[0.5rem] opacity-20 block [writing-mode:vertical-lr] rotate-180">EDITORIAL_AUDIT</span>
           <div className="w-px h-12 bg-ink/10" />
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-end pb-12 pt-12">
        {/* Left — name + CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="pr-0 md:pr-12"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10 overflow-hidden">
            <div className="w-10 h-px bg-terracotta" />
            <span className="mono-label opacity-45">
              Full-Stack Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={inkPressVariants}
            className="font-playfair font-black leading-[0.85] tracking-[-0.03em] mb-4 origin-top"
            style={{ fontSize: "clamp(4rem, 8vw, 6rem)", textWrap: "balance" } as React.CSSProperties}
          >
            <motion.span style={{ y: y1 }} className="block">
              {content.firstName}
            </motion.span>
            <motion.span style={{ y: y2 }} className="hollow-text block">
              {content.lastName}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-playfair italic mb-10 tracking-tight opacity-45"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)", lineHeight: 1.1 }}
          >
            {content.role}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
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
          </motion.div>
        </motion.div>

        {/* Right — summary + stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="border-l border-ink/10 pl-8 md:pl-16 mt-12 md:mt-0 relative"
        >
          {/* Vertical indicator for summary */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2, ease: "circOut" }}
            className="absolute left-0 top-0 w-[2px] bg-terracotta"
          />

          <motion.p
            variants={itemVariants}
            className="font-cormorant opacity-75 leading-[1.85] mb-12"
            style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.45rem)" }}
          >
            {content.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 border-t border-ink/10">
            {[
              ["Years in production", "2+"],
              ["Institutions served", "200+"],
              ["Live systems shipped", "5"],
              ["Discipline", "Full stack"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between py-3 border-b border-ink/[0.07]"
              >
                <span className="mono-label opacity-40">{label}</span>
                <span className="mono-label text-terracotta font-bold">{value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
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
        <span className="mono-label opacity-30">Port Elizabeth, South Africa</span>
      </motion.div>
    </header>
  );
}
