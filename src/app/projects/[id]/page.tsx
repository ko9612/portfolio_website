"use client";
import { projectData } from "@/data/ProjectData";
import { useRouter } from "next/navigation";
import {
  BsArrowLeftShort,
  BsCalendar2MinusFill,
  BsGithub,
  BsYoutube,
  BsFiletypePpt,
  BsFiletypePdf,
} from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import BackGround from "@/components/BackGround";
import { SiNotion } from "react-icons/si";

const ProjectDetail = ({ params }: { params: { id: number } }) => {
  const router = useRouter();

  const data = projectData.filter(
    (project) => project.id === Number(params.id)
  )[0];

  const backHandler = () => {
    router.back();
  };

  return (
    <>
      <BackGround />
      <div className="relative container mx-auto px-6 md:px-8 max-w-[1240px] min-h-screen bg-[#212121]">
        <section className="relative flex flex-col gap-8 mt-4 py-20 sm:py-28 sm:px-4 text-white">
          <button
            onClick={backHandler}
            className="group absolute top-0 left-0 hover:-left-3 transition-all duration-300"
          >
            <BsArrowLeftShort className="w-10 h-10 sm:w-16 sm:h-16" />
            <span className="text-sm hidden group-hover:block">Back</span>
          </button>
          <section className="grid md:grid-cols-2 gap-8">
            <section className="w-full">
              <Image
                src={data.thumbnail}
                alt="sample"
                className="max-h-96 object-cover"
              />
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                {data.title}
              </h2>
              <p>{data.description}</p>
              <div>
                <span className="bg-pink-500 inline-block rounded-full px-2 py-1 mr-2">
                  {data.division}
                </span>
                <span>{data.componsition}</span>
              </div>
              <div className="flex items-center flex-wrap">
                <BsCalendar2MinusFill className="w-5 h-5 mr-4" />
                <p>{data.period}</p>
              </div>
              <div>
                <span className="font-semibold">Stack</span>
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
                <span className="font-semibold">Role</span>
                <p>{data.role}</p>
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
              <div className="grid grid-cols-2">
                {data.Contribution.total && (
                  <div className="circular-progress relative w-28 h-28 rounded-full bg-gradient-conic">
                    <span className="progress-value">
                      {data.Contribution.total}
                    </span>
                  </div>
                )}
                <div>
                  {data.Contribution.develop && (
                    <div className="bar flex items-center bg-white/20 rounded-full my-3 overflow-hidden justify-between">
                      <div className="w-[30%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
                        <span className="text-sm md:text-base pr-3">
                          {data.Contribution.develop}%
                        </span>
                      </div>
                    </div>
                  )}
                  {data.Contribution.plan && (
                    <div>{data.Contribution.plan}</div>
                  )}
                  {data.Contribution.design && (
                    <div>{data.Contribution.design}</div>
                  )}
                  {data.Contribution.act && <div>{data.Contribution.act}</div>}
                </div>
              </div>
            </section>
          </section>
          <section className="flex flex-col gap-4 border-t-2 border-slate-600 py-5">
            <div>
              <span className="font-semibold text-lg">프로젝트 목표</span>
              <ul className="list-disc pl-6 py-2">
                {data.pusrpose.map((el, i) => (
                  <li className="py-1" key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-lg">담당 업무</span>
              <ul className="list-disc pl-6 py-2">
                {data.myWork.map((el, i) => (
                  <li className="py-1" key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-lg">결과/역량</span>
              <ul className="list-disc pl-6 py-2">
                {data.result.map((el, i) => (
                  <li className="py-1" key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
