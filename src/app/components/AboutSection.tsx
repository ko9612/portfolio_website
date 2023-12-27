"use client";
import Image from "next/image";
import resumeImg from "/public/resumeImg.png";
import { AboutArr } from "../data/AboutArray";
import { useState } from "react";
import AboutTabButton from "./AboutTabButton";
import AboutStacks from "./AboutStacks";
import AboutEducation from "./AboutEducation";

const AboutSection = () => {
  const [tab, setTab] = useState("stacks");

  const handleTabChange = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center relative bg-[#121212] mt-40 py-20 px-4"
    >
      <h2 className="text-4xl text-nowrap sm:text-5xl lg:text-6xl font-extrabold text-white">
        About
      </h2>
      <ul className="about_me text-white grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-20">
        {AboutArr.map((list) => (
          <li key={list.alt}>
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mx-auto">
              <Image
                src={list.icon}
                alt={list.alt}
                className="w-full h-full object-fill p-5 md:p-7 "
              />
            </div>
            <p className="text-[11px] sm:text-sm lg:text-base py-4 text-center">
              {list.description}
            </p>
          </li>
        ))}
      </ul>
      <article className="introduce sm:grid sm:grid-cols-2 gap-16 lg:gap-28 xl:gap-40">
        <div className="leftSide">
          <div className="rounded-full p-2 bg-gradient-to-br w-48 sm:w-60 from-blue-500 via-purple-500 to-pink-500 mx-auto ">
            <Image
              src={resumeImg}
              alt="resumeImage"
              className="rounded-full w-full object-fill"
            />
          </div>
          <div className="text-white text-[11px] sm:text-sm lg:text-base py-8">
            <p className="py-2">
              컴퓨터 공학을 전공하면서 이론 및 프로그래밍에 대한 학습과 함께,
              부전공으로 디자인을 선택하면서 UI/UX에 대한 이해를 높였습니다. 이
              과정에서 자연스럽게 프론트엔드 개발에 대한 흥미를 가질 수 있었고,
              대학 졸업 후, 프론트엔드 개발을 더 깊이 공부하고자 웹
              개발(프론트엔드) 부트캠프를 수료했습니다.
            </p>
            <p className="py-2">
              저의 차별점은 다양한 분야에 대한 호기심과 도전정신 입니다. 덕분에
              개발, 기획, 디자인 등 다양한 역할로 프로젝트에 참여함으로써,
              다양한 시각에서 프로젝트를 이해하는 역량을 키울 수 있었습니다.
              이러한 호기심과 도전정신을 기반으로, 끊임없이 학습하며 프론트엔드
              개발자로서의 성장을 도모하고 싶습니다.
            </p>
          </div>
        </div>
        <div className="rightSide mt-4 sm:mt-0">
          <div className="flex flex-row justify-center">
            <AboutTabButton
              selectTab={() => handleTabChange("stacks")}
              active={tab === "stacks"}
            >
              Stacks
            </AboutTabButton>
            <AboutTabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </AboutTabButton>
          </div>
          <div className="mt-8 text-white">
            {tab === "stacks" ? <AboutStacks /> : <AboutEducation />}
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
