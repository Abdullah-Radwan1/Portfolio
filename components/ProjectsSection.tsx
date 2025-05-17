"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { projectsData } from "@/utils";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-5xl font-bold  bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent   my-6">
        My Projects
      </h2>
      <ul ref={ref} className="grid xl:grid-cols-2  gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              showGithubIcon={index !== 0 && index !== 4} // Show GitHub icon for the first and third projects
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
