import { motion } from "framer-motion";

const titleVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Title = ({ title }: { title: string }) => {
  return (
    <motion.h2
      variants={titleVariants}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-4xl text-nowrap sm:text-5xl lg:text-6xl font-extrabold text-white"
    >
      {title}
    </motion.h2>
  );
};

export default Title;
