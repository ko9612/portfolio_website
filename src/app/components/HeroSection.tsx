"use client";
import { TypeAnimation } from "react-type-animation";
import BackGround from "./BackGround";

const HeroSection = () => {
  return (
    <>
      <BackGround />
      <section className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-pretty sm:text-5xl lg:text-6xl font-extrabold text-white">
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
      </section>
    </>
  );
};

export default HeroSection;
//text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
