"use client";
import { useState } from "react";
import { projectData } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectTabButton from "./ProjectTabButton";

const ProjectSection = () => {
  const [tag, setTag] = useState<string>("All");

  const handleTag = (tag: string) => {
    setTag(tag);
  };

  const filteredProjectData = projectData.filter((data) => {
    return data.tag.includes(tag);
  });

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center relative bg-[#121212] py-20 px-4"
    >
      <h2 className="text-4xl text-nowrap sm:text-5xl lg:text-6xl font-extrabold text-white">
        Projects
      </h2>
      <div className="text-white pt-20 flex flex-wrap gap-1 min-[400px]:gap-2 sm:gap-4 lg:gap-6 text-[11px] min-[400px]:text-sm md:text-base">
        <ProjectTabButton
          name={"All"}
          onClick={handleTag}
          isSelected={tag === "All"}
        />
        <ProjectTabButton
          name={"Development"}
          onClick={handleTag}
          isSelected={tag === "Development"}
        />
        <ProjectTabButton
          name={"UX/UI"}
          onClick={handleTag}
          isSelected={tag === "UX/UI"}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 pt-10 pb-20">
        {filteredProjectData.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
