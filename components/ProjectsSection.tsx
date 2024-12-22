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
   <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
    My Projects
   </h2>
   <ul ref={ref} className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
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
       showGithubIcon={index !== 0}
       showPreviewcon={index !== 1}
      />
     </motion.li>
    ))}
   </ul>
  </section>
 );
};

export default ProjectsSection;
