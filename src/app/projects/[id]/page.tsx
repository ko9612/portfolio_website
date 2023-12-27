import { projectData } from "@/app/data/ProjectData";
import { BsArrowLeftShort } from "react-icons/bs";

const ProjectDetail = ({ params }: { params: { id: number } }) => {
  const data = projectData.find((project) => project.id === Number(params.id));

  return (
    <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
      <section className="flex flex-col justify-center items-center bg-white py-10 px-4">
        <div className="flex items-center">
          <button>
            <BsArrowLeftShort className="w-10 h-10 sm:w-16 sm:h-16" />
          </button>
          <h2 className="text-3xl text-nowrap sm:text-4xl lg:text-5xl font-extrabold">
            {data?.title}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
