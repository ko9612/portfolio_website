import { TypeAnimation } from "react-type-animation";
import BackGround from "./BackGround";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4">
      <BackGround />
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-extrabold text-white"
      >
        <TypeAnimation
          sequence={[
            "안녕하세요.",
            1000,
            "사용자의 눈으로 보는 ",
            1000,
            `기획자\nFrontend Developer`,
            1000,
            "고하나 입니다.",
            3000
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
          style={{ whiteSpace: "pre-line" }}
        />
      </motion.h1>
      {/*scroll down icon*/}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 , delay: 0.5}}
        className="absolute bottom-4 md:bottom-6 text-sm md:text-base md:font-semibold text-white/50 pt-8"
      >
        <span className="my-2 mx-auto w-6 h-12 md:w-8 md:h-16 border-2 border-white/50 rounded-3xl flex">
          <span className="block w-2 h-2 md:w-4 md:h-4 bg-gradient-to-b from-white/20 to-white m-auto rounded-full animate-scrolling"></span>
        </span>
        <span>SCROLL DOWN</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
//text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
