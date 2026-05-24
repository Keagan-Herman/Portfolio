"use client";

import { CustomCursor } from "@/components/CustomCursor";
import contentData from "@/data/content.json";
import { Content, SectionItem, ExperienceItem, ProjectItem, EducationItem } from "@/types/content";
import { motion } from "framer-motion";

const content = contentData as Content;

function isExperience(item: SectionItem): item is ExperienceItem {
  return "company" in item;
}

function isProject(item: SectionItem): item is ProjectItem {
  return "name" in item;
}

function isEducation(item: SectionItem): item is EducationItem {
  return "institution" in item;
}

export default function Home() {
  return (
    <main className="relative min-h-screen p-8 md:p-24 selection:bg-terracotta selection:text-paper">
      <CustomCursor />

      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none ruled-background opacity-[0.03] z-0" />

      {/* Hero Section */}
      <header className="relative z-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          className="mono-label mb-4"
        >
          Portfolio 2024
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-8xl md:text-[12rem] font-bold leading-[0.8] mb-4"
        >
          <span className="hollow-text block">{content.name}</span>
          <span className="block">work.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl max-w-xl font-light italic"
        >
          {content.title}
        </motion.p>
      </header>

      {/* Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-48 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="mono-label opacity-40">00 / Philosophy</div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight">
            {content.philosophy.title}
          </h2>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed">
            {content.philosophy.content}
          </p>
        </div>
      </motion.section>

      {/* Dynamic Sections */}
      {content.sections.map((section) => (
        <section key={section.id} className="relative z-10 mb-48 border-t border-ink/10 pt-12">
          {/* Ghost Numeral */}
          <div className="absolute -top-12 -left-8 text-[15rem] font-playfair font-bold opacity-[0.03] pointer-events-none">
            {section.number}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mono-label opacity-40">{section.number} / {section.title}</div>

            <div className="md:col-span-3 space-y-12">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group relative pl-8 border-l border-transparent hover:border-terracotta transition-colors duration-500"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Sliding Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-terracotta scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                  <div className="mono-label opacity-40 mb-2">
                    {isExperience(item) && `${item.company} — ${item.period}`}
                    {isProject(item) && item.type}
                    {isEducation(item) && item.institution}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-medium mb-4 group-hover:text-terracotta transition-colors">
                    {isExperience(item) && item.role}
                    {isProject(item) && item.name}
                    {isEducation(item) && item.degree}
                  </h3>
                  {(isExperience(item) || isProject(item)) && (
                    <p className="text-lg md:text-xl opacity-60 max-w-2xl">
                      {item.description}
                    </p>
                  )}
                  {isEducation(item) && (
                    <div className="mono-label opacity-40 mt-2">{item.period}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact */}
      <footer className="relative z-10 pt-24 border-t border-ink/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <div className="mono-label opacity-40 mb-8">Contact / Get in Touch</div>
                <a
                    href={`mailto:${content.contact.email}`}
                    className="text-4xl md:text-6xl font-playfair hover:text-terracotta transition-colors italic underline decoration-1 underline-offset-8"
                >
                    {content.contact.email}
                </a>
            </div>
            <div className="flex flex-col justify-end space-y-4">
                {content.contact.links.map((link) => (
                    <a key={link.label} href={link.url} className="mono-label hover:text-terracotta transition-colors">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
        <div className="mt-32 mono-label opacity-20 text-center">
            Designed for Precision / Built for Performance
        </div>
      </footer>
    </main>
  );
}
