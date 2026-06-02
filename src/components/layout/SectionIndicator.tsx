"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-6 mix-blend-difference text-paper">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Scroll to ${id} section`}
            className="group relative flex items-center justify-end"
          >
            <AnimatePresence>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="mono-label absolute right-8 text-[10px]"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
            <div
              className={`h-px transition-all duration-300 ${
                isActive ? "w-10 bg-paper" : "w-4 bg-paper/40 group-hover:w-8 group-hover:bg-paper"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
