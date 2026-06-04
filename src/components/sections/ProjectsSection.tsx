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
          <div className="space-y-4">
             <div className="flex items-center gap-4">
              <span className="mono-label text-terracotta">Section 05</span>
              <div className="h-px w-8 bg-terracotta/30" />
              <span className="mono-label opacity-30">REF: PROJECT_MANIFEST</span>
            </div>
            <h2
              className="font-playfair font-bold leading-[0.9] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
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
                  <div>
                    <h3
                      className="font-playfair font-bold leading-none mb-2 group-hover:text-terracotta transition-colors duration-200"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                    >
                      {project.name}
                    </h3>
                    <p className="font-playfair italic opacity-50 mb-6" style={{ fontSize: "1rem" }}>
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
                  </div>
                </div>

                {/* Technical Specification Sidebar (Desktop Only) */}
                <div className="relative z-10 hidden md:flex flex-col border-l border-ink/10 p-8 justify-between bg-ink/[0.01] group-hover:bg-ink/[0.03] transition-colors">
                   <div className="space-y-6">
                      <div className="space-y-1">
                        <span className="mono-label text-[0.55rem] opacity-30 block">Deployment Status</span>
                        <div className="flex items-center gap-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-terracotta animate-pulse' : 'bg-ink/20'}`} />
                           <span className={`mono-label text-[0.65rem] ${project.status === 'Live' ? 'text-terracotta font-bold' : 'opacity-40'}`}>
                             {project.status.toUpperCase()}
                           </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="mono-label text-[0.55rem] opacity-30 block">Primary Stack</span>
                        <div className="flex flex-col gap-1">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="mono-label text-[0.6rem] opacity-60 truncate">• {tag}</span>
                          ))}
                        </div>
                      </div>
                   </div>

                   <div className="flex justify-between items-end">
                      <div className="mono-label text-[0.5rem] opacity-10">
                        AUDIT_{project.id.toUpperCase()}<br />
                        VER_2025.01
                      </div>
                      <span
                        className="text-2xl opacity-10 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-terracotta"
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
        </div>

        {/* Close the list */}
        <div className="border-t border-ink/10" />
      </div>
    </section>
  );
}
