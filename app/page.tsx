import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import ExperienceSection from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EmailSection />
      </div>
    </main>
  );
}
//deploy
