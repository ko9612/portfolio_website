import Image from "next/image";
import { projectDataType } from "../data/ProjectData";
import { useRouter } from "next/navigation";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";

export const ClickButtonStyle =
  "px-3 py-2 relative rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all overflow-hidden before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white/50 before:duration-700 hover:before:-translate-x-40";

const ProjectCard = ({ data }: { data: projectDataType }) => {
  const router = useRouter();

  const ClickbuttonHandler = (id: number) => {
    router.push(`/projects/${id}`);
  };

  return (
    <article className="group">
      <div className="relative rounded-md shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="front relative">
          <Image
            src={data.thumbnail}
            alt="sample"
            className="h-80 w-80 rounded-md object-cover"
          />
          <HiOutlineCursorArrowRipple className="absolute bottom-3 right-3 w-7 h-7 text-" />
        </div>
        <div className="back border-4 border-white/10 absolute inset-0 h-full w-full p-3 text-white rounded-md bg-black/80 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="text-left">
            <p className="text-xl font-semibold py-1">{data.title}</p>
            <p className="text-[11px] sm:text-sm py-1">{data.description}</p>
            <p className="text-[11px] sm:text-[12px] py-1">{data.period}</p>
            <div className="text-[11px] sm:text-sm py-1">
              <span className="font-semibold border-b-2">Role</span>
              <p className="mt-1 sm:text-[12px]">{data.role}</p>
            </div>
            <div className="text-[11px] sm:text-sm py-1">
              <span className="font-semibold border-b-2">Stacks</span>
              <div className="mt-1 flex flex-wrap sm:text-[12px]">
                {data.stack.map((stackData, i) => (
                  <span key={i} className="px-1">
                    {stackData}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 right-3">
            <button
              className={`${ClickButtonStyle}`}
              onClick={() => ClickbuttonHandler(data.id)}
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
