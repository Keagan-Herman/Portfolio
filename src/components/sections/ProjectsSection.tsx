"use client";

import { motion, AnimatePresence } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";
import { useState } from "react";

const content = contentData as Content;

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24 md:py-40 px-8 md:px-24">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-ink/10 pb-8 mb-4"
        >
          <h2
            className="font-playfair font-bold leading-[0.9] tracking-[-0.01em]"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            Notable<br />
            <em className="font-normal">Projects</em>
          </h2>
          <p className="font-cormorant opacity-50 max-w-xs" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
            Built to push limits. Each one demonstrates something a tutorial can&apos;t teach.
          </p>
        </motion.div>

        {/* Project list */}
        {content.projects.map((project, i) => {
          const isLinked = !!project.url && project.url !== "#";
          const Wrapper = isLinked ? "a" : "div";
          const wrapperProps = isLinked
            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Wrapper
                {...wrapperProps}
                className="group grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] border-t border-ink/10
                           relative transition-colors duration-200 cursor-pointer"
                data-hover
                data-cursor-label="VIEW"
              >
                {/* Framer Motion Shared Hover Background */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      layoutId="project-hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#ece6d8] z-0"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </AnimatePresence>

                {/* Number column */}
                <div className="relative z-10 border-r border-ink/10 flex flex-col items-end justify-start p-4 md:p-6 pt-8">
                  <span
                    className="font-playfair font-black opacity-10"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-6 md:p-8 items-start">
                  <div>
                    <h3
                      className="font-playfair font-bold leading-none mb-2 group-hover:text-terracotta transition-colors duration-200"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                    >
                      {project.name}
                    </h3>
                    <p className="font-playfair italic opacity-50 mb-4" style={{ fontSize: "1rem" }}>
                      {project.tagline}
                    </p>
                    <p className="font-cormorant opacity-65 max-w-2xl mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mono-label border border-ink/20 px-2 py-1 opacity-60"
                          style={{ fontSize: "0.58rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col items-end gap-3 min-w-[120px]">
                    <span
                      className="mono-label px-3 py-1"
                      style={{
                        backgroundColor: project.status === "In Dev"
                          ? "rgba(17,16,9,0.06)"
                          : "rgba(200,56,26,0.12)",
                        color: project.status === "In Dev"
                          ? "rgba(17,16,9,0.4)"
                          : "var(--color-terracotta)",
                      }}
                    >
                      {project.status}
                    </span>
                    <span className="mono-label opacity-30 text-right" style={{ fontSize: "0.58rem" }}>
                      {project.tags[0]}
                    </span>
                    <span
                      className="text-xl opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                      style={{ opacity: isLinked ? undefined : 0.04 }}
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}

        {/* Close the list */}
        <div className="border-t border-ink/10" />
      </div>
    </section>
  );
}
