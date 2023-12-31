import { projectDataType } from "@/data/ProjectData";
import Link from "next/link";
import {
  BsCalendar2MinusFill,
  BsFiletypePdf,
  BsFiletypePpt,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { barWidth } from "./AboutStacks";
import { motion } from "framer-motion";

const ContributionBar = (value: number, label: string) => (
  <div>
    <span className="text-sm">{label}</span>
    <div className="bar flex items-center h-5 bg-white/20 rounded-full mt-1 mb-2 overflow-hidden justify-between text-sm">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.5 }}
        className={`${barWidth[value]} bg-gradient-to-r ${
          label === "총 기여도"
            ? "from-yellow-500 to-red-500"
            : "from-blue-500 via-purple-500 to-pink-500"
        } rounded-full text-end`}
      >
        <span className="pr-3">{value}%</span>
      </motion.div>
    </div>
  </div>
);

const ProjectDetailIntro = ({ data }: { data: projectDataType }) => {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <span className="bg-pink-500 inline-block rounded-full px-2 py-1 mr-2">
          {data.division}
        </span>
        <p className="text-sm mt-2">{data.componsition}</p>
      </div>
      <div className="flex items-center flex-wrap">
        <BsCalendar2MinusFill className="w-5 h-5 mr-4" />
        <p>{data.period}</p>
      </div>
      <div>
        <span className="font-semibold border-b">Stack</span>
        <div className="text-sm">
          {data.stack.map((list, index) => (
            <span
              className="px-2 py-1 mr-1 mt-2 inline-block rounded-full bg-purple-500"
              key={index}
            >
              {list}
            </span>
          ))}
        </div>
      </div>
      <div>
        <span className="font-semibold border-b">Role</span>
        <p>{data.role}</p>
      </div>
      <div>
        <span className="font-semibold border-b">Contribution</span>
        <div className="flex items-center py-1">
          <div className="flex-1">
            {data.Contribution.total &&
              ContributionBar(data.Contribution.total, "총 기여도")}
            {data.Contribution.act &&
              ContributionBar(data.Contribution.act, "데이터 크롤링/분석")}
            {data.Contribution.develop &&
              ContributionBar(data.Contribution.develop, "Frontend 개발")}
            {data.Contribution.plan &&
              ContributionBar(data.Contribution.plan, "프로젝트 기획")}
            {data.Contribution.design &&
              ContributionBar(data.Contribution.design, "UX/UI Design")}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {data.url.github && (
          <Link href={data.url.github}>
            <BsGithub className="w-7 h-7 hover:text-pink-500 transition-all" />
          </Link>
        )}
        {data.url.deploy && (
          <Link href={data.url.deploy}>
            <TbWorld className="w-8 h-8 hover:text-pink-500 transition-all" />
          </Link>
        )}
        {data.url.notion && (
          <Link href={data.url.notion}>
            <SiNotion className="w-7 h-7 hover:text-pink-500 transition-all" />
          </Link>
        )}
        {data.url.video && (
          <Link href={data.url.video}>
            <BsYoutube className="w-7 h-7 hover:text-pink-500 transition-all" />
          </Link>
        )}
        {data.url.ppt && (
          <Link href={data.url.ppt}>
            <BsFiletypePpt className="w-8 h-8 hover:text-pink-500 transition-all" />
          </Link>
        )}
        {data.url.pdf && (
          <Link href={data.url.pdf}>
            <BsFiletypePdf className="w-8 h-8 hover:text-pink-500 transition-all" />
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailIntro;
