import { motion } from "framer-motion";
interface AboutTabButtonProps {
  isSkill: boolean;
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "80%" },
};

const AboutTabButton = ({
  isSkill,
  active,
  selectTab,
  children,
}: AboutTabButtonProps) => {
  const buttonClasses = active ? "text-white" : "text-slate-400";
  const buttonTextSize = isSkill
    ? `text-sm md:text-base ${
        active &&
        "bg-purple-500 w-full rounded-xl transition-colors duration-300"
      }`
    : "text-lg md:text-xl";
  return (
    <button onClick={selectTab} className="flex flex-col items-center">
      <p
        className={`mx-4 font-semibold hover:text-white ${buttonClasses} ${buttonTextSize}`}
      >
        {children}
      </p>
      {!isSkill && (
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-purple-500 mt-2"
        ></motion.div>
      )}
    </button>
  );
};

export default AboutTabButton;
