import React from "react";
import { Eye, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  showPreviewcon = true,
  showGithubIcon = true, // Prop to control the display of the GitHub icon
}: {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl?: string;
  showPreviewcon?: boolean; // Optional prop
  showGithubIcon?: boolean; // Optional prop
}) => {
  return (
    <>
      <div className="w-full  rounded-t-xl relative group">
        <Image
          src={imgUrl}
          alt={title}
          width={1000}
          height={1000}
          className="object-fill rounded-t-xl"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {showGithubIcon && ( // Conditional rendering for the GitHub icon
            <Link
              href={gitUrl}
              target="_blank" // Open in a new tab
              className="flex justify-center items-center h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            >
              <Github />
            </Link>
          )}
          {showPreviewcon && (
            <Link
              href={previewUrl || ""}
              target="_blank" // Open in a new tab
              className="flex justify-center items-center h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white"
            >
              <Eye />
            </Link>
          )}
        </div>
      </div>
      <div className=" rounded-b-xl bg-muted py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
