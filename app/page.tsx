import HeroPanel from "@/components/home/hero-panel";
import IntroSection from "@/components/home/intro-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectSection from "@/components/home/project-section";
import TechStack from "@/components/home/tech-stack";
import ProblemSolvingSection from "@/components/home/problem-solving-section";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <div>
      <HeroPanel />
      <SectionDivider />
      <IntroSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectSection />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <ProblemSolvingSection />
      <SectionDivider />
    </div>
  );
}
