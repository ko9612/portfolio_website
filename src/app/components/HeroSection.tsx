"use client";
import { TypeAnimation } from "react-type-animation";
import BackGround from "./BackGround";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative">
      <BackGround />
      <h1 className="a1 text-4xl text-pretty sm:text-5xl lg:text-6xl font-extrabold text-white">
        <TypeAnimation
          sequence={[
            "안녕하세요.",
            1000,
            "사용자의 눈으로 보는 ",
            1000,
            `Frontend Developer\n고하나 입니다.`,
            3000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
          style={{ whiteSpace: "pre-line" }}
        />
      </h1>
      {/*scroll down icon*/}
      <div className="container_mouse absolute bottom-4 md:bottom-6 text-sm md:text-base md:font-semibold text-white/50 pt-8">
        <span className="mouse-btn my-2 mx-auto w-6 h-12 md:w-8 md:h-16 border-2 border-white/50 rounded-3xl flex">
          <span className="mouse-scroll block w-2 h-2 md:w-4 md:h-4 bg-gradient-to-b from-white/20 to-white m-auto rounded-full animate-scrolling"></span>
        </span>
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
};

export default HeroSection;
//text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
