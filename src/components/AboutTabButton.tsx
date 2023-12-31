import { motion } from "framer-motion";
interface AboutTabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "80%" },
};

const AboutTabButton = ({
  active,
  selectTab,
  children,
}: AboutTabButtonProps) => {
  const buttonClasses = active ? "text-white" : "text-slate-400";
  return (
    <button onClick={selectTab} className="flex flex-col items-center">
      <p
        className={`mx-4 font-semibold text-lg md:text-xl hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2"
      ></motion.div>
    </button>
  );
};

export default AboutTabButton;
