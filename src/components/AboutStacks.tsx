import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface stackDataType {
  stackName: string;
  progress: number;
}

const stackData: stackDataType[] = [
  { stackName: "JavaScript", progress: 70 },
  { stackName: "TypeScript", progress: 50 },
  { stackName: "Python", progress: 50 },
  { stackName: "HTML5", progress: 80 },
  { stackName: "CSS3", progress: 80 },
  { stackName: "React", progress: 70 },
  { stackName: "Next.js", progress: 70 },
  { stackName: "Redux", progress: 50 },
  { stackName: "Recoil", progress: 70 },
  { stackName: "Git", progress: 70 },
  { stackName: "Figma", progress: 90 },
  { stackName: "AdobeXD", progress: 80 },
  { stackName: "Framer", progress: 70 },
  { stackName: "Photoshop", progress: 60 },
];

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
  return (
    <ul ref={stacksRef}>
      {stackData.map((stack, index) => (
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
  );
};

export default AboutStacks;
