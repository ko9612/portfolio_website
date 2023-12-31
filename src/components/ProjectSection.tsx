import { useRef, useState } from "react";
import { projectData } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import ProjectTabButton from "./ProjectTabButton";
import { motion, useInView } from "framer-motion";
import Title from "./Title";

export const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectSection = () => {
  const [tag, setTag] = useState<string>("All");
  const cardRef = useRef(null);
  const isCardView = useInView(cardRef, { once: true });

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
      <Title title={"Projects"} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white pt-20 flex flex-wrap gap-1 min-[400px]:gap-2 sm:gap-4 lg:gap-6 text-[10px] min-[400px]:text-sm md:text-base"
      >
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
      </motion.div>
      <motion.ul
        ref={cardRef}
        key={tag}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 pt-10"
      >
        {filteredProjectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isCardView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <ProjectCard data={project} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectSection;
