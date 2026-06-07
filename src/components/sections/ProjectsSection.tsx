"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contentData from "@/data/content.json";
import { Content } from "@/types/content";

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
          <div className="space-y-4">
             <div className="flex items-center gap-4">
              <div className="w-3 h-px bg-terracotta" />
              <span className="mono-label opacity-30">REF: PROJECT_MANIFEST</span>
            </div>
            <h2
              className="font-playfair font-bold leading-[0.9] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)", textWrap: "balance" } as React.CSSProperties}
            >
              Selected<br />
              <em className="font-normal italic">Artifacts</em>
            </h2>
          </div>
          <p className="font-cormorant opacity-50 max-w-xs" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
            A curated selection of high-performance systems and creative experiments. Each entry includes technical specifications and deployment status.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="relative">
           {/* Marginalia for project spec */}
           <div className="absolute -right-16 top-0 h-full hidden xl:flex flex-col justify-around py-32 opacity-20 pointer-events-none">
            <div className="mono-label [writing-mode:vertical-lr] text-[0.6rem] tracking-[0.5em]">BUILD SPECIFICATION</div>
            <div className="mono-label [writing-mode:vertical-lr] text-[0.6rem] tracking-[0.5em]">TECHNICAL AUDIT</div>
          </div>

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
                {...(wrapperProps as any)}
                className="group grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr_280px] border-t border-ink/10
                           relative transition-colors duration-200 cursor-pointer overflow-hidden"
                data-hover

              >
                {/* Framer Motion Shared Hover Background */}
                <AnimatePresence mode="wait">
                  {hoveredId === project.id && (
                    <motion.div
                      layoutId="project-hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-0 bg-[#ece6d8]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Blueprint Grid Overlay */}
                      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`grid-${project.id}`} width="48" height="48" patternUnits="userSpaceOnUse">
                            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                        <motion.circle
                          initial={{ r: 0 }}
                          animate={{ r: 120 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          cx="50%" cy="50%" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="4 4"
                        />
                      </svg>

                      {/* Architectural Measurements */}
                      <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 mono-label text-[10px] [writing-mode:vertical-lr] rotate-180 opacity-40"
                        >
                          H: 100%_SPEC
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="absolute top-4 left-1/2 -translate-x-1/2 mono-label text-[10px] opacity-40"
                        >
                          W: 100%_BOUND
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Number column */}
                <div className="relative z-10 border-r border-ink/10 flex flex-col items-center justify-start p-4 md:p-6 pt-8">
                  <span
                    className="font-playfair font-black opacity-10 group-hover:opacity-100 group-hover:text-terracotta transition-all duration-500"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
                  <motion.div
                    animate={hoveredId === project.id ? { y: -5 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3
                      className="font-playfair font-bold leading-none mb-2 group-hover:text-terracotta transition-colors duration-200"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                    >
                      {project.name}
                    </h3>
                    <p className="font-playfair italic opacity-70 mb-6" style={{ fontSize: "1rem" }}>
                      {project.tagline}
                    </p>
                    <p className="font-cormorant opacity-65 max-w-2xl mb-8 leading-relaxed" style={{ fontSize: "1.05rem" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="mono-label border border-ink/20 px-2 py-1 opacity-60 group-hover:opacity-100 group-hover:border-terracotta/30 group-hover:text-terracotta transition-all"
                          style={{ fontSize: "0.58rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="mono-label opacity-30 py-1" style={{ fontSize: "0.58rem" }}>+{project.tags.length - 4} MORE</span>
                      )}
                    </div>
                    {isLinked && (
                      <div className="flex items-center gap-2 mt-6">
                        <span className="mono-label text-terracotta" style={{ fontSize: "0.65rem" }}>View on GitHub</span>
                        <span className="text-terracotta text-sm leading-none">↗</span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Technical Specification Sidebar (Desktop Only) */}
                <div className="relative z-10 hidden md:flex flex-col border-l border-ink/10 p-8 justify-between bg-ink/[0.01] group-hover:bg-ink/[0.03] transition-colors backdrop-blur-[2px]">
                   <div className="space-y-8">
                      <div className="space-y-2">
                        <span className="mono-label text-[0.55rem] opacity-30 block tracking-[0.2em]">Deployment Status</span>
                        <div className="flex items-center gap-3 bg-paper/30 p-2 border border-ink/5">
                           <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-terracotta animate-pulse' : 'bg-ink/20'}`} />
                           <span className={`mono-label text-[0.65rem] ${project.status === 'Live' ? 'text-terracotta font-black' : 'opacity-40'}`}>
                             {project.status.toUpperCase()}
                           </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span className="mono-label text-[0.55rem] opacity-30 block tracking-[0.2em]">Build Specification</span>
                        <div className="flex flex-col gap-2">
                          {project.tags.slice(0, 4).map(tag => (
                            <div key={tag} className="flex items-center justify-between border-b border-ink/5 pb-1">
                               <span className="mono-label text-[0.6rem] opacity-60 truncate">{tag}</span>
                               <span className="mono-label text-[0.5rem] opacity-20">V.01</span>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>

                   <div className="flex justify-between items-end">
                      <div className="mono-label text-[0.5rem] opacity-10 leading-relaxed font-bold">
                        ARTIFACT_ID: {project.id.toUpperCase()}<br />
                        TIMESTAMP: 2025_REV_A
                      </div>
                      <motion.span
                        whileHover={{ x: 3, y: -3 }}
                        className="text-2xl opacity-10 group-hover:opacity-100 transition-opacity duration-300 text-terracotta"
                        style={{ opacity: isLinked ? undefined : 0.04 }}
                      >
                        ↗
                      </motion.span>
                   </div>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
        </div>

        {/* Close the list */}
        <div className="border-t border-ink/10" />
      </div>
    </section>
  );
}
