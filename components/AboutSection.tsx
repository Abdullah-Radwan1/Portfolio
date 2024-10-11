"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TAB_DATA } from "@/utils";

const AboutSection = () => {
 const [tab, setTab] = useState("skills");
 const [isPending, startTransition] = useTransition();

 const handleTabChange = (id: string) => {
  startTransition(() => {
   setTab(id);
  });
 };

 return (
  <section className="text-white" id="about">
   <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image alt="about me" src="/images/971.jpg" width={600} height={600} />
    <div className="mt-4 md:mt-0 text-left flex !flex-col h-full">
     <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
     <p className="text-base lg:text-lg">
      A continuously self-improving Front End developer with +2 years of experience, skilled in a
      wide range of technologies, including Next.js, React.js, and TypeScript, with a strong
      commitment to delivering high-quality user experiences.
     </p>
     <div className=" mt-8">
      <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
       {" "}
       Skills{" "}
      </TabButton>
      <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
       {" "}
       Education{" "}
      </TabButton>
      <TabButton
       selectTab={() => handleTabChange("certifications")}
       active={tab === "certifications"}
      >
       {" "}
       Certifications{" "}
      </TabButton>

      <div className="mt-8"></div>

      {
       //@ts-ignore
       TAB_DATA.find((t) => t.id === tab).content
      }
     </div>
    </div>
   </div>
  </section>
 );
};

export default AboutSection;
