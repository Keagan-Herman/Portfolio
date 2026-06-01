import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutSection }      from "@/components/sections/AboutSection";
import { SkillsSection }     from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection }   from "@/components/sections/ProjectsSection";
import { EducationSection }  from "@/components/sections/EducationSection";
import { ContactSection }    from "@/components/sections/ContactSection";
import { SectionIndicator } from "@/components/layout/SectionIndicator";
import { Colophon }         from "@/components/layout/Colophon";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-terracotta selection:text-paper">
      <div
        className="fixed inset-0 pointer-events-none ruled-background z-0"
        style={{ opacity: 0.08 }}
      />
      <SectionIndicator />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Colophon />
    </main>
  );
}
