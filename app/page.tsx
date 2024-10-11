import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
 return (
  <main className=" bg-[#121212]">
   <Navbar />
   <div className="container pb-2 px-8 pt-24 mx-auto ">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <EmailSection />
   </div>
  </main>
 );
}
