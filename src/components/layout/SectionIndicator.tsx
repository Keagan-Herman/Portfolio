"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";

const sections = [
  { id: "hero", label: "01" },
  { id: "about", label: "02" },
  { id: "skills", label: "03" },
  { id: "experience", label: "04" },
  { id: "projects", label: "05" },
  { id: "education", label: "06" },
  { id: "contact", label: "07" },
];

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const ribbonPosition = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    { stiffness: 100, damping: 30 }
  );

  const topPercentage = useTransform(ribbonPosition, (v) => `${v}%`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Reading Ribbon - Progress Bar */}
      <div className="fixed right-[30px] top-0 h-full w-[6px] bg-ink/[0.03] z-[99] hidden lg:block pointer-events-none">
        <motion.div
          className="w-full h-full bg-terracotta origin-top relative shadow-[2px_0_10px_rgba(17,16,9,0.1)]"
          style={{
            scaleY,
            background: "linear-gradient(90deg, #b03217 0%, #c8381a 20%, #d9563d 50%, #c8381a 80%, #b03217 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 4px), 0 100%)"
          }}
        >
           {/* Subtle silk sheen animation */}
           <motion.div
             animate={{
               opacity: [0.3, 0.6, 0.3],
               x: ["-100%", "200%"]
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "linear"
             }}
             className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
           />
        </motion.div>

        {/* Floating Section Title that follows the ribbon tip */}
        <motion.div
          style={{ top: topPercentage }}
          className="absolute right-full mr-4 -translate-y-1/2 whitespace-nowrap hidden lg:block"
        >
          <div className="flex items-center gap-3">
             <span className="mono-label text-[10px] text-terracotta font-black tracking-[0.2em] bg-paper/80 px-2 py-0.5 backdrop-blur-sm border border-terracotta/10">
               {sections.find(s => s.id === activeSection)?.label || "01"}
             </span>
             <div className="h-px w-8 bg-terracotta/20" />
          </div>
        </motion.div>
      </div>

      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-8 mix-blend-difference text-paper">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={`Scroll to ${id} section`}
              className="group relative flex items-center justify-end h-4"
            >
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="mono-label absolute right-10 text-[10px] text-terracotta font-bold"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Anchor Dot */}
              <div
                className={`w-2 h-2 rounded-full border-2 transition-all duration-500 ease-in-out ${
                  isActive
                    ? "bg-terracotta border-terracotta scale-125"
                    : "bg-transparent border-paper/30 group-hover:border-paper group-hover:scale-110"
                }`}
              />

              {/* Hover Label */}
              <span className="mono-label absolute right-10 text-[8px] opacity-0 group-hover:opacity-40 transition-opacity uppercase tracking-widest pointer-events-none">
                {id}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
