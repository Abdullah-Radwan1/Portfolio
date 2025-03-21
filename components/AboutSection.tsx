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
    <section className="" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center my-8 xl:gap-16  ">
        <Image alt="about me" src="/images/971.jpg" width={900} height={900} />
        <div className="mt-4 md:mt-0 text-left flex !flex-col h-full">
          <h2 className="text-5xl my-6 font-bold  bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent  mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            A continuously self-improving Front End developer with +2 years of
            experience, skilled in a wide range of technologies, including
            Next.js, express, and TypeScript, with a strong commitment to
            delivering high-quality user experiences.
          </p>
          <div className=" mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
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

            <div className="mt-4 "></div>

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
