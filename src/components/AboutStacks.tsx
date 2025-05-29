import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import AboutTabButton from "./AboutTabButton";

interface stackDataType {
  stackName: string;
  progress: number;
}

type StackCategory = "front" | "back" | "design" | "act";

const stackData: Record<StackCategory, stackDataType[]> = {
  front: [
    { stackName: "JavaScript", progress: 70 },
    { stackName: "TypeScript", progress: 60 },
    { stackName: "HTML5", progress: 80 },
    { stackName: "CSS3", progress: 80 },
    { stackName: "TailwindCss", progress: 80 },
    { stackName: "React", progress: 70 },
    { stackName: "Next.js", progress: 70 },
    { stackName: "Redux-toolkit", progress: 50 },
    { stackName: "Recoil", progress: 70 },
    { stackName: "Zustand", progress: 80 },
  ],
  back: [
    { stackName: "Python", progress: 50 },
    { stackName: "NodeJS", progress: 70 },
    { stackName: "ExpressJS", progress: 70 },
    { stackName: "PostgreSql", progress: 60 },
    { stackName: "MySql", progress: 60 },
    { stackName: "MariaDB", progress: 50 },
    { stackName: "Prisma", progress: 70 },
  ],
  design: [
    { stackName: "Figma", progress: 90 },
    { stackName: "AdobeXD", progress: 80 },
    { stackName: "Framer", progress: 70 },
    { stackName: "Photoshop", progress: 60 },
    { stackName: "Indesign", progress: 60 },
    { stackName: "Illustrator", progress: 60 },
  ],
  act: [
    { stackName: "Git/Github", progress: 70 },
    { stackName: "Docker", progress: 50 },
    { stackName: "AmazonS3", progress: 80 },
    { stackName: "Vercel", progress: 90 },
    { stackName: "Render", progress: 90 },
  ],
};

export const barWidth: Record<number, string> = {
  25: "w-[25%]",
  30: "w-[30%]",
  35: "w-[35%]",
  40: "w-[40%]",
  50: "w-[50%]",
  60: "w-[60%]",
  70: "w-[70%]",
  80: "w-[80%]",
  90: "w-[90%]",
  100: "w-full",
};

const AboutStacks = () => {
  const stacksRef = useRef(null);
  const isStackView = useInView(stacksRef, { once: true });
  const [tab, setTab] = useState<StackCategory>("front");

  const handleTabChange = (tabName: StackCategory) => {
    setTab(tabName);
  };

  return (
    <>
      <div className="flex flex-row justify-center">
        <AboutTabButton
          selectTab={() => handleTabChange("front")}
          active={tab === "front"}
          isSkill={true}
        >
          Front
        </AboutTabButton>
        <AboutTabButton
          selectTab={() => handleTabChange("back")}
          active={tab === "back"}
          isSkill={true}
        >
          Back
        </AboutTabButton>
        <AboutTabButton
          selectTab={() => handleTabChange("design")}
          active={tab === "design"}
          isSkill={true}
        >
          Design
        </AboutTabButton>
        <AboutTabButton
          selectTab={() => handleTabChange("act")}
          active={tab === "act"}
          isSkill={true}
        >
          Act
        </AboutTabButton>
      </div>
      <ul ref={stacksRef}>
        {stackData[tab].map((stack, index) => (
          <li
            key={stack.stackName}
            className="bar flex items-center bg-white/20 rounded-full my-3 sm:my-4 overflow-hidden justify-between"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={
                isStackView ? { width: `${stack.progress}%` } : { width: "0%" }
              }
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full`}
            >
              <span className="text-nowrap text-sm md:text-base pl-3">
                {stack.stackName}
              </span>
            </motion.div>
            <span className="text-sm md:text-base pr-3">{stack.progress}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutStacks;
