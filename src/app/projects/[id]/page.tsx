"use client";
import { projectData } from "@/data/ProjectData";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import BackGround from "@/components/BackGround";
import ProjectDetailDescription from "@/components/ProjectDetailDescription";
import ProjectDetailIntro from "@/components/ProjectDetailIntro";
import ProjectCarousel from "@/components/ProjectCarousel";

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
      <div className="relative container mx-auto px-8 max-w-[1240px] min-h-screen bg-[#212121]">
        <section className="relative flex flex-col gap-8 mt-4 sm:px-4 text-white py-10">
          <button
            onClick={backHandler}
            className="group absolute top-0 left-0 hover:-left-3 transition-all duration-300"
          >
            <BsArrowLeftShort className="w-10 h-10 sm:w-16 sm:h-16" />
            <span className="text-sm hidden group-hover:block">Back</span>
          </button>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              {data.title}
            </h2>
            <p className="py-4 text-sm sm:text-base">{data.description}</p>
          </div>
          <section className="grid lg:grid-cols-2 gap-8 px-0 sm:px-8">
            <ProjectCarousel images={data.slideImg} />
            <ProjectDetailIntro data={data} />
          </section>
          <ProjectDetailDescription data={data} />
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
