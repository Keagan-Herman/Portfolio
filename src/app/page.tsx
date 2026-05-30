import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutSection }      from "@/components/sections/AboutSection";
import { SkillsSection }     from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection }   from "@/components/sections/ProjectsSection";
import { EducationSection }  from "@/components/sections/EducationSection";
import { ContactSection }    from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-terracotta selection:text-paper">
      {/* Paper Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-multiply overflow-hidden">
        <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] animate-grain" />
      </div>

      <div
        className="fixed inset-0 pointer-events-none ruled-background z-0"
        style={{ opacity: 0.08 }}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
