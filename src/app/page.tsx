import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutSection }      from "@/components/sections/AboutSection";
import { SkillsSection }     from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection }   from "@/components/sections/ProjectsSection";
import { EducationSection }  from "@/components/sections/EducationSection";
import { ContactSection }    from "@/components/sections/ContactSection";
import { SectionIndicator } from "@/components/layout/SectionIndicator";
import { Colophon }         from "@/components/layout/Colophon";
import content              from "@/data/content.json";

export default function Home() {
  const { folds } = content.metadata;

  return (
    <main className="relative min-h-screen selection:bg-terracotta selection:text-paper">
      <div
        className="fixed inset-0 pointer-events-none ruled-background z-0"
        style={{ opacity: 0.08 }}
      />
      <SectionIndicator />
      <HeroSection />

      {/* Document Fold Line */}
      <div className="relative h-px w-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 border-t border-dashed border-ink/5 scale-x-110" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-2 px-4 bg-paper mono-label text-[8px] opacity-10">
          {folds.top.ref} {"//"} {folds.top.label}
        </div>
      </div>

      <AboutSection />
      <SkillsSection />

      {/* Document Fold Line */}
      <div className="relative h-px w-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 border-t border-dashed border-ink/5 scale-x-110" />
        <div className="absolute left-8 -top-2 px-4 bg-paper mono-label text-[8px] opacity-10">
          {folds.mid.ref} {"//"} {folds.mid.label}
        </div>
      </div>

      <ExperienceSection />
      <ProjectsSection />

      {/* Document Fold Line */}
      <div className="relative h-px w-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 border-t border-dashed border-ink/5 scale-x-110" />
        <div className="absolute right-8 -top-2 px-4 bg-paper mono-label text-[8px] opacity-10">
          {folds.bottom.ref} {"//"} {folds.bottom.label}
        </div>
      </div>

      <EducationSection />
      <ContactSection />
      <Colophon />
    </main>
  );
}
