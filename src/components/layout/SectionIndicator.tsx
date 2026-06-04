"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

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
      <div className="fixed right-[31px] top-0 h-full w-[2px] bg-paper/10 z-[99] hidden lg:block overflow-hidden">
        <motion.div
          className="w-full h-full bg-terracotta origin-top"
          style={{ scaleY }}
        />
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
