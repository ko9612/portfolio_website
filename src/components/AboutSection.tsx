import Image from "next/image";
import resumeImg from "/public/resumeImg.png";
import { useRef, useState } from "react";
import AboutTabButton from "./AboutTabButton";
import AboutStacks from "./AboutStacks";
import AboutEducation from "./AboutEducation";
import { motion, useInView } from "framer-motion";
import { cardVariants } from "./ProjectSection";
import Title from "./Title";
import AboutCertification from "./AboutCertification";
import AboutWord from "./AboutWord";

const AboutSection = () => {
  const aboutRef = useRef(null);
  const isAboutView = useInView(aboutRef, { once: true });
  const [tab, setTab] = useState("stacks");

  const handleTabChange = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <section
      id="about"
      className="flex flex-col relative items-center bg-[#121212] pt-40 px-4"
    >
      <Title title={"About"} />
      <section
        ref={aboutRef}
        className="introduce sm:grid sm:grid-cols-2 gap-16 lg:gap-28 xl:gap-40 w-full py-20"
      >
        <motion.section
          variants={cardVariants}
          initial="initial"
          animate={isAboutView ? "animate" : "initial"}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftSide"
        >
          <div className="w-full">
            <div className="rounded-full w-48 sm:w-60 mx-auto ">
              <Image
                src={resumeImg}
                alt="resumeImage"
                className="rounded-full w-full object-fill"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-[80%] py-8 mx-auto">
              <AboutWord />
            </div>
          </div>
        </motion.section>
        <motion.section
          variants={cardVariants}
          initial="initial"
          animate={isAboutView ? "animate" : "initial"}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rightSide mt-4 sm:mt-0"
        >
          <div className="flex flex-row justify-center">
            <AboutTabButton
              selectTab={() => handleTabChange("stacks")}
              active={tab === "stacks"}
              isSkill={false}
            >
              Stacks
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              isSkill={false}
            >
              Education
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
              isSkill={false}
            >
              Certification
            </AboutTabButton>
          </div>
          <div className="mt-8 text-white">
            {tab === "stacks" ? (
              <AboutStacks />
            ) : tab === "education" ? (
              <AboutEducation />
            ) : (
              <AboutCertification />
            )}
          </div>
        </motion.section>
      </section>
    </section>
  );
};

export default AboutSection;
