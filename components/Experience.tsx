import Image from "next/image";
import { Experience } from "@/utils";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

const ExperienceSection = () => {
  return (
    <>
      <h2 className="text-center text-5xl my-6 font-bold  bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Experience
      </h2>
      <section className=" border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <Image
              src={"/images/projects/1.png"}
              alt={"Experience"}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold  dark:">{Experience.title}</h2>
            <p className=" dark:text-gray-300">{Experience.description}</p>

            {/* Buttons */}
            <Link
              href={Experience.previewUrl}
              target="_blank"
              className="inline-block  bg-blue-500 px-6 py-2  rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <LinkIcon color="white" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
